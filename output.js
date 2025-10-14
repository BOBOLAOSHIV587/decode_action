//Tue Oct 14 2025 15:13:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x6db53a = function () {
  let _0x47d8e8 = true;
  return function (_0x243933, _0x37609c) {
    const _0x4203ad = _0x47d8e8 ? function () {
      {
        if (_0x37609c) {
          {
            const _0x5bfac4 = _0x37609c.apply(_0x243933, arguments);
            _0x37609c = null;
            return _0x5bfac4;
          }
        }
      }
    } : function () {};
    _0x47d8e8 = false;
    return _0x4203ad;
  };
}();
const _0xaec11e = _0x6db53a(this, function () {
  const _0x487a2e = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const _0x2a1bd0 = function () {
    const _0x183fc6 = new _0x487a2e.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
    return !_0x183fc6.test(_0xaec11e);
  };
  return _0x2a1bd0();
});
_0xaec11e();
const $ = Env("酷我音乐");
!(async () => {
  if (typeof $request !== "undefined" && $request.url.includes("/commercia/vip/player/getStyleListByModel")) {
    const _0x1abd46 = $request.url;
    const _0x3a94e7 = _0x1abd46.replace(/loginUid=\d+/g, "loginUid=admin");
    if (_0x1abd46 !== _0x3a94e7) {
      {
        const _0x3f587a = {
          url: _0x3a94e7
        };
        $.done(_0x3f587a);
        return;
      }
    }
  }
  const _0x1fc4ed = $.toObj($response.body) || {};
  const _0x204a3f = $request.url;
  switch (true) {
    case /anymatch\.kuwo\.cn\/mobi\.s\?f=kwxs/.test(_0x204a3f):
      const _0x2f6488 = $.getval("kuwo_free_current_id");
      if (!_0x2f6488) {
        $.done($response.body);
        return;
      }
      const _0x34b0c5 = $.getjson("kuwo_audio_cache") || {};
      const _0x518c6e = Date.now();
      if (_0x34b0c5[_0x2f6488] && _0x34b0c5[_0x2f6488].expireTime > _0x518c6e && _0x34b0c5[_0x2f6488].validAudioData) {
        const _0x3f0c98 = {
          body: _0x34b0c5[_0x2f6488].validAudioData
        };
        $.done(_0x3f0c98);
        return;
      }
      const _0x2f8373 = {
        bitrate: "2000kflac",
        minBitrate: 320,
        maxBitrate: 2000
      };
      const _0x47950e = {
        bitrate: "320kmp3",
        minBitrate: 128,
        maxBitrate: 320
      };
      const _0x4f54b5 = {
        bitrate: "192kmp3",
        minBitrate: 0,
        maxBitrate: 192
      };
      const _0x32b46a = [_0x2f8373, _0x47950e, _0x4f54b5];
      let _0x3a0db1 = null;
      for (const _0x1708fa of _0x32b46a) {
        try {
          const _0x468208 = "https://mobi.kuwo.cn/mobi.s?f=web&user=1008611&source=kwplayerhd_ar_4.3.0.8_tianbao_T1A_qirui.apk&type=convert_url_with_sign&br=" + _0x1708fa.bitrate + "&rid=" + _0x2f6488;
          const _0x28ddc1 = {
            url: _0x468208,
            timeout: 3000
          };
          const _0xd8bfc2 = await $.http.get(_0x28ddc1);
          if (_0xd8bfc2.status === 200) {
            const _0x3a6dec = $.toObj(_0xd8bfc2.body);
            if (_0x3a6dec?.["code"] === 200 && _0x3a6dec?.["data"]?.["url"]) {
              const _0x2521f4 = parseInt(_0x3a6dec.data.bitrate) || 0;
              if (_0x1708fa.minBitrate === 0 || _0x2521f4 > _0x1708fa.minBitrate && _0x2521f4 <= _0x1708fa.maxBitrate) {
                _0x3a0db1 = _0x3a6dec;
                _0x34b0c5[_0x2f6488] = {
                  validAudioData: $.toStr(_0x3a0db1),
                  expireTime: _0x518c6e + 300000,
                  hitBitrate: _0x1708fa.bitrate
                };
                $.setjson(_0x34b0c5, "kuwo_audio_cache");
                $.done({
                  body: $.toStr(_0x3a0db1)
                });
                return;
              }
            }
          }
        } catch (_0x5b0459) {
          continue;
        }
      }
      break;
    case /mobilebasedata\.kuwo\.cn\/api\/music\/info\?f/.test(_0x204a3f):
      const _0x39497a = _0x1fc4ed.data?.["id"];
      if (typeof _0x39497a === "number") {
        $.setval(_0x39497a + "", "kuwo_free_current_id");
        const _0x489b1b = $.getjson("kuwo_audio_cache") || {};
        const _0x5ba4cf = {
          expireTime: 0,
          validAudioData: "",
          hitBitrate: ""
        };
        if (!_0x489b1b[_0x39497a]) {
          _0x489b1b[_0x39497a] = _0x5ba4cf;
        }
        $.setjson(_0x489b1b, "kuwo_audio_cache");
      }
      break;
    case /musicpay\.kuwo\.cn\/music\.pay\?newver=3/.test(_0x204a3f):
      const _0x41bd0b = _0x1fc4ed.songs[0].audio[0].pid;
      const _0xc52c06 = _0x1fc4ed.songs[0].audio[0].price;
      const _0xf39791 = _0x1fc4ed.songs[0].audio[0].policy;
      const _0x3a8a6f = _0xf39791 + "_1";
      const _0x3791d0 = _0x1fc4ed.songs[0].audio.length;
      for (let _0x17c9a7 = 0; _0x17c9a7 < _0x3791d0; _0x17c9a7++) {
        {
          _0x1fc4ed.songs[0].audio[_0x17c9a7].st = 0;
        }
      }
      const _0x1ac0f7 = {
        couponNum: 998,
        isSVip: 1,
        isShow: 1
      };
      _0x1fc4ed.songs[0].mp3Download = _0x1ac0f7;
      const _0x432283 = _0x1fc4ed.songs[0];
      _0x1fc4ed.user = [{
        pid: _0x41bd0b,
        type: _0xf39791,
        name: _0x3a8a6f,
        categray: _0x3a8a6f,
        id: _0x1fc4ed.songs[0].id,
        order: 375787919,
        final: [],
        buy: 1657425321,
        begin: 1657425321,
        end: 4180305321,
        CurEnd: 0,
        playCnt: 0,
        playUpper: 300,
        downCnt: 0,
        downUpper: 300,
        playVideoCnt: 0,
        playVideoUpper: 3000,
        downVideoCnt: 0,
        downVideoUpper: 3000,
        price: _0xc52c06,
        period: 1000,
        feetype: 0,
        info: _0x432283
      }];
      break;
    case /rich\.kuwo\.cn\/AdService\/kaiping\/adinfo/.test(_0x204a3f):
    case /mobilead\.kuwo\.cn\/EcomResourceServer\/adEarnGuajian\/adinfo/.test(_0x204a3f):
    case /mobilead\.kuwo\.cn\/EcomResourceServer\/getMotor\.do/.test(_0x204a3f):
    case /tingshu\.kuwo\.cn\/api\/v2\/pay\/app\/getConfigInfo/.test(_0x204a3f):
    case /wapi\.kuwo\.cn\/openapi\/v1\/user\/freeMode\/h5\/text/.test(_0x204a3f):
    case /wapi\.kuwo\.cn\/openapi\/v1\/operate\/message\/info/.test(_0x204a3f):
    case /vip1\.kuwo\.cn\/vip\/v2\/sysinfo/.test(_0x204a3f):
    case /wapi\.kuwo\.cn\/openapi\/v1\/user\/dolby\/text/.test(_0x204a3f):
    case /vip1\.kuwo\.cn\/commercia\/recall\/pop\/jxhGearInfo/.test(_0x204a3f):
      const _0x145dbb = {
        body: "{}"
      };
      $.done(_0x145dbb);
      return;
    case $request.url.includes("/a.p"):
      let _0x5dc667 = $.toStr(_0x1fc4ed);
      if (_0x1fc4ed.songs && Object.keys(_0x1fc4ed.songs).length > 0) {
        const _0x7e758c = _0x1fc4ed.songs[Object.keys(_0x1fc4ed.songs)[0]].id;
        $.setval(_0x7e758c + "", "kuwo_free_current_id");
      }
      if ($request?.["method"]["toUpperCase"]() === "POST") {
        {
          _0x5dc667 = $response.body.replace(/"playright":\d+/g, "\"playright\":1").replace(/"downright":\d+/g, "\"downright\":1").replace(/"policytype":\d+/g, "\"policytype\":3").replace(/"policy":\d+/g, "\"policy\":5");
        }
      }
      if ($request.url.includes("getvip")) {
        {
          const _0x1bb636 = {
            end: 32495443200,
            bought_vip: 1,
            type: 1,
            period: 31,
            bought_vip_end: 32495443200
          };
          _0x1fc4ed.packs = _0x1bb636;
          _0x5dc667 = $.toStr(_0x1fc4ed);
        }
      }
      const _0x5698ac = {
        body: _0x5dc667
      };
      $.done(_0x5698ac);
      return;
    case /vip1\.kuwo\.cn\/commercia\/vip\/dressCenter\/getResourceList/.test(_0x204a3f):
      _0x1fc4ed.data && Array.isArray(_0x1fc4ed.data) && _0x1fc4ed.data.forEach(_0x24449b => {
        _0x24449b.limitType = "1";
      });
      break;
    case /pay\/user\/info/.test(_0x204a3f):
      _0x1fc4ed.data.vipExpires = 4077187200;
      _0x1fc4ed.data.vipType = 1;
      _0x1fc4ed.data.adImgUrl = "";
      break;
    case /vip1\.kuwo\.cn\/commercia\/vipTab\/myTab\/base/.test(_0x204a3f):
      if (_0x1fc4ed.data?.["data"]?.["actBlock"]) {
        const _0x532df6 = {
          jumpType: 1,
          jumpUrl: "https://t.me/GieGie777"
        };
        const _0x566c67 = {
          id: 8,
          configType: "act",
          headImg: "",
          title: "作者电报频道",
          subTitle: "https://t.me/GieGie777",
          jumpShow: 1,
          jump: _0x532df6,
          desc: "欢迎加入电报频道"
        };
        _0x1fc4ed.data.data.actBlock = _0x566c67;
        _0x1fc4ed.data.data.memCenter && (_0x1fc4ed.data.data.memCenter.subTitle = "尊贵VIP会员，畅享超多特权", _0x1fc4ed.data.data.memCenter.btnText = "已开通");
        _0x1fc4ed.data.type = 2;
      }
      break;
    case /wapi\.kuwo\.cn\/openapi\/v1\/operate\/homePage/.test(_0x204a3f):
      _0x1fc4ed.data?.["homeTop"]?.["length"] && (_0x1fc4ed.data.homeTop = _0x1fc4ed.data.homeTop.filter(_0x527f5c => ["热门", "发现", "推荐", "听书"].includes(_0x527f5c.title)), _0x1fc4ed.data.vipAdExpireTime = 4077187200, _0x1fc4ed.data.freemode = 1, _0x1fc4ed.data.adVip = 1);
      break;
    case /vip\/v2\/theme/.test(_0x204a3f):
      if (_0x1fc4ed.data?.["needBieds"] !== undefined) {
        _0x1fc4ed.data.needBieds = null;
      }
      break;
    case /vip1\.kuwo\.cn\/commercia\/userAssets\/downloadCoupon\/reduce/.test(_0x204a3f):
      _0x1fc4ed.code = 200;
      break;
    case /vip\/enc/.test(_0x204a3f):
      const _0x4e56bb = {
        body: "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"
      };
      $.done(_0x4e56bb);
      return;
  }
  $.done({
    body: $.toStr(_0x1fc4ed)
  });
})().catch(_0x5ac2c8 => {}).finally(() => $.done({}));
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.isMute = false;
      this.isNeedRewrite = false;
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          policy: "DIRECT",
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {}
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
    }
    log(...t) {}
    logErr(t, e) {}
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}