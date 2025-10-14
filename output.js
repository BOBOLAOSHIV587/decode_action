//Tue Oct 14 2025 15:10:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ENV = {
  isQX: typeof $task !== "undefined",
  isLoon: typeof $loon !== "undefined",
  isSurge: typeof $httpClient !== "undefined" && typeof $loon === "undefined"
};
const _0x2ae565 = {
  isVip: 1,
  isVipBoolean: true,
  vipType: 1,
  payVipType: 1,
  expireDate: 32493834549000,
  isPayVipBoolean: true,
  isBigVipBoolean: true,
  bigExpireDate: 32493834549000,
  ctExpireDate: 32493834549000,
  actExpireDate: 32493834549000,
  payExpireDate: 32493834549000,
  isCtVipBoolean: true,
  isActVipBoolean: true,
  isSigned: 1,
  isSignedBoolean: true,
  signedCount: 999,
  redFlower: 999,
  lastOrderPrice: 0,
  lastOrderSigned: 0
};
const _0x172fe3 = {
  vipType: 1,
  authType: 1,
  isVip: 1,
  payVipType: 1
};
const _0x5d1488 = {
  vipType: 1,
  authType: 1,
  isVip: 1,
  payVipType: 1,
  nickname: "https://t.me/GieGie777",
  headImg: "https://zhongdu.oss-cn-beijing.aliyuncs.com/app/20250723/17532551159065978.jpg",
  headOuterImg: "https://bodiancdn.kuwo.cn/file/f72f9aa5b67a0310339714d8ebe9e590.gif"
};
const _0xbf3b29 = {
  csIsFree: 0,
  csRemainSeconds: 0,
  csExpireDate: 0,
  csCanExtend: 1
};
const VIP_CONFIG = {
  payInfo: _0x2ae565,
  loginInfo: _0x172fe3,
  userInfo: _0x5d1488,
  freeInfo: _0xbf3b29
};
const _0x3db9d0 = {
  bitrate: "2000kflac",
  minBitrate: 320,
  maxBitrate: 2000
};
const _0x248766 = {
  bitrate: "320kmp3",
  minBitrate: 128,
  maxBitrate: 320
};
const _0x20173e = {
  bitrate: "192kmp3",
  minBitrate: 0,
  maxBitrate: 192
};
const AUDIO_QUALITY_LEVELS = [_0x3db9d0, _0x248766, _0x20173e];
const _0x1da24c = {
  code: 200,
  reqId: "",
  msg: "success",
  profileId: "site",
  curTime: 0
};
const _0x1789a7 = {
  code: 439,
  data: {}
};
const _0x2fbeb1 = {
  key: "151580",
  value: "1"
};
const _0x390e29 = {
  enable_skip_to_animation: true,
  render_mode: 0,
  webview_render_wait_time: 200,
  slide_sensitiveness: 110,
  fobid_bgsl: true,
  contract_rl_report: false
};
const _0x5aadba = {
  end: 0,
  is_show_track: false,
  begin: 0,
  track_width: 0,
  is_open_vibrate: false,
  title: "",
  track_color: "#FFFFFF",
  description: ""
};
const _0x20f916 = {
  is_empty: 1,
  splash_switch: _0x390e29,
  video: "",
  img: "",
  interactive: _0x5aadba,
  app_landing_page: 0,
  jump_android_market_info: null,
  pkg_download_schema: "",
  stay_report_url: "",
  video_report_url: "",
  landing_page_report_url: ""
};
const _0x571b91 = {
  dr: 0,
  msg: "",
  ret: 0,
  list: [_0x20f916]
};
const _0x2b7d34 = {
  "7002312938192279": _0x571b91
};
const _0x10a46a = {
  responsed_ad_data: ""
};
const _0x599f94 = {
  reqinterval: 1740,
  req_exp_list: [_0x2fbeb1],
  data: _0x2b7d34,
  last_ads: _0x10a46a,
  msg: "",
  dc: 0,
  ret: 0,
  rpt: 0
};
const _0xc6d570 = {
  total: 999,
  bgCount: 0,
  monthCount: 999
};
const _0x30ba14 = {
  total: 999,
  bgCount: 0,
  monthCount: 999
};
const _0x2d42c4 = {
  zc: _0xc6d570,
  common: _0x30ba14
};
const _0x16a366 = {
  zcTips: "高品质MP3格式，下载后永久拥有。波点大会员每月获赠999张珍藏下载券（当月有效，不可累积）"
};
const _0x50b058 = {
  balance: _0x2d42c4,
  tips: _0x16a366
};
const _0x50d18a = {
  code: 200,
  reqId: "",
  data: _0x50b058,
  msg: "success",
  profileId: "site",
  curTime: 0
};
const _0x3c1cc8 = {
  status: 7
};
const _0x1b852c = {
  code: 200,
  reqId: "",
  data: _0x3c1cc8,
  msg: "success",
  profileId: "site",
  curTime: 0
};
const RESPONSE_TEMPLATES = {
  SUCCESS: _0x1da24c,
  EMPTY: _0x1789a7,
  SPLASH_AD: _0x599f94,
  DOWNLOAD_CONFIG: _0x50d18a,
  CHECK_RIGHT: _0x1b852c
};
function safeJsonParse(_0x2544b9) {
  try {
    {
      return JSON.parse(_0x2544b9);
    }
  } catch {
    {
      return null;
    }
  }
}
function generateRandomId(_0xc7ce53 = 32) {
  const _0x149244 = {
    length: _0xc7ce53
  };
  return Array.from(_0x149244, () => "abcdef0123456789"[Math.random() * 16 | 0]).join("");
}
function getRandomInt(_0x4292e9, _0x56e0f9) {
  return Math.floor(Math.random() * (_0x56e0f9 - _0x4292e9 + 1)) + _0x4292e9;
}
function getUrlParam(_0x5b3a1d, _0x4daee7) {
  if (!_0x5b3a1d) {
    return null;
  }
  try {
    {
      return new URL(_0x5b3a1d).searchParams.get(_0x4daee7);
    }
  } catch {
    {
      const _0x1bcf9b = _0x5b3a1d.match(new RegExp(_0x4daee7 + "=([^&]+)"));
      return _0x1bcf9b ? decodeURIComponent(_0x1bcf9b[1]) : null;
    }
  }
}
function httpRequest(_0x5aa23e, _0x4e2d12 = 5000) {
  return new Promise(_0x11bd58 => {
    {
      const _0x43d45a = {
        url: _0x5aa23e,
        timeout: _0x4e2d12
      };
      const _0x2c4872 = {
        url: _0x5aa23e,
        timeout: _0x4e2d12
      };
      const _0xc33941 = {
        statusCode: 500,
        body: null
      };
      if (ENV.isQX) {
        $task.fetch(_0x43d45a).then(_0x11bd58);
      } else {
        if (ENV.isLoon || ENV.isSurge) {
          $httpClient.get(_0x2c4872, (_0x402db3, _0x29985b, _0x30b333) => {
            {
              const _0x2f7f3d = {
                statusCode: _0x402db3 ? 500 : _0x29985b.status || 200,
                body: _0x402db3 ? null : _0x30b333
              };
              _0x11bd58(_0x2f7f3d);
            }
          });
        } else {
          _0x11bd58(_0xc33941);
        }
      }
    }
  });
}
function done(_0x4943fb = {}) {
  if (typeof $done !== "undefined") {
    $done(_0x4943fb);
  }
}
function generateAudioUrl(_0x1b7a4d, _0x7cf0a5) {
  return "https://mobi.kuwo.cn/mobi.s?f=web&user=" + getRandomInt(1000000, 10000000) + "&source=kwplayerhd_ar_4.3.0.8_tianbao_T1A_qirui.apk&type=convert_url_with_sign&br=" + _0x7cf0a5 + "&rid=" + _0x1b7a4d;
}
function withResponseBody(_0xb82154) {
  const _0x1da429 = function () {
    {
      let _0x596975 = true;
      return function (_0x360259, _0x22e5b9) {
        {
          const _0x2d5e72 = _0x596975 ? function () {
            {
              if (_0x22e5b9) {
                {
                  const _0x3cd1f2 = _0x22e5b9.apply(_0x360259, arguments);
                  _0x22e5b9 = null;
                  return _0x3cd1f2;
                }
              }
            }
          } : function () {};
          _0x596975 = false;
          return _0x2d5e72;
        }
      };
    }
  }();
  const _0x48224b = _0x1da429(this, function () {
    {
      const _0x251132 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      const _0x4b8e58 = function () {
        {
          const _0x34e1f1 = new _0x251132.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
          return !_0x34e1f1.test(_0x48224b);
        }
      };
      return _0x4b8e58();
    }
  });
  _0x48224b();
  return () => {
    {
      const _0x5858dc = safeJsonParse($response.body);
      if (!_0x5858dc) {
        return done();
      }
      _0xb82154(_0x5858dc);
      done({
        body: JSON.stringify(_0x5858dc)
      });
    }
  };
}
const handleUserInfo = withResponseBody(_0x1a64e0 => {
  _0x1a64e0.data = _0x1a64e0.data || {};
  _0x1a64e0.data.payInfo = Object.assign(_0x1a64e0.data.payInfo || {}, VIP_CONFIG.payInfo);
  _0x1a64e0.data.userInfo = Object.assign(_0x1a64e0.data.userInfo || {}, VIP_CONFIG.userInfo);
});
const handleLogin = withResponseBody(_0x18aa7a => {
  if (!_0x18aa7a.data) {
    return;
  }
  _0x18aa7a.data.payInfo = Object.assign(_0x18aa7a.data.payInfo || {}, VIP_CONFIG.payInfo);
  _0x18aa7a.data.userInfo = Object.assign(_0x18aa7a.data.userInfo || {}, VIP_CONFIG.loginInfo);
  _0x18aa7a.data.userFreeInfo = Object.assign(_0x18aa7a.data.userFreeInfo || {}, VIP_CONFIG.freeInfo);
  if (_0x18aa7a.data.userInfo) {
    {
      _0x18aa7a.data.userInfo.headOuterImg = VIP_CONFIG.userInfo.headOuterImg;
    }
  }
});
const handleMusicInfo = withResponseBody(_0x41fcbf => {
  if (!_0x41fcbf.data) {
    return;
  }
  _0x41fcbf.data.payInfo = _0x41fcbf.data.payInfo || {};
  _0x41fcbf.data.payInfo.paytype = 3;
  const _0x2d93e3 = {
    vip: "1",
    bookvip: "0",
    song: "1",
    album: "1",
    bodianAlbum: "0"
  };
  _0x41fcbf.data.payInfo.feeType = _0x2d93e3;
  _0x41fcbf.data.payInfo.download = "1111";
  _0x41fcbf.data.payInfo.ndown = "111111111111";
  _0x41fcbf.data.payInfo.listen_fragment = "1";
  _0x41fcbf.data.payInfo.cannotDownload = 0;
  _0x41fcbf.data.isPay = 0;
});
function handleSplashAd() {
  done({
    body: JSON.stringify(RESPONSE_TEMPLATES.SPLASH_AD)
  });
}
const handleGlobalConfig = withResponseBody(_0x4b4e20 => {
  if (!_0x4b4e20.data) {
    return;
  }
  _0x4b4e20.data.showShopEntry = false;
  _0x4b4e20.data.idolTabShow = true;
});
const handleHomeModule = withResponseBody(_0x4d81ce => {
  _0x4d81ce.data = _0x4d81ce.data || {};
  ["bannerList", "adList", "adInfo", "promotionList", "commercialList", "ads", "advertisement", "promotion", "focusList", "recommendAD", "specialList"].forEach(_0x5ed86a => {
    {
      if (_0x4d81ce.data[_0x5ed86a]) {
        delete _0x4d81ce.data[_0x5ed86a];
      }
    }
  });
});
function handleEmptyResponse() {
  done({
    body: JSON.stringify(RESPONSE_TEMPLATES.EMPTY)
  });
}
function handleCheckRight() {
  const _0x3ecf89 = JSON.parse(JSON.stringify(RESPONSE_TEMPLATES.CHECK_RIGHT));
  _0x3ecf89.reqId = generateRandomId(32);
  _0x3ecf89.curTime = Date.now();
  done({
    body: JSON.stringify(_0x3ecf89)
  });
}
async function getAudioData(_0x49b435) {
  if (!_0x49b435) {
    return null;
  }
  for (const _0x126f6e of AUDIO_QUALITY_LEVELS) {
    {
      const _0x3f1c84 = generateAudioUrl(_0x49b435, _0x126f6e.bitrate);
      const _0x8f7a75 = await httpRequest(_0x3f1c84, 3000);
      const _0x52d83e = safeJsonParse(_0x8f7a75.body);
      if (_0x52d83e?.["code"] === 200 && _0x52d83e?.["data"]?.["url"]) {
        {
          const _0x36679f = parseInt(_0x52d83e.data.bitrate) || 0;
          if (_0x126f6e.minBitrate === 0) {
            return _0x52d83e;
          }
          if (_0x36679f > _0x126f6e.minBitrate && _0x36679f <= _0x126f6e.maxBitrate) {
            {
              return _0x52d83e;
            }
          }
        }
      }
    }
  }
  return null;
}
async function handleAudioUrl() {
  const _0x46c398 = getUrlParam($request.url, "musicId");
  const _0x5f0e16 = await getAudioData(_0x46c398);
  const _0x5b6144 = {
    body: $response.body
  };
  if (!_0x5f0e16) {
    return done(_0x5b6144);
  }
  const _0x48cf65 = JSON.parse(JSON.stringify(RESPONSE_TEMPLATES.SUCCESS));
  _0x48cf65.reqId = _0x5f0e16.data?.["sig"] || generateRandomId(32);
  _0x48cf65.data = {
    bitrate: parseInt(_0x5f0e16.data?.["bitrate"]) || 320,
    respCode: 200,
    audioUrl: _0x5f0e16.data.url,
    audioHttpsUrl: _0x5f0e16.data.url,
    p2pAudioSourceId: _0x5f0e16.data?.["p2p_audiosourceid"] || "",
    format: _0x5f0e16.data?.["format"] || "mp3"
  };
  _0x48cf65.curTime = Date.now();
  done({
    body: JSON.stringify(_0x48cf65)
  });
}
async function handleDownloadInfo() {
  const _0x59ab8b = getUrlParam($request.url, "musicId");
  const _0x46fc24 = await getAudioData(_0x59ab8b);
  const _0x3fcd94 = {
    body: $response.body
  };
  if (!_0x46fc24) {
    return done(_0x3fcd94);
  }
  const _0x5180db = parseInt(_0x46fc24.data?.["bitrate"]) || 320;
  const _0xcabc61 = _0x46fc24.data?.["format"] || "mp3";
  const _0x115884 = _0x5180db >= 1000 ? "25.6Mb" : _0x5180db >= 320 ? "8.5Mb" : "5.2Mb";
  const _0x486635 = JSON.parse(JSON.stringify(RESPONSE_TEMPLATES.SUCCESS));
  _0x486635.reqId = generateRandomId(32);
  _0x486635.data = {
    url: _0x46fc24.data.url,
    duration: _0x46fc24.data.duration,
    audioInfo: {
      size: _0x115884,
      p2pAudioSourceId: _0x46fc24.data?.["p2p_audiosourceid"] || generateRandomId(40),
      level: "p",
      bitrate: _0x5180db.toString(),
      format: _0xcabc61
    }
  };
  _0x486635.curTime = Date.now();
  done({
    body: JSON.stringify(_0x486635)
  });
}
function handleDownloadConfig() {
  const _0x1f6656 = JSON.parse(JSON.stringify(RESPONSE_TEMPLATES.DOWNLOAD_CONFIG));
  _0x1f6656.reqId = generateRandomId(32);
  _0x1f6656.curTime = Date.now();
  done({
    body: JSON.stringify(_0x1f6656)
  });
}
const _0x19892a = {
  pattern: "/api/ucenter/users/pub",
  handler: handleUserInfo
};
const _0x223f37 = {
  pattern: "/api/ucenter/users/login",
  handler: handleLogin
};
const _0x86ce8 = {
  pattern: "/api/play/music/v2/audioUrl",
  handler: handleAudioUrl
};
const _0x2d1bf5 = {
  pattern: "/api/play/music/v2/checkRight",
  handler: handleCheckRight
};
const _0xdc50fd = {
  pattern: "/api/service/music/download/info",
  handler: handleDownloadInfo
};
const _0x1743c5 = {
  pattern: "/api/service/music/download/config",
  handler: handleDownloadConfig
};
const _0x29b425 = {
  pattern: "/api/service/music/info",
  handler: handleMusicInfo
};
const _0xd86dfb = {
  pattern: "/api/service/home/module",
  handler: handleHomeModule
};
const _0x4e8b23 = {
  pattern: "/api/service/global/config/scene",
  handler: handleGlobalConfig
};
const _0x2ac67e = {
  pattern: "l.qq.com/exapp",
  handler: handleSplashAd
};
const _0x49458a = {
  pattern: "/api/play/advert/info",
  handler: handleEmptyResponse
};
const _0x447247 = {
  pattern: "/api/service/global/config/vipEnter",
  handler: handleEmptyResponse
};
const _0x36b93d = {
  pattern: "/api/service/banner/positions",
  handler: handleEmptyResponse
};
const _0x1c134a = {
  pattern: "/api/search/topic/word/list",
  handler: handleEmptyResponse
};
const _0x38045b = {
  pattern: "/api/pay/vip/invitation/assist/popup",
  handler: handleEmptyResponse
};
const _0x488a44 = {
  pattern: "/api/pay/sp/actVip",
  handler: handleEmptyResponse
};
const _0x3d5f67 = {
  pattern: "/api/pay/vip/invitation/swell/",
  handler: handleEmptyResponse
};
const _0x262783 = {
  pattern: "/api/pay/audition/url",
  handler: handleEmptyResponse
};
const _0x1a7cea = {
  pattern: "/api/service/advert/config",
  handler: handleEmptyResponse
};
const _0x1cb2fa = {
  pattern: "/api/advert/free/config",
  handler: handleEmptyResponse
};
const _0x31e267 = {
  pattern: "/api/pay/vip/lowPriceText",
  handler: handleEmptyResponse
};
const _0x5bb4d4 = {
  pattern: "/api/popup/start/info",
  handler: handleEmptyResponse
};
const _0x388019 = {
  pattern: "ab-bodian.kuwo.cn/abtest/ui/info",
  handler: handleEmptyResponse
};
const _0x437b5c = {
  pattern: "/api/rec/feed",
  handler: handleEmptyResponse
};
const _0x33dcd5 = {
  pattern: "/style_factory/template_list",
  handler: handleEmptyResponse
};
const ROUTE_MAP = [_0x19892a, _0x223f37, _0x86ce8, _0x2d1bf5, _0xdc50fd, _0x1743c5, _0x29b425, _0xd86dfb, _0x4e8b23, _0x2ac67e, _0x49458a, _0x447247, _0x36b93d, _0x1c134a, _0x38045b, _0x488a44, _0x3d5f67, _0x262783, _0x1a7cea, _0x1cb2fa, _0x31e267, _0x5bb4d4, _0x388019, _0x437b5c, _0x33dcd5];
function main() {
  const _0x33d921 = $request?.["url"] || "";
  try {
    {
      for (const {
        pattern: _0x402574,
        handler: _0x2ce8a7
      } of ROUTE_MAP) {
        {
          if (_0x33d921.includes(_0x402574)) {
            return _0x2ce8a7();
          }
        }
      }
      done();
    }
  } catch (_0x2377d7) {
    {
      done();
    }
  }
}
if (typeof $response !== "undefined") {
  main();
} else {
  done();
}