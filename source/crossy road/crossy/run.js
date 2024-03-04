!(function (e) {
  "use strict";
  if (
    ((Number.prototype.map = function (e, t, i, a) {
      return i + ((this - e) / (t - e)) * (a - i);
    }),
    (Number.prototype.limit = function (e, t) {
      return Math.min(t, Math.max(e, this));
    }),
    (Number.prototype.round = function (e) {
      return (e = Math.pow(10, e || 0)), Math.round(this * e) / e;
    }),
    (Number.prototype.floor = function () {
      return Math.floor(this);
    }),
    (Number.prototype.ceil = function () {
      return Math.ceil(this);
    }),
    (Number.prototype.toInt = function () {
      return 0 | this;
    }),
    (Number.prototype.toRad = function () {
      return (this / 180) * Math.PI;
    }),
    (Number.prototype.toDeg = function () {
      return (180 * this) / Math.PI;
    }),
    Object.defineProperty(Array.prototype, "erase", {
      value: function (e) {
        for (var t = this.length; t--; ) this[t] === e && this.splice(t, 1);
        return this;
      },
    }),
    Object.defineProperty(Array.prototype, "random", {
      value: function (e) {
        return this[Math.floor(Math.random() * this.length)];
      },
    }),
    (Function.prototype.bind =
      Function.prototype.bind ||
      function (e) {
        if ("function" != typeof this)
          throw new TypeError(
            "Function.prototype.bind - what is trying to be bound is not callable"
          );
        var t = Array.prototype.slice.call(arguments, 1),
          i = this,
          a = function () {},
          r = function () {
            return i.apply(
              this instanceof a && e ? this : e,
              t.concat(Array.prototype.slice.call(arguments))
            );
          };
        return (a.prototype = this.prototype), (r.prototype = new a()), r;
      }),
    (e.ig = {
      game: null,
      debug: null,
      version: "1.24",
      global: e,
      modules: {},
      resources: [],
      ready: !1,
      baked: !1,
      nocache: "",
      ua: {},
      prefix: e.ImpactPrefix || "",
      lib: "lib/",
      _current: null,
      _loadQueue: [],
      _waitForOnload: 0,
      $: function (e) {
        return "#" == e.charAt(0)
          ? document.getElementById(e.substr(1))
          : document.getElementsByTagName(e);
      },
      $new: function (e) {
        return document.createElement(e);
      },
      copy: function (e) {
        if (
          !e ||
          "object" != typeof e ||
          e instanceof HTMLElement ||
          e instanceof ig.Class
        )
          return e;
        if (e instanceof Array) {
          for (var t = [], i = 0, a = e.length; i < a; i++)
            t[i] = ig.copy(e[i]);
          return t;
        }
        t = {};
        for (var i in e) t[i] = ig.copy(e[i]);
        return t;
      },
      merge: function (e, t) {
        for (var i in t) {
          var a = t[i];
          "object" != typeof a ||
          a instanceof HTMLElement ||
          a instanceof ig.Class ||
          null === a
            ? (e[i] = a)
            : ((e[i] && "object" == typeof e[i]) ||
                (e[i] = a instanceof Array ? [] : {}),
              ig.merge(e[i], a));
        }
        return e;
      },
      ksort: function (e) {
        if (!e || "object" != typeof e) return [];
        var t = [],
          i = [];
        for (var a in e) t.push(a);
        t.sort();
        for (a = 0; a < t.length; a++) i.push(e[t[a]]);
        return i;
      },
      setVendorAttribute: function (e, t, i) {
        var a = t.charAt(0).toUpperCase() + t.substr(1);
        e[t] = e["ms" + a] = e["moz" + a] = e["webkit" + a] = e["o" + a] = i;
      },
      getVendorAttribute: function (e, t) {
        var i = t.charAt(0).toUpperCase() + t.substr(1);
        return (
          e[t] || e["ms" + i] || e["moz" + i] || e["webkit" + i] || e["o" + i]
        );
      },
      normalizeVendorAttribute: function (e, t) {
        var i = ig.getVendorAttribute(e, t);
        !e[t] && i && (e[t] = i);
      },
      getImagePixels: function (e, t, i, a, r) {
        var s = ig.$new("canvas");
        (s.width = e.width), (s.height = e.height);
        var o = s.getContext("2d");
        ig.System.SCALE.CRISP(s, o);
        var n = ig.getVendorAttribute(o, "backingStorePixelRatio") || 1;
        ig.normalizeVendorAttribute(o, "getImageDataHD");
        var h = e.width / n,
          m = e.height / n;
        return (
          (s.width = Math.ceil(h)),
          (s.height = Math.ceil(m)),
          o.drawImage(e, 0, 0, h, m),
          1 === n ? o.getImageData(t, i, a, r) : o.getImageDataHD(t, i, a, r)
        );
      },
      module: function (e) {
        if (ig._current)
          throw "Module '" + ig._current.name + "' defines nothing";
        if (ig.modules[e] && ig.modules[e].body)
          throw "Module '" + e + "' is already defined";
        return (
          (ig._current = { name: e, requires: [], loaded: !1, body: null }),
          (ig.modules[e] = ig._current),
          ig._loadQueue.push(ig._current),
          ig
        );
      },
      requires: function () {
        return (
          (ig._current.requires = Array.prototype.slice.call(arguments)), ig
        );
      },
      defines: function (e) {
        (ig._current.body = e), (ig._current = null), ig._initDOMReady();
      },
      addResource: function (e) {
        ig.resources.push(e);
      },
      setNocache: function (e) {
        ig.nocache = e ? "?" + Date.now() : "";
      },
      log: function () {},
      assert: function (e, t) {},
      show: function (e, t) {},
      mark: function (e, t) {},
      _loadScript: function (e, t) {
        (ig.modules[e] = { name: e, requires: [], loaded: !1, body: null }),
          ig._waitForOnload++;
        var i = ig.prefix + ig.lib + e.replace(/\./g, "/") + ".js" + ig.nocache,
          a = ig.$new("script");
        (a.type = "text/javascript"),
          (a.src = i),
          (a.onload = function () {
            ig._waitForOnload--, ig._execModules();
          }),
          (a.onerror = function () {
            throw (
              "Failed to load module " + e + " at " + i + " required from " + t
            );
          }),
          ig.$("head")[0].appendChild(a);
      },
      _execModules: function () {
        for (var e = !1, t = 0; t < ig._loadQueue.length; t++) {
          for (
            var i = ig._loadQueue[t], a = !0, r = 0;
            r < i.requires.length;
            r++
          ) {
            var s = i.requires[r];
            ig.modules[s]
              ? ig.modules[s].loaded || (a = !1)
              : ((a = !1), ig._loadScript(s, i.name));
          }
          a &&
            i.body &&
            (ig._loadQueue.splice(t, 1),
            (i.loaded = !0),
            i.body(),
            (e = !0),
            t--);
        }
        if (e) ig._execModules();
        else if (
          !ig.baked &&
          0 == ig._waitForOnload &&
          0 != ig._loadQueue.length
        ) {
          var o = [];
          for (t = 0; t < ig._loadQueue.length; t++) {
            var n = [],
              h = ig._loadQueue[t].requires;
            for (r = 0; r < h.length; r++) {
              ((i = ig.modules[h[r]]) && i.loaded) || n.push(h[r]);
            }
            o.push(ig._loadQueue[t].name + " (requires: " + n.join(", ") + ")");
          }
          throw (
            "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
            o.join("\n")
          );
        }
      },
      _DOMReady: function () {
        if (!ig.modules["dom.ready"].loaded) {
          if (!document.body) return setTimeout(ig._DOMReady, 13);
          (ig.modules["dom.ready"].loaded = !0),
            ig._waitForOnload--,
            ig._execModules();
        }
        return 0;
      },
      _boot: function () {
        document.location.href.match(/\?nocache/) && ig.setNocache(!0),
          (ig.ua.pixelRatio = e.devicePixelRatio || 1),
          (ig.ua.viewport = { width: e.innerWidth, height: e.innerHeight }),
          (ig.ua.screen = {
            width: e.screen.availWidth * ig.ua.pixelRatio,
            height: e.screen.availHeight * ig.ua.pixelRatio,
          }),
          (ig.ua.iPhone = /iPhone/i.test(navigator.userAgent)),
          (ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio),
          (ig.ua.iPad = /iPad/i.test(navigator.userAgent)),
          (ig.ua.android = /android/i.test(navigator.userAgent)),
          (ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent)),
          (ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad),
          (ig.ua.mobile =
            ig.ua.iOS ||
            ig.ua.android ||
            ig.ua.winPhone ||
            /mobile/i.test(navigator.userAgent)),
          (ig.ua.touchDevice =
            "ontouchstart" in e || e.navigator.msMaxTouchPoints);
      },
      _initDOMReady: function () {
        ig.modules["dom.ready"]
          ? ig._execModules()
          : (ig._boot(),
            (ig.modules["dom.ready"] = {
              requires: [],
              loaded: !1,
              body: null,
            }),
            ig._waitForOnload++,
            "complete" === document.readyState
              ? ig._DOMReady()
              : (document.addEventListener(
                  "DOMContentLoaded",
                  ig._DOMReady,
                  !1
                ),
                e.addEventListener("load", ig._DOMReady, !1)));
      },
    }),
    ig.normalizeVendorAttribute(e, "requestAnimationFrame"),
    e.requestAnimationFrame)
  ) {
    var t = 1,
      i = {};
    (e.ig.setAnimation = function (a, r) {
      var s = t++;
      i[s] = !0;
      var o = function () {
        i[s] && (e.requestAnimationFrame(o, r), a());
      };
      return e.requestAnimationFrame(o, r), s;
    }),
      (e.ig.clearAnimation = function (e) {
        delete i[e];
      });
  } else
    (e.ig.setAnimation = function (t, i) {
      return e.setInterval(t, 1e3 / 60);
    }),
      (e.ig.clearAnimation = function (t) {
        e.clearInterval(t);
      });
  var a = !1,
    r = /xyz/.test(function () {
      xyz;
    })
      ? /\bparent\b/
      : /.*/,
    s = 0;
  e.ig.Class = function () {};
  var o = function (e) {
    var t = this.prototype,
      i = {};
    for (var a in e)
      "function" == typeof e[a] && "function" == typeof t[a] && r.test(e[a])
        ? ((i[a] = t[a]),
          (t[a] = (function (e, t) {
            return function () {
              var a = this.parent;
              this.parent = i[e];
              var r = t.apply(this, arguments);
              return (this.parent = a), r;
            };
          })(a, e[a])))
        : (t[a] = e[a]);
  };
  (e.ig.Class.extend = function (t) {
    var i = this.prototype;
    a = !0;
    var n = new this();
    for (var h in ((a = !1), t))
      "function" == typeof t[h] && "function" == typeof i[h] && r.test(t[h])
        ? (n[h] = (function (e, t) {
            return function () {
              var a = this.parent;
              this.parent = i[e];
              var r = t.apply(this, arguments);
              return (this.parent = a), r;
            };
          })(h, t[h]))
        : (n[h] = t[h]);
    function m() {
      if (!a) {
        if (this.staticInstantiate) {
          var e = this.staticInstantiate.apply(this, arguments);
          if (e) return e;
        }
        for (var t in this)
          "object" == typeof this[t] && (this[t] = ig.copy(this[t]));
        this.init && this.init.apply(this, arguments);
      }
      return this;
    }
    return (
      (m.prototype = n),
      (m.prototype.constructor = m),
      (m.extend = e.ig.Class.extend),
      (m.inject = o),
      (m.classId = n.classId = ++s),
      m
    );
  }),
    e.ImpactMixin && ig.merge(ig, e.ImpactMixin);
})(window),
  (ig.baked = !0),
  ig.module("impact.image").defines(function () {
    "use strict";
    (ig.Image = ig.Class.extend({
      data: null,
      width: 0,
      height: 0,
      loaded: !1,
      failed: !1,
      loadCallback: null,
      path: "",
      staticInstantiate: function (e) {
        return ig.Image.cache[e] || null;
      },
      init: function (e) {
        (this.path = e), this.load();
      },
      load: function (e) {
        this.loaded
          ? e && e(this.path, !0)
          : (!this.loaded && ig.ready
              ? ((this.loadCallback = e || null),
                (this.data = new Image()),
                (this.data.crossOrigin = "anonymous"),
                (this.data.onload = this.onload.bind(this)),
                (this.data.onerror = this.onerror.bind(this)),
                (this.data.src = ig.prefix + this.path + ig.nocache))
              : ig.addResource(this),
            (ig.Image.cache[this.path] = this));
      },
      reload: function () {
        (this.loaded = !1),
          (this.data = new Image()),
          (this.data.crossOrigin = "anonymous"),
          (this.data.onload = this.onload.bind(this)),
          (this.data.src = this.path + "?" + Date.now());
      },
      onload: function (e) {
        (this.width = this.data.width),
          (this.height = this.data.height),
          (this.loaded = !0),
          1 != ig.system.scale && this.resize(ig.system.scale),
          this.loadCallback && this.loadCallback(this.path, !0);
      },
      onerror: function (e) {
        (this.failed = !0),
          this.loadCallback && this.loadCallback(this.path, !1);
      },
      resize: function (e) {
        var t = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
          i = this.width * e,
          a = this.height * e,
          r = ig.$new("canvas");
        (r.width = i), (r.height = a);
        for (
          var s = r.getContext("2d"), o = s.getImageData(0, 0, i, a), n = 0;
          n < a;
          n++
        )
          for (var h = 0; h < i; h++) {
            var m = 4 * (Math.floor(n / e) * this.width + Math.floor(h / e)),
              l = 4 * (n * i + h);
            (o.data[l] = t.data[m]),
              (o.data[l + 1] = t.data[m + 1]),
              (o.data[l + 2] = t.data[m + 2]),
              (o.data[l + 3] = t.data[m + 3]);
          }
        s.putImageData(o, 0, 0), (this.data = r);
      },
      draw: function (e, t, i, a, r, s, o) {
        if (this.loaded) {
          var n,
            h = ig.system.scale;
          if (
            ((i = i ? i * h : 0),
            (a = a ? a * h : 0),
            (r = (r || this.width) * h),
            (s = (s || this.height) * h),
            null != o)
          )
            if ("./hud.png" == this.path)
              (n = ig.game.escalaCubo * ig.game.escala2D) > 1 && (n = 1),
                ig.system.context.drawImage(
                  this.data,
                  i,
                  a,
                  r,
                  s,
                  ig.system.getDrawPos(e),
                  ig.system.getDrawPos(t),
                  r * n,
                  s * n
                );
            else
              ig.system.context.drawImage(
                this.data,
                i,
                a,
                r,
                s,
                ig.system.getDrawPos(e),
                ig.system.getDrawPos(t),
                r * ig.game.escalaCubo,
                s * ig.game.escalaCubo
              );
          else if (
            "./mroegames.png" == this.path ||
            "./mute.png" == this.path ||
            "./nomute.png" == this.path ||
            "./tutorial.png" == this.path
          )
            (n = ig.game.escalaCubo * ig.game.escala2D) > 1 && (n = 1),
              ig.system.context.drawImage(
                this.data,
                i,
                a,
                r,
                s,
                ig.system.getDrawPos(e),
                ig.system.getDrawPos(t),
                r * n,
                s * n
              );
          else
            ig.system.context.drawImage(
              this.data,
              i,
              a,
              r,
              s,
              ig.system.getDrawPos(e),
              ig.system.getDrawPos(t),
              r,
              s
            );
          ig.Image.drawCount++;
        }
      },
      drawTile: function (e, t, i, a, r, s, o, n) {
        if (
          ((r = r || a), !(!this.loaded || a > this.width || r > this.height))
        ) {
          var h = ig.system.scale,
            m = Math.floor(a * h),
            l = Math.floor(r * h),
            c = s ? -1 : 1,
            u = o ? -1 : 1;
          (s || o) && (ig.system.context.save(), ig.system.context.scale(c, u)),
            null == n
              ? ig.system.context.drawImage(
                  this.data,
                  (Math.floor(i * a) % this.width) * h,
                  Math.floor((i * a) / this.width) * r * h,
                  m,
                  l,
                  ig.system.getDrawPos(e) * c - (s ? m : 0),
                  ig.system.getDrawPos(t) * u - (o ? l : 0),
                  m,
                  l
                )
              : this.ig.game.escalaCubo < 1
              ? ig.system.context.drawImage(
                  this.data,
                  (Math.floor(i * a) % this.width) * ig.game.escalaCubo,
                  Math.floor((i * a) / this.width) * r * ig.game.escalaCubo,
                  m,
                  l,
                  ig.system.getDrawPos(e) * c - (s ? m : 0),
                  ig.system.getDrawPos(t) * u - (o ? l : 0),
                  m,
                  l
                )
              : (alert("QQQ"),
                ig.system.context.drawImage(
                  this.data,
                  (Math.floor(i * a) % this.width) * 1,
                  Math.floor((i * a) / this.width) * r * 1,
                  m,
                  l,
                  ig.system.getDrawPos(e) * c - (s ? m : 0),
                  ig.system.getDrawPos(t) * u - (o ? l : 0),
                  m,
                  l
                )),
            (s || o) && ig.system.context.restore(),
            ig.Image.drawCount++;
        }
      },
    })),
      (ig.Image.drawCount = 0),
      (ig.Image.cache = {}),
      (ig.Image.reloadCache = function () {
        for (var e in ig.Image.cache) ig.Image.cache[e].reload();
      });
  }),
  (ig.baked = !0),
  ig
    .module("impact.font")
    .requires("impact.image")
    .defines(function () {
      "use strict";
      (ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (e) {
          this._loadMetrics(this.data), this.parent(e);
        },
        widthForString: function (e) {
          if (-1 !== e.indexOf("\n")) {
            for (var t = e.split("\n"), i = 0, a = 0; a < t.length; a++)
              i = Math.max(i, this._widthForLine(t[a]));
            return i;
          }
          return this._widthForLine(e);
        },
        _widthForLine: function (e) {
          for (var t = 0, i = 0; i < e.length; i++)
            t +=
              this.widthMap[e.charCodeAt(i) - this.firstChar] +
              this.letterSpacing;
          return t;
        },
        heightForString: function (e) {
          return e.split("\n").length * (this.height + this.lineSpacing);
        },
        draw: function (e, t, i, a) {
          if (
            ("string" != typeof e && (e = e.toString()), -1 === e.indexOf("\n"))
          ) {
            if (a == ig.Font.ALIGN.RIGHT || a == ig.Font.ALIGN.CENTER) {
              var r = this._widthForLine(e);
              t -= a == ig.Font.ALIGN.CENTER ? r / 2 : r;
            }
            1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
            for (h = 0; h < e.length; h++) {
              var s = e.charCodeAt(h);
              t += this._drawChar(s - this.firstChar, t, i);
            }
            1 !== this.alpha && (ig.system.context.globalAlpha = 1),
              (ig.Image.drawCount += e.length);
          } else
            for (
              var o = e.split("\n"), n = this.height + this.lineSpacing, h = 0;
              h < o.length;
              h++
            )
              this.draw(o[h], t, i + h * n, a);
        },
        _drawChar: function (e, t, i) {
          if (!this.loaded || e < 0 || e >= this.indices.length) return 0;
          var a = ig.system.scale,
            r = this.indices[e] * a,
            s = this.widthMap[e] * a,
            o = (this.height - 2) * a;
          return (
            ig.system.context.drawImage(
              this.data,
              r,
              0,
              s,
              o,
              ig.system.getDrawPos(t),
              ig.system.getDrawPos(i),
              s,
              o
            ),
            this.widthMap[e] + this.letterSpacing
          );
        },
        _loadMetrics: function (e) {
          (this.height = e.height - 1),
            (this.widthMap = []),
            (this.indices = []);
          for (
            var t = ig.getImagePixels(e, 0, e.height - 1, e.width, 1),
              i = 0,
              a = 0;
            a < e.width;
            a++
          ) {
            var r = 4 * a + 3;
            t.data[r] > 127
              ? i++
              : t.data[r] < 128 &&
                i &&
                (this.widthMap.push(i), this.indices.push(a - i), 0, (i = 0));
          }
          this.widthMap.push(i), this.indices.push(a - i);
        },
      })),
        (ig.Font.ALIGN = { LEFT: 0, RIGHT: 1, CENTER: 2 });
    }),
  (ig.baked = !0),
  ig.module("impact.sound").defines(function () {
    "use strict";
    (ig.SoundManager = ig.Class.extend({
      clips: {},
      volume: 1,
      format: null,
      init: function () {
        if (ig.Sound.enabled && window.Audio) {
          for (var e = new Audio(), t = 0; t < ig.Sound.use.length; t++) {
            var i = ig.Sound.use[t];
            if (e.canPlayType(i.mime)) {
              this.format = i;
              break;
            }
          }
          this.format || (ig.Sound.enabled = !1),
            ig.Sound.enabled &&
              ig.Sound.useWebAudio &&
              ((this.audioContext = new AudioContext()),
              (this.boundWebAudioUnlock = this.unlockWebAudio.bind(this)),
              document.addEventListener(
                "touchstart",
                this.boundWebAudioUnlock,
                !1
              ));
        } else ig.Sound.enabled = !1;
      },
      unlockWebAudio: function () {
        document.removeEventListener(
          "touchstart",
          this.boundWebAudioUnlock,
          !1
        );
        var e = this.audioContext.createBuffer(1, 1, 22050),
          t = this.audioContext.createBufferSource();
        (t.buffer = e), t.connect(this.audioContext.destination), t.start(0);
      },
      load: function (e, t, i) {
        return t && ig.Sound.useWebAudio
          ? this.loadWebAudio(e, t, i)
          : this.loadHTML5Audio(e, t, i);
      },
      loadWebAudio: function (e, t, i) {
        var a = ig.prefix + e.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
        if (this.clips[e]) return this.clips[e];
        var r = new ig.Sound.WebAudioSource();
        this.clips[e] = r;
        var s = new XMLHttpRequest();
        s.open("GET", a, !0), (s.responseType = "arraybuffer");
        var o = this;
        return (
          (s.onload = function (t) {
            o.audioContext.decodeAudioData(
              s.response,
              function (a) {
                (r.buffer = a), i(e, !0, t);
              },
              function (t) {
                i(e, !1, t);
              }
            );
          }),
          (s.onerror = function (t) {
            i(e, !1, t);
          }),
          s.send(),
          r
        );
      },
      loadHTML5Audio: function (e, t, i) {
        var a = ig.prefix + e.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
        if (this.clips[e]) {
          if (this.clips[e] instanceof ig.Sound.WebAudioSource)
            return this.clips[e];
          if (t && this.clips[e].length < ig.Sound.channels)
            for (var r = this.clips[e].length; r < ig.Sound.channels; r++) {
              (o = new Audio(a)).load(), this.clips[e].push(o);
            }
          return this.clips[e][0];
        }
        var s = new Audio(a);
        if (
          (i &&
            (ig.ua.mobile
              ? setTimeout(function () {
                  i(e, !0, null);
                }, 0)
              : (s.addEventListener(
                  "canplaythrough",
                  function t(a) {
                    s.removeEventListener("canplaythrough", t, !1), i(e, !0, a);
                  },
                  !1
                ),
                s.addEventListener(
                  "error",
                  function (t) {
                    i(e, !1, t);
                  },
                  !1
                ))),
          (s.preload = "auto"),
          s.load(),
          (this.clips[e] = [s]),
          t)
        )
          for (r = 1; r < ig.Sound.channels; r++) {
            var o;
            (o = new Audio(a)).load(), this.clips[e].push(o);
          }
        return s;
      },
      get: function (e) {
        var t = this.clips[e];
        if (t && t instanceof ig.Sound.WebAudioSource) return t;
        for (var i, a = 0; (i = t[a++]); )
          if (i.paused || i.ended) return i.ended && (i.currentTime = 0), i;
        return t[0].pause(), (t[0].currentTime = 0), t[0];
      },
    })),
      (ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function () {
          (this._endedCallbackBound = this._endedCallback.bind(this)),
            Object.defineProperty(this, "volume", {
              get: this.getVolume.bind(this),
              set: this.setVolume.bind(this),
            }),
            Object.defineProperty(this, "loop", {
              get: this.getLooping.bind(this),
              set: this.setLooping.bind(this),
            });
        },
        add: function (e, t) {
          if (ig.Sound.enabled) {
            var i = e instanceof ig.Sound ? e.path : e,
              a = ig.soundManager.load(i, !1);
            if (a instanceof ig.Sound.WebAudioSource)
              throw (
                (ig.system.stopRunLoop(),
                "Sound '" +
                  i +
                  "' loaded as Multichannel but used for Music. Set the multiChannel param to false when loading, e.g.: new ig.Sound(path, false)")
              );
            (a.loop = this._loop),
              (a.volume = this._volume),
              a.addEventListener("ended", this._endedCallbackBound, !1),
              this.tracks.push(a),
              t && (this.namedTracks[t] = a),
              this.currentTrack || (this.currentTrack = a);
          }
        },
        next: function () {
          this.tracks.length &&
            (this.stop(),
            (this.currentIndex = this.random
              ? Math.floor(Math.random() * this.tracks.length)
              : (this.currentIndex + 1) % this.tracks.length),
            (this.currentTrack = this.tracks[this.currentIndex]),
            this.play());
        },
        pause: function () {
          this.currentTrack && this.currentTrack.pause();
        },
        stop: function () {
          this.currentTrack &&
            (this.currentTrack.pause(), (this.currentTrack.currentTime = 0));
        },
        play: function (e) {
          if (e && this.namedTracks[e]) {
            var t = this.namedTracks[e];
            t != this.currentTrack && (this.stop(), (this.currentTrack = t));
          } else if (!this.currentTrack) return;
          this.currentTrack.play();
        },
        getLooping: function () {
          return this._loop;
        },
        setLooping: function (e) {
          for (var t in ((this._loop = e), this.tracks))
            this.tracks[t].loop = e;
        },
        getVolume: function () {
          return this._volume;
        },
        setVolume: function (e) {
          for (var t in ((this._volume = e.limit(0, 1)), this.tracks))
            this.tracks[t].volume = this._volume;
        },
        fadeOut: function (e) {
          this.currentTrack &&
            (clearInterval(this._fadeInterval),
            (this.fadeTimer = new ig.Timer(e)),
            (this._fadeInterval = setInterval(this._fadeStep.bind(this), 50)));
        },
        _fadeStep: function () {
          var e =
            this.fadeTimer
              .delta()
              .map(-this.fadeTimer.target, 0, 1, 0)
              .limit(0, 1) * this._volume;
          e <= 0.01
            ? (this.stop(),
              (this.currentTrack.volume = this._volume),
              clearInterval(this._fadeInterval))
            : (this.currentTrack.volume = e);
        },
        _endedCallback: function () {
          this._loop ? this.play() : this.next();
        },
      })),
      (ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        _loop: !1,
        init: function (e, t) {
          (this.path = e),
            (this.multiChannel = !1 !== t),
            Object.defineProperty(this, "loop", {
              get: this.getLooping.bind(this),
              set: this.setLooping.bind(this),
            }),
            this.load();
        },
        getLooping: function () {
          return this._loop;
        },
        setLooping: function (e) {
          (this._loop = e), this.currentClip && (this.currentClip.loop = e);
        },
        load: function (e) {
          ig.Sound.enabled
            ? ig.ready
              ? ig.soundManager.load(this.path, this.multiChannel, e)
              : ig.addResource(this)
            : e && e(this.path, !0);
        },
        play: function () {
          ig.Sound.enabled &&
            ((this.currentClip = ig.soundManager.get(this.path)),
            (this.currentClip.loop = this._loop),
            (this.currentClip.volume = ig.soundManager.volume * this.volume),
            this.currentClip.play());
        },
        stop: function () {
          this.currentClip &&
            (this.currentClip.pause(), (this.currentClip.currentTime = 0));
        },
      })),
      (ig.Sound.WebAudioSource = ig.Class.extend({
        sources: [],
        gain: null,
        buffer: null,
        _loop: !1,
        init: function () {
          (this.gain = ig.soundManager.audioContext.createGain()),
            this.gain.connect(ig.soundManager.audioContext.destination),
            Object.defineProperty(this, "loop", {
              get: this.getLooping.bind(this),
              set: this.setLooping.bind(this),
            }),
            Object.defineProperty(this, "volume", {
              get: this.getVolume.bind(this),
              set: this.setVolume.bind(this),
            });
        },
        play: function () {
          if (this.buffer) {
            var e = ig.soundManager.audioContext.createBufferSource();
            (e.buffer = this.buffer),
              e.connect(this.gain),
              (e.loop = this._loop);
            var t = this;
            this.sources.push(e),
              (e.onended = function () {
                t.sources.erase(e);
              }),
              e.start(0);
          }
        },
        pause: function () {
          for (var e = 0; e < this.sources.length; e++)
            try {
              this.sources[e].stop();
            } catch (e) {}
        },
        getLooping: function () {
          return this._loop;
        },
        setLooping: function (e) {
          this._loop = e;
          for (var t = 0; t < this.sources.length; t++)
            this.sources[t].loop = e;
        },
        getVolume: function () {
          return this.gain.gain.value;
        },
        setVolume: function (e) {
          this.gain.gain.value = e;
        },
      })),
      (ig.Sound.FORMAT = {
        MP3: { ext: "mp3", mime: "audio/mpeg" },
        M4A: { ext: "m4a", mime: "audio/mp4; codecs=mp4a" },
        OGG: { ext: "ogg", mime: "audio/ogg; codecs=vorbis" },
        WEBM: { ext: "webm", mime: "audio/webm; codecs=vorbis" },
        CAF: { ext: "caf", mime: "audio/x-caf" },
      }),
      (ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3]),
      (ig.Sound.channels = 4),
      (ig.Sound.enabled = !0),
      ig.normalizeVendorAttribute(window, "AudioContext"),
      (ig.Sound.useWebAudio = !!window.AudioContext && !window.nwf);
  }),
  (ig.baked = !0),
  ig
    .module("impact.loader")
    .requires("impact.image", "impact.font", "impact.sound")
    .defines(function () {
      "use strict";
      ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function (e, t) {
          (this.gameClass = e),
            (this.resources = t),
            (this._loadCallbackBound = this._loadCallback.bind(this));
          for (var i = 0; i < this.resources.length; i++)
            this._unloaded.push(this.resources[i].path);
        },
        load: function () {
          if ((ig.system.clear("#000"), this.resources.length)) {
            for (var e = 0; e < this.resources.length; e++)
              this.loadResource(this.resources[e]);
            this._intervalId = setInterval(this.draw.bind(this), 16);
          } else this.end();
        },
        loadResource: function (e) {
          e.load(this._loadCallbackBound);
        },
        end: function () {
          this.done ||
            ((this.done = !0),
            clearInterval(this._intervalId),
            ig.system.setGame(this.gameClass));
        },
        draw: function () {
          this._drawStatus += (this.status - this._drawStatus) / 5;
          var e = ig.system.scale,
            t = 0.6 * ig.system.width,
            i = 0.1 * ig.system.height,
            a = 0.5 * ig.system.width - t / 2,
            r = 0.5 * ig.system.height - i / 2;
          (ig.system.context.fillStyle = "#000"),
            ig.system.context.fillRect(0, 0, 480, 320),
            (ig.system.context.fillStyle = "#fff"),
            ig.system.context.fillRect(a * e, r * e, t * e, i * e),
            (ig.system.context.fillStyle = "#000"),
            ig.system.context.fillRect(
              a * e + e,
              r * e + e,
              t * e - e - e,
              i * e - e - e
            ),
            (ig.system.context.fillStyle = "#fff"),
            ig.system.context.fillRect(
              a * e,
              r * e,
              t * e * this._drawStatus,
              i * e
            );
        },
        _loadCallback: function (e, t) {
          if (!t) throw "Failed to load resource: " + e;
          this._unloaded.erase(e),
            (this.status = 1 - this._unloaded.length / this.resources.length),
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250);
        },
      });
    }),
  (ig.baked = !0),
  ig.module("impact.timer").defines(function () {
    "use strict";
    (ig.Timer = ig.Class.extend({
      target: 0,
      base: 0,
      last: 0,
      pausedAt: 0,
      init: function (e) {
        (this.base = ig.Timer.time),
          (this.last = ig.Timer.time),
          (this.target = e || 0);
      },
      set: function (e) {
        (this.target = e || 0),
          (this.base = ig.Timer.time),
          (this.pausedAt = 0);
      },
      reset: function () {
        (this.base = ig.Timer.time), (this.pausedAt = 0);
      },
      tick: function () {
        var e = ig.Timer.time - this.last;
        return (this.last = ig.Timer.time), this.pausedAt ? 0 : e;
      },
      delta: function () {
        return (this.pausedAt || ig.Timer.time) - this.base - this.target;
      },
      pause: function () {
        this.pausedAt || (this.pausedAt = ig.Timer.time);
      },
      unpause: function () {
        this.pausedAt &&
          ((this.base += ig.Timer.time - this.pausedAt), (this.pausedAt = 0));
      },
    })),
      (ig.Timer._last = 0),
      (ig.Timer.time = Number.MIN_VALUE),
      (ig.Timer.timeScale = 1),
      (ig.Timer.maxStep = 0.05),
      (ig.Timer.step = function () {
        var e = Date.now(),
          t = (e - ig.Timer._last) / 1e3;
        (ig.Timer.time += Math.min(t, ig.Timer.maxStep) * ig.Timer.timeScale),
          (ig.Timer._last = e);
      });
  }),
  (ig.baked = !0),
  ig
    .module("impact.system")
    .requires("impact.timer", "impact.image")
    .defines(function () {
      "use strict";
      (ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function (e, t, i, a, r) {
          (this.fps = t),
            (this.clock = new ig.Timer()),
            (this.canvas = ig.$(e)),
            this.resize(i, a, r),
            (this.context = this.canvas.getContext("2d")),
            (this.getDrawPos = ig.System.drawMode),
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP),
            ig.System.scaleMode(this.canvas, this.context);
        },
        resize: function (e, t, i) {
          (this.width = e),
            (this.height = t),
            (this.scale = i || this.scale),
            (this.realWidth = this.width * this.scale),
            (this.realHeight = this.height * this.scale),
            (this.canvas.width = this.realWidth),
            (this.canvas.height = this.realHeight);
        },
        setGame: function (e) {
          this.running ? (this.newGameClass = e) : this.setGameNow(e);
        },
        setGameNow: function (e) {
          (ig.game = new e()), ig.system.setDelegate(ig.game);
        },
        setDelegate: function (e) {
          if ("function" != typeof e.run)
            throw "System.setDelegate: No run() function in object";
          (this.delegate = e), this.startRunLoop();
        },
        stopRunLoop: function () {
          ig.clearAnimation(this.animationId), (this.running = !1);
        },
        startRunLoop: function () {
          this.stopRunLoop(),
            (this.animationId = ig.setAnimation(
              this.run.bind(this),
              this.canvas
            )),
            (this.running = !0);
        },
        clear: function (e) {
          (this.context.fillStyle = e),
            this.context.fillRect(0, 0, this.realWidth, this.realHeight);
        },
        run: function () {
          ig.Timer.step(),
            (this.tick = this.clock.tick()),
            this.delegate.run(),
            ig.input.clearPressed(),
            this.newGameClass &&
              (this.setGameNow(this.newGameClass), (this.newGameClass = null));
        },
        getDrawPos: null,
      })),
        (ig.System.DRAW = {
          AUTHENTIC: function (e) {
            return Math.round(e) * this.scale;
          },
          SMOOTH: function (e) {
            return Math.round(e * this.scale);
          },
          SUBPIXEL: function (e) {
            return e * this.scale;
          },
        }),
        (ig.System.drawMode = ig.System.DRAW.SMOOTH),
        (ig.System.SCALE = {
          CRISP: function (e, t) {
            ig.setVendorAttribute(t, "imageSmoothingEnabled", !1),
              (e.style.imageRendering = "-moz-crisp-edges"),
              (e.style.imageRendering = "-o-crisp-edges"),
              (e.style.imageRendering = "-webkit-optimize-contrast"),
              (e.style.imageRendering = "crisp-edges"),
              (e.style.msInterpolationMode = "nearest-neighbor");
          },
          SMOOTH: function (e, t) {
            ig.setVendorAttribute(t, "imageSmoothingEnabled", !0),
              (e.style.imageRendering = ""),
              (e.style.msInterpolationMode = "");
          },
        }),
        (ig.System.scaleMode = ig.System.SCALE.SMOOTH);
    }),
  (ig.baked = !0),
  ig.module("impact.input").defines(function () {
    "use strict";
    (ig.KEY = {
      MOUSE1: -1,
      MOUSE2: -3,
      MWHEEL_UP: -4,
      MWHEEL_DOWN: -5,
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      PAUSE: 19,
      CAPS: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      INSERT: 45,
      DELETE: 46,
      _0: 48,
      _1: 49,
      _2: 50,
      _3: 51,
      _4: 52,
      _5: 53,
      _6: 54,
      _7: 55,
      _8: 56,
      _9: 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      NUMPAD_0: 96,
      NUMPAD_1: 97,
      NUMPAD_2: 98,
      NUMPAD_3: 99,
      NUMPAD_4: 100,
      NUMPAD_5: 101,
      NUMPAD_6: 102,
      NUMPAD_7: 103,
      NUMPAD_8: 104,
      NUMPAD_9: 105,
      MULTIPLY: 106,
      ADD: 107,
      SUBSTRACT: 109,
      DECIMAL: 110,
      DIVIDE: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PLUS: 187,
      COMMA: 188,
      MINUS: 189,
      PERIOD: 190,
    }),
      (ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: { x: 0, y: 0 },
        accel: { x: 0, y: 0, z: 0 },
        initMouse: function () {
          if (!this.isUsingMouse) {
            this.isUsingMouse = !0;
            var e = this.mousewheel.bind(this);
            ig.system.canvas.addEventListener("mousewheel", e, !1),
              ig.system.canvas.addEventListener("DOMMouseScroll", e, !1),
              ig.system.canvas.addEventListener(
                "contextmenu",
                this.contextmenu.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "mousedown",
                this.keydown.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "mouseup",
                this.keyup.bind(this),
                !1
              ),
              ig.system.canvas.addEventListener(
                "mousemove",
                this.mousemove.bind(this),
                !1
              ),
              ig.ua.touchDevice &&
                (ig.system.canvas.addEventListener(
                  "touchstart",
                  this.keydown.bind(this),
                  !1
                ),
                ig.system.canvas.addEventListener(
                  "touchend",
                  this.keyup.bind(this),
                  !1
                ),
                ig.system.canvas.addEventListener(
                  "touchmove",
                  this.mousemove.bind(this),
                  !1
                ),
                ig.system.canvas.addEventListener(
                  "MSPointerDown",
                  this.keydown.bind(this),
                  !1
                ),
                ig.system.canvas.addEventListener(
                  "MSPointerUp",
                  this.keyup.bind(this),
                  !1
                ),
                ig.system.canvas.addEventListener(
                  "MSPointerMove",
                  this.mousemove.bind(this),
                  !1
                ),
                (ig.system.canvas.style.msTouchAction = "none"));
          }
        },
        initKeyboard: function () {
          this.isUsingKeyboard ||
            ((this.isUsingKeyboard = !0),
            window.addEventListener("keydown", this.keydown.bind(this), !1),
            window.addEventListener("keyup", this.keyup.bind(this), !1));
        },
        initAccelerometer: function () {
          this.isUsingAccelerometer ||
            ((this.isUsingAccelerometer = !0),
            window.addEventListener(
              "devicemotion",
              this.devicemotion.bind(this),
              !1
            ));
        },
        mousewheel: function (e) {
          var t =
              (e.wheelDelta ? e.wheelDelta : -1 * e.detail) > 0
                ? ig.KEY.MWHEEL_UP
                : ig.KEY.MWHEEL_DOWN,
            i = this.bindings[t];
          i &&
            ((this.actions[i] = !0),
            (this.presses[i] = !0),
            (this.delayedKeyup[i] = !0),
            e.stopPropagation(),
            e.preventDefault());
        },
        mousemove: function (e) {
          var t = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
            i = ig.system.scale * (t / ig.system.realWidth),
            a = { left: 0, top: 0 };
          ig.system.canvas.getBoundingClientRect &&
            (a = ig.system.canvas.getBoundingClientRect());
          var r = e.touches ? e.touches[0] : e;
          (this.mouse.x = (r.clientX - a.left) / i),
            (this.mouse.y = (r.clientY - a.top) / i);
        },
        contextmenu: function (e) {
          this.bindings[ig.KEY.MOUSE2] &&
            (e.stopPropagation(), e.preventDefault());
        },
        keydown: function (e) {
          var t = e.target.tagName;
          if ("INPUT" != t && "TEXTAREA" != t) {
            var i =
              "keydown" == e.type
                ? e.keyCode
                : 2 == e.button
                ? ig.KEY.MOUSE2
                : ig.KEY.MOUSE1;
            i < 0 && !ig.ua.mobile && window.focus(),
              ("touchstart" != e.type && "mousedown" != e.type) ||
                this.mousemove(e);
            var a = this.bindings[i];
            a &&
              ((this.actions[a] = !0),
              this.locks[a] || ((this.presses[a] = !0), (this.locks[a] = !0)),
              e.preventDefault());
          }
        },
        keyup: function (e) {
          var t = e.target.tagName;
          if ("INPUT" != t && "TEXTAREA" != t) {
            var i =
                "keyup" == e.type
                  ? e.keyCode
                  : 2 == e.button
                  ? ig.KEY.MOUSE2
                  : ig.KEY.MOUSE1,
              a = this.bindings[i];
            a && ((this.delayedKeyup[a] = !0), e.preventDefault());
          }
        },
        devicemotion: function (e) {
          this.accel = e.accelerationIncludingGravity;
        },
        bind: function (e, t) {
          e < 0 ? this.initMouse() : e > 0 && this.initKeyboard(),
            (this.bindings[e] = t);
        },
        bindTouch: function (e, t) {
          var i = ig.$(e),
            a = this;
          i.addEventListener(
            "touchstart",
            function (e) {
              a.touchStart(e, t);
            },
            !1
          ),
            i.addEventListener(
              "touchend",
              function (e) {
                a.touchEnd(e, t);
              },
              !1
            ),
            i.addEventListener(
              "MSPointerDown",
              function (e) {
                a.touchStart(e, t);
              },
              !1
            ),
            i.addEventListener(
              "MSPointerUp",
              function (e) {
                a.touchEnd(e, t);
              },
              !1
            );
        },
        unbind: function (e) {
          var t = this.bindings[e];
          (this.delayedKeyup[t] = !0), (this.bindings[e] = null);
        },
        unbindAll: function () {
          (this.bindings = {}),
            (this.actions = {}),
            (this.presses = {}),
            (this.locks = {}),
            (this.delayedKeyup = {});
        },
        state: function (e) {
          return this.actions[e];
        },
        pressed: function (e) {
          return this.presses[e];
        },
        released: function (e) {
          return !!this.delayedKeyup[e];
        },
        clearPressed: function () {
          for (var e in this.delayedKeyup)
            (this.actions[e] = !1), (this.locks[e] = !1);
          (this.delayedKeyup = {}), (this.presses = {});
        },
        touchStart: function (e, t) {
          return (
            (this.actions[t] = !0),
            (this.presses[t] = !0),
            e.stopPropagation(),
            e.preventDefault(),
            !1
          );
        },
        touchEnd: function (e, t) {
          return (
            (this.delayedKeyup[t] = !0),
            e.stopPropagation(),
            e.preventDefault(),
            !1
          );
        },
      }));
  }),
  (ig.baked = !0),
  ig
    .module("impact.impact")
    .requires(
      "dom.ready",
      "impact.loader",
      "impact.system",
      "impact.input",
      "impact.sound"
    )
    .defines(function () {
      "use strict";
      ig.main = function (e, t, i, a, r, s, o) {
        (ig.system = new ig.System(e, i, a, r, s || 1)),
          (ig.input = new ig.Input()),
          (ig.soundManager = new ig.SoundManager()),
          (ig.music = new ig.Music()),
          (ig.ready = !0),
          new (o || ig.Loader)(t, ig.resources).load();
      };
    }),
  (ig.baked = !0),
  ig
    .module("impact.animation")
    .requires("impact.timer", "impact.image")
    .defines(function () {
      "use strict";
      (ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function (e, t, i) {
          (this.width = t), (this.height = i), (this.image = new ig.Image(e));
        },
      })),
        (ig.Animation = ig.Class.extend({
          sheet: null,
          timer: null,
          sequence: [],
          flip: { x: !1, y: !1 },
          pivot: { x: 0, y: 0 },
          frame: 0,
          tile: 0,
          loopCount: 0,
          alpha: 1,
          angle: 0,
          init: function (e, t, i, a) {
            (this.sheet = e),
              (this.pivot = { x: e.width / 2, y: e.height / 2 }),
              (this.timer = new ig.Timer()),
              (this.frameTime = t),
              (this.sequence = i),
              (this.stop = !!a),
              (this.tile = this.sequence[0]);
          },
          rewind: function () {
            return (
              this.timer.set(),
              (this.loopCount = 0),
              (this.frame = 0),
              (this.tile = this.sequence[0]),
              this
            );
          },
          gotoFrame: function (e) {
            this.timer.set(this.frameTime * -e - 1e-4), this.update();
          },
          gotoRandomFrame: function () {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
          },
          update: function () {
            var e = Math.floor(this.timer.delta() / this.frameTime);
            (this.loopCount = Math.floor(e / this.sequence.length)),
              this.stop && this.loopCount > 0
                ? (this.frame = this.sequence.length - 1)
                : (this.frame = e % this.sequence.length),
              (this.tile = this.sequence[this.frame]);
          },
          draw: function (e, t) {
            var i = Math.max(this.sheet.width, this.sheet.height);
            e > ig.system.width ||
              t > ig.system.height ||
              e + i < 0 ||
              t + i < 0 ||
              (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha),
              0 == this.angle
                ? this.sheet.image.drawTile(
                    e,
                    t,
                    this.tile,
                    this.sheet.width,
                    this.sheet.height,
                    this.flip.x,
                    this.flip.y
                  )
                : (ig.system.context.save(),
                  ig.system.context.translate(
                    ig.system.getDrawPos(e + this.pivot.x),
                    ig.system.getDrawPos(t + this.pivot.y)
                  ),
                  ig.system.context.rotate(this.angle),
                  this.sheet.image.drawTile(
                    -this.pivot.x,
                    -this.pivot.y,
                    this.tile,
                    this.sheet.width,
                    this.sheet.height,
                    this.flip.x,
                    this.flip.y
                  ),
                  ig.system.context.restore()),
              1 != this.alpha && (ig.system.context.globalAlpha = 1));
          },
        }));
    }),
  (ig.baked = !0),
  ig
    .module("impact.entity")
    .requires("impact.animation", "impact.impact")
    .defines(function () {
      "use strict";
      (ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: { x: 16, y: 16 },
        offset: { x: 0, y: 0 },
        pos: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
        vel: { x: 0, y: 0 },
        accel: { x: 0, y: 0 },
        friction: { x: 0, y: 0 },
        maxVel: { x: 100, y: 100 },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: { min: (44).toRad(), max: (136).toRad() },
        init: function (e, t, i) {
          (this.id = ++ig.Entity._lastId),
            (this.pos.x = this.last.x = e),
            (this.pos.y = this.last.y = t),
            ig.merge(this, i);
        },
        reset: function (e, t, i) {
          var a = this.constructor.prototype;
          (this.pos.x = e),
            (this.pos.y = t),
            (this.last.x = e),
            (this.last.y = t),
            (this.vel.x = a.vel.x),
            (this.vel.y = a.vel.y),
            (this.accel.x = a.accel.x),
            (this.accel.y = a.accel.y),
            (this.health = a.health),
            (this._killed = a._killed),
            (this.standing = a.standing),
            (this.type = a.type),
            (this.checkAgainst = a.checkAgainst),
            (this.collides = a.collides),
            ig.merge(this, i);
        },
        addAnim: function (e, t, i, a) {
          if (!this.animSheet)
            throw "No animSheet to add the animation " + e + " to.";
          var r = new ig.Animation(this.animSheet, t, i, a);
          return (
            (this.anims[e] = r), this.currentAnim || (this.currentAnim = r), r
          );
        },
        update: function () {
          (this.last.x = this.pos.x),
            (this.last.y = this.pos.y),
            (this.vel.y +=
              ig.game.gravity * ig.system.tick * this.gravityFactor),
            (this.vel.x = this.getNewVelocity(
              this.vel.x,
              this.accel.x,
              this.friction.x,
              this.maxVel.x
            )),
            (this.vel.y = this.getNewVelocity(
              this.vel.y,
              this.accel.y,
              this.friction.y,
              this.maxVel.y
            ));
          var e = this.vel.x * ig.system.tick,
            t = this.vel.y * ig.system.tick,
            i = ig.game.collisionMap.trace(
              this.pos.x,
              this.pos.y,
              e,
              t,
              this.size.x,
              this.size.y
            );
          this.handleMovementTrace(i),
            this.currentAnim && this.currentAnim.update();
        },
        getNewVelocity: function (e, t, i, a) {
          if (t) return (e + t * ig.system.tick).limit(-a, a);
          if (i) {
            var r = i * ig.system.tick;
            return e - r > 0 ? e - r : e + r < 0 ? e + r : 0;
          }
          return e.limit(-a, a);
        },
        handleMovementTrace: function (e) {
          if (
            ((this.standing = !1),
            e.collision.y &&
              (this.bounciness > 0 &&
              Math.abs(this.vel.y) > this.minBounceVelocity
                ? (this.vel.y *= -this.bounciness)
                : (this.vel.y > 0 && (this.standing = !0), (this.vel.y = 0))),
            e.collision.x &&
              (this.bounciness > 0 &&
              Math.abs(this.vel.x) > this.minBounceVelocity
                ? (this.vel.x *= -this.bounciness)
                : (this.vel.x = 0)),
            e.collision.slope)
          ) {
            var t = e.collision.slope;
            if (this.bounciness > 0) {
              var i = this.vel.x * t.nx + this.vel.y * t.ny;
              (this.vel.x = (this.vel.x - t.nx * i * 2) * this.bounciness),
                (this.vel.y = (this.vel.y - t.ny * i * 2) * this.bounciness);
            } else {
              var a = t.x * t.x + t.y * t.y,
                r = (this.vel.x * t.x + this.vel.y * t.y) / a;
              (this.vel.x = t.x * r), (this.vel.y = t.y * r);
              var s = Math.atan2(t.x, t.y);
              s > this.slopeStanding.min &&
                s < this.slopeStanding.max &&
                (this.standing = !0);
            }
          }
          this.pos = e.pos;
        },
        draw: function () {
          this.currentAnim &&
            this.currentAnim.draw(
              this.pos.x - this.offset.x - ig.game._rscreen.x,
              this.pos.y - this.offset.y - ig.game._rscreen.y
            );
        },
        kill: function () {
          ig.game.removeEntity(this);
        },
        receiveDamage: function (e, t) {
          (this.health -= e), this.health <= 0 && this.kill();
        },
        touches: function (e) {
          return !(
            this.pos.x >= e.pos.x + e.size.x ||
            this.pos.x + this.size.x <= e.pos.x ||
            this.pos.y >= e.pos.y + e.size.y ||
            this.pos.y + this.size.y <= e.pos.y
          );
        },
        distanceTo: function (e) {
          var t = this.pos.x + this.size.x / 2 - (e.pos.x + e.size.x / 2),
            i = this.pos.y + this.size.y / 2 - (e.pos.y + e.size.y / 2);
          return Math.sqrt(t * t + i * i);
        },
        angleTo: function (e) {
          return Math.atan2(
            e.pos.y + e.size.y / 2 - (this.pos.y + this.size.y / 2),
            e.pos.x + e.size.x / 2 - (this.pos.x + this.size.x / 2)
          );
        },
        check: function (e) {},
        collideWith: function (e, t) {},
        ready: function () {},
        erase: function () {},
      })),
        (ig.Entity._lastId = 0),
        (ig.Entity.COLLIDES = {
          NEVER: 0,
          LITE: 1,
          PASSIVE: 2,
          ACTIVE: 4,
          FIXED: 8,
        }),
        (ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 }),
        (ig.Entity.checkPair = function (e, t) {
          e.checkAgainst & t.type && e.check(t),
            t.checkAgainst & e.type && t.check(e),
            e.collides &&
              t.collides &&
              e.collides + t.collides > ig.Entity.COLLIDES.ACTIVE &&
              ig.Entity.solveCollision(e, t);
        }),
        (ig.Entity.solveCollision = function (e, t) {
          var i = null;
          e.collides == ig.Entity.COLLIDES.LITE ||
          t.collides == ig.Entity.COLLIDES.FIXED
            ? (i = e)
            : (t.collides != ig.Entity.COLLIDES.LITE &&
                e.collides != ig.Entity.COLLIDES.FIXED) ||
              (i = t),
            e.last.x + e.size.x > t.last.x && e.last.x < t.last.x + t.size.x
              ? (e.last.y < t.last.y
                  ? ig.Entity.seperateOnYAxis(e, t, i)
                  : ig.Entity.seperateOnYAxis(t, e, i),
                e.collideWith(t, "y"),
                t.collideWith(e, "y"))
              : e.last.y + e.size.y > t.last.y &&
                e.last.y < t.last.y + t.size.y &&
                (e.last.x < t.last.x
                  ? ig.Entity.seperateOnXAxis(e, t, i)
                  : ig.Entity.seperateOnXAxis(t, e, i),
                e.collideWith(t, "x"),
                t.collideWith(e, "x"));
        }),
        (ig.Entity.seperateOnXAxis = function (e, t, i) {
          var a = e.pos.x + e.size.x - t.pos.x;
          if (i) {
            var r = e === i ? t : e;
            i.vel.x = -i.vel.x * i.bounciness + r.vel.x;
            var s = ig.game.collisionMap.trace(
              i.pos.x,
              i.pos.y,
              i == e ? -a : a,
              0,
              i.size.x,
              i.size.y
            );
            i.pos.x = s.pos.x;
          } else {
            var o = (e.vel.x - t.vel.x) / 2;
            (e.vel.x = -o), (t.vel.x = o);
            var n = ig.game.collisionMap.trace(
              e.pos.x,
              e.pos.y,
              -a / 2,
              0,
              e.size.x,
              e.size.y
            );
            e.pos.x = Math.floor(n.pos.x);
            var h = ig.game.collisionMap.trace(
              t.pos.x,
              t.pos.y,
              a / 2,
              0,
              t.size.x,
              t.size.y
            );
            t.pos.x = Math.ceil(h.pos.x);
          }
        }),
        (ig.Entity.seperateOnYAxis = function (e, t, i) {
          var a = e.pos.y + e.size.y - t.pos.y;
          if (i) {
            var r = e === i ? t : e;
            i.vel.y = -i.vel.y * i.bounciness + r.vel.y;
            var s = 0;
            i == e &&
              Math.abs(i.vel.y - r.vel.y) < i.minBounceVelocity &&
              ((i.standing = !0), (s = r.vel.x * ig.system.tick));
            var o = ig.game.collisionMap.trace(
              i.pos.x,
              i.pos.y,
              s,
              i == e ? -a : a,
              i.size.x,
              i.size.y
            );
            (i.pos.y = o.pos.y), (i.pos.x = o.pos.x);
          } else if (ig.game.gravity && (t.standing || e.vel.y > 0)) {
            var n = ig.game.collisionMap.trace(
              e.pos.x,
              e.pos.y,
              0,
              -(e.pos.y + e.size.y - t.pos.y),
              e.size.x,
              e.size.y
            );
            (e.pos.y = n.pos.y),
              e.bounciness > 0 && e.vel.y > e.minBounceVelocity
                ? (e.vel.y *= -e.bounciness)
                : ((e.standing = !0), (e.vel.y = 0));
          } else {
            var h = (e.vel.y - t.vel.y) / 2;
            (e.vel.y = -h), (t.vel.y = h);
            (s = t.vel.x * ig.system.tick),
              (n = ig.game.collisionMap.trace(
                e.pos.x,
                e.pos.y,
                s,
                -a / 2,
                e.size.x,
                e.size.y
              ));
            e.pos.y = n.pos.y;
            var m = ig.game.collisionMap.trace(
              t.pos.x,
              t.pos.y,
              0,
              a / 2,
              t.size.x,
              t.size.y
            );
            t.pos.y = m.pos.y;
          }
        });
    }),
  (ig.baked = !0),
  ig.module("impact.map").defines(function () {
    "use strict";
    ig.Map = ig.Class.extend({
      tilesize: 8,
      width: 1,
      height: 1,
      data: [[]],
      name: null,
      init: function (e, t) {
        (this.tilesize = e),
          (this.data = t),
          (this.height = t.length),
          (this.width = t[0].length),
          (this.pxWidth = this.width * this.tilesize),
          (this.pxHeight = this.height * this.tilesize);
      },
      getTile: function (e, t) {
        var i = Math.floor(e / this.tilesize),
          a = Math.floor(t / this.tilesize);
        return i >= 0 && i < this.width && a >= 0 && a < this.height
          ? this.data[a][i]
          : 0;
      },
      setTile: function (e, t, i) {
        var a = Math.floor(e / this.tilesize),
          r = Math.floor(t / this.tilesize);
        a >= 0 &&
          a < this.width &&
          r >= 0 &&
          r < this.height &&
          (this.data[r][a] = i);
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("impact.collision-map")
    .requires("impact.map")
    .defines(function () {
      "use strict";
      ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function (e, t, i) {
          for (var a in (this.parent(e, t),
          (this.tiledef = i || ig.CollisionMap.defaultTileDef),
          this.tiledef))
            a | (0 > this.lastSlope) && (this.lastSlope = 0 | a);
        },
        trace: function (e, t, i, a, r, s) {
          var o = {
              collision: { x: !1, y: !1, slope: !1 },
              pos: { x: e, y: t },
              tile: { x: 0, y: 0 },
            },
            n = Math.ceil(Math.max(Math.abs(i), Math.abs(a)) / this.tilesize);
          if (n > 1)
            for (
              var h = i / n, m = a / n, l = 0;
              l < n &&
              (h || m) &&
              (this._traceStep(o, e, t, h, m, r, s, i, a, l),
              (e = o.pos.x),
              (t = o.pos.y),
              o.collision.x && ((h = 0), (i = 0)),
              o.collision.y && ((m = 0), (a = 0)),
              !o.collision.slope);
              l++
            );
          else this._traceStep(o, e, t, i, a, r, s, i, a, 0);
          return o;
        },
        _traceStep: function (e, t, i, a, r, s, o, n, h, m) {
          (e.pos.x += a), (e.pos.y += r);
          var l = 0;
          if (a) {
            var c = a > 0 ? s : 0,
              u = a < 0 ? this.tilesize : 0,
              g = Math.max(Math.floor(i / this.tilesize), 0),
              p = Math.min(Math.ceil((i + o) / this.tilesize), this.height),
              x = Math.floor((e.pos.x + c) / this.tilesize),
              d = Math.floor((t + c) / this.tilesize);
            if (
              ((m > 0 || x == d || d < 0 || d >= this.width) && (d = -1),
              x >= 0 && x < this.width)
            )
              for (
                var f = g;
                f < p &&
                !(
                  -1 != d &&
                  (l = this.data[f][d]) > 1 &&
                  l <= this.lastSlope &&
                  this._checkTileDef(e, l, t, i, n, h, s, o, d, f)
                );
                f++
              )
                if (
                  1 == (l = this.data[f][x]) ||
                  l > this.lastSlope ||
                  (l > 1 && this._checkTileDef(e, l, t, i, n, h, s, o, x, f))
                ) {
                  if (l > 1 && l <= this.lastSlope && e.collision.slope) break;
                  (e.collision.x = !0),
                    (e.tile.x = l),
                    (t = e.pos.x = x * this.tilesize - c + u),
                    (n = 0);
                  break;
                }
          }
          if (r) {
            var y = r > 0 ? o : 0,
              w = r < 0 ? this.tilesize : 0,
              S = Math.max(Math.floor(e.pos.x / this.tilesize), 0),
              v = Math.min(
                Math.ceil((e.pos.x + s) / this.tilesize),
                this.width
              ),
              M =
                ((f = Math.floor((e.pos.y + y) / this.tilesize)),
                Math.floor((i + y) / this.tilesize));
            if (
              ((m > 0 || f == M || M < 0 || M >= this.height) && (M = -1),
              f >= 0 && f < this.height)
            )
              for (
                x = S;
                x < v &&
                !(
                  -1 != M &&
                  (l = this.data[M][x]) > 1 &&
                  l <= this.lastSlope &&
                  this._checkTileDef(e, l, t, i, n, h, s, o, x, M)
                );
                x++
              )
                if (
                  1 == (l = this.data[f][x]) ||
                  l > this.lastSlope ||
                  (l > 1 && this._checkTileDef(e, l, t, i, n, h, s, o, x, f))
                ) {
                  if (l > 1 && l <= this.lastSlope && e.collision.slope) break;
                  (e.collision.y = !0),
                    (e.tile.y = l),
                    (e.pos.y = f * this.tilesize - y + w);
                  break;
                }
          }
        },
        _checkTileDef: function (e, t, i, a, r, s, o, n, h, m) {
          var l = this.tiledef[t];
          if (!l) return !1;
          var c = (h + l[0]) * this.tilesize,
            u = (m + l[1]) * this.tilesize,
            g = (l[2] - l[0]) * this.tilesize,
            p = (l[3] - l[1]) * this.tilesize,
            x = l[4],
            d = i + r + (p < 0 ? o : 0) - c,
            f = a + s + (g > 0 ? n : 0) - u;
          if (g * f - p * d > 0) {
            if (r * -p + s * g < 0) return x;
            var y = Math.sqrt(g * g + p * p),
              w = p / y,
              S = -g / y,
              v = d * w + f * S,
              M = w * v,
              b = S * v;
            return M * M + b * b >= r * r + s * s
              ? x || g * (f - s) - p * (d - r) < 0.5
              : ((e.pos.x = i + r - M),
                (e.pos.y = a + s - b),
                (e.collision.slope = { x: g, y: p, nx: w, ny: S }),
                !0);
          }
          return !1;
        },
      });
      var e = 0.5,
        t = 1 / 3,
        i = 2 / 3;
      (ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, i, !0],
        6: [0, i, 1, t, !0],
        7: [0, t, 1, 0, !0],
        3: [0, 1, 1, e, !0],
        4: [0, e, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [e, 1, 1, 0, !0],
        21: [0, 1, e, 0, !0],
        32: [i, 1, 1, 0, !0],
        43: [t, 1, i, 0, !0],
        54: [0, 1, t, 0, !0],
        27: [0, 0, 1, t, !0],
        28: [0, t, 1, i, !0],
        29: [0, i, 1, 1, !0],
        25: [0, 0, 1, e, !0],
        26: [0, e, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, e, 1, !0],
        22: [e, 0, 1, 1, !0],
        33: [0, 0, t, 1, !0],
        44: [t, 0, i, 1, !0],
        55: [i, 0, 1, 1, !0],
        16: [1, t, 0, 0, !0],
        17: [1, i, 0, t, !0],
        18: [1, 1, 0, i, !0],
        14: [1, e, 0, 0, !0],
        15: [1, 1, 0, e, !0],
        13: [1, 1, 0, 0, !0],
        8: [e, 1, 0, 0, !0],
        19: [1, 1, e, 0, !0],
        30: [t, 1, 0, 0, !0],
        41: [i, 1, t, 0, !0],
        52: [1, 1, i, 0, !0],
        38: [1, i, 0, 1, !0],
        39: [1, t, 0, i, !0],
        40: [1, 0, 0, t, !0],
        36: [1, e, 0, 1, !0],
        37: [1, 0, 0, e, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, e, 1, !0],
        20: [e, 0, 0, 1, !0],
        31: [1, 0, i, 1, !0],
        42: [i, 0, t, 1, !0],
        53: [t, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1],
      }),
        (ig.CollisionMap.staticNoCollision = {
          trace: function (e, t, i, a) {
            return {
              collision: { x: !1, y: !1, slope: !1 },
              pos: { x: e + i, y: t + a },
              tile: { x: 0, y: 0 },
            };
          },
        });
    }),
  (ig.baked = !0),
  ig
    .module("impact.background-map")
    .requires("impact.map", "impact.image")
    .defines(function () {
      "use strict";
      ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: { x: 0, y: 0 },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function (e, t, i) {
          this.parent(e, t), this.setTileset(i);
        },
        setTileset: function (e) {
          (this.tilesetName = e instanceof ig.Image ? e.path : e),
            (this.tiles = new ig.Image(this.tilesetName)),
            (this.preRenderedChunks = null);
        },
        setScreenPos: function (e, t) {
          (this.scroll.x = e / this.distance),
            (this.scroll.y = t / this.distance);
        },
        preRenderMapToChunks: function () {
          var e = this.width * this.tilesize * ig.system.scale,
            t = this.height * this.tilesize * ig.system.scale;
          this.chunkSize = Math.min(Math.max(e, t), this.chunkSize);
          var i = Math.ceil(e / this.chunkSize),
            a = Math.ceil(t / this.chunkSize);
          this.preRenderedChunks = [];
          for (var r = 0; r < a; r++) {
            this.preRenderedChunks[r] = [];
            for (var s = 0; s < i; s++) {
              var o = s == i - 1 ? e - s * this.chunkSize : this.chunkSize,
                n = r == a - 1 ? t - r * this.chunkSize : this.chunkSize;
              this.preRenderedChunks[r][s] = this.preRenderChunk(s, r, o, n);
            }
          }
        },
        preRenderChunk: function (e, t, i, a) {
          var r = i / this.tilesize / ig.system.scale + 1,
            s = a / this.tilesize / ig.system.scale + 1,
            o = ((e * this.chunkSize) / ig.system.scale) % this.tilesize,
            n = ((t * this.chunkSize) / ig.system.scale) % this.tilesize,
            h = Math.floor(
              (e * this.chunkSize) / this.tilesize / ig.system.scale
            ),
            m = Math.floor(
              (t * this.chunkSize) / this.tilesize / ig.system.scale
            ),
            l = ig.$new("canvas");
          (l.width = i), (l.height = a), (l.retinaResolutionEnabled = !1);
          var c = l.getContext("2d");
          ig.System.scaleMode(l, c);
          var u = ig.system.context;
          ig.system.context = c;
          for (var g = 0; g < r; g++)
            for (var p = 0; p < s; p++)
              if (g + h < this.width && p + m < this.height) {
                var x = this.data[p + m][g + h];
                x &&
                  this.tiles.drawTile(
                    g * this.tilesize - o,
                    p * this.tilesize - n,
                    x - 1,
                    this.tilesize
                  );
              }
          return (ig.system.context = u), l;
        },
        draw: function () {
          this.tiles.loaded &&
            this.enabled &&
            (this.preRender ? this.drawPreRendered() : this.drawTiled());
        },
        drawPreRendered: function () {
          this.preRenderedChunks || this.preRenderMapToChunks();
          var e = ig.system.getDrawPos(this.scroll.x),
            t = ig.system.getDrawPos(this.scroll.y);
          if (this.repeat) {
            var i = this.width * this.tilesize * ig.system.scale;
            e = ((e % i) + i) % i;
            var a = this.height * this.tilesize * ig.system.scale;
            t = ((t % a) + a) % a;
          }
          var r = Math.max(Math.floor(e / this.chunkSize), 0),
            s = Math.max(Math.floor(t / this.chunkSize), 0),
            o = Math.ceil((e + ig.system.realWidth) / this.chunkSize),
            n = Math.ceil((t + ig.system.realHeight) / this.chunkSize),
            h = this.preRenderedChunks[0].length,
            m = this.preRenderedChunks.length;
          this.repeat || ((o = Math.min(o, h)), (n = Math.min(n, m)));
          for (var l = 0, c = s; c < n; c++) {
            for (var u = 0, g = r; g < o; g++) {
              var p = this.preRenderedChunks[c % m][g % h],
                x = -e + g * this.chunkSize - u,
                d = -t + c * this.chunkSize - l;
              ig.system.context.drawImage(p, x, d),
                ig.Image.drawCount++,
                this.debugChunks &&
                  ((ig.system.context.strokeStyle = "#f0f"),
                  ig.system.context.strokeRect(
                    x,
                    d,
                    this.chunkSize,
                    this.chunkSize
                  )),
                this.repeat &&
                  p.width < this.chunkSize &&
                  x + p.width < ig.system.realWidth &&
                  ((u += this.chunkSize - p.width), o++);
            }
            this.repeat &&
              p.height < this.chunkSize &&
              d + p.height < ig.system.realHeight &&
              ((l += this.chunkSize - p.height), n++);
          }
        },
        drawTiled: function () {
          for (
            var e = 0,
              t = null,
              i = (this.scroll.x / this.tilesize).toInt(),
              a = (this.scroll.y / this.tilesize).toInt(),
              r = this.scroll.x % this.tilesize,
              s = this.scroll.y % this.tilesize,
              o = -r - this.tilesize,
              n = -s - this.tilesize,
              h = ig.system.width + this.tilesize - r,
              m = ig.system.height + this.tilesize - s,
              l = -1,
              c = n;
            c < m;
            l++, c += this.tilesize
          ) {
            var u = l + a;
            if (u >= this.height || u < 0) {
              if (!this.repeat) continue;
              u = ((u % this.height) + this.height) % this.height;
            }
            for (var g = -1, p = o; p < h; g++, p += this.tilesize) {
              var x = g + i;
              if (x >= this.width || x < 0) {
                if (!this.repeat) continue;
                x = ((x % this.width) + this.width) % this.width;
              }
              (e = this.data[u][x]) &&
                ((t = this.anims[e - 1])
                  ? t.draw(p, c)
                  : this.tiles.drawTile(p, c, e - 1, this.tilesize));
            }
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("impact.game")
    .requires(
      "impact.impact",
      "impact.entity",
      "impact.collision-map",
      "impact.background-map"
    )
    .defines(function () {
      "use strict";
      (ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: { x: 0, y: 0 },
        _rscreen: { x: 0, y: 0 },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function () {
          return (
            (this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX),
            (ig.game = this),
            null
          );
        },
        loadLevel: function (e) {
          (this.screen = { x: 0, y: 0 }),
            (this.entities = []),
            (this.namedEntities = {});
          for (var t = 0; t < e.entities.length; t++) {
            var i = e.entities[t];
            this.spawnEntity(i.type, i.x, i.y, i.settings);
          }
          this.sortEntities(),
            (this.collisionMap = ig.CollisionMap.staticNoCollision),
            (this.backgroundMaps = []);
          for (t = 0; t < e.layer.length; t++) {
            var a = e.layer[t],
              r = "string" == typeof a.type ? ig.global[a.type] : a.type;
            if ("collision" == a.name)
              r || (r = ig.CollisionMap),
                (this.collisionMap = new r(a.tilesize, a.data));
            else {
              r || (r = ig.BackgroundMap);
              var s = new r(a.tilesize, a.data, a.tilesetName);
              (s.anims = this.backgroundAnims[a.tilesetName] || {}),
                (s.repeat = a.repeat),
                (s.distance = a.distance),
                (s.foreground = !!a.foreground),
                (s.preRender = !!a.preRender),
                (s.name = a.name),
                this.backgroundMaps.push(s);
            }
          }
          for (t = 0; t < this.entities.length; t++) this.entities[t].ready();
        },
        loadLevelDeferred: function (e) {
          this._levelToLoad = e;
        },
        getMapByName: function (e) {
          if ("collision" == e) return this.collisionMap;
          for (var t = 0; t < this.backgroundMaps.length; t++)
            if (this.backgroundMaps[t].name == e) return this.backgroundMaps[t];
          return null;
        },
        getEntityByName: function (e) {
          return this.namedEntities[e];
        },
        getEntitiesByType: function (e) {
          for (
            var t = "string" == typeof e ? ig.global[e] : e, i = [], a = 0;
            a < this.entities.length;
            a++
          ) {
            var r = this.entities[a];
            r instanceof t && !r._killed && i.push(r);
          }
          return i;
        },
        spawnEntity: function (e, t, i, a) {
          var r = "string" == typeof e ? ig.global[e] : e;
          if (!r) throw "Can't spawn entity of type " + e;
          var s = new r(t, i, a || {});
          return (
            this.entities.push(s), s.name && (this.namedEntities[s.name] = s), s
          );
        },
        sortEntities: function () {
          this.entities.sort(this.sortBy);
        },
        sortEntitiesDeferred: function () {
          this._doSortEntities = !0;
        },
        removeEntity: function (e) {
          e.name && delete this.namedEntities[e.name],
            (e._killed = !0),
            (e.type = ig.Entity.TYPE.NONE),
            (e.checkAgainst = ig.Entity.TYPE.NONE),
            (e.collides = ig.Entity.COLLIDES.NEVER),
            this._deferredKill.push(e);
        },
        run: function () {
          this.update(), this.draw();
        },
        update: function () {
          this._levelToLoad &&
            (this.loadLevel(this._levelToLoad), (this._levelToLoad = null)),
            this.updateEntities(),
            this.checkEntities();
          for (var e = 0; e < this._deferredKill.length; e++)
            this._deferredKill[e].erase(),
              this.entities.erase(this._deferredKill[e]);
          for (var t in ((this._deferredKill = []),
          (this._doSortEntities || this.autoSort) &&
            (this.sortEntities(), (this._doSortEntities = !1)),
          this.backgroundAnims)) {
            var i = this.backgroundAnims[t];
            for (var a in i) i[a].update();
          }
        },
        updateEntities: function () {
          for (var e = 0; e < this.entities.length; e++) {
            var t = this.entities[e];
            t._killed || t.update();
          }
        },
        draw: function () {
          var e;
          for (
            this.clearColor && ig.system.clear(this.clearColor),
              this._rscreen.x =
                ig.system.getDrawPos(this.screen.x) / ig.system.scale,
              this._rscreen.y =
                ig.system.getDrawPos(this.screen.y) / ig.system.scale,
              e = 0;
            e < this.backgroundMaps.length;
            e++
          ) {
            if ((t = this.backgroundMaps[e]).foreground) break;
            t.setScreenPos(this.screen.x, this.screen.y), t.draw();
          }
          for (this.drawEntities(); e < this.backgroundMaps.length; e++) {
            var t;
            (t = this.backgroundMaps[e]).setScreenPos(
              this.screen.x,
              this.screen.y
            ),
              t.draw();
          }
        },
        drawEntities: function () {
          for (var e = 0; e < this.entities.length; e++)
            this.entities[e].draw();
        },
        checkEntities: function () {
          for (var e = {}, t = 0; t < this.entities.length; t++) {
            var i = this.entities[t];
            if (
              i.type != ig.Entity.TYPE.NONE ||
              i.checkAgainst != ig.Entity.TYPE.NONE ||
              i.collides != ig.Entity.COLLIDES.NEVER
            )
              for (
                var a = {},
                  r = Math.floor(i.pos.x / this.cellSize),
                  s = Math.floor(i.pos.y / this.cellSize),
                  o = Math.floor((i.pos.x + i.size.x) / this.cellSize) + 1,
                  n = Math.floor((i.pos.y + i.size.y) / this.cellSize) + 1,
                  h = r;
                h < o;
                h++
              )
                for (var m = s; m < n; m++)
                  if (e[h])
                    if (e[h][m]) {
                      for (var l = e[h][m], c = 0; c < l.length; c++)
                        i.touches(l[c]) &&
                          !a[l[c].id] &&
                          ((a[l[c].id] = !0), ig.Entity.checkPair(i, l[c]));
                      l.push(i);
                    } else e[h][m] = [i];
                  else (e[h] = {}), (e[h][m] = [i]);
          }
        },
      })),
        (ig.Game.SORT = {
          Z_INDEX: function (e, t) {
            return e.zIndex - t.zIndex;
          },
          POS_X: function (e, t) {
            return e.pos.x + e.size.x - (t.pos.x + t.size.x);
          },
          POS_Y: function (e, t) {
            return e.pos.y + e.size.y - (t.pos.y + t.size.y);
          },
        });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.howler")
    .requires("impact.game")
    .defines(function () {
      var e = {},
        t = null,
        i = !0,
        a = !1;
      try {
        "undefined" != typeof AudioContext
          ? (t = new AudioContext())
          : "undefined" != typeof webkitAudioContext
          ? (t = new webkitAudioContext())
          : (i = !1);
      } catch (e) {
        i = !1;
      }
      if (!i)
        if ("undefined" != typeof Audio)
          try {
            new Audio();
          } catch (e) {
            a = !0;
          }
        else a = !0;
      if (i) {
        var r = void 0 === t.createGain ? t.createGainNode() : t.createGain();
        (r.gain.value = 1), r.connect(t.destination);
      }
      var s = function (e) {
        (this._volume = 1),
          (this._muted = !1),
          (this.usingWebAudio = i),
          (this.ctx = t),
          (this.noAudio = a),
          (this._howls = []),
          (this._codecs = e),
          (this.iOSAutoEnable = !0);
      };
      s.prototype = {
        volume: function (e) {
          if ((e = parseFloat(e)) >= 0 && e <= 1) {
            for (var t in ((this._volume = e),
            i && (r.gain.value = e),
            this._howls))
              if (
                this._howls.hasOwnProperty(t) &&
                !1 === this._howls[t]._webAudio
              )
                for (var a = 0; a < this._howls[t]._audioNode.length; a++)
                  this._howls[t]._audioNode[a].volume =
                    this._howls[t]._volume * this._volume;
            return this;
          }
          return i ? r.gain.value : this._volume;
        },
        mute: function () {
          return this._setMuted(!0), this;
        },
        unmute: function () {
          return this._setMuted(!1), this;
        },
        _setMuted: function (e) {
          for (var t in ((this._muted = e),
          i && (r.gain.value = e ? 0 : this._volume),
          this._howls))
            if (
              this._howls.hasOwnProperty(t) &&
              !1 === this._howls[t]._webAudio
            )
              for (var a = 0; a < this._howls[t]._audioNode.length; a++)
                this._howls[t]._audioNode[a].muted = e;
        },
        codecs: function (e) {
          return this._codecs[e];
        },
        _enableiOSAudio: function () {
          var e = this;
          if (
            !t ||
            (!e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent))
          ) {
            e._iOSEnabled = !1;
            var i = function () {
              var a = t.createBuffer(1, 1, 22050),
                r = t.createBufferSource();
              (r.buffer = a),
                r.connect(t.destination),
                r.start,
                r.start(0),
                setTimeout(function () {
                  (r.playbackState !== r.PLAYING_STATE &&
                    r.playbackState !== r.FINISHED_STATE) ||
                    ((e._iOSEnabled = !0),
                    (e.iOSAutoEnable = !1),
                    window.removeEventListener("touchstart", i, !1));
                }, 0);
            };
            return window.addEventListener("touchstart", i, !1), e;
          }
        },
      };
      var o = null,
        n = {};
      a ||
        ((o = new Audio()),
        (n = {
          mp3: !!o.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!o
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, ""),
          wav: !!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
          aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
          m4a: !!(
            o.canPlayType("audio/x-m4a;") ||
            o.canPlayType("audio/m4a;") ||
            o.canPlayType("audio/aac;")
          ).replace(/^no$/, ""),
          mp4: !!(
            o.canPlayType("audio/x-mp4;") ||
            o.canPlayType("audio/mp4;") ||
            o.canPlayType("audio/aac;")
          ).replace(/^no$/, ""),
          weba: !!o
            .canPlayType('audio/webm; codecs="vorbis"')
            .replace(/^no$/, ""),
        }));
      var h = new s(n),
        m = function (e) {
          (this._autoplay = e.autoplay || !1),
            (this._buffer = e.buffer || !1),
            (this._duration = e.duration || 0),
            (this._format = e.format || null),
            (this._loop = e.loop || !1),
            (this._loaded = !1),
            (this._sprite = e.sprite || {}),
            (this._src = e.src || ""),
            (this._pos3d = e.pos3d || [0, 0, -0.5]),
            (this._volume = void 0 !== e.volume ? e.volume : 1),
            (this._urls = e.urls || []),
            (this._rate = e.rate || 1),
            (this._model = e.model || null),
            (this._onload = [e.onload || function () {}]),
            (this._onloaderror = [e.onloaderror || function () {}]),
            (this._onend = [e.onend || function () {}]),
            (this._onpause = [e.onpause || function () {}]),
            (this._onplay = [e.onplay || function () {}]),
            (this._onendTimer = []),
            (this._webAudio = i && !this._buffer),
            (this._audioNode = []),
            this._webAudio && this._setupAudioNode(),
            void 0 !== t && t && h.iOSAutoEnable && h._enableiOSAudio(),
            h._howls.push(this),
            this.load();
        };
      if (
        ((m.prototype = {
          load: function () {
            var e = this,
              t = null;
            if (a) e.on("loaderror");
            else {
              for (var i = 0; i < e._urls.length; i++) {
                var r, o;
                if (e._format) r = e._format;
                else {
                  if (
                    ((o = e._urls[i]),
                    (r = /^data:audio\/([^;,]+);/i.exec(o)) ||
                      (r = /\.([^.]+)$/.exec(o.split("?", 1)[0])),
                    !r)
                  )
                    return void e.on("loaderror");
                  r = r[1].toLowerCase();
                }
                if (n[r]) {
                  t = e._urls[i];
                  break;
                }
              }
              if (t) {
                if (((e._src = t), e._webAudio)) l(e, t);
                else {
                  var m = new Audio();
                  m.addEventListener(
                    "error",
                    function () {
                      m.error && 4 === m.error.code && (s.noAudio = !0),
                        e.on("loaderror", { type: m.error ? m.error.code : 0 });
                    },
                    !1
                  ),
                    e._audioNode.push(m),
                    (m.src = t),
                    (m._pos = 0),
                    (m.preload = "auto");
                  try {
                    m.volume = h._muted ? 0 : e._volume * h.volume();
                  } catch (e) {
                    m.volume = 1;
                  }
                  var c = function () {
                    (e._duration = Math.ceil(10 * m.duration) / 10),
                      0 === Object.getOwnPropertyNames(e._sprite).length &&
                        (e._sprite = { _default: [0, 1e3 * e._duration] }),
                      e._loaded || ((e._loaded = !0), e.on("load")),
                      e._autoplay && e.play(),
                      m.removeEventListener("canplaythrough", c, !1);
                  };
                  m.addEventListener("canplaythrough", c, !1), m.load();
                }
                return e;
              }
              e.on("loaderror");
            }
          },
          urls: function (e) {
            return e
              ? (this.stop(),
                (this._urls = "string" == typeof e ? [e] : e),
                (this._loaded = !1),
                this.load(),
                this)
              : this._urls;
          },
          play: function (e, i) {
            var a = this;
            return (
              "function" == typeof e && (i = e),
              (e && "function" != typeof e) || (e = "_default"),
              a._loaded
                ? a._sprite[e]
                  ? (a._inactiveNode(function (r) {
                      r._sprite = e;
                      var s = r._pos > 0 ? r._pos : a._sprite[e][0] / 1e3,
                        o = 0;
                      a._webAudio
                        ? ((o = a._sprite[e][1] / 1e3 - r._pos),
                          r._pos > 0 && (s = a._sprite[e][0] / 1e3 + s))
                        : (o =
                            a._sprite[e][1] / 1e3 -
                            (s - a._sprite[e][0] / 1e3));
                      var n,
                        m,
                        l,
                        c,
                        u,
                        p,
                        x,
                        d = !(!a._loop && !a._sprite[e][2]),
                        f =
                          "string" == typeof i
                            ? i
                            : Math.round(Date.now() * Math.random()) + "";
                      if (
                        ((m = { id: f, sprite: e, loop: d }),
                        (n = setTimeout(function () {
                          !a._webAudio && d && a.stop(m.id).play(e, m.id),
                            a._webAudio &&
                              !d &&
                              ((a._nodeById(m.id).paused = !0),
                              (a._nodeById(m.id)._pos = 0),
                              a._clearEndTimer(m.id)),
                            a._webAudio || d || a.stop(m.id),
                            a.on("end", f);
                        }, 1e3 * o)),
                        a._onendTimer.push({ timer: n, id: m.id }),
                        a._webAudio)
                      ) {
                        var y = a._sprite[e][0] / 1e3,
                          w = a._sprite[e][1] / 1e3;
                        (r.id = f),
                          (r.paused = !1),
                          g(a, [d, y, w], f),
                          (a._playStart = t.currentTime),
                          (r.gain.value = a._volume),
                          void 0 === r.bufferSource.start
                            ? r.bufferSource.noteGrainOn(0, s, o)
                            : r.bufferSource.start(0, s, o);
                      } else {
                        if (
                          4 !== r.readyState &&
                          (r.readyState || !navigator.isCocoonJS)
                        )
                          return (
                            a._clearEndTimer(f),
                            (l = a),
                            (c = e),
                            (u = i),
                            (x = function () {
                              l.play(c, u),
                                p.removeEventListener("canplaythrough", x, !1);
                            }),
                            (p = r).addEventListener("canplaythrough", x, !1),
                            a
                          );
                        (r.readyState = 4),
                          (r.id = f),
                          (r.currentTime = s),
                          (r.muted = h._muted || r.muted),
                          (r.volume = a._volume * h.volume()),
                          setTimeout(function () {
                            r.play();
                          }, 0);
                      }
                      return a.on("play"), "function" == typeof i && i(f), a;
                    }),
                    a)
                  : ("function" == typeof i && i(), a)
                : (a.on("load", function () {
                    a.play(e, i);
                  }),
                  a)
            );
          },
          pause: function (e) {
            var t = this;
            if (!t._loaded)
              return (
                t.on("play", function () {
                  t.pause(e);
                }),
                t
              );
            t._clearEndTimer(e);
            var i = e ? t._nodeById(e) : t._activeNode();
            if (i)
              if (((i._pos = t.pos(null, e)), t._webAudio)) {
                if (!i.bufferSource || i.paused) return t;
                (i.paused = !0),
                  void 0 === i.bufferSource.stop
                    ? i.bufferSource.noteOff(0)
                    : i.bufferSource.stop(0);
              } else i.pause();
            return t.on("pause"), t;
          },
          stop: function (e) {
            var t = this;
            if (!t._loaded)
              return (
                t.on("play", function () {
                  t.stop(e);
                }),
                t
              );
            t._clearEndTimer(e);
            var i = e ? t._nodeById(e) : t._activeNode();
            if (i)
              if (((i._pos = 0), t._webAudio)) {
                if (!i.bufferSource || i.paused) return t;
                (i.paused = !0),
                  void 0 === i.bufferSource.stop
                    ? i.bufferSource.noteOff(0)
                    : i.bufferSource.stop(0);
              } else isNaN(i.duration) || (i.pause(), (i.currentTime = 0));
            return t;
          },
          mute: function (e) {
            var t = this;
            if (!t._loaded)
              return (
                t.on("play", function () {
                  t.mute(e);
                }),
                t
              );
            var i = e ? t._nodeById(e) : t._activeNode();
            return i && (t._webAudio ? (i.gain.value = 0) : (i.muted = !0)), t;
          },
          unmute: function (e) {
            var t = this;
            if (!t._loaded)
              return (
                t.on("play", function () {
                  t.unmute(e);
                }),
                t
              );
            var i = e ? t._nodeById(e) : t._activeNode();
            return (
              i && (t._webAudio ? (i.gain.value = t._volume) : (i.muted = !1)),
              t
            );
          },
          volume: function (e, t) {
            var i = this;
            if ((e = parseFloat(e)) >= 0 && e <= 1) {
              if (((i._volume = e), !i._loaded))
                return (
                  i.on("play", function () {
                    i.volume(e, t);
                  }),
                  i
                );
              var a = t ? i._nodeById(t) : i._activeNode();
              return (
                a &&
                  (i._webAudio
                    ? (a.gain.value = e)
                    : (a.volume = e * h.volume())),
                i
              );
            }
            return i._volume;
          },
          loop: function (e) {
            return "boolean" == typeof e
              ? ((this._loop = e), this)
              : this._loop;
          },
          sprite: function (e) {
            return "object" == typeof e
              ? ((this._sprite = e), this)
              : this._sprite;
          },
          pos: function (e, i) {
            var a = this;
            if (!a._loaded)
              return (
                a.on("load", function () {
                  a.pos(e);
                }),
                "number" == typeof e ? a : a._pos || 0
              );
            e = parseFloat(e);
            var r = i ? a._nodeById(i) : a._activeNode();
            if (r)
              return e >= 0
                ? (a.pause(i), (r._pos = e), a.play(r._sprite, i), a)
                : a._webAudio
                ? r._pos + (t.currentTime - a._playStart)
                : r.currentTime;
            if (e >= 0) return a;
            for (var s = 0; s < a._audioNode.length; s++)
              if (a._audioNode[s].paused && 4 === a._audioNode[s].readyState)
                return a._webAudio
                  ? a._audioNode[s]._pos
                  : a._audioNode[s].currentTime;
          },
          pos3d: function (e, t, i, a) {
            var r = this;
            if (
              ((t = void 0 !== t && t ? t : 0),
              (i = void 0 !== i && i ? i : -0.5),
              !r._loaded)
            )
              return (
                r.on("play", function () {
                  r.pos3d(e, t, i, a);
                }),
                r
              );
            if (!(e >= 0 || e < 0)) return r._pos3d;
            if (r._webAudio) {
              var s = a ? r._nodeById(a) : r._activeNode();
              s &&
                ((r._pos3d = [e, t, i]),
                s.panner.setPosition(e, t, i),
                (s.panner.panningModel = r._model || "HRTF"));
            }
            return r;
          },
          fade: function (e, t, i, a, r) {
            var s = this,
              o = Math.abs(e - t),
              n = e > t ? "down" : "up",
              h = o / 0.01,
              m = i / h;
            if (!s._loaded)
              return (
                s.on("load", function () {
                  s.fade(e, t, i, a, r);
                }),
                s
              );
            s.volume(e, r);
            for (var l = 1; l <= h; l++)
              !(function () {
                var e = s._volume + ("up" === n ? 0.01 : -0.01) * l,
                  i = Math.round(1e3 * e) / 1e3,
                  o = t;
                setTimeout(function () {
                  s.volume(i, r), i === o && a && a();
                }, m * l);
              })();
          },
          fadeIn: function (e, t, i) {
            return this.volume(0).play().fade(0, e, t, i);
          },
          fadeOut: function (e, t, i, a) {
            var r = this;
            return r.fade(
              r._volume,
              e,
              t,
              function () {
                i && i(), r.pause(a), r.on("end");
              },
              a
            );
          },
          _nodeById: function (e) {
            for (
              var t = this._audioNode[0], i = 0;
              i < this._audioNode.length;
              i++
            )
              if (this._audioNode[i].id === e) {
                t = this._audioNode[i];
                break;
              }
            return t;
          },
          _activeNode: function () {
            for (var e = null, t = 0; t < this._audioNode.length; t++)
              if (!this._audioNode[t].paused) {
                e = this._audioNode[t];
                break;
              }
            return this._drainPool(), e;
          },
          _inactiveNode: function (e) {
            for (var t, i = null, a = 0; a < this._audioNode.length; a++)
              if (
                this._audioNode[a].paused &&
                4 === this._audioNode[a].readyState
              ) {
                e(this._audioNode[a]), (i = !0);
                break;
              }
            if ((this._drainPool(), !i))
              if (this._webAudio) (t = this._setupAudioNode()), e(t);
              else {
                this.load(), (t = this._audioNode[this._audioNode.length - 1]);
                var r = navigator.isCocoonJS
                    ? "canplaythrough"
                    : "loadedmetadata",
                  s = function () {
                    t.removeEventListener(r, s, !1), e(t);
                  };
                t.addEventListener(r, s, !1);
              }
          },
          _drainPool: function () {
            var e,
              t = 0;
            for (e = 0; e < this._audioNode.length; e++)
              this._audioNode[e].paused && t++;
            for (e = this._audioNode.length - 1; e >= 0 && !(t <= 5); e--)
              this._audioNode[e].paused &&
                (this._webAudio && this._audioNode[e].disconnect(0),
                t--,
                this._audioNode.splice(e, 1));
          },
          _clearEndTimer: function (e) {
            for (var t = 0, i = 0; i < this._onendTimer.length; i++)
              if (this._onendTimer[i].id === e) {
                t = i;
                break;
              }
            var a = this._onendTimer[t];
            a && (clearTimeout(a.timer), this._onendTimer.splice(t, 1));
          },
          _setupAudioNode: function () {
            var e = this._audioNode,
              i = this._audioNode.length;
            return (
              (e[i] =
                void 0 === t.createGain ? t.createGainNode() : t.createGain()),
              (e[i].gain.value = this._volume),
              (e[i].paused = !0),
              (e[i]._pos = 0),
              (e[i].readyState = 4),
              e[i].connect(r),
              (e[i].panner = t.createPanner()),
              (e[i].panner.panningModel = this._model || "equalpower"),
              e[i].panner.setPosition(
                this._pos3d[0],
                this._pos3d[1],
                this._pos3d[2]
              ),
              e[i].panner.connect(e[i]),
              e[i]
            );
          },
          on: function (e, t) {
            var i = this["_on" + e];
            if ("function" == typeof t) i.push(t);
            else
              for (var a = 0; a < i.length; a++)
                t ? i[a].call(this, t) : i[a].call(this);
            return this;
          },
          off: function (e, t) {
            var i = this["_on" + e],
              a = t ? t.toString() : null;
            if (a) {
              for (var r = 0; r < i.length; r++)
                if (a === i[r].toString()) {
                  i.splice(r, 1);
                  break;
                }
            } else this["_on" + e] = [];
            return this;
          },
          unload: function () {
            for (
              var t = this, i = t._audioNode, a = 0;
              a < t._audioNode.length;
              a++
            )
              i[a].paused || (t.stop(i[a].id), t.on("end", i[a].id)),
                t._webAudio ? i[a].disconnect(0) : (i[a].src = "");
            for (a = 0; a < t._onendTimer.length; a++)
              clearTimeout(t._onendTimer[a].timer);
            var r = h._howls.indexOf(t);
            null !== r && r >= 0 && h._howls.splice(r, 1),
              delete e[t._src],
              (t = null);
          },
        }),
        i)
      )
        var l = function (t, i) {
            if (i in e) return (t._duration = e[i].duration), void u(t);
            if (/^data:[^;]+;base64,/.test(i)) {
              for (
                var a = atob(i.split(",")[1]),
                  r = new Uint8Array(a.length),
                  s = 0;
                s < a.length;
                ++s
              )
                r[s] = a.charCodeAt(s);
              c(r.buffer, t, i);
            } else {
              var o = new XMLHttpRequest();
              o.open("GET", i, !0),
                (o.responseType = "arraybuffer"),
                (o.onload = function () {
                  c(o.response, t, i);
                }),
                (o.onerror = function () {
                  t._webAudio &&
                    ((t._buffer = !0),
                    (t._webAudio = !1),
                    (t._audioNode = []),
                    delete t._gainNode,
                    delete e[i],
                    t.load());
                });
              try {
                o.send();
              } catch (e) {
                o.onerror();
              }
            }
          },
          c = function (i, a, r) {
            t.decodeAudioData(
              i,
              function (t) {
                t && ((e[r] = t), u(a, t));
              },
              function (e) {
                a.on("loaderror");
              }
            );
          },
          u = function (e, t) {
            (e._duration = t ? t.duration : e._duration),
              0 === Object.getOwnPropertyNames(e._sprite).length &&
                (e._sprite = { _default: [0, 1e3 * e._duration] }),
              e._loaded || ((e._loaded = !0), e.on("load")),
              e._autoplay && e.play();
          },
          g = function (i, a, r) {
            var s = i._nodeById(r);
            (s.bufferSource = t.createBufferSource()),
              (s.bufferSource.buffer = e[i._src]),
              s.bufferSource.connect(s.panner),
              (s.bufferSource.loop = a[0]),
              a[0] &&
                ((s.bufferSource.loopStart = a[1]),
                (s.bufferSource.loopEnd = a[1] + a[2])),
              (s.bufferSource.playbackRate.value = i._rate);
          };
      "function" == typeof define &&
        define.amd &&
        define(function () {
          return { Howler: h, Howl: m };
        }),
        "undefined" != typeof exports &&
          ((exports.Howler = h), (exports.Howl = m)),
        "undefined" != typeof window &&
          ((window.Howler = h), (window.Howl = m));
    }),
  (ig.baked = !0),
  ig
    .module("plugins.texture-atlas")
    .requires("impact.animation", "impact.image", "impact.entity")
    .defines(function () {
      "use strict";
      ig.Entity.inject({
        addTextureAtlasAnim: function (e, t, i, a, r, s) {
          if (!e) throw "No texture atlas to add the animation from!";
          if (!t) throw "No name to call the animation!";
          var o = new ig.TextureAtlasAnimation(e, i, a, r, s);
          return (
            (this.anims[t] = o), this.currentAnim || (this.currentAnim = o), o
          );
        },
      }),
        (ig.TextureAtlas = ig.Class.extend({
          image: null,
          packedTexture: null,
          width: 0,
          height: 0,
          init: function (e, t) {
            if (((this.image = e), null == t)) throw "Packed texture is null!";
            (this.packedTexture = t),
              (this.width = t.meta.size.w),
              (this.height = t.meta.size.h);
          },
          getFrameData: function (e) {
            var t = 0;
            for (t = 0; t < this.packedTexture.frames.length; t++)
              if (this.packedTexture.frames[t].filename == e)
                return this.packedTexture.frames[t];
            throw "Frame: " + e + " does not exist!";
          },
        })),
        (ig.TextureAtlasAnimation = ig.Animation.extend({
          textureAtlas: null,
          maintainFrameOffset: !1,
          frameData: 0,
          image: null,
          ex: null,
          init: function (e, t, i, a, r) {
            (this.textureAtlas = e),
              (this.timer = new ig.Timer()),
              (this.frameTime = t),
              (this.sequence = i),
              (this.frameData = this.textureAtlas.getFrameData(
                this.sequence[0]
              )),
              (this.stop = !!a),
              r && (this.maintainFrameOffset = r);
          },
          rewind: function () {
            return (
              this.timer.reset(),
              (this.loopCount = 0),
              (this.frameData = this.textureAtlas.getFrameData(
                this.sequence[0]
              )),
              this
            );
          },
          update: function () {
            var e = Math.floor(this.timer.delta() / this.frameTime);
            (this.loopCount = Math.floor(e / this.sequence.length)),
              this.stop && this.loopCount > 0
                ? (this.frame = this.sequence.length - 1)
                : (this.frame = e % this.sequence.length),
              (this.frameData = this.textureAtlas.getFrameData(
                this.sequence[this.frame]
              ));
          },
          draw: function (e, t, i) {
            (this.ex = i), 1 != this.ex && (this.ex = !1);
            var a = Math.max(this.textureAtlas.width, this.textureAtlas.height),
              r = e,
              s = t;
            if (
              (this.frameData.trimmed &&
                this.maintainFrameOffset &&
                ((r += this.frameData.spriteSourceSize.x),
                (s += this.frameData.spriteSourceSize.y)),
              !(
                r > ig.system.width ||
                s > ig.system.height ||
                r + a < 0 ||
                s + a < 0
              ))
            ) {
              1 != this.alpha && (ig.system.context.globalAlpha = this.alpha);
              var o = this.frameData.filename.substring(0, 4),
                n = this.frameData.frame.w / 2,
                h = this.frameData.frame.h / 2;
              ig.system.context.save(),
                ig.system.context.translate(
                  ig.system.getDrawPos(r + n),
                  ig.system.getDrawPos(s + h)
                ),
                ig.system.context.rotate(this.angle);
              var m = this.flip.x ? -1 : 1,
                l = this.flip.y ? -1 : 1;
              (this.flip.x || this.flip.y) && ig.system.context.scale(m, l),
                1 == this.frameData.rotated
                  ? ((this.angle = (-1 * Math.PI * 90) / 180),
                    this.textureAtlas.image.draw(
                      -n,
                      -h,
                      this.frameData.frame.x,
                      this.frameData.frame.y,
                      this.frameData.frame.h,
                      this.frameData.frame.w
                    ))
                  : ((this.angle =
                      "flek" == o ? (-1 * Math.PI * 180) / 180 : 2 * Math.PI),
                    ("coin" != o &&
                      "pig0" != o &&
                      "rana" != o &&
                      "turt" != o &&
                      "dog0" != o &&
                      "catc" != o &&
                      "poll" != o &&
                      "rabb" != o &&
                      "wate" != o &&
                      "tron" != o &&
                      "./terreno.png" != this.textureAtlas.image.path &&
                      "./terrenodark.png" != this.textureAtlas.image.path) ||
                    0 != this.ex
                      ? this.textureAtlas.image.draw(
                          -n,
                          -h,
                          this.frameData.frame.x,
                          this.frameData.frame.y,
                          this.frameData.frame.w,
                          this.frameData.frame.h
                        )
                      : this.textureAtlas.image.draw(
                          -n,
                          -h,
                          this.frameData.frame.x,
                          this.frameData.frame.y,
                          this.frameData.frame.w,
                          this.frameData.frame.h,
                          "cubo"
                        )),
                ig.system.context.restore(),
                1 != this.alpha && (ig.system.context.globalAlpha = 1);
            }
          },
        })),
        (ig.TextureAtlasImage = ig.Image.extend({
          textureAtlas: null,
          frameData: 0,
          maintainFrameOffset: !1,
          imageP: null,
          init: function (e, t, i) {
            (this.textureAtlas = e),
              (this.frameData = this.textureAtlas.getFrameData(t)),
              i && (this.maintainFrameOffset = i);
          },
          draw: function (e, t) {
            var i = e,
              a = t,
              r = this.frameData.filename.substring(0, 4);
            this.frameData.trimmed &&
              this.maintainFrameOffset &&
              ((i += this.frameData.spriteSourceSize.x),
              (a += this.frameData.spriteSourceSize.y)),
              1 == this.frameData.rotated
                ? ((this.angle = (90 * Math.PI) / 180),
                  this.textureAtlas.image.draw(
                    i,
                    a,
                    this.frameData.frame.x,
                    this.frameData.frame.y,
                    this.frameData.frame.h,
                    this.frameData.frame.w
                  ))
                : ((this.angle = 2 * Math.PI),
                  "num_" == r ||
                  "best" == r ||
                  "trai" == r ||
                  "./terreno.png" == this.textureAtlas.image.path ||
                  "./static_assets.png" == this.textureAtlas.image.path ||
                  "./autoschicos.png" == this.textureAtlas.image.path ||
                  "./terrenodark.png" == this.textureAtlas.image.path ||
                  "./camiones.png" == this.textureAtlas.image.path ||
                  "./hud.png" == this.textureAtlas.image.path
                    ? this.textureAtlas.image.draw(
                        i,
                        a,
                        this.frameData.frame.x,
                        this.frameData.frame.y,
                        this.frameData.frame.w,
                        this.frameData.frame.h,
                        "cub0"
                      )
                    : this.textureAtlas.image.draw(
                        i,
                        a,
                        this.frameData.frame.x,
                        this.frameData.frame.y,
                        this.frameData.frame.w,
                        this.frameData.frame.h
                      ));
          },
        })),
        (ig.TextureAtlasFont = ig.Font.extend({
          textureAtlas: null,
          frameData: 0,
          maintainFrameOffset: !1,
          init: function (e, t, i) {
            (this.textureAtlas = e),
              (this.frameData = this.textureAtlas.getFrameData(t)),
              i && (this.maintainFrameOffset = i),
              this._loadMetrics();
          },
          _drawChar: function (e, t, i) {
            var a = ig.system.scale,
              r = this.indices[e] * a,
              s = this.widthMap[e] * a,
              o = (this.height - 2) * a,
              n = ig.system.getDrawPos(t),
              h = ig.system.getDrawPos(i);
            return (
              this.frameData.trimmed &&
                this.maintainFrameOffset &&
                ((n += this.frameData.spriteSourceSize.x),
                (h += this.frameData.spriteSourceSize.y)),
              this.textureAtlas.image.draw(
                n,
                h,
                this.frameData.frame.x + r,
                this.frameData.frame.y + 0,
                s,
                o
              ),
              this.widthMap[e] + this.letterSpacing
            );
          },
          _loadMetrics: function () {
            (this.height = this.frameData.frame.h - 1),
              (this.widthMap = []),
              (this.indices = []);
            var e = ig.$new("canvas");
            (e.width = this.frameData.frame.w),
              (e.height = this.frameData.frame.h);
            var t = e.getContext("2d");
            t.drawImage(
              this.textureAtlas.image.data,
              this.frameData.frame.x,
              this.frameData.frame.y,
              this.frameData.frame.w,
              this.frameData.frame.h,
              0,
              0,
              this.frameData.frame.w,
              this.frameData.frame.h
            );
            for (
              var i = t.getImageData(
                  0,
                  this.frameData.frame.h - 1,
                  this.frameData.frame.w,
                  1
                ),
                a = 0,
                r = 0;
              r < this.frameData.frame.w;
              r++
            ) {
              var s = 4 * r + 3;
              0 != i.data[s]
                ? a++
                : 0 == i.data[s] &&
                  a &&
                  (this.widthMap.push(a), this.indices.push(r - a), 0, (a = 0));
            }
            this.widthMap.push(a), this.indices.push(r - a);
          },
        }));
    }),
  (ig.baked = !0),
  ig.module("plugins.packed-textures").defines(function () {
    "use strict";
    ig.PackedTextures = ig.Class.extend({
      terrenos: {
        frames: [
          {
            filename: "t9.png",
            frame: { x: 2, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t11.png",
            frame: { x: 120, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t1.png",
            frame: { x: 238, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t2.png",
            frame: { x: 2, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t3.png",
            frame: { x: 2, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t4.png",
            frame: { x: 2, y: 293, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t5.png",
            frame: { x: 120, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t6.png",
            frame: { x: 238, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t7.png",
            frame: { x: 120, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t8.png",
            frame: { x: 120, y: 293, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t10.png",
            frame: { x: 238, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "terreno.png",
          format: "RGBA8888",
          size: { w: 390, h: 390 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:9e8314cc7ad1e8029d29058b5035eecf:0f608ed2f1c3a6c24b08a7751ed94dca:3cbf56353789272f4cbe8d21828ade6b$",
        },
      },
      terrenosDark: {
        frames: [
          {
            filename: "t9.png",
            frame: { x: 2, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t11.png",
            frame: { x: 120, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t1.png",
            frame: { x: 238, y: 2, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t2.png",
            frame: { x: 2, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t3.png",
            frame: { x: 2, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t4.png",
            frame: { x: 2, y: 293, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t5.png",
            frame: { x: 120, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t6.png",
            frame: { x: 238, y: 99, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t7.png",
            frame: { x: 120, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t8.png",
            frame: { x: 120, y: 293, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "t10.png",
            frame: { x: 238, y: 196, w: 116, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 116, h: 95 },
            sourceSize: { w: 116, h: 95 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "terrenodark.png",
          format: "RGBA8888",
          size: { w: 390, h: 390 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:9e8314cc7ad1e8029d29058b5035eecf:0f608ed2f1c3a6c24b08a7751ed94dca:3cbf56353789272f4cbe8d21828ade6b$",
        },
      },
      rana: {
        frames: [
          {
            filename: "rana0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rana0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "rana.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:63e22d315d369ca9268267bf90455d53:a0a296f0f3d97e6282abcb867509da48:d1639bc0a5db9fa996e48b73fb2d546c$",
        },
      },
      chancho: {
        frames: [
          {
            filename: "pig0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pig0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "pig.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:ee4fb7367d642ad8d04cda469c63fb26:85e0203e2e9ca39adf55417e61dd77f6:4dd13c7db2d2fc02b6406b8a7f7d5ecc$",
        },
      },
      perro: {
        frames: [
          {
            filename: "dog0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "dog0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "dog.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:8c8df6c0191413cbef783cdf37299c9c:411c6c80a687a4d264bc96ea0e8989e5:ec6c3e0b9eb3cd3c555a7c426f3b0ee8$",
        },
      },
      gato: {
        frames: [
          {
            filename: "catcut0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "catcut0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "cat.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:1bcdad5199b7b6ad2c48b78504f179a9:2b36744d78d6c980941a360e08c421b5:0c90b9ae8b3d48d6500f6626a5b7af7b$",
        },
      },
      conejo: {
        frames: [
          {
            filename: "rabbit0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rabbit0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "conejo.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:cd66c2da331361b623b4e882b5f40fe9:cf6076f787144738f7c0644f43d43cd6:24847369a21bdf9d0fdec806a17e10b0$",
        },
      },
      pollo: {
        frames: [
          {
            filename: "pollochic0001.png",
            frame: { x: 2, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0002.png",
            frame: { x: 156, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0003.png",
            frame: { x: 310, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0004.png",
            frame: { x: 464, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0005.png",
            frame: { x: 618, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0006.png",
            frame: { x: 772, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0007.png",
            frame: { x: 926, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0008.png",
            frame: { x: 1080, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0009.png",
            frame: { x: 1234, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0010.png",
            frame: { x: 1388, y: 2, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0011.png",
            frame: { x: 2, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0012.png",
            frame: { x: 2, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0013.png",
            frame: { x: 2, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0014.png",
            frame: { x: 2, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0015.png",
            frame: { x: 2, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0016.png",
            frame: { x: 2, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0017.png",
            frame: { x: 2, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0018.png",
            frame: { x: 2, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0019.png",
            frame: { x: 2, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0020.png",
            frame: { x: 2, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0021.png",
            frame: { x: 156, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0022.png",
            frame: { x: 310, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0023.png",
            frame: { x: 464, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0024.png",
            frame: { x: 618, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0025.png",
            frame: { x: 772, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0026.png",
            frame: { x: 926, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0027.png",
            frame: { x: 1080, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0028.png",
            frame: { x: 1234, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0029.png",
            frame: { x: 1388, y: 140, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0030.png",
            frame: { x: 156, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0031.png",
            frame: { x: 156, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0032.png",
            frame: { x: 156, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0033.png",
            frame: { x: 156, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0034.png",
            frame: { x: 156, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0035.png",
            frame: { x: 156, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0036.png",
            frame: { x: 156, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0037.png",
            frame: { x: 156, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0038.png",
            frame: { x: 156, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0039.png",
            frame: { x: 310, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0040.png",
            frame: { x: 464, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0041.png",
            frame: { x: 618, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0042.png",
            frame: { x: 772, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0043.png",
            frame: { x: 926, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0044.png",
            frame: { x: 1080, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0045.png",
            frame: { x: 1234, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0046.png",
            frame: { x: 1388, y: 278, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0047.png",
            frame: { x: 310, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0048.png",
            frame: { x: 310, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0049.png",
            frame: { x: 310, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0050.png",
            frame: { x: 310, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0051.png",
            frame: { x: 310, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0052.png",
            frame: { x: 310, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0053.png",
            frame: { x: 310, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0054.png",
            frame: { x: 310, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0055.png",
            frame: { x: 464, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0056.png",
            frame: { x: 618, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0057.png",
            frame: { x: 772, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0058.png",
            frame: { x: 926, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0059.png",
            frame: { x: 1080, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0060.png",
            frame: { x: 1234, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0061.png",
            frame: { x: 1388, y: 416, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0062.png",
            frame: { x: 464, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0063.png",
            frame: { x: 464, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0064.png",
            frame: { x: 464, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0065.png",
            frame: { x: 464, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0066.png",
            frame: { x: 464, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0067.png",
            frame: { x: 464, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0068.png",
            frame: { x: 464, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0069.png",
            frame: { x: 618, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0070.png",
            frame: { x: 772, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0071.png",
            frame: { x: 926, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0072.png",
            frame: { x: 1080, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0073.png",
            frame: { x: 1234, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0074.png",
            frame: { x: 1388, y: 554, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0075.png",
            frame: { x: 618, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0076.png",
            frame: { x: 618, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0077.png",
            frame: { x: 618, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0078.png",
            frame: { x: 618, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0079.png",
            frame: { x: 618, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0080.png",
            frame: { x: 618, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0081.png",
            frame: { x: 772, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0082.png",
            frame: { x: 926, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0083.png",
            frame: { x: 1080, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0084.png",
            frame: { x: 1234, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0085.png",
            frame: { x: 1388, y: 692, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0086.png",
            frame: { x: 772, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0087.png",
            frame: { x: 772, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0088.png",
            frame: { x: 772, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0089.png",
            frame: { x: 772, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0090.png",
            frame: { x: 772, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0091.png",
            frame: { x: 926, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0092.png",
            frame: { x: 1080, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0093.png",
            frame: { x: 1234, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0094.png",
            frame: { x: 1388, y: 830, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0095.png",
            frame: { x: 926, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0096.png",
            frame: { x: 926, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0097.png",
            frame: { x: 926, y: 1244, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0098.png",
            frame: { x: 926, y: 1382, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0099.png",
            frame: { x: 1080, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0100.png",
            frame: { x: 1234, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0101.png",
            frame: { x: 1388, y: 968, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "pollochic0102.png",
            frame: { x: 1080, y: 1106, w: 152, h: 136 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 136 },
            sourceSize: { w: 152, h: 136 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "chick.png",
          format: "RGBA8888",
          size: { w: 1542, h: 1542 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:a6214017a3300ef35af740db0444be05:60e46f5b7d969e7cfcf7c91ac04adbff:5aca92c69d6ef9dd60ff67eedfdcb0cd$",
        },
      },
      waterSplash: {
        frames: [
          {
            filename: "water0001.png",
            frame: { x: 2, y: 2, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0002.png",
            frame: { x: 245, y: 2, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0003.png",
            frame: { x: 488, y: 2, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0004.png",
            frame: { x: 731, y: 2, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0005.png",
            frame: { x: 974, y: 2, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0006.png",
            frame: { x: 2, y: 208, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0007.png",
            frame: { x: 245, y: 208, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0008.png",
            frame: { x: 488, y: 208, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0009.png",
            frame: { x: 731, y: 208, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0010.png",
            frame: { x: 974, y: 208, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0011.png",
            frame: { x: 2, y: 414, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0012.png",
            frame: { x: 245, y: 414, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0013.png",
            frame: { x: 488, y: 414, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0014.png",
            frame: { x: 731, y: 414, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0015.png",
            frame: { x: 974, y: 414, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0016.png",
            frame: { x: 2, y: 620, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0017.png",
            frame: { x: 2, y: 826, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0018.png",
            frame: { x: 2, y: 1032, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0019.png",
            frame: { x: 2, y: 1238, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0020.png",
            frame: { x: 2, y: 1444, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0021.png",
            frame: { x: 245, y: 620, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0022.png",
            frame: { x: 488, y: 620, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0023.png",
            frame: { x: 731, y: 620, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0024.png",
            frame: { x: 974, y: 620, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0025.png",
            frame: { x: 245, y: 826, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0026.png",
            frame: { x: 245, y: 1032, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0027.png",
            frame: { x: 245, y: 1238, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0028.png",
            frame: { x: 245, y: 1444, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0029.png",
            frame: { x: 488, y: 826, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0030.png",
            frame: { x: 731, y: 826, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0031.png",
            frame: { x: 974, y: 826, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0032.png",
            frame: { x: 488, y: 1032, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0033.png",
            frame: { x: 488, y: 1238, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0034.png",
            frame: { x: 488, y: 1444, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0035.png",
            frame: { x: 731, y: 1032, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0036.png",
            frame: { x: 974, y: 1032, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0037.png",
            frame: { x: 731, y: 1238, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0038.png",
            frame: { x: 974, y: 1238, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0039.png",
            frame: { x: 731, y: 1444, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "water0040.png",
            frame: { x: 974, y: 1444, w: 241, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 204 },
            sourceSize: { w: 241, h: 204 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "watersplashB.png",
          format: "RGBA8888",
          size: { w: 1217, h: 1650 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:8ca73404041a93320d904336b7957fa7:c4b99672c72e57459e8bb4c710c377ec:d0844f6f554506c614216a50d7c4ca16$",
        },
      },
      hud: {
        frames: [
          {
            filename: "0.png",
            frame: { x: 1930, y: 2, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "0g.png",
            frame: { x: 1358, y: 563, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "1.png",
            frame: { x: 1930, y: 61, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "100c.png",
            frame: { x: 1425, y: 525, w: 131, h: 34 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 131, h: 34 },
            sourceSize: { w: 131, h: 34 },
            pivot: { x: 0.492366, y: 0.470588 },
          },
          {
            filename: "1g.png",
            frame: { x: 1930, y: 120, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "2.png",
            frame: { x: 1558, y: 525, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "200c.png",
            frame: { x: 1225, y: 563, w: 131, h: 34 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 131, h: 34 },
            sourceSize: { w: 131, h: 34 },
            pivot: { x: 0.492366, y: 0.470588 },
          },
          {
            filename: "2g.png",
            frame: { x: 1927, y: 378, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "3.png",
            frame: { x: 1927, y: 437, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "300c.png",
            frame: { x: 1225, y: 599, w: 131, h: 34 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 131, h: 34 },
            sourceSize: { w: 131, h: 34 },
            pivot: { x: 0.492366, y: 0.470588 },
          },
          {
            filename: "3g.png",
            frame: { x: 1927, y: 496, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "4.png",
            frame: { x: 1609, y: 557, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "400c.png",
            frame: { x: 1787, y: 514, w: 131, h: 34 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 131, h: 34 },
            sourceSize: { w: 131, h: 34 },
            pivot: { x: 0.492366, y: 0.470588 },
          },
          {
            filename: "4g.png",
            frame: { x: 1660, y: 557, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "5.png",
            frame: { x: 1711, y: 557, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "500c.png",
            frame: { x: 1633, y: 521, w: 131, h: 34 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 131, h: 34 },
            sourceSize: { w: 131, h: 34 },
            pivot: { x: 0.492366, y: 0.470588 },
          },
          {
            filename: "5g.png",
            frame: { x: 1762, y: 557, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "6.png",
            frame: { x: 1813, y: 550, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "6g.png",
            frame: { x: 1864, y: 550, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "7.png",
            frame: { x: 1915, y: 555, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "7g.png",
            frame: { x: 1966, y: 555, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "8.png",
            frame: { x: 1519, y: 593, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "8g.png",
            frame: { x: 1941, y: 179, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "9.png",
            frame: { x: 1941, y: 238, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "9g.png",
            frame: { x: 1941, y: 297, w: 49, h: 57 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 49, h: 57 },
            sourceSize: { w: 49, h: 57 },
            pivot: { x: 0.479592, y: 0.482456 },
          },
          {
            filename: "backbtn.png",
            frame: { x: 1787, y: 378, w: 138, h: 134 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 138, h: 134 },
            sourceSize: { w: 138, h: 134 },
            pivot: { x: 0.492754, y: 0.492537 },
          },
          {
            filename: "backbutton.png",
            frame: { x: 1633, y: 235, w: 152, h: 141 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 141 },
            sourceSize: { w: 152, h: 141 },
            pivot: { x: 0.493421, y: 0.492908 },
          },
          {
            filename: "bestmark.png",
            frame: { x: 966, y: 563, w: 257, h: 95 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 257, h: 95 },
            sourceSize: { w: 257, h: 95 },
            pivot: { x: 0.496109, y: 0.489474 },
          },
          {
            filename: "chooseyourpet.png",
            frame: { x: 2, y: 2, w: 962, h: 355 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 962, h: 355 },
            sourceSize: { w: 962, h: 355 },
            pivot: { x: 0.49896, y: 0.497183 },
          },
          {
            filename: "coins.png",
            frame: { x: 1425, y: 561, w: 108, h: 30 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 108, h: 30 },
            sourceSize: { w: 108, h: 30 },
            pivot: { x: 0.490741, y: 0.466667 },
          },
          {
            filename: "newhi.png",
            frame: { x: 966, y: 2, w: 962, h: 231 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 962, h: 231 },
            sourceSize: { w: 962, h: 231 },
            pivot: { x: 0.49896, y: 0.495671 },
          },
          {
            filename: "petsbutton.png",
            frame: { x: 1633, y: 378, w: 152, h: 141 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 141 },
            sourceSize: { w: 152, h: 141 },
            pivot: { x: 0.493421, y: 0.492908 },
          },
          {
            filename: "replay.png",
            frame: { x: 1787, y: 235, w: 152, h: 141 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 152, h: 141 },
            sourceSize: { w: 152, h: 141 },
            pivot: { x: 0.493421, y: 0.492908 },
          },
          {
            filename: "roadcrossinglogo.png",
            frame: { x: 966, y: 235, w: 665, h: 288 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 665, h: 288 },
            sourceSize: { w: 665, h: 288 },
            pivot: { x: 0.498496, y: 0.496528 },
          },
          {
            filename: "score.png",
            frame: { x: 1409, y: 593, w: 108, h: 30 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 108, h: 30 },
            sourceSize: { w: 108, h: 30 },
            pivot: { x: 0.490741, y: 0.466667 },
          },
          {
            filename: "taptostart.png",
            frame: { x: 966, y: 525, w: 457, h: 36 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 457, h: 36 },
            sourceSize: { w: 457, h: 36 },
            pivot: { x: 0.497812, y: 0.472222 },
          },
          {
            filename: "yourscorebest.png",
            frame: { x: 2, y: 359, w: 962, h: 299 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 962, h: 299 },
            sourceSize: { w: 962, h: 299 },
            pivot: { x: 0.49896, y: 0.496656 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "hud.png",
          format: "RGBA8888",
          size: { w: 2017, h: 660 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:d38919d4369d6753e7836e5d1744ffac:791d71ef538bb41a86bf33cbee962b27:1f12e3a3d447c2b9be1f7d9b1846589c$",
        },
      },
      autoschicos: {
        frames: [
          {
            filename: "autoB-azul-B.png",
            frame: { x: 2, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-azul-F.png",
            frame: { x: 2, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-celeste-B.png",
            frame: { x: 2, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-celeste-F.png",
            frame: { x: 2, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-rojo-B.png",
            frame: { x: 2, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-rojo-F.png",
            frame: { x: 2, y: 677, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-rosa-B.png",
            frame: { x: 200, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoB-rosa-F.png",
            frame: { x: 200, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-azul-B.png",
            frame: { x: 200, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-azul-F.png",
            frame: { x: 200, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-morado-B.png",
            frame: { x: 200, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-morado-F.png",
            frame: { x: 200, y: 677, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-naranja-B.png",
            frame: { x: 398, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-naranja-F.png",
            frame: { x: 596, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-verde-B.png",
            frame: { x: 794, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "autoC-verde-F.png",
            frame: { x: 992, y: 2, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camionera-naranja-B.png",
            frame: { x: 398, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-azul-B.png",
            frame: { x: 596, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-azul-F.png",
            frame: { x: 794, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-fris-B.png",
            frame: { x: 992, y: 137, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-gris-F.png",
            frame: { x: 398, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-naranja-F.png",
            frame: { x: 398, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-purpura-B.png",
            frame: { x: 398, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "Camioneta-purpura-F.png",
            frame: { x: 398, y: 677, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-amarillo-B.png",
            frame: { x: 596, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-amarillo-F.png",
            frame: { x: 794, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-azul-back.png",
            frame: { x: 992, y: 272, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-azul-front.png",
            frame: { x: 596, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-rojo-B.png",
            frame: { x: 596, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-rojo-F.png",
            frame: { x: 596, y: 677, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-rosa-B.png",
            frame: { x: 794, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-rosa-F.png",
            frame: { x: 992, y: 407, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-verde-B.png",
            frame: { x: 794, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "carA-verde-F.png",
            frame: { x: 992, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "taxiB.png",
            frame: { x: 794, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "taxiF.png",
            frame: { x: 992, y: 542, w: 196, h: 133 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 133 },
            sourceSize: { w: 196, h: 133 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "autoschicos.png",
          format: "RGBA8888",
          size: { w: 1190, h: 812 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:aa2b41bcd14e4c6c423ad04c82382f9f:6619f95b387605aa0302944b8d934fd3:d4a10c394ceb04a5ad27265bd2b8488c$",
        },
      },
      camiones: {
        frames: [
          {
            filename: "bus-amarillo-B.png",
            frame: { x: 2, y: 2, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "bus-amarillo-F.png",
            frame: { x: 366, y: 2, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "bus-blanco-B.png",
            frame: { x: 730, y: 2, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "bus-blanco-F.png",
            frame: { x: 2, y: 222, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-amarillo-B.png",
            frame: { x: 2, y: 442, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-amarillo-F.png",
            frame: { x: 2, y: 662, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-azul-B.png",
            frame: { x: 366, y: 222, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-azul-F.png",
            frame: { x: 730, y: 222, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-rojo-B.png",
            frame: { x: 366, y: 442, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-rojo-F.png",
            frame: { x: 730, y: 442, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-verde-B.png",
            frame: { x: 366, y: 662, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "camion-verde-F.png",
            frame: { x: 730, y: 662, w: 362, h: 218 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 362, h: 218 },
            sourceSize: { w: 362, h: 218 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "camiones.png",
          format: "RGBA8888",
          size: { w: 1094, h: 882 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:4db5b67a81e2c4f56ed66ba5e194d497:ed831b5f3c1a8a8139d9fe84a2c2aa38:5bdfe5d4ae4e268df3c2e05217047873$",
        },
      },
      staticsAssets: {
        frames: [
          {
            filename: "arbolA.png",
            frame: { x: 2, y: 454, w: 172, h: 164 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 172, h: 164 },
            sourceSize: { w: 172, h: 164 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "arbolB.png",
            frame: { x: 176, y: 454, w: 149, h: 140 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 149, h: 140 },
            sourceSize: { w: 149, h: 140 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "arbolC.png",
            frame: { x: 2, y: 2, w: 241, h: 252 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 241, h: 252 },
            sourceSize: { w: 241, h: 252 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "arbolD.png",
            frame: { x: 200, y: 256, w: 195, h: 195 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 195, h: 195 },
            sourceSize: { w: 195, h: 195 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "arbolE.png",
            frame: { x: 2, y: 256, w: 196, h: 196 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 196, h: 196 },
            sourceSize: { w: 196, h: 196 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "arbolF.png",
            frame: { x: 327, y: 551, w: 73, h: 65 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 73, h: 65 },
            sourceSize: { w: 73, h: 65 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0001.png",
            frame: { x: 402, y: 551, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0002.png",
            frame: { x: 245, y: 200, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0003.png",
            frame: { x: 293, y: 200, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0004.png",
            frame: { x: 341, y: 200, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0005.png",
            frame: { x: 397, y: 398, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0006.png",
            frame: { x: 445, y: 398, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0007.png",
            frame: { x: 493, y: 398, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0008.png",
            frame: { x: 541, y: 398, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0009.png",
            frame: { x: 555, y: 435, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0010.png",
            frame: { x: 555, y: 472, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0011.png",
            frame: { x: 555, y: 509, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0012.png",
            frame: { x: 450, y: 533, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0013.png",
            frame: { x: 498, y: 533, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0014.png",
            frame: { x: 546, y: 546, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "coin0015.png",
            frame: { x: 450, y: 570, w: 46, h: 35 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 46, h: 35 },
            sourceSize: { w: 46, h: 35 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rockA.png",
            frame: { x: 327, y: 453, w: 112, h: 96 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 112, h: 96 },
            sourceSize: { w: 112, h: 96 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rockB.png",
            frame: { x: 441, y: 435, w: 112, h: 96 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 112, h: 96 },
            sourceSize: { w: 112, h: 96 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rockC.png",
            frame: { x: 433, y: 2, w: 112, h: 96 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 112, h: 96 },
            sourceSize: { w: 112, h: 96 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "rockD.png",
            frame: { x: 433, y: 100, w: 112, h: 96 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 112, h: 96 },
            sourceSize: { w: 112, h: 96 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "semaforo1.png",
            frame: { x: 245, y: 2, w: 186, h: 196 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 186, h: 196 },
            sourceSize: { w: 186, h: 196 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "semaforo2.png",
            frame: { x: 397, y: 200, w: 186, h: 196 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 186, h: 196 },
            sourceSize: { w: 186, h: 196 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "static_assets.png",
          format: "RGBA8888",
          size: { w: 620, h: 620 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:2a31e609b1e15cadd2c43e7b4526f7c6:2b94bc9d368fd279678647932fb495ab:0d008675e80a8ce650a7b86d90d8b922$",
        },
      },
      troncoLargo: {
        frames: [
          {
            filename: "troncolargo0001.png",
            frame: { x: 2, y: 2, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0002.png",
            frame: { x: 2, y: 124, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0003.png",
            frame: { x: 2, y: 246, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0004.png",
            frame: { x: 2, y: 368, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0005.png",
            frame: { x: 277, y: 2, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0006.png",
            frame: { x: 552, y: 2, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0007.png",
            frame: { x: 277, y: 124, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0008.png",
            frame: { x: 552, y: 124, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0009.png",
            frame: { x: 277, y: 246, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0010.png",
            frame: { x: 552, y: 246, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0011.png",
            frame: { x: 277, y: 368, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncolargo0012.png",
            frame: { x: 552, y: 368, w: 273, h: 120 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 273, h: 120 },
            sourceSize: { w: 273, h: 120 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "tronco_largo.png",
          format: "RGBA8888",
          size: { w: 827, h: 490 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:2b934d9fb5ac7533a78db29d97b6d8a4:e17e4f9bff6b2eebcaf672c1345c6804:d3a9248b32d5164fd0a2a8285a1808ad$",
        },
      },
      troncoCorto: {
        frames: [
          {
            filename: "troncoshort0001.png",
            frame: { x: 2, y: 2, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0002.png",
            frame: { x: 194, y: 2, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0003.png",
            frame: { x: 386, y: 2, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0004.png",
            frame: { x: 2, y: 101, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0005.png",
            frame: { x: 2, y: 200, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0006.png",
            frame: { x: 2, y: 299, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0007.png",
            frame: { x: 194, y: 101, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0008.png",
            frame: { x: 386, y: 101, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0009.png",
            frame: { x: 194, y: 200, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0010.png",
            frame: { x: 386, y: 200, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0011.png",
            frame: { x: 194, y: 299, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "troncoshort0012.png",
            frame: { x: 386, y: 299, w: 190, h: 97 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 190, h: 97 },
            sourceSize: { w: 190, h: 97 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "tronco_corto.png",
          format: "RGBA8888",
          size: { w: 578, h: 398 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:93bb5d892cf609b7ae99318034a14451:2905c4a21d111b3a7b103e4fbd826ad3:5fa7ed0ddd221460aca8a152ae0a29ef$",
        },
      },
      tortuga: {
        frames: [
          {
            filename: "turtlecut0001.png",
            frame: { x: 2, y: 2, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0002.png",
            frame: { x: 97, y: 2, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0003.png",
            frame: { x: 192, y: 2, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0004.png",
            frame: { x: 287, y: 2, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0005.png",
            frame: { x: 2, y: 65, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0006.png",
            frame: { x: 97, y: 65, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0007.png",
            frame: { x: 192, y: 65, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0008.png",
            frame: { x: 287, y: 65, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0009.png",
            frame: { x: 2, y: 128, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0010.png",
            frame: { x: 2, y: 191, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0011.png",
            frame: { x: 2, y: 254, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0012.png",
            frame: { x: 2, y: 317, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0013.png",
            frame: { x: 2, y: 380, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0014.png",
            frame: { x: 97, y: 128, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0015.png",
            frame: { x: 192, y: 128, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0016.png",
            frame: { x: 287, y: 128, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0017.png",
            frame: { x: 97, y: 191, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0018.png",
            frame: { x: 97, y: 254, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0019.png",
            frame: { x: 97, y: 317, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0020.png",
            frame: { x: 97, y: 380, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0021.png",
            frame: { x: 192, y: 191, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0022.png",
            frame: { x: 287, y: 191, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0023.png",
            frame: { x: 192, y: 254, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0024.png",
            frame: { x: 287, y: 254, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
          {
            filename: "turtlecut0025.png",
            frame: { x: 192, y: 317, w: 93, h: 61 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 93, h: 61 },
            sourceSize: { w: 93, h: 61 },
            pivot: { x: 0.5, y: 0.5 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "tortuga.png",
          format: "RGBA8888",
          size: { w: 443, h: 443 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:79f99e1a6a12ba5f709882aa84758083:5ce2b256af0292eefd57e2eb7c1cd392:8e690851e8b99a730c6b38351df46a02$",
        },
      },
      tren: {
        frames: [
          {
            filename: "traincabin.png",
            frame: { x: 2, y: 2, w: 359, h: 208 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 359, h: 208 },
            sourceSize: { w: 359, h: 208 },
            pivot: { x: 0.497214, y: 0.495192 },
          },
          {
            filename: "traincabinB.png",
            frame: { x: 363, y: 2, w: 395, h: 205 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 395, h: 205 },
            sourceSize: { w: 395, h: 205 },
            pivot: { x: 0.497468, y: 0.495122 },
          },
          {
            filename: "trainwagon.png",
            frame: { x: 2, y: 212, w: 356, h: 204 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 356, h: 204 },
            sourceSize: { w: 356, h: 204 },
            pivot: { x: 0.497191, y: 0.495098 },
          },
          {
            filename: "trainwagonB.png",
            frame: { x: 363, y: 209, w: 395, h: 205 },
            rotated: !1,
            trimmed: !1,
            spriteSourceSize: { x: 0, y: 0, w: 395, h: 205 },
            sourceSize: { w: 395, h: 205 },
            pivot: { x: 0.497468, y: 0.495122 },
          },
        ],
        meta: {
          app: "http://www.codeandweb.com/texturepacker",
          version: "1.0",
          image: "train.png",
          format: "RGBA8888",
          size: { w: 760, h: 418 },
          scale: "1",
          smartupdate:
            "$TexturePacker:SmartUpdate:e34b56e0dfc9215e646dd0e14d10cd0c:934ab32436fbf66377de30ea98a1a431:e6a9de3cc0f790d3762139913eaf1119$",
        },
      },
    });
  }),
  (ig.baked = !0),
  ig
    .module("game.entities.assets")
    .requires(
      "plugins.howler",
      "plugins.texture-atlas",
      "plugins.packed-textures"
    )
    .defines(function () {
      ig.Assets = ig.Entity.extend({
        terrenosPng: [],
        tileTerrenos: null,
        ranaPngs: null,
        pigPngs: null,
        dogPngs: null,
        catcutPngs: null,
        rabbitPngs: null,
        pollochicPngs: null,
        waterSplashPngs: null,
        title: null,
        tapStart: null,
        selectAnimal: null,
        panelAnimal: null,
        botonBackAnimal: null,
        botonReplay: null,
        scorePanel: null,
        autosI: [],
        autosD: [],
        arboles: [],
        rocas: [],
        semaforos: [],
        coin: null,
        troncoC: null,
        troncoL: null,
        tortuga: null,
        troncos: [],
        coins: [],
        tortugas: [],
        pngTiles: null,
        pngTiles2: null,
        bosinasS: [],
        pasarAutoS: [],
        saltoS: null,
        caerAguaS: null,
        troncosS: null,
        startGameS: null,
        crashS: null,
        caerS: null,
        tapS: null,
        musicSound: null,
        lossSound: null,
        terrenosPngDark: null,
        tileTerrenosDark: null,
        scoreWord: null,
        coinsWord: null,
        coinsNums: [],
        scoreNums: [],
        animalSelector: null,
        prices: [],
        bestScore: null,
        bestScorePanel: null,
        fontB: null,
        fontN: null,
        fontS: null,
        coinS: null,
        buyS: null,
        pickS: null,
        tren: null,
        trenesD: [],
        trenesI: [],
        trenBellsS: null,
        trenS: null,
        tutorialPanel: null,
        arbolesJuntos: null,
        meteoro: null,
        levels: null,
        fontDB: null,
        fontDS: null,
        mutes: [],
        moregames: null,
        flip: null,
        init: function () {
          this.creaTerrenos(),
            this.creaAnimales(),
            this.creaEfectos(),
            this.creaHud(),
            this.creaAssets(),
            this.creaAutos(),
            this.creaAudio(),
            this.creaLevels();
        },
        creaHud: function () {
          var e = new ig.Image("./hud.png"),
            t = new ig.TextureAtlas(e, new ig.PackedTextures().hud);
          (this.title = new ig.TextureAtlasImage(
            t,
            "roadcrossinglogo.png",
            !0
          )),
            (this.tapStart = new ig.TextureAtlasImage(t, "taptostart.png", !0)),
            (this.selectAnimal = new ig.TextureAtlasImage(
              t,
              "petsbutton.png",
              !0
            )),
            (this.panelAnimal = new ig.TextureAtlasImage(
              t,
              "chooseyourpet.png",
              !0
            )),
            (this.botonBackAnimal = new ig.TextureAtlasImage(
              t,
              "backbutton.png",
              !0
            )),
            (this.scorePanel = new ig.TextureAtlasImage(
              t,
              "yourscorebest.png",
              !0
            )),
            (this.botonReplay = new ig.TextureAtlasImage(t, "replay.png", !0)),
            (this.coinsWord = new ig.TextureAtlasImage(t, "coins.png", !0)),
            (this.scoreWord = new ig.TextureAtlasImage(t, "score.png", !0));
          for (var i = 0; i < 5; i++)
            this.prices[i] = new ig.TextureAtlasImage(
              t,
              100 * (i + 1) + "c.png",
              !0
            );
          (this.bestScore = new ig.Image("./best.png")),
            (this.bestScorePanel = new ig.TextureAtlasImage(
              t,
              "newhi.png",
              !0
            ));
          for (i = 0; i < 10; i++)
            (this.coinsNums[i] = new Array()),
              (this.scoreNums[i] = new Array()),
              (this.coinsNums[i][0] = new ig.TextureAtlasImage(
                t,
                i + "g.png",
                !0
              )),
              (this.coinsNums[i][1] = new ig.TextureAtlasImage(
                t,
                i + "g.png",
                !0
              )),
              (this.coinsNums[i][2] = new ig.TextureAtlasImage(
                t,
                i + "g.png",
                !0
              )),
              (this.scoreNums[i][0] = new ig.TextureAtlasImage(
                t,
                i + ".png",
                !0
              )),
              (this.scoreNums[i][1] = new ig.TextureAtlasImage(
                t,
                i + ".png",
                !0
              )),
              (this.scoreNums[i][2] = new ig.TextureAtlasImage(
                t,
                i + ".png",
                !0
              ));
          (this.fontB = new ig.Font("./fontB.png")),
            (this.fontS = new ig.Font("./fontS.png")),
            (this.fontN = new ig.Font("./fontN.png")),
            (this.fontDB = new ig.Font("./fontDinamicBig.png")),
            (this.fontDS = new ig.Font("./fontDinamicSmall.png")),
            (this.fontDS2 = new ig.Font("./fontDinamicSmall2.png")),
            (this.mutes[0] = new ig.Image("./nomute.png")),
            (this.mutes[1] = new ig.Image("./mute.png")),
            (this.flip = new ig.Image("./rotate.jpg")),
            (this.moregames = new ig.Image("./mroegames.png"));
        },
        nuevoAuto: function (e) {
          var t = this.pngTiles,
            i = this.pngTiles2;
          switch (e) {
            case 1:
              return new ig.TextureAtlasImage(t, "autoB-azul-B.png", !0);
            case 2:
              return new ig.TextureAtlasImage(t, "autoB-azul-F.png", !0);
            case 3:
              return new ig.TextureAtlasImage(t, "autoB-celeste-B.png", !0);
            case 4:
              return new ig.TextureAtlasImage(t, "autoB-celeste-F.png", !0);
            case 5:
              return new ig.TextureAtlasImage(t, "autoB-rojo-B.png", !0);
            case 6:
              return new ig.TextureAtlasImage(t, "autoB-rojo-F.png", !0);
            case 7:
              return new ig.TextureAtlasImage(t, "autoB-rosa-B.png", !0);
            case 8:
              return new ig.TextureAtlasImage(t, "autoB-rosa-F.png", !0);
            case 9:
              return new ig.TextureAtlasImage(t, "autoC-azul-B.png", !0);
            case 10:
              return new ig.TextureAtlasImage(t, "autoC-azul-F.png", !0);
            case 11:
              return new ig.TextureAtlasImage(t, "autoC-morado-B.png", !0);
            case 12:
              return new ig.TextureAtlasImage(t, "autoC-morado-F.png", !0);
            case 13:
              return new ig.TextureAtlasImage(t, "autoC-naranja-B.png", !0);
            case 14:
              return new ig.TextureAtlasImage(t, "autoC-naranja-F.png", !0);
            case 15:
              return new ig.TextureAtlasImage(t, "autoC-verde-B.png", !0);
            case 16:
              return new ig.TextureAtlasImage(t, "autoC-verde-F.png", !0);
            case 17:
              return new ig.TextureAtlasImage(i, "bus-amarillo-B.png", !0);
            case 18:
              return new ig.TextureAtlasImage(i, "bus-amarillo-F.png", !0);
            case 19:
              return new ig.TextureAtlasImage(i, "bus-blanco-B.png", !0);
            case 20:
              return new ig.TextureAtlasImage(i, "bus-blanco-F.png", !0);
            case 21:
              return new ig.TextureAtlasImage(i, "camion-amarillo-B.png", !0);
            case 22:
              return new ig.TextureAtlasImage(i, "camion-amarillo-F.png", !0);
            case 23:
              return new ig.TextureAtlasImage(i, "camion-azul-B.png", !0);
            case 24:
              return new ig.TextureAtlasImage(i, "camion-azul-F.png", !0);
            case 25:
              return new ig.TextureAtlasImage(i, "camion-rojo-B.png", !0);
            case 26:
              return new ig.TextureAtlasImage(i, "camion-rojo-F.png", !0);
            case 27:
              return new ig.TextureAtlasImage(i, "camion-verde-B.png", !0);
            case 28:
              return new ig.TextureAtlasImage(i, "camion-verde-F.png", !0);
            case 29:
              return new ig.TextureAtlasImage(t, "carA-amarillo-B.png", !0);
            case 30:
              return new ig.TextureAtlasImage(t, "carA-amarillo-F.png", !0);
            case 31:
              return new ig.TextureAtlasImage(t, "carA-azul-back.png", !0);
            case 32:
              return new ig.TextureAtlasImage(t, "carA-azul-front.png", !0);
            case 33:
              return new ig.TextureAtlasImage(t, "carA-rojo-B.png", !0);
            case 34:
              return new ig.TextureAtlasImage(t, "carA-rojo-F.png", !0);
            case 35:
              return new ig.TextureAtlasImage(t, "carA-rosa-B.png", !0);
            case 36:
              return new ig.TextureAtlasImage(t, "carA-rosa-F.png", !0);
            case 37:
              return new ig.TextureAtlasImage(t, "carA-verde-B.png", !0);
            case 38:
              return new ig.TextureAtlasImage(t, "carA-verde-F.png", !0);
            case 39:
              return new ig.TextureAtlasImage(t, "taxiB.png", !0);
            case 40:
              return new ig.TextureAtlasImage(t, "taxiF.png", !0);
            case 41:
              return new ig.TextureAtlasImage(t, "Camionera-naranja-B.png", !0);
            case 42:
              return new ig.TextureAtlasImage(t, "Camioneta-naranja-F.png", !0);
            case 43:
              return new ig.TextureAtlasImage(t, "Camioneta-azul-B.png", !0);
            case 44:
              return new ig.TextureAtlasImage(t, "Camioneta-azul-F.png", !0);
            case 45:
              return new ig.TextureAtlasImage(t, "Camioneta-fris-B.png", !0);
            case 46:
              return new ig.TextureAtlasImage(t, "Camioneta-gris-F.png", !0);
            case 47:
              return new ig.TextureAtlasImage(t, "taxiB.png", !0);
            case 48:
              return new ig.TextureAtlasImage(t, "taxiF.png", !0);
            case 49:
              return new ig.TextureAtlasImage(t, "Camioneta-purpura-B.png", !0);
            case 50:
              return new ig.TextureAtlasImage(t, "Camioneta-purpura-F.png", !0);
          }
        },
        creaLevels: function () {
          this.levels = new Array();
          for (var e = 0; e < 12; e++)
            this.levels[e] = new ig.Image("./level" + (e + 1) + ".png");
        },
        creaTerrenos: function () {
          (this.terrenosPng = new Array()),
            (this.tileTerrenos = new ig.Image("./terreno.png")),
            (this.tileTerrenos = new ig.TextureAtlas(
              this.tileTerrenos,
              new ig.PackedTextures().terrenos
            )),
            (this.terrenosDarkPng = new Array()),
            (this.tileTerrenosDark = new ig.Image("./terrenodark.png")),
            (this.tileTerrenosDark = new ig.TextureAtlas(
              this.tileTerrenosDark,
              new ig.PackedTextures().terrenosDark
            ));
          for (var e = 0; e < 11; e++)
            (this.terrenosPng[e] = new ig.TextureAtlasImage(
              this.tileTerrenos,
              "t" + (e + 1) + ".png",
              !0
            )),
              (this.terrenosDarkPng[e] = new ig.TextureAtlasImage(
                this.tileTerrenosDark,
                "t" + (e + 1) + ".png",
                !0
              ));
        },
        creaAnimales: function () {
          (this.ranaPngs = new ig.Image("./rana.png")),
            (this.ranaPngs = new ig.TextureAtlas(
              this.ranaPngs,
              new ig.PackedTextures().rana
            )),
            (this.pigPngs = new ig.Image("./chancho.png")),
            (this.pigPngs = new ig.TextureAtlas(
              this.pigPngs,
              new ig.PackedTextures().chancho
            )),
            (this.dogPngs = new ig.Image("./dog.png")),
            (this.dogPngs = new ig.TextureAtlas(
              this.dogPngs,
              new ig.PackedTextures().perro
            )),
            (this.catcutPngs = new ig.Image("./gatito.png")),
            (this.catcutPngs = new ig.TextureAtlas(
              this.catcutPngs,
              new ig.PackedTextures().gato
            )),
            (this.rabbitPngs = new ig.Image("./rabbit.png")),
            (this.rabbitPngs = new ig.TextureAtlas(
              this.rabbitPngs,
              new ig.PackedTextures().conejo
            )),
            (this.pollochicPngs = new ig.Image("./pollo.png")),
            (this.pollochicPngs = new ig.TextureAtlas(
              this.pollochicPngs,
              new ig.PackedTextures().pollo
            ));
        },
        creaEfectos: function () {
          (this.waterSplashPngs = new ig.Image("./watersplash.png")),
            (this.waterSplashPngs = new ig.TextureAtlas(
              this.waterSplashPngs,
              new ig.PackedTextures().waterSplash
            ));
        },
        creaAutos: function () {
          var e = new ig.Image("./autoschicos.png"),
            t = new ig.TextureAtlas(e, new ig.PackedTextures().autoschicos),
            i = new ig.Image("./camiones.png"),
            a = new ig.TextureAtlas(i, new ig.PackedTextures().camiones);
          (this.pngTiles = t), (this.pngTiles2 = a);
          for (var r = 0; r < 50; r++) {
            var s = Math.ceil(50 * Math.random());
            s % 2 == 0 && (s -= 1),
              (this.autosI[r][0] = this.nuevoAuto(s)),
              (this.autosI[r][1] = -1),
              (s = Math.ceil(50 * Math.random())) % 2 == 1 && (s += 1),
              (this.autosD[r][0] = this.nuevoAuto(s)),
              (this.autosD[r][1] = -1);
          }
        },
        creaAssets: function () {
          var e = new ig.Image("./static_assets.png"),
            t = new ig.TextureAtlas(e, new ig.PackedTextures().staticsAssets);
          (this.arboles[0] = new ig.TextureAtlasImage(t, "arbolA.png", !0)),
            (this.arboles[1] = new ig.TextureAtlasImage(t, "arbolB.png", !0)),
            (this.arboles[2] = new ig.TextureAtlasImage(t, "arbolC.png", !0)),
            (this.arboles[3] = new ig.TextureAtlasImage(t, "arbolD.png", !0)),
            (this.arboles[4] = new ig.TextureAtlasImage(t, "arbolE.png", !0)),
            (this.arboles[5] = new ig.TextureAtlasImage(t, "arbolF.png", !0)),
            (this.rocas[0] = new ig.TextureAtlasImage(t, "rockA.png", !0)),
            (this.rocas[1] = new ig.TextureAtlasImage(t, "rockB.png", !0)),
            (this.rocas[2] = new ig.TextureAtlasImage(t, "rockC.png", !0)),
            (this.rocas[3] = new ig.TextureAtlasImage(t, "rockD.png", !0)),
            (this.semaforos[0] = new ig.TextureAtlasImage(
              t,
              "semaforo1.png",
              !0
            )),
            (this.semaforos[1] = new ig.TextureAtlasImage(
              t,
              "semaforo2.png",
              !0
            )),
            (this.arbolesJuntos = new ig.Image("./arboles2croped.png")),
            (this.coin = t);
          var i = new ig.AnimationSheet("./meteoro.png", 347, 444);
          (this.meteoro = new ig.Animation(i, 1 / 60, [0])),
            (this.animalSelector = new ig.Image("./select_animal.png")),
            (e = new ig.Image("./tronco_corto.png")),
            (t = new ig.TextureAtlas(e, new ig.PackedTextures().troncoCorto)),
            (this.troncoC = t),
            (e = new ig.Image("./tronco_largo.png")),
            (t = new ig.TextureAtlas(e, new ig.PackedTextures().troncoLargo)),
            (this.troncoL = t),
            (e = new ig.Image("./tortuga.png")),
            (t = new ig.TextureAtlas(e, new ig.PackedTextures().tortuga)),
            (this.tortuga = t),
            (e = new ig.Image("./train.png")),
            (t = new ig.TextureAtlas(e, new ig.PackedTextures().tren)),
            (this.tren = t),
            (this.tutorialPanel = new ig.Image("./tutorial.png"));
          for (var a = 0; a < 50; a++)
            (this.autosI[a] = new Array()),
              (this.autosI[a][1] = -1),
              (this.autosD[a] = new Array()),
              (this.autosD[a][1] = -1),
              a < 36 &&
                ((this.troncos[a] = new Array()),
                (this.troncos[a][1] = -1),
                a < 12 &&
                  ((this.tortugas[a] = new Array()),
                  (this.tortugas[a][1] = -1)),
                0 == a &&
                  ((this.coins[a] = new Array()),
                  (this.coins[a][1] = -1),
                  (this.trenesD[a] = new Array()),
                  (this.trenesD[a][1] = -1),
                  (this.trenesI[a] = new Array()),
                  (this.trenesI[a][1] = -1)));
          for (a = 0; a < 36; a++)
            a < 12 &&
              (this.creaTortugas(a),
              0 == a && (this.creaMonedas(a), this.creaTrenes(a))),
              this.creaTroncos(a);
        },
        creaTrenes: function (e) {
          (this.trenesD[e][0] = new ig.TextureAtlasImage(
            this.tren,
            "traincabin.png",
            !0
          )),
            (this.trenesD[e][1] = new ig.TextureAtlasImage(
              this.tren,
              "trainwagon.png",
              !0
            )),
            (this.trenesD[e][2] = 1),
            (this.trenesI[e][0] = new ig.TextureAtlasImage(
              this.tren,
              "traincabinB.png",
              !0
            )),
            (this.trenesI[e][1] = new ig.TextureAtlasImage(
              this.tren,
              "trainwagonB.png",
              !0
            )),
            (this.trenesI[e][2] = -1);
        },
        creaTortugas: function (e) {
          for (var t = new Array(), i = 0; i < 25; i++)
            t[i] =
              i < 9
                ? "turtlecut000" + (i + 1) + ".png"
                : "turtlecut00" + (i + 1) + ".png";
          (this.tortugas[e][1] = -1),
            (this.tortugas[e][0] = this.addTextureAtlasAnim(
              this.tortuga,
              "tortugaAnim" + e,
              1 / 45,
              t,
              !1
            ));
        },
        creaMonedas: function (e) {
          for (
            var t = new Array(), i = Math.floor(70 * Math.random()) + 60, a = 0;
            a < i;
            a++
          )
            t[a] =
              a < 15
                ? a < 9
                  ? "coin000" + (a + 1) + ".png"
                  : "coin00" + (a + 1) + ".png"
                : "coin0015.png";
          (this.coins[e][1] = -1),
            (this.coins[e][0] = this.addTextureAtlasAnim(
              this.coin,
              "coinAnim" + e,
              0.02,
              t,
              !1
            ));
        },
        creaTroncos: function (e) {
          var t = Math.ceil(2 * Math.random());
          2 == t
            ? this.creaTroncosCortos(e)
            : 1 == t && this.creaTroncosLargos(e);
        },
        creaTroncosCortos: function (e) {
          for (var t = new Array(), i = 0; i < 12; i++)
            t[i] =
              i < 9
                ? "troncoshort000" + (i + 1) + ".png"
                : "troncoshort00" + (i + 1) + ".png";
          (this.troncos[e][1] = -1),
            (this.troncos[e][0] = this.addTextureAtlasAnim(
              this.troncoC,
              "troncoCAnim" + e,
              1 / 45,
              t,
              !0
            ));
        },
        creaTroncosLargos: function (e) {
          for (var t = new Array(), i = 0; i < 12; i++)
            t[i] =
              i < 9
                ? "troncolargo000" + (i + 1) + ".png"
                : "troncolargo00" + (i + 1) + ".png";
          (this.troncos[e][1] = -1),
            (this.troncos[e][0] = this.addTextureAtlasAnim(
              this.troncoL,
              "troncoLAnim" + e,
              1 / 45,
              t,
              !0
            ));
        },
        creaAudio: function () {
          (this.pasarAutoS[0] = new Howl({ urls: ["./carPassing1.mp3"] })),
            (this.pasarAutoS[1] = new Howl({ urls: ["./carPassing2.mp3"] })),
            (this.pasarAutoS[2] = new Howl({ urls: ["./carPassing3.mp3"] })),
            (this.bosinasS[0] = new Howl({ urls: ["./horn1.mp3"] })),
            (this.bosinasS[1] = new Howl({ urls: ["./horn2.mp3"] })),
            (this.bosinasS[2] = new Howl({ urls: ["./horn3.mp3"] })),
            (this.troncosS = new Howl({ urls: ["./woodHit.mp3"] })),
            (this.startGameS = new Howl({ urls: ["./startGame.mp3"] })),
            (this.crashS = new Howl({ urls: ["./carHit.mp3"] })),
            (this.saltoS = new Howl({ urls: ["./playerJump.mp3"] })),
            (this.caerS = new Howl({ urls: ["./tapBTN2.mp3"] })),
            (this.coinS = new Howl({ urls: ["./playerCoin.mp3"], volume: 6 })),
            (this.buyS = new Howl({ urls: ["./buyPlayer.mp3"], volume: 1.6 })),
            (this.caerAguaS = new Howl({ urls: ["./playerWater.mp3"] })),
            (this.pickS = new Howl({ urls: ["./playerSelect.mp3"] })),
            (this.tapS = new Howl({ urls: ["./tapBTN2.mp3"] })),
            (this.trenBellsS = new Howl({
              urls: ["./trainBells.mp3"],
              loop: !0,
            })),
            (this.trenS = new Howl({ urls: ["./trainPassing.mp3"] })),
            (this.musicSound = new Howl({
              urls: ["./bgmIngame_hi.mp3"],
              loop: !0,
              volume: 0.3,
            })),
            (this.lossSound = new Howl({
              urls: ["./bgmLose_Hi.mp3"],
              loop: !1,
              volume: 0.5,
            }));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.igClases.animales")
    .requires("impact.game", "impact.entity")
    .defines(function () {
      ig.Animales = ig.Entity.extend({
        name: "animales",
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        rana: [],
        chancho: [],
        perro: [],
        gato: [],
        conejo: [],
        pollo: [],
        waterSplash: null,
        init: function () {
          this.creaAnimal(this.rana, "rana"),
            this.creaAnimal(this.chancho, "pig"),
            this.creaAnimal(this.perro, "dog"),
            this.creaAnimal(this.gato, "catcut"),
            this.creaAnimal(this.conejo, "rabbit"),
            this.creaAnimal(this.pollo, "pollochic"),
            this.creaAssetsGraficos(),
            (this.currentAnim = null);
        },
        creaAssetsGraficos: function () {
          for (var e = new Array(), t = 0; t < 40; t++)
            e[t] =
              t < 9
                ? "water000" + (t + 1) + ".png"
                : "water00" + (t + 1) + ".png";
          (this.waterSplash = this.addTextureAtlasAnim(
            ig.game.assets.waterSplashPngs,
            "Wsplash",
            0.02,
            e,
            !0
          )),
            (this.currentAnim = null);
        },
        creaAnimal: function (e, t) {
          for (var i = new Array(), a = 0; a < 35; a++)
            i[a] =
              a < 27
                ? a < 9
                  ? t + "000" + (a + 1) + ".png"
                  : t + "00" + (a + 1) + ".png"
                : t + "0027.png";
          (e[0] = this.addTextureAtlasAnim(
            ig.game.assets[t + "Pngs"],
            "idle",
            1 / 45,
            i,
            !1
          )),
            (e[5] = this.addTextureAtlasAnim(
              ig.game.assets[t + "Pngs"],
              "atropellado",
              1 / 45,
              [t + "0028.png"],
              !0
            )),
            (e[6] = this.addTextureAtlasAnim(
              ig.game.assets[t + "Pngs"],
              "aplastado",
              1 / 45,
              [t + "0030.png"],
              !0
            )),
            (i = new Array());
          for (a = 31; a < 48; a++) i[a - 31] = t + "00" + (a + 1) + ".png";
          (e[1] = this.addTextureAtlasAnim(
            ig.game.assets[t + "Pngs"],
            "down",
            1 / 30,
            i,
            !0
          )),
            (i = new Array());
          for (a = 49; a < 66; a++) i[a - 49] = t + "00" + (a + 1) + ".png";
          (e[4] = this.addTextureAtlasAnim(
            ig.game.assets[t + "Pngs"],
            "right",
            1 / 30,
            i,
            !0
          )),
            (i = new Array());
          for (a = 67; a < 84; a++) i[a - 67] = t + "00" + (a + 1) + ".png";
          (e[2] = this.addTextureAtlasAnim(
            ig.game.assets[t + "Pngs"],
            "up",
            1 / 30,
            i,
            !0
          )),
            (i = new Array());
          for (a = 85; a < 102; a++)
            i[a - 85] =
              a < 99 ? t + "00" + (a + 1) + ".png" : t + "0" + (a + 1) + ".png";
          e[3] = this.addTextureAtlasAnim(
            ig.game.assets[t + "Pngs"],
            "left",
            1 / 30,
            i,
            !0
          );
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.contenedorTerreno")
    .requires("impact.game", "game.igClases.animales")
    .defines(function () {
      ContenedorTerreno = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        animalPos: [],
        animalClass: null,
        animal: [],
        animalAnim: 0,
        camara: [],
        paneo: [],
        tronco: [],
        puntoCamara: null,
        efectosVarios: [],
        zoom: [0, 0, 1, 1],
        minLow: 4,
        minHigh: 13,
        estadoTroncos: 0,
        posIniX: 0,
        posIniY: 0,
        iniTerreno: 0,
        init: function () {
          this.iniVars(),
            (this.animalClass = new ig.Animales()),
            (this.efectosVarios[0] = this.animalClass.waterSplash),
            this.setAnimal();
        },
        setAnimal: function () {
          switch (ig.game.animalElegido) {
            case 0:
              this.animal = this.animalClass.pollo;
              break;
            case 1:
              this.animal = this.animalClass.gato;
              break;
            case 2:
              this.animal = this.animalClass.perro;
              break;
            case 3:
              this.animal = this.animalClass.chancho;
              break;
            case 4:
              this.animal = this.animalClass.conejo;
              break;
            case 5:
              this.animal = this.animalClass.rana;
          }
        },
        iniVars: function () {
          if (((this.iniTerreno = 0), ig.game.width >= ig.game.height))
            (this.pos.x = 70 * ig.game.escalaCubo),
              (this.pos.y = -130 * ig.game.escalaCubo),
              (this.posIniX = 0);
          else {
            (this.pos.x = 70 * ig.game.escalaCubo),
              (this.pos.y = -130 * ig.game.escalaCubo);
            var e = 2.05,
              t = 0,
              i = 0.345425,
              a = -700,
              r = (a - t) / (i - e),
              s = r * (ig.game.escalaCubo - e) + t,
              o =
                (r = ((a = 0) - (t = -700)) / ((i = 1974) - (e = 302))) *
                  (ig.system.width - e) +
                t;
            this.posIniX = o - s;
          }
          (this.animalPos = new Array(
            5,
            13,
            0,
            0,
            -4,
            20,
            10,
            9,
            ig.game.mapaMatrix[8],
            ig.game.mapaMatrix[13],
            5
          )),
            (this.camara = new Array(5, 13, 1.7, 0.6, 0, 0.4, 0)),
            (this.animalAnim = 0),
            (this.paneo = new Array(0, 0)),
            (this.tronco = new Array(
              0,
              0,
              0,
              0,
              void 0,
              void 0,
              void 0,
              void 0
            )),
            (this.currentAnim = null);
        },
        update: function () {},
        draw: function () {
          this.parent();
          var e = this.averiguaPos(0),
            t = this.averiguaPos(1);
          (this.puntoCamara = e),
            0 == ig.game.noDibujar &&
              (this.dibujaTerreno(e, t), this.dibujaObjetos(e, t)),
            1 == ig.game.colision &&
              2 != ig.game.gameOver &&
              (this.efectosVarios[0].draw(
                this.posIniX +
                  this.zoom[0] +
                  this.paneo[0] +
                  this.pos.x +
                  ig.game.mapaMatrix[this.animalPos[0]][this.animalPos[1]][1] -
                  70 * ig.game.escalaCubo,
                this.zoom[1] +
                  this.paneo[1] +
                  this.pos.y +
                  ig.game.mapaMatrix[this.animalPos[0]][this.animalPos[1]][2] -
                  90 * ig.game.escalaCubo
              ),
              this.efectosVarios[0].update());
        },
        dibujaTerreno: function (e, t) {
          if (0 == this.iniTerreno && 1 == ig.game.enGameOver)
            ig.system.context.drawImage(
              ig.game.arrayLevels[0][0].data,
              this.posIniX +
                this.zoom[0] +
                this.paneo[0] +
                this.pos.x +
                ig.game.mapaMatrix[ig.game.arrayLevels[0][1]][0][1] -
                640 * ig.game.escalaCubo,
              this.posIniY +
                this.zoom[1] +
                this.paneo[1] +
                this.pos.y +
                ig.game.mapaMatrix[ig.game.arrayLevels[0][1]][0][2] -
                279 * ig.game.escalaCubo,
              ig.game.tamanoFondo[0] * ig.game.escalaCubo,
              ig.game.tamanoFondo[1] * ig.game.escalaCubo
            ),
              ig.system.context.drawImage(
                ig.game.arrayLevels[0][0].data,
                this.posIniX +
                  this.zoom[0] +
                  this.paneo[0] +
                  this.pos.x +
                  ig.game.mapaMatrix[ig.game.arrayLevels[0][1]][0][1] -
                  14 * ig.game.escalaCubo,
                this.posIniY +
                  this.zoom[1] +
                  this.paneo[1] +
                  this.pos.y +
                  ig.game.mapaMatrix[ig.game.arrayLevels[0][1]][0][2] -
                  1360 * ig.game.escalaCubo,
                ig.game.tamanoFondo[0] * ig.game.escalaCubo,
                ig.game.tamanoFondo[1] * ig.game.escalaCubo
              ),
              ig.system.context.drawImage(
                ig.game.arrayLevels[1][0].data,
                this.posIniX +
                  this.zoom[0] +
                  this.paneo[0] +
                  this.pos.x +
                  ig.game.mapaMatrix[ig.game.arrayLevels[1][1]][0][1] -
                  14 * ig.game.escalaCubo,
                this.posIniY +
                  this.zoom[1] +
                  this.paneo[1] +
                  this.pos.y +
                  ig.game.mapaMatrix[ig.game.arrayLevels[1][1]][0][2] -
                  1360 * ig.game.escalaCubo,
                ig.game.tamanoFondo[0] * ig.game.escalaCubo,
                ig.game.tamanoFondo[1] * ig.game.escalaCubo
              );
          else
            for (var i = this.iniTerreno; i < this.iniTerreno + 2; i++)
              i < ig.game.arrayLevels.length &&
                ig.system.context.drawImage(
                  ig.game.arrayLevels[i][0].data,
                  this.posIniX +
                    this.zoom[0] +
                    this.paneo[0] +
                    this.pos.x +
                    ig.game.mapaMatrix[ig.game.arrayLevels[i][1]][0][1] -
                    14 * ig.game.escalaCubo,
                  this.posIniY +
                    this.zoom[1] +
                    this.paneo[1] +
                    this.pos.y +
                    ig.game.mapaMatrix[ig.game.arrayLevels[i][1]][0][2] -
                    1360 * ig.game.escalaCubo,
                  ig.game.tamanoFondo[0] * ig.game.escalaCubo,
                  ig.game.tamanoFondo[1] * ig.game.escalaCubo
                );
          for (i = this.animalPos[0] - t; i < this.animalPos[0] + e; i++)
            for (
              var a = this.camara[1] - this.animalPos[6];
              a < this.camara[1] + this.animalPos[7];
              a++
            )
              if (
                i >= 0 &&
                i < ig.game.mapaMatrix.length &&
                a >= 0 &&
                a < ig.game.mapaMatrix[i].length &&
                a > 5 &&
                a < 21 &&
                "coin" == ig.game.mapaMatrix[i][a][5][20] &&
                0 == ig.game.mapaMatrix[i][a][5][22]
              ) {
                this.metodoDibujarObjetosEstaticos(i, a, 50, 24),
                  ig.game.mapaMatrix[i][a][5][0].update();
              }
          parseInt(ig.game.bestScore) + 5 >= this.animalPos[0] - t &&
            parseInt(ig.game.bestScore) + 5 < this.animalPos[0] + e &&
            0 == ig.game.gameOver &&
            parseInt(ig.game.bestScore) > 4 &&
            ig.system.context.drawImage(
              ig.game.assets.bestScore.data,
              this.posIniX +
                -550 * ig.game.escalaCubo +
                this.zoom[0] +
                this.paneo[0] +
                this.pos.x +
                ig.game.mapaMatrix[parseInt(ig.game.bestScore) + 5][13][1],
              this.posIniY +
                this.zoom[1] +
                this.paneo[1] +
                this.pos.y +
                ig.game.mapaMatrix[parseInt(ig.game.bestScore) + 5][13][2] -
                130 * ig.game.escalaCubo,
              ig.game.assets.bestScore.width * ig.game.escalaCubo,
              ig.game.assets.bestScore.height * ig.game.escalaCubo
            );
        },
        dibujaObjetos: function (e, t) {
          for (
            var i = !1, a = this.animalPos[0] + e - 1;
            a >= this.animalPos[0] - t;
            a--
          ) {
            var r = !1;
            if (a >= 0 && null != ig.game.mapaMatrix[a])
              for (var s = 0; s < ig.game.mapaMatrix[a].length; s++) {
                if (
                  a >= 0 &&
                  a < ig.game.mapaMatrix.length &&
                  s >= 0 &&
                  s < ig.game.mapaMatrix[a].length &&
                  0 != ig.game.mapaMatrix[a][s][5][0]
                ) {
                  var o = 0,
                    n = 0,
                    h = !1,
                    m = "";
                  switch (ig.game.mapaMatrix[a][s][5][20]) {
                    case "tren":
                      (o = -200), (n = -115), (h = !0), (m = "tren");
                      break;
                    case "turt":
                      (o = 30), (n = 15), (h = !0), (m = "tortuga");
                      break;
                    case "troncolargo":
                      (o = -130), (n = -35), (h = !0), (m = "tronco");
                      break;
                    case "troncoshort":
                      (o = -48), (n = -12), (h = !0), (m = "tronco");
                      break;
                    case "autoB":
                      (o = -20), (n = -39), (h = !0), (m = "auto");
                      break;
                    case "autoC":
                    case "carA-":
                      (o = -40), (n = -45), (h = !0), (m = "auto");
                      break;
                    case "bus-a":
                    case "bus-b":
                      (o = -165), (n = -122), (h = !0), (m = "auto");
                      break;
                    case "camio":
                      (o = -158), (n = -122), (h = !0), (m = "auto");
                      break;
                    case "taxiB":
                    case "taxiF":
                    case "Camio":
                      (o = -40), (n = -45), (h = !0), (m = "auto");
                      break;
                    case "arbolA.png":
                      (o = 30), (n = -70), (h = !0), (m = "terreno");
                      break;
                    case "arbolB.png":
                      (o = 40), (n = -55), (h = !0), (m = "terreno");
                      break;
                    case "arbolC.png":
                      (o = 35), (n = -140), (h = !0), (m = "terreno");
                      break;
                    case "arbolD.png":
                    case "arbolE.png":
                      (o = 35), (n = -95), (h = !0), (m = "terreno");
                      break;
                    case "arbolF.png":
                      (o = 55), (n = 0), (h = !0), (m = "terreno");
                      break;
                    case "rockA.png":
                    case "rockB.png":
                    case "rockC.png":
                    case "rockD.png":
                      (o = 35), (n = -20), (h = !0), (m = "terreno");
                      break;
                    case "semaforo1.png":
                      (o = 50), (n = -48), (h = !0), (m = "semaforo");
                      break;
                    case "semaforo2.png":
                      (o = 50), (n = -48), (h = !0), (m = "semaforo2");
                  }
                  1 == h &&
                    ("tronco" == m
                      ? (a == this.animalPos[10] && ((r = !0), (i = !0)),
                        this.metodoDibujarObjetosDinamicos(a, s, o, n, m))
                      : "auto" == m
                      ? this.animalPos[10] == a &&
                        (1 == this.animalAnim ||
                          7 == ig.game.colision ||
                          8 == ig.game.colision)
                        ? ((i = !0),
                          this.dibujaAnimal(a, s, this.animalPos[10], 0),
                          this.metodoDibujarObjetosDinamicos(a, s, o, n, m))
                        : this.metodoDibujarObjetosDinamicos(a, s, o, n, m)
                      : "tren" == m
                      ? this.animalPos[10] == a &&
                        (1 == this.animalAnim ||
                          7 == ig.game.colision ||
                          8 == ig.game.colision)
                        ? ((i = !0),
                          this.dibujaAnimal(a, s, this.animalPos[10], 0),
                          this.metodoDibujarObjetosDinamicos(a, s, o, n, m))
                        : this.metodoDibujarObjetosDinamicos(a, s, o, n, m)
                      : "tortuga" == m
                      ? (a == this.animalPos[10] && ((r = !0), (i = !0)),
                        (ig.game.mapaMatrix[a][s][5][5] =
                          ig.game.mapaMatrix[a][s][1]),
                        (ig.game.mapaMatrix[a][s][5][6] =
                          ig.game.mapaMatrix[a][s][2]),
                        this.metodoDibujarObjetosEstaticos(a, s, o, n))
                      : "terreno" == m
                      ? this.metodoDibujarObjetosEstaticos(a, s, o, n)
                      : "semaforo" == m
                      ? (a != this.animalPos[10] ||
                          (16 != s && 19 != s) ||
                          (0 == i &&
                            ((i = !0),
                            this.dibujaAnimal(a, s, this.animalPos[10], s))),
                        19 == s
                          ? this.metodoDibujarObjetosEstaticos(a, s, o, n, 6)
                          : this.metodoDibujarObjetosEstaticos(a, s, o, n))
                      : "semaforo2" == m &&
                        1 == ig.game.mapaMatrix[a][0][5][24] &&
                        (a != this.animalPos[10] ||
                          (17 != s && 20 != s) ||
                          (0 == i &&
                            ((i = !0),
                            this.dibujaAnimal(a, s, this.animalPos[10], s))),
                        20 == s
                          ? this.metodoDibujarObjetosEstaticos(a, s, o, n, 6)
                          : this.metodoDibujarObjetosEstaticos(
                              a,
                              s,
                              o,
                              n,
                              s - 1
                            )));
                }
                0 == i
                  ? this.dibujaAnimal(
                      a,
                      s,
                      this.animalPos[10],
                      this.animalPos[1]
                    )
                  : 1 == r &&
                    25 == s &&
                    (this.dibujaAnimal(a, s, a, s), (i = !0));
              }
          }
        },
        dibujaAnimal: function (e, t, i, a) {
          e == i &&
            t == a &&
            (1 != ig.game.colision &&
            2 != ig.game.colision &&
            1 != ig.game.meteoro[3]
              ? ((this.animalPos[8] = this.animalPos[2]),
                (this.animalPos[9] = this.animalPos[3]),
                6 == this.animalAnim
                  ? this.animal[this.animalAnim].draw(
                      this.posIniX +
                        this.zoom[0] +
                        this.paneo[0] +
                        this.pos.x +
                        this.tronco[0] +
                        10 * ig.game.escalaCubo,
                      this.posIniY +
                        this.zoom[1] +
                        this.paneo[1] +
                        this.pos.y +
                        this.tronco[1] -
                        12 * ig.game.escalaCubo
                    )
                  : this.animal[this.animalAnim].draw(
                      this.posIniX +
                        this.zoom[0] +
                        this.paneo[0] +
                        this.pos.x +
                        this.animalPos[2] +
                        30 * ig.game.escalaCubo,
                      this.posIniY +
                        this.zoom[1] +
                        this.paneo[1] +
                        this.pos.y +
                        this.animalPos[3] -
                        42 * ig.game.escalaCubo
                    ),
                this.animal[this.animalAnim].update())
              : 2 == ig.game.colision &&
                ((this.animalPos[8] = this.tronco[0]),
                (this.animalPos[9] = this.tronco[1]),
                (this.animalPos[2] = this.animalPos[8]),
                (this.animalPos[3] = this.animalPos[9]),
                this.animal[this.animalAnim].draw(
                  this.posIniX +
                    this.zoom[0] +
                    this.paneo[0] +
                    this.pos.x +
                    this.tronco[0] +
                    30 * ig.game.escalaCubo,
                  this.posIniY +
                    this.zoom[1] +
                    this.paneo[1] +
                    this.pos.y +
                    this.tronco[1] -
                    42 * ig.game.escalaCubo
                ),
                this.animal[this.animalAnim].update()));
        },
        metodoDibujarObjetosDinamicos: function (e, t, i, a, r) {
          if (0 == ig.game.mapaMatrix[e][t][5][7])
            (ig.game.mapaMatrix[e][t][5][7] = 1), this.creaTweenObjeto(e, t, r);
          else if (
            "tren" == ig.game.mapaMatrix[e][0][5][22] &&
            0 == ig.game.mapaMatrix[e][0][5][8]
          )
            e - this.animalPos[0] <= 3 &&
              e - this.animalPos[0] >= 0 &&
              0 == ig.game.gameOver &&
              this.preparaTren(e);
          else if (
            0 != ig.game.mapaMatrix[e][t][5][0] &&
            2 == ig.game.mapaMatrix[e][t][5][14]
          )
            if (1 == ig.game.mapaMatrix[e][t][5][10])
              if (
                ig.game.mapaMatrix[e][t][5][5] <=
                ig.game.mapaMatrix[e][25][1] + 200 * ig.game.escalaCubo
              ) {
                if (1 == ig.Timer.timeScale) {
                  ig.game.mapaMatrix[e][t][5][5] =
                    ig.game.mapaMatrix[e][t][5][5] +
                    ig.game.mapaMatrix[e][t][5][9] *
                      ig.game.mapaMatrix[e][t][5][10] *
                      ig.game.deltaTime;
                  var s =
                    ig.game.mapaMatrix[e][t][5][11] *
                      (ig.game.mapaMatrix[e][t][5][5] -
                        ig.game.mapaMatrix[e][t][5][12]) +
                    ig.game.mapaMatrix[e][t][5][13];
                  ig.game.mapaMatrix[e][t][5][6] = s;
                }
                "tren" == ig.game.mapaMatrix[e][0][5][21]
                  ? ig.game.mapaMatrix[e][t][5][0].draw(
                      this.posIniX +
                        ig.game.mapaMatrix[e][t][5][5] +
                        i * ig.game.escalaCubo +
                        this.zoom[0] +
                        this.paneo[0] +
                        this.pos.x,
                      ig.game.mapaMatrix[e][t][5][6] +
                        a * ig.game.escalaCubo +
                        this.zoom[1] +
                        this.paneo[1] +
                        this.pos.y
                    )
                  : (0 == ig.game.gameOver &&
                      (Math.abs(
                        ig.game.mapaMatrix[e][t][5][5] -
                          ig.game.mapaMatrix[this.animalPos[0]][
                            this.animalPos[1]
                          ][1]
                      ),
                      ig.game.escalaCubo),
                    ig.game.mapaMatrix[e][t][5][0].draw(
                      this.posIniX +
                        ig.game.mapaMatrix[e][t][5][5] +
                        i * ig.game.escalaCubo +
                        this.zoom[0] +
                        this.paneo[0] +
                        this.pos.x,
                      ig.game.mapaMatrix[e][t][5][6] +
                        a * ig.game.escalaCubo +
                        this.zoom[1] +
                        this.paneo[1] +
                        this.pos.y
                    ));
              } else
                (ig.game.mapaMatrix[e][t][5][14] = 0),
                  (0 != ig.game.gameOver && 3 != ig.game.gameOver) ||
                    this.revisarPonerObjetos(e, t);
            else if (
              ig.game.mapaMatrix[e][t][5][5] >=
              ig.game.mapaMatrix[e][0][1] - 200 * ig.game.escalaCubo
            ) {
              if (1 == ig.Timer.timeScale) {
                ig.game.mapaMatrix[e][t][5][5] =
                  ig.game.mapaMatrix[e][t][5][5] +
                  ig.game.mapaMatrix[e][t][5][9] *
                    ig.game.mapaMatrix[e][t][5][10] *
                    ig.game.deltaTime;
                s =
                  ig.game.mapaMatrix[e][t][5][11] *
                    (ig.game.mapaMatrix[e][t][5][5] -
                      ig.game.mapaMatrix[e][t][5][12]) +
                  ig.game.mapaMatrix[e][t][5][13];
                ig.game.mapaMatrix[e][t][5][6] = s;
              }
              "tren" == ig.game.mapaMatrix[e][0][5][21]
                ? ig.game.mapaMatrix[e][t][5][0].draw(
                    this.posIniX +
                      ig.game.mapaMatrix[e][t][5][5] +
                      i * ig.game.escalaCubo +
                      this.zoom[0] +
                      this.paneo[0] +
                      this.pos.x,
                    ig.game.mapaMatrix[e][t][5][6] +
                      a * ig.game.escalaCubo +
                      this.zoom[1] +
                      this.paneo[1] +
                      this.pos.y
                  )
                : (0 == ig.game.gameOver &&
                    (Math.abs(
                      ig.game.mapaMatrix[e][t][5][5] -
                        ig.game.mapaMatrix[this.animalPos[0]][
                          this.animalPos[1]
                        ][1]
                    ),
                    ig.game.escalaCubo),
                  ig.game.mapaMatrix[e][t][5][0].draw(
                    this.posIniX +
                      ig.game.mapaMatrix[e][t][5][5] +
                      i * ig.game.escalaCubo +
                      this.zoom[0] +
                      this.paneo[0] +
                      this.pos.x,
                    ig.game.mapaMatrix[e][t][5][6] +
                      a * ig.game.escalaCubo +
                      this.zoom[1] +
                      this.paneo[1] +
                      this.pos.y
                  ));
            } else
              (ig.game.mapaMatrix[e][t][5][14] = 0),
                (0 != ig.game.gameOver && 3 != ig.game.gameOver) ||
                  this.revisarPonerObjetos(e, t);
        },
        metodoDibujarObjetosEstaticos: function (e, t, i, a, r) {
          if (null != r) var s = r;
          else s = t;
          if (
            e >= 0 &&
            e < ig.game.mapaMatrix.length &&
            t >= 6 &&
            t < ig.game.mapaMatrix[e].length - 5
          )
            0 != ig.game.mapaMatrix[e][t][5][0] &&
              ig.game.mapaMatrix[e][t][5][0].draw(
                this.posIniX +
                  i * ig.game.escalaCubo +
                  this.zoom[0] +
                  this.paneo[0] +
                  this.pos.x +
                  ig.game.mapaMatrix[e][s][1],
                this.posIniY +
                  a * ig.game.escalaCubo +
                  this.zoom[1] +
                  this.paneo[1] +
                  this.pos.y +
                  ig.game.mapaMatrix[e][s][2]
              );
          else if (e >= 0 && e < ig.game.mapaMatrix.length && 0 == t) {
            var o = ig.game.mapaMatrix[e][0][3];
            (3 != o && 5 != o && 4 != o && 6 != o && 7 != o && 8 != o) ||
              ig.system.context.drawImage(
                ig.game.assets.arbolesJuntos.data,
                this.posIniX +
                  this.zoom[0] +
                  this.paneo[0] +
                  this.pos.x +
                  ig.game.mapaMatrix[e][0][1] +
                  24 * ig.game.escalaCubo,
                this.posIniY +
                  this.zoom[1] +
                  this.paneo[1] +
                  this.pos.y +
                  ig.game.mapaMatrix[e][0][2] -
                  78 * ig.game.escalaCubo,
                ig.game.tamanoArboles[0] * ig.game.escalaCubo,
                ig.game.tamanoArboles[1] * ig.game.escalaCubo
              );
          }
        },
        creaTweenObjeto: function (e, t, i) {
          var a = ig.game.mapaMatrix[e][t][1],
            r = ig.game.mapaMatrix[e][t][2],
            s = ig.game.mapaMatrix[e][25][1],
            o = (ig.game.mapaMatrix[e][25][2] - r) / (s - a),
            n = o * (ig.game.mapaMatrix[e][0][1] - a) + r;
          if ("tronco" == i) {
            var h = (1900 - (c = 800)) / (3 - (l = 6.5));
            (ig.game.mapaMatrix[e][0][9] = 0.15),
              (ig.game.mapaMatrix[e][0][13] = 320 * ig.game.escalaCubo);
            for (var m = 0; m < 25; m++)
              ig.game.mapaMatrix[e][m][5][22] = "tronco";
          } else if ("auto" == i) {
            h = (2450 - (c = 1700)) / (2.5 - (l = 5.5));
            (ig.game.mapaMatrix[e][0][9] = 0.4),
              (ig.game.mapaMatrix[e][0][13] = 610 * ig.game.escalaCubo);
            for (m = 0; m <= 12; m++) ig.game.mapaMatrix[e][m][5][22] = "auto";
          } else if ("tren" == i) {
            var l = 0,
              c = 0;
            h = 0;
            (ig.game.mapaMatrix[e][0][9] = 0.15),
              (ig.game.mapaMatrix[e][0][13] = 260 * ig.game.escalaCubo);
            for (m = 0; m <= 17; m++) ig.game.mapaMatrix[e][m][5][22] = "tren";
          }
          ig.game.mapaMatrix[e][0][5][9] =
            ig.game.mapaMatrix[e][0][5][25] * ig.game.escalaCubo;
          for (
            var u = h * (ig.game.mapaMatrix[e][0][5][9] - l) + c, g = 0;
            g < ig.game.mapaMatrix[e][0][0].length;
            g++
          ) {
            var p = ig.game.mapaMatrix[e][0][0][g];
            (ig.game.mapaMatrix[e][p][5][7] = 1),
              1 == ig.game.mapaMatrix[e][p][5][10]
                ? (ig.game.mapaMatrix[e][p][5][5] =
                    ig.game.mapaMatrix[e][0][1] - 50 * ig.game.escalaCubo)
                : (ig.game.mapaMatrix[e][p][5][5] =
                    ig.game.mapaMatrix[e][25][1] + 100 * ig.game.escalaCubo),
              (ig.game.mapaMatrix[e][p][5][9] =
                ig.game.mapaMatrix[e][p][5][25] * ig.game.escalaCubo),
              (ig.game.mapaMatrix[e][p][5][6] = n),
              null != ig.game.mapaMatrix[e][p][5][15] &&
                ig.game.mapaMatrix[e][p][5][15].kill(),
              (ig.game.mapaMatrix[e][p][5][11] = o),
              (ig.game.mapaMatrix[e][p][5][12] = a),
              (ig.game.mapaMatrix[e][p][5][13] = r),
              (ig.game.mapaMatrix[e][p][5][14] = 0),
              (ig.game.mapaMatrix[e][p][5][16] = u);
          }
          (ig.game.mapaMatrix[e][0][6] = 0),
            (ig.game.mapaMatrix[e][0][10] = !0),
            "tren" != ig.game.mapaMatrix[e][t][5][22] && this.activarObjetos(e);
        },
        creaIntervalObjeto: function (e, t, i, a) {
          ig.game.mapaMatrix[e][t][5][15] = ig.game.spawnEntity(
            EntityTween,
            0,
            0,
            {
              time: (a * (i + 1)) / 1e3,
              start: 0,
              easing: "linear",
              easingType: "easeNone",
              end: 100,
              callback: function (i, a) {
                "end" != a || i.target.ponerObjetos(e, t);
              },
              target: this,
            }
          );
        },
        creaIntervalTren: function (e, t, i, a) {
          ig.game.mapaMatrix[e][t][5][15] = ig.game.spawnEntity(
            EntityTween,
            0,
            0,
            {
              time: a,
              start: 0,
              easing: "linear",
              easingType: "easeNone",
              end: 100,
              callback: function (i, a) {
                "end" != a || i.target.ponerTren(e, t);
              },
              target: this,
            }
          );
        },
        activarTrenes: function (e, t) {
          for (var i = 0; i < ig.game.mapaMatrix[e][0][0].length; i++)
            if (0 == ig.game.mapaMatrix[e][i][5][14]) {
              ig.game.mapaMatrix[e][i][5][7] = 1;
              var a = i;
              a >= 8 && (a -= 2),
                1 == ig.game.mapaMatrix[e][i][5][10]
                  ? (ig.game.mapaMatrix[e][i][5][5] =
                      ig.game.mapaMatrix[e][0][1] -
                      ig.game.mapaMatrix[e][0][13] *
                        (ig.game.mapaMatrix[e][0][0].length - a))
                  : (ig.game.mapaMatrix[e][i][5][5] =
                      ig.game.mapaMatrix[e][25][1] +
                      ig.game.mapaMatrix[e][0][13] * a),
                (ig.game.mapaMatrix[e][i][5][14] = 1);
              ig.game.mapaMatrix[e][0][0].length;
              this.creaIntervalTren(e, i, i, t);
            }
        },
        preparaTren: function (e) {
          ig.game.assets.trenBellsS.play(),
            (ig.game.mapaMatrix[e][0][5][8] = 1),
            (ig.game.mapaMatrix[e][0][5][24] = 1);
          var t = 1.5 * Math.random() + 1;
          this.activarTrenes(e, t);
        },
        activarObjetos: function (e) {
          if (1 == ig.game.mapaMatrix[e][0][6])
            for (
              var t = 0, i = ig.game.mapaMatrix[e][0][0].length / 2;
              i < ig.game.mapaMatrix[e][0][0].length;
              i++
            ) {
              1 == ig.game.mapaMatrix[e][i][5][10]
                ? (ig.game.mapaMatrix[e][i][5][5] =
                    ig.game.mapaMatrix[e][0][1] -
                    ig.game.mapaMatrix[e][0][13] * t -
                    100)
                : (ig.game.mapaMatrix[e][i][5][5] =
                    ig.game.mapaMatrix[e][25][1] +
                    ig.game.mapaMatrix[e][0][13] * t +
                    100),
                (ig.game.mapaMatrix[e][i][5][14] = 1),
                (t += 1);
              this.ponerObjetos(e, i);
            }
          else if (0 == ig.game.mapaMatrix[e][0][6]) {
            for (i = 0; i < ig.game.mapaMatrix[e][0][0].length / 2; i++)
              if (0 == ig.game.mapaMatrix[e][i][5][14])
                if (
                  ((ig.game.mapaMatrix[e][i][5][7] = 1),
                  1 == ig.game.mapaMatrix[e][0][10])
                ) {
                  1 == ig.game.mapaMatrix[e][i][5][10]
                    ? (ig.game.mapaMatrix[e][i][5][5] =
                        ig.game.mapaMatrix[e][18][1] -
                        ig.game.mapaMatrix[e][0][13] * i)
                    : (ig.game.mapaMatrix[e][i][5][5] =
                        ig.game.mapaMatrix[e][8][1] +
                        ig.game.mapaMatrix[e][0][13] * i),
                    (ig.game.mapaMatrix[e][i][5][14] = 1);
                  t = i - ig.game.mapaMatrix[e][0][0].length / 2;
                  this.ponerObjetos(e, i);
                } else {
                  1 == ig.game.mapaMatrix[e][i][5][10]
                    ? (ig.game.mapaMatrix[e][i][5][5] =
                        ig.game.mapaMatrix[e][0][1] -
                        ig.game.mapaMatrix[e][0][13] * i -
                        100)
                    : (ig.game.mapaMatrix[e][i][5][5] =
                        ig.game.mapaMatrix[e][25][1] +
                        ig.game.mapaMatrix[e][0][13] * i +
                        100),
                    (ig.game.mapaMatrix[e][i][5][14] = 1);
                  ig.game.mapaMatrix[e][i][5][16];
                  this.ponerObjetos(e, i);
                }
            ig.game.mapaMatrix[e][0][10] = !1;
          }
        },
        ponerTren: function (e, t) {
          (ig.game.mapaMatrix[e][t][5][14] = 2),
            0 == t &&
              (ig.game.assets.trenBellsS.stop(), ig.game.assets.trenS.play());
        },
        ponerObjetos: function (e, t) {
          ig.game.mapaMatrix[e][0][0].length,
            (ig.game.mapaMatrix[e][t][5][14] = 2);
        },
        resetTren: function (e) {
          clearInterval(ig.game.mapaMatrix[e][0][5][23]),
            (ig.game.mapaMatrix[e][0][5][8] = 0);
        },
        revisarPonerObjetos: function (e, t) {
          if ("tren" == ig.game.mapaMatrix[e][t][5][22]) {
            if (1 == ig.game.mapaMatrix[e][t][5][10]) {
              if (0 == t) {
                clearInterval(ig.game.mapaMatrix[e][0][5][23]);
                var i = 1e3 * (2 * Math.random() + 1);
                (ig.game.mapaMatrix[e][0][5][24] = 0),
                  (ig.game.mapaMatrix[e][0][5][23] = setInterval(
                    this.resetTren.bind(this),
                    i,
                    e
                  ));
              }
            } else if (13 == t) {
              clearInterval(ig.game.mapaMatrix[e][0][5][23]);
              i = 1e3 * (2 * Math.random() + 1);
              (ig.game.mapaMatrix[e][0][5][24] = 0),
                (ig.game.mapaMatrix[e][0][5][23] = setInterval(
                  this.resetTren.bind(this),
                  i,
                  e
                ));
            }
          } else if ("tronco" == ig.game.mapaMatrix[e][t][5][22]) {
            if (0 == ig.game.mapaMatrix[e][0][6]) {
              var a = 0;
              1 == t && (a = 4),
                4 == a &&
                  ((ig.game.mapaMatrix[e][0][6] = 1), this.activarObjetos(e));
            } else if (1 == ig.game.mapaMatrix[e][0][6]) {
              a = 0;
              6 == t && (a = 4),
                4 == a &&
                  ((ig.game.mapaMatrix[e][0][6] = 0), this.activarObjetos(e));
            }
          } else if ("auto" == ig.game.mapaMatrix[e][t][5][22])
            if (0 == ig.game.mapaMatrix[e][0][6]) {
              a = 0;
              0 == t && (a = 4),
                4 == a &&
                  ((ig.game.mapaMatrix[e][0][6] = 1), this.activarObjetos(e));
            } else if (1 == ig.game.mapaMatrix[e][0][6]) {
              a = 0;
              3 == t && (a = 4),
                4 == a &&
                  ((ig.game.mapaMatrix[e][0][6] = 0), this.activarObjetos(e));
            }
        },
        averiguaPos: function (e) {
          switch (e) {
            case 0:
              return this.minHigh - (this.animalPos[0] - this.camara[0]);
            case 1:
              return this.minLow + (this.animalPos[0] - this.camara[0]);
          }
          return 0;
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.scorePanel")
    .requires("impact.game")
    .defines(function () {
      ScorePanel = ig.Entity.extend({
        name: "panelAnimal",
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        ruta: null,
        rutaTitle: null,
        selectstageY: -580,
        selectstageV: null,
        backb: null,
        fontB: null,
        fontS: null,
        fontN: null,
        clickSound: null,
        exitb: null,
        panelAnimal: null,
        backbV: null,
        backX: null,
        replyX: null,
        replybV: null,
        pollobV: null,
        gatobV: null,
        perrobV: null,
        chanchobV: null,
        conejobV: null,
        ranabV: null,
        replyb: null,
        opt: null,
        hiloMeteoro: null,
        moregamesbV: [],
        moregX: 300,
        fuente: null,
        seteaVariables: function () {
          ig.system.width, ig.system.height, ig.system.width, ig.system.height;
          (this.backX = -450 * this.ruta.escalaCubo),
            (this.replyX = ig.system.width * this.ruta.escalaCubo + 450),
            (this.selectstageY = -580),
            (this.currentAnim = null);
        },
        llamarMeteoro: function () {
          clearInterval(this.hiloMeteoro), ig.game.elMeteoro();
        },
        init: function (e) {
          ig.input.bind(ig.KEY.MOUSE1, "click"),
            (this.ruta = e),
            (this.fontB = this.ruta.assets.fontB),
            (this.fontS = this.ruta.assets.fontS),
            (this.fontN = this.ruta.assets.fontN),
            (this.panelAnimal = this.ruta.assets.scorePanel),
            (this.backb = this.ruta.assets.selectAnimal),
            (this.replyb = this.ruta.assets.botonReplay),
            (this.pollobV = new Array(42, 240, 130)),
            (this.gatobV = new Array(192, 240, 130)),
            (this.perrobV = new Array(342, 240, 130)),
            (this.chanchobV = new Array(493, 240, 130)),
            (this.conejobV = new Array(640, 240, 130)),
            (this.ranabV = new Array(793, 240, 130)),
            this.seteaVariables(),
            1 == ig.game.elMeteoro[2]
              ? ((ig.game.elMeteoro[2] = !1),
                (this.hiloMeteoro = setInterval(
                  this.llamarMeteoro.bind(this),
                  60
                )))
              : this.mostrarTitle();
        },
        mostrarTitle: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.3,
            start: this.selectstageY,
            easing: "sinusoidal",
            easingType: "easeOut",
            end: 0,
            callback: function (e, t) {
              "end" != t && (e.target.selectstageY = t);
            },
            target: this,
          }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.4,
              start: this.backX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 0,
              callback: function (e, t) {
                "end" != t && (e.target.backX = t);
              },
              target: this,
            }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.4,
              start: this.replyX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 0,
              callback: function (e, t) {
                "end" != t && (e.target.replyX = t);
              },
              target: this,
            }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.4,
              start: this.moregX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 0,
              callback: function (e, t) {
                "end" != t && (e.target.moregX = t);
              },
              target: this,
            });
        },
        sacarTitle: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.3,
            start: this.backX,
            easing: "sinusoidal",
            easingType: "easeOut",
            end: -450 * this.ruta.escalaCubo,
            callback: function (e, t) {
              "end" != t && (e.target.backX = t);
            },
            target: this,
          }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.3,
              start: this.selectstageY,
              easing: "sinusoidal",
              easingType: "easeIn",
              end: -580,
              callback: function (e, t) {
                "end" != t
                  ? (e.target.selectstageY = t)
                  : (e.kill(),
                    1 == e.target.opt && e.target.kill(),
                    e.target.continuarOpt());
              },
              target: this,
            }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.3,
              start: this.replyX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 450 * this.ruta.escalaCubo,
              callback: function (e, t) {
                "end" != t && (e.target.replyX = t);
              },
              target: this,
            }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.3,
              start: this.moregX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 300 * this.ruta.escalaCubo,
              callback: function (e, t) {
                "end" != t && (e.target.moregX = t);
              },
              target: this,
            });
        },
        continuarOpt: function () {
          switch (this.opt) {
            case 0:
              ig.game.selectAnimal = this.ruta.spawnEntity(SelectAnimal, this);
              break;
            case 1:
              ig.game.empezarReiniciar();
          }
        },
        unClick: function (e) {
          return (
            0 == this.selectstageY &&
            ig.input.mouse.x >= e[0] + this.pos.x &&
            ig.input.mouse.x <= e[0] + this.pos.x + e[2] &&
            ig.input.mouse.y <= e[1] + this.pos.y + e[2] &&
            ig.input.mouse.y >= e[1] + this.pos.y
          );
        },
        unClickImg: function (e, t) {
          return (
            ig.input.mouse.x >= t[0] + this.pos.x &&
            ig.input.mouse.x <=
              t[0] + this.pos.x + this.ruta.escalaCubo * e.width &&
            ig.input.mouse.y <=
              t[1] + this.pos.y + this.ruta.escalaCubo * e.height &&
            ig.input.mouse.y >= t[1] + this.pos.y
          );
        },
        update: function () {
          this.parent(),
            ig.input.pressed("click") &&
              0 == this.selectstageY &&
              (1 == this.unClick(this.backbV)
                ? (ig.game.assets.tapS.play(), this.goBack(0))
                : 1 ==
                  this.unClickImg(ig.game.assets.moregames, this.moregamesbV)
                ? (ig.game.assets.tapS.play(),
                  ig.input.unbindAll(),
                  ig.game.bindAll(),
                  SG.redirectToPortal())
                : 1 == this.unClick(this.replybV) &&
                  (ig.game.assets.tapS.play(), this.goBack(1)));
        },
        goBack: function (e) {
          (this.opt = e), this.sacarTitle();
        },
        draw: function () {
          var e = ig.system.width / 2,
            t = ig.system.height / 2,
            i = ig.system.width,
            a = ig.system.height,
            r = this.ruta.escalaCubo * ig.game.escala2D;
          if ((r > 1 && (r = 1), 1 == ig.game.meteoro[2]))
            ig.system.context.drawImage(
              ig.game.assets.meteoro.sheet.image.data,
              ig.game.levelClass.posIniX +
                ig.game.levelClass.zoom[0] +
                ig.game.levelClass.paneo[0] +
                ig.game.levelClass.pos.x +
                ig.game.meteoro[0] -
                80 * ig.game.escalaCubo,
              ig.game.levelClass.posIniY +
                ig.game.levelClass.zoom[1] +
                ig.game.levelClass.paneo[1] +
                ig.game.levelClass.pos.y +
                ig.game.meteoro[1] -
                42 * ig.game.escalaCubo,
              ig.game.assets.meteoro.sheet.width * ig.game.escalaCubo,
              ig.game.assets.meteoro.sheet.height * ig.game.escalaCubo
            );
          else {
            var s, o;
            this.panelAnimal.draw(
              e - (r * this.panelAnimal.frameData.frame.w) / 2,
              t -
                (r * this.panelAnimal.frameData.frame.h) / 2 +
                this.selectstageY * this.ruta.escalaCubo
            ),
              this.backb.draw(
                0 - 1 * r + this.backX,
                a + 1 * r - r * this.backb.frameData.frame.h
              ),
              this.replyb.draw(
                i - 150 * r + this.replyX,
                a + 1 * r - r * this.replyb.frameData.frame.h
              ),
              (this.backbV = new Array(
                0 - 1 * r + this.backX,
                a + 1 * r - r * this.backb.frameData.frame.h,
                150 * r
              )),
              (this.replybV = new Array(
                i - 150 * r + this.replyX,
                a + 1 * r - r * this.replyb.frameData.frame.h,
                150 * r
              )),
              ig.game.assets.moregames.draw(
                e + 60 * r - r * ig.game.assets.moregames.width,
                a + 1 * r - r * ig.game.assets.moregames.height + this.moregX
              ),
              (this.moregamesbV = new Array(
                e + 60 * r - r * ig.game.assets.moregames.width,
                a + 1 * r - r * ig.game.assets.moregames.height + this.moregX,
                130 * r
              )),
              (s =
                ig.game.score < 10
                  ? "00" + ig.game.score
                  : ig.game.score < 100
                  ? "0" + ig.game.score
                  : "" + ig.game.score),
              (o =
                ig.game.bestScore < 10
                  ? "00" + ig.game.bestScore
                  : ig.game.bestScore < 100
                  ? "0" + ig.game.bestScore
                  : "" + ig.game.bestScore),
              ig.game.assets.fontN.draw(
                o,
                e + (r * this.panelAnimal.frameData.frame.w) / 10,
                t +
                  269 * r -
                  (r * this.panelAnimal.frameData.frame.h) / 1.47 +
                  this.selectstageY * this.ruta.escalaCubo
              ),
              ig.game.assets.fontN.draw(
                s,
                e + (r * this.panelAnimal.frameData.frame.w) / 10,
                t +
                  256 * r -
                  r * this.panelAnimal.frameData.frame.h * 1.19 +
                  this.selectstageY * this.ruta.escalaCubo
              );
            var n = 32 * r;
            (this.fuente = new Font(n + "px Play")),
              this.fuente.draw(
                ig.game.arrayTextos.scorePanel,
                e - (r * this.panelAnimal.frameData.frame.w) / 2 + 120 * r,
                t -
                  (r * this.panelAnimal.frameData.frame.h) / 2 +
                  54 * r +
                  this.selectstageY * this.ruta.escalaCubo,
                "left",
                "#FFFFFF"
              ),
              this.fuente.draw(
                ig.game.arrayTextos.best,
                e - (r * this.panelAnimal.frameData.frame.w) / 2 + 120 * r,
                t -
                  (r * this.panelAnimal.frameData.frame.h) / 2 +
                  205 * r +
                  this.selectstageY * this.ruta.escalaCubo,
                "left",
                "#FFFFFF"
              );
          }
          this.selectstageY;
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.impact-splash-loader")
    .requires("impact.loader")
    .defines(function () {
      (ig.ImpactSplashLoader = ig.Loader.extend({
        endTime: 0,
        fadeToWhiteTime: 200,
        fadeToGameTime: 800,
        logoWidth: 340,
        logoHeight: 120,
        logo: null,
        logobV: [],
        end: function () {
          this.parent(),
            (this.endTime = Date.now()),
            ig.system.setDelegate(this);
        },
        run: function () {
          var e = Date.now() - this.endTime,
            t = 1;
          if (e < this.fadeToWhiteTime)
            this.draw(), (t = e.map(0, this.fadeToWhiteTime, 0, 1));
          else {
            if (!(e < this.fadeToGameTime))
              return void ig.system.setDelegate(ig.game);
            ig.game.run(),
              (t = e.map(this.fadeToWhiteTime, this.fadeToGameTime, 1, 0));
          }
          (ig.system.context.fillStyle = "rgba(255,255,255," + t + ")"),
            ig.system.context.fillRect(
              0,
              0,
              ig.system.realWidth,
              ig.system.realHeight
            );
        },
        unClick: function (e, t) {
          return (
            ig.input.mouse.x >= t[0] &&
            ig.input.mouse.x <= t[0] + t[2] &&
            ig.input.mouse.y <= t[1] + t[3] &&
            ig.input.mouse.y >= t[1]
          );
        },
        openUrl: function (e) {
          var t = document.getElementById("targetA");
          (t.href = e), t.click();
        },
        draw: function () {
          this._drawStatus += (this.status - this._drawStatus) / 5;
          var e = ig.system.context,
            t = ig.system.realWidth,
            i = (ig.system.realHeight, t / this.logoWidth / 3),
            a = (t - this.logoWidth * i) / 2;
          this.bekho(e),
            null == this.logo
              ? (ig.input.bind(ig.KEY.MOUSE1, "click"),
                (this.logo = new ig.Image("./logo.jpg")),
                (this.logobV = new Array(
                  ig.system.realWidth / 2 - (this.logo.width * i) / 2,
                  ig.system.realHeight / 2 - (this.logo.height * i) / 2,
                  this.logo.width * i
                )))
              : (ig.system.context.drawImage(
                  this.logo.data,
                  ig.system.realWidth / 2 - (this.logo.width * i) / 2,
                  ig.system.realHeight / 2 - (this.logo.height * i) / 2,
                  this.logo.width * i,
                  this.logo.height * i
                ),
                (this.logobV = new Array(
                  ig.system.realWidth / 2 - (this.logo.width * i) / 2,
                  ig.system.realHeight / 2 - (this.logo.height * i) / 2,
                  this.logo.width * i,
                  this.logo.height * i
                ))),
            ig.input.pressed("click") &&
              (ig.input.unbindAll(),
              ig.input.bind(ig.KEY.MOUSE1, "click"),
              1 == this.unClick(this.logo, this.logobV) &&
                SG.redirectToPortal()),
            (e.fillStyle = "rgba(0,0,0,0.8)"),
            e.save(),
            e.translate(
              a,
              ig.system.realHeight / 2 - (this.logo.height * i) / 1.3
            ),
            e.scale(i, i),
            (e.lineWidth = "3"),
            (e.strokeStyle = "rgb(255,255,255)"),
            e.strokeRect(25, this.logoHeight + 40 + 100, 300, 20),
            (e.fillStyle = "rgb(255,255,255)"),
            e.fillRect(
              30,
              this.logoHeight + 45 + 100,
              290 * this._drawStatus,
              10
            ),
            e.restore();
        },
        drawPaths: function (e, t) {
          var i = ig.system.context;
          i.fillStyle = e;
          for (var a = 0; a < t.length; a += 2)
            i[ig.ImpactSplashLoader.OPS[t[a]]].apply(i, t[a + 1]);
        },
        bekho: function (e) {
          e.save(),
            e.beginPath(),
            e.moveTo(ig.system.realWidth, ig.system.realHeight),
            e.lineTo(0, ig.system.realHeight),
            e.lineTo(0, 0),
            e.lineTo(ig.system.realWidth, 0),
            e.lineTo(ig.system.realWidth, ig.system.realHeight),
            e.closePath(),
            (e.fillStyle = "rgb(254, 128, 43)"),
            e.fill(),
            e.stroke(),
            e.save(),
            e.beginPath();
          ig.system.realWidth;
        },
      })),
        (ig.ImpactSplashLoader.OPS = {
          bp: "beginPath",
          cp: "closePath",
          f: "fill",
          m: "moveTo",
          l: "lineTo",
          bc: "bezierCurveTo",
        }),
        (ig.ImpactSplashLoader.PATHS_COMET = [
          "bp",
          [],
          "m",
          [85.1, 58.3],
          "l",
          [0, 0],
          "l",
          [29.5, 40.4],
          "l",
          [16.1, 36.1],
          "l",
          [54.6, 91.6],
          "bc",
          [65.2, 106.1, 83.4, 106.7, 93.8, 95.7],
          "bc",
          [103.9, 84.9, 98.6, 67.6, 85.1, 58.3],
          "cp",
          [],
          "m",
          [76, 94.3],
          "bc",
          [68.5, 94.3, 62.5, 88.2, 62.5, 80.8],
          "bc",
          [62.5, 73.3, 68.5, 67.2, 76, 67.2],
          "bc",
          [83.5, 67.2, 89.6, 73.3, 89.6, 80.8],
          "bc",
          [89.6, 88.2, 83.5, 94.3, 76, 94.3],
          "cp",
          [],
          "f",
          [],
        ]),
        (ig.ImpactSplashLoader.PATHS_IMPACT = []);
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.hud")
    .requires("impact.game")
    .defines(function () {
      Hud = ig.Entity.extend({
        name: "hud",
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        ruta: null,
        rutaTitle: null,
        coinsWord: null,
        scoreWord: null,
        coinsNums: [],
        scoreNums: [],
        muteV: [],
        indexMute: 0,
        init: function (e) {
          ig.input.bind(ig.KEY.MOUSE1, "click"),
            (this.ruta = e),
            (this.scoreWord = ig.game.assets.scoreWord),
            (this.coinsWord = ig.game.assets.coinsWord),
            (this.coinsNums = ig.game.assets.coinsNums),
            (this.scoreNums = ig.game.assets.scoreNums),
            this.mostrarTitle(),
            (this.currentAnim = null),
            0 == ig.game.muteado ? (this.indexMute = 0) : (this.indexMute = 1);
        },
        mostrarTitle: function () {},
        sacarTitle: function () {},
        update: function () {
          this.parent(),
            ig.input.pressed("click") &&
              1 == this.unClickImg(ig.game.assets.mutes[0], this.muteV) &&
              (ig.game.assets.tapS.play(),
              0 == ig.game.muteado
                ? (Howler.mute(), (ig.game.muteado = !0), (this.indexMute = 1))
                : (Howler.unmute(),
                  (ig.game.muteado = !1),
                  (this.indexMute = 0)));
        },
        unClickImg: function (e, t) {
          return (
            ig.input.mouse.x >= t[0] + this.pos.x &&
            ig.input.mouse.x <=
              t[0] + this.pos.x + this.ruta.escalaCubo * e.width &&
            ig.input.mouse.y <=
              t[1] + this.pos.y + this.ruta.escalaCubo * e.height &&
            ig.input.mouse.y >= t[1] + this.pos.y
          );
        },
        draw: function () {
          ig.system.width, ig.system.height;
          var e = ig.system.width,
            t = (ig.system.height, this.ruta.escalaCubo * ig.game.escala2D);
          t > 1 && (t = 1);
          for (var i = 0; i < 3; i++) {
            var a = ig.game.scoreArray[i],
              r = ig.game.coinsArray[3 - i - 1];
            this.scoreNums[a][i].draw(
              0 +
                t * this.scoreNums[a][i].frameData.frame.w * (3 - i) -
                (t * this.scoreNums[a][i].frameData.frame.w) / 1.25,
              0 + (t * this.scoreNums[a][i].frameData.frame.h) / 10
            ),
              this.coinsNums[r][i].draw(
                e -
                  t * this.coinsNums[r][i].frameData.frame.w * (3 - i) -
                  (t * this.coinsNums[r][i].frameData.frame.w) / 5,
                0 + (t * this.coinsNums[r][i].frameData.frame.h) / 10
              );
          }
          ig.game.assets.mutes[this.indexMute].draw(0 + 170 * t, 0),
            (this.muteV = new Array(0 + 170 * t, 0, 100)),
            this.selectstageY;
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.selectAnimal")
    .requires("impact.game")
    .defines(function () {
      SelectAnimal = ig.Entity.extend({
        name: "panelAnimal",
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        ruta: null,
        rutaTitle: null,
        selectstageY: -580,
        selectstageV: null,
        backb: null,
        fontB: null,
        fontS: null,
        fontN: null,
        clickSound: null,
        exitb: null,
        panelAnimal: null,
        backbV: null,
        backX: null,
        pollobV: null,
        gatobV: null,
        perrobV: null,
        chanchobV: null,
        conejobV: null,
        ranabV: null,
        selector: null,
        prices: null,
        animalesComprados: [],
        animalesPrices: [0, 100, 200, 300, 400, 500],
        seleccion: [1, 4.74, 8.49, 12.24, 16.01, 19.77],
        fuente: null,
        fuente2: null,
        seteaVariables: function () {
          (this.fuente = new Font("25px Play")),
            (this.fuente2 = new Font("25px Play"));
          ig.system.width, ig.system.height, ig.system.width, ig.system.height;
          (this.backX = -450 * this.ruta.escalaCubo),
            (this.selectstageY = -580),
            (this.selector = this.ruta.assets.animalSelector),
            (this.prices = this.ruta.assets.prices),
            (this.currentAnim = null),
            (this.animalesComprados[0] = !0);
          for (var e = 1; e <= 5; e++)
            1 == ig.game.permitirStorage
              ? ((this.animalesComprados[e] = localStorageSandboxed.getItem(
                  "animalComprado" + e
                )),
                null == this.animalesComprados[e] ||
                null == this.animalesComprados[e] ||
                1 == isNaN(this.animalesComprados[e])
                  ? (this.animalesComprados[e] = !1)
                  : "1" == this.animalesComprados[e]
                  ? (this.animalesComprados[e] = !0)
                  : (this.animalesComprados[e] = !1))
              : (this.animalesComprados[e] = !1);
        },
        init: function (e) {
          ig.input.bind(ig.KEY.MOUSE1, "click"),
            (this.ruta = e.ruta),
            (this.rutaTitle = e),
            (this.panelAnimal = this.ruta.assets.panelAnimal),
            (this.backb = this.ruta.assets.botonBackAnimal),
            (this.pollobV = new Array(42, 240, 130)),
            (this.gatobV = new Array(192, 240, 130)),
            (this.perrobV = new Array(342, 240, 130)),
            (this.chanchobV = new Array(493, 240, 130)),
            (this.conejobV = new Array(640, 240, 130)),
            (this.ranabV = new Array(793, 240, 130)),
            this.seteaVariables(),
            this.mostrarTitle();
        },
        mostrarTitle: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.3,
            start: this.selectstageY,
            easing: "sinusoidal",
            easingType: "easeOut",
            end: 0,
            callback: function (e, t) {
              "end" != t && (e.target.selectstageY = t);
            },
            target: this,
          }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.4,
              start: this.backX,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 0,
              callback: function (e, t) {
                "end" != t && (e.target.backX = t);
              },
              target: this,
            });
        },
        sacarTitle: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.3,
            start: this.backX,
            easing: "sinusoidal",
            easingType: "easeOut",
            end: -450 * this.ruta.escalaCubo,
            callback: function (e, t) {
              "end" != t && (e.target.backX = t);
            },
            target: this,
          }),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.3,
              start: this.selectstageY,
              easing: "sinusoidal",
              easingType: "easeIn",
              end: -580,
              callback: function (e, t) {
                "end" != t
                  ? (e.target.selectstageY = t)
                  : (e.kill(),
                    e.target.kill(),
                    e.target.rutaTitle.mostrarTitle());
              },
              target: this,
            });
        },
        empezarLevel: function (e) {},
        unClick: function (e) {
          return (
            0 == this.selectstageY &&
            ig.input.mouse.x >= e[0] + this.pos.x &&
            ig.input.mouse.x <= e[0] + this.pos.x + e[2] &&
            ig.input.mouse.y <= e[1] + this.pos.y + e[2] &&
            ig.input.mouse.y >= e[1] + this.pos.y
          );
        },
        update: function () {
          this.parent(),
            ig.input.pressed("click") &&
              0 == this.selectstageY &&
              (1 == this.unClick(this.backbV)
                ? (ig.game.assets.tapS.play(), this.goBack())
                : 1 == this.unClick(this.pollobV)
                ? (ig.game.assets.pickS.play(),
                  (this.ruta.animalElegido = 0),
                  1 == ig.game.permitirStorage &&
                    localStorageSandboxed.setItem("animal_elegido", 0),
                  this.ruta.levelClass.setAnimal())
                : 1 == this.unClick(this.gatobV)
                ? 0 == this.animalesComprados[1]
                  ? ig.game.coins >= this.animalesPrices[1] &&
                    (ig.game.assets.buyS.play(),
                    (this.animalesComprados[1] = !0),
                    (ig.game.coins = parseInt(
                      parseInt(ig.game.coins) - this.animalesPrices[1]
                    )),
                    1 == ig.game.permitirStorage &&
                      (localStorageSandboxed.setItem("animalComprado1", "1"),
                      localStorageSandboxed.setItem("coins", ig.game.coins)),
                    ig.game.creaCoinsArray())
                  : (ig.game.assets.pickS.play(),
                    (this.ruta.animalElegido = 1),
                    1 == ig.game.permitirStorage &&
                      localStorageSandboxed.setItem("animal_elegido", 1),
                    this.ruta.levelClass.setAnimal())
                : 1 == this.unClick(this.perrobV)
                ? 0 == this.animalesComprados[2]
                  ? ig.game.coins >= this.animalesPrices[2] &&
                    (ig.game.assets.buyS.play(),
                    (this.animalesComprados[2] = !0),
                    (ig.game.coins = parseInt(
                      parseInt(ig.game.coins) - this.animalesPrices[2]
                    )),
                    1 == ig.game.permitirStorage &&
                      (localStorageSandboxed.setItem("animalComprado2", "1"),
                      localStorageSandboxed.setItem("coins", ig.game.coins)),
                    ig.game.creaCoinsArray())
                  : (ig.game.assets.pickS.play(),
                    (this.ruta.animalElegido = 2),
                    1 == ig.game.permitirStorage &&
                      localStorageSandboxed.setItem("animal_elegido", 2),
                    this.ruta.levelClass.setAnimal())
                : 1 == this.unClick(this.chanchobV)
                ? 0 == this.animalesComprados[3]
                  ? ig.game.coins >= this.animalesPrices[3] &&
                    (ig.game.assets.buyS.play(),
                    (this.animalesComprados[3] = !0),
                    (ig.game.coins = parseInt(
                      parseInt(ig.game.coins) - this.animalesPrices[3]
                    )),
                    1 == ig.game.permitirStorage &&
                      (localStorageSandboxed.setItem("animalComprado3", "1"),
                      localStorageSandboxed.setItem("coins", ig.game.coins)),
                    ig.game.creaCoinsArray())
                  : (ig.game.assets.pickS.play(),
                    (this.ruta.animalElegido = 3),
                    1 == ig.game.permitirStorage &&
                      localStorageSandboxed.setItem("animal_elegido", 3),
                    this.ruta.levelClass.setAnimal())
                : 1 == this.unClick(this.conejobV)
                ? 0 == this.animalesComprados[4]
                  ? ig.game.coins >= this.animalesPrices[4] &&
                    (ig.game.assets.buyS.play(),
                    (this.animalesComprados[4] = !0),
                    (ig.game.coins = parseInt(
                      parseInt(ig.game.coins) - this.animalesPrices[4]
                    )),
                    1 == ig.game.permitirStorage &&
                      (localStorageSandboxed.setItem("animalComprado4", "1"),
                      localStorageSandboxed.setItem("coins", ig.game.coins)),
                    ig.game.creaCoinsArray())
                  : (ig.game.assets.pickS.play(),
                    (this.ruta.animalElegido = 4),
                    1 == ig.game.permitirStorage &&
                      localStorageSandboxed.setItem("animal_elegido", 4),
                    this.ruta.levelClass.setAnimal())
                : 1 == this.unClick(this.ranabV) &&
                  (0 == this.animalesComprados[5]
                    ? ig.game.coins >= this.animalesPrices[5] &&
                      (ig.game.assets.buyS.play(),
                      (this.animalesComprados[5] = !0),
                      (ig.game.coins = parseInt(
                        parseInt(ig.game.coins) - this.animalesPrices[5]
                      )),
                      1 == ig.game.permitirStorage &&
                        (localStorageSandboxed.setItem("animalComprado5", "1"),
                        localStorageSandboxed.setItem("coins", ig.game.coins)),
                      ig.game.creaCoinsArray())
                    : (ig.game.assets.pickS.play(),
                      (this.ruta.animalElegido = 5),
                      1 == ig.game.permitirStorage &&
                        localStorageSandboxed.setItem("animal_elegido", 5),
                      this.ruta.levelClass.setAnimal())));
        },
        goBack: function () {
          this.sacarTitle();
        },
        clickPlay: function () {
          this.sacarBotones();
        },
        draw: function () {
          var e = ig.system.width / 2,
            t = ig.system.height / 2,
            i = (ig.system.width, ig.system.height),
            a = this.ruta.escalaCubo * ig.game.escala2D;
          a > 1 && (a = 1),
            this.panelAnimal.draw(
              e - (a * this.panelAnimal.frameData.frame.w) / 2,
              t -
                (a * this.panelAnimal.frameData.frame.h) / 1.8 +
                this.selectstageY * this.ruta.escalaCubo
            ),
            this.backb.draw(
              0 - 1 * a + this.backX,
              i + 1 * a - a * this.backb.frameData.frame.h
            ),
            (this.backbV = new Array(
              0 - 1 * a + this.backX,
              i + 1 * a - a * this.backb.frameData.frame.h,
              150 * a
            )),
            (this.seleccion[0] = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 2.18,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.seleccion[1] = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 3.3,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.seleccion[2] = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 6.8,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.seleccion[3] = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 100,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.seleccion[4] = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 6,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.seleccion[5] = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 3.1,
              t - (a * (190 * this.ruta.escala)) / 3.5
            )),
            (this.pollobV = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 2.18,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            )),
            (this.gatobV = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 3.3,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            )),
            (this.perrobV = new Array(
              e - (a * this.panelAnimal.frameData.frame.w) / 7,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            )),
            (this.chanchobV = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 100,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            )),
            (this.conejobV = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 6,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            )),
            (this.ranabV = new Array(
              e + (a * this.panelAnimal.frameData.frame.w) / 3.1,
              t - (a * (190 * this.ruta.escala)) / 3.5,
              130 * a
            ));
          var r = 19 * a;
          this.fuente = new Font(r + "px Play");
          for (var s = 1; s <= 6; s++) {
            var o = 100;
            this.fuente.draw(
              ig.game.arrayTextos["animal" + s],
              this.seleccion[s - 1][0] + o * a,
              this.seleccion[s - 1][1] +
                132 * a +
                this.selectstageY * this.ruta.escalaCubo,
              "center",
              "#FFFFFF"
            ),
              (o = 100),
              this.fuente.draw(
                ig.game.arrayTextos.pick,
                this.seleccion[s - 1][0] + o * a,
                this.seleccion[s - 1][1] -
                  25 * a +
                  this.selectstageY * this.ruta.escalaCubo,
                "center",
                "#FFFFFF"
              );
          }
          0 == this.selectstageY &&
            (0 == this.animalesComprados[1] &&
              this.prices[0].draw(
                this.seleccion[1][0],
                t - (a * (190 * this.ruta.escala)) / 2.2
              ),
            0 == this.animalesComprados[2] &&
              this.prices[1].draw(
                this.seleccion[2][0],
                t - (a * (190 * this.ruta.escala)) / 2.2
              ),
            0 == this.animalesComprados[3] &&
              this.prices[2].draw(
                this.seleccion[3][0],
                t - (a * (190 * this.ruta.escala)) / 2.2
              ),
            0 == this.animalesComprados[4] &&
              this.prices[3].draw(
                this.seleccion[4][0],
                t - (a * (190 * this.ruta.escala)) / 2.2
              ),
            0 == this.animalesComprados[5] &&
              this.prices[4].draw(
                this.seleccion[5][0],
                t - (a * (190 * this.ruta.escala)) / 2.2
              ),
            ig.system.context.drawImage(
              this.selector.data,
              this.seleccion[this.ruta.animalElegido][0],
              this.seleccion[this.ruta.animalElegido][1],
              this.selector.width * a,
              this.selector.height * a
            ));
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.entities.title")
    .requires("game.entities.hud", "game.entities.selectAnimal")
    .defines(function () {
      Title = ig.Entity.extend({
        name: "menu",
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        optionb: null,
        playb: null,
        helpb: null,
        logo: null,
        text: null,
        textDelay: 50,
        ruta: null,
        fondo: null,
        logoY: -350,
        optionX: 100,
        playY: 850,
        helpX: -100,
        playbV: null,
        optionbV: null,
        helpbV: null,
        Select: null,
        clickSound: null,
        muteb: null,
        soundb: null,
        opt: null,
        logoSpeed: 10,
        tutorialVar: null,
        selectAnimal: null,
        clickStart: !1,
        hiloTuto: null,
        enPanelAnimal: !1,
        moregamesbV: [],
        muteV: [],
        indexMute: 0,
        fuente: null,
        seteaVariables: function () {
          ig.system.width, ig.system.height;
          (this.fuente = new Font("25px Play")),
            1 == ig.game.permitirStorage
              ? ((this.tutorialVar = localStorageSandboxed.getItem("tutorial")),
                null == this.tutorialVar ||
                null == this.tutorialVar ||
                1 == isNaN(this.tutorialVar)
                  ? (this.tutorialVar = 0)
                  : 3 == this.tutorialVar && (this.tutorialVar = 3))
              : 3 != this.tutorialVar && (this.tutorialVar = 0),
            (this.textDelay = 50),
            (this.logoY = -350),
            (this.optionX = -450 * this.ruta.escalaCubo),
            (this.playY = 850),
            (this.helpX = -450 * this.ruta.escalaCubo);
        },
        init: function (e) {
          ig.input.bind(ig.KEY.MOUSE1, "click"),
            (this.ruta = e),
            this.seteaVariables(),
            (this.logo = this.ruta.assets.title),
            (this.text = this.ruta.assets.tapStart),
            (this.optionb = this.ruta.assets.selectAnimal),
            (this.currentAnim = null),
            this.mostrarTitle();
        },
        mostrarTitle: function () {
          (this.textDelay = 50),
            null != this.ruta.hud &&
              (this.ruta.hud.kill(), (this.ruta.hud = void 0)),
            this.ruta.spawnEntity(EntityTween, 0, 0, {
              time: 0.5,
              start: this.logoY,
              easing: "sinusoidal",
              easingType: "easeOut",
              end: 0,
              callback: function (e, t) {
                "end" != t &&
                  ((e.target.logoY = t),
                  0 == t && (e.kill(), e.target.mostrarBotones()));
              },
              target: this,
            });
        },
        sacarTitle: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.4,
            start: this.logoY,
            easing: "sinusoidal",
            easingType: "easeIn",
            end: -550,
            callback: function (e, t) {
              "end" != t ? (e.target.logoY = t) : e.target.empezarGame();
            },
            target: this,
          });
        },
        empezarGame: function () {
          (null != this.ruta.hud && null != this.ruta.hud) ||
            (this.ruta.hud = this.ruta.spawnEntity(Hud, this.ruta)),
            0 == this.opt
              ? 0 == this.tutorialVar
                ? (this.tutorialVar = 1)
                : (this.ruta.gameOver = 0)
              : 1 == this.opt &&
                (this.selectAnimal = this.ruta.spawnEntity(SelectAnimal, this));
        },
        mostrarBotones: function () {
          this.enPanelAnimal = !1;
          ig.system.width, ig.system.height;
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.5,
            start: this.optionX,
            easing: "sinusoidal",
            easingType: "easeOut",
            end: 0,
            callback: function (e, t) {
              "end" != t && (e.target.optionX = t);
            },
            target: this,
          });
        },
        sacarBotones: function () {
          this.ruta.spawnEntity(EntityTween, 0, 0, {
            time: 0.25,
            start: this.optionX,
            easing: "sinusoidal",
            easingType: "easeIn",
            end: -250 * this.ruta.escalaCubo,
            callback: function (e, t) {
              "end" != t
                ? (e.target.optionX = t)
                : ((e.target.textDelay = 99), e.target.sacarTitle());
            },
            target: this,
          });
        },
        unClick: function (e, t) {
          return (
            0 == this.logoY &&
            ig.input.mouse.x >= t[0] + this.pos.x &&
            ig.input.mouse.x <=
              t[0] + this.pos.x + this.ruta.escalaCubo * e.frameData.frame.w &&
            ig.input.mouse.y <=
              t[1] + this.pos.y + this.ruta.escalaCubo * e.frameData.frame.h &&
            ig.input.mouse.y >= t[1] + this.pos.y
          );
        },
        unClickImg: function (e, t) {
          return (
            0 == this.logoY &&
            ig.input.mouse.x >= t[0] + this.pos.x &&
            ig.input.mouse.x <=
              t[0] + this.pos.x + this.ruta.escalaCubo * e.width &&
            ig.input.mouse.y <=
              t[1] + this.pos.y + this.ruta.escalaCubo * e.height &&
            ig.input.mouse.y >= t[1] + this.pos.y
          );
        },
        update: function () {
          ig.input.pressed("click")
            ? 1 == this.unClick(this.optionb, this.optionbV)
              ? (ig.game.assets.tapS.play(),
                (this.enPanelAnimal = !0),
                this.clickPlay(1))
              : 1 == this.unClickImg(ig.game.assets.moregames, this.moregamesbV)
              ? (ig.game.assets.tapS.play(),
                ig.input.unbindAll(),
                ig.game.bindAll(),
                SG.redirectToPortal())
              : 1 == this.unClickImg(ig.game.assets.mutes[0], this.muteV)
              ? (ig.game.assets.tapS.play(),
                0 == ig.game.muteado
                  ? (Howler.mute(),
                    (ig.game.muteado = !0),
                    (this.indexMute = 1))
                  : (Howler.unmute(),
                    (ig.game.muteado = !1),
                    (this.indexMute = 0)))
              : 1 == this.tutorialVar && 1 == this.clickStart
              ? ((this.tutorialVar = 2),
                1 == ig.game.permitirStorage &&
                  localStorageSandboxed.setItem("tutorial", 3))
              : 0 == this.clickStart &&
                0 == this.enPanelAnimal &&
                (ig.game.assets.startGameS.play(),
                this.clickPlay(0),
                (this.clickStart = !0))
            : ig.input.pressed("up") ||
              ig.input.pressed("down") ||
              ig.input.pressed("left") ||
              ig.input.pressed("right")
            ? 0 == this.clickStart && 0 == this.enPanelAnimal
              ? (ig.game.assets.startGameS.play(),
                this.clickPlay(0),
                (this.clickStart = !0))
              : 1 == this.tutorialVar &&
                1 == this.clickStart &&
                ((this.tutorialVar = 2),
                1 == ig.game.permitirStorage &&
                  localStorageSandboxed.setItem("tutorial", 3))
            : 2 == this.tutorialVar &&
              ((this.tutorialVar = 3),
              (this.hiloTuto = setInterval(this.sacaTuto, 500))),
            this.parent();
        },
        sacaTuto: function () {
          clearInterval(this.hiloTuto), (ig.game.gameOver = 0);
        },
        muteSound: function () {
          0 == this.ruta.soundMute
            ? ((this.ruta.soundMute = !0),
              Howler.mute(),
              (this.optionb = this.muteb))
            : ((this.ruta.soundMute = !1),
              Howler.unmute(),
              "main" != this.ruta.currentSound &&
                (this.ruta.assets.mainSound.play(),
                (this.ruta.currentSound = "main")),
              (this.optionb = this.soundb));
        },
        clickPlay: function (e) {
          (this.opt = e), this.sacarBotones();
        },
        draw: function () {
          if (3 == this.ruta.gameOver) {
            var e = ig.system.width / 2,
              t = ig.system.height / 2,
              i = ig.system.width,
              a = ig.system.height,
              r = this.ruta.escalaCubo * ig.game.escala2D;
            if (
              (r > 1 && (r = 1),
              this.logo.draw(
                e - (r * this.logo.frameData.frame.w) / 2,
                t -
                  (r * this.logo.frameData.frame.h) / 2 +
                  this.logoY * this.ruta.escalaCubo
              ),
              0 == this.logoY)
            ) {
              if (99 != this.textDelay) {
                if (this.textDelay <= 30) {
                  var s = 28 * ig.game.escalaCubo;
                  this.fuente = new Font(s + "px Play");
                  var o = this.fuente.getWidth(),
                    n = this.fuente.size;
                  this.fuente.draw(
                    ig.game.arrayTextos.tap,
                    e - o,
                    a - 2 * n,
                    "center",
                    "#FFFFFF"
                  );
                }
                (this.textDelay = this.textDelay + 1),
                  this.textDelay >= 60 && (this.textDelay = 0);
              }
              this.optionb.draw(
                0 - 1 * r + this.optionX,
                a + 1 * r - r * this.optionb.frameData.frame.h
              ),
                (this.optionbV = new Array(
                  0 - 1 * r + this.optionX,
                  a + 1 * r - r * this.optionb.frameData.frame.h
                )),
                ig.game.assets.moregames.draw(
                  i +
                    12 * r -
                    r * ig.game.assets.moregames.width -
                    this.optionX,
                  a + 1 * r - r * ig.game.assets.moregames.height
                ),
                (this.moregamesbV = new Array(
                  i +
                    12 * r -
                    r * ig.game.assets.moregames.width -
                    this.optionX,
                  a + 1 * r - r * ig.game.assets.moregames.height,
                  130 * r
                )),
                ig.game.assets.mutes[this.indexMute].draw(0 + 170 * r, 0),
                (this.muteV = new Array(0 + 170 * r, 0, 100));
            }
            if (1 == this.tutorialVar) {
              (o = 285), (s = 36 * ig.game.escalaCubo);
              (this.fuente = new Font(s + "px Play")),
                this.ruta.assets.tutorialPanel.draw(
                  e - (r * this.ruta.assets.tutorialPanel.width) / 2,
                  t - (r * this.ruta.assets.tutorialPanel.height) / 2
                ),
                this.fuente.draw(
                  ig.game.arrayTextos.howToTittle,
                  e - (r * this.ruta.assets.tutorialPanel.width) / 2 + r * o,
                  t - (r * this.ruta.assets.tutorialPanel.height) / 2 + 24 * r
                );
            }
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo1")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo1 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(18 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 3;
                break;
              case 1:
              case 2:
                s = 10;
                break;
              case 3:
                s = 7;
                break;
              case 4:
                s = 3;
                break;
              case 5:
                (s = 5), (h = !0);
                break;
              case 6:
                s = 3;
                break;
              case 7:
                s = 5;
                break;
              case 8:
                s = 3;
                break;
              case 9:
                s = 5;
                break;
              case 10:
                s = 1;
                break;
              case 11:
                s = 0;
                break;
              case 12:
                s = 4;
                break;
              case 13:
                s = 1;
                break;
              case 14:
                s = 0;
                break;
              case 15:
                s = 6;
                break;
              case 16:
              case 17:
              case 18:
                s = 10;
                break;
              case 19:
                s = 8;
                break;
              case 20:
              case 21:
                s = 5;
                break;
              case 22:
                s = 10;
                break;
              case 23:
                s = 7;
                break;
              case 24:
                s = 3;
                break;
              case 25:
                s = 5;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (16 == a || 18 == a || 22 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (17 == a || 22 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                4 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo2")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo2 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        trenesI: [],
        trenesD: [],
        tortugas: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 3;
                break;
              case 1:
                s = 1;
                break;
              case 2:
                s = 0;
                break;
              case 3:
                s = 4;
                break;
              case 4:
                s = 5;
                break;
              case 5:
                s = 1;
                break;
              case 6:
                s = -2;
                break;
              case 7:
                s = 0;
                break;
              case 8:
                s = 6;
                break;
              case 9:
                s = 1;
                break;
              case 10:
              case 11:
                s = -2;
                break;
              case 12:
                s = 0;
                break;
              case 13:
                s = 9;
                break;
              case 14:
                s = 3;
                break;
              case 15:
                s = 5;
                break;
              case 16:
              case 17:
              case 18:
                s = 10;
                break;
              case 19:
                s = 7;
                break;
              case 20:
                s = 5;
                break;
              case 21:
                s = 10;
                break;
              case 22:
                s = 8;
                break;
              case 23:
                s = 9;
                break;
              case 24:
                s = 10;
                break;
              case 25:
                s = 7;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (16 == a || 18 == a || 22 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (17 == a || 22 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo3")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo3 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 3;
                break;
              case 2:
                s = 9;
                break;
              case 3:
                s = 3;
                break;
              case 4:
                s = 5;
                break;
              case 5:
                s = 9;
                break;
              case 6:
                s = 3;
                break;
              case 7:
                s = 5;
                break;
              case 8:
              case 9:
              case 10:
              case 11:
              case 12:
              case 13:
                s = 1;
                break;
              case 14:
                s = 0;
                break;
              case 15:
                s = 6;
                break;
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
                s = 10;
                break;
              case 23:
                s = 7;
                break;
              case 24:
                s = 3;
                break;
              case 25:
                s = 9;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (16 == a || 18 == a || 22 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (17 == a || 22 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo4")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo4 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 10;
                break;
              case 2:
                s = 8;
                break;
              case 3:
              case 4:
                s = 9;
                break;
              case 5:
                s = 4;
                break;
              case 6:
              case 7:
                s = 1;
                break;
              case 8:
                s = 0;
                break;
              case 9:
              case 10:
              case 11:
              case 12:
                s = 10;
                break;
              case 13:
                s = 7;
                break;
              case 14:
                s = 5;
                break;
              case 15:
                s = 3;
                break;
              case 16:
                s = 9;
                break;
              case 17:
                s = 4;
                break;
              case 18:
                s = 5;
                break;
              case 19:
                s = 3;
                break;
              case 20:
              case 21:
              case 22:
              case 23:
              case 24:
                s = 10;
                break;
              case 25:
                s = 7;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (10 == a || 12 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (20 == a || 22 == a || 24 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo5")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo5 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 3;
                break;
              case 2:
              case 3:
              case 4:
              case 5:
                s = 9;
                break;
              case 6:
                s = 3;
                break;
              case 7:
                s = 5;
                break;
              case 8:
              case 9:
              case 10:
              case 11:
              case 12:
                s = 10;
                break;
              case 13:
              case 14:
                s = 9;
                break;
              case 15:
                s = 4;
                break;
              case 16:
                s = 5;
                break;
              case 17:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
                s = 1;
                break;
              case 23:
                s = 0;
                break;
              case 24:
                s = 6;
                break;
              case 25:
                s = 3;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (8 == a || 10 == a || 12 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (10 == a || 12 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo6")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo6 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 3;
                break;
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                s = 10;
                break;
              case 7:
                s = 8;
                break;
              case 8:
              case 9:
              case 10:
                s = 1;
                break;
              case 11:
                s = 0;
                break;
              case 12:
              case 13:
                s = 10;
                break;
              case 14:
                s = 8;
                break;
              case 15:
              case 16:
              case 17:
              case 18:
              case 19:
                s = 1;
                break;
              case 20:
                s = 0;
                break;
              case 21:
              case 22:
              case 23:
              case 24:
                s = 10;
                break;
              case 25:
                s = 7;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (2 == a || 4 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (13 == a || 23 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo7")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo7 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 3;
                break;
              case 1:
              case 2:
              case 3:
              case 4:
                s = 10;
                break;
              case 5:
                s = 8;
                break;
              case 6:
              case 7:
              case 8:
                s = 10;
                break;
              case 9:
                s = 2;
                break;
              case 10:
              case 11:
              case 12:
                s = 10;
                break;
              case 13:
              case 14:
                s = 9;
                break;
              case 15:
                s = 6;
                break;
              case 16:
                s = 3;
                break;
              case 17:
                s = 5;
                break;
              case 18:
                s = 3;
                break;
              case 19:
                s = 5;
                break;
              case 20:
              case 21:
              case 22:
              case 23:
                s = 9;
                break;
              case 24:
                s = 6;
                break;
              case 25:
                s = 3;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (1 == a || 3 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (6 == a || 11 == a || 8 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo8")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo8 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
              case 2:
              case 3:
                s = 10;
                break;
              case 4:
                s = 8;
                break;
              case 5:
                s = 9;
                break;
              case 6:
              case 7:
              case 8:
                s = 1;
                break;
              case 9:
                s = 9;
                break;
              case 10:
                s = 2;
                break;
              case 11:
                s = 9;
                break;
              case 12:
                s = 5;
                break;
              case 13:
                s = 9;
                break;
              case 14:
                s = 3;
                break;
              case 15:
                s = 9;
                break;
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
                s = 1;
                break;
              case 21:
                s = 9;
                break;
              case 22:
                s = 2;
                break;
              case 23:
                s = 9;
                break;
              case 24:
                s = 0;
                break;
              case 25:
                s = 6;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (1 == a || 3 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (1 == a || 3 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo9")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo9 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 9;
                break;
              case 2:
                s = 10;
                break;
              case 3:
                s = 8;
                break;
              case 4:
                s = 3;
                break;
              case 5:
                (s = 5), (h = !0);
                break;
              case 6:
                s = 3;
                break;
              case 7:
                s = 5;
                break;
              case 8:
                s = 9;
                break;
              case 9:
              case 10:
              case 11:
                s = 1;
                break;
              case 12:
                s = 9;
                break;
              case 13:
                s = 2;
                break;
              case 14:
                s = 10;
                break;
              case 15:
                s = 7;
                break;
              case 16:
                s = 10;
                break;
              case 17:
                s = 8;
                break;
              case 18:
                s = 10;
                break;
              case 19:
                s = 9;
                break;
              case 20:
                s = 10;
                break;
              case 21:
                s = 8;
                break;
              case 22:
                s = 5;
                break;
              case 23:
              case 24:
                s = 10;
                break;
              case 25:
                s = 8;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (2 == a || 14 == a || 16 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (18 == a || 20 == a || 24 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                5 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo10")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo10 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 3;
                break;
              case 2:
                s = 5;
                break;
              case 3:
              case 4:
                s = 1;
                break;
              case 5:
                s = 0;
                break;
              case 6:
              case 7:
              case 8:
              case 9:
                s = 10;
                break;
              case 10:
                s = 2;
                break;
              case 11:
              case 12:
                s = 10;
                break;
              case 13:
                s = 8;
                break;
              case 14:
                s = 1;
                break;
              case 15:
                s = 0;
                break;
              case 16:
              case 17:
              case 18:
                s = 10;
                break;
              case 19:
                s = 8;
                break;
              case 20:
                s = 9;
                break;
              case 21:
              case 22:
              case 23:
                s = 1;
                break;
              case 24:
                s = 9;
                break;
              case 25:
                s = 3;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (6 == a || 8 == a || 12 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (16 == a || 18 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                9 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo11")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo11 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
              case 2:
                s = 10;
                break;
              case 3:
                s = 8;
                break;
              case 4:
                s = 5;
                break;
              case 5:
                (s = 3), (h = !0);
                break;
              case 6:
                s = 5;
                break;
              case 7:
                s = 3;
                break;
              case 8:
              case 9:
                s = 1;
                break;
              case 10:
                s = 0;
                break;
              case 11:
                s = 5;
                break;
              case 12:
                s = 9;
                break;
              case 13:
              case 14:
                s = 0;
                break;
              case 15:
                s = 9;
                break;
              case 16:
                s = 3;
                break;
              case 17:
                s = 5;
                break;
              case 18:
                s = 3;
                break;
              case 19:
              case 20:
                s = 10;
                break;
              case 21:
                s = 8;
                break;
              case 22:
                s = 9;
                break;
              case 23:
                s = 5;
                break;
              case 24:
                s = 9;
                break;
              case 25:
                s = 5;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (1 == a || 19 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (1 == a || 19 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                5 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.levels.tramo12")
    .requires("impact.game")
    .defines(function () {
      ig.Tramo12 = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        terrenoMatrix: [],
        ini: null,
        ext: null,
        arboles: [],
        rocas: [],
        semaforos: [],
        coins: [],
        troncos: [],
        autosI: [],
        autosD: [],
        tortugas: [],
        trenesI: [],
        trenesD: [],
        init: function (e, t) {
          (this.ini = e),
            (this.ext = t),
            (this.arboles = ig.game.assets.arboles),
            (this.rocas = ig.game.assets.rocas),
            (this.semaforos = ig.game.assets.semaforos),
            (this.autosI = ig.game.assets.autosI),
            (this.autosD = ig.game.assets.autosD),
            (this.coins = ig.game.assets.coins),
            (this.troncos = ig.game.assets.troncos),
            (this.tortugas = ig.game.assets.tortugas),
            (this.trenesD = ig.game.assets.trenesD),
            (this.trenesI = ig.game.assets.trenesI),
            this.creaTerreno(),
            (this.currentAnim = null);
        },
        creaObjeto: function () {
          var e = Math.ceil(20 * Math.random());
          switch (e) {
            case 1:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (e > 6) return this.arboles[3];
              break;
            case 4:
              if ((t = Math.floor(6 * Math.random())) < 4) return this.rocas[t];
              break;
            case 7:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (8 == e) return this.arboles[3];
              break;
            case 13:
              if ((t = Math.floor(9 * Math.random())) < 6)
                return this.arboles[t];
              if (7 == e) return this.arboles[3];
              break;
            case 17:
              var t;
              if ((t = Math.floor(7 * Math.random())) < 4) return this.rocas[t];
          }
          return 0;
        },
        creaTerreno: function () {
          this.terrenoMatrix = new Array();
          for (
            var e = this.ini,
              t = this.ext,
              i = Math.ceil(2 * Math.random()),
              a = 0;
            a < ig.game.mapaFila;
            a++
          ) {
            this.terrenoMatrix[a] = new Array();
            var r,
              s = 0,
              o = 0,
              n = 0,
              h = !1;
            switch (a) {
              case 0:
                s = 5;
                break;
              case 1:
                s = 3;
                break;
              case 2:
                s = 5;
                break;
              case 3:
                s = 10;
                break;
              case 4:
                s = 8;
                break;
              case 5:
                (h = !0), (s = 3);
                break;
              case 6:
                s = 5;
                break;
              case 7:
                s = 3;
                break;
              case 8:
                s = 5;
                break;
              case 9:
                s = 3;
                break;
              case 10:
                s = 1;
                break;
              case 11:
                s = 0;
                break;
              case 12:
                s = 3;
                break;
              case 13:
                s = 0;
                break;
              case 14:
                s = 5;
                break;
              case 15:
                s = 3;
                break;
              case 16:
                s = 0;
                break;
              case 17:
                s = 9;
                break;
              case 18:
                s = 0;
                break;
              case 19:
              case 20:
                s = 9;
                break;
              case 21:
                s = 0;
                break;
              case 22:
              case 23:
              case 24:
                s = 10;
                break;
              case 25:
                s = 7;
            }
            var m = 0,
              l = 1,
              c = 1;
            r = o;
            var u = 3.5 * Math.random(),
              g = Math.ceil(2 * Math.random());
            2 == g && (g = -1);
            var p = Math.ceil(10 * Math.random()),
              x = !0;
            if (1 == i) {
              if (3 == a || 22 == a || 24 == a)
                switch (p) {
                  case 1:
                  case 2:
                  case 4:
                  case 6:
                  case 7:
                  case 10:
                    x = !0;
                    break;
                  case 3:
                  case 5:
                  case 8:
                  case 9:
                    x = !1;
                }
            } else if (22 == a || 3 == a)
              switch (p) {
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                case 10:
                  x = !0;
                  break;
                case 3:
                case 5:
                case 8:
                case 9:
                  x = !1;
              }
            var d = 3.5 * Math.random(),
              f = Math.ceil(2 * Math.random());
            2 == f && (f = -1);
            var y = new Array(),
              w = "none",
              S = "",
              v = Math.ceil(2 * Math.random());
            2 == v && (v = -1);
            for (var M = e; M < ig.game.mapaColum + t; M++) {
              if (
                ((c = 1),
                (l = 1),
                (o = r),
                (w = "none"),
                3 == s || 5 == s || 4 == s || 6 == s || 7 == s || 8 == s)
              )
                5 == a && 13 == m && (h = !0),
                  m <= 5 || m >= 21
                    ? (o = this.arboles[0])
                    : 0 == h &&
                      0 == o &&
                      ((c = 1), (o = this.creaObjeto()), (n = 0), (l = 1));
              else if (10 == s) {
                if (1 == x)
                  m < 12 &&
                    (y.push(m),
                    (n = ig.game.indexTroncos),
                    (o = this.troncos[n][0]),
                    (c = this.averiguaTipo(
                      this.troncos[n][0].frameData.filename.substring(0, 11)
                    )),
                    (S = this.troncos[n][0].frameData.filename.substring(
                      0,
                      11
                    )),
                    (ig.game.indexTroncos = ig.game.indexTroncos + 1),
                    ig.game.indexTroncos >= 36 && (ig.game.indexTroncos = 0),
                    (l = 2),
                    (w = "tronco"));
                else
                  2 != (p = Math.ceil(10 * Math.random())) &&
                  7 != p &&
                  8 != p &&
                  10 != p &&
                  5 != p &&
                  "tortuga" != w
                    ? (y.push(m),
                      (o = this.tortugas[ig.game.indexTortugas][0]),
                      (n = ig.game.indexTortugas),
                      (c = 1),
                      (S = this.tortugas[n][0].frameData.filename.substring(
                        0,
                        4
                      )),
                      (ig.game.indexTortugas = ig.game.indexTortugas + 1),
                      ig.game.indexTortugas >= 12 &&
                        (ig.game.indexTortugas = 0),
                      (l = 2),
                      (w = "tortuga"))
                    : (w = "none");
              } else
                0 == s || 1 == s || -1 == s || -2 == s
                  ? 1 == f
                    ? m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosD[n][0]),
                      (c = this.averiguaTipo(
                        this.autosD[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosD[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                    : m < 6 &&
                      (y.push(m),
                      (n = Math.floor(50 * Math.random())),
                      (o = this.autosI[n][0]),
                      (c = this.averiguaTipo(
                        this.autosI[n][0].frameData.filename.substring(0, 5)
                      )),
                      (S = this.autosI[n][0].frameData.filename.substring(
                        0,
                        5
                      )),
                      (l = 3),
                      (w = "auto"))
                  : 9 == s &&
                    (m <= 13
                      ? (y.push(m),
                        1 == v
                          ? ((o =
                              13 == m
                                ? this.trenesD[0][0]
                                : this.trenesD[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren"))
                          : ((o =
                              0 == m ? this.trenesI[0][0] : this.trenesI[0][1]),
                            (n = 0),
                            (c = 4),
                            (S = "tren")),
                        (l = 3),
                        (w = "tren"))
                      : 16 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 17 == m
                      ? ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 19 == m
                      ? ((o = this.semaforos[0]),
                        (c = 1),
                        (l = 2),
                        (w = "none"))
                      : 20 == m &&
                        ((o = this.semaforos[1]),
                        (c = 1),
                        (l = 2),
                        (w = "none")));
              if (
                ((this.terrenoMatrix[a][m] = new Array()),
                (1 != s && -1 != s) || (s *= -1),
                (this.terrenoMatrix[a][m][0] =
                  -1 == s ? 0 : -2 == s ? this.terrenoMatrix[a - 1][m][0] : s),
                (this.terrenoMatrix[a][m][1] = new Array()),
                0 == o)
              ) {
                if (10 != s)
                  if (a > 6 && m > 5 && m < 21)
                    5 == Math.ceil(16 * Math.random()) &&
                      ((c = 1),
                      (S = (o = this.coins[0][0]).frameData.filename.substring(
                        0,
                        4
                      )),
                      (w = "coin"),
                      (l = 4),
                      (this.terrenoMatrix[a][m][1][0] = o),
                      (this.terrenoMatrix[a][m][1][1] = l),
                      (this.terrenoMatrix[a][m][1][2] = c),
                      (this.terrenoMatrix[a][m][1][3] = m),
                      (this.terrenoMatrix[a][m][1][20] = S),
                      (this.terrenoMatrix[a][m][1][21] = w),
                      (this.terrenoMatrix[a][m][1][22] = !1));
                0 == o &&
                  ((this.terrenoMatrix[a][m][1][0] = o),
                  (this.terrenoMatrix[a][m][1][1] = o),
                  (this.terrenoMatrix[a][m][1][2] = c),
                  (this.terrenoMatrix[a][m][1][3] = m),
                  (this.terrenoMatrix[a][m][1][20] = ""));
              } else
                "tronco" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][25] = u),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.troncos[n][1] = m))
                  : "auto" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = d),
                    (this.terrenoMatrix[a][m][1][10] = f),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = d),
                    1 == f ? (this.autosD[n][1] = m) : (this.autosI[n][1] = m))
                  : "tren" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = 0),
                    (this.terrenoMatrix[a][m][1][9] = 40),
                    (this.terrenoMatrix[a][m][1][10] = v),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.terrenoMatrix[a][m][1][25] = 40),
                    (this.troncos[n][1] = m))
                  : "tortuga" == w
                  ? ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][3] = m),
                    (this.terrenoMatrix[a][m][1][4] = a),
                    (this.terrenoMatrix[a][m][1][5] = 0),
                    (this.terrenoMatrix[a][m][1][6] = 0),
                    (this.terrenoMatrix[a][m][1][7] = 0),
                    (this.terrenoMatrix[a][m][1][8] = n),
                    (this.terrenoMatrix[a][m][1][9] = u),
                    (this.terrenoMatrix[a][m][1][10] = g),
                    (this.terrenoMatrix[a][m][1][20] = S),
                    (this.terrenoMatrix[a][m][1][21] = w),
                    (this.tortugas[n][1] = m))
                  : ((this.terrenoMatrix[a][m][1][0] = o),
                    (this.terrenoMatrix[a][m][1][1] = l),
                    (this.terrenoMatrix[a][m][1][2] = c),
                    (this.terrenoMatrix[a][m][1][20] = o.frameData.filename));
              m += 1;
            }
            this.terrenoMatrix[a][0][2] = y;
          }
        },
        averiguaTipo: function (e) {
          switch (e) {
            case "troncoshort":
              return 2;
            case "troncolargo":
              return 3;
            case "autoB":
              return 1.6;
            case "autoC":
              return 2;
            case "carA-":
              return 1.7;
            case "bus-a":
            case "bus-b":
            case "camio":
              return 3.6;
            case "Camio":
              return 2;
            case "taxiB":
            case "taxiF":
              return 1.6;
          }
        },
      });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.font")
    .requires("impact.impact")
    .defines(function () {
      (Font = ig.Class.extend({
        align: "left",
        alpha: 1,
        baseline: "top",
        colors: ["#FFFFFF"],
        current: 0,
        flicker: 0.15,
        font: null,
        pos: { x: 0, y: 0 },
        size: 0,
        text: "",
        vel: { x: 0, y: 0 },
        init: function (e, t, i, a) {
          (this.flicker = new ig.Timer(this.flicker)),
            (this.font = e || "20px Garamond"),
            (this.pos.x = t || 0),
            (this.pos.y = i || 0),
            (this.size = this.getSize()),
            ig.merge(this, a);
        },
        draw: function (e, t, i, a, r) {
          var s = ig.system.context;
          (s.font = this.font),
            s.save(),
            (s.globalAlpha = this.alpha),
            (s.textAlign = a || this.align),
            (s.textBaseline = this.baseline),
            (s.fillStyle = r || this.colors[this.current]),
            s.fillText(
              e || this.text,
              ig.system.getDrawPos(t || this.pos.x),
              ig.system.getDrawPos(i || this.pos.y)
            ),
            s.restore();
        },
        getSize: function (e) {
          return Number(/\d+/.exec(e || this.font));
        },
        getWidth: function (e) {
          return Font.Width(e || this.text, this.font);
        },
        update: function () {
          (this.pos.x += this.vel.x * ig.system.tick),
            (this.pos.y += this.vel.y * ig.system.tick),
            this.flicker.delta() > 0 &&
              (++this.current === this.colors.length && (this.current = 0),
              this.flicker.reset());
        },
      })),
        (Font.Width = function (e, t) {
          var i = ig.system.context;
          return (
            (!ig.game._font || (t && ig.game._font !== t)) &&
              ((ig.game._font = t), (i.font = t)),
            i.measureText(e).width / ig.system.scale
          );
        });
    }),
  (ig.baked = !0),
  ig
    .module("plugins.tween")
    .requires("impact.entity")
    .defines(function () {
      "use strict";
      var e = {
        linear: {
          easeNone: function (e) {
            return e;
          },
        },
        quadratic: {
          easeIn: function (e) {
            return e * e;
          },
          easeOut: function (e) {
            return -e * (e - 2);
          },
          easeInOut: function (e) {
            return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
          },
        },
        cubic: {
          easeIn: function (e) {
            return e * e * e;
          },
          easeOut: function (e) {
            return --e * e * e + 1;
          },
          easeInOut: function (e) {
            return (e *= 2) < 1
              ? 0.5 * e * e * e
              : 0.5 * ((e -= 2) * e * e + 2);
          },
        },
        quartic: {
          easeIn: function (e) {
            return e * e * e * e;
          },
          easeOut: function (e) {
            return -(--e * e * e * e - 1);
          },
          easeInOut: function (e) {
            return (e *= 2) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2);
          },
        },
        quintic: {
          easeIn: function (e) {
            return e * e * e * e * e;
          },
          easeOut: function (e) {
            return (e -= 1) * e * e * e * e + 1;
          },
          easeInOut: function (e) {
            return (e *= 2) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2);
          },
        },
        sinusoidal: {
          easeIn: function (e) {
            return 1 - Math.cos((e * Math.PI) / 2);
          },
          easeOut: function (e) {
            return Math.sin((e * Math.PI) / 2);
          },
          easeInOut: function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
          },
        },
        exponential: {
          easeIn: function (e) {
            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
          },
          easeOut: function (e) {
            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
          },
          easeInOut: function (e) {
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : (e *= 2) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        circular: {
          easeIn: function (e) {
            return -(Math.sqrt(1 - e * e) - 1);
          },
          easeOut: function (e) {
            return Math.sqrt(1 - --e * e);
          },
          easeInOut: function (e) {
            return (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
        },
        elastic: {
          easeIn: function (e) {
            var t,
              i = 0.1,
              a = 0.4;
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : (a || (a = 0.3),
                !i || i < 1
                  ? ((i = 1), (t = a / 4))
                  : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                -i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / a));
          },
          easeOut: function (e) {
            var t,
              i = 0.1,
              a = 0.4;
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : (a || (a = 0.3),
                !i || i < 1
                  ? ((i = 1), (t = a / 4))
                  : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                i *
                  Math.pow(2, -10 * e) *
                  Math.sin(((e - t) * (2 * Math.PI)) / a) +
                  1);
          },
          easeInOut: function (e) {
            var t,
              i = 0.1,
              a = 0.4;
            return 0 === e
              ? 0
              : 1 === e
              ? 1
              : (a || (a = 0.3),
                !i || i < 1
                  ? ((i = 1), (t = a / 4))
                  : (t = (a / (2 * Math.PI)) * Math.asin(1 / i)),
                (e *= 2) < 1
                  ? i *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e - t) * (2 * Math.PI)) / a) *
                    -0.5
                  : i *
                      Math.pow(2, -10 * (e -= 1)) *
                      Math.sin(((e - t) * (2 * Math.PI)) / a) *
                      0.5 +
                    1);
          },
        },
        back: {
          easeIn: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOut: function (e) {
            var t = 1.70158;
            return (e -= 1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOut: function (e) {
            var t = 2.5949095;
            return (e *= 2) < 1
              ? e * e * ((t + 1) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
          },
        },
        bounce: {
          easeIn: function (t) {
            return 1 - e.bounce.easeOut(1 - t);
          },
          easeOut: function (e) {
            return (e /= 1) < 1 / 2.75
              ? 7.5625 * e * e
              : e < 2 / 2.75
              ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
              : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
          },
          easeInOut: function (t) {
            return t < 0.5
              ? 0.5 * e.bounce.easeIn(2 * t)
              : 0.5 * e.bounce.easeOut(2 * t - 1) + 0.5;
          },
        },
      };
      window.EntityTween = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.NONE,
        easing: "linear",
        easingType: "easeNone",
        loop: "none",
        time: 3,
        start: 1,
        end: 10,
        val: null,
        callback: null,
        target: null,
        init: function (e, t, i) {
          this.parent(e, t, i),
            (this.paused = !1),
            (this.timer = new ig.Timer()),
            (this.val = this.start),
            (this.state = "forward");
        },
        pause: function () {
          this.paused = !0;
        },
        unpause: function () {
          this.paused = !1;
        },
        update: function () {
          if (!this.paused) {
            if (this.timer.delta() > this.time) {
              if (!this.hasOwnProperty("loop") || "none" === this.loop)
                return (
                  this.callback && this.callback(this, this.end),
                  this.callback(this, "end"),
                  void this.kill()
                );
              "revert" === this.loop
                ? this.timer.set(-(this.timer.delta() - this.time))
                : "reverse" === this.loop &&
                  (this.timer.set(-(this.timer.delta() - this.time)),
                  (this.state =
                    "forward" === this.state ? "reverse" : "forward"));
            }
            var t,
              i = this.timer.delta() / this.time,
              a = e[this.easing][this.easingType](i),
              r = this.end - this.start;
            "forward" === this.state
              ? (t = this.start + r * a)
              : "reverse" === this.state && (t = this.end - r * a),
              this.callback && this.callback(this, t);
          }
        },
        draw: function () {},
      });
    }),
  (ig.baked = !0),
  ig
    .module("game.main")
    .requires(
      "impact.game",
      "impact.font",
      "game.entities.assets",
      "game.entities.contenedorTerreno",
      "game.entities.scorePanel",
      "plugins.impact-splash-loader",
      "game.entities.title",
      "game.levels.tramo1",
      "game.levels.tramo2",
      "game.levels.tramo3",
      "game.levels.tramo4",
      "game.levels.tramo5",
      "game.levels.tramo6",
      "game.levels.tramo7",
      "game.levels.tramo8",
      "game.levels.tramo9",
      "game.levels.tramo10",
      "game.levels.tramo11",
      "game.levels.tramo12",
      "plugins.font",
      "plugins.tween"
    )
    .defines(function () {
      (MyGame = ig.Game.extend({
        assets: new ig.Assets(),
        mapaFila: 26,
        mapaColum: 17,
        mapaMatrix: [],
        terrenoMatrix: [],
        levelClass: null,
        escalaCubo: 1,
        escala: 1,
        movimiento: 0,
        colision: 0,
        desfaseInicial: 5,
        gameOver: 3,
        hiloReset: null,
        menu: null,
        animalElegido: 0,
        panelReset: null,
        escalaCubo_current: null,
        tweenCamara: [],
        minAux: null,
        font: new ig.Font("./04b03.font.png"),
        creaFade: 0,
        _alpha: 0,
        fadeToWhiteTime: 400,
        fadeToGameTime: 600,
        indexTroncos: 0,
        indexContTroncos: 0,
        enTronco: !1,
        indexAutosD: 0,
        indexContAutosD: 0,
        indexAutosI: 0,
        indexContAutosI: 0,
        indexTortugas: 0,
        indexContTortugas: 0,
        indexCoins: 0,
        indexContTrenesD: 0,
        indexTrenesD: 0,
        indexContTrenesI: 0,
        indexTrenesI: 0,
        enAuto: !1,
        tipoSalto: null,
        hiloBosina: null,
        hiloMotor: null,
        hud: null,
        score: 0,
        scoreArray: [0, 0, 0],
        coins: 0,
        coinsArray: [0, 0, 0],
        posIni: 5,
        bestScore: 0,
        fontB: null,
        activarBest: !1,
        enClick: 0,
        meteoro: [],
        mouseVal: [],
        movimientoTouch: null,
        toleranciaTouch: 30,
        orientacionCorrecta: !0,
        noDibujar: !1,
        hiloDibujar: null,
        arrayLevels: null,
        timer: null,
        deltaTime: null,
        permitirStorage: null,
        arrayTextos: [],
        arrayAnchosTextos: [],
        escala2D: 0.7,
        muteado: !1,
        tamanoFondo: [2831, 1963],
        tamanoArboles: [2024, 676],
        fuente: null,
        activaFlip: !1,
        enGameOver: !1,
        variablesStorage: function () {
          if ("object" == typeof localStorageSandboxed)
            try {
              localStorageSandboxed.setItem("localStorageSandboxed", 1),
                localStorageSandboxed.removeItem("localStorageSandboxed"),
                (this.permitirStorage = !0);
            } catch (e) {
              (Storage.prototype.setItem = Storage.prototype.setItem),
                (Storage.prototype.setItem = function () {}),
                (this.permitirStorage = !1);
            }
          1 == this.permitirStorage
            ? ((this.coins = localStorageSandboxed.getItem("coins")),
              (null != this.coins &&
                null != this.coins &&
                1 != isNaN(this.coins)) ||
                (this.coins = 0),
              (this.animalElegido = parseInt(
                localStorageSandboxed.getItem("animal_elegido")
              )),
              (null != this.animalElegido &&
                null != this.animalElegido &&
                1 != isNaN(this.animalElegido)) ||
                (this.animalElegido = 0),
              (this.bestScore = localStorageSandboxed.getItem("best_score")),
              (null != this.bestScore &&
                null != this.bestScore &&
                1 != isNaN(this.bestScore)) ||
                (this.bestScore = 0))
            : ((this.coins = 0),
              (this.animalElegido = 0),
              (this.bestScore = 0));
        },
        configuraTextos: function (e) {
          var t;
          (t = new XMLHttpRequest()).open("GET", "./crossText.xml", !1),
            t.send();
          var i = t.responseXML;
          (this.arrayTextos.tap = String(
            i.getElementById(e).getElementsByTagName("tap")[0].textContent
          ).toUpperCase()),
            (this.arrayTextos.tap = "-" + this.arrayTextos.tap + "-"),
            (this.arrayAnchosTextos.tap = ig.game.assets.fontDS.widthForString(
              ig.game.arrayTextos.tap
            )),
            (this.arrayTextos.chooseTittle = String(
              i.getElementById(e).getElementsByTagName("chooseTittle")[0]
                .textContent
            ).toUpperCase()),
            (this.arrayAnchosTextos.chooseTittle =
              ig.game.assets.fontDS.widthForString(
                ig.game.arrayTextos.chooseTittle
              )),
            (this.arrayTextos.pick = String(
              i.getElementById(e).getElementsByTagName("pick")[0].textContent
            ).toUpperCase()),
            (this.arrayAnchosTextos.pick = ig.game.assets.fontDS.widthForString(
              ig.game.arrayTextos.pick
            )),
            (this.arrayTextos.best = String(
              i.getElementById(e).getElementsByTagName("best")[0].textContent
            ).toUpperCase()),
            (this.arrayAnchosTextos.best = ig.game.assets.fontDS.widthForString(
              ig.game.arrayTextos.best
            ));
          for (var a = 1; a <= 6; a++)
            (this.arrayTextos["animal" + a] = String(
              i.getElementById(e).getElementsByTagName("animal" + a)[0]
                .textContent
            ).toUpperCase()),
              (this.arrayAnchosTextos["animal" + a] =
                ig.game.assets.fontDS.widthForString(
                  ig.game.arrayTextos["animal" + a]
                ));
          (this.arrayTextos.scorePanel = String(
            i.getElementById(e).getElementsByTagName("scorePanel")[0]
              .textContent
          ).toUpperCase()),
            (this.arrayAnchosTextos.scorePanel =
              ig.game.assets.fontDS.widthForString(
                ig.game.arrayTextos.scorePanel
              )),
            (this.arrayTextos.bestPanel = String(
              i.getElementById(e).getElementsByTagName("bestPanel")[0]
                .textContent
            ).toUpperCase()),
            (this.arrayAnchosTextos.bestPanel =
              ig.game.assets.fontDS.widthForString(
                ig.game.arrayTextos.bestPanel
              )),
            (this.arrayTextos.howToTittle = String(
              i.getElementById(e).getElementsByTagName("howToTittle")[0]
                .textContent
            ).toUpperCase()),
            (this.arrayAnchosTextos.howToTittle =
              ig.game.assets.fontDS.widthForString(
                ig.game.arrayTextos.howToTittle
              ));
          var r = this.arrayTextos.tap.length;
          for (a = 0; a < 20 - r; a++)
            this.arrayTextos.tap = this.arrayTextos.tap + " ";
          for (r = this.arrayTextos.chooseTittle.length, a = 0; a < 20 - r; a++)
            this.arrayTextos.chooseTittle = this.arrayTextos.chooseTittle + " ";
          for (r = this.arrayTextos.pick.length, a = 0; a < 20 - r; a++)
            this.arrayTextos.pick = this.arrayTextos.pick + " ";
          for (r = this.arrayTextos.scorePanel.length, a = 0; a < 20 - r; a++)
            this.arrayTextos.scorePanel = this.arrayTextos.scorePanel + " ";
          for (r = this.arrayTextos.bestPanel.length, a = 0; a < 20 - r; a++)
            this.arrayTextos.bestPanel = this.arrayTextos.bestPanel + " ";
          for (r = this.arrayTextos.howToTittle.length, a = 0; a < 20 - r; a++)
            this.arrayTextos.howToTittle = this.arrayTextos.howToTittle + " ";
          for (a = 1; a <= 6; a++) {
            r = this.arrayTextos["animal" + a].length;
            for (var s = 0; s < 20 - r; s++)
              this.arrayTextos["animal" + a] =
                this.arrayTextos["animal" + a] + " ";
          }
        },
        bindAll: function () {
          ig.input.bind(ig.KEY.UP_ARROW, "up"),
            ig.input.bind(ig.KEY.DOWN_ARROW, "down"),
            ig.input.bind(ig.KEY.LEFT_ARROW, "left"),
            ig.input.bind(ig.KEY.RIGHT_ARROW, "right"),
            ig.input.bind(ig.KEY.MOUSE1, "click");
        },
        init: function () {
          this.bindAll(), this.variablesStorage();
          this.configuraTextos("en"),
            (this.fontB = this.assets.fontB),
            this.seteaEscala(!1),
            this.creaMundo(),
            (this.levelClass = this.spawnEntity(ContenedorTerreno)),
            (this.menu = this.spawnEntity(Title, this)),
            (this.timer = new ig.Timer()),
            this.creaCoinsArray(),
            this.iniciaVars();
        },
        resetPos: function () {
          var e = Math.abs(
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][1] -
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1] + 1
                ][1]
            ),
            t = Math.abs(
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][2] -
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1] + 1
                ][2]
            );
          (this.levelClass.tronco[6] = e),
            (this.levelClass.tronco[12] = t),
            (this.levelClass.animalPos[2] =
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][1]),
            (this.levelClass.animalPos[3] =
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][2]);
        },
        reparaObjetos: function () {
          for (
            var e = this.levelClass.animalPos[0] - 17;
            e < this.mapaMatrix.length;
            e++
          )
            if (e > 0) {
              for (var t = 0; t < this.mapaMatrix[e][0][0].length; t++) {
                var i = ig.game.mapaMatrix[e][0][0][t];
                ("tren" != ig.game.mapaMatrix[e][i][5][21] &&
                  "auto" != ig.game.mapaMatrix[e][i][5][21] &&
                  "tronco" != ig.game.mapaMatrix[e][i][5][21]) ||
                  (null != ig.game.mapaMatrix[e][i][5][15] &&
                    ig.game.mapaMatrix[e][i][5][15].kill(),
                  (ig.game.mapaMatrix[e][i][5][14] = 0),
                  null != ig.game.assets.trenBellsS &&
                    ig.game.assets.trenBellsS.stop(),
                  (ig.game.mapaMatrix[e][0][5][8] = 0),
                  (ig.game.mapaMatrix[e][0][5][24] = 0),
                  (ig.game.mapaMatrix[e][i][5][5] = 0),
                  clearInterval(ig.game.mapaMatrix[e][0][5][23]));
              }
              ("tren" != ig.game.mapaMatrix[e][0][5][21] &&
                "auto" != ig.game.mapaMatrix[e][0][5][21] &&
                "tronco" != ig.game.mapaMatrix[e][0][5][21]) ||
                this.levelClass.creaTweenObjeto(
                  e,
                  0,
                  ig.game.mapaMatrix[e][0][5][21]
                );
            }
        },
        mataTrenes: function () {
          for (
            var e = this.levelClass.animalPos[0] - 20;
            e < this.levelClass.animalPos[0] + 20;
            e++
          )
            if (e > 0)
              for (var t = 0; t < this.mapaMatrix[e][0][0].length; t++) {
                var i = ig.game.mapaMatrix[e][0][0][t];
                ("tren" != ig.game.mapaMatrix[e][i][5][21] &&
                  "auto" != ig.game.mapaMatrix[e][i][5][21] &&
                  "tronco" != ig.game.mapaMatrix[e][i][5][21]) ||
                  (null != ig.game.mapaMatrix[e][i][5][15] &&
                    ig.game.mapaMatrix[e][i][5][15].kill(),
                  (ig.game.mapaMatrix[e][i][5][14] = 0),
                  null != ig.game.assets.trenBellsS &&
                    ig.game.assets.trenBellsS.stop(),
                  (ig.game.mapaMatrix[e][0][5][8] = 0),
                  (ig.game.mapaMatrix[e][0][5][24] = 0),
                  (ig.game.mapaMatrix[e][i][5][5] = 0),
                  clearInterval(ig.game.mapaMatrix[e][0][5][23]));
              }
        },
        reparaObjetosLite: function () {
          for (
            var e = this.levelClass.animalPos[0] - 20;
            e < this.levelClass.animalPos[0] + 20;
            e++
          )
            if (e > 0) {
              for (var t = 0; t < this.mapaMatrix[e][0][0].length; t++) {
                var i = ig.game.mapaMatrix[e][0][0][t];
                ("tren" != ig.game.mapaMatrix[e][i][5][21] &&
                  "auto" != ig.game.mapaMatrix[e][i][5][21] &&
                  "tronco" != ig.game.mapaMatrix[e][i][5][21]) ||
                  (null != ig.game.mapaMatrix[e][i][5][15] &&
                    ig.game.mapaMatrix[e][i][5][15].kill(),
                  (ig.game.mapaMatrix[e][i][5][14] = 0),
                  null != ig.game.assets.trenBellsS &&
                    ig.game.assets.trenBellsS.stop(),
                  (ig.game.mapaMatrix[e][0][5][8] = 0),
                  (ig.game.mapaMatrix[e][0][5][24] = 0),
                  (ig.game.mapaMatrix[e][i][5][5] = 0),
                  clearInterval(ig.game.mapaMatrix[e][0][5][23]));
              }
              ("tren" != ig.game.mapaMatrix[e][0][5][21] &&
                "auto" != ig.game.mapaMatrix[e][0][5][21] &&
                "tronco" != ig.game.mapaMatrix[e][0][5][21]) ||
                this.levelClass.creaTweenObjeto(
                  e,
                  0,
                  ig.game.mapaMatrix[e][0][5][21]
                );
            }
        },
        iniciaVars: function () {
          (this.score = 0),
            (this.scoreArray = new Array(0, 0, 0)),
            null != this.assets.trenBellsS && this.assets.trenBellsS.stop(),
            (this.posIni = 5),
            this.resetPos(),
            (this.enClick = 0),
            this.assets.musicSound.play();
        },
        creaMundo: function () {
          (this.mapaMatrix = new Array()), (this.enTronco = !1);
          var e = 0,
            t = Math.ceil(4 * Math.random());
          switch (t) {
            case 1:
              t = 9;
              break;
            case 2:
              t = 1;
              break;
            case 3:
              t = 12;
              break;
            case 4:
              t = 11;
          }
          this.terrenoMatrix = new ig["Tramo" + t](-9, 0).terrenoMatrix;
          for (
            var i = -this.desfaseInicial;
            i < this.mapaFila - this.desfaseInicial;
            i++
          ) {
            this.mapaMatrix[e] = new Array();
            for (var a = 0, r = -9; r < this.mapaColum + 0; r++)
              i + 5 >= 0 &&
                i + 5 < this.mapaMatrix.length &&
                ((this.mapaMatrix[e][a] = new Array()),
                (this.mapaMatrix[e][a][1] =
                  (116 * r * this.escalaCubo) / 1.5 -
                  (116 * this.escalaCubo) / 3.5 +
                  ((116 * this.escalaCubo) / 3.7) * i),
                (this.mapaMatrix[e][a][2] =
                  ig.system.height -
                  ((95 * this.escalaCubo) / 1.5) * (i + 1) +
                  ((95 * this.escalaCubo) / 1.5 / 7) * i +
                  (95 * r * this.escalaCubo) / 4.5),
                (this.mapaMatrix[e][a][3] = this.terrenoMatrix[e][a][0]),
                (this.mapaMatrix[e][a][4] = 1),
                (this.mapaMatrix[e][a][5] = this.terrenoMatrix[e][a][1]),
                (a += 1));
            (this.mapaMatrix[e][0][0] = this.terrenoMatrix[e][0][2]),
              (this.mapaMatrix[e][1][0] = this.terrenoMatrix[e][0][3]),
              (this.mapaMatrix[e][0][11] = null),
              (this.mapaMatrix[e][1][12] = null),
              (e += 1);
          }
          (this.arrayLevels = new Array()),
            (this.arrayLevels[0] = new Array()),
            (this.arrayLevels[0][0] = this.assets.levels[t - 1]),
            (this.arrayLevels[0][1] = 0),
            (this.arrayLevels[0][2] = t);
          for (var s = 0; s < 60; s++) {
            (t = Math.ceil(11 * Math.random())),
              (this.terrenoMatrix = new ig["Tramo" + t](-9, 0).terrenoMatrix);
            for (
              i = this.mapaFila * (s + 1) - this.desfaseInicial;
              i < this.mapaFila * (s + 2) - this.desfaseInicial;
              i++
            ) {
              this.mapaMatrix[e] = new Array();
              for (a = 0, r = -9; r < this.mapaColum + 0; r++)
                (this.mapaMatrix[e][a] = new Array()),
                  (this.mapaMatrix[e][a][1] =
                    (116 * r * this.escalaCubo) / 1.5 -
                    (116 * this.escalaCubo) / 3.5 +
                    ((116 * this.escalaCubo) / 3.7) * i),
                  (this.mapaMatrix[e][a][2] =
                    ig.system.height -
                    ((95 * this.escalaCubo) / 1.5) * (i + 1) +
                    ((95 * this.escalaCubo) / 1.5 / 7) * i +
                    (95 * r * this.escalaCubo) / 4.5),
                  (this.mapaMatrix[e][a][3] =
                    this.terrenoMatrix[e - this.mapaFila * (s + 1)][a][0]),
                  (this.mapaMatrix[e][a][4] = 1),
                  (this.mapaMatrix[e][a][5] =
                    this.terrenoMatrix[e - this.mapaFila * (s + 1)][a][1]),
                  (a += 1);
              (this.mapaMatrix[e][0][0] =
                this.terrenoMatrix[e - this.mapaFila * (s + 1)][0][2]),
                (this.mapaMatrix[e][1][0] =
                  this.terrenoMatrix[e - this.mapaFila * (s + 1)][0][3]),
                (this.mapaMatrix[e][0][11] = null),
                (this.mapaMatrix[e][1][12] = null),
                (e += 1);
            }
            (this.arrayLevels[s + 1] = new Array()),
              (this.arrayLevels[s + 1][0] = this.assets.levels[t - 1]),
              (this.arrayLevels[s + 1][1] = this.mapaFila * (s + 1)),
              (this.arrayLevels[s + 1][2] = t);
          }
        },
        ajustarMatrixCompleta: function () {
          for (var e = 0 - this.desfaseInicial; e < this.mapaMatrix.length; e++)
            for (var t = 0, i = -9; i < this.mapaColum; i++)
              e + this.desfaseInicial >= 0 &&
                e + this.desfaseInicial < this.mapaMatrix.length &&
                ((this.mapaMatrix[e + this.desfaseInicial][t][1] =
                  (116 * i * this.escalaCubo) / 1.5 -
                  (116 * this.escalaCubo) / 3.5 +
                  ((116 * this.escalaCubo) / 3.7) * e),
                (this.mapaMatrix[e + this.desfaseInicial][t][2] =
                  ig.system.height -
                  ((95 * this.escalaCubo) / 1.5) * (e + 1) +
                  ((95 * this.escalaCubo) / 1.5 / 7) * e +
                  (95 * i * this.escalaCubo) / 4.5),
                (this.mapaMatrix[e + this.desfaseInicial][t][4] = 0),
                (t += 1));
        },
        ajustarMatrix: function () {
          for (
            var e = this.levelClass.animalPos[0] - 28;
            e < this.levelClass.animalPos[0] + 28;
            e++
          )
            for (var t = 0, i = -9; i < this.mapaColum; i++)
              e + this.desfaseInicial >= 0 &&
                e + 5 < this.mapaMatrix.length &&
                ((this.mapaMatrix[e + this.desfaseInicial][t][1] =
                  (116 * i * this.escalaCubo) / 1.5 -
                  (116 * this.escalaCubo) / 3.5 +
                  ((116 * this.escalaCubo) / 3.7) * e),
                (this.mapaMatrix[e + this.desfaseInicial][t][2] =
                  ig.system.height -
                  ((95 * this.escalaCubo) / 1.5) * (e + 1) +
                  ((95 * this.escalaCubo) / 1.5 / 7) * e +
                  (95 * i * this.escalaCubo) / 4.5),
                (this.mapaMatrix[e + this.desfaseInicial][t][4] = 0),
                (t += 1));
        },
        movimientoLibre: function (e) {
          switch (e) {
            case "up":
              if (
                1 !=
                this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                  this.levelClass.animalPos[1]
                ][5][1]
              )
                return !0;
              break;
            case "down":
              if (
                1 !=
                this.mapaMatrix[this.levelClass.animalPos[0] - 1][
                  this.levelClass.animalPos[1]
                ][5][1]
              )
                return !0;
              break;
            case "right":
              if (
                1 !=
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1] + 1
                ][5][1]
              )
                return !0;
              break;
            case "left":
              if (
                1 !=
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1] - 1
                ][5][1]
              )
                return !0;
          }
          return !1;
        },
        mataTroncos: function () {
          for (
            var e = this.levelClass.averiguaPos(0),
              t = this.levelClass.averiguaPos(1),
              i = this.levelClass.animalPos[0] + e - 1;
            i >= this.levelClass.animalPos[0] - t;
            i--
          )
            if (i >= 0 && i < ig.game.mapaMatrix.length)
              for (var a = 0; a <= 25; a++)
                if (
                  (null != ig.game.mapaMatrix[i][a][5][15] &&
                    ig.game.mapaMatrix[i][a][5][15].kill(),
                  0 != this.mapaMatrix[i][a][5][0] &&
                    ("tronco" == this.mapaMatrix[i][a][5][21] ||
                      "auto" == this.mapaMatrix[i][a][5][21]))
                )
                  for (var r = 0; r < 25; r++) {
                    if (
                      this.mapaMatrix[i][a][5][5] > this.mapaMatrix[i][25][1]
                    ) {
                      this.mapaMatrix[i][a][5][3] = -1;
                      break;
                    }
                    if (
                      this.mapaMatrix[i][a][5][5] < this.mapaMatrix[i][0][1]
                    ) {
                      this.mapaMatrix[i][a][5][3] = -1;
                      break;
                    }
                    if (
                      this.mapaMatrix[i][a][5][5] >= this.mapaMatrix[i][r][1] &&
                      this.mapaMatrix[i][a][5][5] <=
                        this.mapaMatrix[i][r + 1][1]
                    ) {
                      this.mapaMatrix[i][a][5][3] = r;
                      break;
                    }
                  }
        },
        enCalle: function (e) {
          return 0 == e || 1 == e || -1 == e || -2 == e;
        },
        resetHiloSound: function (e, t) {
          clearInterval(this.mapaMatrix[e][0][t]),
            (this.mapaMatrix[e][0][t] = null);
        },
        sonidoLoss: function () {
          this.assets.musicSound.stop(), this.assets.lossSound.play();
        },
        permitirComerMoneda: function () {
          return (
            0 == this.colision &&
            this.levelClass.animalAnim >= 1 &&
            this.levelClass.animalAnim <= 4
          );
        },
        comeMoneda: function () {
          (this.mapaMatrix[this.levelClass.animalPos[0]][
            this.levelClass.animalPos[1]
          ][5][22] = !0),
            this.assets.coinS.play(),
            (this.coins = parseInt(parseInt(this.coins) + 1)),
            this.creaCoinsArray();
        },
        creaCoinsArray: function () {
          var e = this.coins;
          if (e < 10)
            (this.coinsArray[0] = e),
              (this.coinsArray[1] = 0),
              (this.coinsArray[2] = 0);
          else if (e < 100) {
            var t = e;
            t = Math.floor(t / 10);
            var i = e;
            (i %= 10),
              (this.coinsArray[0] = i),
              (this.coinsArray[1] = t),
              (this.coinsArray[2] = 0);
          } else if (e < 1e3) {
            t = e;
            t = Math.floor(t / 100);
            i = e % 100;
            var a = Math.floor(i / 10),
              r = i % 10;
            (this.coinsArray[0] = r),
              (this.coinsArray[1] = a),
              (this.coinsArray[2] = t);
          } else
            (this.coins = 999),
              (this.coinsArray[0] = 9),
              (this.coinsArray[1] = 9),
              (this.coinsArray[2] = 9);
        },
        compruebaColision: function () {
          if (
            (0 == this.gameOver &&
              1 == this.permitirComerMoneda() &&
              "coin" ==
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][5][20] &&
              0 ==
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][5][22] &&
              this.comeMoneda(),
            5 == this.colision && 2 == this.gameOver && 0 == this.enGameOver)
          )
            this.mataTroncos(),
              (this.gameOver = 2),
              (this.colision = 1),
              null == this.escalaCubo_current &&
                ((this.escalaCubo_current = this.escalaCubo),
                (this.minAux = this.levelClass.minLow)),
              null != this.tweenCamara[0] && this.tweenCamara[0].kill(),
              null != this.tweenCamara[1] && this.tweenCamara[1].kill(),
              null != this.tweenCamara[2] && this.tweenCamara[2].kill(),
              null != this.tweenCamara[3] && this.tweenCamara[3].kill(),
              null != this.tweenCamara[4] && this.tweenCamara[4].kill(),
              (this.enGameOver = !0),
              this.ponerPanelReset();
          else if (4 == this.colision) {
            if (
              10 ==
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][3]
            )
              for (
                var e = 0;
                e < this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
                e++
              ) {
                var t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
                if (
                  "tronco" ==
                  this.mapaMatrix[this.levelClass.animalPos[0]][t][5][21]
                ) {
                  if (
                    2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
                  ) {
                    var i =
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2],
                      a = (r = this.levelClass.tronco[6]) * (i - 1);
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                          r / 2 &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                          a -
                          r / 2
                    ) {
                      this.empezarAnimalEnTronco(e, t, i, a);
                      break;
                    }
                  }
                } else if (
                  "tortuga" ==
                  this.mapaMatrix[this.levelClass.animalPos[0]][t][5][21]
                ) {
                  (i = this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2]),
                    (a = (r = this.levelClass.tronco[6]) * (i - 1));
                  if (
                    this.levelClass.animalPos[8] <=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                        r / 2 &&
                    this.levelClass.animalPos[8] >=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                        a -
                        r / 2
                  ) {
                    this.empezarAnimalEnTortuga(e, t, i, a);
                    break;
                  }
                }
              }
            else if (
              1 ==
              this.enCalle(
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][3]
              )
            )
              for (
                e = 0;
                e < this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
                e++
              ) {
                t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
                if (
                  2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
                ) {
                  (i = this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2]),
                    (a = (r = this.levelClass.tronco[6]) * (i - 1));
                  if (
                    this.levelClass.animalPos[8] <=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                        r / 2 &&
                    this.levelClass.animalPos[8] >=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                        a -
                        r / 2
                  ) {
                    1 == this.levelClass.animalAnim ||
                    2 == this.levelClass.animalAnim
                      ? this.empezarAnimalChoque(e, t, i, a)
                      : this.empezarAnimalAplastado(e, t, i, a);
                    break;
                  }
                  if (
                    1 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]
                  ) {
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                          2 * r &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5]
                    ) {
                      null ==
                        this.mapaMatrix[this.levelClass.animalPos[0]][0][11] &&
                        (ig.game.assets.bosinasS[
                          Math.floor(3 * Math.random())
                        ].play(),
                        (this.mapaMatrix[this.levelClass.animalPos[0]][0][11] =
                          setInterval(
                            this.resetHiloSound.bind(this),
                            1500,
                            this.levelClass.animalPos[0],
                            11
                          )));
                      break;
                    }
                  } else if (
                    this.levelClass.animalPos[8] >=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                        a -
                        2 * r &&
                    this.levelClass.animalPos[8] <=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] - a
                  ) {
                    null ==
                      this.mapaMatrix[this.levelClass.animalPos[0]][0][11] &&
                      (ig.game.assets.bosinasS[
                        Math.floor(3 * Math.random())
                      ].play(),
                      (this.mapaMatrix[this.levelClass.animalPos[0]][0][11] =
                        setInterval(
                          this.resetHiloSound.bind(this),
                          1500,
                          this.levelClass.animalPos[0],
                          11
                        )));
                    break;
                  }
                }
              }
            else if (
              9 ==
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][3]
            )
              for (
                e = 0;
                e < this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
                e++
              ) {
                t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
                if (
                  2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
                ) {
                  (i = this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2]),
                    (a = (r = this.levelClass.tronco[6]) * (i - 1));
                  if (
                    this.levelClass.animalPos[8] <=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                        r / 2 &&
                    this.levelClass.animalPos[8] >=
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                        a -
                        r / 2
                  ) {
                    1 == this.levelClass.animalAnim ||
                    2 == this.levelClass.animalAnim
                      ? this.empezarAnimalChoque(e, t, i, a)
                      : this.empezarAnimalAplastado(e, t, i, a);
                    break;
                  }
                }
              }
          } else if (2 == this.colision) this.animalEnTronco();
          else if (6 == this.colision) this.animalEnChoque();
          else if (7 == this.colision) this.animalEnChoque();
          else if (0 == this.colision && 0 == this.enGameOver)
            if (
              10 ==
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][3]
            )
              ig.game.assets.caerAguaS.play(),
                this.activarZoom(),
                (this.gameOver = 1),
                (this.colision = 1),
                this.levelClass.efectosVarios[0].rewind(),
                this.sonidoLoss(),
                (this.enGameOver = !0),
                (this.hiloReset = setInterval(
                  this.ponerPanelReset.bind(this),
                  1e3
                ));
            else {
              if (
                1 ==
                this.enCalle(
                  this.mapaMatrix[this.levelClass.animalPos[0]][
                    this.levelClass.animalPos[1]
                  ][3]
                )
              )
                for (
                  e = 0;
                  e <
                  this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
                  e++
                ) {
                  t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
                  if (
                    2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
                  ) {
                    (i =
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2]),
                      (a = (r = this.levelClass.tronco[6]) * (i - 1));
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                          r / 2 &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                          a -
                          r / 2
                    ) {
                      this.empezarAnimalAplastado(e, t, i, a);
                      break;
                    }
                    if (
                      1 ==
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]
                    ) {
                      if (
                        this.levelClass.animalPos[8] <=
                          this.mapaMatrix[this.levelClass.animalPos[0]][
                            t
                          ][5][5] +
                            2 * r &&
                        this.levelClass.animalPos[8] >=
                          this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5]
                      ) {
                        null ==
                          this.mapaMatrix[
                            this.levelClass.animalPos[0]
                          ][0][11] &&
                          (ig.game.assets.bosinasS[
                            Math.floor(3 * Math.random())
                          ].play(),
                          (this.mapaMatrix[
                            this.levelClass.animalPos[0]
                          ][0][11] = setInterval(
                            this.resetHiloSound.bind(this),
                            1500,
                            this.levelClass.animalPos[0],
                            11
                          )));
                        break;
                      }
                    } else if (
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                          a -
                          2 * r &&
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                          a
                    ) {
                      null ==
                        this.mapaMatrix[this.levelClass.animalPos[0]][0][11] &&
                        (ig.game.assets.bosinasS[
                          Math.floor(3 * Math.random())
                        ].play(),
                        (this.mapaMatrix[this.levelClass.animalPos[0]][0][11] =
                          setInterval(
                            this.resetHiloSound.bind(this),
                            1500,
                            this.levelClass.animalPos[0],
                            11
                          )));
                      break;
                    }
                  }
                }
              if (
                1 ==
                this.enCalle(
                  this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                    this.levelClass.animalPos[1]
                  ][3]
                )
              )
                for (
                  e = 0;
                  e <
                  this.mapaMatrix[this.levelClass.animalPos[0] + 1][0][0]
                    .length;
                  e++
                ) {
                  t =
                    this.mapaMatrix[this.levelClass.animalPos[0] + 1][0][0][e];
                  if (
                    2 ==
                    this.mapaMatrix[this.levelClass.animalPos[0] + 1][t][5][14]
                  ) {
                    (i =
                      this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                        t
                      ][5][2]),
                      (a = (r = this.levelClass.tronco[6]) * (i - 1));
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                          t
                        ][5][5] +
                          (r / 2) * 6 &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                          t
                        ][5][5] -
                          a -
                          (r / 2) * 6
                    ) {
                      null ==
                        this.mapaMatrix[this.levelClass.animalPos[0]][0][12] &&
                        (ig.game.assets.pasarAutoS[
                          Math.floor(3 * Math.random())
                        ].play(),
                        (this.mapaMatrix[this.levelClass.animalPos[0]][0][12] =
                          setInterval(
                            this.resetHiloSound.bind(this),
                            3e3,
                            this.levelClass.animalPos[0],
                            12
                          )));
                      break;
                    }
                  }
                }
              if (
                9 ==
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][3]
              )
                for (
                  e = 0;
                  e <
                  this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
                  e++
                ) {
                  t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
                  if (
                    2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
                  ) {
                    (i =
                      this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2]),
                      (a = (r = this.levelClass.tronco[6]) * (i - 1));
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                          r / 2 &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                          a -
                          r / 2
                    ) {
                      this.empezarAnimalAplastado(e, t, i, a);
                      break;
                    }
                  }
                }
            }
          else if (
            3 != this.colision ||
            (3 != this.levelClass.animalAnim && 4 != this.levelClass.animalAnim)
          ) {
            if (
              3 != this.colision ||
              (1 != this.levelClass.animalAnim &&
                2 != this.levelClass.animalAnim)
            ) {
              if (
                3 == this.colision &&
                this.levelClass.animalAnim <= 4 &&
                9 ==
                  this.mapaMatrix[this.levelClass.animalPos[10]][
                    this.levelClass.animalPos[1]
                  ][3]
              )
                for (
                  e = 0;
                  e <
                  this.mapaMatrix[this.levelClass.animalPos[10]][0][0].length;
                  e++
                ) {
                  t = this.mapaMatrix[this.levelClass.animalPos[10]][0][0][e];
                  if (
                    2 ==
                    this.mapaMatrix[this.levelClass.animalPos[10]][t][5][14]
                  ) {
                    (i =
                      this.mapaMatrix[this.levelClass.animalPos[10]][t][5][2]),
                      (a = (r = this.levelClass.tronco[6]) * (i - 1));
                    if (
                      this.levelClass.animalPos[8] <=
                        this.mapaMatrix[this.levelClass.animalPos[10]][
                          t
                        ][5][5] +
                          r / 2 &&
                      this.levelClass.animalPos[8] >=
                        this.mapaMatrix[this.levelClass.animalPos[10]][
                          t
                        ][5][5] -
                          a -
                          r / 2
                    ) {
                      1 == this.levelClass.animalAnim ||
                      2 == this.levelClass.animalAnim
                        ? this.empezarAnimalChoque(e, t, i, a)
                        : this.empezarAnimalAplastado(e, t, i, a);
                      break;
                    }
                  }
                }
            } else if (
              1 ==
              this.enCalle(
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][3]
              )
            )
              for (
                e = 0;
                e < this.mapaMatrix[this.levelClass.animalPos[10]][0][0].length;
                e++
              ) {
                t = this.mapaMatrix[this.levelClass.animalPos[10]][0][0][e];
                if (
                  2 == this.mapaMatrix[this.levelClass.animalPos[10]][t][5][14]
                ) {
                  (i = this.mapaMatrix[this.levelClass.animalPos[10]][t][5][2]),
                    (a = (r = this.levelClass.tronco[6]) * (i - 1));
                  if (
                    this.levelClass.animalPos[8] <=
                      this.mapaMatrix[this.levelClass.animalPos[10]][t][5][5] +
                        r / 2 &&
                    this.levelClass.animalPos[8] >=
                      this.mapaMatrix[this.levelClass.animalPos[10]][t][5][5] -
                        a -
                        r / 2
                  ) {
                    this.levelClass.animalPos[10] ==
                      this.levelClass.animalPos[0] &&
                      (null != this.levelClass.animalPos[11] &&
                        this.levelClass.animalPos[11].kill(),
                      null != this.levelClass.animalPos[12] &&
                        this.levelClass.animalPos[12].kill(),
                      null != this.levelClass.animalPos[13] &&
                        this.levelClass.animalPos[13].kill(),
                      null != this.levelClass.animalPos[14] &&
                        this.levelClass.animalPos[14].kill(),
                      (this.movimiento = 0),
                      this.empezarAnimalAplastado(e, t, i, a));
                    break;
                  }
                }
              }
          } else if (
            1 ==
            this.enCalle(
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][3]
            )
          )
            for (
              var e = 0;
              e < this.mapaMatrix[this.levelClass.animalPos[0]][0][0].length;
              e++
            ) {
              var t = this.mapaMatrix[this.levelClass.animalPos[0]][0][0][e];
              if (
                2 == this.mapaMatrix[this.levelClass.animalPos[0]][t][5][14]
              ) {
                var r,
                  i = this.mapaMatrix[this.levelClass.animalPos[0]][t][5][2],
                  a = (r = this.levelClass.tronco[6]) * (i - 1);
                if (
                  this.levelClass.animalPos[8] <=
                    this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] +
                      r / 2 &&
                  this.levelClass.animalPos[8] >=
                    this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                      a -
                      r / 2
                ) {
                  this.empezarAnimalAplastado(e, t, i, a);
                  break;
                }
              }
            }
        },
        empezarAnimalChoque: function (e, t, i, a) {
          if (
            8 != this.colision &&
            6 != this.colision &&
            7 != this.colision &&
            2 != this.gameOver &&
            0 == this.enGameOver
          ) {
            ig.game.assets.crashS.play(),
              (a =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                this.levelClass.animalPos[2]);
            var r =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][6] -
              this.levelClass.animalPos[3];
            (this.levelClass.tronco[2] = t),
              (this.levelClass.tronco[3] = i),
              (this.levelClass.tronco[4] = a),
              (this.levelClass.tronco[5] = r),
              (this.levelClass.tronco[7] = this.levelClass.animalPos[0]),
              (this.levelClass.tronco[8] = this.levelClass.animalPos[1]),
              (this.levelClass.tronco[9] =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][9]),
              (this.levelClass.tronco[10] =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]),
              this.sonidoLoss(),
              1 == this.levelClass.animalAnim
                ? (this.colision = 7)
                : (this.colision = 6),
              (this.levelClass.animalAnim = 6),
              this.levelClass.animal[6].rewind(),
              (this.gameOver = 2),
              (this.enGameOver = !0),
              (this.hiloReset = setInterval(
                this.iniciarReseteo.bind(this),
                2e3
              )),
              this.animalEnChoque();
          }
        },
        empezarAnimalAplastado: function (e, t, i, a) {
          if (
            8 != this.colision &&
            6 != this.colision &&
            7 != this.colision &&
            2 != this.gameOver &&
            0 == this.enGameOver
          ) {
            ig.game.assets.crashS.play(),
              (a =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
                this.levelClass.animalPos[2]);
            var r =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][6] -
              this.levelClass.animalPos[3];
            (this.levelClass.tronco[2] = t),
              (this.levelClass.tronco[3] = i),
              (this.levelClass.tronco[4] = a),
              (this.levelClass.tronco[5] = r),
              (this.levelClass.tronco[7] = this.levelClass.animalPos[0]),
              (this.levelClass.tronco[8] = this.levelClass.animalPos[1]),
              (this.levelClass.tronco[9] =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][9]),
              (this.levelClass.tronco[10] =
                this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]),
              this.sonidoLoss(),
              (this.levelClass.animalAnim = 5),
              this.levelClass.animal[5].rewind(),
              (this.colision = 8),
              (this.gameOver = 2),
              (this.enGameOver = !0),
              (this.hiloReset = setInterval(
                this.iniciarReseteo.bind(this),
                2e3
              ));
          }
        },
        iniciarReseteo: function () {
          clearInterval(this.hiloReset),
            (this.gameOver = 2),
            (this.enGameOver = !1),
            (this.colision = 5);
        },
        animalEnChoque: function () {
          var e = this.levelClass.tronco[2],
            t = this.levelClass.tronco[4],
            i = this.levelClass.tronco[5],
            a = this.levelClass.tronco[10];
          ((this.levelClass.tronco[0] =
            this.mapaMatrix[this.levelClass.tronco[7]][e][5][5] - t),
          (this.levelClass.tronco[1] =
            this.mapaMatrix[this.levelClass.tronco[7]][e][5][6] - i),
          1 == a)
            ? ((this.levelClass.tronco[0] -
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][1]) /
                this.levelClass.tronco[6] >=
                0.5 &&
                (this.levelClass.animalPos[1] =
                  this.levelClass.animalPos[1] + 1),
              this.levelClass.animalPos[1] >= 25 &&
                (this.levelClass.animalPos[1] = 25))
            : ((this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][1] -
                this.levelClass.tronco[0]) /
                this.levelClass.tronco[6] >=
                0.5 &&
                (this.levelClass.animalPos[1] =
                  this.levelClass.animalPos[1] - 1),
              this.levelClass.animalPos[1] <= 0 &&
                (this.levelClass.animalPos[1] = 0));
        },
        empezarAnimalEnTortuga: function (e, t, i, a) {
          a =
            this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
            this.levelClass.animalPos[2];
          var r =
            this.mapaMatrix[this.levelClass.animalPos[0]][t][5][6] -
            this.levelClass.animalPos[3];
          (this.enTronco = !0),
            (this.levelClass.tronco[2] = t),
            (this.levelClass.tronco[3] = i),
            (this.levelClass.tronco[4] = a),
            (this.levelClass.tronco[5] = r),
            (this.levelClass.tronco[7] = this.levelClass.animalPos[0]),
            (this.levelClass.tronco[8] = this.levelClass.animalPos[1]),
            (this.levelClass.tronco[9] =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][9]),
            (this.levelClass.tronco[10] =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]),
            this.animacionTortuga(
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][0]
            ),
            (this.colision = 9);
        },
        empezarAnimalEnTronco: function (e, t, i, a) {
          a =
            this.mapaMatrix[this.levelClass.animalPos[0]][t][5][5] -
            this.levelClass.animalPos[2];
          var r =
            this.mapaMatrix[this.levelClass.animalPos[0]][t][5][6] -
            this.levelClass.animalPos[3];
          (this.enTronco = !0),
            (this.levelClass.tronco[2] = t),
            (this.levelClass.tronco[3] = i),
            (this.levelClass.tronco[4] = a),
            (this.levelClass.tronco[5] = r),
            (this.levelClass.tronco[7] = this.levelClass.animalPos[0]),
            (this.levelClass.tronco[8] = this.levelClass.animalPos[1]),
            (this.levelClass.tronco[9] =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][9]),
            (this.levelClass.tronco[10] =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][10]),
            (this.levelClass.tronco[11] =
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5]),
            this.animacionTronco(
              this.mapaMatrix[this.levelClass.animalPos[0]][t][5][0]
            ),
            (this.colision = 2),
            this.animalEnTronco();
        },
        animalEnTronco: function () {
          var e = this.levelClass.tronco[2],
            t = this.levelClass.tronco[4],
            i = this.levelClass.tronco[5],
            a = this.levelClass.tronco[10];
          ((this.levelClass.tronco[0] =
            this.mapaMatrix[this.levelClass.tronco[7]][e][5][5] - t),
          (this.levelClass.tronco[1] =
            this.mapaMatrix[this.levelClass.tronco[7]][e][5][6] - i),
          1 == a)
            ? ((this.levelClass.tronco[0] -
                this.mapaMatrix[this.levelClass.animalPos[0]][
                  this.levelClass.animalPos[1]
                ][1]) /
                this.levelClass.tronco[6] >=
                0.5 &&
                (this.levelClass.animalPos[1] =
                  this.levelClass.animalPos[1] + 1),
              this.levelClass.animalPos[1] > 25 &&
                ((this.levelClass.animalPos[1] = 25),
                (this.colision = 5),
                this.sonidoLoss()))
            : ((this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][1] -
                this.levelClass.tronco[0]) /
                this.levelClass.tronco[6] >=
                0.5 &&
                (this.levelClass.animalPos[1] =
                  this.levelClass.animalPos[1] - 1),
              this.levelClass.animalPos[1] < 0 &&
                ((this.levelClass.animalPos[1] = 0),
                (this.colision = 5),
                this.sonidoLoss()));
        },
        animacionTronco: function (e) {
          e.rewind(),
            ig.game.assets.troncosS.play(),
            this.spawnEntity(EntityTween, 0, 0, {
              time: 0.3,
              start: 0,
              easing: "linear",
              easingType: "easeNone",
              end: 100,
              callback: function (t, i) {
                e.update();
              },
              target: this.levelClass,
            });
        },
        animacionTortuga: function (e) {
          e.rewind(),
            ig.game.assets.caerS.play(),
            this.spawnEntity(EntityTween, 0, 0, {
              time: 0.4,
              start: 0,
              easing: "linear",
              easingType: "easeNone",
              end: 100,
              callback: function (t, i) {
                e.update();
              },
              target: this.levelClass,
            });
        },
        empezarReiniciar: function () {
          (this.endTime = Date.now()),
            (this.menu.logoY = -200),
            (this.creaFade = 1);
        },
        reiniciar: function () {
          this.mataTrenes(),
            (this.meteoro = new Array(0, 0, !1, 0)),
            (this.enGameOver = !1),
            (this.indexTroncos = 0),
            (this.indexTortugas = 0),
            (this.movimiento = 0),
            (this.enClick = 0),
            this.creaMundo(),
            this.levelClass.iniVars(),
            this.iniciaVars(),
            (this.colision = 0),
            (this.gameOver = 0),
            (this.endTime = Date.now()),
            (this.creaFade = 3),
            (this.menu.logoSpeed = 2 * this.menu.logoSpeed);
        },
        ponerPanelReset: function () {
          clearInterval(this.hiloReset),
            this.score > parseInt(this.bestScore)
              ? ((this.bestScore = parseInt(this.score)),
                (this.activarBest = !0),
                (this.gameOver = 0),
                (this.hiloReset = setInterval(
                  this.iniciarReseteo.bind(this),
                  2500
                )))
              : ((this.panelReset = this.spawnEntity(ScorePanel, this)),
                (this.activarBest = !1),
                (this.gameOver = 1),
                1 == this.permitirStorage &&
                  (localStorageSandboxed.setItem("coins", this.coins),
                  localStorageSandboxed.setItem("best_score", this.bestScore)),
                ig.game.muteado
                  ? (musicFlag = !1)
                  : (Howler.mute(), (musicFlag = !0)));
        },
        activarZoom: function () {
          this.mataTroncos();
        },
        efectoZoom: function () {
          var e = this.levelClass.animalPos[0] - 8 - 2;
          (this.levelClass.pos.y =
            Math.abs(
              this.mapaMatrix[this.levelClass.camara[0]][
                this.levelClass.camara[1]
              ][2] -
                this.mapaMatrix[this.levelClass.camara[0] + 1][
                  this.levelClass.camara[1]
                ][2]
            ) * e),
            (this.levelClass.pos.x =
              Math.abs(
                this.mapaMatrix[this.levelClass.camara[0]][
                  this.levelClass.camara[1]
                ][1] -
                  this.mapaMatrix[this.levelClass.camara[0] + 1][
                    this.levelClass.camara[1]
                  ][1]
              ) *
              e *
              -1);
          e = this.levelClass.animalPos[1] - 10;
          (this.levelClass.paneo[1] =
            Math.abs(
              this.mapaMatrix[this.levelClass.camara[0]][
                this.levelClass.camara[1]
              ][2] -
                this.mapaMatrix[this.levelClass.camara[0]][
                  this.levelClass.camara[1] + 1
                ][2]
            ) *
            e *
            -1),
            (this.levelClass.paneo[0] =
              Math.abs(
                this.mapaMatrix[this.levelClass.camara[0]][
                  this.levelClass.camara[1]
                ][1] -
                  this.mapaMatrix[this.levelClass.camara[0]][
                    this.levelClass.camara[1] + 1
                  ][1]
              ) *
              e *
              -1);
        },
        elMeteoro: function () {
          (this.meteoro[0] =
            this.mapaMatrix[this.levelClass.animalPos[0]][
              this.levelClass.animalPos[1]
            ][1]),
            (this.meteoro[1] =
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][2] -
              1200 * this.escalaCubo),
            (this.meteoro[2] = !0),
            this.spawnEntity(EntityTween, 0, 0, {
              time: 0.8,
              start: this.meteoro[1],
              easing: "linear",
              easingType: "easeNone",
              end: this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][2],
              callback: function (e, t) {
                "end" != t
                  ? (e.target.meteoro[1] = t)
                  : ((e.target.meteoro[3] = !0), e.target.elMeteoro2());
              },
              target: this,
            });
        },
        elMeteoro2: function () {
          this.spawnEntity(EntityTween, 0, 0, {
            time: 0.35,
            start: this.meteoro[1],
            easing: "linear",
            easingType: "easeNone",
            end:
              this.mapaMatrix[this.levelClass.animalPos[0]][
                this.levelClass.animalPos[1]
              ][2] +
              400 * this.escalaCubo,
            callback: function (e, t) {
              "end" != t
                ? (e.target.meteoro[1] = t)
                : ((e.target.meteoro[2] = !1),
                  e.target.panelReset.mostrarTitle());
            },
            target: this,
          });
        },
        controlaCamara: function () {
          if (0 != this.levelClass.animalAnim && 0 == this.levelClass.camara[4])
            if (this.levelClass.camara[0] - this.levelClass.animalPos[0] > 2)
              (this.levelClass.camara[4] = -1),
                0 == this.gameOver &&
                  0 == this.enGameOver &&
                  ((this.gameOver = 1),
                  this.activarZoom(),
                  this.sonidoLoss(),
                  (this.elMeteoro[2] = !0),
                  null != this.tweenCamara[0] && this.tweenCamara[0].kill(),
                  null != this.tweenCamara[1] && this.tweenCamara[1].kill(),
                  null != this.tweenCamara[2] && this.tweenCamara[2].kill(),
                  null != this.tweenCamara[3] && this.tweenCamara[3].kill(),
                  null != this.tweenCamara[4] && this.tweenCamara[4].kill(),
                  (this.levelClass.pos.y = this.levelClass.pos.y - 520),
                  (this.levelClass.pos.x = this.levelClass.pos.x + 280),
                  (this.enGameOver = !0),
                  (this.hiloReset = setInterval(
                    this.ponerPanelReset.bind(this),
                    60
                  )));
            else {
              var e = this.levelClass.camara[2];
              this.levelClass.puntoCamara < this.levelClass.minHigh - 2 &&
                (e = this.levelClass.camara[3]),
                (this.levelClass.camara[4] = 2),
                (this.tweenCamara[0] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.pos.y,
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.pos.y +
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][2] -
                        this.mapaMatrix[this.levelClass.camara[0] + 1][
                          this.levelClass.camara[1]
                        ][2]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.pos.y = t)
                      : ((e.target.camara[4] = e.target.camara[4] - 1),
                        (e.target.camara[0] = e.target.camara[0] + 1));
                  },
                  target: this.levelClass,
                })),
                (this.tweenCamara[1] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.pos.x,
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.pos.x -
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][1] -
                        this.mapaMatrix[this.levelClass.camara[0] + 1][
                          this.levelClass.camara[1]
                        ][1]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.pos.x = t)
                      : (e.target.camara[4] = e.target.camara[4] - 1);
                  },
                  target: this.levelClass,
                }));
            }
        },
        matarTroncoMovs: function () {
          1 == this.enTronco && (this.enTronco = !1);
        },
        controlaPaneo: function () {
          var e = this.levelClass.camara[5],
            t = "none";
          this.levelClass.animalPos[1] > this.levelClass.camara[1]
            ? (t = "der")
            : this.levelClass.animalPos[1] < this.levelClass.camara[1] &&
              (t = "izq"),
            "der" == t && 0 == this.levelClass.camara[6]
              ? this.levelClass.camara[1] < 18 &&
                this.levelClass.camara[1] > 8 &&
                ((this.levelClass.camara[6] = 2),
                (this.tweenCamara[4] = void 0),
                (this.tweenCamara[3] = void 0),
                (this.tweenCamara[3] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.paneo[1],
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.paneo[1] -
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][2] -
                        this.mapaMatrix[this.levelClass.camara[0]][
                          this.levelClass.camara[1] + 1
                        ][2]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.paneo[1] = t)
                      : ((e.target.camara[6] = e.target.camara[6] - 1),
                        (e.target.camara[0] = e.target.camara[0]),
                        (e.target.camara[1] = e.target.camara[1] + 1));
                  },
                  target: this.levelClass,
                })),
                (this.tweenCamara[4] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.paneo[0],
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.paneo[0] -
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][1] -
                        this.mapaMatrix[this.levelClass.camara[0]][
                          this.levelClass.camara[1] + 1
                        ][1]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.paneo[0] = t)
                      : (e.target.camara[6] = e.target.camara[6] - 1);
                  },
                  target: this.levelClass,
                })))
              : "izq" == t &&
                0 == this.levelClass.camara[6] &&
                this.levelClass.camara[1] > 9 &&
                this.levelClass.camara[1] < 19 &&
                ((this.levelClass.camara[6] = 2),
                (this.tweenCamara[4] = void 0),
                (this.tweenCamara[3] = void 0),
                (this.tweenCamara[3] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.paneo[1],
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.paneo[1] +
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][2] -
                        this.mapaMatrix[this.levelClass.camara[0]][
                          this.levelClass.camara[1] + 1
                        ][2]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.paneo[1] = t)
                      : ((e.target.camara[6] = e.target.camara[6] - 1),
                        (e.target.camara[0] = e.target.camara[0]),
                        (e.target.camara[1] = e.target.camara[1] - 1));
                  },
                  target: this.levelClass,
                })),
                (this.tweenCamara[4] = this.spawnEntity(EntityTween, 0, 0, {
                  time: e,
                  start: this.levelClass.paneo[0],
                  easing: "linear",
                  easingType: "easeNone",
                  end:
                    this.levelClass.paneo[0] +
                    Math.abs(
                      this.mapaMatrix[this.levelClass.camara[0]][
                        this.levelClass.camara[1]
                      ][1] -
                        this.mapaMatrix[this.levelClass.camara[0]][
                          this.levelClass.camara[1] + 1
                        ][1]
                    ),
                  callback: function (e, t) {
                    "end" != t
                      ? (e.target.paneo[0] = t)
                      : (e.target.camara[6] = e.target.camara[6] - 1);
                  },
                  target: this.levelClass,
                })));
        },
        crearFade: function () {
          var e = Date.now() - this.endTime,
            t = 1;
          1 == this.creaFade
            ? e < this.fadeToWhiteTime
              ? (t = e.map(0, this.fadeToWhiteTime, 0, 1))
              : ((this.creaFade = 2), (t = 1), this.reiniciar())
            : 3 == this.creaFade &&
              (e < this.fadeToGameTime
                ? (t = e.map(0, this.fadeToGameTime, 1, 0))
                : ((this.creaFade = 0),
                  (this.menu.logoY = -650),
                  (this.menu.logoSpeed = this.menu.logoSpeed / 2))),
            0 != this.creaFade &&
              ((ig.system.context.fillStyle = "rgba(255,255,255," + t + ")"),
              ig.system.context.fillRect(
                0,
                0,
                ig.system.realWidth,
                ig.system.realHeight
              ));
        },
        aterrizar: function () {
          switch (
            (this.levelClass.animalPos[0] >
              25 * (this.levelClass.iniTerreno + 1) + 10 &&
              (this.levelClass.iniTerreno = this.levelClass.iniTerreno + 1),
            this.colision)
          ) {
            case 2:
            case 1:
            case 6:
            case 7:
            case 8:
            case 9:
              break;
            default:
              this.colision = 0;
          }
          var e = this.levelClass.animalPos[0] - this.posIni;
          if (e > this.score)
            if (((this.score = e), e < 10))
              (this.scoreArray[0] = e),
                (this.scoreArray[1] = 0),
                (this.scoreArray[2] = 0);
            else if (e < 100) {
              var t = e;
              t = Math.floor(t / 10);
              var i = e;
              (i %= 10),
                (this.scoreArray[0] = i),
                (this.scoreArray[1] = t),
                (this.scoreArray[2] = 0);
            } else if (e < 1e3) {
              t = e;
              t = Math.floor(t / 100);
              i = e % 100;
              var a = Math.floor(i / 10),
                r = i % 10;
              (this.scoreArray[0] = r),
                (this.scoreArray[1] = a),
                (this.scoreArray[2] = t);
            } else
              (this.score = 999),
                (this.scoreArray[0] = 9),
                (this.scoreArray[1] = 9),
                (this.scoreArray[2] = 9);
        },
        permitirMovimiento: function () {
          return (
            0 == this.gameOver &&
            1 != this.colision &&
            0 == this.activarBest &&
            0 == this.enGameOver &&
            this.levelClass.animalAnim <= 4
          );
        },
        buscarTroncoUpDown: function (e, t, i, a) {
          if (10 == this.mapaMatrix[i][a][3])
            for (var r = 0; r < this.mapaMatrix[i][0][0].length; r++) {
              var s = this.mapaMatrix[i][0][0][r];
              if (
                "tronco" == this.mapaMatrix[i][s][5][21] &&
                2 == this.mapaMatrix[i][s][5][14]
              ) {
                var o = this.mapaMatrix[i][s][5][2],
                  n = this.levelClass.tronco[6],
                  h = n * (o - 1),
                  m = null;
                if (
                  ((m =
                    1 == this.mapaMatrix[i][s][5][10]
                      ? (0.4 * this.mapaMatrix[i][s][5][9]) /
                        (this.deltaTime / 72)
                      : (0.4 * this.mapaMatrix[i][s][5][9] * -1) /
                        (this.deltaTime / 72)),
                  (m = 0),
                  e <= this.mapaMatrix[i][s][5][5] + n / 2 + m &&
                    e >= this.mapaMatrix[i][s][5][5] - h - n / 2 + m)
                )
                  return (
                    (this.levelClass.tronco[9] = this.mapaMatrix[i][s][5][9]),
                    (this.levelClass.tronco[10] = this.mapaMatrix[i][s][5][10]),
                    (this.levelClass.tronco[11] = this.mapaMatrix[i][s][5]),
                    !0
                  );
              }
            }
          return !1;
        },
        buscarTronco: function (e, t, i, a, r) {
          if (
            "tronco" == this.levelClass.tronco[11][21] &&
            2 == this.levelClass.tronco[11][14]
          ) {
            var s = this.levelClass.tronco[11][2],
              o = this.levelClass.tronco[6],
              n = o * (s - 1),
              h = null;
            if (
              ((h =
                1 == this.levelClass.tronco[11][10]
                  ? Math.abs(r)
                  : -1 * Math.abs(r)),
              e <= this.levelClass.tronco[11][5] + o / 2 + h &&
                e >= this.levelClass.tronco[11][5] - n - o / 2 + h)
            )
              return !0;
          }
          return !1;
        },
        update: function () {
          if (
            (this.parent(),
            (this.deltaTime = 72 * ig.game.timer.tick()),
            (0 == this.gameOver || 2 == this.gameOver) &&
              (this.controlaCamara(),
              this.controlaPaneo(),
              this.compruebaColision(),
              0 == this.movimiento && 1 == this.permitirMovimiento()))
          ) {
            if (
              0 == this.hud.unClickImg(ig.game.assets.mutes[0], this.hud.muteV)
            )
              if (ig.input.state("click"))
                0 == this.enClick &&
                  ((this.enClick = 1),
                  (this.mouseVal[0] = ig.input.mouse.x),
                  (this.mouseVal[1] = ig.input.mouse.y));
              else if (1 == this.enClick)
                (this.enClick = 0),
                  (s = Math.sqrt(
                    Math.pow(this.mouseVal[0] - ig.input.mouse.x, 2) +
                      Math.pow(this.mouseVal[1] - ig.input.mouse.y, 2)
                  )) < this.toleranciaTouch && (this.movimientoTouch = "up");
            if (1 == this.enClick)
              if (
                (s = Math.sqrt(
                  Math.pow(this.mouseVal[0] - ig.input.mouse.x, 2) +
                    Math.pow(this.mouseVal[1] - ig.input.mouse.y, 2)
                )) >= this.toleranciaTouch
              ) {
                var e = this.mouseVal[0] - ig.input.mouse.x,
                  t = this.mouseVal[1] - ig.input.mouse.y;
                Math.abs(t) >= Math.abs(e)
                  ? t < 0
                    ? ((this.movimientoTouch = "down"), (this.enClick = 0))
                    : ((this.movimientoTouch = "up"), (this.enClick = 0))
                  : e < 0
                  ? ((this.movimientoTouch = "right"), (this.enClick = 0))
                  : ((this.movimientoTouch = "left"), (this.enClick = 0));
              }
            if (
              (!ig.input.pressed("up") && "up" != this.movimientoTouch) ||
              1 != this.movimientoLibre("up")
            ) {
              if (ig.input.pressed("down") || "down" == this.movimientoTouch) {
                if (1 == this.movimientoLibre("down")) {
                  (this.movimiento = 2),
                    (this.movimientoTouch = "null"),
                    (this.levelClass.animalAnim = 1);
                  i = !1;
                  if (
                    (2 == this.colision && (i = !0),
                    (ig.game.colision = 3),
                    ig.game.assets.saltoS.play(),
                    this.matarTroncoMovs(),
                    this.levelClass.animal[1].rewind(),
                    1 == i)
                  ) {
                    (a =
                      this.mapaMatrix[this.levelClass.animalPos[0] - 1][
                        this.levelClass.animalPos[1]
                      ][2]),
                      (r =
                        this.mapaMatrix[this.levelClass.animalPos[0] - 1][
                          this.levelClass.animalPos[1]
                        ][1]);
                    i = this.buscarTroncoUpDown(
                      r,
                      a,
                      this.levelClass.animalPos[0] - 1,
                      this.levelClass.animalPos[1]
                    );
                  }
                  if (0 == i)
                    (this.levelClass.animalPos[11] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[8],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: this.mapaMatrix[this.levelClass.animalPos[0] - 1][
                          this.levelClass.animalPos[1]
                        ][1],
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[2] = t)
                            : (ig.game.movimiento = ig.game.movimiento - 1);
                        },
                        target: this.levelClass,
                      }
                    )),
                      (this.levelClass.animalPos[12] = this.spawnEntity(
                        EntityTween,
                        0,
                        0,
                        {
                          time: 0.4,
                          start: this.levelClass.animalPos[9],
                          easing: "sinusoidal",
                          easingType: "easeOut",
                          end: this.mapaMatrix[
                            this.levelClass.animalPos[0] - 1
                          ][this.levelClass.animalPos[1]][2],
                          callback: function (e, t) {
                            "end" != t
                              ? (e.target.animalPos[3] = t)
                              : ((ig.game.movimiento = ig.game.movimiento - 1),
                                ig.game.aterrizar());
                          },
                          target: this.levelClass,
                        }
                      ));
                  else {
                    s =
                      1 == this.levelClass.tronco[10]
                        ? (0.4 * this.levelClass.tronco[9]) /
                          (this.deltaTime / 72)
                        : (0.4 * this.levelClass.tronco[9] * -1) /
                          (this.deltaTime / 72);
                    (r =
                      this.mapaMatrix[this.levelClass.animalPos[0] - 1][
                        this.levelClass.animalPos[1]
                      ][1] + s),
                      (a =
                        this.levelClass.tronco[11][11] *
                          (r - this.levelClass.tronco[11][12]) +
                        this.levelClass.tronco[11][13]);
                    (this.levelClass.animalPos[11] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[8],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: r,
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[2] = t)
                            : (ig.game.movimiento = ig.game.movimiento - 1);
                        },
                        target: this.levelClass,
                      }
                    )),
                      (this.levelClass.animalPos[12] = this.spawnEntity(
                        EntityTween,
                        0,
                        0,
                        {
                          time: 0.4,
                          start: this.levelClass.animalPos[9],
                          easing: "sinusoidal",
                          easingType: "easeOut",
                          end: a,
                          callback: function (e, t) {
                            "end" != t
                              ? (e.target.animalPos[3] = t)
                              : ((ig.game.movimiento = ig.game.movimiento - 1),
                                ig.game.aterrizar());
                          },
                          target: this.levelClass,
                        }
                      ));
                  }
                  (this.levelClass.animalPos[13] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.28,
                      start: 0,
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end: 100,
                      callback: function (e, t) {
                        "end" != t ||
                          ((e.target.animalPos[0] = e.target.animalPos[0] - 1),
                          (e.target.animalPos[1] = e.target.animalPos[1]),
                          (ig.game.colision = 4));
                      },
                      target: this.levelClass,
                    }
                  )),
                    (this.levelClass.animalPos[14] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.1,
                        start: 0,
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: 100,
                        callback: function (e, t) {
                          "end" != t ||
                            (e.target.animalPos[10] =
                              e.target.animalPos[0] - 1);
                        },
                        target: this.levelClass,
                      }
                    ));
                }
              } else if (
                ig.input.pressed("right") ||
                "right" == this.movimientoTouch
              ) {
                if (1 == this.movimientoLibre("right")) {
                  (this.movimiento = 2),
                    (this.movimientoTouch = "null"),
                    (this.levelClass.animalAnim = 4);
                  i = !1;
                  if (
                    (2 == this.colision && (i = !0),
                    (ig.game.colision = 3),
                    ig.game.assets.saltoS.play(),
                    this.matarTroncoMovs(),
                    this.levelClass.animal[4].rewind(),
                    1 == i)
                  ) {
                    s =
                      1 == this.levelClass.tronco[10]
                        ? (0.4 * this.levelClass.tronco[9]) /
                          (this.deltaTime / 72)
                        : (0.4 * this.levelClass.tronco[9] * -1) /
                          (this.deltaTime / 72);
                    (r =
                      this.levelClass.animalPos[8] +
                      this.levelClass.tronco[6] +
                      s),
                      (a =
                        this.levelClass.tronco[11][11] *
                          (r - this.levelClass.tronco[11][12]) +
                        this.levelClass.tronco[11][13]);
                    i = this.buscarTronco(
                      r,
                      a,
                      this.levelClass.animalPos[0],
                      this.levelClass.animalPos[1] + 1,
                      s,
                      "der"
                    );
                  }
                  if (0 == i)
                    (this.levelClass.animalPos[11] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[8],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end:
                          this.levelClass.animalPos[8] +
                          this.levelClass.tronco[6],
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[2] = t)
                            : (ig.game.movimiento = ig.game.movimiento - 1);
                        },
                        target: this.levelClass,
                      }
                    )),
                      (this.levelClass.animalPos[12] = this.spawnEntity(
                        EntityTween,
                        0,
                        0,
                        {
                          time: 0.4,
                          start: this.levelClass.animalPos[9],
                          easing: "sinusoidal",
                          easingType: "easeOut",
                          end:
                            this.levelClass.animalPos[9] +
                            this.levelClass.tronco[12],
                          callback: function (e, t) {
                            "end" != t
                              ? (e.target.animalPos[3] = t)
                              : ((ig.game.movimiento = ig.game.movimiento - 1),
                                ig.game.aterrizar());
                          },
                          target: this.levelClass,
                        }
                      ));
                  else {
                    s =
                      1 == this.levelClass.tronco[10]
                        ? (0.4 * this.levelClass.tronco[9]) /
                          (this.deltaTime / 72)
                        : (0.4 * this.levelClass.tronco[9] * -1) /
                          (this.deltaTime / 72);
                    (r =
                      this.levelClass.animalPos[8] +
                      this.levelClass.tronco[6] +
                      s),
                      (a =
                        this.levelClass.tronco[11][11] *
                          (r - this.levelClass.tronco[11][12]) +
                        this.levelClass.tronco[11][13]);
                    (this.levelClass.animalPos[11] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[8],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: r,
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[2] = t)
                            : (ig.game.movimiento = ig.game.movimiento - 1);
                        },
                        target: this.levelClass,
                      }
                    )),
                      (this.levelClass.animalPos[12] = this.spawnEntity(
                        EntityTween,
                        0,
                        0,
                        {
                          time: 0.4,
                          start: this.levelClass.animalPos[9],
                          easing: "sinusoidal",
                          easingType: "easeOut",
                          end: a,
                          callback: function (e, t) {
                            "end" != t
                              ? (e.target.animalPos[3] = t)
                              : ((ig.game.movimiento = ig.game.movimiento - 1),
                                ig.game.aterrizar());
                          },
                          target: this.levelClass,
                        }
                      ));
                  }
                  this.levelClass.animalPos[13] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.28,
                      start: 0,
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end: 100,
                      callback: function (e, t) {
                        "end" != t ||
                          ((e.target.animalPos[0] = e.target.animalPos[0]),
                          (e.target.animalPos[1] = e.target.animalPos[1] + 1),
                          e.target.animalPos[1] >= 25
                            ? ((e.target.animalPos[1] = 25),
                              (ig.game.colision = 5),
                              ig.game.sonidoLoss())
                            : 3 == ig.game.colision && (ig.game.colision = 4));
                      },
                      target: this.levelClass,
                    }
                  );
                }
              } else if (
                (ig.input.pressed("left") || "left" == this.movimientoTouch) &&
                1 == this.movimientoLibre("left")
              ) {
                (this.movimiento = 2),
                  (this.movimientoTouch = "null"),
                  (this.levelClass.animalAnim = 3);
                i = !1;
                if (
                  (2 == this.colision && (i = !0),
                  (ig.game.colision = 3),
                  ig.game.assets.saltoS.play(),
                  this.matarTroncoMovs(),
                  this.levelClass.animal[3].rewind(),
                  1 == i)
                ) {
                  s =
                    1 == this.levelClass.tronco[10]
                      ? (0.4 * this.levelClass.tronco[9]) /
                        (this.deltaTime / 72)
                      : (0.4 * this.levelClass.tronco[9] * -1) /
                        (this.deltaTime / 72);
                  (r =
                    this.levelClass.animalPos[8] -
                    this.levelClass.tronco[6] +
                    s),
                    (a =
                      this.levelClass.tronco[11][11] * r -
                      this.levelClass.tronco[11][12] +
                      this.levelClass.tronco[11][13]);
                  i = this.buscarTronco(
                    r,
                    a,
                    this.levelClass.animalPos[0],
                    this.levelClass.animalPos[1] - 1,
                    s,
                    "izq"
                  );
                }
                if (0 == i)
                  (this.levelClass.animalPos[11] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.4,
                      start: this.levelClass.animalPos[8],
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end:
                        this.levelClass.animalPos[8] -
                        this.levelClass.tronco[6],
                      callback: function (e, t) {
                        "end" != t
                          ? (e.target.animalPos[2] = t)
                          : (ig.game.movimiento = ig.game.movimiento - 1);
                      },
                      target: this.levelClass,
                    }
                  )),
                    (this.levelClass.animalPos[12] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[9],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end:
                          this.levelClass.animalPos[9] -
                          this.levelClass.tronco[12],
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[3] = t)
                            : ((ig.game.movimiento = ig.game.movimiento - 1),
                              ig.game.aterrizar());
                        },
                        target: this.levelClass,
                      }
                    ));
                else {
                  s =
                    1 == this.levelClass.tronco[10]
                      ? (0.4 * this.levelClass.tronco[9]) /
                        (this.deltaTime / 72)
                      : (0.4 * this.levelClass.tronco[9] * -1) /
                        (this.deltaTime / 72);
                  (r =
                    this.levelClass.animalPos[8] -
                    this.levelClass.tronco[6] +
                    s),
                    (a =
                      this.levelClass.tronco[11][11] *
                        (r - this.levelClass.tronco[11][12]) +
                      this.levelClass.tronco[11][13]);
                  (this.levelClass.animalPos[11] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.4,
                      start: this.levelClass.animalPos[8],
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end: r,
                      callback: function (e, t) {
                        "end" != t
                          ? (e.target.animalPos[2] = t)
                          : (ig.game.movimiento = ig.game.movimiento - 1);
                      },
                      target: this.levelClass,
                    }
                  )),
                    (this.levelClass.animalPos[12] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: this.levelClass.animalPos[9],
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: a,
                        callback: function (e, t) {
                          "end" != t
                            ? (e.target.animalPos[3] = t)
                            : ((ig.game.movimiento = ig.game.movimiento - 1),
                              ig.game.aterrizar());
                        },
                        target: this.levelClass,
                      }
                    ));
                }
                this.levelClass.animalPos[13] = this.spawnEntity(
                  EntityTween,
                  0,
                  0,
                  {
                    time: 0.28,
                    start: 0,
                    easing: "sinusoidal",
                    easingType: "easeOut",
                    end: 100,
                    callback: function (e, t) {
                      "end" != t ||
                        ((e.target.animalPos[0] = e.target.animalPos[0]),
                        (e.target.animalPos[1] = e.target.animalPos[1] - 1),
                        e.target.animalPos[1] <= 0
                          ? ((e.target.animalPos[1] = 0),
                            (ig.game.colision = 5),
                            ig.game.sonidoLoss())
                          : 3 == ig.game.colision && (ig.game.colision = 4));
                    },
                    target: this.levelClass,
                  }
                );
              }
            } else {
              (this.movimiento = 2),
                (this.movimientoTouch = "null"),
                (this.levelClass.animalAnim = 2);
              var i = !1;
              if (
                (2 == this.colision && (i = !0),
                (ig.game.colision = 3),
                ig.game.assets.saltoS.play(),
                this.matarTroncoMovs(),
                this.levelClass.animal[2].rewind(),
                1 == i)
              ) {
                var a =
                    this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                      this.levelClass.animalPos[1]
                    ][2],
                  r =
                    this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                      this.levelClass.animalPos[1]
                    ][1];
                i = this.buscarTroncoUpDown(
                  r,
                  a,
                  this.levelClass.animalPos[0] + 1,
                  this.levelClass.animalPos[1]
                );
              }
              if (0 == i)
                (this.levelClass.animalPos[11] = this.spawnEntity(
                  EntityTween,
                  0,
                  0,
                  {
                    time: 0.4,
                    start: this.levelClass.animalPos[8],
                    easing: "sinusoidal",
                    easingType: "easeOut",
                    end: this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                      this.levelClass.animalPos[1]
                    ][1],
                    callback: function (e, t) {
                      "end" != t && (e.target.animalPos[2] = t);
                    },
                    target: this.levelClass,
                  }
                )),
                  (this.levelClass.animalPos[12] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.4,
                      start: this.levelClass.animalPos[9],
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end: this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                        this.levelClass.animalPos[1]
                      ][2],
                      callback: function (e, t) {
                        "end" != t
                          ? (e.target.animalPos[3] = t)
                          : ig.game.aterrizar();
                      },
                      target: this.levelClass,
                    }
                  ));
              else {
                var s;
                s =
                  1 == this.levelClass.tronco[10]
                    ? (0.4 * this.levelClass.tronco[9]) / (this.deltaTime / 72)
                    : (0.4 * this.levelClass.tronco[9] * -1) /
                      (this.deltaTime / 72);
                var r =
                    this.mapaMatrix[this.levelClass.animalPos[0] + 1][
                      this.levelClass.animalPos[1]
                    ][1] + s,
                  a =
                    this.levelClass.tronco[11][11] *
                      (r - this.levelClass.tronco[11][12]) +
                    this.levelClass.tronco[11][13];
                (this.levelClass.animalPos[11] = this.spawnEntity(
                  EntityTween,
                  0,
                  0,
                  {
                    time: 0.4,
                    start: this.levelClass.animalPos[8],
                    easing: "sinusoidal",
                    easingType: "easeOut",
                    end: r,
                    callback: function (e, t) {
                      "end" != t && (e.target.animalPos[2] = t);
                    },
                    target: this.levelClass,
                  }
                )),
                  (this.levelClass.animalPos[12] = this.spawnEntity(
                    EntityTween,
                    0,
                    0,
                    {
                      time: 0.4,
                      start: this.levelClass.animalPos[9],
                      easing: "sinusoidal",
                      easingType: "easeOut",
                      end: a,
                      callback: function (e, t) {
                        "end" != t
                          ? (e.target.animalPos[3] = t)
                          : ig.game.aterrizar();
                      },
                      target: this.levelClass,
                    }
                  ));
              }
              (this.levelClass.animalPos[13] = this.spawnEntity(
                EntityTween,
                0,
                0,
                {
                  time: 0.28,
                  start: 0,
                  easing: "sinusoidal",
                  easingType: "easeOut",
                  end: 100,
                  callback: function (e, t) {
                    "end" != t ||
                      ((e.target.animalPos[0] = e.target.animalPos[0] + 1),
                      (e.target.animalPos[1] = e.target.animalPos[1]),
                      (ig.game.colision = 4));
                  },
                  target: this.levelClass,
                }
              )),
                (this.levelClass.animalPos[14] = this.spawnEntity(
                  EntityTween,
                  0,
                  0,
                  {
                    time: 0.1,
                    start: 0,
                    easing: "sinusoidal",
                    easingType: "easeOut",
                    end: 100,
                    callback: function (e, t) {
                      "end" != t ||
                        (e.target.animalPos[10] = e.target.animalPos[0] + 1);
                    },
                    target: this.levelClass,
                  }
                )),
                10 !=
                this.mapaMatrix[this.levelClass.animalPos[10] + 1][
                  this.levelClass.animalPos[1]
                ][3]
                  ? (this.levelClass.animalPos[15] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.32,
                        start: 0,
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: 100,
                        callback: function (e, t) {
                          "end" != t ||
                            (ig.game.movimiento = ig.game.movimiento - 2);
                        },
                        target: this.levelClass,
                      }
                    ))
                  : (this.levelClass.animalPos[15] = this.spawnEntity(
                      EntityTween,
                      0,
                      0,
                      {
                        time: 0.4,
                        start: 0,
                        easing: "sinusoidal",
                        easingType: "easeOut",
                        end: 100,
                        callback: function (e, t) {
                          "end" != t ||
                            (ig.game.movimiento = ig.game.movimiento - 2);
                        },
                        target: this.levelClass,
                      }
                    ));
            }
          }
        },
        draw: function () {
          if ((this.parent(), this.creaFade > 0)) {
            this.crearFade();
            var e = ig.system.width / 2,
              t = ig.system.height / 2,
              i = (ig.system.width, ig.system.height, 0),
              a = 0;
            (r = this.escalaCubo * ig.game.escala2D) > 1 && (r = 1),
              this.creaFade < 3
                ? this.menu.logoY <= 55 * this.escalaCubo &&
                  (this.menu.logoY =
                    this.menu.logoY + this.menu.logoSpeed * this.escalaCubo)
                : (this.menu.logoY =
                    this.menu.logoY + this.menu.logoSpeed * this.escalaCubo),
              this.menu.logo.draw(
                e - (r * this.menu.logo.frameData.frame.w) / 2,
                a + (r * this.menu.logo.frameData.frame.h) / 2 + this.menu.logoY
              );
          } else if (1 == this.activarBest) {
            var r, s;
            (e = ig.system.width / 2),
              (t = ig.system.height / 2),
              ig.system.width,
              ig.system.height,
              (i = 0),
              (a = 0);
            (r = this.escalaCubo * ig.game.escala2D) > 1 && (r = 1),
              this.assets.bestScorePanel.draw(
                e - (r * this.assets.bestScorePanel.frameData.frame.w) / 2,
                t - (r * this.assets.bestScorePanel.frameData.frame.h) / 2
              ),
              (s =
                this.bestScore < 10
                  ? "00" + this.bestScore
                  : ig.game.bestScore < 100
                  ? "0" + this.bestScore
                  : "" + this.bestScore);
            var o = 29 * ig.game.escalaCubo;
            (this.fuente = new Font(o + "px Play")),
              this.assets.fontN.draw(
                s,
                e - (r * this.assets.bestScorePanel.frameData.frame.w) / 12,
                t + (r * this.assets.bestScorePanel.frameData.frame.h) / 16
              ),
              this.fuente.draw(
                ig.game.arrayTextos.bestPanel,
                e -
                  (r * this.assets.bestScorePanel.frameData.frame.w) / 12 -
                  175 * r,
                t +
                  (r * this.assets.bestScorePanel.frameData.frame.h) / 16 -
                  118 * r
              );
          }
          if (1 == this.activaFlip) {
            (e = ig.system.width / 2),
              (t = ig.system.height / 2),
              ig.system.width,
              ig.system.height,
              (i = 0),
              (a = 0);
            ig.system.context.drawImage(
              this.assets.flip.data,
              i,
              a,
              ig.system.width,
              ig.system.height
            ),
              (ig.Timer.timeScale = 0);
          }
        },
        encuadraLevel: function (e, t) {
          if (0 == t) {
            var i = 70 * ig.game.escalaCubo,
              a = -130 * ig.game.escalaCubo;
            (ig.game.levelClass.pos.x = i),
              (ig.game.levelClass.pos.y = a),
              (ig.game.levelClass.posIniX = 0);
          } else {
            var r = 2.05,
              s = 0,
              o = 0.345425,
              n = -700,
              h = (n - s) / (o - r),
              m = h * (ig.game.escalaCubo - r) + s,
              l =
                (h = ((n = 0) - (s = -700)) / ((o = 1974) - (r = 302))) *
                  (ig.system.width - r) +
                s;
            ig.game.levelClass.posIniX = l - m;
          }
        },
        openUrl: function (e) {
          var t = document.getElementById("targetA");
          (t.href = e), t.click();
        },
        seteaEscala: function (e) {
          var t = window.innerWidth,
            i = window.innerHeight,
            a = t / 960,
            r = !1;
          if ((634 * a < i && (a, (a = i / 634), (r = !0)), 1 == e)) {
            this.escalaCubo_current = this.escalaCubo;
            var s = ig.game.escalaCubo;
            (ig.game.escalaCubo = a),
              ig.game.ajustarMatrixCompleta(),
              ig.game.encuadraLevel(s, r),
              ig.game.resetPos(),
              ig.game.reparaObjetos();
          } else ig.game.escalaCubo = a;
          (this.activaFlip = !0),
            (this.activaFlip = !1),
            (ig.Timer.timeScale = 1);
        },
        metodoDejarDibujar: function () {
          clearInterval(this.hiloDibujar),
            this.seteaEscala(!0),
            (ig.game.noDibujar = !1);
        },
      })),
        (window.onresize = function () {
          ig.system.resize(window.innerWidth, window.innerHeight),
            (ig.game.noDibujar = !0),
            clearInterval(ig.game.hiloDibujar),
            (ig.game.hiloDibujar = setInterval(
              ig.game.metodoDejarDibujar(),
              180
            ));
        }),
        window.addEventListener(
          "blur",
          function () {
            try {
              0 == ig.game.muteado && (Howler.mute(), (ig.game.muteado = !0)),
                (ig.Timer.timeScale = 0);
            } catch (e) {
              ig.Timer.timeScale = 0;
            }
          },
          !1
        ),
        window.addEventListener(
          "focus",
          function () {
            try {
              1 == ig.game.muteado &&
                0 == ig.game.hud.indexMute &&
                (Howler.unmute(), (ig.game.muteado = !1)),
                (ig.Timer.timeScale = 1);
            } catch (e) {
              try {
                0 == ig.game.menu.indexMute &&
                  (Howler.unmute(), (ig.game.muteado = !1)),
                  (ig.Timer.timeScale = 1);
              } catch (e) {
                ig.Timer.timeScale = 1;
              }
            }
          },
          !1
        ),
        ig.main(
          "#canvas",
          MyGame,
          60,
          window.innerWidth,
          window.innerHeight,
          1,
          ig.ImpactSplashLoader
        );
    });