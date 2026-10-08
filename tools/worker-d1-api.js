/**
 * Blooket1 Full API (Cloudflare Worker + D1 Database)
 * Features:
 * - Popular Games Counter & Track Play (game_plays)
 * - Community Chat (chat_messages & chat_users)
 * - Username Uniqueness & Lockout Protection (user_token)
 * - Rename Propagation (updates past messages to new username)
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

const SEED_GAMES = [
  { name: "slope", clicks: 1540 },
  { name: "subway surfers", clicks: 1420 },
  { name: "retro bowl", clicks: 1280 },
  { name: "cookie clicker", clicks: 1150 },
  { name: "geometry dash lite", clicks: 1090 },
  { name: "basket random", clicks: 980 },
  { name: "minecraft", clicks: 940 },
  { name: "duck life 4", clicks: 890 },
  { name: "space waves", clicks: 830 },
  { name: "monkey mart", clicks: 790 },
  { name: "snow rider 3d", clicks: 740 },
  { name: "rooftop snipers", clicks: 690 },
  { name: "crossy road", clicks: 650 }
];

function cleanText(text) {
  return String(text || "")
    .replace(/[<>]/g, "")
    .trim();
}

async function ensureChatTables(db) {
  await db.batch([
    db.prepare(`
      CREATE TABLE IF NOT EXISTS game_plays (
        name TEXT PRIMARY KEY,
        clicks INTEGER DEFAULT 0
      )
    `),
    db.prepare(`
      CREATE TABLE IF NOT EXISTS chat_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender TEXT NOT NULL,
        text TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        user_token TEXT
      )
    `),
    db.prepare(`
      CREATE TABLE IF NOT EXISTS chat_users (
        username TEXT COLLATE NOCASE PRIMARY KEY,
        user_token TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `)
  ]);
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    // Root check
    if (url.pathname === "/" || url.pathname === "") {
      return new Response("Blooket1 API Online", {
        headers: { ...CORS_HEADERS, "Content-Type": "text/plain" }
      });
    }

    // 1. POPULAR GAMES
    if (request.method === "GET" && url.pathname === "/popular-games") {
      try {
        const { results } = await env.DB.prepare(
          `SELECT name, clicks FROM game_plays ORDER BY clicks DESC LIMIT 50`
        ).all();

        const data = (results && results.length > 0) ? results : SEED_GAMES;
        return new Response(JSON.stringify(data), {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=30"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify(SEED_GAMES), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    // 2. TRACK PLAY
    if (request.method === "POST" && url.pathname === "/track-play") {
      try {
        const body = await request.json();
        const game = String(body.game || body.name || "").toLowerCase().trim();
        if (!game) {
          return new Response(JSON.stringify({ error: "Game name required" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        await env.DB.prepare(
          `INSERT INTO game_plays (name, clicks) VALUES (?1, 1)
           ON CONFLICT(name) DO UPDATE SET clicks = clicks + 1`
        ).bind(game).run();

        return new Response(JSON.stringify({ success: true, game }), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    // 3. GET CHAT HISTORY
    if (request.method === "GET" && (url.pathname === "/chat/history" || url.pathname === "/history")) {
      try {
        await ensureChatTables(env.DB);
        const { results } = await env.DB.prepare(
          `SELECT id, sender, text, timestamp FROM chat_messages ORDER BY id DESC LIMIT 80`
        ).all();

        const messages = (results || []).reverse();
        return new Response(JSON.stringify(messages), {
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, must-revalidate"
          }
        });
      } catch (err) {
        return new Response(JSON.stringify([]), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    // 4. SEND CHAT MESSAGE
    if (request.method === "POST" && (url.pathname === "/chat/send" || url.pathname === "/send" || url.pathname === "/message")) {
      try {
        await ensureChatTables(env.DB);
        const { sender, text, userToken } = await request.json();
        const cleanSender = cleanText(String(sender || "Anonymous").slice(0, 20));
        const cleanMsg = cleanText(String(text || "").slice(0, 300));
        const token = String(userToken || "").trim() || "anonymous";

        if (!cleanMsg) {
          return new Response(JSON.stringify({ error: "Message text cannot be empty" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        if (!cleanSender || cleanSender === "Anonymous") {
          return new Response(JSON.stringify({ error: "Please choose a username to chat" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        // Check if username is already registered to a different userToken
        const existing = await env.DB.prepare(
          `SELECT user_token FROM chat_users WHERE username = ?1 COLLATE NOCASE`
        ).bind(cleanSender).first();

        if (existing && existing.user_token && existing.user_token !== token) {
          return new Response(JSON.stringify({
            error: `The username "${cleanSender}" is already taken by another player. Please choose a different name.`
          }), {
            status: 409,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const now = Date.now();

        // Register or refresh ownership of this username
        await env.DB.prepare(
          `INSERT INTO chat_users (username, user_token, created_at, updated_at)
           VALUES (?1, ?2, ?3, ?3)
           ON CONFLICT(username) DO UPDATE SET updated_at = ?3, user_token = ?2`
        ).bind(cleanSender, token, now).run();

        // Insert message
        const insertRes = await env.DB.prepare(
          `INSERT INTO chat_messages (sender, text, timestamp, user_token) VALUES (?1, ?2, ?3, ?4)`
        ).bind(cleanSender, cleanMsg, now, token).run();

        const newId = insertRes.meta?.last_row_id || now;

        return new Response(JSON.stringify({
          success: true,
          message: {
            id: newId,
            sender: cleanSender,
            text: cleanMsg,
            timestamp: now
          }
        }), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    // 5. RENAME / CHANGE USERNAME (Propagates to all past messages)
    if (request.method === "POST" && (url.pathname === "/chat/rename" || url.pathname === "/rename")) {
      try {
        await ensureChatTables(env.DB);
        const { oldName, newName, userToken } = await request.json();
        const cleanOld = cleanText(String(oldName || "").slice(0, 20));
        const cleanNew = cleanText(String(newName || "").slice(0, 20));
        const token = String(userToken || "").trim();

        if (!cleanNew) {
          return new Response(JSON.stringify({ error: "New username cannot be empty" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        if (cleanNew.length < 2) {
          return new Response(JSON.stringify({ error: "Username must be at least 2 characters long" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        if (cleanOld.toLowerCase() === cleanNew.toLowerCase()) {
          return new Response(JSON.stringify({ success: true, message: "Username unchanged" }), {
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        // Check if new name is already owned by someone else
        const existing = await env.DB.prepare(
          `SELECT user_token FROM chat_users WHERE username = ?1 COLLATE NOCASE`
        ).bind(cleanNew).first();

        if (existing && existing.user_token && existing.user_token !== token) {
          return new Response(JSON.stringify({
            error: `The username "${cleanNew}" is already taken by another player. Please choose a different name.`
          }), {
            status: 409,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const now = Date.now();

        // 1. Claim new username
        await env.DB.prepare(
          `INSERT INTO chat_users (username, user_token, created_at, updated_at)
           VALUES (?1, ?2, ?3, ?3)
           ON CONFLICT(username) DO UPDATE SET updated_at = ?3, user_token = ?2`
        ).bind(cleanNew, token, now).run();

        // 2. Remove old username registration if it was owned by this token
        if (cleanOld) {
          await env.DB.prepare(
            `DELETE FROM chat_users WHERE username = ?1 AND user_token = ?2`
          ).bind(cleanOld, token).run();

          // 3. Update ALL past messages from oldName to newName!
          await env.DB.prepare(
            `UPDATE chat_messages SET sender = ?1 WHERE sender = ?2 COLLATE NOCASE`
          ).bind(cleanNew, cleanOld).run();
        }

        return new Response(JSON.stringify({
          success: true,
          oldName: cleanOld,
          newName: cleanNew
        }), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    return new Response("Not found", { status: 404, headers: CORS_HEADERS });
  }
};
