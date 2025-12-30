//Tue Dec 30 2025 00:50:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const url = $request.url;
if (url.includes("/ChapBatAuthWithPD")) {
  try {
    const newHeaders = Object.assign({}, $request.headers);
    newHeaders.uid = "855124767176";
    newHeaders.qrtm = "1766862156";
    newHeaders.trustedid = "9a29ef0f8ec32235bd4814a5b7348e611";
    newHeaders.ua = "iPhone 13 Pro-iOS15.4.1";
    newHeaders.qrem = "0";
    newHeaders["Accept-Encoding"] = "gzip";
    newHeaders.net_type = "1";
    newHeaders.platform = "ioswp";
    newHeaders.rcmd = "1";
    newHeaders.youngerMode = "0";
    newHeaders.mldt = "e6adcbb59b681e6dfe2ad944f3a26860";
    newHeaders.sid = "";
    newHeaders.usid = "ywA2nR1SiPp1";
    newHeaders.text_type = "1";
    newHeaders.csigs = "$2a$04$AdAXtFrrs0s8Dvsf1mpte.O9/Tg6NojRCkY9oLbLw0UsH0MFUz7Z6";
    newHeaders.loginType = "50";
    newHeaders.ywtoken = "0477e315bd775d6ae1d8ca41b1c46207";
    newHeaders.version = "qqreader_8.3.52.0692_iphone";
    newHeaders.QVisible = "0";
    newHeaders["Accept-Language"] = "zh-CN,zh-Hans;q=0.9";
    newHeaders["User-Agent"] = "QQReaderUI/52060 CFNetwork/1331.0.7 Darwin/21.4.0";
    newHeaders.Range = "bytes=0-";
    newHeaders.qrsy = "ea1ca58c58e9999f9db40428809a7113";
    newHeaders.ywkey = "";
    newHeaders.ttime = "1766862156907";
    newHeaders.safkey = "3828820a16622f3f7b7a22c434354317";
    newHeaders.sex = "0";
    newHeaders.ibex = "BO8kCs9oLYpSXGD-OnQNp9OJ6t5KLeyNdpDdUvZKVXbLRGjbzpR_VVq1fMui5h_UrD5KJrePFTBzQR2LHYLk7Ja9-1AFc9-ipULkOKq7reOTIJFBMnkX8cLgCFDXZ2lYmYEoHsRqWKKrrzK0lGv43zvU4mp_9vxAfnZRNHNg-_IGPdcFgHCkMh5uAzqrkTOY_qGtDOqUgAjAZHBm2YP71kOi7phPyZCHgP3gHg8xbXJkYzRiMDEwNTZiYjhhMTc2YjE2M2QwODkyNTVkM2I0Ng==";
    newHeaders.ssign = "99575ce8c12b177e315171a527bf15d6";
    newHeaders.osvn = "d7199a5dce79e30d2ae1b20fd616f430";
    newHeaders.dene = "084c280fcb3574adc3d0e20bae81c1d8";
    newHeaders.auditStatus = "1";
    newHeaders.Host = "newminerva-tgw.reader.qq.com";
    newHeaders.ywguid = "";
    newHeaders.sift = "4bd5dc0dac2f3b56a250bd32482ff26afaaa74428bb256fd220c68d3bb6b4bdfd37e835e31bec80f5b4a906edd4938c3";
    newHeaders.qrsn = "646b27a24953023b8cfc8b68000014e18a14";
    newHeaders.server_sex = "1";
    newHeaders.dete = "94563c94351c4116a0fe4cd2ecb3639e";
    newHeaders.themeid = "0";
    newHeaders.Connection = "keep-alive";
    newHeaders.IFDA = "QkUwOUUyQjktRDU5Qi00M0UwLTlCMjQtNkI4OTVFM0YxQTQy";
    newHeaders.nosid = "1";
    newHeaders.gselect = "-1";
    newHeaders.qrsn_new = "646b27a24953023b8cfc8b68000014e18a14";
    newHeaders.jailbreak = "0";
    const statParamsObj = {
      bid: "51179257",
      tabtype: "3",
      qaDay: "0",
      userdegree: "0",
      islogin: "1",
      qaType: "1",
      expid: "1000",
      stat_params: "{\"global_position\":\"\",\"freeStatus\":\"2\",\"serial_type\":\"\",\"origin\":\"30178\",\"free_type\":\"\",\"userdegree\":\"0\",\"channel_names\":\"commonNovelBook\",\"type\":\"0\",\"islogin\":\"1\",\"scene\":\"public_rec\",\"user_layer_lv2\":\"3-0\",\"new_user\":\"\",\"user_layer_lv1\":\"3\",\"exposetime\":\"1766862126\",\"qaType\":\"1\",\"logid\":\"2284977653381051681\",\"preitemid\":\"b_51179257\",\"tabtype\":\"3\",\"alg\":\"\",\"payStatus\":\"300\",\"expid\":\"1000\",\"recall_type\":\"commonNovelBook\",\"qaDay\":\"0\"}",
      alg: "",
      serial_type: "",
      origin: "30178",
      recall_type: "commonNovelBook",
      type: "0",
      freeStatus: "2",
      user_layer_lv2: "3-0",
      global_position: "",
      free_type: "",
      logid: "2284977653381051681",
      channel_names: "commonNovelBook",
      new_user: "",
      preitemid: "b_51179257",
      payStatus: "300",
      exposetime: "1766862126",
      adId: "30178",
      user_layer_lv1: "3",
      scene: "public_rec"
    };
    newHeaders.stat_params = JSON.stringify(statParamsObj);
    $done({
      headers: newHeaders
    });
  } catch (_0x2d7750) {
    console.log("修改请求头时出错:", _0x2d7750);
    $done({});
  }
} else {
  if (url.includes("/nativepage/personal")) {
    try {
      let body = $response.body;
      if (!body) {
        $done({});
      }
      let obj = JSON.parse(body);
      if (obj.personal && obj.personal.monthUser) {
        obj.personal.monthUser.paidVipStatus = 2;
        obj.personal.monthUser.monthStatus = 1;
        obj.personal.monthUser.smsVip = 1;
        obj.personal.monthUser.mVipType = 1;
        obj.personal.monthUser.title = "↓关注频道↓";
        obj.personal.monthUser.label = "Tg频道 https://t.me/iosjs520";
      }
      obj.personal && obj.personal.accountInfo && (obj.personal.accountInfo.balance = 88888888, obj.personal.accountInfo.bookTicket = 88888888);
      obj.personal && obj.personal.userInfo && (obj.personal.userInfo.vipLevel = 1, obj.personal.userInfo.nick = "ios鸡神", obj.personal.userInfo.icon = "https://i.imgs.ovh/2025/12/28/CBmPTb.jpeg");
      obj.personal && obj.personal.confList && delete obj.personal.confList;
      $done({
        body: JSON.stringify(obj)
      });
    } catch (_0x30077b) {
      console.log("处理 personal 出错:", _0x30077b);
      $done({});
    }
  } else {
    if (url.includes("/book/queryDetailPage")) {
      try {
        let body = $response.body;
        if (!body) {
          $done({});
        }
        let obj = JSON.parse(body);
        obj.vipStatus = 1;
        obj.introinfo && obj.introinfo.detailmsg && (obj.introinfo.detailmsg.equityTxt = "我的天呀-ios鸡神破解", obj.introinfo.detailmsg.txtStyle = 2, obj.introinfo.detailmsg.equityDisplay = true);
        $done({
          body: JSON.stringify(obj)
        });
      } catch (_0x405349) {
        console.log("处理 queryDetailPage 出错:", _0x405349);
        $done({});
      }
    } else {
      if (url.includes("/vip/viptxt")) {
        try {
          let body = $response.body;
          if (!body) {
            $done({});
          }
          let obj = JSON.parse(body);
          obj.allowMonthlyPay = 2;
          $done({
            body: JSON.stringify(obj)
          });
        } catch (_0x4bca1d) {
          console.log("处理 viptxt 出错:", _0x4bca1d);
          $done({});
        }
      } else {
        $done({});
      }
    }
  }
}