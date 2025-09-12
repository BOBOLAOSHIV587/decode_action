//Fri Sep 12 2025 17:12:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  var bX = {
      589: w => {
        function r(w) {
          var c = new Error("Cannot find module '" + w + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        r.keys = () => [];
        r.resolve = r;
        r.id = 589;
        w.exports = r;
      }
    },
    c5 = {},
    cc;
  function c6(w) {
    for (var n = "0|1|3|2|4".split("|"), r = 0;;) {
      switch (n[r++]) {
        case "0":
          var t = c5[w];
          continue;
        case "1":
          if (t !== undefined) return t.exports;
          continue;
        case "2":
          bX[w](x, x.exports, c6);
          continue;
        case "3":
          var x = c5[w] = {
            exports: {}
          };
          continue;
        case "4":
          return x.exports;
      }
      break;
    }
  }
  cc = {
    zAQYV: function (w, n) {
      return w === n;
    },
    ZFavB: "object",
    LQQfE: "return this"
  };
  c6.g = function () {
    if (cc.zAQYV(typeof globalThis, cc.ZFavB)) return globalThis;
    try {
      return this || new Function(cc.LQQfE)();
    } catch (w) {
      if (cc.zAQYV(typeof window, cc.ZFavB)) return window;
    }
  }();
  c6.o = (w, c) => Object.prototype.hasOwnProperty.call(w, c);
  var ci = {};
  (() => {
    function dF(w) {
      "@babel/helpers - typeof";
      dF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (w) {
        return typeof w;
      } : function (w) {
        return w && "function" == typeof Symbol && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
      };
      return dF(w);
    }
    function dQ() {
      dQ = function () {
        return r;
      };
      var n,
        r = {},
        t = Object.prototype,
        x = t.hasOwnProperty,
        e = Object.defineProperty || function (w, c, n) {
          w[c] = n.value;
        },
        o = "function" == typeof Symbol ? Symbol : {},
        u = o.iterator || "@@iterator",
        f = o.asyncIterator || "@@asyncIterator",
        i = o.toStringTag || "@@toStringTag";
      function D(w, c, n) {
        Object.defineProperty(w, c, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return w[c];
      }
      try {
        D({}, "");
      } catch (w) {
        D = function (w, c, n) {
          return w[c] = n;
        };
      }
      function a(w, c, n, r) {
        var t = c && c.prototype instanceof l ? c : l,
          x = Object.create(t.prototype),
          o = new L(r || []);
        e(x, "_invoke", {
          value: q(w, n, o)
        });
        return x;
      }
      function s(c, n, r) {
        try {
          return {
            type: "normal",
            arg: c.call(n, r)
          };
        } catch (c) {
          return {
            type: "throw",
            arg: c
          };
        }
      }
      r.wrap = a;
      var K = "suspendedStart",
        p = "suspendedYield",
        C = "executing",
        O = "completed",
        j = {};
      function l() {}
      function g() {}
      function M() {}
      var Q = {};
      D(Q, u, function () {
        return this;
      });
      var k = Object.getPrototypeOf,
        d = k && k(k(N([])));
      d && d !== t && x.call(d, u) && (Q = d);
      var A = M.prototype = l.prototype = Object.create(Q);
      function v(c) {
        ["next", "throw", "return"].forEach(function (n) {
          D(c, n, function (w) {
            return this._invoke(n, w);
          });
        });
      }
      function U(c, n) {
        var r;
        function o(r, e, u, f) {
          var D = s(c[r], c, e);
          if ("throw" !== D.type) {
            var a = D.arg,
              K = a.value;
            return K && "object" == dF(K) && x.call(K, "__await") ? n.resolve(K.__await).then(function (w) {
              o("next", w, u, f);
            }, function (w) {
              o("throw", w, u, f);
            }) : n.resolve(K).then(function (w) {
              a.value = w;
              u(a);
            }, function (w) {
              return o("throw", w, u, f);
            });
          }
          f(D.arg);
        }
        e(this, "_invoke", {
          value: function (w, c) {
            function e() {
              return new n(function (n, r) {
                o(w, c, n, r);
              });
            }
            return r = r ? r.then(e, e) : e();
          }
        });
      }
      function q(w, c, r) {
        var x = K;
        return function (e, o) {
          if (x === C) throw Error("Generator is already running");
          if (x === O) {
            if ("throw" === e) throw o;
            return {
              value: n,
              done: true
            };
          }
          for (r.method = e, r.arg = o;;) {
            var u = r.delegate;
            if (u) {
              var f = P(u, r);
              if (f) {
                if (f === j) continue;
                return f;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
              if (x === K) throw x = O, r.arg;
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            x = C;
            var i = s(w, c, r);
            if ("normal" === i.type) {
              if (x = r.done ? O : p, i.arg === j) continue;
              return {
                value: i.arg,
                done: r.done
              };
            }
            "throw" === i.type && (x = O, r.method = "throw", r.arg = i.arg);
          }
        };
      }
      function P(w, c) {
        for (var r = "0|5|4|2|1|3".split("|"), t = 0;;) {
          switch (r[t++]) {
            case "0":
              var x = c.method,
                e = w.iterator[x];
              continue;
            case "1":
              var o = u.arg;
              continue;
            case "2":
              if ("throw" === u.type) return c.method = "throw", c.arg = u.arg, c.delegate = null, j;
              continue;
            case "3":
              return o ? o.done ? (c[w.resultName] = o.value, c.next = w.nextLoc, "return" !== c.method && (c.method = "next", c.arg = n), c.delegate = null, j) : o : (c.method = "throw", c.arg = new TypeError("iterator result is not an object"), c.delegate = null, j);
            case "4":
              var u = s(e, w.iterator, c.arg);
              continue;
            case "5":
              if (e === n) return c.delegate = null, "throw" === x && w.iterator.return && (c.method = "return", c.arg = n, P(w, c), "throw" === c.method) || "return" !== x && (c.method = "throw", c.arg = new TypeError("The iterator does not provide a '" + x + "' method")), j;
              continue;
          }
          break;
        }
      }
      function h(c) {
        var n = {
          tryLoc: c[0]
        };
        1 in c && (n.catchLoc = c[1]);
        2 in c && (n.finallyLoc = c[2], n.afterLoc = c[3]);
        this.tryEntries.push(n);
      }
      function X(w) {
        var c = w.completion || {};
        c.type = "normal";
        delete c.arg;
        w.completion = c;
      }
      function L(c) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        c.forEach(h, this);
        this.reset(true);
      }
      function N(w) {
        if (w || "" === w) {
          var r = w[u];
          if (r) return r.call(w);
          if ("function" == typeof w.next) return w;
          if (!isNaN(w.length)) {
            var t = -1,
              e = function r() {
                for (; ++t < w.length;) if (x.call(w, t)) return r.value = w[t], r.done = false, r;
                r.value = n;
                r.done = true;
                return r;
              };
            return e.next = e;
          }
        }
        throw new TypeError(dF(w) + " is not iterable");
      }
      g.prototype = M;
      e(A, "constructor", {
        value: M,
        configurable: true
      });
      e(M, "constructor", {
        value: g,
        configurable: true
      });
      g.displayName = D(M, i, "GeneratorFunction");
      r.isGeneratorFunction = function (w) {
        var c = "function" == typeof w && w.constructor;
        return !!c && (c === g || "GeneratorFunction" === (c.displayName || c.name));
      };
      r.mark = function (c) {
        Object.setPrototypeOf ? Object.setPrototypeOf(c, M) : (c.__proto__ = M, D(c, i, "GeneratorFunction"));
        c.prototype = Object.create(A);
        return c;
      };
      r.awrap = function (w) {
        return {
          __await: w
        };
      };
      v(U.prototype);
      D(U.prototype, f, function () {
        return this;
      });
      r.AsyncIterator = U;
      r.async = function (c, n, t, x, e) {
        undefined === e && (e = Promise);
        var o = new U(a(c, n, t, x), e);
        return r.isGeneratorFunction(n) ? o : o.next().then(function (w) {
          return w.done ? w.value : o.next();
        });
      };
      v(A);
      D(A, i, "Generator");
      D(A, u, function () {
        return this;
      });
      D(A, "toString", function () {
        return "[object Generator]";
      });
      r.keys = function (w) {
        var n = Object(w),
          r = [];
        for (var t in n) r.push(t);
        r.reverse();
        return function w() {
          for (; r.length;) {
            var t = r.pop();
            if (t in n) return w.value = t, w.done = false, w;
          }
          w.done = true;
          return w;
        };
      };
      r.values = N;
      L.prototype = {
        constructor: L,
        reset: function (c) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = false, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(X), !c) for (var r in this) "t" === r.charAt(0) && x.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = n);
        },
        stop: function () {
          this.done = true;
          var w = this.tryEntries[0].completion;
          if ("throw" === w.type) throw w.arg;
          return this.rval;
        },
        dispatchException: function (c) {
          if (this.done) throw c;
          var r = this;
          function t(t, x) {
            u.type = "throw";
            u.arg = c;
            r.next = t;
            x && (r.method = "next", r.arg = n);
            return !!x;
          }
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e],
              u = o.completion;
            if ("root" === o.tryLoc) return t("end");
            if (o.tryLoc <= this.prev) {
              var f = x.call(o, "catchLoc"),
                i = x.call(o, "finallyLoc");
              if (f && i) {
                if (this.prev < o.catchLoc) return t(o.catchLoc, true);
                if (this.prev < o.finallyLoc) return t(o.finallyLoc);
              } else if (f) {
                if (this.prev < o.catchLoc) return t(o.catchLoc, true);
              } else {
                if (!i) throw Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return t(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function (c, n) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var t = this.tryEntries[r];
            if (t.tryLoc <= this.prev && x.call(t, "finallyLoc") && this.prev < t.finallyLoc) {
              var e = t;
              break;
            }
          }
          e && ("break" === c || "continue" === c) && e.tryLoc <= n && n <= e.finallyLoc && (e = null);
          var o = e ? e.completion : {};
          o.type = c;
          o.arg = n;
          return e ? (this.method = "next", this.next = e.finallyLoc, j) : this.complete(o);
        },
        complete: function (c, n) {
          if ("throw" === c.type) throw c.arg;
          "break" === c.type || "continue" === c.type ? this.next = c.arg : "return" === c.type ? (this.rval = this.arg = c.arg, this.method = "return", this.next = "end") : "normal" === c.type && n && (this.next = n);
          return j;
        },
        finish: function (c) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.finallyLoc === c) return this.complete(r.completion, r.afterLoc), X(r), j;
          }
        },
        catch: function (c) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc === c) {
              var t = r.completion;
              if ("throw" === t.type) {
                var x = t.arg;
                X(r);
              }
              return x;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (c, r, t) {
          this.delegate = {
            iterator: N(c),
            resultName: r,
            nextLoc: t
          };
          "next" === this.method && (this.arg = n);
          return j;
        }
      };
      return r;
    }
    function io(w, n) {
      return iN(w) || iB(w, n) || is(w, n) || ir();
    }
    function ir() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function is(w, n) {
      if (w) {
        if ("string" == typeof w) return iw(w, n);
        var r = {}.toString.call(w).slice(8, -1);
        "Object" === r && w.constructor && (r = w.constructor.name);
        return "Map" === r || "Set" === r ? Array.from(w) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? iw(w, n) : undefined;
      }
    }
    function iw(w, n) {
      (null == n || n > w.length) && (n = w.length);
      for (var r = 0, t = Array(n); r < n; r++) t[r] = w[r];
      return t;
    }
    function iB(w, c) {
      var n = null == w ? null : "undefined" != typeof Symbol && w[Symbol.iterator] || w["@@iterator"];
      if (null != n) {
        var r,
          t,
          x,
          e,
          o = [],
          u = true,
          f = false;
        try {
          if (x = (n = n.call(w)).next, 0 === c) {
            if (Object(n) !== n) return;
            u = false;
          } else for (; !(u = (r = x.call(n)).done) && (o.push(r.value), o.length !== c); u = true) {}
        } catch (w) {
          f = true;
          t = w;
        } finally {
          try {
            if (!u && null != n.return && (e = n.return(), Object(e) !== e)) return;
          } finally {
            if (f) throw t;
          }
        }
        return o;
      }
    }
    function iN(w) {
      if (Array.isArray(w)) return w;
    }
    function iP(w, c, n, r, t, x, e) {
      try {
        var o = w[x](e),
          u = o.value;
      } catch (w) {
        return void n(w);
      }
      o.done ? c(u) : Promise.resolve(u).then(r, t);
    }
    function j0(w) {
      return function () {
        var r = this,
          t = arguments;
        return new Promise(function (n, x) {
          var o = w.apply(r, t);
          function u(w) {
            iP(o, n, x, u, f, "next", w);
          }
          function f(w) {
            iP(o, n, x, u, f, "throw", w);
          }
          u(undefined);
        });
      };
    }
    var jG = new Env("𝐓𝐈𝐃𝐀𝐋"),
      jH = "tidal_".concat(jG.time("yyyyMM"), "_notified"),
      jI = "https://free.yuhengy17.me/api/v2/";
    function k7() {
      return k8.apply(this, arguments);
    }
    function k8() {
      return (k8 = j0(dQ().mark(function c() {
        var n, r;
        return dQ().wrap(function (w) {
          for (;;) switch (w.prev = w.next) {
            case 0:
              n = $request.method.toLowerCase();
              r = {
                url: $request.url,
                headers: $request.headers
              };
              n == "post" && Object.assign(r, {
                body: $request.body
              });
              w.next = 5;
              return jG.http[n];
            case 5:
              return w.abrupt("return", w.sent);
            case 6:
            case "end":
              return w.stop();
          }
        }, c);
      }))).apply(this, arguments);
    }
    function kj() {
      jG.done(jG.isQuanX() ? $response : {
        response: $response
      });
    }
    function kk(w) {
      return {
        key: w.replace(/.*\$(.*)\$.*/, "$1"),
        data: w.replace(/\$(.*)\$/, "")
      };
    }
    function ko(w) {
      return jG.CryptoJS.enc.Base64.stringify(jG.CryptoJS.enc.Utf8.parse(w));
    }
    function kq(w, c) {
      var n = jG.CryptoJS.AES.decrypt(w, jG.CryptoJS.enc.Utf8.parse(c), {
        mode: jG.CryptoJS.mode.ECB,
        padding: jG.CryptoJS.pad.Pkcs7
      });
      return jG.CryptoJS.enc.Utf8.stringify(n).toString();
    }
    function ku() {
      return kv.apply(this, arguments);
    }
    function kv() {
      return (kv = j0(dQ().mark(function c() {
        var n, r, t, x, e;
        return dQ().wrap(function (c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              n = ["本脚本仅用于技术学习，禁止非法使用。", "不得将本脚本用于任何商业或违法用途，违者后果自负。", "在中国大陆地区，严禁传播本脚本。", "开发者不对脚本的滥用承担任何责任。", "违规使用导致的后果由使用者自行承担。", "如有违反相关法规，将立即删除本脚本。", "使用者若违反声明规定，将自动视为放弃使用权。", "本声明的最终解释权归开发者所有。"];
              r = "https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json";
              c.prev = 2;
              c.next = 5;
              return jG.http.get(r);
            case 5:
              t = c.sent;
              x = t.body;
              n = jG.toObj(x);
              jG.log("获取远程生命成功");
              c.next = 14;
              break;
            case 11:
              c.prev = 11;
              c.t0 = c.catch(2);
              jG.log("获取远程生命失败, 使用本地声明");
            case 14:
              jG.setdata("true", jH);
              e = jG.time("yyyyMM", new Date(new Date().setMonth(new Date().getMonth() - 1)));
              jG.setdata(null, "tidal_".concat(e, "_notified"));
              return c.abrupt("return", n.join("\n"));
            case 18:
            case "end":
              return c.stop();
          }
        }, c, null, [[2, 11]]);
      }))).apply(this, arguments);
    }
    function kF(w, c, n, r) {
      return kK.apply(this, arguments);
    }
    function kK() {
      kK = j0(dQ().mark(function _callee5(kQ, kR, kS, kT) {
        var l1, l2, l3, l4;
        return dQ().wrap(function _callee5$(l5) {
          for (;;) switch (l5.prev = l5.next) {
            case 0:
              if (l1 = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : c6.g, !jG.isNode()) {
                l5.next = 20;
                break;
              }
              if (!kT) {
                l5.next = 15;
                break;
              }
              jG.debug("【".concat(kS, "】使用 'require' 导入模块 ").concat(kT));
              l5.prev = 4;
              l2 = c6(589)(kT);
              jG[kS] = l2;
              return l5.abrupt("return");
            case 10:
              l5.prev = 10;
              l5.t0 = l5.catch(4);
              jG.error("【".concat(kS, "】导入模块 ").concat(kT, " 失败, 请检查模块名或检查是否安装该依赖..."));
            case 13:
              l5.next = 19;
              break;
            case 15:
              if (jG.debug("【".concat(kS, "】没有传入模块名称, 不使用 'require' 导入")), !l1[kS]) {
                l5.next = 19;
                break;
              }
              jG.debug("【".concat(kS, "】环境自带库, 已加载成功 🎉"));
              jG[kS] = l1[kS];
              return l5.abrupt("return");
            case 19:
              !jG[kS] || jG.debug("【".concat(kS, "】使用远程加载..."));
            case 20:
              if (jG.debug("【".concat(kS, "】正在从远程拉取脚本: ").concat(kQ)), l3 = jG.getval("".concat(kS, ".js")), l4 = function l4(kQ) {
                eval(kQ);
                jG[kS] = kR ? eval(kR)() : l1[kS];
                !jG[kS] || jG.debug("【".concat(kS, "】加载成功 🎉"));
              }, !l3) {
                l5.next = 26;
                break;
              }
              jG.debug("【".concat(kS, "】缓存存在, 尝试加载..."));
              l4(l3);
              l5.next = 28;
              break;
            case 26:
              l5.next = 28;
              return jG.http.get({
                url: kQ,
                timeout: 2000
              }).then(function (w) {
                var c = w.body;
                l4(c);
                jG.setval(c, "".concat(kS, ".js"));
                jG.debug("【".concat(kS, "】已存入缓存 🎉"));
              }).catch(function () {
                return Promise.reject(new Error("【".concat(kS, "】远程拉取失败, 请检查网络...")));
              });
            case 28:
            case "end":
              return l5.stop();
          }
        }, _callee5, null, [[4, 10]]);
      }));
      return kK.apply(this, arguments);
    }
    $response = typeof $response === "undefined" ? {
      status: jG.isQuanX() ? "HTTP/1.1 200 OK" : 200,
      headers: typeof $request === "undefined" ? {} : $request.headers,
      body: ""
    } : $response;
    j0(dQ().mark(function w() {
      var n, r, t, x, e, o, u, f, i, D;
      return dQ().wrap(function (w) {
        for (;;) switch (w.prev = w.next) {
          case 0:
            if (!(jG.getdata(jH) == "true")) {
              w.next = 4;
              break;
            }
            jG.debug("本月已通知过，本次不再通知");
            w.next = 11;
            break;
          case 4:
            w.t0 = jG;
            w.t1 = jG.name;
            w.next = 8;
            return ku();
          case 8:
            w.t2 = w.sent;
            w.t3 = {
              $open: "https://t.me/yqc_123/",
              $media: "https://raw.githubusercontent.com/Yuheng0101/X/main/Assets/tidal.jpg"
            };
            w.t0.msg.call(w.t0, w.t1, "脚本声明", w.t2, w.t3);
          case 11:
            w.next = 13;
            return kF("https://raw.githubusercontent.com/Yuheng0101/X/main/Utils/CryptoJS.min.js", "createCryptoJS", "CryptoJS", "crypto-js");
          case 13:
            n = Object.fromEntries(Object.entries($request.headers).map(function (w) {
              var n = io(w, 2),
                r = n[0],
                t = n[1];
              return [r.toLowerCase(), t];
            }));
            r = ko(jG.toStr({
              url: $request.url,
              headers: n
            }));
            t = {
              url: "".concat(jI, "?q=").concat(r),
              headers: {
                "x-id": "tidal"
              }
            };
            w.prev = 16;
            w.next = 19;
            return jG.http.get(t);
          case 19:
            if (x = w.sent, e = x.body, o = jG.toObj(e), (o === null || o === undefined ? undefined : o.code) === 200) for (var a = "0|2|1|3|4".split("|"), s = 0;;) {
              switch (a[s++]) {
                case "0":
                  u = kk(o.data);
                  f = u.key;
                  i = u.data;
                  continue;
                case "1":
                  $response.body = jG.toStr(D.data);
                  continue;
                case "2":
                  D = jG.toObj(kq(i, f));
                  continue;
                case "3":
                  $response.headers = D.headers;
                  continue;
                case "4":
                  kj();
                  continue;
              }
              break;
            } else jG.log("接口响应失败: ".concat(o.message));
            w.next = 28;
            break;
          case 25:
            w.prev = 25;
            w.t4 = w.catch(16);
            jG.log("网络请求失败", w.t4.message);
          case 28:
          case "end":
            return w.stop();
        }
      }, w, null, [[16, 25]]);
    }))().catch(function (w) {
      return jG.logErr(w);
    }).finally(j0(dQ().mark(function w() {
      var n;
      return dQ().wrap(function (w) {
        for (;;) switch (w.prev = w.next) {
          case 0:
            w.next = 2;
            return k7();
          case 2:
            n = w.sent;
            $response.body = n.body;
            kj();
          case 5:
          case "end":
            return w.stop();
        }
      }, w);
    })));
  })();
})();