//Thu Sep 25 2025 17:37:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ENV = {
  isQX: typeof $task !== "undefined",
  isLoon: typeof $loon !== "undefined",
  isSurge: typeof $httpClient !== "undefined" && typeof $loon === "undefined"
};
const _0x9ce6ee = {
  isVip: 1,
  isVipBoolean: true,
  vipType: 1,
  payVipType: 1,
  expireDate: 3742762088000,
  isPayVipBoolean: true,
  isBigVipBoolean: true,
  bigExpireDate: 3742762088000,
  ctExpireDate: 3742762088000,
  actExpireDate: 3742762088000,
  payExpireDate: 3742762088000,
  isCtVipBoolean: true,
  isActVipBoolean: true,
  isSigned: 1,
  isSignedBoolean: true,
  signedCount: 999,
  redFlower: 999,
  lastOrderPrice: 0,
  lastOrderSigned: 0
};
const _0x1c9cfa = {
  vipType: 1,
  authType: 1,
  isVip: 1,
  payVipType: 1
};
const _0x199ee4 = {
  vipType: 1,
  authType: 1,
  isVip: 1,
  payVipType: 1,
  nickname: "https://t.me/GieGie777",
  headImg: "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg",
  headOuterImg: "https://bodiancdn.kuwo.cn/file/bc92ceb2fb555e34246cdf4f558015ec.gif"
};
const _0x1c87ce = {
  csIsFree: 0,
  csRemainSeconds: 0,
  csExpireDate: 0,
  csCanExtend: 1
};
const VIP_CONFIG = {
  payInfo: _0x9ce6ee,
  loginInfo: _0x1c9cfa,
  userInfo: _0x199ee4,
  freeInfo: _0x1c87ce
};
const _0xdc9000 = {
  key: "151580",
  value: "1"
};
const _0x5c2595 = {
  enable_skip_to_animation: true,
  render_mode: 0,
  webview_render_wait_time: 200,
  slide_sensitiveness: 110,
  fobid_bgsl: true,
  contract_rl_report: false
};
const _0x3c9d52 = {
  end: 0,
  is_show_track: false,
  begin: 0,
  track_width: 0,
  is_open_vibrate: false,
  title: "",
  track_color: "#FFFFFF",
  description: ""
};
const _0x559e69 = {
  is_empty: 1,
  splash_switch: _0x5c2595,
  video: "",
  img: "",
  interactive: _0x3c9d52,
  app_landing_page: 0,
  jump_android_market_info: null,
  pkg_download_schema: "",
  stay_report_url: "",
  video_report_url: "",
  landing_page_report_url: ""
};
const _0x2e8c99 = {
  dr: 0,
  msg: "",
  ret: 0,
  list: [_0x559e69]
};
const _0x375dc9 = {
  "7002312938192279": _0x2e8c99
};
const _0x1640ac = {
  responsed_ad_data: ""
};
const EMPTY_AD_RESPONSE = {
  reqinterval: 1740,
  req_exp_list: [_0xdc9000],
  data: _0x375dc9,
  last_ads: _0x1640ac,
  msg: "",
  dc: 0,
  ret: 0,
  rpt: 0
};
const _0x2996c7 = {
  total: 999,
  bgCount: 0,
  monthCount: 999
};
const _0x33648d = {
  total: 999,
  bgCount: 0,
  monthCount: 999
};
const _0x2c8f6c = {
  zc: _0x2996c7,
  common: _0x33648d
};
const _0x4cc70f = {
  zcTips: "高品质MP3格式，下载后永久拥有。波点大会员每月获赠10张珍藏下载券（当月有效，不可累积）"
};
const _0x5a7b33 = {
  balance: _0x2c8f6c,
  tips: _0x4cc70f
};
const DOWNLOAD_CONFIG_RESPONSE = {
  code: 200,
  reqId: "",
  data: _0x5a7b33,
  msg: "success",
  profileId: "site",
  curTime: 0
};
function safeJsonParse(_0x594bc9) {
  try {
    {
      return JSON.parse(_0x594bc9);
    }
  } catch {
    return null;
  }
}
function generateRandomId(_0x2ce57a = 32) {
  const _0x41e42f = {
    length: _0x2ce57a
  };
  return Array.from(_0x41e42f, () => "abcdef0123456789"[Math.random() * 16 | 0]).join("");
}
function getRandomInt(_0x5bf8ca, _0x54b09c) {
  return Math.floor(Math.random() * (_0x54b09c - _0x5bf8ca + 1)) + _0x5bf8ca;
}
function getUrlParam(_0x1a4c99, _0x4d98ea) {
  if (!_0x1a4c99) {
    return null;
  }
  try {
    {
      return new URL(_0x1a4c99).searchParams.get(_0x4d98ea);
    }
  } catch {
    const _0x835dfb = _0x1a4c99.match(new RegExp(_0x4d98ea + "=([^&]+)"));
    return _0x835dfb ? decodeURIComponent(_0x835dfb[1]) : null;
  }
}
function httpRequest(_0x263fec, _0x509c35 = 5000) {
  return new Promise(_0x2f41fe => {
    {
      const _0x3cf758 = {
        url: _0x263fec,
        timeout: _0x509c35
      };
      const _0x4c13b7 = {
        url: _0x263fec,
        timeout: _0x509c35
      };
      const _0x1b82f8 = {
        statusCode: 500,
        body: null
      };
      if (ENV.isQX) {
        $task.fetch(_0x3cf758).then(_0x2f41fe);
      } else {
        if (ENV.isLoon || ENV.isSurge) {
          $httpClient.get(_0x4c13b7, (_0x238a9c, _0xec30dd, _0x4b39f4) => {
            const _0xfc1c23 = {
              statusCode: _0x238a9c ? 500 : _0xec30dd.status || 200,
              body: _0x238a9c ? null : _0x4b39f4
            };
            _0x2f41fe(_0xfc1c23);
          });
        } else {
          _0x2f41fe(_0x1b82f8);
        }
      }
    }
  });
}
function done(_0x37f59c = {}) {
  if (typeof $done !== "undefined") {
    $done(_0x37f59c);
  }
}
function generateAudioUrl(_0x5a52b6, _0x12991a) {
  return "https://mobi.kuwo.cn/mobi.s?f=web&user=" + getRandomInt(1000000, 10000000) + "&source=kwplayerhd_ar_4.3.0.8_tianbao_T1A_qirui.apk&type=convert_url_with_sign&br=" + _0x12991a + "&rid=" + _0x5a52b6;
}
function withResponseBody(_0x752bf2) {
  return () => {
    {
      const _0x181d66 = safeJsonParse($response.body);
      if (!_0x181d66) {
        return done();
      }
      _0x752bf2(_0x181d66);
      done({
        body: JSON.stringify(_0x181d66)
      });
    }
  };
}
const handleUserInfo = withResponseBody(_0x1f89cb => {
  _0x1f89cb.data = _0x1f89cb.data || {};
  _0x1f89cb.data.payInfo = Object.assign(_0x1f89cb.data.payInfo || {}, VIP_CONFIG.payInfo);
  _0x1f89cb.data.userInfo = Object.assign(_0x1f89cb.data.userInfo || {}, VIP_CONFIG.userInfo);
});
const handleLogin = withResponseBody(_0x4cb8ba => {
  if (!_0x4cb8ba.data) {
    return;
  }
  _0x4cb8ba.data.payInfo = Object.assign(_0x4cb8ba.data.payInfo || {}, VIP_CONFIG.payInfo);
  _0x4cb8ba.data.userInfo = Object.assign(_0x4cb8ba.data.userInfo || {}, VIP_CONFIG.loginInfo);
  _0x4cb8ba.data.userFreeInfo = Object.assign(_0x4cb8ba.data.userFreeInfo || {}, VIP_CONFIG.freeInfo);
  if (_0x4cb8ba.data.userInfo) {
    {
      _0x4cb8ba.data.userInfo.headOuterImg = VIP_CONFIG.userInfo.headOuterImg;
    }
  }
});
function handleSplashAd() {
  done({
    body: JSON.stringify(EMPTY_AD_RESPONSE)
  });
}
const handleGlobalConfig = withResponseBody(_0x28cc3f => {
  if (!_0x28cc3f.data) {
    return;
  }
  _0x28cc3f.data.showShopEntry = false;
  _0x28cc3f.data.idolTabShow = true;
});
const handleHomeModule = withResponseBody(_0x2d97b8 => {
  _0x2d97b8.data = _0x2d97b8.data || {};
  ["bannerList", "adList", "adInfo", "promotionList", "commercialList", "ads", "advertisement", "promotion", "focusList", "recommendAD", "specialList"].forEach(_0x50e4af => {
    if (_0x2d97b8.data[_0x50e4af]) {
      delete _0x2d97b8.data[_0x50e4af];
    }
  });
});
function handleEmptyResponse() {
  const _0x26d9ce = {
    code: 439,
    data: {}
  };
  done({
    body: JSON.stringify(_0x26d9ce)
  });
}
function handleCheckRight() {
  const _0x5c589a = {
    status: 7
  };
  done({
    body: JSON.stringify({
      code: 200,
      reqId: generateRandomId(32),
      data: _0x5c589a,
      msg: "success",
      profileId: "site",
      curTime: Date.now()
    })
  });
}
async function getPlayAudioData(_0x8617b8) {
  if (!_0x8617b8) {
    return null;
  }
  try {
    let _0x9648c = generateAudioUrl(_0x8617b8, "320kmp3");
    let _0x1dd24c = await httpRequest(_0x9648c, 3000);
    let _0x58cf29 = safeJsonParse(_0x1dd24c.body);
    if (_0x58cf29?.["code"] === 200 && _0x58cf29?.["data"]?.["url"]) {
      {
        const _0x347096 = parseInt(_0x58cf29.data.bitrate) || 0;
        if (_0x347096 > 128 && _0x347096 <= 320) {
          return _0x58cf29;
        }
      }
    }
    _0x9648c = generateAudioUrl(_0x8617b8, "192kmp3");
    _0x1dd24c = await httpRequest(_0x9648c, 3000);
    _0x58cf29 = safeJsonParse(_0x1dd24c.body);
    return _0x58cf29?.["code"] === 200 && _0x58cf29?.["data"]?.["url"] ? _0x58cf29 : null;
  } catch {
    {
      return null;
    }
  }
}
async function getDownloadAudioData(_0x4d24aa) {
  if (!_0x4d24aa) {
    return null;
  }
  try {
    {
      const _0x1f2abc = generateAudioUrl(_0x4d24aa, "2000kflac");
      const _0xa9251b = await httpRequest(_0x1f2abc, 3000);
      const _0x3a8885 = safeJsonParse(_0xa9251b.body);
      return _0x3a8885?.["code"] === 200 && _0x3a8885?.["data"]?.["url"] ? _0x3a8885 : null;
    }
  } catch {
    return null;
  }
}
async function handleAudioUrl() {
  const _0x456acb = getUrlParam($request.url, "musicId");
  const _0x31767c = await getPlayAudioData(_0x456acb);
  const _0xa3fa71 = {
    body: $response.body
  };
  if (!_0x31767c) {
    return done(_0xa3fa71);
  }
  done({
    body: JSON.stringify({
      code: 200,
      reqId: _0x31767c.data?.["sig"] || generateRandomId(32),
      data: {
        bitrate: parseInt(_0x31767c.data?.["bitrate"]) || 320,
        respCode: 200,
        audioUrl: _0x31767c.data.url,
        audioHttpsUrl: _0x31767c.data.url,
        p2pAudioSourceId: _0x31767c.data?.["p2p_audiosourceid"] || "",
        format: _0x31767c.data?.["format"] || "mp3"
      },
      msg: "success",
      profileId: "site",
      curTime: Date.now()
    })
  });
}
async function handleDownloadInfo() {
  const _0xb1a89f = getUrlParam($request.url, "musicId");
  const _0x28ac03 = await getDownloadAudioData(_0xb1a89f);
  const _0x5ebe2e = {
    body: $response.body
  };
  if (!_0x28ac03) {
    return done(_0x5ebe2e);
  }
  done({
    body: JSON.stringify({
      code: 200,
      reqId: generateRandomId(32),
      data: {
        url: _0x28ac03.data.url,
        duration: _0x28ac03.data.duration,
        audioInfo: {
          size: "15.2Mb",
          p2pAudioSourceId: _0x28ac03.data?.["p2p_audiosourceid"] || generateRandomId(40),
          level: "p",
          bitrate: _0x28ac03.data?.["bitrate"] ? _0x28ac03.data.bitrate.toString() : "2000",
          format: _0x28ac03.data?.["format"] || "flac"
        }
      },
      msg: "success",
      profileId: "site",
      curTime: Date.now()
    })
  });
}
function handleDownloadConfig() {
  const _0x12a67e = JSON.parse(JSON.stringify(DOWNLOAD_CONFIG_RESPONSE));
  _0x12a67e.reqId = generateRandomId(32);
  _0x12a67e.curTime = Date.now();
  done({
    body: JSON.stringify(_0x12a67e)
  });
}
const _0x14d8ce = {
  pattern: "/api/ucenter/users/pub",
  handler: handleUserInfo
};
const _0x5bfc2a = {
  pattern: "/api/ucenter/users/login",
  handler: handleLogin
};
const _0x15bac2 = {
  pattern: "/api/play/music/v2/audioUrl",
  handler: handleAudioUrl
};
const _0x5bcf1e = {
  pattern: "/api/play/music/v2/checkRight",
  handler: handleCheckRight
};
const _0x53b146 = {
  pattern: "/api/service/music/download/info",
  handler: handleDownloadInfo
};
const _0x28e2b4 = {
  pattern: "/api/service/music/download/config",
  handler: handleDownloadConfig
};
const _0x66c524 = {
  pattern: "/api/service/home/module",
  handler: handleHomeModule
};
const _0x2d5424 = {
  pattern: "/api/service/global/config/scene",
  handler: handleGlobalConfig
};
const _0x1445c3 = {
  pattern: "l.qq.com/exapp?adposcount",
  handler: handleSplashAd
};
const _0x5c94bd = {
  pattern: "/api/play/advert/info",
  handler: handleEmptyResponse
};
const _0x4d18f2 = {
  pattern: "/api/service/global/config/vipEnter",
  handler: handleEmptyResponse
};
const _0x5acabe = {
  pattern: "/api/service/banner/positions",
  handler: handleEmptyResponse
};
const _0xa00aa = {
  pattern: "/api/search/topic/word/list",
  handler: handleEmptyResponse
};
const _0x58cd2f = {
  pattern: "/api/pay/vip/invitation/assist/popup",
  handler: handleEmptyResponse
};
const _0x4bb605 = {
  pattern: "/api/pay/sp/actVip",
  handler: handleEmptyResponse
};
const _0x1de04f = {
  pattern: "/api/pay/vip/invitation/swell/",
  handler: handleEmptyResponse
};
const _0x114212 = {
  pattern: "/api/pay/audition/url",
  handler: handleEmptyResponse
};
const _0x5bac22 = {
  pattern: "/api/service/advert/config",
  handler: handleEmptyResponse
};
const _0xecf539 = {
  pattern: "/api/advert/free/config",
  handler: handleEmptyResponse
};
const _0x4ddef6 = {
  pattern: "/api/pay/vip/lowPriceText",
  handler: handleEmptyResponse
};
const _0xe8fa26 = {
  pattern: "/api/popup/start/info",
  handler: handleEmptyResponse
};
const _0x53f2c0 = {
  pattern: "ab-bodian.kuwo.cn/abtest/ui/info",
  handler: handleEmptyResponse
};
const _0xc3091b = {
  pattern: "/api/rec/feed",
  handler: handleEmptyResponse
};
const _0x464102 = {
  pattern: "/style_factory/template_list",
  handler: handleEmptyResponse
};
const ROUTE_MAP = [_0x14d8ce, _0x5bfc2a, _0x15bac2, _0x5bcf1e, _0x53b146, _0x28e2b4, _0x66c524, _0x2d5424, _0x1445c3, _0x5c94bd, _0x4d18f2, _0x5acabe, _0xa00aa, _0x58cd2f, _0x4bb605, _0x1de04f, _0x114212, _0x5bac22, _0xecf539, _0x4ddef6, _0xe8fa26, _0x53f2c0, _0xc3091b, _0x464102];
function main() {
  const _0x5ae3c0 = $request?.["url"] || "";
  try {
    for (const {
      pattern: _0x1767b6,
      handler: _0x5739ab
    } of ROUTE_MAP) {
      if (_0x5ae3c0.includes(_0x1767b6)) {
        return _0x5739ab();
      }
    }
    done();
  } catch {
    done();
  }
}
if (typeof $response !== "undefined") {
  main();
} else {
  done();
}