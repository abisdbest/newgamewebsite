(function(){'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
$jscomp.getGlobal = function(a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function(a, b) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:b});
};
$jscomp.SymbolClass.prototype.toString = function() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function a(c) {
    if (this instanceof a) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++, c);
  }
  var b = 0;
  return a;
}();
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.initSymbolAsyncIterator = function() {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.asyncIterator;
  a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function() {
  };
};
$jscomp.iteratorPrototype = function(a) {
  $jscomp.initSymbolIterator();
  a = {next:a};
  a[$jscomp.global.Symbol.iterator] = function() {
    return this;
  };
  return a;
};
$jscomp.iteratorFromArray = function(a, b) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var c = 0, d = {next:function() {
    if (c < a.length) {
      var e = c++;
      return {value:b(e, a[e]), done:!1};
    }
    d.next = function() {
      return {done:!0, value:void 0};
    };
    return d.next();
  }};
  d[Symbol.iterator] = function() {
    return d;
  };
  return d;
};
$jscomp.polyfill = function(a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
  }
};
$jscomp.polyfill("Array.prototype.keys", function(a) {
  return a ? a : function() {
    return $jscomp.iteratorFromArray(this, function(a) {
      return a;
    });
  };
}, "es6", "es3");
(function(a) {
  function b(d) {
    if (c[d]) {
      return c[d].exports;
    }
    var e = c[d] = {i:d, l:!1, exports:{}};
    a[d].call(e.exports, e, e.exports, b);
    e.l = !0;
    return e.exports;
  }
  var c = {};
  b.m = a;
  b.c = c;
  b.d = function(a, e, c) {
    b.o(a, e) || Object.defineProperty(a, e, {enumerable:!0, get:c});
  };
  b.r = function(a) {
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    "undefined" !== typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(a, Symbol.toStringTag, {value:"Module"}));
    Object.defineProperty(a, "__esModule", {value:!0});
  };
  b.t = function(a, e) {
    e & 1 && (a = b(a));
    if (e & 8 || e & 4 && "object" === typeof a && a && a.__esModule) {
      return a;
    }
    var c = Object.create(null);
    b.r(c);
    Object.defineProperty(c, "default", {enumerable:!0, value:a});
    if (e & 2 && "string" != typeof a) {
      for (var d in a) {
        b.d(c, d, function(b) {
          return a[b];
        }.bind(null, d));
      }
    }
    return c;
  };
  b.n = function(a) {
    var e = a && a.__esModule ? function() {
      return a["default"];
    } : function() {
      return a;
    };
    b.d(e, "a", e);
    return e;
  };
  b.o = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  b.p = "";
  return b(b.s = 0);
})([function(a, b, c) {
  c.r(b);
  a = c(1);
  c.n(a);
  (function() {
    for (var a = document.querySelectorAll("[i18n]"), b = 0; b < a.length; ++b) {
      a[b].textContent = chrome.i18n.getMessage(a[b].getAttribute("i18n"));
    }
    a = document.querySelectorAll("[i18n-alt]");
    for (b = 0; b < a.length; ++b) {
      var c = chrome.i18n.getMessage(a[b].getAttribute("i18n-alt"));
      a[b].alt = c;
      a[b].title = c;
    }
  })();
  document.getElementById("game").src = "game/index.html";
  var d = document.getElementById("dialog-rate");
  c = Number(localStorage.openTimes);
  a = "true" === localStorage.rateClicked;
  isNaN(c) ? localStorage.openTimes = 1 : localStorage.openTimes = c + 1;
  a || 1 !== c && 0 !== c % 2 || (d.style.display = "flex");
  document.getElementById("dialog-yes").addEventListener("click", function() {
    localStorage.rateClicked = "true";
    d.style.display = "none";
    chrome.tabs.query({active:!0, currentWindow:!0}, function(a) {
      chrome.tabs.create({url:"https://chrome.google.com/webstore/detail/" + chrome.runtime.id + "/reviews", index:a[0].index + 1, active:!0, openerTabId:a[0].id});
    });
  });
  document.getElementById("dialog-no").addEventListener("click", function() {
    d.style.display = "none";
  });
}, function(a, b, c) {
  b = c(2);
  "string" === typeof b && (b = [[a.i, b, ""]]);
  c(4)(b, {hmr:!0, transform:void 0, insertInto:void 0});
  b.locals && (a.exports = b.locals);
}, function(a, b, c) {
  b = a.exports = c(3)(!1);
  b.push([a.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);", ""]);
  b.push([a.i, 'html {\n    overflow: scroll;\n    overflow-x: hidden;\n}\n\nbody {\n    margin: 0;\n}\n\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\niframe {\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.flex-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n\n    display: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: stretch;\n    align-items: flex-start;\n}\n\n.dialog {\n    order: 0;\n    flex: 0 1 auto;\n    align-self: center;\n\n    border-radius: 10px;\n\n    width: 250px;\n\n    background: rgba(220, 220, 220)\n}\n\n.dialog-header {\n    text-align: center;\n    padding: 10px;\n    font-size: 16px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 700;\n    border-bottom: rgb(180, 180, 180) solid 1px;\n}\n\n.dialog-content {\n    padding: 10px 12px;\n    text-align: center;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\n\n.dialog-button a {\n    display: block;\n    text-align: center;\n    text-decoration: none;\n    padding: 10px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    color: #2e7cf1;\n    border-top: rgb(180, 180, 180) solid 1px;\n}\n\n.dialog-button a:last-child {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.dialog-button .cancel {\n    font-weight: 700;\n}\n\n.dialog-button a:hover {\n    background: rgb(180, 180, 180);\n}\n\np {\n    line-height: 22px;\n}', 
  ""]);
}, function(a, b, c) {
  function d(a, b) {
    var c = a[1] || "", d = a[3];
    return d ? b && "function" === typeof btoa ? (a = "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */", b = d.sources.map(function(a) {
      return "/*# sourceURL=" + d.sourceRoot + a + " */";
    }), [c].concat(b).concat([a]).join("\n")) : [c].join("\n") : c;
  }
  a.exports = function(a) {
    var b = [];
    b.toString = function() {
      return this.map(function(b) {
        var c = d(b, a);
        return b[2] ? "@media " + b[2] + "{" + c + "}" : c;
      }).join("");
    };
    b.i = function(a, c) {
      "string" === typeof a && (a = [[null, a, ""]]);
      for (var d = {}, e = 0; e < this.length; e++) {
        var g = this[e][0];
        null != g && (d[g] = !0);
      }
      for (e = 0; e < a.length; e++) {
        g = a[e], null != g[0] && d[g[0]] || (c && !g[2] ? g[2] = c : c && (g[2] = "(" + g[2] + ") and (" + c + ")"), b.push(g));
      }
    };
    return b;
  };
}, function(a, b, c) {
  function d(a, b) {
    for (var f = 0; f < a.length; f++) {
      var h = a[f], c = m[h.id];
      if (c) {
        c.refs++;
        for (var d = 0; d < c.parts.length; d++) {
          c.parts[d](h.parts[d]);
        }
        for (; d < h.parts.length; d++) {
          c.parts.push(g(h.parts[d], b));
        }
      } else {
        c = [];
        for (d = 0; d < h.parts.length; d++) {
          c.push(g(h.parts[d], b));
        }
        m[h.id] = {id:h.id, refs:1, parts:c};
      }
    }
  }
  function e(a, b) {
    for (var h = [], c = {}, f = 0; f < a.length; f++) {
      var d = a[f], e = b.base ? d[0] + b.base : d[0];
      d = {css:d[1], media:d[2], sourceMap:d[3]};
      c[e] ? c[e].parts.push(d) : h.push(c[e] = {id:e, parts:[d]});
    }
    return h;
  }
  function l(a, b) {
    var c = r(a.insertInto);
    if (!c) {
      throw Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    }
    var h = k[k.length - 1];
    if ("top" === a.insertAt) {
      h ? h.nextSibling ? c.insertBefore(b, h.nextSibling) : c.appendChild(b) : c.insertBefore(b, c.firstChild), k.push(b);
    } else {
      if ("bottom" === a.insertAt) {
        c.appendChild(b);
      } else {
        if ("object" === typeof a.insertAt && a.insertAt.before) {
          a = r(a.insertAt.before, c), c.insertBefore(b, a);
        } else {
          throw Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        }
      }
    }
  }
  function n(a) {
    if (null === a.parentNode) {
      return !1;
    }
    a.parentNode.removeChild(a);
    a = k.indexOf(a);
    0 <= a && k.splice(a, 1);
  }
  function p(a) {
    var b = document.createElement("style");
    void 0 === a.attrs.type && (a.attrs.type = "text/css");
    if (void 0 === a.attrs.nonce) {
      var d;
      if (d = c.nc) {
        a.attrs.nonce = d;
      }
    }
    q(b, a.attrs);
    l(a, b);
    return b;
  }
  function v(a) {
    var b = document.createElement("link");
    void 0 === a.attrs.type && (a.attrs.type = "text/css");
    a.attrs.rel = "stylesheet";
    q(b, a.attrs);
    l(a, b);
    return b;
  }
  function q(a, b) {
    Object.keys(b).forEach(function(c) {
      a.setAttribute(c, b[c]);
    });
  }
  function g(a, b) {
    var c;
    if (b.transform && a.css) {
      if (c = "function" === typeof b.transform ? b.transform(a.css) : b.transform.default(a.css)) {
        a.css = c;
      } else {
        return function() {
        };
      }
    }
    if (b.singleton) {
      c = w++;
      var d = t || (t = p(b));
      var f = u.bind(null, d, c, !1);
      var e = u.bind(null, d, c, !0);
    } else {
      a.sourceMap && "function" === typeof URL && "function" === typeof URL.createObjectURL && "function" === typeof URL.revokeObjectURL && "function" === typeof Blob && "function" === typeof btoa ? (d = v(b), f = x.bind(null, d, b), e = function() {
        n(d);
        d.href && URL.revokeObjectURL(d.href);
      }) : (d = p(b), f = y.bind(null, d), e = function() {
        n(d);
      });
    }
    f(a);
    return function(b) {
      b ? (b.css !== a.css || b.media !== a.media || b.sourceMap !== a.sourceMap) && f(a = b) : e();
    };
  }
  function u(a, b, c, d) {
    c = c ? "" : d.css;
    a.styleSheet ? a.styleSheet.cssText = z(b, c) : (c = document.createTextNode(c), d = a.childNodes, d[b] && a.removeChild(d[b]), d.length ? a.insertBefore(c, d[b]) : a.appendChild(c));
  }
  function y(a, b) {
    var c = b.css;
    (b = b.media) && a.setAttribute("media", b);
    if (a.styleSheet) {
      a.styleSheet.cssText = c;
    } else {
      for (; a.firstChild;) {
        a.removeChild(a.firstChild);
      }
      a.appendChild(document.createTextNode(c));
    }
  }
  function x(a, b, c) {
    var d = c.css;
    c = c.sourceMap;
    var e = void 0 === b.convertToAbsoluteUrls && c;
    if (b.convertToAbsoluteUrls || e) {
      d = A(d);
    }
    c && (d += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + " */");
    b = new Blob([d], {type:"text/css"});
    d = a.href;
    a.href = URL.createObjectURL(b);
    d && URL.revokeObjectURL(d);
  }
  var m = {}, B = function(a) {
    var b;
    return function() {
      "undefined" === typeof b && (b = a.apply(this, arguments));
      return b;
    };
  }(function() {
    return window && document && document.all && !window.atob;
  }), r = function(a) {
    var b = {};
    return function(a, c) {
      if ("function" === typeof a) {
        return a();
      }
      if ("undefined" === typeof b[a]) {
        c = c ? c.querySelector(a) : document.querySelector(a);
        if (window.HTMLIFrameElement && c instanceof window.HTMLIFrameElement) {
          try {
            c = c.contentDocument.head;
          } catch (C) {
            c = null;
          }
        }
        b[a] = c;
      }
      return b[a];
    };
  }(), t = null, w = 0, k = [], A = c(5);
  a.exports = function(a, b) {
    if ("undefined" !== typeof DEBUG && DEBUG && "object" !== typeof document) {
      throw Error("The style-loader cannot be used in a non-browser environment");
    }
    b = b || {};
    b.attrs = "object" === typeof b.attrs ? b.attrs : {};
    b.singleton || "boolean" === typeof b.singleton || (b.singleton = B());
    b.insertInto || (b.insertInto = "head");
    b.insertAt || (b.insertAt = "bottom");
    var c = e(a, b);
    d(c, b);
    return function(a) {
      for (var h = [], f = 0; f < c.length; f++) {
        var g = m[c[f].id];
        g.refs--;
        h.push(g);
      }
      a && (f = e(a, b), d(f, b));
      for (f = 0; f < h.length; f++) {
        if (g = h[f], 0 === g.refs) {
          for (a = 0; a < g.parts.length; a++) {
            g.parts[a]();
          }
          delete m[g.id];
        }
      }
    };
  };
  var z = function() {
    var a = [];
    return function(b, c) {
      a[b] = c;
      return a.filter(Boolean).join("\n");
    };
  }();
}, function(a, b) {
  a.exports = function(a) {
    var b = "undefined" !== typeof window && window.location;
    if (!b) {
      throw Error("fixUrls requires window.location");
    }
    if (!a || "string" !== typeof a) {
      return a;
    }
    var c = b.protocol + "//" + b.host, l = c + b.pathname.replace(/\/[^\/]*$/, "/");
    return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a, b) {
      b = b.trim().replace(/^"(.*)"$/, function(a, b) {
        return b;
      }).replace(/^'(.*)'$/, function(a, b) {
        return b;
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(b)) {
        return a;
      }
      a = 0 === b.indexOf("//") ? b : 0 === b.indexOf("/") ? c + b : l + b.replace(/^\.\//, "");
      return "url(" + JSON.stringify(a) + ")";
    });
  };
}]);
}).call(this || window)
