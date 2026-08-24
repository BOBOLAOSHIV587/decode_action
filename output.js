//Mon Aug 24 2026 15:43:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  "use strict";

  const _0x476693 = (() => {
    const _0x42b40a = _0xd85958 => _0xd85958 in globalThis;
    switch (true) {
      case _0x42b40a("$task"):
        return "Quantumult X";
      case _0x42b40a("$loon"):
        return "Loon";
      case _0x42b40a("$rocket"):
        return "Shadowrocket";
      case _0x42b40a("Egern"):
        return "Egern";
      case Boolean(globalThis.$environment?.["surge-version"]):
        return "Surge";
      case Boolean(globalThis.$environment?.["stash-version"]):
        return "Stash";
      case _0x42b40a("Cloudflare"):
        return "Worker";
      case Boolean(globalThis.process?.["versions"]?.["node"]):
        return "Node.js";
      default:
        return;
    }
  })();
  class _0x406dae {
    static #e = new Map([]);
    static #t = [];
    static #r = new Map([]);
    static clear = () => {};
    static count = (_0x543190 = "default") => {
      switch (_0x406dae.#e.has(_0x543190)) {
        case true:
          _0x406dae.#e.set(_0x543190, _0x406dae.#e.get(_0x543190) + 1);
          break;
        case false:
          _0x406dae.#e.set(_0x543190, 0);
      }
      _0x406dae.log(_0x543190 + ": " + _0x406dae.#e.get(_0x543190));
    };
    static countReset = (_0xbd8392 = "default") => {
      switch (_0x406dae.#e.has(_0xbd8392)) {
        case true:
          _0x406dae.#e.set(_0xbd8392, 0);
          _0x406dae.log(_0xbd8392 + ": " + _0x406dae.#e.get(_0xbd8392));
          break;
        case false:
          _0x406dae.warn("Counter \"" + _0xbd8392 + "\" doesn’t exist");
      }
    };
    static debug = (..._0x6eb401) => {
      _0x406dae.#a < 4 || (_0x6eb401 = _0x6eb401.map(_0x28736c => "🅱️ " + _0x28736c), _0x406dae.log(..._0x6eb401));
    };
    static error(..._0x264aff) {
      if (!(_0x406dae.#a < 1)) {
        switch (_0x476693) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            _0x264aff = _0x264aff.map(_0x2ebe0a => "❌ " + _0x2ebe0a);
            break;
          case "Worker":
          case "Node.js":
            _0x264aff = _0x264aff.map(_0x2485d8 => "❌ " + (_0x2485d8?.["stack"] ?? _0x2485d8));
        }
        _0x406dae.log(..._0x264aff);
      }
    }
    static exception = (..._0x35456a) => _0x406dae.error(..._0x35456a);
    static group = _0x58c35f => _0x406dae.#t.unshift(_0x58c35f);
    static groupEnd = () => _0x406dae.#t.shift();
    static info(..._0x23d549) {
      _0x406dae.#a < 3 || (_0x23d549 = _0x23d549.map(_0x33c395 => "ℹ️ " + _0x33c395), _0x406dae.log(..._0x23d549));
    }
    static #a = 3;
    static get logLevel() {
      switch (_0x406dae.#a) {
        case 0:
          return "OFF";
        case 1:
          return "ERROR";
        case 2:
          return "WARN";
        case 3:
        default:
          return "INFO";
        case 4:
          return "DEBUG";
        case 5:
          return "ALL";
      }
    }
    static set logLevel(_0x3b268a) {
      switch (typeof _0x3b268a) {
        case "string":
          _0x3b268a = _0x3b268a.toLowerCase();
          break;
        case "number":
          break;
        default:
          _0x3b268a = "warn";
      }
      switch (_0x3b268a) {
        case 0:
        case "off":
          _0x406dae.#a = 0;
          break;
        case 1:
        case "error":
          _0x406dae.#a = 1;
          break;
        case 2:
        case "warn":
        case "warning":
        default:
          _0x406dae.#a = 2;
          break;
        case 3:
        case "info":
          _0x406dae.#a = 3;
          break;
        case 4:
        case "debug":
          _0x406dae.#a = 4;
          break;
        case 5:
        case "all":
          _0x406dae.#a = 5;
      }
    }
    static log = (..._0x505861) => {
      0 !== _0x406dae.#a && (_0x505861 = _0x505861.map(_0x264502 => {
        switch (typeof _0x264502) {
          case "object":
            _0x264502 = JSON.stringify(_0x264502);
            break;
          case "bigint":
          case "number":
          case "boolean":
          case "string":
            _0x264502 = _0x264502.toString();
        }
        return _0x264502;
      }), _0x406dae.#t.forEach(_0x1f9d05 => {
        _0x505861 = _0x505861.map(_0x4d2b89 => "  " + _0x4d2b89);
        _0x505861.unshift("▼ " + _0x1f9d05 + ":");
      }), _0x505861 = ["", ..._0x505861], console.log(_0x505861.join("\n")));
    };
    static time = (_0x21ef1d = "default") => _0x406dae.#r.set(_0x21ef1d, Date.now());
    static timeEnd = (_0x42ebd1 = "default") => _0x406dae.#r.delete(_0x42ebd1);
    static timeLog = (_0x324986 = "default") => {
      const _0x186049 = _0x406dae.#r.get(_0x324986);
      _0x186049 ? _0x406dae.log(_0x324986 + ": " + (Date.now() - _0x186049) + "ms") : _0x406dae.warn("Timer \"" + _0x324986 + "\" doesn’t exist");
    };
    static warn(..._0x8ca3f8) {
      _0x406dae.#a < 2 || (_0x8ca3f8 = _0x8ca3f8.map(_0x18f0b8 => "⚠️ " + _0x18f0b8), _0x406dae.log(..._0x8ca3f8));
    }
  }
  class _0xac9f2e {
    static escape(_0x4fd31c) {
      const _0x1a4106 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      return _0x4fd31c.replace(/[&<>"']/g, _0x5ebe82 => _0x1a4106[_0x5ebe82]);
    }
    static get(_0x31137d = {}, _0x543978 = "", _0x5be1fd = undefined) {
      Array.isArray(_0x543978) || (_0x543978 = _0xac9f2e.toPath(_0x543978));
      const _0x52ba60 = _0x543978.reduce((_0x1e5f71, _0xec74fe) => Object(_0x1e5f71)[_0xec74fe], _0x31137d);
      return undefined === _0x52ba60 ? _0x5be1fd : _0x52ba60;
    }
    static merge(_0x570bd0, ..._0x369f73) {
      if (null == _0x570bd0) {
        return _0x570bd0;
      }
      for (const _0x27eaa1 of _0x369f73) if (null != _0x27eaa1) {
        for (const _0x1a9370 of Object.keys(_0x27eaa1)) {
          const _0x2655fc = _0x27eaa1[_0x1a9370];
          const _0x517f9b = _0x570bd0[_0x1a9370];
          switch (true) {
            case _0xac9f2e.#o(_0x2655fc) && _0xac9f2e.#o(_0x517f9b):
              _0x570bd0[_0x1a9370] = _0xac9f2e.merge(_0x517f9b, _0x2655fc);
              break;
            case _0x2655fc instanceof Map && _0x517f9b instanceof Map:
              if (_0x2655fc.size > 0) {
                for (const [_0x21dbc7, _0x5d5a3f] of _0x2655fc) _0x517f9b.set(_0x21dbc7, _0x5d5a3f);
              }
              break;
            case _0x2655fc instanceof Set && _0x517f9b instanceof Set:
              if (_0x2655fc.size > 0) {
                for (const _0x4f4066 of _0x2655fc) _0x517f9b.add(_0x4f4066);
              }
              break;
            case Array.isArray(_0x2655fc) && 0 === _0x2655fc.length && undefined !== _0x517f9b:
            case _0x2655fc instanceof Map && 0 === _0x2655fc.size && undefined !== _0x517f9b:
            case _0x2655fc instanceof Set && 0 === _0x2655fc.size && undefined !== _0x517f9b:
              break;
            case undefined !== _0x2655fc:
              _0x570bd0[_0x1a9370] = _0x2655fc;
          }
        }
      }
      return _0x570bd0;
    }
    static #o(_0x469c3a) {
      if (null === _0x469c3a || "object" != typeof _0x469c3a) {
        return false;
      }
      const _0x2cf2ed = Object.getPrototypeOf(_0x469c3a);
      return null === _0x2cf2ed || _0x2cf2ed === Object.prototype;
    }
    static omit(_0x1f1c1e = {}, _0x19bce8 = []) {
      Array.isArray(_0x19bce8) || (_0x19bce8 = [_0x19bce8.toString()]);
      _0x19bce8.forEach(_0x528fd1 => _0xac9f2e.unset(_0x1f1c1e, _0x528fd1));
      return _0x1f1c1e;
    }
    static pick(_0x517ed3 = {}, _0x488981 = []) {
      Array.isArray(_0x488981) || (_0x488981 = [_0x488981.toString()]);
      const _0x276196 = Object.entries(_0x517ed3).filter(([_0x42b4ef, _0x11b0e7]) => _0x488981.includes(_0x42b4ef));
      return Object.fromEntries(_0x276196);
    }
    static set(_0x3135ae, _0x27823b, _0x7d9923) {
      Array.isArray(_0x27823b) || (_0x27823b = _0xac9f2e.toPath(_0x27823b));
      _0x27823b.slice(0, -1).reduce((_0x5a3f74, _0x5d455f, _0x20d955) => Object(_0x5a3f74[_0x5d455f]) === _0x5a3f74[_0x5d455f] ? _0x5a3f74[_0x5d455f] : _0x5a3f74[_0x5d455f] = /^\d+$/.test(_0x27823b[_0x20d955 + 1]) ? [] : {}, _0x3135ae)[_0x27823b[_0x27823b.length - 1]] = _0x7d9923;
      return _0x3135ae;
    }
    static toPath(_0x51b3e8) {
      return _0x51b3e8.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    }
    static unescape(_0x4eef3d) {
      const _0x4fe287 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      return _0x4eef3d.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, _0x44dcb9 => _0x4fe287[_0x44dcb9]);
    }
    static unset(_0x40cb48 = {}, _0x3e13a8 = "") {
      Array.isArray(_0x3e13a8) || (_0x3e13a8 = _0xac9f2e.toPath(_0x3e13a8));
      const _0x5be3e4 = _0x3e13a8.reduce((_0x2397f6, _0x57b7c5, _0x3e72b1) => _0x3e72b1 === _0x3e13a8.length - 1 ? (delete _0x2397f6[_0x57b7c5], true) : Object(_0x2397f6)[_0x57b7c5], _0x40cb48);
      return _0x5be3e4;
    }
  }
  class _0xdd1d77 {
    static parse(_0x51bc01) {
      let _0xb19efa = {};
      switch (typeof _0x51bc01) {
        case "string":
          {
            const _0x15bd9a = Object.fromEntries(_0x51bc01.split("&").map(_0x7e1164 => _0x7e1164.split("=", 2).map(_0x1f9775 => _0x1f9775.replace(/\"/g, ""))));
            Object.keys(_0x15bd9a).forEach(_0x3ea14d => _0xac9f2e.set(_0xb19efa, _0x3ea14d, _0x15bd9a[_0x3ea14d]));
            break;
          }
        case "object":
          switch (_0x51bc01) {
            case null:
              break;
            default:
              {
                const _0x13eb7d = {};
                Object.keys(_0x51bc01).forEach(_0xd965e7 => _0xac9f2e.set(_0x13eb7d, _0xd965e7, _0x51bc01[_0xd965e7]));
                _0xb19efa = _0x13eb7d;
                break;
              }
          }
          break;
        case "undefined":
          _0xb19efa = {};
      }
      return _0xb19efa;
    }
    static stringify(_0x5087f5 = {}) {
      if (!_0x5087f5 || "object" != typeof _0x5087f5) {
        return "";
      }
      const _0x2157c7 = [];
      Object.keys(_0x5087f5).forEach(_0x570bff => _0xdd1d77.#n(_0x5087f5, _0x570bff, _0x2157c7));
      return 0 === _0x2157c7.length ? "" : _0x2157c7.map(([_0x4ac7fc, _0x30bebe]) => _0xdd1d77.#i(_0xdd1d77.#s(_0x4ac7fc)) + "=" + _0xdd1d77.#i(_0x30bebe)).join("&");
    }
    static #n(_0x550f8c, _0x583fa5, _0x263005) {
      const _0x295c46 = _0xac9f2e.get(_0x550f8c, _0x583fa5);
      undefined !== _0x295c46 && (null !== _0x295c46 ? Array.isArray(_0x295c46) ? _0x295c46.forEach((_0x54931b, _0x3dcf4d) => {
        undefined !== _0x54931b && _0xdd1d77.#n(_0x550f8c, _0x583fa5 + "[" + _0x3dcf4d + "]", _0x263005);
      }) : _0xdd1d77.#o(_0x295c46) ? Object.keys(_0x295c46).forEach(_0x2f500a => _0xdd1d77.#n(_0x550f8c, _0x583fa5 + "." + _0x2f500a, _0x263005)) : _0x263005.push([_0x583fa5, String(_0x295c46)]) : _0x263005.push([_0x583fa5, ""]));
    }
    static #s(_0x39686b) {
      const [_0x215f2e, ..._0x323c7b] = _0xac9f2e.toPath(_0x39686b);
      return _0x323c7b.reduce((_0x12fa63, _0xffc664) => /^\d+$/.test(_0xffc664) ? _0x12fa63 + "[" + _0xffc664 + "]" : _0x12fa63 + "." + _0xffc664, _0x215f2e);
    }
    static #o(_0x397f79) {
      if (null === _0x397f79 || "object" != typeof _0x397f79 || Array.isArray(_0x397f79)) {
        return false;
      }
      const _0xc8c465 = Object.getPrototypeOf(_0x397f79);
      return null === _0xc8c465 || _0xc8c465 === Object.prototype;
    }
    static #i(_0x12538b) {
      return encodeURIComponent(_0x12538b);
    }
  }
  _0x406dae.debug("☑️ $argument");
  globalThis.$argument = _0xdd1d77.parse(globalThis.$argument);
  globalThis.$argument.LogLevel && (_0x406dae.logLevel = globalThis.$argument.LogLevel);
  _0x406dae.debug("✅ $argument", "$argument: " + JSON.stringify(globalThis.$argument));
  const _0x44f1c2 = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "103": "Early Hints",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-Authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "304": "Not Modified",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Content Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Too Early",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "451": "Unavailable For Legal Reasons",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "510": "Not Extended",
    "511": "Network Authentication Required"
  };
  function _0x5e9fc7(_0x150fe6 = "ℹ️ " + _0x476693 + " 通知", _0x2d37fd = "", _0x41e5a2 = "", _0x18c9bd = {}) {
    const _0x16db0b = _0x11b0f0(_0x18c9bd);
    switch (_0x476693) {
      case "Surge":
      case "Loon":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        $notification.post(_0x150fe6, _0x2d37fd, _0x41e5a2, _0x16db0b);
        break;
      case "Quantumult X":
        $notify(_0x150fe6, _0x2d37fd, _0x41e5a2, _0x16db0b);
      case "Worker":
      case "Node.js":
    }
    _0x406dae.group("📣 系统通知");
    _0x406dae.log(_0x150fe6, _0x2d37fd, _0x41e5a2, JSON.stringify(_0x16db0b, null, 2));
    _0x406dae.groupEnd();
  }
  const _0x11b0f0 = _0xfb7a5d => {
    const _0x34d420 = {};
    switch (typeof _0xfb7a5d) {
      case undefined:
        break;
      case "string":
      case "number":
      case "boolean":
        switch (_0x476693) {
          case "Surge":
          case "Stash":
          case "Egern":
          default:
            _0x34d420.url = _0xfb7a5d;
            break;
          case "Loon":
          case "Shadowrocket":
            _0x34d420.openUrl = _0xfb7a5d;
            break;
          case "Quantumult X":
            _0x34d420["open-url"] = _0xfb7a5d;
          case "Worker":
          case "Node.js":
        }
        break;
      case "object":
        {
          const _0x4a8e20 = _0xfb7a5d.open || _0xfb7a5d["open-url"] || _0xfb7a5d.url || _0xfb7a5d.openUrl;
          const _0x437bef = _0xfb7a5d.copy || _0xfb7a5d["update-pasteboard"] || _0xfb7a5d.updatePasteboard;
          const _0x31a6d9 = _0xfb7a5d.media || _0xfb7a5d["media-url"] || _0xfb7a5d.mediaUrl;
          switch (_0x476693) {
            case "Surge":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            default:
              if (_0x4a8e20 && (_0x34d420.action = "open-url", _0x34d420.url = _0x4a8e20), _0x437bef && (_0x34d420.action = "clipboard", _0x34d420.text = _0x437bef), _0x31a6d9) {
                switch (true) {
                  case _0x31a6d9.startsWith("http"):
                    _0x34d420["media-url"] = _0x31a6d9;
                    break;
                  case _0x31a6d9.startsWith("data:"):
                    {
                      const _0x1bc054 = /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/;
                      const {
                        MIME: _0x1d1f9d,
                        Base64: _0x52b6ea
                      } = _0x31a6d9.match(_0x1bc054).groups;
                      _0x34d420["media-base64"] = _0x52b6ea;
                      _0x34d420["media-base64-mime"] = _0xfb7a5d.mime || _0x1d1f9d;
                      break;
                    }
                  default:
                    switch (_0x34d420["media-base64"] = _0x31a6d9, true) {
                      case _0x31a6d9.startsWith("CiVQREYt"):
                      case _0x31a6d9.startsWith("JVBERi0"):
                        _0x34d420["media-base64-mime"] = "application/pdf";
                        break;
                      case _0x31a6d9.startsWith("R0lGODdh"):
                      case _0x31a6d9.startsWith("R0lGODlh"):
                        _0x34d420["media-base64-mime"] = "image/gif";
                        break;
                      case _0x31a6d9.startsWith("iVBORw0KGgo"):
                        _0x34d420["media-base64-mime"] = "image/png";
                        break;
                      case _0x31a6d9.startsWith("/9j/"):
                        _0x34d420["media-base64-mime"] = "image/jpg";
                        break;
                      case _0x31a6d9.startsWith("Qk02U"):
                        _0x34d420["media-base64-mime"] = "image/bmp";
                    }
                }
              }
              _0xfb7a5d["auto-dismiss"] && (_0x34d420["auto-dismiss"] = _0xfb7a5d["auto-dismiss"]);
              _0xfb7a5d.sound && (_0x34d420.sound = _0xfb7a5d.sound);
              break;
            case "Loon":
              _0x4a8e20 && (_0x34d420.openUrl = _0x4a8e20);
              _0x31a6d9?.["startsWith"]("http") && (_0x34d420.mediaUrl = _0x31a6d9);
              break;
            case "Quantumult X":
              _0x4a8e20 && (_0x34d420["open-url"] = _0x4a8e20);
              _0x31a6d9?.["startsWith"]("http") && (_0x34d420["media-url"] = _0x31a6d9);
              _0x437bef && (_0x34d420["update-pasteboard"] = _0x437bef);
            case "Worker":
            case "Node.js":
          }
          break;
        }
      default:
        _0x406dae.error("不支持的通知参数类型: " + typeof _0xfb7a5d, "");
    }
    return _0x34d420;
  };
  async function _0x5abeee(_0x4c5655, _0x5da398 = {}) {
    switch (typeof _0x4c5655) {
      case "object":
        _0x4c5655 = {
          ..._0x5da398,
          ..._0x4c5655
        };
        break;
      case "string":
        _0x4c5655 = {
          ..._0x5da398,
          url: _0x4c5655
        };
        break;
      default:
        throw new TypeError(Function.name + ": 参数类型错误, resource 必须为对象或字符串");
    }
    _0x4c5655.method || (_0x4c5655.method = "GET", (_0x4c5655.body ?? _0x4c5655.bodyBytes) && (_0x4c5655.method = "POST"));
    delete _0x4c5655.headers?.["Host"];
    delete _0x4c5655.headers?.[":authority"];
    delete _0x4c5655.headers?.["Content-Length"];
    delete _0x4c5655.headers?.["content-length"];
    const _0x3f87d3 = _0x4c5655.method.toLocaleLowerCase();
    if (_0x4c5655.timeout || (_0x4c5655.timeout = 5), _0x4c5655.timeout && (_0x4c5655.timeout = Number.parseInt(_0x4c5655.timeout, 10), _0x4c5655.timeout > 500 && (_0x4c5655.timeout = Math.round(_0x4c5655.timeout / 1000))), _0x4c5655.timeout) {
      switch (_0x476693) {
        case "Loon":
        case "Quantumult X":
        case "Worker":
        case "Node.js":
          _0x4c5655.timeout = 1000 * _0x4c5655.timeout;
      }
    }
    switch (_0x476693) {
      case "Loon":
      case "Surge":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        if (_0x4c5655.policy) {
          switch (_0x476693) {
            case "Loon":
              _0x4c5655.node = _0x4c5655.policy;
              break;
            case "Stash":
              _0xac9f2e.set(_0x4c5655, "headers.X-Stash-Selected-Proxy", encodeURI(_0x4c5655.policy));
              break;
            case "Shadowrocket":
              _0xac9f2e.set(_0x4c5655, "headers.X-Surge-Proxy", _0x4c5655.policy);
          }
        }
        switch ("boolean" == typeof _0x4c5655.redirection && (_0x4c5655["auto-redirect"] = _0x4c5655.redirection), _0x4c5655.bodyBytes && !_0x4c5655.body && (_0x4c5655.body = _0x4c5655.bodyBytes, _0x4c5655.bodyBytes = undefined), (_0x4c5655.headers?.["Accept"] || _0x4c5655.headers?.["accept"])?.["split"](";")?.[0]) {
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/vnd.apple.flatbuffer":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream":
            _0x4c5655["binary-mode"] = true;
        }
        return new Promise((_0x3f41a7, _0xb70e81) => {
          globalThis.$httpClient[_0x3f87d3](_0x4c5655, (_0x8c0f4, _0x1d761a, _0x41a1ab) => {
            _0x8c0f4 ? _0xb70e81(_0x8c0f4) : (_0x1d761a.ok = /^2\d\d$/.test(_0x1d761a.status), _0x1d761a.statusCode = _0x1d761a.status, _0x1d761a.statusText = _0x44f1c2[_0x1d761a.status], _0x41a1ab && (_0x1d761a.body = _0x41a1ab, 1 == _0x4c5655["binary-mode"] && (_0x1d761a.bodyBytes = _0x41a1ab)), _0x3f41a7(_0x1d761a));
          });
        });
      case "Quantumult X":
        _0x4c5655.policy && _0xac9f2e.set(_0x4c5655, "opts.policy", _0x4c5655.policy);
        "boolean" == typeof _0x4c5655["auto-redirect"] && _0xac9f2e.set(_0x4c5655, "opts.redirection", _0x4c5655["auto-redirect"]);
        _0x4c5655.body instanceof ArrayBuffer ? (_0x4c5655.bodyBytes = _0x4c5655.body, _0x4c5655.body = undefined) : ArrayBuffer.isView(_0x4c5655.body) ? (_0x4c5655.bodyBytes = _0x4c5655.body.buffer.slice(_0x4c5655.body.byteOffset, _0x4c5655.body.byteLength + _0x4c5655.body.byteOffset), _0x4c5655.body = undefined) : _0x4c5655.body && (_0x4c5655.bodyBytes = undefined);
        return Promise.race([globalThis.$task.fetch(_0x4c5655).then(_0x1f8776 => {
          switch (_0x1f8776.ok = /^2\d\d$/.test(_0x1f8776.statusCode), _0x1f8776.status = _0x1f8776.statusCode, _0x1f8776.statusText = _0x44f1c2[_0x1f8776.status], (_0x1f8776.headers?.["Content-Type"] ?? _0x1f8776.headers?.["content-type"])?.["split"](";")?.[0]) {
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/vnd.apple.flatbuffer":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              _0x1f8776.body = _0x1f8776.bodyBytes;
          }
          _0x1f8776.bodyBytes = undefined;
          return _0x1f8776;
        }, _0x5abac3 => Promise.reject(_0x5abac3.error)), new Promise((_0x3fd0e5, _0x4ed53b) => {
          setTimeout(() => {
            _0x4ed53b(new Error(Function.name + ": 请求超时, 请检查网络后重试"));
          }, _0x4c5655.timeout);
        })]);
      case "Worker":
      case "Node.js":
        {
          switch (globalThis.fetch || (globalThis.fetch = require("node-fetch")), _0x4c5655["auto-cookie"]) {
            case undefined:
            case "true":
            case true:
            case "1":
            case 1:
            default:
              globalThis.fetch?.["cookieJar"] || (globalThis.fetch = require("fetch-cookie").default(globalThis.fetch));
            case "false":
            case false:
            case "0":
            case 0:
            case "-1":
            case -1:
          }
          _0x4c5655.redirect = _0x4c5655.redirection ? "follow" : "manual";
          const {
            url: _0x149593,
            ..._0x15da2a
          } = _0x4c5655;
          return Promise.race([globalThis.fetch(_0x149593, _0x15da2a).then(async _0x5e9483 => {
            const _0x10a04e = await _0x5e9483.arrayBuffer();
            let _0x37addc;
            try {
              _0x37addc = _0x5e9483.headers.raw();
            } catch {
              _0x37addc = Array.from(_0x5e9483.headers.entries()).reduce((_0x526f43, [_0x38df69, _0x5ed1f7]) => (_0x526f43[_0x38df69] = _0x526f43[_0x38df69] ? [..._0x526f43[_0x38df69], _0x5ed1f7] : [_0x5ed1f7], _0x526f43), {});
            }
            return {
              ok: _0x5e9483.ok ?? /^2\d\d$/.test(_0x5e9483.status),
              status: _0x5e9483.status,
              statusCode: _0x5e9483.status,
              statusText: _0x5e9483.statusText,
              body: new TextDecoder("utf-8").decode(_0x10a04e),
              bodyBytes: _0x10a04e,
              headers: Object.fromEntries(Object.entries(_0x37addc).map(([_0x5a20c8, _0x5acdb4]) => [_0x5a20c8, "set-cookie" !== _0x5a20c8.toLowerCase() ? _0x5acdb4.toString() : _0x5acdb4]))
            };
          }).catch(_0x2f5a4f => Promise.reject(_0x2f5a4f.message)), new Promise((_0x19be71, _0x1a8a63) => {
            setTimeout(() => {
              _0x1a8a63(new Error(Function.name + ": 请求超时, 请检查网络后重试"));
            }, _0x4c5655.timeout);
          })]);
        }
    }
  }
  class _0x23eee5 {
    static data = null;
    static dataFile = "box.dat";
    static #c = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
    static getItem(_0x4f58eb, _0x56dd12 = null) {
      let _0x336b97 = _0x56dd12;
      switch (_0x4f58eb.startsWith("@")) {
        case true:
          {
            const {
              key: _0x4e08fd,
              path: _0x112838
            } = _0x4f58eb.match(_0x23eee5.#c)?.["groups"];
            _0x4f58eb = _0x4e08fd;
            let _0x1e8fe6 = _0x23eee5.getItem(_0x4f58eb, {});
            "object" != typeof _0x1e8fe6 && (_0x1e8fe6 = {});
            _0x336b97 = _0xac9f2e.get(_0x1e8fe6, _0x112838);
            try {
              _0x336b97 = JSON.parse(_0x336b97);
            } catch (_0x573acd) {}
            break;
          }
        default:
          switch (_0x476693) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              _0x336b97 = $persistentStore.read(_0x4f58eb);
              break;
            case "Quantumult X":
              _0x336b97 = $prefs.valueForKey(_0x4f58eb);
              break;
            case "Worker":
              _0x23eee5.data = _0x23eee5.data ?? {};
              _0x336b97 = _0x23eee5.data[_0x4f58eb];
              break;
            case "Node.js":
              _0x23eee5.data = _0x23eee5.#u(_0x23eee5.dataFile);
              _0x336b97 = _0x23eee5.data?.[_0x4f58eb];
              break;
            default:
              _0x336b97 = _0x23eee5.data?.[_0x4f58eb] || null;
          }
          try {
            _0x336b97 = JSON.parse(_0x336b97);
          } catch (_0x50a4eb) {}
      }
      return _0x336b97 ?? _0x56dd12;
    }
    static setItem(_0x2c7a87 = new String(), _0x12322b = new String()) {
      let _0x318eb0 = false;
      if ("object" == typeof _0x12322b) {
        _0x12322b = JSON.stringify(_0x12322b);
      } else {
        _0x12322b = String(_0x12322b);
      }
      switch (_0x2c7a87.startsWith("@")) {
        case true:
          {
            const {
              key: _0x4245f7,
              path: _0x5cd76a
            } = _0x2c7a87.match(_0x23eee5.#c)?.["groups"];
            _0x2c7a87 = _0x4245f7;
            let _0x493eb8 = _0x23eee5.getItem(_0x2c7a87, {});
            "object" != typeof _0x493eb8 && (_0x493eb8 = {});
            _0xac9f2e.set(_0x493eb8, _0x5cd76a, _0x12322b);
            _0x318eb0 = _0x23eee5.setItem(_0x2c7a87, _0x493eb8);
            break;
          }
        default:
          switch (_0x476693) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              _0x318eb0 = $persistentStore.write(_0x12322b, _0x2c7a87);
              break;
            case "Quantumult X":
              _0x318eb0 = $prefs.setValueForKey(_0x12322b, _0x2c7a87);
              break;
            case "Worker":
              _0x23eee5.data = _0x23eee5.data ?? {};
              _0x23eee5.data[_0x2c7a87] = _0x12322b;
              _0x318eb0 = true;
              break;
            case "Node.js":
              _0x23eee5.data = _0x23eee5.#u(_0x23eee5.dataFile);
              _0x23eee5.data[_0x2c7a87] = _0x12322b;
              _0x23eee5.#l(_0x23eee5.dataFile);
              _0x318eb0 = true;
              break;
            default:
              _0x318eb0 = _0x23eee5.data?.[_0x2c7a87] || null;
          }
      }
      return _0x318eb0;
    }
    static removeItem(_0x4dcb91) {
      let _0x1c8816 = false;
      switch (_0x4dcb91.startsWith("@")) {
        case true:
          {
            const {
              key: _0x3b8807,
              path: _0x160e5e
            } = _0x4dcb91.match(_0x23eee5.#c)?.["groups"];
            _0x4dcb91 = _0x3b8807;
            let _0x56150f = _0x23eee5.getItem(_0x4dcb91);
            "object" != typeof _0x56150f && (_0x56150f = {});
            keyValue = _0xac9f2e.unset(_0x56150f, _0x160e5e);
            _0x1c8816 = _0x23eee5.setItem(_0x4dcb91, _0x56150f);
            break;
          }
        default:
          switch (_0x476693) {
            case "Surge":
              _0x1c8816 = $persistentStore.write(null, _0x4dcb91);
              break;
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            default:
              _0x1c8816 = false;
              break;
            case "Quantumult X":
              _0x1c8816 = $prefs.removeValueForKey(_0x4dcb91);
              break;
            case "Worker":
              _0x23eee5.data = _0x23eee5.data ?? {};
              delete _0x23eee5.data[_0x4dcb91];
              _0x1c8816 = true;
              break;
            case "Node.js":
              _0x23eee5.data = _0x23eee5.#u(_0x23eee5.dataFile);
              delete _0x23eee5.data[_0x4dcb91];
              _0x23eee5.#l(_0x23eee5.dataFile);
              _0x1c8816 = true;
          }
      }
      return _0x1c8816;
    }
    static clear() {
      let _0x10bd9a = false;
      switch (_0x476693) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        default:
          _0x10bd9a = false;
          break;
        case "Quantumult X":
          _0x10bd9a = $prefs.removeAllValues();
          break;
        case "Worker":
          _0x23eee5.data = {};
          _0x10bd9a = true;
          break;
        case "Node.js":
          _0x23eee5.data = _0x23eee5.#u(_0x23eee5.dataFile);
          _0x23eee5.data = {};
          _0x23eee5.#l(_0x23eee5.dataFile);
          _0x10bd9a = true;
      }
      return _0x10bd9a;
    }
    static #u = _0x471155 => {
      if ("Node.js" !== _0x476693) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const _0x53941c = this.path.resolve(_0x471155);
        const _0x5b7a9a = this.path.resolve(process.cwd(), _0x471155);
        const _0x4e8f23 = this.fs.existsSync(_0x53941c);
        const _0x2850c5 = !_0x4e8f23 && this.fs.existsSync(_0x5b7a9a);
        if (!_0x4e8f23 && !_0x2850c5) {
          return {};
        }
        {
          const _0x2e8a23 = _0x4e8f23 ? _0x53941c : _0x5b7a9a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2e8a23));
          } catch (_0x1ed043) {
            return {};
          }
        }
      }
    };
    static #l = (_0x1d1174 = this.dataFile) => {
      if ("Node.js" === _0x476693) {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const _0x5b0644 = this.path.resolve(_0x1d1174);
        const _0x2979d6 = this.path.resolve(process.cwd(), _0x1d1174);
        const _0x47c707 = this.fs.existsSync(_0x5b0644);
        const _0x8f8199 = !_0x47c707 && this.fs.existsSync(_0x2979d6);
        const _0x1dbd1b = JSON.stringify(this.data);
        _0x47c707 ? this.fs.writeFileSync(_0x5b0644, _0x1dbd1b) : _0x8f8199 ? this.fs.writeFileSync(_0x2979d6, _0x1dbd1b) : this.fs.writeFileSync(_0x5b0644, _0x1dbd1b);
      }
    };
  }
  globalThis.$argument;
  function _0x4550fa(_0x573f96, _0xb65e7f) {
    return function (_0x23b79c) {
      if (Array.isArray(_0x23b79c)) {
        return _0x23b79c;
      }
    }(_0x573f96) || function (_0x9ec03f, _0x5bfd4e) {
      var _0x1de2f8 = null == _0x9ec03f ? null : "undefined" != typeof Symbol && _0x9ec03f[Symbol.iterator] || _0x9ec03f["@@iterator"];
      if (null != _0x1de2f8) {
        var _0x84b6f5;
        var _0x3effdc;
        var _0x452a6e;
        var _0x4ed262;
        var _0x39e304 = [];
        var _0x2b0303 = true;
        var _0x458968 = false;
        try {
          if (_0x452a6e = (_0x1de2f8 = _0x1de2f8.call(_0x9ec03f)).next, 0 === _0x5bfd4e) {
            if (Object(_0x1de2f8) !== _0x1de2f8) {
              return;
            }
            _0x2b0303 = false;
          } else {
            for (; !(_0x2b0303 = (_0x84b6f5 = _0x452a6e.call(_0x1de2f8)).done) && (_0x39e304.push(_0x84b6f5.value), _0x39e304.length !== _0x5bfd4e); _0x2b0303 = true) {}
          }
        } catch (_0x4b65d2) {
          _0x458968 = true;
          _0x3effdc = _0x4b65d2;
        } finally {
          try {
            if (!_0x2b0303 && null != _0x1de2f8.return && (_0x4ed262 = _0x1de2f8.return(), Object(_0x4ed262) !== _0x4ed262)) {
              return;
            }
          } finally {
            if (_0x458968) {
              throw _0x3effdc;
            }
          }
        }
        return _0x39e304;
      }
    }(_0x573f96, _0xb65e7f) || function (_0x24cc29, _0x170a56) {
      if (_0x24cc29) {
        if ("string" == typeof _0x24cc29) {
          return _0x456dd5(_0x24cc29, _0x170a56);
        }
        var _0x5788aa = {}.toString.call(_0x24cc29).slice(8, -1);
        "Object" === _0x5788aa && _0x24cc29.constructor && (_0x5788aa = _0x24cc29.constructor.name);
        return "Map" === _0x5788aa || "Set" === _0x5788aa ? Array.from(_0x24cc29) : "Arguments" === _0x5788aa || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x5788aa) ? _0x456dd5(_0x24cc29, _0x170a56) : undefined;
      }
    }(_0x573f96, _0xb65e7f) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x456dd5(_0x2c9d53, _0x9dca35) {
    (null == _0x9dca35 || _0x9dca35 > _0x2c9d53.length) && (_0x9dca35 = _0x2c9d53.length);
    for (var _0x3105a2 = 0, _0xaa1c7a = Array(_0x9dca35); _0x3105a2 < _0x9dca35; _0x3105a2++) {
      _0xaa1c7a[_0x3105a2] = _0x2c9d53[_0x3105a2];
    }
    return _0xaa1c7a;
  }
  var _0xc46d47 = function (_0x3535c4) {
    if ("string" == typeof _0x3535c4) {
      return _0x3535c4;
    }
    try {
      for (var _0x414c1c = arguments.length, _0x4f18f3 = new Array(_0x414c1c > 1 ? _0x414c1c - 1 : 0), _0x1d0dc3 = 1; _0x1d0dc3 < _0x414c1c; _0x1d0dc3++) {
        _0x4f18f3[_0x1d0dc3 - 1] = arguments[_0x1d0dc3];
      }
      return JSON.stringify.apply(JSON, [_0x3535c4].concat(_0x4f18f3));
    } catch (_0x1e65b6) {
      return _0x3535c4;
    }
  };
  function _0x4f0fdb(_0x15e74e, _0x376055) {
    return _0x376055 ? _0x15e74e.replace(/\/+$/, "") + "/" + _0x376055.replace(/^\/+/, "") : _0x15e74e;
  }
  function _0x19aa7a(_0x576511) {
    _0x19aa7a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0xf41799) {
      return typeof _0xf41799;
    } : function (_0x5ec6e8) {
      return _0x5ec6e8 && "function" == typeof Symbol && _0x5ec6e8.constructor === Symbol && _0x5ec6e8 !== Symbol.prototype ? "symbol" : typeof _0x5ec6e8;
    };
    return _0x19aa7a(_0x576511);
  }
  function _0x4c76fb(_0x1f41c5) {
    var _0x1b88ea = _0x1f41c5.LZ;
    var _0x3ad93f = _0x1f41c5.LJ;
    var _0x262046 = _0x1f41c5.LE;
    if (_0x1b88ea && _0x3ad93f && _0x262046) {
      var _0x216b8c = {
        name: "PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0xeb1714 = {
        name: "Chrome PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x126455 = {
        name: "Chromium PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x17dbb8 = {
        name: "Microsoft Edge PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x131eb0 = {
        name: "WebKit built-in PDF",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x2625bc = {
        details: [_0x216b8c, _0xeb1714, _0x126455, _0x17dbb8, _0x131eb0],
        names: ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"],
        fp: "9772d5556d57fcc8177f76029bfd92ef"
      };
      var _0x3a8b0a = {
        key: "plugins",
        value: _0x2625bc
      };
      var _0x188aa4 = {
        names: ["Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif", "MS Gothic", "MS PGothic", "MS Sans Serif", "MS Serif", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
        fp: "f730c0cc627b3b3d7db9f459836db692"
      };
      var _0x386812 = {
        key: "fonts",
        value: _0x188aa4
      };
      var _0x45e164 = {
        angle: 0,
        type: "landscape-primary"
      };
      var _0x119777 = {
        screenResolution: [1707, 1067],
        availableScreenResolution: [1707, 1027],
        colorDepth: 24,
        availTop: 0,
        availLeft: 0,
        isExtended: false,
        pixelDepth: 24,
        top: undefined,
        left: undefined,
        orientation: _0x45e164
      };
      var _0x55a635 = {
        key: "screenObject",
        value: _0x119777
      };
      var _0x584ee2 = {
        locale: "zh-CN",
        calendar: "gregory",
        numberingSystem: "latn",
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezoneOffset: -480
      };
      var _0x2dab91 = {
        key: "intlObject",
        value: _0x584ee2
      };
      var _0x47af60 = {
        key: "touchSupport",
        value: [0, false, false]
      };
      var _0x17947e = {
        key: "audio",
        value: "124.04347527516074"
      };
      var _0x42bd4a = {
        key: "webdriver",
        value: false
      };
      var _0x2af840 = {
        webgl_version: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
        webgl_vendor_and_renderer: "Google Inc. (Intel)~ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        webgl_unmasked_renderer: "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        webgl_unmasked_vendor: "Google Inc. (Intel)",
        webgl_aliased_point_size_range: [1, 1024],
        webgl_fragment_shader_medium_int_precision_rangeMax: 30,
        webgl_fragment_shader_medium_int_precision_rangeMin: 31,
        fp: "d8094cf352a36fe0b99dbff3c6db2c58"
      };
      var _0xb0f46c = {
        key: "webGL",
        value: _0x2af840
      };
      var _0x36cb21 = {
        canvas_winding: true,
        fp: "5fbf2146755f8f4c0e9d76a387926c42"
      };
      var _0x2383b1 = {
        key: "canvas",
        value: _0x36cb21
      };
      var _0x171c46 = {
        deviceMemory: 8,
        hardwareConcurrency: 16
      };
      var _0x14d7a4 = {
        key: "deviceInfos",
        value: _0x171c46
      };
      var _0x5da836 = {
        localStorage: true,
        openDatabase: false,
        indexedDb: true,
        sessionStorage: true,
        addBehavior: false
      };
      var _0x3a9773 = {
        key: "storageObject",
        value: _0x5da836
      };
      var _0x3e083d = {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        platform: "Win32",
        vendor: "Google Inc.",
        language: "zh-CN",
        languages: ["zh-CN", "zh"],
        productSub: "20030107"
      };
      var _0x5e4baf = {
        key: "navigatorObject",
        value: _0x3e083d
      };
      var _0x29ea7e = {
        eval_tostring_length: 33
      };
      var _0x5bd044 = {
        key: "functions",
        value: _0x29ea7e
      };
      var _0x272044 = function (_0x5def2c, _0x34d1b8) {
        _0x5def2c = [_0x5def2c[0] >>> 16, 65535 & _0x5def2c[0], _0x5def2c[1] >>> 16, 65535 & _0x5def2c[1]];
        _0x34d1b8 = [_0x34d1b8[0] >>> 16, 65535 & _0x34d1b8[0], _0x34d1b8[1] >>> 16, 65535 & _0x34d1b8[1]];
        var _0x4bebdc = [0, 0, 0, 0];
        _0x4bebdc[3] += _0x5def2c[3] + _0x34d1b8[3];
        _0x4bebdc[2] += _0x4bebdc[3] >>> 16;
        _0x4bebdc[3] &= 65535;
        _0x4bebdc[2] += _0x5def2c[2] + _0x34d1b8[2];
        _0x4bebdc[1] += _0x4bebdc[2] >>> 16;
        _0x4bebdc[2] &= 65535;
        _0x4bebdc[1] += _0x5def2c[1] + _0x34d1b8[1];
        _0x4bebdc[0] += _0x4bebdc[1] >>> 16;
        _0x4bebdc[1] &= 65535;
        _0x4bebdc[0] += _0x5def2c[0] + _0x34d1b8[0];
        _0x4bebdc[0] &= 65535;
        return [_0x4bebdc[0] << 16 | _0x4bebdc[1], _0x4bebdc[2] << 16 | _0x4bebdc[3]];
      };
      var _0xb440a4 = function (_0x37d0f9, _0x4a99fd) {
        _0x37d0f9 = [_0x37d0f9[0] >>> 16, 65535 & _0x37d0f9[0], _0x37d0f9[1] >>> 16, 65535 & _0x37d0f9[1]];
        _0x4a99fd = [_0x4a99fd[0] >>> 16, 65535 & _0x4a99fd[0], _0x4a99fd[1] >>> 16, 65535 & _0x4a99fd[1]];
        var _0x46ded5 = [0, 0, 0, 0];
        _0x46ded5[3] += _0x37d0f9[3] * _0x4a99fd[3];
        _0x46ded5[2] += _0x46ded5[3] >>> 16;
        _0x46ded5[3] &= 65535;
        _0x46ded5[2] += _0x37d0f9[2] * _0x4a99fd[3];
        _0x46ded5[1] += _0x46ded5[2] >>> 16;
        _0x46ded5[2] &= 65535;
        _0x46ded5[2] += _0x37d0f9[3] * _0x4a99fd[2];
        _0x46ded5[1] += _0x46ded5[2] >>> 16;
        _0x46ded5[2] &= 65535;
        _0x46ded5[1] += _0x37d0f9[1] * _0x4a99fd[3];
        _0x46ded5[0] += _0x46ded5[1] >>> 16;
        _0x46ded5[1] &= 65535;
        _0x46ded5[1] += _0x37d0f9[2] * _0x4a99fd[2];
        _0x46ded5[0] += _0x46ded5[1] >>> 16;
        _0x46ded5[1] &= 65535;
        _0x46ded5[1] += _0x37d0f9[3] * _0x4a99fd[1];
        _0x46ded5[0] += _0x46ded5[1] >>> 16;
        _0x46ded5[1] &= 65535;
        _0x46ded5[0] += _0x37d0f9[0] * _0x4a99fd[3] + _0x37d0f9[1] * _0x4a99fd[2] + _0x37d0f9[2] * _0x4a99fd[1] + _0x37d0f9[3] * _0x4a99fd[0];
        _0x46ded5[0] &= 65535;
        return [_0x46ded5[0] << 16 | _0x46ded5[1], _0x46ded5[2] << 16 | _0x46ded5[3]];
      };
      var _0x4327a3 = function (_0x4cb90b, _0x56f795) {
        return 32 == (_0x56f795 %= 64) ? [_0x4cb90b[1], _0x4cb90b[0]] : _0x56f795 < 32 ? [_0x4cb90b[0] << _0x56f795 | _0x4cb90b[1] >>> 32 - _0x56f795, _0x4cb90b[1] << _0x56f795 | _0x4cb90b[0] >>> 32 - _0x56f795] : (_0x56f795 -= 32, [_0x4cb90b[1] << _0x56f795 | _0x4cb90b[0] >>> 32 - _0x56f795, _0x4cb90b[0] << _0x56f795 | _0x4cb90b[1] >>> 32 - _0x56f795]);
      };
      var _0x499c10 = function (_0xcfca18, _0x19a188) {
        return 0 == (_0x19a188 %= 64) ? _0xcfca18 : _0x19a188 < 32 ? [_0xcfca18[0] << _0x19a188 | _0xcfca18[1] >>> 32 - _0x19a188, _0xcfca18[1] << _0x19a188] : [_0xcfca18[1] << _0x19a188 - 32, 0];
      };
      var _0x39dac4 = function (_0x23b55b, _0x34938b) {
        return [_0x23b55b[0] ^ _0x34938b[0], _0x23b55b[1] ^ _0x34938b[1]];
      };
      var _0x488a39 = function (_0x3c7aec) {
        _0x3c7aec = _0x39dac4(_0x3c7aec, [0, _0x3c7aec[0] >>> 1]);
        _0x3c7aec = _0xb440a4(_0x3c7aec, [4283543511, 3981806797]);
        _0x3c7aec = _0x39dac4(_0x3c7aec, [0, _0x3c7aec[0] >>> 1]);
        _0x3c7aec = _0xb440a4(_0x3c7aec, [3301882366, 444984403]);
        return _0x39dac4(_0x3c7aec, [0, _0x3c7aec[0] >>> 1]);
      };
      var _0x2ad5c4 = function (_0xa01980, _0xd2a7e5) {
        _0xd2a7e5 = _0xd2a7e5 || 0;
        for (var _0x2549a = (_0xa01980 = _0xa01980 || "").length % 16, _0x270ca1 = _0xa01980.length - _0x2549a, _0x5c4f0c = [0, _0xd2a7e5], _0x5edf56 = [0, _0xd2a7e5], _0x51c8ce = [0, 0], _0x2e5674 = [0, 0], _0x58449a = [2277735313, 289559509], _0x340eb1 = [1291169091, 658871167], _0x3a9d79 = 0; _0x3a9d79 < _0x270ca1; _0x3a9d79 += 16) {
          _0x51c8ce = [255 & _0xa01980.charCodeAt(_0x3a9d79 + 4) | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 5)) << 8 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 6)) << 16 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 7)) << 24, 255 & _0xa01980.charCodeAt(_0x3a9d79) | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 1)) << 8 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 2)) << 16 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 3)) << 24];
          _0x2e5674 = [255 & _0xa01980.charCodeAt(_0x3a9d79 + 12) | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 13)) << 8 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 14)) << 16 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 15)) << 24, 255 & _0xa01980.charCodeAt(_0x3a9d79 + 8) | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 9)) << 8 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 10)) << 16 | (255 & _0xa01980.charCodeAt(_0x3a9d79 + 11)) << 24];
          _0x51c8ce = _0xb440a4(_0x51c8ce, _0x58449a);
          _0x51c8ce = _0x4327a3(_0x51c8ce, 31);
          _0x51c8ce = _0xb440a4(_0x51c8ce, _0x340eb1);
          _0x5c4f0c = _0x39dac4(_0x5c4f0c, _0x51c8ce);
          _0x5c4f0c = _0x4327a3(_0x5c4f0c, 27);
          _0x5c4f0c = _0x272044(_0x5c4f0c, _0x5edf56);
          _0x5c4f0c = _0x272044(_0xb440a4(_0x5c4f0c, [0, 5]), [0, 1390208809]);
          _0x2e5674 = _0xb440a4(_0x2e5674, _0x340eb1);
          _0x2e5674 = _0x4327a3(_0x2e5674, 33);
          _0x2e5674 = _0xb440a4(_0x2e5674, _0x58449a);
          _0x5edf56 = _0x39dac4(_0x5edf56, _0x2e5674);
          _0x5edf56 = _0x4327a3(_0x5edf56, 31);
          _0x5edf56 = _0x272044(_0x5edf56, _0x5c4f0c);
          _0x5edf56 = _0x272044(_0xb440a4(_0x5edf56, [0, 5]), [0, 944331445]);
        }
        switch (_0x51c8ce = [0, 0], _0x2e5674 = [0, 0], _0x2549a) {
          case 15:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 14)], 48));
          case 14:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 13)], 40));
          case 13:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 12)], 32));
          case 12:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 11)], 24));
          case 11:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 10)], 16));
          case 10:
            _0x2e5674 = _0x39dac4(_0x2e5674, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 9)], 8));
          case 9:
            _0x2e5674 = _0x39dac4(_0x2e5674, [0, _0xa01980.charCodeAt(_0x3a9d79 + 8)]);
            _0x2e5674 = _0xb440a4(_0x2e5674, _0x340eb1);
            _0x2e5674 = _0x4327a3(_0x2e5674, 33);
            _0x2e5674 = _0xb440a4(_0x2e5674, _0x58449a);
            _0x5edf56 = _0x39dac4(_0x5edf56, _0x2e5674);
          case 8:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 7)], 56));
          case 7:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 6)], 48));
          case 6:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 5)], 40));
          case 5:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 4)], 32));
          case 4:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 3)], 24));
          case 3:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 2)], 16));
          case 2:
            _0x51c8ce = _0x39dac4(_0x51c8ce, _0x499c10([0, _0xa01980.charCodeAt(_0x3a9d79 + 1)], 8));
          case 1:
            _0x51c8ce = _0x39dac4(_0x51c8ce, [0, _0xa01980.charCodeAt(_0x3a9d79)]);
            _0x51c8ce = _0xb440a4(_0x51c8ce, _0x58449a);
            _0x51c8ce = _0x4327a3(_0x51c8ce, 31);
            _0x51c8ce = _0xb440a4(_0x51c8ce, _0x340eb1);
            _0x5c4f0c = _0x39dac4(_0x5c4f0c, _0x51c8ce);
        }
        _0x5c4f0c = _0x39dac4(_0x5c4f0c, [0, _0xa01980.length]);
        _0x5edf56 = _0x39dac4(_0x5edf56, [0, _0xa01980.length]);
        _0x5c4f0c = _0x272044(_0x5c4f0c, _0x5edf56);
        _0x5edf56 = _0x272044(_0x5edf56, _0x5c4f0c);
        _0x5c4f0c = _0x488a39(_0x5c4f0c);
        _0x5edf56 = _0x488a39(_0x5edf56);
        _0x5c4f0c = _0x272044(_0x5c4f0c, _0x5edf56);
        _0x5edf56 = _0x272044(_0x5edf56, _0x5c4f0c);
        return ("00000000" + (_0x5c4f0c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x5c4f0c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x5edf56[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x5edf56[1] >>> 0).toString(16)).slice(-8);
      };
      var _0x5f3f08 = {
        ancestorOrigins: {},
        href: "https://www.52pojie.cn//",
        origin: "https://www.52pojie.cn",
        protocol: "https:",
        host: "www.52pojie.cn",
        hostname: "www.52pojie.cn",
        port: "",
        pathname: "//",
        search: "",
        hash: ""
      };
      var _0x28d19b = {
        fp_infos: function (_0xab8d50) {
          var _0x2489d1 = {
            errors: {}
          };
          for (var _0x343372 in _0xab8d50) {
            var _0x419b00 = _0xab8d50[_0x343372];
            var _0x4efb8a = _0x419b00.key;
            var _0x22942c = _0x419b00.value;
            "string" == typeof _0x22942c && -1 != _0x22942c.indexOf("Error: ") ? _0x2489d1.errors[_0x4efb8a] = _0x22942c : _0x2489d1[_0x4efb8a] = _0x22942c;
          }
          var _0x569632 = new Date();
          _0x2489d1.dateTime = {
            timestamp: _0x569632.getTime()
          };
          _0x2489d1.fp = function (_0x33496f, _0x28bdbb) {
            var _0x4ad0af = [_0x33496f.plugins && _0x33496f.plugins.fp, _0x33496f.fonts && _0x33496f.fonts.fp, _0x33496f.screenObject.colorDepth, _0x33496f.intlObject, _0x33496f.deviceInfos, _0x33496f.touchSupport, _0x33496f.navigatorObject.platform, _0x33496f.navigatorObject.vendor, _0x33496f.storageObject, _0x33496f.functions, _0x33496f.audio, "object" == _0x19aa7a(_0x33496f.webGL) ? _0x33496f.webGL.fp : undefined, "object" == _0x19aa7a(_0x33496f.canvas) ? _0x33496f.canvas.fp : undefined];
            for (var _0x4fa569 in _0x4ad0af) undefined === _0x4ad0af[_0x4fa569] && (_0x4ad0af[_0x4fa569] = "");
            return _0x28bdbb(_0x4ad0af.toString(), 31);
          }(_0x2489d1, _0x2ad5c4);
          _0x2489d1.protocol = _0x5f3f08.protocol.replace(":", "");
          (function () {
            var _0x269130 = _0x2489d1.dateTime.timestamp % 10 || 10;
            for (var _0x34b101 in _0x2489d1) {
              var _0x5918a9 = _0x2489d1[_0x34b101];
              if ("object" == _0x19aa7a(_0x5918a9)) {
                var _0xdc1abf = 0;
                for (var _0x2891f3 in _0x5918a9) {
                  var _0x49e528 = _0x5918a9[_0x2891f3];
                  _0xdc1abf += "number" == typeof _0x49e528 ? parseInt(_0x49e528) : "string" == typeof _0x49e528 ? _0x49e528.length : _0x269130;
                }
                _0xdc1abf && (_0x2489d1[_0x34b101].verify = _0xdc1abf * _0x269130);
              }
            }
          })();
          return _0x2489d1;
        }([_0x3a8b0a, _0x386812, _0x55a635, _0x2dab91, _0x47af60, _0x17947e, _0x42bd4a, _0xb0f46c, _0x2383b1, _0x14d7a4, _0x3a9773, _0x5e4baf, _0x5bd044]),
        answer: function () {
          for (var _0x2e3a77 = 0, _0x6848f2 = 1, _0xb0d77c = 0; _0xb0d77c < _0x1b88ea.length; _0xb0d77c++) {
            _0x2e3a77 = 2 * (_0x2e3a77 + _0x1b88ea.charCodeAt(_0xb0d77c));
            _0x6848f2 = 2 * (_0x6848f2 + _0xb0d77c + 1);
          }
          _0x2e3a77 *= _0x3ad93f;
          return "WZWS_CONFIRM_PREFIX_LABEL" + (_0x2e3a77 + _0x6848f2);
        }(),
        hostname: _0x5f3f08.hostname,
        scheme: _0x5f3f08.protocol.replace(":", "")
      };
      return function (_0x5f0a31) {
        var _0xffdcaf;
        var _0x30712e;
        var _0x5236f5;
        var _0x18eedd;
        var _0x359d14;
        var _0x401498;
        var _0x5aaacc = _0x262046;
        for (_0x5236f5 = _0x5f0a31.length, _0x30712e = 0, _0xffdcaf = ""; _0x30712e < _0x5236f5;) {
          if (_0x18eedd = 255 & _0x5f0a31.charCodeAt(_0x30712e++), _0x30712e == _0x5236f5) {
            _0xffdcaf += _0x5aaacc.charAt(_0x18eedd >> 2);
            _0xffdcaf += _0x5aaacc.charAt((3 & _0x18eedd) << 4);
            _0xffdcaf += "==";
            break;
          }
          if (_0x359d14 = _0x5f0a31.charCodeAt(_0x30712e++), _0x30712e == _0x5236f5) {
            _0xffdcaf += _0x5aaacc.charAt(_0x18eedd >> 2);
            _0xffdcaf += _0x5aaacc.charAt((3 & _0x18eedd) << 4 | (240 & _0x359d14) >> 4);
            _0xffdcaf += _0x5aaacc.charAt((15 & _0x359d14) << 2);
            _0xffdcaf += "=";
            break;
          }
          _0x401498 = _0x5f0a31.charCodeAt(_0x30712e++);
          _0xffdcaf += _0x5aaacc.charAt(_0x18eedd >> 2);
          _0xffdcaf += _0x5aaacc.charAt((3 & _0x18eedd) << 4 | (240 & _0x359d14) >> 4);
          _0xffdcaf += _0x5aaacc.charAt((15 & _0x359d14) << 2 | (192 & _0x401498) >> 6);
          _0xffdcaf += _0x5aaacc.charAt(63 & _0x401498);
        }
        return _0xffdcaf;
      }(JSON.stringify(_0x28d19b));
    }
  }
  function _0x3e09bd(_0x1b2ea0) {
    _0x3e09bd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x5193a9) {
      return typeof _0x5193a9;
    } : function (_0x2482ec) {
      return _0x2482ec && "function" == typeof Symbol && _0x2482ec.constructor === Symbol && _0x2482ec !== Symbol.prototype ? "symbol" : typeof _0x2482ec;
    };
    return _0x3e09bd(_0x1b2ea0);
  }
  var _0x2193f1 = "undefined" != typeof $argument ? "object" == ("undefined" == typeof $argument ? "undefined" : _0x3e09bd($argument)) ? $argument : Object.fromEntries($argument.split("&").map(function (_0x4fa8f8) {
    return _0x4fa8f8.split("=");
  })) : {};
  function _0x276afd(_0x4119cc) {
    _0x276afd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x3966a8) {
      return typeof _0x3966a8;
    } : function (_0x415e8a) {
      return _0x415e8a && "function" == typeof Symbol && _0x415e8a.constructor === Symbol && _0x415e8a !== Symbol.prototype ? "symbol" : typeof _0x415e8a;
    };
    return _0x276afd(_0x4119cc);
  }
  function _0x2de41c(_0x3b3301, _0x4505fd) {
    return function (_0x441537) {
      if (Array.isArray(_0x441537)) {
        return _0x441537;
      }
    }(_0x3b3301) || function (_0x1b0206, _0x59d10d) {
      var _0x250945 = null == _0x1b0206 ? null : "undefined" != typeof Symbol && _0x1b0206[Symbol.iterator] || _0x1b0206["@@iterator"];
      if (null != _0x250945) {
        var _0xabde92;
        var _0x57644d;
        var _0x17c255;
        var _0x21d8ce;
        var _0x111198 = [];
        var _0x49cdfc = true;
        var _0x5191f6 = false;
        try {
          if (_0x17c255 = (_0x250945 = _0x250945.call(_0x1b0206)).next, 0 === _0x59d10d) {
            if (Object(_0x250945) !== _0x250945) {
              return;
            }
            _0x49cdfc = false;
          } else {
            for (; !(_0x49cdfc = (_0xabde92 = _0x17c255.call(_0x250945)).done) && (_0x111198.push(_0xabde92.value), _0x111198.length !== _0x59d10d); _0x49cdfc = true) {}
          }
        } catch (_0x1dae36) {
          _0x5191f6 = true;
          _0x57644d = _0x1dae36;
        } finally {
          try {
            if (!_0x49cdfc && null != _0x250945.return && (_0x21d8ce = _0x250945.return(), Object(_0x21d8ce) !== _0x21d8ce)) {
              return;
            }
          } finally {
            if (_0x5191f6) {
              throw _0x57644d;
            }
          }
        }
        return _0x111198;
      }
    }(_0x3b3301, _0x4505fd) || _0x44849a(_0x3b3301, _0x4505fd) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x502d35(_0x3f09c5) {
    return function (_0x47392a) {
      if (Array.isArray(_0x47392a)) {
        return _0xc93f0b(_0x47392a);
      }
    }(_0x3f09c5) || function (_0x5babf4) {
      if ("undefined" != typeof Symbol && null != _0x5babf4[Symbol.iterator] || null != _0x5babf4["@@iterator"]) {
        return Array.from(_0x5babf4);
      }
    }(_0x3f09c5) || _0x44849a(_0x3f09c5) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x44849a(_0x320594, _0x21d6d7) {
    if (_0x320594) {
      if ("string" == typeof _0x320594) {
        return _0xc93f0b(_0x320594, _0x21d6d7);
      }
      var _0x246247 = {}.toString.call(_0x320594).slice(8, -1);
      "Object" === _0x246247 && _0x320594.constructor && (_0x246247 = _0x320594.constructor.name);
      return "Map" === _0x246247 || "Set" === _0x246247 ? Array.from(_0x320594) : "Arguments" === _0x246247 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x246247) ? _0xc93f0b(_0x320594, _0x21d6d7) : undefined;
    }
  }
  function _0xc93f0b(_0x528064, _0x225c56) {
    (null == _0x225c56 || _0x225c56 > _0x528064.length) && (_0x225c56 = _0x528064.length);
    for (var _0x1d5b1e = 0, _0x623f21 = Array(_0x225c56); _0x1d5b1e < _0x225c56; _0x1d5b1e++) {
      _0x623f21[_0x1d5b1e] = _0x528064[_0x1d5b1e];
    }
    return _0x623f21;
  }
  function _0x53d7e9() {
    _0x53d7e9 = function () {
      return _0x507367;
    };
    var _0x2289f6;
    var _0x507367 = {
      wrap: _0x32e9c0,
      isGeneratorFunction: function (_0x35b71e) {
        var _0x296cba = "function" == typeof _0x35b71e && _0x35b71e.constructor;
        return !!_0x296cba && (_0x296cba === _0x2577e3 || "GeneratorFunction" === (_0x296cba.displayName || _0x296cba.name));
      },
      mark: function (_0x542909) {
        Object.setPrototypeOf ? Object.setPrototypeOf(_0x542909, _0x12ecf6) : (_0x542909.__proto__ = _0x12ecf6, _0x592666(_0x542909, _0x4ee1c8, "GeneratorFunction"));
        _0x542909.prototype = Object.create(_0x116819);
        return _0x542909;
      },
      awrap: function (_0x5137ce) {
        var _0x95cfb0 = {
          __await: _0x5137ce
        };
        return _0x95cfb0;
      },
      AsyncIterator: _0xce70ed,
      async: function (_0x4712a0, _0x47683a, _0x4e3999, _0x1f6f77, _0x3896b1) {
        undefined === _0x3896b1 && (_0x3896b1 = Promise);
        var _0x2de3df = new _0xce70ed(_0x32e9c0(_0x4712a0, _0x47683a, _0x4e3999, _0x1f6f77), _0x3896b1);
        return _0x507367.isGeneratorFunction(_0x47683a) ? _0x2de3df : _0x2de3df.next().then(function (_0x5a83fb) {
          return _0x5a83fb.done ? _0x5a83fb.value : _0x2de3df.next();
        });
      }
    };
    var _0x13aa9 = Object.prototype;
    var _0x1436ca = _0x13aa9.hasOwnProperty;
    var _0x32e8fd = Object.defineProperty || function (_0x2ecc93, _0x4e681a, _0xec7fa) {
      _0x2ecc93[_0x4e681a] = _0xec7fa.value;
    };
    var _0x43c401 = "function" == typeof Symbol ? Symbol : {};
    var _0x3da1ca = _0x43c401.iterator || "@@iterator";
    var _0x152963 = _0x43c401.asyncIterator || "@@asyncIterator";
    var _0x4ee1c8 = _0x43c401.toStringTag || "@@toStringTag";
    function _0x592666(_0x4d9057, _0x23ab70, _0x56731d) {
      var _0x263197 = {
        value: _0x56731d,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x4d9057, _0x23ab70, _0x263197);
      return _0x4d9057[_0x23ab70];
    }
    try {
      _0x592666({}, "");
    } catch (_0x543580) {
      _0x592666 = function (_0x217619, _0x41bf1b, _0x229920) {
        return _0x217619[_0x41bf1b] = _0x229920;
      };
    }
    function _0x32e9c0(_0x3e8aa1, _0x5ef3ac, _0x3ef872, _0x550709) {
      var _0x509717 = _0x5ef3ac && _0x5ef3ac.prototype instanceof _0x91ec25 ? _0x5ef3ac : _0x91ec25;
      var _0x2df47b = Object.create(_0x509717.prototype);
      var _0x421952 = new _0x55b2a0(_0x550709 || []);
      _0x32e8fd(_0x2df47b, "_invoke", {
        value: _0x56aa10(_0x3e8aa1, _0x3ef872, _0x421952)
      });
      return _0x2df47b;
    }
    function _0x3a9b15(_0x380f14, _0x10df99, _0x35aa39) {
      try {
        return {
          type: "normal",
          arg: _0x380f14.call(_0x10df99, _0x35aa39)
        };
      } catch (_0x469566) {
        var _0x5bbddd = {
          type: "throw",
          arg: _0x469566
        };
        return _0x5bbddd;
      }
    }
    var _0x4b3c7c = "suspendedStart";
    var _0x2ffc6e = "suspendedYield";
    var _0x3fa22a = "executing";
    var _0x386dc4 = "completed";
    var _0x185889 = {};
    function _0x91ec25() {}
    function _0x2577e3() {}
    function _0x12ecf6() {}
    var _0x43b750 = {};
    _0x592666(_0x43b750, _0x3da1ca, function () {
      return this;
    });
    var _0x3eccea = Object.getPrototypeOf;
    var _0x1a9381 = _0x3eccea && _0x3eccea(_0x3eccea(_0x13761c([])));
    _0x1a9381 && _0x1a9381 !== _0x13aa9 && _0x1436ca.call(_0x1a9381, _0x3da1ca) && (_0x43b750 = _0x1a9381);
    _0x12ecf6.prototype = _0x91ec25.prototype = Object.create(_0x43b750);
    var _0x116819 = _0x12ecf6.prototype;
    function _0xda0db5(_0x194c0d) {
      ["next", "throw", "return"].forEach(function (_0x32676e) {
        _0x592666(_0x194c0d, _0x32676e, function (_0x1ebd19) {
          return this._invoke(_0x32676e, _0x1ebd19);
        });
      });
    }
    function _0xce70ed(_0x1491da, _0xd6c8cf) {
      function _0x25f380(_0x443545, _0x2141bf, _0x53b2b2, _0x46f8a6) {
        var _0x5e032f = _0x3a9b15(_0x1491da[_0x443545], _0x1491da, _0x2141bf);
        if ("throw" !== _0x5e032f.type) {
          var _0x6d960b = _0x5e032f.arg;
          var _0x2811b1 = _0x6d960b.value;
          return _0x2811b1 && "object" == _0x276afd(_0x2811b1) && _0x1436ca.call(_0x2811b1, "__await") ? _0xd6c8cf.resolve(_0x2811b1.__await).then(function (_0x899729) {
            _0x25f380("next", _0x899729, _0x53b2b2, _0x46f8a6);
          }, function (_0x402cd0) {
            _0x25f380("throw", _0x402cd0, _0x53b2b2, _0x46f8a6);
          }) : _0xd6c8cf.resolve(_0x2811b1).then(function (_0x5357df) {
            _0x6d960b.value = _0x5357df;
            _0x53b2b2(_0x6d960b);
          }, function (_0x2fd4ca) {
            return _0x25f380("throw", _0x2fd4ca, _0x53b2b2, _0x46f8a6);
          });
        }
        _0x46f8a6(_0x5e032f.arg);
      }
      var _0x2566b4;
      _0x32e8fd(this, "_invoke", {
        value: function (_0x26a3aa, _0xee6f37) {
          function _0x1b28e9() {
            return new _0xd6c8cf(function (_0x23f785, _0x1f0079) {
              _0x25f380(_0x26a3aa, _0xee6f37, _0x23f785, _0x1f0079);
            });
          }
          return _0x2566b4 = _0x2566b4 ? _0x2566b4.then(_0x1b28e9, _0x1b28e9) : _0x1b28e9();
        }
      });
    }
    function _0x56aa10(_0x4551de, _0xa46ec2, _0xd05412) {
      var _0xd41404 = _0x4b3c7c;
      return function (_0x3a3af8, _0x2768a2) {
        if (_0xd41404 === _0x3fa22a) {
          throw Error("Generator is already running");
        }
        if (_0xd41404 === _0x386dc4) {
          if ("throw" === _0x3a3af8) {
            throw _0x2768a2;
          }
          var _0x2bc2bc = {
            value: _0x2289f6,
            done: true
          };
          return _0x2bc2bc;
        }
        for (_0xd05412.method = _0x3a3af8, _0xd05412.arg = _0x2768a2;;) {
          var _0xb3dd2d = _0xd05412.delegate;
          if (_0xb3dd2d) {
            var _0x578ddf = _0x40eb3b(_0xb3dd2d, _0xd05412);
            if (_0x578ddf) {
              if (_0x578ddf === _0x185889) {
                continue;
              }
              return _0x578ddf;
            }
          }
          if ("next" === _0xd05412.method) {
            _0xd05412.sent = _0xd05412._sent = _0xd05412.arg;
          } else {
            if ("throw" === _0xd05412.method) {
              if (_0xd41404 === _0x4b3c7c) {
                throw _0xd41404 = _0x386dc4, _0xd05412.arg;
              }
              _0xd05412.dispatchException(_0xd05412.arg);
            } else {
              "return" === _0xd05412.method && _0xd05412.abrupt("return", _0xd05412.arg);
            }
          }
          _0xd41404 = _0x3fa22a;
          var _0x423899 = _0x3a9b15(_0x4551de, _0xa46ec2, _0xd05412);
          if ("normal" === _0x423899.type) {
            if (_0xd41404 = _0xd05412.done ? _0x386dc4 : _0x2ffc6e, _0x423899.arg === _0x185889) {
              continue;
            }
            var _0x453e7f = {
              value: _0x423899.arg,
              done: _0xd05412.done
            };
            return _0x453e7f;
          }
          "throw" === _0x423899.type && (_0xd41404 = _0x386dc4, _0xd05412.method = "throw", _0xd05412.arg = _0x423899.arg);
        }
      };
    }
    function _0x40eb3b(_0x4db0e5, _0x4985c1) {
      var _0x17777f = _0x4985c1.method;
      var _0x4424b5 = _0x4db0e5.iterator[_0x17777f];
      if (_0x4424b5 === _0x2289f6) {
        _0x4985c1.delegate = null;
        "throw" === _0x17777f && _0x4db0e5.iterator.return && (_0x4985c1.method = "return", _0x4985c1.arg = _0x2289f6, _0x40eb3b(_0x4db0e5, _0x4985c1), "throw" === _0x4985c1.method) || "return" !== _0x17777f && (_0x4985c1.method = "throw", _0x4985c1.arg = new TypeError("The iterator does not provide a '" + _0x17777f + "' method"));
        return _0x185889;
      }
      var _0x324c6a = _0x3a9b15(_0x4424b5, _0x4db0e5.iterator, _0x4985c1.arg);
      if ("throw" === _0x324c6a.type) {
        _0x4985c1.method = "throw";
        _0x4985c1.arg = _0x324c6a.arg;
        _0x4985c1.delegate = null;
        return _0x185889;
      }
      var _0x486906 = _0x324c6a.arg;
      return _0x486906 ? _0x486906.done ? (_0x4985c1[_0x4db0e5.resultName] = _0x486906.value, _0x4985c1.next = _0x4db0e5.nextLoc, "return" !== _0x4985c1.method && (_0x4985c1.method = "next", _0x4985c1.arg = _0x2289f6), _0x4985c1.delegate = null, _0x185889) : _0x486906 : (_0x4985c1.method = "throw", _0x4985c1.arg = new TypeError("iterator result is not an object"), _0x4985c1.delegate = null, _0x185889);
    }
    function _0x363c21(_0x3d80e3) {
      var _0x2359b4 = {
        tryLoc: _0x3d80e3[0]
      };
      1 in _0x3d80e3 && (_0x2359b4.catchLoc = _0x3d80e3[1]);
      2 in _0x3d80e3 && (_0x2359b4.finallyLoc = _0x3d80e3[2], _0x2359b4.afterLoc = _0x3d80e3[3]);
      this.tryEntries.push(_0x2359b4);
    }
    function _0x272eab(_0x1a4bab) {
      var _0x31e882 = _0x1a4bab.completion || {};
      _0x31e882.type = "normal";
      delete _0x31e882.arg;
      _0x1a4bab.completion = _0x31e882;
    }
    function _0x55b2a0(_0x535bd5) {
      var _0x4c0f3b = {
        tryLoc: "root"
      };
      this.tryEntries = [_0x4c0f3b];
      _0x535bd5.forEach(_0x363c21, this);
      this.reset(true);
    }
    function _0x13761c(_0x1d40cb) {
      if (_0x1d40cb || "" === _0x1d40cb) {
        var _0x53442b = _0x1d40cb[_0x3da1ca];
        if (_0x53442b) {
          return _0x53442b.call(_0x1d40cb);
        }
        if ("function" == typeof _0x1d40cb.next) {
          return _0x1d40cb;
        }
        if (!isNaN(_0x1d40cb.length)) {
          var _0x54d442 = -1;
          var _0x476652 = function _0xfddd1a() {
            for (; ++_0x54d442 < _0x1d40cb.length;) {
              if (_0x1436ca.call(_0x1d40cb, _0x54d442)) {
                _0xfddd1a.value = _0x1d40cb[_0x54d442];
                _0xfddd1a.done = false;
                return _0xfddd1a;
              }
            }
            _0xfddd1a.value = _0x2289f6;
            _0xfddd1a.done = true;
            return _0xfddd1a;
          };
          return _0x476652.next = _0x476652;
        }
      }
      throw new TypeError(_0x276afd(_0x1d40cb) + " is not iterable");
    }
    _0x2577e3.prototype = _0x12ecf6;
    _0x32e8fd(_0x116819, "constructor", {
      value: _0x12ecf6,
      configurable: true
    });
    _0x32e8fd(_0x12ecf6, "constructor", {
      value: _0x2577e3,
      configurable: true
    });
    _0x2577e3.displayName = _0x592666(_0x12ecf6, _0x4ee1c8, "GeneratorFunction");
    _0xda0db5(_0xce70ed.prototype);
    _0x592666(_0xce70ed.prototype, _0x152963, function () {
      return this;
    });
    _0xda0db5(_0x116819);
    _0x592666(_0x116819, _0x4ee1c8, "Generator");
    _0x592666(_0x116819, _0x3da1ca, function () {
      return this;
    });
    _0x592666(_0x116819, "toString", function () {
      return "[object Generator]";
    });
    _0x507367.keys = function (_0x36f502) {
      var _0x5f3618 = Object(_0x36f502);
      var _0x5ee920 = [];
      for (var _0x3bd50b in _0x5f3618) _0x5ee920.push(_0x3bd50b);
      _0x5ee920.reverse();
      return function _0x1b54d4() {
        for (; _0x5ee920.length;) {
          var _0x274aa4 = _0x5ee920.pop();
          if (_0x274aa4 in _0x5f3618) {
            _0x1b54d4.value = _0x274aa4;
            _0x1b54d4.done = false;
            return _0x1b54d4;
          }
        }
        _0x1b54d4.done = true;
        return _0x1b54d4;
      };
    };
    _0x507367.values = _0x13761c;
    _0x55b2a0.prototype = {
      constructor: _0x55b2a0,
      reset: function (_0x3ed604) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x2289f6, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x2289f6, this.tryEntries.forEach(_0x272eab), !_0x3ed604) {
          for (var _0x319bae in this) "t" === _0x319bae.charAt(0) && _0x1436ca.call(this, _0x319bae) && !isNaN(+_0x319bae.slice(1)) && (this[_0x319bae] = _0x2289f6);
        }
      },
      stop: function () {
        this.done = true;
        var _0x226434 = this.tryEntries[0].completion;
        if ("throw" === _0x226434.type) {
          throw _0x226434.arg;
        }
        return this.rval;
      },
      dispatchException: function (_0x473be8) {
        if (this.done) {
          throw _0x473be8;
        }
        var _0x31c85d = this;
        function _0x1bc017(_0x1f168e, _0x276d18) {
          _0x45fba3.type = "throw";
          _0x45fba3.arg = _0x473be8;
          _0x31c85d.next = _0x1f168e;
          _0x276d18 && (_0x31c85d.method = "next", _0x31c85d.arg = _0x2289f6);
          return !!_0x276d18;
        }
        for (var _0x262e0d = this.tryEntries.length - 1; _0x262e0d >= 0; --_0x262e0d) {
          var _0x53c883 = this.tryEntries[_0x262e0d];
          var _0x45fba3 = _0x53c883.completion;
          if ("root" === _0x53c883.tryLoc) {
            return _0x1bc017("end");
          }
          if (_0x53c883.tryLoc <= this.prev) {
            var _0x2c85d4 = _0x1436ca.call(_0x53c883, "catchLoc");
            var _0x2bfd68 = _0x1436ca.call(_0x53c883, "finallyLoc");
            if (_0x2c85d4 && _0x2bfd68) {
              if (this.prev < _0x53c883.catchLoc) {
                return _0x1bc017(_0x53c883.catchLoc, true);
              }
              if (this.prev < _0x53c883.finallyLoc) {
                return _0x1bc017(_0x53c883.finallyLoc);
              }
            } else {
              if (_0x2c85d4) {
                if (this.prev < _0x53c883.catchLoc) {
                  return _0x1bc017(_0x53c883.catchLoc, true);
                }
              } else {
                if (!_0x2bfd68) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < _0x53c883.finallyLoc) {
                  return _0x1bc017(_0x53c883.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (_0x33b23f, _0x43d970) {
        for (var _0x47dd38 = this.tryEntries.length - 1; _0x47dd38 >= 0; --_0x47dd38) {
          var _0x14f4c5 = this.tryEntries[_0x47dd38];
          if (_0x14f4c5.tryLoc <= this.prev && _0x1436ca.call(_0x14f4c5, "finallyLoc") && this.prev < _0x14f4c5.finallyLoc) {
            var _0x30e7bf = _0x14f4c5;
            break;
          }
        }
        _0x30e7bf && ("break" === _0x33b23f || "continue" === _0x33b23f) && _0x30e7bf.tryLoc <= _0x43d970 && _0x43d970 <= _0x30e7bf.finallyLoc && (_0x30e7bf = null);
        var _0x4a1447 = _0x30e7bf ? _0x30e7bf.completion : {};
        _0x4a1447.type = _0x33b23f;
        _0x4a1447.arg = _0x43d970;
        return _0x30e7bf ? (this.method = "next", this.next = _0x30e7bf.finallyLoc, _0x185889) : this.complete(_0x4a1447);
      },
      complete: function (_0x153ae3, _0x5c9744) {
        if ("throw" === _0x153ae3.type) {
          throw _0x153ae3.arg;
        }
        "break" === _0x153ae3.type || "continue" === _0x153ae3.type ? this.next = _0x153ae3.arg : "return" === _0x153ae3.type ? (this.rval = this.arg = _0x153ae3.arg, this.method = "return", this.next = "end") : "normal" === _0x153ae3.type && _0x5c9744 && (this.next = _0x5c9744);
        return _0x185889;
      },
      finish: function (_0x398e01) {
        for (var _0x223c28 = this.tryEntries.length - 1; _0x223c28 >= 0; --_0x223c28) {
          var _0xf224b = this.tryEntries[_0x223c28];
          if (_0xf224b.finallyLoc === _0x398e01) {
            this.complete(_0xf224b.completion, _0xf224b.afterLoc);
            _0x272eab(_0xf224b);
            return _0x185889;
          }
        }
      },
      catch: function (_0x1f64fb) {
        for (var _0x251895 = this.tryEntries.length - 1; _0x251895 >= 0; --_0x251895) {
          var _0xc3b180 = this.tryEntries[_0x251895];
          if (_0xc3b180.tryLoc === _0x1f64fb) {
            var _0x598929 = _0xc3b180.completion;
            if ("throw" === _0x598929.type) {
              var _0x445170 = _0x598929.arg;
              _0x272eab(_0xc3b180);
            }
            return _0x445170;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (_0x11793b, _0x406cf2, _0x5d6f4f) {
        this.delegate = {
          iterator: _0x13761c(_0x11793b),
          resultName: _0x406cf2,
          nextLoc: _0x5d6f4f
        };
        "next" === this.method && (this.arg = _0x2289f6);
        return _0x185889;
      }
    };
    return _0x507367;
  }
  function _0x7ac67(_0x4c995f, _0x3187a2, _0x13308e, _0x4a5e9c, _0x3192f3, _0x32957a, _0x425c61) {
    try {
      var _0x11a047 = _0x4c995f[_0x32957a](_0x425c61);
      var _0x168011 = _0x11a047.value;
    } catch (_0x2e00bd) {
      return void _0x13308e(_0x2e00bd);
    }
    _0x11a047.done ? _0x3187a2(_0x168011) : Promise.resolve(_0x168011).then(_0x4a5e9c, _0x3192f3);
  }
  function _0x291b0c(_0x2555f6) {
    return function () {
      var _0x23142c = this;
      var _0x14c433 = arguments;
      return new Promise(function (_0x4b31f5, _0x2fb01c) {
        var _0x4218ca = _0x2555f6.apply(_0x23142c, _0x14c433);
        function _0x51e842(_0x476548) {
          _0x7ac67(_0x4218ca, _0x4b31f5, _0x2fb01c, _0x51e842, _0x4e9397, "next", _0x476548);
        }
        function _0x4e9397(_0xb5bd84) {
          _0x7ac67(_0x4218ca, _0x4b31f5, _0x2fb01c, _0x51e842, _0x4e9397, "throw", _0xb5bd84);
        }
        _0x51e842(undefined);
      });
    };
  }
  function _0x28c2d6(_0x2eccc3, _0x39bf83) {
    var _0x54a95a = Object.keys(_0x2eccc3);
    if (Object.getOwnPropertySymbols) {
      var _0x4c165d = Object.getOwnPropertySymbols(_0x2eccc3);
      _0x39bf83 && (_0x4c165d = _0x4c165d.filter(function (_0x33313e) {
        return Object.getOwnPropertyDescriptor(_0x2eccc3, _0x33313e).enumerable;
      }));
      _0x54a95a.push.apply(_0x54a95a, _0x4c165d);
    }
    return _0x54a95a;
  }
  function _0x382c61(_0x510bb7) {
    for (var _0x5e89b0 = 1; _0x5e89b0 < arguments.length; _0x5e89b0++) {
      var _0x109c2f = null != arguments[_0x5e89b0] ? arguments[_0x5e89b0] : {};
      _0x5e89b0 % 2 ? _0x28c2d6(Object(_0x109c2f), true).forEach(function (_0x1e8629) {
        _0x24a851(_0x510bb7, _0x1e8629, _0x109c2f[_0x1e8629]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_0x510bb7, Object.getOwnPropertyDescriptors(_0x109c2f)) : _0x28c2d6(Object(_0x109c2f)).forEach(function (_0x2d09cb) {
        Object.defineProperty(_0x510bb7, _0x2d09cb, Object.getOwnPropertyDescriptor(_0x109c2f, _0x2d09cb));
      });
    }
    return _0x510bb7;
  }
  function _0x24a851(_0x3e0bf8, _0x32a65d, _0x5ac3e5) {
    (_0x32a65d = function (_0x58ceb0) {
      var _0x1812c2 = function (_0x5bcc65, _0x1e01dd) {
        if ("object" != _0x276afd(_0x5bcc65) || !_0x5bcc65) {
          return _0x5bcc65;
        }
        var _0x56be6b = _0x5bcc65[Symbol.toPrimitive];
        if (undefined !== _0x56be6b) {
          var _0x19b88f = _0x56be6b.call(_0x5bcc65, _0x1e01dd || "default");
          if ("object" != _0x276afd(_0x19b88f)) {
            return _0x19b88f;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === _0x1e01dd ? String : Number)(_0x5bcc65);
      }(_0x58ceb0, "string");
      return "symbol" == _0x276afd(_0x1812c2) ? _0x1812c2 : _0x1812c2 + "";
    }(_0x32a65d)) in _0x3e0bf8 ? Object.defineProperty(_0x3e0bf8, _0x32a65d, {
      value: _0x5ac3e5,
      enumerable: true,
      configurable: true,
      writable: true
    }) : _0x3e0bf8[_0x32a65d] = _0x5ac3e5;
    return _0x3e0bf8;
  }
  var _0x2326fb;
  var _0x1f1782 = "52破解";
  var _0x4aae22 = "https://www.52pojie.cn";
  var _0x261219 = /(?:var|let|const)\s+[A-Za-z_$][\w$]*\s*=\s*["']\/waf_zw_verify["']\s*,\s*[A-Za-z_$][\w$]*\s*=\s*["']\/home\.php\?mod=task&do=apply&id=2&referer=%2F["']\s*,\s*(?:[A-Za-z_$][\w$]*\s*=\s*["'][^"']+["']\s*,\s*){2}[A-Za-z_$][\w$]*\s*=\s*["'][^"']+["']/;
  var _0x2cf093 = /["']([^"']+)["']/g;
  var _0x13cbb1 = /^\d{4,8}$/;
  var _0x571b1b = /^[0-9A-Za-z/+.-]+={0,2}$/;
  var _0x3865f8 = {
    Host: "www.52pojie.cn",
    Connection: "keep-alive",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Microsoft Edge\";v=\"122\"",
    "sec-ch-ua-platform": "Windows",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "Content-Type": "text/plain;charset=UTF-8",
    Accept: "*/*",
    Origin: "https://www.52pojie.cn",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Referer: "https://www.52pojie.cn/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  var _0x2dc52b = function () {
    return "Node.js" === _0x476693;
  };
  var _0x164744 = function (_0xdf31d) {
    var _0x30ad0d = {
      Cookie: _0xdf31d
    };
    return _0x382c61(_0x382c61({}, _0x3865f8), {}, _0x30ad0d);
  };
  var _0x1e7582 = {
    timeZone: "PRC"
  };
  _0x2326fb = ["本脚本仅用于学习研究，禁止用于商业用途", "本脚本不保证准确性、可靠性、完整性和及时性", "任何个人或组织均可无需经过通知而自由使用", "作者对任何脚本问题概不负责，包括由此产生的任何损失", "如有单位或个人认为本脚本侵权，请通知并提供证明，我将删除", "请勿将本脚本用于商业用途，由此引起的问题与作者无关", "本脚本及其更新版权归作者所有", "", "⌚ ".concat(new Date().toLocaleString("zh-CN", _0x1e7582))];
  _0x406dae.log.apply(_0x406dae, ["==============📣免责声明📣=============="].concat(_0x2326fb));
  _0x406dae.logLevel = "true" === "".concat(_0x2dc52b() ? process.env.WUAI_DEBUG : _0x2193f1.debug || _0x23eee5.getItem("wuai_debug")) ? "debug" : "info";
  _0x406dae.info("日志等级: ".concat(_0x406dae.logLevel));
  var _0x75381d = _0x2dc52b() ? process.env.WUAI_BARK_KEY : _0x23eee5.getItem("wuai_bark_key");
  _0x406dae.debug(_0x75381d ? "Bark密钥: " + _0x75381d : "未开启Bark推送");
  var _0x3cd9f6 = _0x2dc52b() ? process.env.WUAI_COOKIE : _0x23eee5.getItem("wuai_cookie");
  function _0x1c7193() {
    return _0x2324d2.apply(this, arguments);
  }
  function _0x2324d2() {
    _0x2324d2 = _0x291b0c(_0x53d7e9().mark(function _0x47ada6() {
      var _0x46a0d7;
      return _0x53d7e9().wrap(function (_0x5a88cf) {
        for (;;) {
          switch (_0x5a88cf.prev = _0x5a88cf.next) {
            case 0:
              if (_0x3cd9f6) {
                _0x5a88cf.next = 4;
                break;
              }
              _0x5a88cf.next = 3;
              return _0x4f7a78(_0x1f1782, "", "未填写/未获取Cookie!!");
            case 3:
            case 7:
            case 14:
            case 20:
            case 27:
              return _0x5a88cf.abrupt("return");
            case 4:
              if (_0x3cd9f6.includes("auth=")) {
                _0x5a88cf.next = 8;
                break;
              }
              _0x5a88cf.next = 7;
              return _0x4f7a78(_0x1f1782, "", "Cookie关键授权字段缺失, 需重新获取!!");
            case 8:
              _0x3cd9f6 = _0x474b42(_0x3cd9f6);
              _0x5a88cf.next = 11;
              return _0x514a0d();
            case 11:
              if (_0xac9f2e.get(globalThis, "user.id")) {
                _0x5a88cf.next = 15;
                break;
              }
              _0x5a88cf.next = 14;
              return _0x4f7a78(_0x1f1782, "❌ 获取用户信息失败", "Cookie失效 ‼️‼️");
            case 15:
              _0x5a88cf.next = 17;
              return _0x4aca50();
            case 17:
              if (verifyBody) {
                _0x5a88cf.next = 21;
                break;
              }
              _0x5a88cf.next = 20;
              return _0x4f7a78(_0x1f1782, "❌ 获取混淆参数失败", "请等待修复!!");
            case 21:
              _0x5a88cf.next = 23;
              return _0x4cd17e();
            case 23:
              if (_0x46a0d7 = _0x5a88cf.sent, _0x46a0d7) {
                _0x5a88cf.next = 28;
                break;
              }
              _0x5a88cf.next = 27;
              return _0x4f7a78(_0x1f1782, "❌ 参数校验失败", "请等待修复!!");
            case 28:
              _0x5a88cf.next = 30;
              return _0x3402e8();
            case 30:
              _0x5a88cf.next = 32;
              return _0x4f7a78(_0x1f1782, "".concat(user.name, "[").concat("".concat(user.id).replace(/(\d{3})\d+(\d{2})/, "$1****$2"), "]"), msgBody);
            case 32:
            case "end":
              return _0x5a88cf.stop();
          }
        }
      }, _0x47ada6);
    }));
    return _0x2324d2.apply(this, arguments);
  }
  function _0x514a0d() {
    return _0x17b37e.apply(this, arguments);
  }
  function _0x17b37e() {
    _0x17b37e = _0x291b0c(_0x53d7e9().mark(function _0x43cc5() {
      var _0x385a42;
      var _0x336869;
      var _0x5472bf;
      var _0x474f0e;
      var _0x180b8d;
      var _0xeebf9b;
      var _0x1ba72e;
      return _0x53d7e9().wrap(function (_0x397f38) {
        for (;;) {
          switch (_0x397f38.prev = _0x397f38.next) {
            case 0:
              _0x385a42 = {
                url: _0x4f0fdb(_0x4aae22, "/home.php?mod=spacecp&ac=credit&showcredit=1"),
                headers: _0x164744(_0x3cd9f6)
              };
              _0x397f38.next = 3;
              return _0x5abeee(_0x385a42);
            case 3:
              if (_0x336869 = _0x397f38.sent, !_0x336869.ok) {
                _0x397f38.next = 16;
                break;
              }
              if (_0x5472bf = _0x336869.body, !_0x5472bf.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                _0x397f38.next = 10;
                break;
              }
              _0x397f38.next = 9;
              return _0x4f7a78(_0x1f1782, "", "Cookie失效 ‼️‼️");
            case 9:
              throw new Error("Cookie失效 ‼️‼️");
            case 10:
              _0x474f0e = /<strong[^>]*><a[^>]*href="[^"]*uid=(\d+)"[^>]*>([^<]*)<\/a><\/strong>/i.exec(_0x5472bf);
              _0x180b8d = _0x2de41c(_0x474f0e, 3);
              _0xeebf9b = _0x180b8d[1];
              _0x1ba72e = _0x180b8d[2];
              _0xac9f2e.set(globalThis, "user.id", _0xeebf9b, "");
              _0xac9f2e.set(globalThis, "user.name", _0x1ba72e, "");
              _0x406dae.log("用户信息: ".concat(_0xeebf9b, " - ").concat(_0x1ba72e));
              _0x397f38.next = 17;
              break;
            case 16:
              _0x406dae.error("获取个人信息失败", _0x336869.body || "");
            case 17:
            case "end":
              return _0x397f38.stop();
          }
        }
      }, _0x43cc5);
    }));
    return _0x17b37e.apply(this, arguments);
  }
  function _0x4aca50() {
    return _0x639852.apply(this, arguments);
  }
  function _0x639852() {
    _0x639852 = _0x291b0c(_0x53d7e9().mark(function _0x22c6af() {
      var _0x4724ec;
      var _0x4ef716;
      var _0x3e7ddc;
      return _0x53d7e9().wrap(function (_0x13ecdd) {
        for (;;) {
          switch (_0x13ecdd.prev = _0x13ecdd.next) {
            case 0:
              _0x4724ec = {
                url: _0x4f0fdb(_0x4aae22, "/home.php?mod=task&do=apply&id=2&referer=%2F"),
                headers: _0x164744(_0x3cd9f6)
              };
              _0x13ecdd.next = 3;
              return _0x5abeee(_0x4724ec);
            case 3:
              if (_0x4ef716 = _0x13ecdd.sent, !_0x4ef716.ok) {
                _0x13ecdd.next = 17;
                break;
              }
              if (_0x3cd9f6 = _0x45dea1(_0x3cd9f6, _0x39c89c(_0x4ef716)), _0x406dae.debug("[混淆接口]更新Cookie: ".concat(_0x3cd9f6)), _0x3e7ddc = _0x3d60fb(_0x4ef716.body), _0x3e7ddc) {
                _0x13ecdd.next = 10;
                break;
              }
              throw new Error("XOR params parse failed");
            case 10:
              _0x406dae.group("[请求参数]");
              _0x406dae.debug("[question]: ".concat(_0x3e7ddc.LZ), "[factor]: ".concat(_0x3e7ddc.LJ), "[base64_chars]: ".concat(_0x3e7ddc.LE));
              _0x406dae.groupEnd();
              globalThis.verifyBody = _0x4c76fb(_0x3e7ddc);
              _0x406dae.debug("[verifyBody] 加密结果: ".concat(globalThis.verifyBody));
              _0x13ecdd.next = 18;
              break;
            case 17:
              _0x406dae.error("获取混淆参数失败", _0x4ef716.body || "");
            case 18:
            case "end":
              return _0x13ecdd.stop();
          }
        }
      }, _0x22c6af);
    }));
    return _0x639852.apply(this, arguments);
  }
  function _0x4cd17e() {
    return _0x274dc8.apply(this, arguments);
  }
  function _0x274dc8() {
    _0x274dc8 = _0x291b0c(_0x53d7e9().mark(function _0x1fe618() {
      var _0x20b147;
      var _0x411cd4;
      return _0x53d7e9().wrap(function (_0x21444c) {
        for (;;) {
          switch (_0x21444c.prev = _0x21444c.next) {
            case 0:
              _0x20b147 = {
                url: _0x4f0fdb(_0x4aae22, "/waf_zw_verify"),
                headers: _0x164744(_0x3cd9f6),
                body: verifyBody
              };
              _0x21444c.next = 3;
              return _0x5abeee(_0x20b147);
            case 3:
              if (_0x411cd4 = _0x21444c.sent, !_0x411cd4.ok) {
                _0x21444c.next = 10;
                break;
              }
              _0x3cd9f6 = _0x45dea1(_0x3cd9f6, _0x39c89c(_0x411cd4));
              _0x406dae.debug("🎉 参数校验接口通过!!");
              return _0x21444c.abrupt("return", true);
            case 10:
              _0x406dae.error("参数校验失败", _0x411cd4.body || "");
            case 11:
            case "end":
              return _0x21444c.stop();
          }
        }
      }, _0x1fe618);
    }));
    return _0x274dc8.apply(this, arguments);
  }
  function _0x3402e8() {
    return _0x280006.apply(this, arguments);
  }
  function _0x280006() {
    _0x280006 = _0x291b0c(_0x53d7e9().mark(function _0x422fa4() {
      var _0x2c8e01;
      var _0x95a0f5;
      var _0xf1914b;
      var _0x391664;
      var _0x3c4858;
      return _0x53d7e9().wrap(function (_0x326115) {
        for (;;) {
          switch (_0x326115.prev = _0x326115.next) {
            case 0:
              _0x2c8e01 = {
                url: _0x4f0fdb(_0x4aae22, "/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php"),
                headers: _0x164744(_0x3cd9f6)
              };
              _0x326115.next = 3;
              return _0x5abeee(_0x2c8e01);
            case 3:
              _0x95a0f5 = _0x326115.sent;
              _0xf1914b = globalThis;
              _0x391664 = _0x95a0f5.body;
              _0x3c4858 = new Date();
              _0x391664.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/) ? _0xf1914b.msgBody = _0x3c4858.getMonth() + 1 + "月" + _0x3c4858.getDate() + "日, 签到成功 🎉" : _0x391664.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/) ? _0xf1914b.msgBody = _0x3c4858.getMonth() + 1 + "月" + _0x3c4858.getDate() + "日, 已签过 ⚠️" : _0x391664.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/) ? _0xf1914b.msgBody = "签到失败, Cookie失效 ‼️‼️" : 403 == _0x95a0f5.statusCode ? _0xf1914b.msgBody = "服务器暂停签到 ⚠️" : _0xf1914b.msgBody = "脚本待更新 ‼️‼️";
            case 8:
            case "end":
              return _0x326115.stop();
          }
        }
      }, _0x422fa4);
    }));
    return _0x280006.apply(this, arguments);
  }
  function _0x474b42(_0x1cf3cd) {
    if (!_0x1cf3cd) {
      throw _0x5e9fc7(_0x1f1782, "❌ 获取Cookie失败", "Cookie为空, 不进行初始化"), new Error("Cookie为空, 不进行初始化");
    }
    var _0x37beec = _0x1a4af4(_0x1cf3cd);
    if (null == _0x37beec || !_0x37beec.htVC_2132_auth) {
      throw new Error("获取Cookie失败, 关键值[auth]缺失");
    }
    if (null == _0x37beec || !_0x37beec.htVC_2132_saltkey) {
      throw new Error("获取Cookie失败, 关键值[saltkey]缺失");
    }
    return "htVC_2132_auth=".concat(_0x37beec.htVC_2132_auth, "; htVC_2132_saltkey=").concat(_0x37beec.htVC_2132_saltkey, ";");
  }
  function _0x3d60fb(_0x56d41d) {
    var _0x4199a2;
    var _0x3bdd56 = null === (_0x4199a2 = _0x56d41d.match(_0x261219)) || undefined === _0x4199a2 ? undefined : _0x4199a2[0];
    if (!_0x3bdd56) {
      return null;
    }
    var _0x11f75c = _0x502d35(_0x3bdd56.matchAll(_0x2cf093)).map(function (_0xf12a0a) {
      return _0xf12a0a[1];
    });
    if (_0x11f75c.length < 5) {
      return null;
    }
    var _0x586820 = _0x11f75c[2];
    var _0x24f274 = _0x11f75c[3];
    var _0x2c9699 = _0x11f75c[4];
    return _0x13cbb1.test(_0x586820) && _0x13cbb1.test(_0x24f274) && _0x571b1b.test(_0x2c9699) ? {
      LZ: _0x586820,
      LJ: _0x24f274,
      LE: _0x2c9699
    } : null;
  }
  function _0x1a4af4(_0x188b2c) {
    return _0x188b2c.split(";").reduce(function (_0x433712, _0x1eb17b) {
      var _0xf3f385 = _0x1eb17b.split("=").map(function (_0x4012f5) {
        return _0x4012f5.trim();
      });
      var _0x538145 = _0x2de41c(_0xf3f385, 2);
      var _0x575fe0 = _0x538145[0];
      var _0x55e1fe = _0x538145[1];
      _0x575fe0 && _0x55e1fe && (_0x433712[_0x575fe0] = _0x55e1fe);
      return _0x433712;
    }, {});
  }
  function _0x19cddf() {
    var _0x2df5ea;
    var _0x1b38ce;
    var _0x46e323 = _0x474b42(null !== (_0x2df5ea = null !== (_0x1b38ce = $request.headers.Cookie) && undefined !== _0x1b38ce ? _0x1b38ce : $request.headers.cookie) && undefined !== _0x2df5ea ? _0x2df5ea : "");
    if (!_0x46e323 || !_0x46e323.includes("auth=")) {
      throw _0x5e9fc7(_0x1f1782, "❌ 获取Cookie失败", "请检查Cookie是否正确"), new Error("请检查Cookie是否正确");
    }
    _0x23eee5.setItem("wuai_cookie", _0x46e323);
    _0x406dae.debug("Cookie: ".concat(_0x46e323));
    _0x5e9fc7(_0x1f1782, "", "写入Cookie成功 🎉");
  }
  function _0x4f7a78(_0x348e1d, _0x2e7245, _0x2f084e, _0xc4aaee) {
    return _0x29e32b.apply(this, arguments);
  }
  function _0x29e32b() {
    _0x29e32b = _0x291b0c(_0x53d7e9().mark(function _0xf09d5e(_0x7ab34, _0x2de9fc, _0x3586d8, _0x2b8b20) {
      return _0x53d7e9().wrap(function (_0x220bfe) {
        for (;;) {
          switch (_0x220bfe.prev = _0x220bfe.next) {
            case 0:
              if (!_0x75381d) {
                _0x220bfe.next = 5;
                break;
              }
              _0x220bfe.next = 3;
              return _0xc514cf(_0x7ab34, _0x2de9fc, _0x3586d8, _0x2b8b20);
            case 3:
              _0x220bfe.next = 6;
              break;
            case 5:
              _0x5e9fc7(_0x7ab34, _0x2de9fc, _0x3586d8, _0x2b8b20);
            case 6:
            case "end":
              return _0x220bfe.stop();
          }
        }
      }, _0xf09d5e);
    }));
    return _0x29e32b.apply(this, arguments);
  }
  function _0xc514cf(_0x19b04f, _0x4bca25, _0x9c0c05) {
    return _0x4ffc77.apply(this, arguments);
  }
  function _0x4ffc77() {
    _0x4ffc77 = _0x291b0c(_0x53d7e9().mark(function _0xaebba2(_0x2e65eb, _0x1d3188, _0x207ed7) {
      var _0x14e2f3;
      var _0x400f46;
      var _0x510898;
      var _0x56c21c;
      var _0x38bc9b;
      var _0xea6798;
      var _0x19e95b;
      var _0x1dd4ca;
      var _0x11af59;
      var _0x230bf0 = arguments;
      return _0x53d7e9().wrap(function (_0x17938c) {
        for (;;) {
          switch (_0x17938c.prev = _0x17938c.next) {
            case 0:
              var _0x2180af = {
                "content-type": "application/json; charset=utf-8"
              };
              _0x14e2f3 = _0x230bf0.length > 3 && undefined !== _0x230bf0[3] ? _0x230bf0[3] : {};
              _0x400f46 = (null == _0x14e2f3 ? undefined : _0x14e2f3["open-url"]) || (null == _0x14e2f3 ? undefined : _0x14e2f3.openUrl) || (null == _0x14e2f3 ? undefined : _0x14e2f3.$open) || (null == _0x14e2f3 ? undefined : _0x14e2f3.url) || "";
              _0x510898 = (null == _0x14e2f3 ? undefined : _0x14e2f3["update-pasteboard"]) || (null == _0x14e2f3 ? undefined : _0x14e2f3.updatePasteboard) || (null == _0x14e2f3 ? undefined : _0x14e2f3.$copy) || (null == _0x14e2f3 ? undefined : _0x14e2f3.copy) || "";
              _0x56c21c = (null == _0x14e2f3 ? undefined : _0x14e2f3["media-url"]) || (null == _0x14e2f3 ? undefined : _0x14e2f3.mediaUrl) || (null == _0x14e2f3 ? undefined : _0x14e2f3.$media) || "";
              ["open-url", "openUrl", "$open", "url", "update-pasteboard", "updatePasteboard", "$copy", "copy", "media-url", "mediaUrl", "$media"].forEach(function (_0x24d282) {
                return delete _0x14e2f3[_0x24d282];
              });
              _0x1d3188 && (_0x207ed7 = _0x1d3188 + "\n" + _0x207ed7);
              _0x38bc9b = _0x382c61(_0x382c61({}, _0x14e2f3), {}, {
                url: _0x400f46,
                copy: _0x510898,
                icon: _0x56c21c,
                title: _0x2e65eb,
                body: _0x207ed7
              });
              _0xea6798 = {
                url: "https://api.day.app/" + _0x75381d,
                headers: _0x2180af,
                body: _0xc46d47(_0x38bc9b)
              };
              _0x19e95b = 0;
            case 9:
              if (!(_0x19e95b < 3)) {
                _0x17938c.next = 27;
                break;
              }
              _0x406dae.info("Bark第".concat(_0x19e95b + 1, "次推送尝试"));
              _0x17938c.next = 13;
              return _0x5abeee(_0xea6798);
            case 13:
              if (_0x1dd4ca = _0x17938c.sent, !_0x1dd4ca.ok) {
                _0x17938c.next = 23;
                break;
              }
              _0x11af59 = ["=========📣推送成功📣=========", _0x2e65eb, _0x207ed7];
              _0x400f46 && _0x11af59.push("跳转链接: ".concat(_0x400f46));
              _0x510898 && _0x11af59.push("复制内容: ".concat(_0x510898));
              _0x56c21c && _0x11af59.push("媒体链接: ".concat(_0x56c21c));
              _0x406dae.log.apply(_0x406dae, _0x11af59);
              return _0x17938c.abrupt("break", 27);
            case 23:
              _0x406dae.warn("Bark推送失败", _0x1dd4ca.body || "");
            case 24:
              _0x19e95b++;
              _0x17938c.next = 9;
              break;
            case 27:
            case "end":
              return _0x17938c.stop();
          }
        }
      }, _0xaebba2);
    }));
    return _0x4ffc77.apply(this, arguments);
  }
  function _0x39c89c(_0x2c3cd1) {
    var _0x5797ec;
    var _0x8090b;
    _0x8090b = _0x2c3cd1.headers;
    var _0x3bfa13 = Object.fromEntries(Object.entries(_0x8090b).map(function (_0x151aad) {
      var _0x4f2ab2 = _0x4550fa(_0x151aad, 2);
      var _0x281963 = _0x4f2ab2[0];
      var _0x539a6c = _0x4f2ab2[1];
      return [_0x281963.toLowerCase(), _0x539a6c];
    }));
    var _0x38f928 = _0x3bfa13["set-cookie"];
    return Array.isArray(_0x38f928) ? _0x38f928.map(function (_0x355f4f) {
      return _0x355f4f.split(";")[0];
    }).join(";") : (null == _0x38f928 || null === (_0x5797ec = _0x38f928.split(",")) || undefined === _0x5797ec || null === (_0x5797ec = _0x5797ec.map(function (_0x8f8117) {
      return _0x8f8117.split(";")[0];
    })) || undefined === _0x5797ec ? undefined : _0x5797ec.join(";")) || _0x38f928;
  }
  function _0x45dea1(_0x568c4f, _0x5a163a) {
    var _0xb25089 = _0x1a4af4(_0x568c4f);
    var _0xec0f8b = _0x1a4af4(_0x5a163a);
    return Object.entries(Object.assign(_0xb25089, _0xec0f8b)).map(function (_0xf15d54) {
      var _0x349825 = _0x2de41c(_0xf15d54, 2);
      var _0x274165 = _0x349825[0];
      var _0x5f52de = _0x349825[1];
      return "".concat(_0x274165, "=").concat(_0x5f52de);
    }).join("; ");
  }
  _0x406dae.debug("Cookie: ".concat(_0x3cd9f6));
  _0x291b0c(_0x53d7e9().mark(function _0x5e4127() {
    return _0x53d7e9().wrap(function (_0x3a5dfa) {
      for (;;) {
        switch (_0x3a5dfa.prev = _0x3a5dfa.next) {
          case 0:
            if (null === globalThis || undefined === globalThis || !globalThis.$request) {
              _0x3a5dfa.next = 4;
              break;
            }
            _0x19cddf();
            _0x3a5dfa.next = 6;
            break;
          case 4:
            _0x3a5dfa.next = 6;
            return _0x1c7193();
          case 6:
          case "end":
            return _0x3a5dfa.stop();
        }
      }
    }, _0x5e4127);
  }))().catch(function (_0x52d88e) {
    return _0x406dae.error(_0x52d88e);
  }).finally(function (_0x2df62e = {}) {
    switch (_0x476693) {
      case "Surge":
        _0x2df62e.policy && _0xac9f2e.set(_0x2df62e, "headers.X-Surge-Policy", _0x2df62e.policy);
        _0x406dae.log("🚩 执行结束!", "🕛 " + (new Date().getTime() / 1000 - $script.startTime) + " 秒");
        $done(_0x2df62e);
        break;
      case "Loon":
        _0x2df62e.policy && (_0x2df62e.node = _0x2df62e.policy);
        _0x406dae.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(_0x2df62e);
        break;
      case "Stash":
        _0x2df62e.policy && _0xac9f2e.set(_0x2df62e, "headers.X-Stash-Selected-Proxy", encodeURI(_0x2df62e.policy));
        _0x406dae.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(_0x2df62e);
        break;
      case "Egern":
      case "Shadowrocket":
        _0x406dae.log("🚩 执行结束!");
        $done(_0x2df62e);
        break;
      case "Quantumult X":
        switch (_0x2df62e.policy && _0xac9f2e.set(_0x2df62e, "opts.policy", _0x2df62e.policy), _0x2df62e = _0xac9f2e.pick(_0x2df62e, ["status", "url", "headers", "body", "bodyBytes"]), typeof _0x2df62e.status) {
          case "number":
            _0x2df62e.status = "HTTP/1.1 " + _0x2df62e.status + " " + _0x44f1c2[_0x2df62e.status];
            break;
          case "string":
          case "undefined":
            break;
          default:
            throw new TypeError(Function.name + ": 参数类型错误, status 必须为数字或字符串");
        }
        _0x2df62e.body instanceof ArrayBuffer ? (_0x2df62e.bodyBytes = _0x2df62e.body, _0x2df62e.body = undefined) : ArrayBuffer.isView(_0x2df62e.body) ? (_0x2df62e.bodyBytes = _0x2df62e.body.buffer.slice(_0x2df62e.body.byteOffset, _0x2df62e.body.byteLength + _0x2df62e.body.byteOffset), _0x2df62e.body = undefined) : _0x2df62e.body && (_0x2df62e.bodyBytes = undefined);
        _0x406dae.log("🚩 执行结束!");
        $done(_0x2df62e);
        break;
      case "Worker":
      default:
        _0x406dae.log("🚩 执行结束!");
        break;
      case "Node.js":
        _0x406dae.log("🚩 执行结束!");
        process.exit(1);
    }
  });
})();