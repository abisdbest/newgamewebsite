/**
 * Blooket1 Full API (Cloudflare Worker + D1 Database)
 * Features:
 * - Popular Games Counter & Track Play (game_plays)
 * - Community Chat (chat_messages & chat_users)
 * - Username Uniqueness & Lockout Protection (user_token)
 * - Rename Propagation (updates past messages to new username)
 * - Cross-Browser Device & IP Fingerprint Blocking (/chat/ban, /chat/unban, /chat/banned)
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

function getClientIp(request) {
  return request.headers.get("cf-connecting-ip") ||
         request.headers.get("x-real-ip") ||
         request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
         "127.0.0.1";
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
        user_token TEXT,
        fingerprint TEXT,
        ip TEXT
      )
    `),
    db.prepare(`
      CREATE TABLE IF NOT EXISTS chat_users (
        username TEXT COLLATE NOCASE PRIMARY KEY,
        user_token TEXT NOT NULL,
        fingerprint TEXT,
        ip TEXT,
        is_banned INTEGER DEFAULT 0,
        banned_reason TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )
    `),
    db.prepare(`
      CREATE TABLE IF NOT EXISTS banned_entities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        value TEXT COLLATE NOCASE NOT NULL,
        reason TEXT,
        banned_by TEXT,
        banned_at INTEGER NOT NULL
      )
    `)
  ]);

  // Safe non-destructive column migrations in case tables were created in earlier versions
  const migrations = [
    `ALTER TABLE chat_messages ADD COLUMN user_token TEXT`,
    `ALTER TABLE chat_messages ADD COLUMN fingerprint TEXT`,
    `ALTER TABLE chat_messages ADD COLUMN hw_profile TEXT`,
    `ALTER TABLE chat_messages ADD COLUMN ip TEXT`,
    `ALTER TABLE chat_users ADD COLUMN fingerprint TEXT`,
    `ALTER TABLE chat_users ADD COLUMN hw_profile TEXT`,
    `ALTER TABLE chat_users ADD COLUMN ip TEXT`,
    `ALTER TABLE chat_users ADD COLUMN is_banned INTEGER DEFAULT 0`,
    `ALTER TABLE chat_users ADD COLUMN banned_reason TEXT`
  ];
  for (const sql of migrations) {
    try {
      await db.prepare(sql).run();
    } catch(e) {
      // Column already exists, safe to ignore
    }
  }
}

async function checkIsBanned(db, { username, userToken, fingerprint, hwProfile, ip }) {
  try {
    const u = username ? String(username).toLowerCase().trim() : "";
    const t = userToken ? String(userToken).trim() : "";
    const fp = fingerprint ? String(fingerprint).trim() : "";
    const hw = hwProfile ? String(hwProfile).trim() : "";
    const clientIp = ip ? String(ip).trim() : "";

    const banned = await db.prepare(`
      SELECT type, value, reason FROM banned_entities
      WHERE (type = 'username' AND value = ?1 COLLATE NOCASE)
         OR (?2 != '' AND type = 'user_token' AND value = ?2)
         OR (?3 != '' AND type = 'fingerprint' AND value = ?3)
         OR (?4 != '' AND type = 'hw_profile' AND value = ?4)
         OR (?5 != '' AND type = 'ip' AND value = ?5)
      LIMIT 1
    `).bind(u, t, fp, hw, clientIp).first();

    return banned || null;
  } catch (err) {
    console.error("checkIsBanned error:", err);
    return null;
  }
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const clientIp = getClientIp(request);
    const ADMIN_KEY = env.ADMIN_KEY || "admin123";

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

    // 4. SEND CHAT MESSAGE (Enforces Fingerprint & IP Ban Checks)
    if (request.method === "POST" && (url.pathname === "/chat/send" || url.pathname === "/send" || url.pathname === "/message")) {
      try {
        await ensureChatTables(env.DB);
        const body = await request.json();
        const { sender, text, userToken, fingerprint, hwProfile } = body;
        const cleanSender = cleanText(String(sender || "Anonymous").slice(0, 20));
        const cleanMsg = cleanText(String(text || "").slice(0, 300));
        const token = String(userToken || "").trim() || "anonymous";
        const fp = String(fingerprint || "").trim().slice(0, 100);
        const hw = String(hwProfile || "").trim().slice(0, 150);

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

        // CHECK IF SENDER, USER TOKEN, HARDWARE FINGERPRINT, HW PROFILE, OR IP IS BANNED
        const banMatch = await checkIsBanned(env.DB, {
          username: cleanSender,
          userToken: token,
          fingerprint: fp,
          hwProfile: hw,
          ip: clientIp
        });

        if (banMatch) {
          return new Response(JSON.stringify({
            error: "You are blocked from chatting on Blooket1 across all browsers.",
            reason: banMatch.reason || "Violation of community rules"
          }), {
            status: 403,
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

        // Register or refresh ownership of this username with fingerprint, hw_profile & IP
        await env.DB.prepare(
          `INSERT INTO chat_users (username, user_token, fingerprint, hw_profile, ip, created_at, updated_at)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?6)
           ON CONFLICT(username) DO UPDATE SET
             updated_at = ?6,
             user_token = ?2,
             fingerprint = COALESCE(NULLIF(?3, ''), fingerprint),
             hw_profile = COALESCE(NULLIF(?4, ''), hw_profile),
             ip = COALESCE(NULLIF(?5, ''), ip)`
        ).bind(cleanSender, token, fp, hw, clientIp, now).run();

        // Insert message with device fingerprint, hw_profile and IP
        const insertRes = await env.DB.prepare(
          `INSERT INTO chat_messages (sender, text, timestamp, user_token, fingerprint, hw_profile, ip)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`
        ).bind(cleanSender, cleanMsg, now, token, fp, hw, clientIp).run();

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
        const body = await request.json();
        const { oldName, newName, userToken, fingerprint, hwProfile } = body;
        const cleanOld = cleanText(String(oldName || "").slice(0, 20));
        const cleanNew = cleanText(String(newName || "").slice(0, 20));
        const token = String(userToken || "").trim();
        const fp = String(fingerprint || "").trim().slice(0, 100);
        const hw = String(hwProfile || "").trim().slice(0, 150);

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

        // CHECK BAN
        const banMatch = await checkIsBanned(env.DB, {
          username: cleanOld,
          userToken: token,
          fingerprint: fp,
          hwProfile: hw,
          ip: clientIp
        });

        if (banMatch) {
          return new Response(JSON.stringify({
            error: "You are blocked from chatting on Blooket1.",
            reason: banMatch.reason || "Banned by administrator"
          }), {
            status: 403,
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

        // Claim new username with fingerprint, hw_profile & IP
        await env.DB.prepare(
          `INSERT INTO chat_users (username, user_token, fingerprint, hw_profile, ip, created_at, updated_at)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?6)
           ON CONFLICT(username) DO UPDATE SET
             updated_at = ?6,
             user_token = ?2,
             fingerprint = COALESCE(NULLIF(?3, ''), fingerprint),
             hw_profile = COALESCE(NULLIF(?4, ''), hw_profile),
             ip = COALESCE(NULLIF(?5, ''), ip)`
        ).bind(cleanNew, token, fp, hw, clientIp, now).run();

        // Remove old username registration if it was owned by this token
        if (cleanOld) {
          await env.DB.prepare(
            `DELETE FROM chat_users WHERE username = ?1 AND user_token = ?2`
          ).bind(cleanOld, token).run();

          // Update ALL past messages from oldName to newName
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

    // 6. BLOCK / BAN USER (Across All Browsers & Devices)
    if (request.method === "POST" && (url.pathname === "/chat/ban" || url.pathname === "/ban")) {
      try {
        await ensureChatTables(env.DB);
        const body = await request.json();
        const { username, adminKey, reason } = body;

        if (!adminKey || adminKey !== ADMIN_KEY) {
          return new Response(JSON.stringify({ error: "Unauthorized: Invalid admin key" }), {
            status: 401,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const targetUser = cleanText(String(username || "").trim());
        if (!targetUser) {
          return new Response(JSON.stringify({ error: "Username to block is required" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const banReason = cleanText(String(reason || "Violating chat guidelines"));
        const now = Date.now();

        // Look up target user's registered fingerprint, hw_profile, IP, and token
        const userRow = await env.DB.prepare(
          `SELECT username, user_token, fingerprint, hw_profile, ip FROM chat_users WHERE username = ?1 COLLATE NOCASE`
        ).bind(targetUser).first();

        // Also check their recent messages in case fingerprint was logged there
        const msgRow = await env.DB.prepare(
          `SELECT user_token, fingerprint, hw_profile, ip FROM chat_messages WHERE sender = ?1 COLLATE NOCASE ORDER BY id DESC LIMIT 1`
        ).bind(targetUser).first();

        const token = userRow?.user_token || msgRow?.user_token || "";
        const fp = userRow?.fingerprint || msgRow?.fingerprint || "";
        const hw = userRow?.hw_profile || msgRow?.hw_profile || "";
        const ip = userRow?.ip || msgRow?.ip || "";

        const batchStatements = [
          // Ban by username
          env.DB.prepare(
            `INSERT INTO banned_entities (type, value, reason, banned_by, banned_at) VALUES ('username', ?1, ?2, 'admin', ?3)`
          ).bind(targetUser, banReason, now),
          // Mark chat_users table
          env.DB.prepare(
            `UPDATE chat_users SET is_banned = 1, banned_reason = ?1 WHERE username = ?2 COLLATE NOCASE`
          ).bind(banReason, targetUser),
          // Clean up their chat messages from the feed
          env.DB.prepare(
            `DELETE FROM chat_messages WHERE sender = ?1 COLLATE NOCASE`
          ).bind(targetUser)
        ];

        // Ban hardware device fingerprint
        if (fp) {
          batchStatements.push(
            env.DB.prepare(
              `INSERT INTO banned_entities (type, value, reason, banned_by, banned_at) VALUES ('fingerprint', ?1, ?2, 'admin', ?3)`
            ).bind(fp, banReason, now)
          );
        }

        // Ban cross-browser hardware profile (blocks across Chrome, Safari, Edge, Firefox!)
        if (hw) {
          batchStatements.push(
            env.DB.prepare(
              `INSERT INTO banned_entities (type, value, reason, banned_by, banned_at) VALUES ('hw_profile', ?1, ?2, 'admin', ?3)`
            ).bind(hw, banReason, now)
          );
        }

        // Ban IP address (blocks user across network and all devices/tabs)
        if (ip) {
          batchStatements.push(
            env.DB.prepare(
              `INSERT INTO banned_entities (type, value, reason, banned_by, banned_at) VALUES ('ip', ?1, ?2, 'admin', ?3)`
            ).bind(ip, banReason, now)
          );
        }

        // Ban user token
        if (token) {
          batchStatements.push(
            env.DB.prepare(
              `INSERT INTO banned_entities (type, value, reason, banned_by, banned_at) VALUES ('user_token', ?1, ?2, 'admin', ?3)`
            ).bind(token, banReason, now)
          );
        }

        await env.DB.batch(batchStatements);

        return new Response(JSON.stringify({
          success: true,
          banned: targetUser,
          blockedAcrossBrowsers: {
            username: true,
            deviceFingerprint: !!fp,
            crossBrowserHwProfile: !!hw,
            ipAddress: !!ip,
            userToken: !!token
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

    // 7. UNBAN / UNBLOCK USER
    if (request.method === "POST" && (url.pathname === "/chat/unban" || url.pathname === "/unban")) {
      try {
        await ensureChatTables(env.DB);
        const body = await request.json();
        const { username, adminKey, value, type } = body;

        if (!adminKey || adminKey !== ADMIN_KEY) {
          return new Response(JSON.stringify({ error: "Unauthorized: Invalid admin key" }), {
            status: 401,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const targetUser = cleanText(String(username || "").trim());
        const targetValue = String(value || "").trim();
        const targetType = String(type || "").trim();

        if (!targetUser && !targetValue) {
          return new Response(JSON.stringify({ error: "Username or entity value is required" }), {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        const batchStatements = [];

        if (targetValue) {
          batchStatements.push(
            env.DB.prepare(`DELETE FROM banned_entities WHERE value = ?1`).bind(targetValue)
          );
          if (targetType === 'username' || (!targetType && targetUser)) {
            batchStatements.push(
              env.DB.prepare(`UPDATE chat_users SET is_banned = 0, banned_reason = NULL WHERE username = ?1 COLLATE NOCASE`).bind(targetValue)
            );
          }
        }

        if (targetUser && targetUser !== targetValue) {
          const userRow = await env.DB.prepare(
            `SELECT user_token, fingerprint, hw_profile, ip FROM chat_users WHERE username = ?1 COLLATE NOCASE`
          ).bind(targetUser).first();

          const fp = userRow?.fingerprint || "";
          const hw = userRow?.hw_profile || "";
          const ip = userRow?.ip || "";
          const token = userRow?.user_token || "";

          batchStatements.push(
            env.DB.prepare(`DELETE FROM banned_entities WHERE type = 'username' AND value = ?1 COLLATE NOCASE`).bind(targetUser),
            env.DB.prepare(`UPDATE chat_users SET is_banned = 0, banned_reason = NULL WHERE username = ?1 COLLATE NOCASE`).bind(targetUser)
          );

          if (fp) batchStatements.push(env.DB.prepare(`DELETE FROM banned_entities WHERE type = 'fingerprint' AND value = ?1`).bind(fp));
          if (hw) batchStatements.push(env.DB.prepare(`DELETE FROM banned_entities WHERE type = 'hw_profile' AND value = ?1`).bind(hw));
          if (ip) batchStatements.push(env.DB.prepare(`DELETE FROM banned_entities WHERE type = 'ip' AND value = ?1`).bind(ip));
          if (token) batchStatements.push(env.DB.prepare(`DELETE FROM banned_entities WHERE type = 'user_token' AND value = ?1`).bind(token));
        }

        if (batchStatements.length > 0) {
          await env.DB.batch(batchStatements);
        }

        return new Response(JSON.stringify({ success: true, unbanned: targetUser || targetValue }), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    // 8. LIST BANNED ENTITIES (For Moderator Dashboard)
    if (request.method === "GET" && (url.pathname === "/chat/banned" || url.pathname === "/banned")) {
      try {
        const key = url.searchParams.get("adminKey");
        if (!key || key !== ADMIN_KEY) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
          });
        }

        await ensureChatTables(env.DB);
        const { results } = await env.DB.prepare(
          `SELECT type, value, reason, banned_at FROM banned_entities ORDER BY id DESC LIMIT 100`
        ).all();

        return new Response(JSON.stringify(results || []), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify([]), {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
        });
      }
    }

    return new Response("Not found", { status: 404, headers: CORS_HEADERS });
  }
};
