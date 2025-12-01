//Mon Dec 01 2025 18:00:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ll1Il1l = "https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/evn.js";
(async () => {
  const I1I11lII = 30000;
  let illii1I1;
  function iiiiIll() {
    $.logErr("❌ 脚本执行超时");
    $.msg($.name, "❌ 执行超时", "请检查网络或重试");
    $.done({});
  }
  try {
    {
      illii1I1 = setTimeout(iiiiIll, I1I11lII);
      const lIi111Il = await lilI1iil(),
        IlIiiiII = new lIi111Il("酷狗概念版自动领取VIP-Eric", {
          "logLevel": "info"
        });
      if ($request && $request.url) {
        let ll1I11lI = $request.url,
          llilIIII = $request.headers,
          l11ilil = new URLSearchParams(ll1I11lI.split("?")[1]),
          I1Iill11 = {
            "appid": l11ilil.get("appid"),
            "clientver": l11ilil.get("clientver"),
            "clienttime": l11ilil.get("clienttime"),
            "mid": l11ilil.get("mid"),
            "uuid": l11ilil.get("uuid"),
            "dfid": l11ilil.get("dfid"),
            "token": l11ilil.get("token"),
            "userid": l11ilil.get("userid"),
            "srcappid": l11ilil.get("srcappid")
          };
        IlIiiiII.log("所有可用的Header字段:");
        for (let lI1lIiii in llilIIII) {
          IlIiiiII.log("  " + lI1lIiii + ": " + llilIIII[lI1lIiii]);
        }
        let iIi1iil = {
          "authority": llilIIII[":authority"] || llilIIII.authority || llilIIII.Host || llilIIII.host,
          "accept": llilIIII.accept || llilIIII.Accept,
          "origin": llilIIII.origin || llilIIII.Origin,
          "accept-encoding": llilIIII["accept-encoding"] || llilIIII["Accept-Encoding"],
          "user-agent": llilIIII["user-agent"] || llilIIII["User-Agent"],
          "accept-language": llilIIII["accept-language"] || llilIIII["Accept-Language"],
          "referer": llilIIII.referer || llilIIII.Referer
        };
        function li1IIlii(lI1III1, iiII1lIl) {
          if (typeof $prefs !== "undefined") {
            return $prefs.setValueForKey(JSON.stringify(iiII1lIl), lI1III1);
          } else {
            if (typeof $persistentStore !== "undefined") return $persistentStore.write(JSON.stringify(iiII1lIl), lI1III1);else {
              if (typeof $persistent !== "undefined") return $persistent.setItem(lI1III1, JSON.stringify(iiII1lIl));
            }
          }
        }
        li1IIlii("urlParams", I1Iill11);
        li1IIlii("headerParams", iIi1iil);
        li1IIlii("originalUrl", ll1I11lI);
        IlIiiiII.log("保存的 URL Params:", JSON.stringify(I1Iill11));
        IlIiiiII.log("保存的 Header Params:", JSON.stringify(iIi1iil));
        IlIiiiII.log("保存的 Original URL:", ll1I11lI);
        IlIiiiII.log("数据已保存到持久化存储-Eric为您提供");
        IlIiiiII.msg("获取数据成功", "数据已持久化保存", "");
      } else {
        IlIiiiII.log("未检测到请求对象");
      }
    }
  } catch (lIiiI1lI) {
    $.logErr("脚本执行出错: ", lIiiI1lI);
    $.msg($.name, "❌ 执行失败", lIiiI1lI.message || "未知错误");
  } finally {
    if (illii1I1) clearTimeout(illii1I1);
    $.done({});
  }
  async function lilI1iil() {
    try {
      let I1l1iII1 = "";
      if (typeof $prefs !== "undefined") I1l1iII1 = $prefs.valueForKey("Eric_Env_Code") || "";else {
        if (typeof $persistentStore !== "undefined") I1l1iII1 = $persistentStore.read("Eric_Env_Code") || "";else typeof $persistent !== "undefined" && (I1l1iII1 = $persistent.read("Eric_Env_Code") || "");
      }
      if (I1l1iII1) return console.log("✅ 使用缓存的Env代码"), eval(I1l1iII1), Env;
      console.log("⏬ 下载Env代码...");
      const iII1Ili1 = await new Promise((IlIlll, ll11ili1) => {
        {
          if (typeof $httpClient !== "undefined") $httpClient.get({
            "url": ll1Il1l
          }, (Iii1ll11, II11IiI, IIl1ilil) => {
            if (Iii1ll11) ll11ili1(Iii1ll11);else IlIlll(IIl1ilil);
          });else typeof $task !== "undefined" ? $task.fetch({
            "url": ll1Il1l
          }).then(l1i1Iili => IlIlll(l1i1Iili.body), l1Ill11 => ll11ili1(l1Ill11)) : ll11ili1(new Error("未知环境"));
        }
      });
      if (typeof $prefs !== "undefined") $prefs.setValueForKey(iII1Ili1, "Eric_Env_Code");else {
        if (typeof $persistentStore !== "undefined") $persistentStore.write(iII1Ili1, "Eric_Env_Code");else typeof $persistent !== "undefined" && $persistent.write(iII1Ili1, "Eric_Env_Code");
      }
      eval(iII1Ili1);
      return Env;
    } catch (II1l1ii) {
      console.log("❌ 加载Env失败: " + II1l1ii);
      throw new Error("无法加载Env环境");
    }
  }
})();