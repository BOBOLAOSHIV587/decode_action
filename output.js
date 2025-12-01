//Mon Dec 01 2025 18:01:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const IliIiil = $request.url;
  let I1il11i;
  try {
    {
      const ilIIIlii = JSON.parse($response.body);
      if (IliIiil.includes("/kugouvip/v2/batch_union_vipinfo")) I1il11i = JSON.stringify(iIi1II1l(ilIIIlii));else {
        if (IliIiil.includes("/kugouvip/v1/batch_union_vipinfo")) I1il11i = JSON.stringify(i111illi(ilIIIlii));else {
          if (IliIiil.includes("/mobile/vipinfo")) I1il11i = JSON.stringify(Ii111l1I(ilIIIlii));else {
            if (IliIiil.includes("/v1/get_union_vip") || IliIiil.includes("/v1/vipuser_sub")) I1il11i = JSON.stringify(iillI1Il(ilIIIlii));else {
              if (IliIiil.includes("/v1/get_res_privilege")) I1il11i = JSON.stringify(IilliIll(ilIIIlii));else {
                if (IliIiil.includes("/kugouvip/v1/vipuser_sub")) I1il11i = JSON.stringify(lI1IlIII(ilIIIlii));else {
                  if (IliIiil.includes("/pendant/v2/set_user_pendant")) I1il11i = JSON.stringify(iilllIll(ilIIIlii));else IliIiil.includes("/pendant/v2/get_pendant_list") ? I1il11i = JSON.stringify(IIIlIil(ilIIIlii)) : I1il11i = $response.body;
                }
              }
            }
          }
        }
      }
    }
  } catch (IllIiil1) {
    console.log("酷狗VIP和挂件修改脚本错误: " + IllIiil1);
    I1il11i = $response.body;
  }
  $done({
    "body": I1il11i
  });
  function iIi1II1l(i1lIII1i) {
    {
      const iIlIiliI = JSON.parse(JSON.stringify(i1lIII1i));
      if (!iIlIiliI.data || !iIlIiliI.data.busi_vip || !iIlIiliI.data.main_vip) {
        return iIlIiliI;
      }
      for (const lii1ll in iIlIiliI.data.busi_vip) {
        const l1l1IIlI = iIlIiliI.data.busi_vip[lii1ll];
        Array.isArray(l1l1IIlI) && l1l1IIlI.forEach(iliIIIll => {
          switch (iliIIIll.product_type) {
            case "dvip":
              iliIIIll.vip_end_time = "2026-10-17 11:40:25";
              iliIIIll.paid_vip_expire_time = "2026-10-17 08:01:11";
              iliIIIll.is_paid_vip = 1;
              break;
            case "qvip":
              iliIIIll.paid_vip_expire_time = "2026-10-17 08:01:11";
              iliIIIll.is_paid_vip = 1;
              break;
            case "svip":
              iliIIIll.vip_end_time = "2026-10-17 08:01:11";
              iliIIIll.paid_vip_expire_time = "2026-10-17 08:01:11";
              iliIIIll.is_vip = 1;
              iliIIIll.y_type = 1;
              iliIIIll.is_paid_vip = 1;
              break;
            case "tvip":
              iliIIIll.vip_end_time = "2027-10-17 08:01:11";
              iliIIIll.paid_vip_expire_time = "2026-10-17 08:01:11";
              iliIIIll.is_paid_vip = 1;
              break;
          }
        });
      }
      for (const I1i1lliI in iIlIiliI.data.main_vip) {
        const lIiIliIi = iIlIiliI.data.main_vip[I1i1lliI];
        if (lIiIliIi && typeof lIiIliIi === "object") {
          lIiIliIi.vip_y_endtime = "2026-10-17 08:01:11";
          lIiIliIi.vip_end_time = "2026-10-17 08:01:11";
          lIiIliIi.su_vip_end_time = "2026-10-17 08:01:11";
          lIiIliIi.is_vip = 1;
          lIiIliIi.listen_end_time = "2026-10-17 08:01:11";
          lIiIliIi.dual_su_vip_end_time = "2026-10-17 08:01:11";
          lIiIliIi.vip_type = 3;
          lIiIliIi.su_vip_y_endtime = "2026-10-17 08:01:11";
        }
      }
      return iIlIiliI;
    }
  }
  function i111illi(lll1i1) {
    {
      const iIIlIIIl = JSON.parse(JSON.stringify(lll1i1));
      if (!iIIlIIIl.data) return iIIlIIIl;
      if (iIIlIIIl.data.busi_vip_list && Array.isArray(iIIlIIIl.data.busi_vip_list)) {
        let lI1lIlI1 = false,
          i1l1lIl1 = null;
        if (iIIlIIIl.data.busi_vip_list.length > 0) i1l1lIl1 = iIIlIIIl.data.busi_vip_list[0].userid;else iIIlIIIl.data.main_vip_list && iIIlIIIl.data.main_vip_list.length > 0 && (i1l1lIl1 = iIIlIIIl.data.main_vip_list[0].userid);
        iIIlIIIl.data.busi_vip_list.forEach(lI1liiIi => {
          {
            if (lI1liiIi.product_type === "svip") {
              lI1liiIi.vip_end_time = "2026-10-17 08:01:11";
              lI1liiIi.vip_begin_time = "2026-05-26 00:10:03";
              lI1liiIi.paid_vip_expire_time = "2026-10-17 08:01:11";
              lI1liiIi.is_vip = 1;
              lI1liiIi.y_type = 2;
              lI1liiIi.is_paid_vip = 1;
            }
            if (lI1liiIi.product_type === "ssvip") {
              lI1lIlI1 = true;
              lI1liiIi.vip_end_time = "2026-10-17 08:01:11";
              lI1liiIi.paid_vip_expire_time = "2026-10-17 08:01:11";
              lI1liiIi.is_vip = 1;
              lI1liiIi.y_type = 1;
              lI1liiIi.is_paid_vip = 1;
            }
          }
        });
        !lI1lIlI1 && i1l1lIl1 && iIIlIIIl.data.busi_vip_list.push({
          "latest_product_id": "",
          "purchased_ios_type": 0,
          "vip_end_time": "2026-10-17 08:01:11",
          "vip_clearday": "",
          "vip_begin_time": "2025-10-17 08:01:11",
          "vip_limit_quota": {
            "total": 600
          },
          "userid": i1l1lIl1,
          "paid_vip_expire_time": "2026-10-17 08:01:11",
          "busi_type": "concept",
          "purchased_type": 0,
          "product_type": "ssvip",
          "is_vip": 1,
          "y_type": 1,
          "is_paid_vip": 1
        });
      }
      if (iIIlIIIl.data.main_vip_list && Array.isArray(iIIlIIIl.data.main_vip_list)) {
        iIIlIIIl.data.main_vip_list.forEach(ill11lII => {
          ill11lII.su_vip_y_endtime = "2026-10-17 08:01:11";
          ill11lII.vip_type = 3;
          ill11lII.m_y_endtime = "2026-10-17 08:01:11";
          ill11lII.vip_end_time = "2026-10-17 08:01:11";
          ill11lII.m_end_time = "2026-10-17 08:01:11";
          ill11lII.user_y_type = 2;
          ill11lII.m_type = 1;
          ill11lII.y_type = 1;
          ill11lII.is_vip = 1;
          ill11lII.user_type = 2;
          ill11lII.su_vip_end_time = "2026-10-17 08:01:11";
          ill11lII.vip_y_endtime = "2026-10-17 08:01:11";
          ill11lII.svip_level = 4;
        });
      }
      iIIlIIIl.data.time && (iIIlIIIl.data.time = 1760659981);
      return iIIlIIIl;
    }
  }
  function Ii111l1I(i1liIlii) {
    const I1i1il1 = JSON.parse(JSON.stringify(i1liIlii));
    if (!I1i1il1.data || !I1i1il1.error) return I1i1il1;
    const I1l11il = I1i1il1.data;
    I1l11il.vip_type = 1;
    I1l11il.vip_y_endtime = "2026-10-17 08:01:11";
    I1l11il.su_vip_y_endtime = "2026-10-17 08:01:11";
    I1l11il.h_end_time = "2026-10-17 08:01:11";
    I1l11il.vip_end_time = "2026-10-17 08:01:11";
    I1l11il.roam_end_time = "2026-10-17 08:01:11";
    I1l11il.m_y_endtime = "2026-10-17 08:01:11";
    I1l11il.is_vip = 1;
    I1l11il.h_begin_time = "2026-10-17 08:01:11";
    I1l11il.su_vip_end_time = "2026-10-17 08:01:11";
    I1l11il.m_end_time = "2026-10-17 08:01:11";
    I1l11il.dual_su_vip_end_time = "2026-10-17 08:01:11";
    I1l11il.autoVipType = 1;
    if (I1l11il.promise) {
      I1l11il.promise.end_time = "2026-10-17 08:01:11";
    }
    const liI1I1 = I1i1il1.error;
    liI1I1.vip_type = 2;
    liI1I1.vip_y_endtime = "2026-10-17 08:01:11";
    liI1I1.su_vip_y_endtime = "2026-10-17 08:01:11";
    liI1I1.h_end_time = "2026-10-17 08:01:11";
    liI1I1.vip_end_time = "2026-10-17 08:01:11";
    liI1I1.roam_end_time = "2026-10-17 08:01:11";
    liI1I1.m_y_endtime = "2026-10-17 08:01:11";
    liI1I1.is_vip = 1;
    liI1I1.su_vip_end_time = "2026-10-17 08:01:11";
    liI1I1.m_end_time = "2026-10-17 08:01:11";
    liI1I1.dual_su_vip_end_time = "2026-10-17 08:01:11";
    liI1I1.listen_end_time = "2026-10-17 08:01:11";
    if (liI1I1.promise) {
      liI1I1.promise.end_time = "2026-10-17 08:01:11";
    }
    I1l11il.servertime && (I1l11il.servertime = "2025-10-17 08:24:55");
    liI1I1.servertime && (liI1I1.servertime = "2025-10-17 08:24:55");
    return I1i1il1;
  }
  function iillI1Il(lI1lI1I) {
    const IlIIlIl = JSON.parse(JSON.stringify(lI1lI1I));
    if (!IlIIlIl.data) {
      return IlIIlIl;
    }
    const IIi1il11 = IlIIlIl.data;
    IIi1il11.vip_type = 2;
    IIi1il11.m_y_endtime = "2026-10-17 08:01:11";
    IIi1il11.vip_end_time = "2026-10-17 08:01:11";
    IIi1il11.m_end_time = "2026-10-17 08:01:11";
    IIi1il11.is_vip = 1;
    IIi1il11.user_type = 2;
    IIi1il11.su_vip_end_time = "2026-10-17 08:01:11";
    IIi1il11.vip_y_endtime = "2026-10-17 08:01:11";
    IIi1il11.svip_level = 4;
    IIi1il11.busi_vip && Array.isArray(IIi1il11.busi_vip) && IIi1il11.busi_vip.forEach(iII1i1Ii => {
      {
        iII1i1Ii.vip_end_time = "2026-10-17 08:01:11";
        iII1i1Ii.paid_vip_expire_time = "2026-10-17 08:01:11";
        iII1i1Ii.is_paid_vip = 1;
        iII1i1Ii.y_type = 1;
        switch (iII1i1Ii.product_type) {
          case "tvip":
            break;
          case "qvip":
            break;
          case "dvip":
            break;
          case "svip":
            iII1i1Ii.is_vip = 2;
            break;
        }
      }
    });
    return IlIIlIl;
  }
  function IilliIll(IIIlIIil) {
    const I11iIlIi = JSON.parse(JSON.stringify(IIIlIIil));
    I11iIlIi.userinfo && (I11iIlIi.userinfo.m_type = 3, I11iIlIi.userinfo.vip_type = 3);
    I11iIlIi.vip_user_type = 3;
    return I11iIlIi;
  }
  function lI1IlIII(Iil1Il1I) {
    {
      const IiIIIll = JSON.parse(JSON.stringify(Iil1Il1I));
      IiIIIll.data && IiIIIll.data.hasOwnProperty("mid_repeat") && (IiIIIll.data.mid_repeat = 1);
      return IiIIIll;
    }
  }
  function iilllIll(I1II11) {
    {
      const iiIllIIi = JSON.parse(JSON.stringify(I1II11));
      iiIllIIi.error_code = 0;
      iiIllIIi.status = 1;
      iiIllIIi.data && (iiIllIIi.data.pendant_type = 3);
      return iiIllIIi;
    }
  }
  function IIIlIil(Illi1II1) {
    const il1Illil = JSON.parse(JSON.stringify(Illi1II1));
    il1Illil.data && Array.isArray(il1Illil.data) && il1Illil.data.forEach(lii1ii => {
      {
        if (lii1ii.list && Array.isArray(lii1ii.list)) {
          lii1ii.list.forEach(II1IiiI => {
            II1IiiI.pendant_type = 3;
          });
        }
      }
    });
    return il1Illil;
  }
})();