/**
 * ============================================================================
 * BLOOKET1 — OPTIMIZED CLOUDFLARE MIRROR & STEALTH ROUTER WORKER (v2.7)
 * ============================================================================
 * Fixes 5 critical SEO & quota bugs from the legacy Worker:
 *
 * 1. FIXES SITEMAP HIJACK: Passes `/sitemap.xml`, `/robots.txt`, `/llms.txt`,
 *    and `/llms-full.txt` straight through from the origin instead of
 *    generating 1,200+ duplicate mirror URLs without trailing slashes.
 * 2. FIXES CANONICAL TAG CONFLICT: No longer prepends fake `<link rel="canonical">`
 *    tags pointing to `/drive.google.com/` or `educational.blooket1.com`.
 *    Instead, mirror routes keep `<link rel="canonical" href="https://blooket1.com/..." />`
 *    and send `X-Robots-Tag: noindex, nofollow` so students can play on mirrors
 *    while Google consolidates 100% of ranking power onto https://blooket1.com/.
 * 3. FIXES 301 DOUBLE-FETCH LOOP: Fetches directly from `https://blooket1.com`
 *    (or origin with edge caching) instead of sending `Host: abisdbest.github.io`
 *    which triggered a 301 redirect back to `blooket1.com` on every request!
 * 4. FIXES KV & WORKER QUOTA BURNOUT: Only increments KV user counts on actual
 *    HTML page navigations (`Sec-Fetch-Mode: navigate` / `Accept: text/html`),
 *    and caches static assets at the Cloudflare edge (`cacheEverything: true`).
 * 5. ENFORCES WWW -> NON-WWW 301 REDIRECT: Redirects `www.blooket1.com` to
 *    `https://blooket1.com` so search equity isn't split across two hosts.
 * ============================================================================
 */

const MAIN_DOMAIN = "blooket1.com";

// Active stealth mirror URLs (subdomain and path-based)
const EDUCATIONAL_URLS = [
  "blooket1.com/educational",
  "educational.blooket1.com",
  "blooket1.com/drive.google.com",
  "blooket1.com/edu-platform",
  "blooket1.com/learning-hub",
  "blooket1.com/academic",
  "blooket1.com/school",
  "blooket1.com/docs.google.com",
  "blooket1.com/classroom.google.com"
];

const EDUCATIONAL_URLS_API_PATH = "/api/educational-urls";

