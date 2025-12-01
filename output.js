//Mon Dec 01 2025 17:56:27 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Illilii1 = "https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/evn.js";
(async () => {
  const IiIiIII = 30000;
  let i1iIll;
  function il1iilIl() {
    console.log("❌ 脚本执行超时");
    typeof $done === "function" && $done({});
  }
  try {
    i1iIll = setTimeout(il1iilIl, IiIiIII);
    const I1IIllil = await iI1lIlI(),
      iiII11li = new I1IIllil("酷狗概念版自动领取VIP", {
        "logLevel": "info"
      });
    function lll1Ilii(IiIill1) {
      if (typeof $prefs !== "undefined") {
        const i11lIi1I = $prefs.valueForKey(IiIill1);
        return i11lIi1I ? JSON.parse(i11lIi1I) : {};
      } else {
        if (typeof $persistentStore !== "undefined") {
          const IiIiI11l = $persistentStore.read(IiIill1);
          return IiIiI11l ? JSON.parse(IiIiI11l) : {};
        } else {
          if (typeof $persistent !== "undefined") {
            const iI1lI11 = $persistent.read(IiIill1);
            return iI1lI11 ? JSON.parse(iI1lI11) : {};
          }
        }
      }
      return {};
    }
    function I1111l1i(Iiii11iI) {
      {
        function Illll1Il(iii1ili, llIi1Iii) {
          return iii1ili << llIi1Iii | iii1ili >>> 32 - llIi1Iii;
        }
        function IlI1iliI(Il11li1, l11Ii1lI) {
          {
            let iiil1lI1, i11i1iii, illl11i, i11iiIl1, iiIiIil;
            illl11i = Il11li1 & 2147483648;
            i11iiIl1 = l11Ii1lI & 2147483648;
            iiil1lI1 = Il11li1 & 1073741824;
            i11i1iii = l11Ii1lI & 1073741824;
            iiIiIil = (Il11li1 & 1073741823) + (l11Ii1lI & 1073741823);
            if (iiil1lI1 & i11i1iii) return iiIiIil ^ 2147483648 ^ illl11i ^ i11iiIl1;
            if (iiil1lI1 | i11i1iii) {
              if (iiIiIil & 1073741824) return iiIiIil ^ 3221225472 ^ illl11i ^ i11iiIl1;else return iiIiIil ^ 1073741824 ^ illl11i ^ i11iiIl1;
            } else return iiIiIil ^ illl11i ^ i11iiIl1;
          }
        }
        function illlI1II(llii11il, iIilI1il, illii1l1) {
          return llii11il & iIilI1il | ~llii11il & illii1l1;
        }
        function I11II11(lilIi11l, Ii1i111i, IiI1ilII) {
          return lilIi11l & IiI1ilII | Ii1i111i & ~IiI1ilII;
        }
        function Ill111ii(Ili1lIll, Il1liIlI, iiIIIIii) {
          return Ili1lIll ^ Il1liIlI ^ iiIIIIii;
        }
        function ilil11ll(IIlIlll, i1ll1l1I, il1iIII1) {
          return i1ll1l1I ^ (IIlIlll | ~il1iIII1);
        }
        function IIliii(I1iIllIi, iIIiiII1, iIiiilI1, iI1IIIII, lII1l1Ii, IIiIlIIl, IIi1i1ii) {
          I1iIllIi = IlI1iliI(I1iIllIi, IlI1iliI(IlI1iliI(illlI1II(iIIiiII1, iIiiilI1, iI1IIIII), lII1l1Ii), IIi1i1ii));
          return IlI1iliI(Illll1Il(I1iIllIi, IIiIlIIl), iIIiiII1);
        }
        function ii11iIli(ii11li1, llllIi, lIiliIl, ii11l11l, il1iiiiI, il1iiIii, lIIlIl) {
          ii11li1 = IlI1iliI(ii11li1, IlI1iliI(IlI1iliI(I11II11(llllIi, lIiliIl, ii11l11l), il1iiiiI), lIIlIl));
          return IlI1iliI(Illll1Il(ii11li1, il1iiIii), llllIi);
        }
        function i1Iii1lI(ililiIll, Iiiliil, i1IiIl1, liiIllIl, IllIl1l1, iii1Iii1, Ii1lIill) {
          ililiIll = IlI1iliI(ililiIll, IlI1iliI(IlI1iliI(Ill111ii(Iiiliil, i1IiIl1, liiIllIl), IllIl1l1), Ii1lIill));
          return IlI1iliI(Illll1Il(ililiIll, iii1Iii1), Iiiliil);
        }
        function il1IliI(il1I111I, l11iliIi, lIi1iIi1, IlIl1, I1Illii, II111II1, Iii1I1Ii) {
          il1I111I = IlI1iliI(il1I111I, IlI1iliI(IlI1iliI(ilil11ll(l11iliIi, lIi1iIi1, IlIl1), I1Illii), Iii1I1Ii));
          return IlI1iliI(Illll1Il(il1I111I, II111II1), l11iliIi);
        }
        function I1IIi1Ii(I111ll1l) {
          {
            let Ill1l1II,
              II1I1I1i = I111ll1l.length,
              llill1I = II1I1I1i + 8,
              Ili1ili1 = (llill1I - llill1I % 64) / 64,
              iIliili = (Ili1ili1 + 1) * 16,
              IIiilili = Array(iIliili - 1),
              lll1IiiI = 0,
              lIl1liiI = 0;
            while (lIl1liiI < II1I1I1i) {
              Ill1l1II = (lIl1liiI - lIl1liiI % 4) / 4;
              lll1IiiI = lIl1liiI % 4 * 8;
              IIiilili[Ill1l1II] = IIiilili[Ill1l1II] | I111ll1l.charCodeAt(lIl1liiI) << lll1IiiI;
              lIl1liiI++;
            }
            Ill1l1II = (lIl1liiI - lIl1liiI % 4) / 4;
            lll1IiiI = lIl1liiI % 4 * 8;
            IIiilili[Ill1l1II] = IIiilili[Ill1l1II] | 128 << lll1IiiI;
            IIiilili[iIliili - 2] = II1I1I1i << 3;
            IIiilili[iIliili - 1] = II1I1I1i >>> 29;
            return IIiilili;
          }
        }
        function ii1llIlI(iI1IIii) {
          let IIiliIIi = "",
            IIiIii1I = "",
            i11l11li,
            li1ilIll;
          for (li1ilIll = 0; li1ilIll <= 3; li1ilIll++) {
            i11l11li = iI1IIii >>> li1ilIll * 8 & 255;
            IIiIii1I = "0" + i11l11li.toString(16);
            IIiliIIi = IIiliIIi + IIiIii1I.substr(IIiIii1I.length - 2, 2);
          }
          return IIiliIIi;
        }
        function l1IlIIl1(iil11il1) {
          iil11il1 = iil11il1.replace(/\r\n/g, "\n");
          let iIlliIli = "";
          for (let i1IlIiII = 0; i1IlIiII < iil11il1.length; i1IlIiII++) {
            let illlIli = iil11il1.charCodeAt(i1IlIiII);
            if (illlIli < 128) iIlliIli += String.fromCharCode(illlIli);else {
              if (illlIli > 127 && illlIli < 2048) iIlliIli += String.fromCharCode(illlIli >> 6 | 192), iIlliIli += String.fromCharCode(illlIli & 63 | 128);else {
                iIlliIli += String.fromCharCode(illlIli >> 12 | 224);
                iIlliIli += String.fromCharCode(illlIli >> 6 & 63 | 128);
                iIlliIli += String.fromCharCode(illlIli & 63 | 128);
              }
            }
          }
          return iIlliIli;
        }
        let Ili1l1II = Array(),
          Illll1,
          IIIii1II,
          ii1iiiiI,
          l1iiIll1,
          l1l11li,
          lilIl11I,
          lI1l11I,
          iil1liI,
          iIlI1iI1,
          llll1I1 = 7,
          iil1i1il = 12,
          IiiiiII1 = 17,
          ll1lli1i = 22,
          IIl1III1 = 5,
          lilii1I1 = 9,
          Ii1I1l1I = 14,
          lli1I1l1 = 20,
          l1IiI1l = 4,
          I11II1II = 11,
          i1iiIiil = 16,
          iil1I1I1 = 23,
          l1I11II1 = 6,
          Iill1iIl = 10,
          Iiilli = 15,
          IiliIllI = 21;
        Iiii11iI = l1IlIIl1(Iiii11iI);
        Ili1l1II = I1IIi1Ii(Iiii11iI);
        lilIl11I = 1732584193;
        lI1l11I = 4023233417;
        iil1liI = 2562383102;
        iIlI1iI1 = 271733878;
        for (Illll1 = 0; Illll1 < Ili1l1II.length; Illll1 += 16) {
          IIIii1II = lilIl11I;
          ii1iiiiI = lI1l11I;
          l1iiIll1 = iil1liI;
          l1l11li = iIlI1iI1;
          lilIl11I = IIliii(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 0], llll1I1, 3614090360);
          iIlI1iI1 = IIliii(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 1], iil1i1il, 3905402710);
          iil1liI = IIliii(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 2], IiiiiII1, 606105819);
          lI1l11I = IIliii(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 3], ll1lli1i, 3250441966);
          lilIl11I = IIliii(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 4], llll1I1, 4118548399);
          iIlI1iI1 = IIliii(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 5], iil1i1il, 1200080426);
          iil1liI = IIliii(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 6], IiiiiII1, 2821735955);
          lI1l11I = IIliii(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 7], ll1lli1i, 4249261313);
          lilIl11I = IIliii(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 8], llll1I1, 1770035416);
          iIlI1iI1 = IIliii(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 9], iil1i1il, 2336552879);
          iil1liI = IIliii(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 10], IiiiiII1, 4294925233);
          lI1l11I = IIliii(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 11], ll1lli1i, 2304563134);
          lilIl11I = IIliii(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 12], llll1I1, 1804603682);
          iIlI1iI1 = IIliii(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 13], iil1i1il, 4254626195);
          iil1liI = IIliii(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 14], IiiiiII1, 2792965006);
          lI1l11I = IIliii(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 15], ll1lli1i, 1236535329);
          lilIl11I = ii11iIli(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 1], IIl1III1, 4129170786);
          iIlI1iI1 = ii11iIli(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 6], lilii1I1, 3225465664);
          iil1liI = ii11iIli(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 11], Ii1I1l1I, 643717713);
          lI1l11I = ii11iIli(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 0], lli1I1l1, 3921069994);
          lilIl11I = ii11iIli(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 5], IIl1III1, 3593408605);
          iIlI1iI1 = ii11iIli(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 10], lilii1I1, 38016083);
          iil1liI = ii11iIli(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 15], Ii1I1l1I, 3634488961);
          lI1l11I = ii11iIli(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 4], lli1I1l1, 3889429448);
          lilIl11I = ii11iIli(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 9], IIl1III1, 568446438);
          iIlI1iI1 = ii11iIli(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 14], lilii1I1, 3275163606);
          iil1liI = ii11iIli(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 3], Ii1I1l1I, 4107603335);
          lI1l11I = ii11iIli(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 8], lli1I1l1, 1163531501);
          lilIl11I = ii11iIli(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 13], IIl1III1, 2850285829);
          iIlI1iI1 = ii11iIli(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 2], lilii1I1, 4243563512);
          iil1liI = ii11iIli(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 7], Ii1I1l1I, 1735328473);
          lI1l11I = ii11iIli(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 12], lli1I1l1, 2368359562);
          lilIl11I = i1Iii1lI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 5], l1IiI1l, 4294588738);
          iIlI1iI1 = i1Iii1lI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 8], I11II1II, 2272392833);
          iil1liI = i1Iii1lI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 11], i1iiIiil, 1839030562);
          lI1l11I = i1Iii1lI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 14], iil1I1I1, 4259657740);
          lilIl11I = i1Iii1lI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 1], l1IiI1l, 2763975236);
          iIlI1iI1 = i1Iii1lI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 4], I11II1II, 1272893353);
          iil1liI = i1Iii1lI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 7], i1iiIiil, 4139469664);
          lI1l11I = i1Iii1lI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 10], iil1I1I1, 3200236656);
          lilIl11I = i1Iii1lI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 13], l1IiI1l, 681279174);
          iIlI1iI1 = i1Iii1lI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 0], I11II1II, 3936430074);
          iil1liI = i1Iii1lI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 3], i1iiIiil, 3572445317);
          lI1l11I = i1Iii1lI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 6], iil1I1I1, 76029189);
          lilIl11I = i1Iii1lI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 9], l1IiI1l, 3654602809);
          iIlI1iI1 = i1Iii1lI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 12], I11II1II, 3873151461);
          iil1liI = i1Iii1lI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 15], i1iiIiil, 530742520);
          lI1l11I = i1Iii1lI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 2], iil1I1I1, 3299628645);
          lilIl11I = il1IliI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 0], l1I11II1, 4096336452);
          iIlI1iI1 = il1IliI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 7], Iill1iIl, 1126891415);
          iil1liI = il1IliI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 14], Iiilli, 2878612391);
          lI1l11I = il1IliI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 5], IiliIllI, 4237533241);
          lilIl11I = il1IliI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 12], l1I11II1, 1700485571);
          iIlI1iI1 = il1IliI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 3], Iill1iIl, 2399980690);
          iil1liI = il1IliI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 10], Iiilli, 4293915773);
          lI1l11I = il1IliI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 1], IiliIllI, 2240044497);
          lilIl11I = il1IliI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 8], l1I11II1, 1873313359);
          iIlI1iI1 = il1IliI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 15], Iill1iIl, 4264355552);
          iil1liI = il1IliI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 6], Iiilli, 2734768916);
          lI1l11I = il1IliI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 13], IiliIllI, 1309151649);
          lilIl11I = il1IliI(lilIl11I, lI1l11I, iil1liI, iIlI1iI1, Ili1l1II[Illll1 + 4], l1I11II1, 4149444226);
          iIlI1iI1 = il1IliI(iIlI1iI1, lilIl11I, lI1l11I, iil1liI, Ili1l1II[Illll1 + 11], Iill1iIl, 3174756917);
          iil1liI = il1IliI(iil1liI, iIlI1iI1, lilIl11I, lI1l11I, Ili1l1II[Illll1 + 2], Iiilli, 718787259);
          lI1l11I = il1IliI(lI1l11I, iil1liI, iIlI1iI1, lilIl11I, Ili1l1II[Illll1 + 9], IiliIllI, 3951481745);
          lilIl11I = IlI1iliI(lilIl11I, IIIii1II);
          lI1l11I = IlI1iliI(lI1l11I, ii1iiiiI);
          iil1liI = IlI1iliI(iil1liI, l1iiIll1);
          iIlI1iI1 = IlI1iliI(iIlI1iI1, l1l11li);
        }
        let iIIi11lI = ii1llIlI(lilIl11I) + ii1llIlI(lI1l11I) + ii1llIlI(iil1liI) + ii1llIlI(iIlI1iI1);
        return iIIi11lI.toLowerCase();
      }
    }
    function ilI1111i(l1I1lI11) {
      const III11i1l = [],
        i1liIll1 = [],
        IlI1Il1I = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt";
      for (const IIlll11l in l1I1lI11) {
        III11i1l.push(IIlll11l);
      }
      III11i1l.sort();
      III11i1l.forEach(iIiiI => {
        i1liIll1.push(iIiiI + "=" + l1I1lI11[iIiiI]);
      });
      let lllIili = IlI1Il1I + i1liIll1.join("") + IlI1Il1I;
      return I1111l1i(lllIili);
    }
    let l1l11Ii1 = lll1Ilii("urlParams"),
      iiIiiI11 = lll1Ilii("headerParams"),
      IIlI1lIl = lll1Ilii("originalUrl");
    if (!l1l11Ii1 || Object.keys(l1l11Ii1).length === 0) {
      {
        iiII11li.msg("❌ 参数缺失", "请先运行获取数据的脚本", "");
        iiII11li.done();
        return;
      }
    }
    let llIIl1Il = Date.now(),
      l1Il11I = {
        "source_id": "",
        "appid": l1l11Ii1.appid,
        "clientver": l1l11Ii1.clientver,
        "clienttime": llIIl1Il,
        "mid": l1l11Ii1.mid,
        "uuid": l1l11Ii1.uuid,
        "dfid": l1l11Ii1.dfid,
        "token": l1l11Ii1.token,
        "userid": l1l11Ii1.userid,
        "srcappid": l1l11Ii1.srcappid
      },
      Iili1I = ilI1111i(l1Il11I),
      l1i11i1l = "https://gateway.kugou.com/youth/v1/recharge/receive_vip_listen_song?source_id=&appid=" + l1Il11I.appid + "&clientver=" + l1Il11I.clientver + "&clienttime=" + l1Il11I.clienttime + "&mid=" + l1Il11I.mid + "&uuid=" + l1Il11I.uuid + "&dfid=" + l1Il11I.dfid + "&token=" + l1Il11I.token + "&userid=" + l1Il11I.userid + "&srcappid=" + l1Il11I.srcappid + "&signature=" + Iili1I,
      il1iI1l = {
        "authority": iiIiiI11.authority,
        "accept": iiIiiI11.accept,
        "origin": iiIiiI11.origin,
        "accept-encoding": iiIiiI11["accept-encoding"],
        "user-agent": iiIiiI11["user-agent"],
        "accept-language": iiIiiI11["accept-language"],
        "referer": iiIiiI11.referer
      };
    const IIlIliiI = {
      "url": l1i11i1l,
      "headers": il1iI1l
    };
    iiII11li.log("🚀 开始请求领取VIP...");
    iiII11li.log("📝 请求URL:", l1i11i1l);
    iiII11li.post(IIlIliiI, function (I1Ii1lII, Ii1iiIII, l1li1Ii1) {
      if (I1Ii1lII) {
        iiII11li.log("❌ 请求出错:", I1Ii1lII);
        iiII11li.msg("❌ 请求失败", I1Ii1lII, "");
        iiII11li.done();
        return;
      }
      try {
        {
          iiII11li.log("📋 响应数据:", l1li1Ii1);
          const II1111li = JSON.parse(l1li1Ii1);
          II1111li.status === 1 || II1111li.code === 0 ? iiII11li.msg("🎉 获取成功", "成功领取VIP", "") : iiII11li.msg("⚠️ 获取失败", II1111li.msg || "当天已领取无需再领", "");
        }
      } catch (i111II1) {
        iiII11li.log("❌ 解析响应数据出错:", i111II1);
        iiII11li.msg("❌ 解析失败", "无法解析服务器返回的数据", "");
      } finally {
        iiII11li.done();
      }
    });
  } catch (Ii1lii1I) {
    console.log("❌ 脚本执行出错: ", Ii1lii1I);
    typeof $.msg === "function" && $.msg("酷狗概念版自动领取VIP", "❌ 执行失败", Ii1lii1I.message || "未知错误");
  } finally {
    if (i1iIll) clearTimeout(i1iIll);
  }
  async function iI1lIlI() {
    try {
      let ililll = "";
      if (typeof $prefs !== "undefined") {
        ililll = $prefs.valueForKey("Eric_Env_Code") || "";
      } else {
        if (typeof $persistentStore !== "undefined") {
          ililll = $persistentStore.read("Eric_Env_Code") || "";
        } else typeof $persistent !== "undefined" && (ililll = $persistent.read("Eric_Env_Code") || "");
      }
      if (ililll) {
        console.log("✅ 使用缓存的Env代码");
        eval(ililll);
        return Env;
      }
      console.log("⏬ 下载Env代码...");
      const I1I1lIIi = await new Promise((i1IIi1Il, l1Il11i) => {
        if (typeof $httpClient !== "undefined") $httpClient.get({
          "url": Illilii1
        }, (ii11Ili, l111I1i, I1iIiIli) => {
          {
            if (ii11Ili) l1Il11i(ii11Ili);else i1IIi1Il(I1iIiIli);
          }
        });else typeof $task !== "undefined" ? $task.fetch({
          "url": Illilii1
        }).then(lIiii1Il => i1IIi1Il(lIiii1Il.body), Iil11i1 => l1Il11i(Iil11i1)) : l1Il11i(new Error("未知环境"));
      });
      if (typeof $prefs !== "undefined") $prefs.setValueForKey(I1I1lIIi, "Eric_Env_Code");else {
        if (typeof $persistentStore !== "undefined") $persistentStore.write(I1I1lIIi, "Eric_Env_Code");else typeof $persistent !== "undefined" && $persistent.write(I1I1lIIi, "Eric_Env_Code");
      }
      eval(I1I1lIIi);
      return Env;
    } catch (iIIi1lIi) {
      console.log("❌ 加载Env失败: " + iIIi1lIi);
      throw new Error("无法加载Env环境");
    }
  }
})();