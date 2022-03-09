window.onload = function () {
  var popup = document.getElementById("js-popup");
  if (!popup) return;
  popup.classList.add("is-show");

  var blackBg = document.getElementById("js-black-bg");
  var closeBtn = document.getElementById("js-close-btn");
  closePopUp(blackBg);
  closePopUp(closeBtn);

  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener("click", function () {
      popup.classList.remove("is-show");
    });
  }


};

$(function () {
  var roma = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "ka",
    "ki",
    "ku",
    "ke",
    "ko",
    "sa",
    "si",
    "su",
    "se",
    "so",
    "ta",
    "ti",
    "tu",
    "tsu",
    "to",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "ha",
    "hi",
    "hu",
    "he",
    "ho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "ya",
    "yu",
    "yo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "wa",
    "wo",
    "nn",
    "ga",
    "gi",
    "gu",
    "ge",
    "go",
    "za",
    "zi",
    "zu",
    "ze",
    "zo",
    "da",
    "di",
    "du",
    "de",
    "do",
    "ba",
    "bi",
    "bu",
    "be",
    "bo",
    "pa",
    "pi",
    "pu",
    "pe",
    "po",
    "la",
    "li",
    "lu",
    "le",
    "lo",
    "wi",
    "we",
    "va",
    "vi",
    "vu",
    "ve",
    "vo",
    "fa",
    "fi",
    "fe",
    "fo",
    "bb",
    "cc",
    "dd",
    "ff",
    "gg",
    "hh",
    "jj",
    "kk",
    "ll",
    "mm",
    "nn",
    "pp",
    "qq",
    "rr",
    "ss",
    "tt",
    "vv",
    "ww",
    "xx",
    "yy",
    "zz",
    "ja",
    "ju",
    "je",
    "jo",
    "kya",
    "kyu",
    "kyo",
    "sya",
    "syu",
    "sye",
    "syo",
    "sha",
    "shu",
    "she",
    "syo",
    "tya",
    "tyu",
    "tye",
    "tyo",
    "cha",
    "chu",
    "che",
    "cho",
    "thi",
    "thu",
    "twu",
    "ltu",
    "xtu",
    "nya",
    "nyu",
    "nyo",
    "hya",
    "hyu",
    "hyo",
    "mya",
    "myu",
    "myo",
    "lya",
    "lyu",
    "lyo",
    "xya",
    "xyu",
    "xyo",
    "rya",
    "ryu",
    "ryo",
    "gya",
    "gyu",
    "gyo",
    "zya",
    "zyu",
    "zye",
    "zyo",
    "jya",
    "jyu",
    "jye",
    "jyo",
    "dya",
    "dyu",
    "dyo",
    "dhi",
    "dhu",
    "dwu",
    "bya",
    "byu",
    "byo",
    "pya",
    "pyu",
    "pyo",
    "-",
    "~",
    ",",
    ".",
    " ",
    "　",
    "fu",
    "cu",
    "kwa",
    "gwa",
    "twu",
    "xa",
    "xi",
    "xu",
    "xe",
    "xo",
    "ca",
    "cu",
    "co",
    "shi",
    "ji",
    "jyi",
    "chi",
    "dha",
    "dhi",
    "dhu",
    "dhe",
    "dho",
    "tsa",
    "tsi",
    "tse",
    "tso",
    "tha",
    "thi",
    "thu",
    "the",
    "tho",
    "ye",
    "rye",
  ];
  var hira = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "ざ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
    "ぁ",
    "ぃ",
    "ぅ",
    "ぇ",
    "ぉ",
    "うぃ",
    "うぇ",
    "ヴァ",
    "ヴィ",
    "ヴ",
    "ヴェ",
    "ヴォ",
    "ふぁ",
    "ふぃ",
    "ふぇ",
    "ふぉ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "っ",
    "じゃ",
    "じゅ",
    "じぇ",
    "じょ",
    "きゃ",
    "きゅ",
    "きょ",
    "しゃ",
    "しゅ",
    "しぇ",
    "しょ",
    "しゃ",
    "しゅ",
    "しぇ",
    "しょ",
    "ちゃ",
    "ちゅ",
    "ちぇ",
    "ちょ",
    "ちゃ",
    "ちゅ",
    "ちぇ",
    "ちょ",
    "てぃ",
    "てゅ",
    "とぅ",
    "っ",
    "っ",
    "にゃ",
    "にゅ",
    "にょ",
    "ひゃ",
    "ひゅ",
    "ひょ",
    "みゃ",
    "みゅ",
    "みょ",
    "ゃ",
    "ゅ",
    "ょ",
    "ゃ",
    "ゅ",
    "ょ",
    "りゃ",
    "りゅ",
    "りょ",
    "ぎゃ",
    "ぎゅ",
    "ぎょ",
    "じゃ",
    "じゅ",
    "じぇ",
    "じょ",
    "じゃ",
    "じゅ",
    "じぇ",
    "じょ",
    "ぢゃ",
    "ぢゅ",
    "ぢょ",
    "でぃ",
    "でゅ",
    "どぅ",
    "びゃ",
    "びゅ",
    "びょ",
    "ぴゃ",
    "ぴゅ",
    "ぴょ",
    "ー",
    "～",
    "、",
    "。",
    " ",
    " ",
    "ふ",
    "く",
    "くぁ",
    "ぐぁ",
    "とぅ",
    "ぁ",
    "ぃ",
    "ぅ",
    "ぇ",
    "ぉ",
    "か",
    "く",
    "こ",
    "し",
    "じ",
    "じぃ",
    "ち",
    "でゃ",
    "でぃ",
    "でゅ",
    "でぇ",
    "でょ",
    "つぁ",
    "つぃ",
    "つぇ",
    "つぉ",
    "てゃ",
    "てぃ",
    "てゅ",
    "てぇ",
    "てょ",
    "いぇ",
    "りぇ",
  ];

  
  
 const quiz=['0593聖徳太子が推古天皇の摂政になる',
'0645大化の改新',
'0663白村江の戦い',
'0701大宝律令',
'0710都を平城京にする',
'0743墾田永年私財法',
'0794都を平安京にする',
'0894遣唐使の停止',
'0935関東地方で「新皇」を名乗る人物が反乱を起こした',
'0939藤原純友の乱',
'1016藤原道長が摂政になる',
'1051前九年の役',
'1083後三年の役',
'1086後白河上皇が院政を始める',
'1156保元の乱',
'1159平治の乱　後白河上皇の政治的勢力争いに力を貸した平清盛と源義経が争い、平清盛が勝利する',
'1167平清盛が武士で初めて太政大臣になる',
'1185守護・地頭の設置',
'1192鎌倉幕府成立',
'1221承久の乱',
'1232御成敗式目の制定',
'1274元寇(文永の役)',
'1281元寇(弘安の役)',
'1333鎌倉幕府崩壊',
'1334建武の新政',
'1338室町幕府成立',
'1392南北朝合一',
'1428現在の滋賀県で農民たちが徳政を求めて一揆を起こし、徳政を勝ち取った',
'1467応仁の乱',
'1485山城国一揆',
'1488加賀の一向一揆',
'1492スペインがコロンブスを派遣し、新大陸を発見した',
'1498バスコ・ダ・ガマが希望峰を通ってインドに到着する航路を開いた',
'1519-22マゼラン隊が世界一周をした',
'1543種子島に鉄砲が伝来した',
'1549宣教師であるフランシスコ・ザビエルが日本に上陸する',
'1560桶狭間の戦い',
'1573織田信長が足利義昭を京都から追放する',
'1575長篠の戦い',
'1582本能寺の変',
'1582太閤検地',
'1588刀狩',
'1590豊臣秀吉が関白になる',
'1590豊臣秀吉が全国を統一する',
'1592朝鮮出兵(文禄の役)',
'1597朝鮮出兵(慶長の役)',
'1600関ヶ原の戦い',
'1603江戸幕府成立',
'1615禁中並公家諸法度の制定',
'1635参勤交代の追加',
'1637島原・天草一揆が起こる',
'1639ポルトガル戦の来航禁止',
'1641平戸にあったオランダ商館を長崎の出島に移す(鎖国完成)',
'1642ピューリタン革命',
'1669シャクシャインの戦い',
'1688名誉革命',
'1689権利の章典',
'1716享保の改革',
'1742公事方御定書の制定',
'1772田沼意次の政治',
'1775アメリカ独立戦争',
'1776アメリカ独立宣言',
'1782天明の飢饉',
'1787寛政の改革(松平定信)',
'1789バスチーユ牢獄襲撃',
'1825異国船打払令',
'1837大塩平八郎の乱',
'1840アヘン戦争',
'1841水野忠邦の政治',
'1853ペリー来航',
'1854日米和親条約',
'1857インド大反乱',
'1858日米修好通商条約',
'1859安政の大獄',
'1860桜田門外の変',
'1861南北戦争',
'1862生麦事件',
'1863薩英戦争',
'1864四国連合艦隊による報復',
'1866薩長同盟',
'1867大政奉還',
'1867五箇条の御誓文',
'1868戊辰戦争',
'1869版籍奉還',
'1871廃藩置県',
'1871日清修好条規',
'1871岩倉使節団の派遣',
'1871前島密が郵便制度を始める',
'1872学制',
'1872富岡製糸場設立',
'1872新橋横浜間に鉄道が開通する',
'1873徴兵令',
'1873地租改正',
'1873板垣退助と西郷隆盛が政府を去る',
'1874板垣退助が民選議員設立の建白書を提出する',
'1875樺太・千島交換条約',
'1876日朝修好条規',
'1877西南戦争',
'1879琉球処分',
'1880全国の民主派の代表が大阪に集まり、国会開設を求める',
'1881国会解説の勅諭',
'1881板垣退助が自由党結成する',
'1882大隈重信が立憲改進党を設立する',
'1885伊藤博文が内閣制度を始める',
'1889代日本帝国憲法発布',
'1890帝国議会が初めて開かれる',
'1890教育勅語',
'1894陸奥宗光が日英通商航海条約を結び、治外法権を撤廃する',
'1894日清戦争',
'1895三国干渉',
'1899義和団事件',
'1902日英同盟',
'1904日露戦争',
'1910韓国併合',
'1911辛亥革命',
'1912大正時代が始まる',
'1912第一次護憲運動',
'1914第一次世界大戦',
'191521か条の要求',
'1917ロシア革命',
'1918シベリア出兵',
'1918米騒動',
'1918原敬の政治',
'1919パリ講和会議',
'1919ワイマール憲法',
'1919三・一独立運動',
'1919五・四運動',
'1920国際連盟発足',
'1921ワシントン会議',
'1923関東大震災',
'1925ラジオ放送開始',
'1925普通選挙法制定',
'1925治安維持法制定',
'1929世界恐慌',
'1931満州事変',
'1932五・一五事件',
'1933国際連盟脱退',
'1936二・二六事件',
'1937日中戦争',
'1938国家総動員法',
'1939第二次世界大戦',
'1940日独伊三国同盟',
'1941太平洋戦争',
'1941太平洋憲章',
'1919三・一独立運動',
'1919五・四運動',
'1920国際連盟発足',
'1921ワシントン会議',
'1923関東大震災',
'1925ラジオ放送開始',
'1925普通選挙法制定',
'1925治安維持法制定',
'1929世界恐慌',
'1931満州事変',
'1932五・一五事件',
'1933国際連盟脱退',
'1936二・二六事件',
'1937日中戦争',
'1938国家総動員法',
'1939第二次世界大戦',
'1940日独伊三国同盟',
'1941太平洋戦争',
'1941太平洋憲章',
'1945ヤルタ会談',
'1945ポツダム宣言',
'1945国際連合発足',
'1946日本国憲法公布',
'1947日本国憲法施行',
'1948世界人権宣言',
'1949中華人民共和国成立',
'1950朝鮮戦争',
'1950警察予備隊が組織される',
'1951サンフランシスコ平和条約',
'1951日米安全保障条約',
'1953テレビ放送開始',
'1954第五福竜丸事件',
'1955第1回原水爆禁止大会',
'1955平和十原則が採択される',
'1956日ソ共同声明',
'1960アフリカの年',
'1962キューバ危機',
'1963部分的核実験禁止条約',
'1964東海道新幹線が開通',
'1964東京オリンピック',
'1965日韓基本条約',
'1965ベトナム戦争',
'1967公害対策基本法が制定される',
'1968アメリカが小笠原諸島を返還する',
'1968国内総生産がアメリカに次ぐ2位になる',
'1970大阪で万国博覧会が開かれる',
'1971環境省が設置される',
'1971非核三原則が国会で決議される',
'1972日中共同声明',
'1972アメリカが沖縄を返還する',
'1973石油危機(オイルショック)',
'1978日中平和友好条約',
'1985男女雇用機会均等法',
'1989消費税が初めて導入される',
'1989平成が始まる',
'1989ベルリンの壁が崩壊する',
'1989マルタ会談',
'1990東西ドイツ統一',
'1991ソ連崩壊',
'1991湾岸戦争',
'1992PKO協力法制定',
'1992自衛隊がカンボジアに派遣される',
'1993EU成立',
'1995阪神・淡路大震災が起こる',
'1996包括的核禁止条約が採択される',
'1997京都議定書',
'1997消費税が5%になる',
'1999情報公開法',
'2000介護保険制度が開始',
'2001同時多発テロ',
'2002平壌宣言',
'2003イラク戦争開始',
'2009裁判員制度導入',
'2011東日本大震災',
'2014消費税8%になる',
'2020消費税10%になる'
]
let n;
  var client = "2.0.1";
  const music = new Audio('https://lazuceleste.herokuapp.com/%E6%82%B2%E6%84%B4.mp3');
  let audio = new Audio(
    "https://cdn.glitch.me/edd2250f-eeb5-4d1b-ae59-72904758d909%2F3e057a634b6ccca033bcdaf658da6270.wav?v=1635803467838"
  );
    let adduseraudio = new Audio(
    "https://lazuceleste.herokuapp.com/on.mp3"
  );
  const script = document.createElement("script");
  script.src = "https://ipinfo.io?callback=callback";
  document.body.appendChild(script);
  document.body.removeChild(script);
  let yourip, yourcountry;
  $.get(
    "https://ipinfo.io",
    function (res) {
      yourip = res.ip;
      yourcountry = res.country;
    },
    "jsonp"
  );
  var FADE_TIME = 0;
  var TYPING_TIMER_LENGTH = 200; 
  var COLORS = [
    "#0f0", //tsumuri1017'color
    "#fff", //そのほか開発者
    "#fff", //一般ユーザー
    "#fff", //BANユーザーがなぜか来た
  ];
  // チャット系はい。
  var $window = $(window);
  var $usernameInput = $(".usernameInput"); // ユーザー名をインプット。
  var $messages = $(".messages"); // メッセージの場所
  var $inputMessage = $(".inputMessage"); // メッセージのインプットボックス

  var $loginPage = $(".login.page"); // ログインページ(ページ遷移せず)
  var $chatPage = $(".chat.page"); // チャットルームページ

  // ユーザー名の設定をする
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var socket = io();
  // <script src="/socket.io/socket.io.js">function io() {}</script>
  let list = ["tester", "admin", "3^3", "3no3jou", "-", "alluser", "blizard4"];
  if (list.indexOf(GetCookie("lapis_name")) != -1) {
    // BAN処理
    location.href = "/site/accountblock.html";
  }

  if (GetCookie("lapis_name") != null) {
    username = GetCookie("lapis_name");
    $loginPage.fadeOut();
    $chatPage.show();
    $loginPage.off("click");
    $currentInput = $inputMessage.focus();
    socket.emit("add user", GetCookie("lapis_name"));
  }
  var admintest = false;
  var premiumuser = false;

  //
  function GetCookie(name) {
    var result = null;
    var cookieName = name + "=";
    var allcookies = document.cookie;
    var position = allcookies.indexOf(cookieName);
    if (position != -1) {
      var startIndex = position + cookieName.length;
      var endIndex = allcookies.indexOf(";", startIndex);
      if (endIndex == -1) {
        endIndex = allcookies.length;
      }
      result = decodeURIComponent(allcookies.substring(startIndex, endIndex));
    }
    return result;
  }
  function EditCookie(name, str, age) {
    document.cookie = `${name}=${encodeURIComponent(str)};max-age=${age}`;
  }

  function addParticipantsMessage(data) {
    var message = "";
    if (data.numUsers === 1) {
      message += "今、チャットにはあなたしか居ません";
    } else {
      message += "今、チャットには " + data.numUsers + " 人が居ます。";
    }
    log(message);
  }

  // ユーザー名設定
  function setUsername() {
    username = cleanInput($usernameInput.val().trim());

    // 色々
    if (username) {
      //どうやら、username == trueの省略系らしい
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off("click");
      $currentInput = $inputMessage.focus();

      // 入ったよ〜って。
      socket.emit("add user", username);
      EditCookie("lapis_name", username, 31104000);
    }
  }
  ///////////////////////////////////////////////
  let okalert;
  setInterval(() => {
    EditCookie("test", "ok", 1);
    /////////////////////あまりにバグる人が多いため一旦コメントに////////////////
    if (GetCookie("test") != "ok" && okalert != "ok") {
      alert(
        "cookieが無効になっています。治安をよくするためにcookieを有効にしてください。"
      );
      okalert = "ok";
      location.href = "https://lazuceleste.f5.si";
    }
    /////////////////////////////////////////////////////////
    if (GetCookie("lapisname") == "test" && GetCookie("mute") == null) {
      if (GetCookie("okalert") != "ok") {
        let message = "*ミュートが何らかの手段によって取り消されました。";
        addChatMessage({
          username: username,
          message: message,
        });
        socket.emit("new message", message);
        EditCookie("okalert", "ok", 31104000);
      }
    }
  }, 1000);
  //チャットメッセージを送信

  function sendMessage() {
    if (Number(GetCookie("ban")) >= 6) {
      location.href = "/site/accountblock.html";
    } else {
      //ここでいいかな？
      if (Number(GetCookie("int")) >= 3) {
        if (GetCookie("lapis_name") === "tsumuri1017|作者") {
        } else {
          EditCookie("mute", "1", 300);
          EditCookie("int", null, -1);
          EditCookie(
            "ban",
            Number(GetCookie("ban")) + 1,
            60 * 60 * 60 * 24 * 7
          );
          EditCookie("lapisname", "test", 300);
          EditCookie("okalert", null, -1);
          let message =
            "*過度なスパムをしたため、このユーザーを5分間ミュートにしました。";
          addChatMessage({
            username: username,
            message: message,
          });
          socket.emit("new message", message);
        }
      }
      if (GetCookie("mute") == "1") {
        if (username != "tsumuri1017|作者") {
          alert("あなたは過度なスパムをしたため、5分間ミュートされています。");
        }
      } else {
        var now = new Date();
        var message = $inputMessage.val();
        // HTMLタグが送信されないために行う動作
        if (username != "ゆづ") {
          message = cleanInput(message);
        }
        // If(何かが入ったソケット通信があった)then
        if (message && connected) {
          EditCookie("int", Number(GetCookie("int")) + 1, 1);
          $inputMessage.val("");
          if (message.length >= 500) {
          } }}}
    
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
  // 入室とかのログ
  function log(message, options) {
    var $el = $("<li>").addClass("log").text(message);
    addMessageElement($el, options);
  }

  let count = 0;
  const countUp = () => {
    socket.emit("user list", GetCookie("lapis_name"));
  };
  setInterval(countUp, 5000);

  function nowUserList(newusername) {
    var listuser = newusername + "　";
    const list = document.getElementById("list");
    list.innerHTML += listuser;
    list.innerHTML = "　";
  }

  // チャットメッセージをリストに追加
  function addChatMessage(data, options) {
    let now = new Date();
    let temp = "0" + now.getHours();
    let hours =
      temp.substr(temp.length - 2, 1) + temp.substr(temp.length - 1, 1);
    temp = "0" + now.getMinutes();
    let minutes =
      temp.substr(temp.length - 2, 1) + temp.substr(temp.length - 1, 1);
    temp = "0" + now.getSeconds();
    let seconds =
      temp.substr(temp.length - 2, 1) + temp.substr(temp.length - 1, 1);
    // 何かが入力されていたらフェードインするな！
    var $typingMessages = getTypingMessages(data);
    options = options || {};
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.remove();
    }
    let $messageBodyDiv, typingClass, $messageDiv;
    var $timeDiv = $('<span class="username"/>')
      .text(hours + ":" + minutes + ":" + seconds)
      .css("color", getUsernameColor(data.username));
    var $usernameDiv = $('<span class="username"/>')
      .text(" " + data.username)
      .css("color", getUsernameColor(data.username));
    if (data.message.substr(0, 6) == "/image") {
      typingClass = data.typing ? "typing" : "";
      imageElm = $("<img>").attr("src", data.message.substr(7));
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append($timeDiv, $usernameDiv, "<br>", imageElm);
    } else if (data.message.substr(0, 5) == "/math") {
      typingClass = data.typing ? "typing" : "";

      let mathn = encodeURIComponent(data.message.substr(6));
      // console.log(mathn);
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          '<br><img src="https://chart.apis.google.com/chart?cht=tx&chl=' +
            mathn +
            '"width=200/>'
        );
    } else if (data.message.substr(0, 4) == "/bgm") {
      bgm.play();
    } else if (data.message.substr(0, 12) == "/now") {
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append($usernameDiv, "現在時刻は" + new Date() + "です！");
    } else if (data.message.substr(0, 4) == "/imp") {
      typingClass = data.typing ? "typing" : "";
      $messageBodyDiv = $('<h2 class="messageBody" style="color: red;">').text(
        "リコール情報：ChromeBook Y2が燃えます。ChromeBookユーザーはすぐに確認してください"
      );
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBodyDiv,
          '<a href="https://news.yahoo.co.jp/articles/33795dcafbe888ea007f772bdea6d5d0257565d3"><h2><font color="red">詳細</font></h2></a>'
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          '<br><iframe src="https://ja.wikipedia.org/wiki/' +
            data.message.substr(6) +
            '" width="800" height="300">'
        );
    } else if (data.message.substr(0, 8) == "/scratch") {
      //$messageBodyDiv = $(
      //'<span class="messageBody" style="color: yellow;">'
      //  ).text(
      //     "person( " +
      //      data.message.substr(8) +
      //        " )"
      //    );
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          '<br><iframe src="https://turbowarp.org/' +
            data.message.substr(9) + '/embed'+
            '" width="800" height="300">'
        );
    } else if (data.message.indexOf(`https://`) != -1) {
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("https://"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      ); //みんないる！！！
      let $linkDiv = $('<a href="' + linktext + '" target="_blank"/>')
        // let $linkDiv = $('<a href="https://google.com target="_blank"/>')
        .text(linktext)
        .css("color", "white");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
    } else if (data.message.indexOf(`/!`) != -1) {
      ////隠し文字
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("/!"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      let $linkDiv = $("<b" + linktext + "/>")
        .text(linktext)
        .css("color", "#2A5CAA");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
    } else if (data.message.indexOf(`/--`) != -1) {
      ////取り消し線
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("/--"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      let $linkDiv = $("<s" + linktext + "/>").text(linktext);
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
    } else if (data.message.indexOf(`/__`) != -1) {
      ////罫線
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("/__"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      let $linkDiv = $("<u" + linktext + "/>").text(linktext);
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
    }

    /////////////////////////////クロスサイトスクリプト攻撃///////////////////////////////////////////////
    //これでjs実行できるよwｗｗ
    //例

    /*--XSS--*/ //alert((GetCookie("lapis_name"))+"さん、こんにちは！");
    //if (data.message.indexOf(`/*--XSS--*/`) != -1 ) {////任意のjsを実行させる
    //let temp = data.message;
    // let linktext = "#";
    //  let $messageBefore, $messageAfter;
    //  linktext = temp.substr(temp.indexOf("/*--XSS--*/"), LinkFinder(temp));
    //     $messageBefore = $('<span class="messageBody">').text(
    //     temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
    //  );//これのview-users見てよ！
    //    $messageAfter = $('<span class="messageBody">').text(
    //    temp.substr(temp.indexOf(linktext) + linktext.length)
    //    );
    //    let $linkDiv = $('<script'+linktext+'/>')
    //      .text(linktext)
    //    typingClass = data.typing ? "typing" : "";
    // $messageDiv = $('<li class="message" />')

    ///  .data("username", data.username)
    ///    .addClass(typingClass)
    ///     .append($timeDiv,$usernameDiv, $messageBefore, ///$linkDiv, $messageAfter);

    //}
    //else
    else if (data.message.indexOf(`/B/`) != -1) {
      ////太文字
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("/B/"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      let $linkDiv = $("<b " + linktext + "/>")
        .text(linktext)
        .css("color", "white");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
      /////////////////////////////////////////////////////////////////////////////////////
    } else if (data.message.indexOf(`#`) != -1) {
      ////twitterハッシュタグ
      let temp = data.message;
      let linktext = "test";

      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("#"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      const uri = "https://twitter.com/search?q=" + linktext;
      var $twitterurl = uri.replace("#", "%23");

      let $linkDiv = $("<a href=" + $twitterurl + ' target="_blank"/>')
        .text(linktext)
        .css("color", "lightblue");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
      /////////////////////////////////////////////////////////////////////////////////////
    } else if (data.message.indexOf(`s@`) != -1) {
      ////Scratchユーザー
      let temp = data.message;
      let linktext = "s@";

      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("s@"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(4, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      linktext = linktext.replace("s@", "");
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      const uri = "https://scratch.mit.edu/users/" + linktext;
      var $twitterurl = uri.replace("#", "%23");

      let $linkDiv = $("<a href=" + $twitterurl + ' target="_blank"/>')
        .text(linktext)
        .css("color", "lightblue");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
      /////////////////////////////////////////////////////////////////////////////////////
    }else if (data.message.indexOf(`@`) != -1) {
      ////Twitterユーザー
      let temp = data.message;
      let linktext = "@";

      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("@"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      const uri = "https://twitter.com/" + linktext;
      var $twitterurl = uri.replace("#", "%23");

      let $linkDiv = $("<a href=" + $twitterurl + ' target="_blank"/>')
        .text(linktext)
        .css("color", "lightblue");
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username)
        .addClass(typingClass)
        .append(
          $timeDiv,
          $usernameDiv,
          $messageBefore,
          $linkDiv,
          $messageAfter
        );
      /////////////////////////////////////////////////////////////////////////////////////
    }  else if (data.message.indexOf(`tkmi`) != -1) {
      ////
      let temp = data.message;
      let linktext = "tkmi";

      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("tkmi"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      const uri = linktext;
      var $twitterurl = uri.replace("tkmi", "にゃあ");

      let $linkDiv = $("<b" + $twitterurl + " />").text(linktext);
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<li class="message" />')
        .data("username", data.username) //ハッシュタグかな...
        .addClass(typingClass)
        .append($timeDiv, "匿名", $messageBefore, $linkDiv, $messageAfter);
      /////////////////////////////////////////////////////////////////////////////////////
    } else if (data.message.indexOf(`‪admin`) != -1) {
      ////管理者権限ここです。これ使ってます。ちょうど1000行目()
      if (GetCookie("mute") == "1") return; //強制 return
      let temp = data.message;
      let linktext = "#";
      let $messageBefore, $messageAfter;
      linktext = temp.substr(temp.indexOf("‪admin"), LinkFinder(temp));
      $messageBefore = $('<span class="messageBody">').text(
        temp.substr(0, temp.length - temp.substr(temp.indexOf(linktext)).length)
      );
      $messageAfter = $('<span class="messageBody">').text(
        temp.substr(temp.indexOf(linktext) + linktext.length)
      );
      var $admintext = linktext.replace(
        "‪admin",
        GetCookie("lapis_name") + "よ、よく聞きなさい。"
      );
      let $linkDiv = $("<h2 " + $admintext + "/>").text(linktext);
      typingClass = data.typing ? "typing" : "";
      $messageDiv = $('<h2><li class="message" />')
        .addClass(typingClass)
        .append(
          '<font color="lightblue">アドミニストレータ権限ログ：</font><br>',
          $messageBefore,
          linktext.replace(
            "‪admin",
            GetCookie("lapis_name") + "よ、よく聞きなさい。"
          ),
          $messageAfter
        );
    } else if (data.message.substr(0, 7) == "/person") {
      if (username == data.message.substr(8)) {
        let message = "-> Response";
        addChatMessage({
          username: username,
          message: message,
        });
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
        .append($timeDiv, $usernameDiv, $messageBodyDiv);
    } else if (
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
      if (data.message.substr(0, 6) == "‪!mute") {
        if (
          username == data.message.substr(7) ||
          "alluser" == data.message.substr(7)
        ) {
          EditCookie("mute", "1", 300);
          EditCookie("int", null, -1);
          if (GetCookie("mute") == "1") {
            let message = "-> ミュート成功";
            addChatMessage({
              username: username,
              message: message,
            });
            socket.emit("new message", message);
          } else {
            let message = "-> ミュート失敗";
            addChatMessage({
              username: username,
              message: message,
            });
            socket.emit("new message", message);
          }
        }
        $messageBodyDiv = $(
          '<span class="messageBody" style="color: red;">'
        ).text(
          "管理者権限により " +
            data.message.substr(7) +
            " をミュートにしました。"
        );
        typingClass = data.typing ? "typing" : "";
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append($timeDiv, $usernameDiv, $messageBodyDiv);
      } else if (data.message.substr(0, 8) == "‪!unmute") {
        if (
          username == data.message.substr(9) ||
          "alluser" == data.message.substr(9)
        ) {
          EditCookie("mute", null, -1);
          let message = "-> ミュート解除成功";
          addChatMessage({
            username: username,
            message: message,
          });
          socket.emit("new message", message);
        }
        $messageBodyDiv = $(
          '<span class="messageBody" style="color: red;">'
        ).text(
          "管理者権限により " +
            data.message.substr(9) +
            " をミュート解除にしました。"
        );
        typingClass = data.typing ? "typing" : ""; //だいたいそんなかんじかな
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append($timeDiv, $usernameDiv, $messageBodyDiv);
      } else if (data.message.substr(0, 11) == "‪view-users") {
        if (username != data.username) {
          let message = "　";
          addChatMessage({
            username: username,
            message: message,
          });
          socket.emit("new message", message);
        }
        $messageBodyDiv = $(
          '<span class="messageBody" style="color: yellow;">'
        ).text("<- 現在いるユーザーリスト");
     ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append($timeDiv, $usernameDiv, $messageBodyDiv);
      }
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
          }
          addChatMessage({
            username: username,
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
        }
        $messageBodyDiv = $(
          '<span class="messageBody" style="color: yellow;">'
        ).text("問題："+now_quiz.substr(4, 100));
        
        typingClass = data.typing ? "typing" : "";
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append($timeDiv, $usernameDiv, $messageBodyDiv);
      } else if (data.message.substr(0, 1) == ":") {
      let ans = data.message;
      let hiragana = "";
      let temp;
      for (let i = 0; i < ans.length; ) {
        temp = ans.substr(i, 1);
        if (roma.includes(temp)) {
          hiragana = hiragana + hira[roma.indexOf(temp)];
          i += 1;
        } else {
          temp = ans.substr(i, 2);
          if (roma.includes(temp)) {
            hiragana = hiragana + hira[roma.indexOf(temp)];
            i += 2;
            if (roma.indexOf(temp) < 107.5 && roma.indexOf(temp) > 86.5) {
              i -= 1;
            }
          } else {
            temp = ans.substr(i, 3);
            if (roma.includes(temp)) {
              hiragana = hiragana + hira[roma.indexOf(temp)];
              i += 3;
            } else {
              hiragana = hiragana + ans.substr(i, 1);
              i += 1;
            }
          }
        }
      }
      $messageBodyDiv = $('<span class="messageBody">').text(
        data.message + "(" + hiragana.substr(1) + ")"
      );
      typingClass = data.typing ? "typing" : "";
      if (!data.typing) {
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append($timeDiv, $usernameDiv, $messageBodyDiv);
      }
    } else {
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
      }

      typingClass = data.typing ? "typing" : "";
     ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
        $messageDiv = $('<li class="message" />')
          .data("username", data.username)
          .addClass(typingClass)
          .append(
            $timeDiv,
            '<img src="' +
              myicon +
              '" alt="アイコン" width="38" height="38" class="user-icon">',
            $usernameDiv,
            admin,
            verify,
            $messageBodyDiv
          );
      }
    }
    if (data.message == "‪リロードしろ") {
      //console.log("リロード命令");
      alert("新しいバージョンが公開されたためリロードされます。");
      location.href = "https://lapis-lazuli-link.glitch.me/chat";
    } else {
      if (data.message != "入力中...") {
        if (list.indexOf(GetCookie("lapis_name")) != -1) {
          // BAN処理
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////e) {
    for (let i = message.indexOf("https://"); i < message.length + 1; i++) {
      if (message.substr(i, 1) == " ") {
        return i - message.indexOf("https://");
      }
    }
    return message.length;
  }

  // 入力中...表示
  function addChatTyping(data) {
    data.typing = true;
    data.message = "入力中...";
    addChatMessage(data);
  }

  // タイピング中...を消す
    ////////////////////////////////////////////////////
  //機密情報なためいったん削除されています。
    //オープンソースまでお待ちください。
  ///////////////////////////////////////////////////////////
  function addMessageElement(el, options) {
    var $el = $(el);
    // 設定オプション
    if (!options) {
      options = {};
    }
    if (typeof options.fade === "undefined") {
      //フェードアウトするか
      options.fade = true; //そゆこと←設定はここ！元はtlue
    }
    if (typeof options.prepend === "undefined") {
      //おいおい↓これはさわるな
      options.prepend = false; //!!!!!!!!!!!!true=上に新規投稿　false=下に新規投稿　元はfalse
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el); //原因解明
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Prevents input from having injected markup
  function cleanInput(input) {
    return $("<div/>").text(input).text();
  }

  // Updates the typing event
  function updateTyping() {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit("typing");
      }
      lastTypingTime = new Date().getTime();

      setTimeout(function () {
        var typingTimer = new Date().getTime();
        var timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit("stop typing");
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }

  // Gets the 'X is typing' messages of a user
  function getTypingMessages(data) {
    return $(".typing.message").filter(function (i) {
      return $(this).data("username") === data.username;
    });
  }

  // Gets the color of a username through our hash function
  function getUsernameColor(username) {
    //alert(username);
    colorusername = username;
    // Compute hash code
    var hash = 7;
    for (var i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    var index = Math.abs(hash % COLORS.length);

    if (colorusername === "tsumuri1017|作者") {
      var index = 0;
    } else {
      var index = 1;
    }
    return COLORS[index];
  }
  // Keyboard events

  $window.keydown(function (event) {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }

    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit("打ち終わりました");
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on("input", function () {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(function () {
    $currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(function () {
    $inputMessage.focus();
  });

  // Socket イベント

  // ログインメッセージ
  socket.on("login", function (data) {
    var message = "あなたはフリープランです。";
    
    log(message, {
      prepend: true,
    });
   

    connected = true;
    var message = "チャットに入室しました";
    log(message, {
      prepend: true,
    });
    addParticipantsMessage(data);

    connected = true;
     let loginuseraudio = new Audio("https://lazuceleste.herokuapp.com/login.wav");
    loginuseraudio.play();
  });

  // 新しいメッセージがあると伝える
  socket.on("new message", function (data) {
    addChatMessage(data);
  });
  //ユーザーリスト
  socket.on("user list", function (data) {
    nowUserList(data.username);
  });

  // 入室ログ
  socket.on("user joined", function (data) {
    log("　　　");
    log(new Date());
    log(data.username + " が入室しました");
    addParticipantsMessage(data);
   let adduseraudio = new Audio("https://lazuceleste.herokuapp.com/on.mp3");
    adduseraudio.play();
  });

  // 退出ログ
  socket.on("user left", function (data) {
    log("　　　");
    log(new Date());
    log(data.username + " が退出しました。");
    addParticipantsMessage(data);
    removeChatTyping(data);
    let removeuseraudio = new Audio("https://lazuceleste.herokuapp.com/off.mp3");
    removeuseraudio.play();
  });

  // タイピング中のメッセージを送る
  socket.on("typing", function (data) {
    addChatTyping(data);
  });

  socket.on("stop typing", function (data) {
    removeChatTyping(data);
  });
});

function unmute() {
  EditCookie("mute", 0);
}
 

window.addEventListener('DOMContentLoaded', function(){
  
  // BGM
  setInterval(() => {
music.play();
  }, 240000);

}); 
