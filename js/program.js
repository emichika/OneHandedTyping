//　正解タイプ数
let correct;
//　不正解タイプ数
let incorrect;
//　入力する文字
let charToBeEntered;
let charNum = 0;
let random;

// ロード処理
function loadProcess() {
  // 実行中の解除
  sessionStorage.removeItem("runFlg");
  // 親指の色を指定
  fifthFinger.style.backgroundColor = "#ffb43e";
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
}
// 開始処理
function startProcess(e) {
  // 実行中と開始の判定
  if (sessionStorage.getItem("runFlg") == null && e.key == " ") {
    // 実行中へ設定
    sessionStorage.setItem("runFlg", true);
    // 結果の非表示
    overallResult.style.display = "none";
    // 再スタートの非表示
    restartText.style.display = "none";
    // 開始時間を3秒に設定
    let countdownTime = 3;
    // 開始までのインターバル処理(1秒間隔)
    var countdownInterval = setInterval(function () {
      // スタートテキストの非表示
      startText.style.display = "none";
      // カウントダウンの表示
      countdown.style.display = "block";
      // カウントダウンに開始時間を設定
      countdown.innerHTML = countdownTime;
      // 開始時間の減算
      countdownTime--;
      // 開始の判定
      if (countdownTime < 0) {
        // カウントダウンの非表示
        countdown.style.display = "none";
        // インターバル処理の終了
        clearInterval(countdownInterval);
        // タイピング開始処理
        typingStart();
      }
    }, 1000);
  }
}
// タイピング開始処理
function typingStart() {
  // 正解タイプ数の初期化
  correct = 0;
  // 不正解タイプ数
  incorrect = 0;
  // 文の表示処理
  displayOfSentences();
  // タイムリミットの設定
  let remainingTime = 10;
  // タイムリミットのインターバル処理(1秒間隔)
  var timeLimitInterval = setInterval(function () {
    // タイムリミットの表示
    timeLimit.style.visibility = "visible";
    timeLimit.innerHTML = "残り時間：" + remainingTime;
    // タイムリミットの減算
    remainingTime--;
    // タイムリミットの判定
    if (remainingTime == -1) {
      // インターバル処理の終了
      clearInterval(timeLimitInterval);
      // 実行中の解除
      sessionStorage.removeItem("runFlg");
      // 結果表示処理
      setOverallResult();
    }
  }, 1000);
  // 文の表示処理
  displayOfSentences();
}
// 文の表示処理
function displayOfSentences() {
  // 文章の要素数からランダムな数字を取得
  random = Math.floor(Math.random() * japaneseList.length);
  // 乱数から日本語を取得し表示
  japaneseText.innerHTML = japaneseList[random];
  // 乱数からローマ字を取得し表示
  romajiText.innerHTML = romajiList[random];
  // 入力する文字の取得
  getCharToBeEntered();
  // スタイルの初期化
  styleInitialization();
  // 日本語を表示
  japaneseText.style.display = "block";
  // ローマ字を表示
  romajiText.style.display = "block";
  // 次回のキーと指のスタイル設定
  nextKeyAndFinger();
}
// 入力する文字の取得
function getCharToBeEntered() {
  //　次回の対象キーのスタイル設定するため、グローバル変数に設定
  charToBeEntered = romajiList[random].charAt(charNum);
}
// スタイルの初期化
function styleInitialization() {
  // キーのスタイルの初期化
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

  // 指のスタイルの初期化
  firstFinger.style.backgroundColor = "#D8D8D8";
  secondFinger.style.backgroundColor = "#D8D8D8";
  thirdFinger.style.backgroundColor = "#D8D8D8";
  fourthFinger.style.backgroundColor = "#D8D8D8";
  fifthFinger.style.backgroundColor = "#D8D8D8";
}
// 次回のキーと指のスタイル設定
function nextKeyAndFinger() {
  // 入力する文字を判定
  switch (charToBeEntered) {
    //キーと指のスタイル設定
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
// 結果表示処理
function setOverallResult() {
  timeLimit.style.visibility = "hidden";
  japaneseText.style.display = "none";
  romajiText.style.display = "none";

  var percentage = 0;
  var score = 0;
  if (correct == 0 && incorrect == 0) {
    percentage = 0 + "%";
  } else {
    score = Math.floor(
      Math.pow(correct, 2) * Math.pow(correct / (correct + incorrect), 5)
    );
    percentage = ((correct / (correct + incorrect)) * 100).toFixed(1) + "%";
  }
  overallResult.style.display = "block";
  overallResult.innerHTML =
    "スコア : " +
    score +
    "点" +
    "<hr>正解 タイプ数   : " +
    correct +
    "<br>不正解 タイプ数 : " +
    incorrect +
    "<br>正答率          : " +
    percentage +
    "<hr>";
  restartText.style.display = "block";
  restartText.style.color = "#ffb43e";
  restartText.style.textAlign = "center";
  restartText.innerHTML = "スペースキーで開始";
  // スタイルの初期化
  styleInitialization();
  spaceKey.style.color = "#ffffff";
  spaceKey.style.backgroundColor = "#ffb43e";
  fifthFinger.style.backgroundColor = "#ffb43e";
  charToBeEntered = "";
  random = 0;
  charNum = 0;
}
document.onkeydown = function (e) {
  keyStr = e.key;

  if (keyStr == charToBeEntered) {
    romajiText.innerHTML =
      "<span style='color: #ffb43e;'>" +
      romajiList[random].substr(0, charNum + 1) +
      "</span>" +
      romajiList[random].substr(charNum + 1, romajiList[random].length);
    charNum++;
    //　正解タイプ数の加算
    correct++;
    // 入力する文字の取得
    getCharToBeEntered();
    // スタイルの初期化
    styleInitialization();
    nextKeyAndFinger();
  } else {
    incorrect++;
  }
  if (typeof random != "undefined") {
    if (charNum == romajiList[random].length) {
      charNum = 0;
      // 文の表示処理
      displayOfSentences();
    }
  }
};
