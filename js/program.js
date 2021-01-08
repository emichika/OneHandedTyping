// 日本語リスト
const JapaneseList = [
  "ああ言えばこう言う",
  "急がば回れ",
  "魚心あれば水心",
  "縁の下の力持ち",
  "鬼の目にも涙",
  "飼い犬に手を噛まれる",
  "九死に一生を得る",
  "口は禍の元",
  "芸術は長く人生は短し",
  "後悔先に立たず",
  "猿も木から落ちる",
  "知らぬが仏",
  "酸いも甘いも噛み分けた",
  "善は急げ",
  "大は小を兼ねる",
  "塵も積もれば山となる",
  "鶴は千年亀は万年",
  "天は二物を与えず",
  "時は金なり",
  "長い物には巻かれろ",
  "二度あることは三度ある",
  "糠に釘",
  "猫の手も借りたい",
  "暖簾に腕押し",
  "早起きは三文の徳",
  "火のないところに煙は立たぬ",
  "覆水盆に反らず",
  "弁慶の泣き所",
  "仏の顔も三度",
  "眉毛を読まれる",
  "身から出た錆",
  "娘一人に婿八人",
  "目には目、歯には歯",
  "元の鞘に納まる",
  "焼け石に水",
  "油断大敵",
  "弱り目に祟り目",
  "楽は苦の種、苦は楽の種",
  "良薬は口に苦し",
  "類は友を呼ぶ",
  "例によって例の如し",
  "論語読みの論語知らず",
  "笑う門には福来たる",
];
// ローマ字リスト
const romajiList = [
  "aaiebakouiu",
  "isogabamaware",
  "uogokoroarebamizugokoro",
  "ennositanotikaramoti",
  "oninomenimonamida",
  "kaiinunitewokamareru",
  "kyuusiniissyouwoeru",
  "kutihawazawainomoto",
  "geijutuhanagakujinseihamijikasi",
  "koukaisakinitatazu",
  "sarumokikaraotiru",
  "siranugahotoke",
  "suimoamaimokamiwaketa",
  "zenhaisoge",
  "daihasyouwokaneru",
  "tirimotumorebayamatonaru",
  "turuhasennenkamehamannen",
  "tenhanibutuwoataezu",
  "tokihakanenari",
  "nagaimononihamakarero",
  "nidoarukotohasandoaru",
  "nukanikugi",
  "nekonotemokaritai",
  "norenniudeosi",
  "hayaokihasanmonnotoku",
  "hinonaitokoronikemurihatatanu",
  "hukusuibonnikaerazu",
  "benkeinonakidokoro",
  "hotokenokaomosando",
  "mayugewoyomareru",
  "mikaradetasabi",
  "musumehitorinimukohatinin",
  "menihame,hanihaha",
  "motonosayaniosamaru",
  "yakeisinimizu",
  "yudantaiteki",
  "yowarimenitatarime",
  "rakuhakunotane,kuharakunotane",
  "ryouyakuhakutininigasi",
  "ruihatomowoyobu",
  "reiniyottereinogotosi",
  "rongoyominorongosirazu",
  "waraukadonihahukukitaru",
];

var endflg = false;
var correct;
var mistake;
var charNum = 0;
var wordChar;
var random;