// Static asset extensions that should be cached aggressively at the edge
const STATIC_ASSET_REGEX = /\.(?:css|js|mjs|webp|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|otf|mp3|ogg|wav|wasm|data|unityweb|json|xml|txt|br|gz)$/i;

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;
  const originalUrl = new URL(request.url);

  // 1. Canonicalize www.blooket1.com -> blooket1.com (301 Permanent Redirect)
  if (originalUrl.hostname === `www.${MAIN_DOMAIN}`) {
    const redirectUrl = new URL(originalUrl.toString());
    redirectUrl.hostname = MAIN_DOMAIN;
    return Response.redirect(redirectUrl.toString(), 301);
  }

  // 2. Handle Preflight (OPTIONS) requests for Educational URLs API
  if (originalUrl.pathname === EDUCATIONAL_URLS_API_PATH && request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // 3. Handle GET Request for Educational URLs JSON
  if (originalUrl.pathname === EDUCATIONAL_URLS_API_PATH && request.method === "GET") {
    try {
      const educationalUrlsWithCounts = [];
      for (const eduUrl of EDUCATIONAL_URLS) {
        let count = 0;
        if (typeof EDUCATIONAL_USER_COUNTS !== "undefined") {
          const countStr = await EDUCATIONAL_USER_COUNTS.get(eduUrl);
          count = countStr ? parseInt(countStr, 10) : 0;
        }
        educationalUrlsWithCounts.push({ url: eduUrl, users: count });
      }
      return new Response(JSON.stringify(educationalUrlsWithCounts, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to retrieve educational URL data" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  }

  // 4. Detect whether this request is using one of the educational/stealth mirrors
  let isEducationalRoute = false;
  let prefixToStrip = "";
  let prefixToMaintain = "";
  let matchedEducationalUrlKey = null;

  for (const urlConfig of EDUCATIONAL_URLS) {
    if (urlConfig.includes("/")) {
      const [hostPart, pathPart] = urlConfig.split("/");
      const fullPrefix = `/${pathPart}`;

      if (originalUrl.hostname === hostPart && (originalUrl.pathname === fullPrefix || originalUrl.pathname.startsWith(fullPrefix + "/"))) {
        isEducationalRoute = true;
        prefixToStrip = fullPrefix;
        prefixToMaintain = fullPrefix;
        matchedEducationalUrlKey = urlConfig;

        if (originalUrl.pathname === fullPrefix && !originalUrl.search && !originalUrl.hash) {
          const redirectUrl = new URL(originalUrl.toString());
          redirectUrl.pathname = fullPrefix + "/";
          return Response.redirect(redirectUrl.toString(), 301);
        }
        break;
      }
    } else if (originalUrl.hostname === urlConfig) {
      isEducationalRoute = true;
      prefixToMaintain = "";
      matchedEducationalUrlKey = urlConfig;
      break;
    }
  }

  // 5. FAST PATH: If this is normal traffic on blooket1.com (not a mirror route),
  // pass straight through to the origin with edge caching so we don't waste CPU/HTMLRewriter!
  if (!isEducationalRoute) {
    const isStatic = STATIC_ASSET_REGEX.test(originalUrl.pathname);
    return fetch(request, {
      cf: isStatic
        ? { cacheEverything: true, cacheTtl: 86400 }
        : { cacheTtl: 600 },
    });
  }

  // 6. For Mirror Routes: Only increment KV counter once per real HTML page navigation
  // (Prevents burning 50 KV writes per pageview on images, CSS, JS, and WebGL files!)
  const acceptHeader = request.headers.get("Accept") || "";
  const isHtmlNav = request.method === "GET" && acceptHeader.includes("text/html") && !STATIC_ASSET_REGEX.test(originalUrl.pathname);
  if (isEducationalRoute && matchedEducationalUrlKey && isHtmlNav) {
    event.waitUntil(incrementEducationalUserCount(matchedEducationalUrlKey));
  }

  // 7. Compute clean target path on main domain
  let targetPath = originalUrl.pathname;
  if (prefixToStrip && targetPath.startsWith(prefixToStrip)) {
    targetPath = targetPath.substring(prefixToStrip.length) || "/";
  }
  if (!targetPath.startsWith("/")) targetPath = "/" + targetPath;
  if (targetPath === "//") targetPath = "/";

  const fetchUrl = new URL(`https://${MAIN_DOMAIN}${targetPath}${originalUrl.search}`);
  const isStaticAsset = STATIC_ASSET_REGEX.test(targetPath);

  const originResponse = await fetch(fetchUrl.toString(), {
    method: request.method,
    headers: request.headers,
    redirect: "follow",
    cf: isStaticAsset
      ? { cacheEverything: true, cacheTtl: 86400 }
      : { cacheTtl: 600 },
  });

  // 8. Rewrite root-relative links on mirror HTML pages, keep canonical pointing to blooket1.com,
  // and add X-Robots-Tag: noindex so mirrors don't cause duplicate-content penalties in Google!
  if (
    originResponse.ok &&
    (originResponse.headers.get("Content-Type") || "").includes("text/html")
  ) {
    const modifiedResponse = new Response(originResponse.body, originResponse);
    modifiedResponse.headers.delete("Content-Security-Policy");
    modifiedResponse.headers.delete("Content-Security-Policy-Report-Only");
    modifiedResponse.headers.delete("X-Frame-Options");
    // Prevent search engines from indexing stealth mirrors as duplicate content
    modifiedResponse.headers.set("X-Robots-Tag", "noindex, nofollow");

    if (prefixToMaintain) {
      const rewriter = new HTMLRewriter()
        .on("a[href]", new LinkRewriter(prefixToMaintain))
        .on("link[href]", new LinkRewriter(prefixToMaintain))
        .on("script[src]", new LinkRewriter(prefixToMaintain))
        .on("img[src]", new LinkRewriter(prefixToMaintain))
        .on("form[action]", new LinkRewriter(prefixToMaintain));
      return rewriter.transform(modifiedResponse);
    }

    return modifiedResponse;
  }

  return originResponse;
}

async function incrementEducationalUserCount(educationalUrlKey) {
  if (typeof EDUCATIONAL_USER_COUNTS === "undefined") return;
  try {
    // Sample 1-in-10 navigations (+10) to reduce KV write operations by 90%
    if (Math.random() > 0.1) return;
    const countStr = await EDUCATIONAL_USER_COUNTS.get(educationalUrlKey);
    const count = (countStr ? parseInt(countStr, 10) : 0) + 10;
    await EDUCATIONAL_USER_COUNTS.put(educationalUrlKey, count.toString());
  } catch (e) {
    // Ignore KV quota errors gracefully
  }
}

class LinkRewriter {
  constructor(prefixToMaintain) {
    this.prefixToMaintain = prefixToMaintain;
  }

  element(element) {
    // Never rewrite <link rel="canonical"> — it must always point to https://blooket1.com/...
    if (element.tagName === "link" && element.getAttribute("rel") === "canonical") {
      return;
    }

    let attributeName = "href";
    if (element.tagName === "script" || element.tagName === "img") {
      attributeName = "src";
    } else if (element.tagName === "form") {
      attributeName = "action";
    }

    const originalLink = element.getAttribute(attributeName);
    if (!originalLink) return;

    if (
      originalLink.startsWith("http:") ||
      originalLink.startsWith("https:") ||
      originalLink.startsWith("//") ||
      originalLink.startsWith("data:") ||
      originalLink.startsWith("#")
    ) {
      return;
    }

    if (originalLink.startsWith("/")) {
      let newAttributeValue = originalLink;
      if (this.prefixToMaintain && !originalLink.startsWith(this.prefixToMaintain + "/")) {
        newAttributeValue = (this.prefixToMaintain + originalLink).replace(/\/\//g, "/");
      }
      if (newAttributeValue !== originalLink) {
        element.setAttribute(attributeName, newAttributeValue);
      }
    }
  }
}
