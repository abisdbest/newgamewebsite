const fs = require('fs');

const replacement = `    // In-page asset interceptor & fallback (runs synchronously before game scripts)
    (function() {
      const CDN = 'https://pokerogue.online';
      const SILENT_WAV_B64 = 'UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==';

      function getSilentWavBuffer() {
        const bin = atob(SILENT_WAV_B64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        return bytes.buffer;
      }

      function normalizeUrl(url) {
        if (typeof url !== 'string') return url;
        return url
          .replace(/\\/source\\/pok%C3%A9rogue\\//gi, '/source/pokerogue/')
          .replace(/\\/source\\/pokérogue\\//gi, '/source/pokerogue/');
      }

      function mapAssetUrl(url) {
        if (typeof url !== 'string') return url;
        if (url.startsWith('data:') || url.startsWith('blob:')) return url;
        url = normalizeUrl(url);

        const isPokemonImg = url.includes('images/pokemon/');
        const isCry = url.includes('audio/cry/');
        const isBattleAnim = url.includes('battle-anims/');
        const isBattleAnimImg = url.includes('images/battle_anims/');
        const isBattleAnimAudio = url.includes('audio/se/battle_anims/') || url.includes('audio/se/');
        if (!isPokemonImg && !isCry && !isBattleAnim && !isBattleAnimImg && !isBattleAnimAudio) return url;

        // Base assets exist locally in the project!
        const isLocal = /(images\\/pokemon\\/(back\\/)?\\d+\\.(png|json)|audio\\/cry\\/\\d+\\.m4a|battle-anims\\/[a-z0-9-]+\\.json|images\\/battle_anims\\/.+|audio\\/se\\/.+)/.test(url);
        if (isLocal && !url.startsWith('http')) {
          return url;
        }

        const match = url.match(/(images\\/pokemon\\/.+|audio\\/cry\\/.+|battle-anims\\/.+|images\\/battle_anims\\/.+|audio\\/se\\/.+)/);
        if (!match) return url;
        const subpath = match[1];

        // If it's a local asset on full URL, ensure same-origin relative
        if (isLocal) {
          return \`./\${subpath}\`;
        }

        // Route variants to CDN
        return \`\${CDN}/\${subpath}\`;
      }

      // 1. Hook XMLHttpRequest to route assets and synthesize silent audio on missing sound effects
      const origOpen = XMLHttpRequest.prototype.open;
      const origSend = XMLHttpRequest.prototype.send;

      XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        const mapped = mapAssetUrl(url);
        this._reqUrl = mapped;
        return origOpen.call(this, method, mapped, async !== false, user, pass);
      };

      XMLHttpRequest.prototype.send = function(body) {
        const url = this._reqUrl || '';
        if (url.includes('/audio/')) {
          this.addEventListener('readystatechange', function() {
            if (this.readyState === 4 && this.status >= 400) {
              try {
                const wavBuf = getSilentWavBuffer();
                Object.defineProperty(this, 'status', { get: () => 200, configurable: true });
                Object.defineProperty(this, 'statusText', { get: () => 'OK', configurable: true });
                Object.defineProperty(this, 'response', { get: () => wavBuf, configurable: true });
                Object.defineProperty(this, 'responseText', { get: () => atob(SILENT_WAV_B64), configurable: true });
              } catch (e) {}
            }
          });
        }
        return origSend.call(this, body);
      };

      // 2. Hook HTMLImageElement src
      const origSrcDesc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
      if (origSrcDesc && origSrcDesc.set) {
        Object.defineProperty(HTMLImageElement.prototype, 'src', {
          set(val) {
            const mapped = mapAssetUrl(val);
            this.crossOrigin = 'anonymous';
            this.addEventListener('error', function onErr() {
              if (!this.dataset.fallbackTried) {
                this.dataset.fallbackTried = '1';
                if (val.includes('/battle_anims/')) {
                  origSrcDesc.set.call(this, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAA=');
                  return;
                }
                const numMatch = val.match(/(\\d+)/);
                const id = numMatch ? numMatch[1] : '1';
                const isBack = val.includes('/back/');
                origSrcDesc.set.call(this, isBack ? \`./images/pokemon/back/\${id}.png\` : \`./images/pokemon/\${id}.png\`);
              }
            }, { once: true });
            return origSrcDesc.set.call(this, mapped);
          },
          get() {
            return origSrcDesc.get.call(this);
          },
          configurable: true
        });
      }

      // 3. Hook window.fetch
      const origFetch = window.fetch;
      window.fetch = async function(resource, init) {
        let url = typeof resource === 'string' ? resource : (resource && resource.url ? resource.url : '');
        const mapped = mapAssetUrl(url);
        if (typeof resource === 'string') {
          resource = mapped;
        } else if (resource && resource.url && mapped !== resource.url) {
          resource = new Request(mapped, init || resource);
        }

        try {
          const resp = await origFetch.call(this, resource, init);
          if (resp.ok) return resp;

          if (url.includes('battle-anims/')) {
            try {
              const fallbackResp = await origFetch.call(this, './battle-anims/tackle.json');
              if (fallbackResp.ok) return fallbackResp;
            } catch (e) {}
            return new Response(JSON.stringify({ id: 0, graphic: 'PRAS- Common', frames: [] }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          if (url.includes('/audio/')) {
            return new Response(getSilentWavBuffer(), {
              status: 200,
              headers: { 'Content-Type': 'audio/wav' }
            });
          }

          return resp;
        } catch (err) {
          if (url.includes('battle-anims/')) {
            return new Response(JSON.stringify({ id: 0, graphic: 'PRAS- Common', frames: [] }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }
          if (url.includes('/audio/')) {
            return new Response(getSilentWavBuffer(), {
              status: 200,
              headers: { 'Content-Type': 'audio/wav' }
            });
          }
          throw err;
        }
      };

      // 4. Suppress missing audio cache and tween duration crashes so Phaser never halts
      window.addEventListener('unhandledrejection', (e) => {
        if (e && e.reason && typeof e.reason.message === 'string' && (e.reason.message.includes('missing from cache') || e.reason.message.includes('totalDuration'))) {
          console.warn('Prevented battle freeze (unhandled rejection):', e.reason.message);
          e.preventDefault();
        }
      });
      window.addEventListener('error', (e) => {
        if (e && e.message && (e.message.includes('missing from cache') || e.message.includes('totalDuration'))) {
          console.warn('Prevented battle freeze (error):', e.message);
          e.preventDefault();
        }
      });
    })();`;

const file = 'source/pokerogue/index.html';
let content = fs.readFileSync(file, 'utf8');
const startTag = '    // In-page asset interceptor';
const endTag = '    })();';
const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex) + endTag.length;

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated source/pokerogue/index.html!');
} else {
  console.error('Could not find tags in source/pokerogue/index.html');
}