// ロード処理
function loadProcess() {
  // 実行中の解除
  sessionStorage.removeItem("runFlg");
  // 親指の色を指定
  fifthFinger.style.backgroundColor = "#ffb43e";
}
// 開始処理
function startProcess(e) {
  // 実施と開始の判定
  if (sessionStorage.getItem("runFlg") == null && e.key == " ") {
    // 実行中へ設定
    sessionStorage.setItem("runFlg", true);
    // 結果の非表示
    overallResult.style.display = "none";
    // 再スタートの非表示
    restartText.style.display = "none";
    // 開始時間を3秒に設定
    let readytime = 3;
    // インターバル処理「1秒間隔」
    var readytimer = setInterval(function () {
      // スタートテキストの非表示
      startText.style.display = "none";
      // カウントダウンの表示
      countdown.style.display = "block";
      // カウントダウンに開始時間を設定
      countdown.innerHTML = readytime;
      // 開始時間のインクリメント
      readytime--;
      // 開始判定
      if (readytime < 0) {
        // カウントダウンの非表示
        countdown.style.display = "none";
        // インターバル処理の終了
        clearInterval(readytimer);
        // タイピング開始処理
        typingStart();
      }
    }, 1000);
  }
}
// タイピング開始処理
function typingStart() {
  correct = 0;
  mistake = 0;
  wordDisplay();
  var timeRemaining = 300;
  var gametimer = setInterval(function () {
    timeLimit.style.visibility = "visible";
    timeLimit.innerHTML = "残り時間：" + timeRemaining;
    timeRemaining--;
    if (timeRemaining == -1) {
      clearInterval(gametimer);
      sessionStorage.removeItem("runFlg");
      finish();
      load();
    }
  }, 1000);
  wordDisplay();
}
function wordDisplay() {
  random = Math.floor(Math.random() * romajiList.length);
  japaneseText.innerHTML = JapaneseList[random];
  romajiText.innerHTML = romajiList[random];

  charInsort();
  styleClear();
  firstHeading.style.display = "block";
  secondHeading.style.display = "block";
  nextKeyAndFinger();
}
function charInsort() {
  wordChar = romajiList[random].charAt(charNum);
}
function styleClear() {
  qKey.style.color = "#595959";
  qKey.style.backgroundColor = "#ffffff";
  wKey.style.color = "#595959";
  wKey.style.backgroundColor = "#ffffff";
  eKey.style.color = "#595959";
  eKey.style.backgroundColor = "#ffffff";
  rKey.style.color = "#595959";
  rKey.style.backgroundColor = "#ffffff";
  tKey.style.color = "#595959";
  tKey.style.backgroundColor = "#ffffff";
  yKey.style.color = "#595959";
  yKey.style.backgroundColor = "#ffffff";
  uKey.style.color = "#595959";
  uKey.style.backgroundColor = "#ffffff";
  iKey.style.color = "#595959";
  iKey.style.backgroundColor = "#ffffff";
  oKey.style.color = "#595959";
  oKey.style.backgroundColor = "#ffffff";
  pKey.style.color = "#595959";
  pKey.style.backgroundColor = "#ffffff";
  aKey.style.color = "#595959";
  aKey.style.backgroundColor = "#ffffff";
  sKey.style.color = "#595959";
  sKey.style.backgroundColor = "#ffffff";
  dKey.style.color = "#595959";
  dKey.style.backgroundColor = "#ffffff";
  fKey.style.color = "#595959";
  fKey.style.backgroundColor = "#ffffff";
  gKey.style.color = "#595959";
  gKey.style.backgroundColor = "#ffffff";
  hKey.style.color = "#595959";
  hKey.style.backgroundColor = "#ffffff";
  jKey.style.color = "#595959";
  jKey.style.backgroundColor = "#ffffff";
  kKey.style.color = "#595959";
  kKey.style.backgroundColor = "#ffffff";
  lKey.style.color = "#595959";
  lKey.style.backgroundColor = "#ffffff";
  zKey.style.color = "#595959";
  zKey.style.backgroundColor = "#ffffff";
  xKey.style.color = "#595959";
  xKey.style.backgroundColor = "#ffffff";
  cKey.style.color = "#595959";
  cKey.style.backgroundColor = "#ffffff";
  vKey.style.color = "#595959";
  vKey.style.backgroundColor = "#ffffff";
  bKey.style.color = "#595959";
  bKey.style.backgroundColor = "#ffffff";
  nKey.style.color = "#595959";
  nKey.style.backgroundColor = "#ffffff";
  mKey.style.color = "#595959";
  mKey.style.backgroundColor = "#ffffff";
  spaceKey.style.color = "#595959";
  spaceKey.style.backgroundColor = "#ffffff";

  firstFinger.style.backgroundColor = "#D8D8D8";
  secondFinger.style.backgroundColor = "#D8D8D8";
  thirdFinger.style.backgroundColor = "#D8D8D8";
  fourthFinger.style.backgroundColor = "#D8D8D8";
  fifthFinger.style.backgroundColor = "#D8D8D8";
}
function nextKeyAndFinger() {
  switch (wordChar) {
    case "a":
      aKey.style.color = "#ffffff";
      aKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "i":
      iKey.style.color = "#ffffff";
      iKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "u":
      uKey.style.color = "#ffffff";
      uKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "e":
      eKey.style.color = "#ffffff";
      eKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "o":
      oKey.style.color = "#ffffff";
      oKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "q":
      qKey.style.color = "#ffffff";
      qKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "w":
      wKey.style.color = "#ffffff";
      wKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "r":
      rKey.style.color = "#ffffff";
      rKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "t":
      tKey.style.color = "#ffffff";
      tKey.style.backgroundColor = "#ffb43e";
      secondFinger.style.backgroundColor = "#ffb43e";
      break;
    case "y":
      yKey.style.color = "#ffffff";
      yKey.style.backgroundColor = "#ffb43e";
      thirdFinger.style.backgroundColor = "#ffb43e";
      break;
    case "p":
      pKey.style.color = "#ffffff";
      pKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "s":
      sKey.style.color = "#ffffff";
      sKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "d":
      dKey.style.color = "#ffffff";
      dKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "f":
      fKey.style.color = "#ffffff";
      fKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "g":
      gKey.style.color = "#ffffff";
      gKey.style.backgroundColor = "#ffb43e";
      secondFinger.style.backgroundColor = "#ffb43e";
      break;
    case "h":
      hKey.style.color = "#ffffff";
      hKey.style.backgroundColor = "#ffb43e";
      thirdFinger.style.backgroundColor = "#ffb43e";
      break;
    case "j":
      jKey.style.color = "#ffffff";
      jKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "k":
      kKey.style.color = "#ffffff";
      kKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "l":
      lKey.style.color = "#ffffff";
      lKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
    case "z":
      zKey.style.color = "#ffffff";
      zKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "x":
      xKey.style.color = "#ffffff";
      xKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "c":
      cKey.style.color = "#ffffff";
      cKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "v":
      vKey.style.color = "#ffffff";
      vKey.style.backgroundColor = "#ffb43e";
      firstFinger.style.backgroundColor = "#ffb43e";
      break;
    case "b":
      bKey.style.color = "#ffffff";
      bKey.style.backgroundColor = "#ffb43e";
      secondFinger.style.backgroundColor = "#ffb43e";
      break;
    case "n":
      nKey.style.color = "#ffffff";
      nKey.style.backgroundColor = "#ffb43e";
      thirdFinger.style.backgroundColor = "#ffb43e";
      break;
    case "m":
      mKey.style.color = "#ffffff";
      mKey.style.backgroundColor = "#ffb43e";
      fourthFinger.style.backgroundColor = "#ffb43e";
      break;
  }
}
function finish() {
  timeLimit.style.visibility = "hidden";
  firstHeading.style.display = "none";
  secondHeading.style.display = "none";

  var percentage = 0;
  var score = 0;
  if (correct == 0 && mistake == 0) {
    percentage = 0 + "%";
  } else {
    score = Math.floor(
      Math.pow(correct, 2) * Math.pow(correct / (correct + mistake), 5)
    );
    percentage = ((correct / (correct + mistake)) * 100).toFixed(1) + "%";
  }
  overallResult.style.display = "block";
  overallResult.innerHTML =
    "スコア : " +
    score +
    "点" +
    "<hr>正解 タイプ数   : " +
    correct +
    "<br>不正解 タイプ数 : " +
    mistake +
    "<br>正答率          : " +
    percentage +
    "<hr>";
  restartText.style.display = "block";
  restartText.style.color = "#ffb43e";
  restartText.style.textAlign = "center";
  restartText.innerHTML = "スペースキーで開始";
  styleClear();
  spaceKey.style.color = "#ffffff";
  spaceKey.style.backgroundColor = "#ffb43e";
  fifthFinger.style.backgroundColor = "#ffb43e";
  wordChar = "";
  random = 0;
  charNum = 0;
}
document.onkeydown = function (e) {
  keyStr = e.key;

  if (keyStr == wordChar) {
    romajiText.innerHTML =
      "<span style='color: #ffb43e;'>" +
      romajiList[random].substr(0, charNum + 1) +
      "</span>" +
      romajiList[random].substr(charNum + 1, romajiList[random].length);
    charNum++;
    correct++;
    charInsort();
    styleClear();
    if (!endflg) {
      nextKeyAndFinger();
    }
  } else {
    mistake++;
  }
  if (typeof random != "undefined") {
    if (charNum == romajiList[random].length) {
      charNum = 0;
      wordDisplay();
    }
  }
};
