// 正解タイプ数
let correct;
// 不正解タイプ数
let incorrect;
// 入力する文字
let charToBeEntered;
// 乱数
let random;
// 文字番号(何文字目か)
let charNum = 0;

// ロード処理
function loadProcess() {
  // 利き手のセッションを削除
  sessionStorage.removeItem("dominantHandFlg");
  // 実行中のセッションを削除
  sessionStorage.removeItem("runFlg");
  // コピーライトの設定
  setCopyright();
  // バージョンの設定
  setVer();
}
// キー押下処理
document.onkeydown = function (e) {
  // 利き手判定
  if (sessionStorage.getItem("dominantHandFlg") == null) {
    if (e.key.toUpperCase() == "L") {
      // 左利きの場合
      sessionStorage.setItem("dominantHandFlg", "L");
    } else if (e.key.toUpperCase() == "R") {
      // 右利きの場合
      sessionStorage.setItem("dominantHandFlg", "R");
    } else {
      // 「l」または「r」キー以外は処理終了
      return;
    }
    // 利き手テキストの非表示
    dominantHand.style.display = "none";
    // スタートテキストの表示
    startText.innerHTML = "スペースキーで開始";
    startText.style.display = "block";
    // Rキーのスタイルを初期化
    rKey.style.color = "#595959";
    rKey.style.backgroundColor = "#ffffff";
    // Lキーのスタイルを初期化
    lKey.style.color = "#595959";
    lKey.style.backgroundColor = "#ffffff";
    // スペースキーのスタイル設定
    spaceKey.style.color = "#ffffff";
    spaceKey.style.backgroundColor = "#ffb43e";
    // 手の設定
    hand.innerHTML =
      "<div id='firstFinger' class='finger'></div>" +
      "<div id='secondFinger' class='finger'></div>" +
      "<div id='thirdFinger' class='finger'></div>" +
      "<div id='fourthFinger' class='finger'></div>" +
      "<div id='fifthFinger' class='finger'></div>";
    // 左手の親指のスタイルを設定
    if (sessionStorage.getItem("dominantHandFlg") == "L") {
      fifthFinger.style.height = "35px";
      fifthFinger.style.backgroundColor = "#ffb43e";
    } else {
      // 右手の親指のスタイルを設定
      firstFinger.style.height = "35px";
      firstFinger.style.backgroundColor = "#ffb43e";
    }
    return;
  }

  // 開始処理
  startProcess(e);
  // 入力する文字と入力した文字の一致する場合
  if (charToBeEntered == e.key.toUpperCase()) {
    // 一致した文字のスタイル設定
    romajiText.innerHTML =
      "<span style='color: #ffb43e;'>" +
      romajiList[random].substr(0, charNum + 1) +
      "</span>" +
      romajiList[random].substr(charNum + 1, romajiList[random].length);
    // 文字番号の加算
    charNum++;
    // 正解タイプ数の加算
    correct++;
    // 入力する文字の取得
    getCharToBeEntered();
    // スタイルの初期化
    styleInitialization();
    // 次回のキーと指のスタイル設定
    nextKeyAndFinger();
    // 入力する文字と入力した文字の一致しない場合
  } else {
    // 正解タイプ数の加算
    incorrect++;
  }
  // 乱数の初期化判定(エラー回避のため)
  if (typeof random != "undefined") {
    // 最終文字の入力確認判定
    if (charNum == romajiList[random].length) {
      // 文字番号の初期化
      charNum = 0;
      // 文の表示処理
      displayOfSentences();
    }
  }
};
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
  // 次回の対象キーのスタイル設定するため、グローバル変数に設定
  charToBeEntered = romajiList[random].charAt(charNum);
}
// スタイルの初期化
function styleInitialization() {
  // キーのスタイル初期化
  var keys = document.getElementsByClassName("key");
  for (i = 0; i < keys.length; i++) {
    keys[i].style.color = "#595959";
    keys[i].style.backgroundColor = "#ffffff";
  }
  // 指のスタイル初期化
  var fingers = document.getElementsByClassName("finger");
  for (i = 0; i < fingers.length; i++) {
    fingers[i].style.backgroundColor = "#D8D8D8";
  }
}
// 次回のキーと指のスタイル設定
function nextKeyAndFinger() {
  // 入力する文字を判定
  switch (charToBeEntered) {
    //キーと指のスタイル設定
    case "A":
      aKey.style.color = "#ffffff";
      aKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "I":
      iKey.style.color = "#ffffff";
      iKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "U":
      uKey.style.color = "#ffffff";
      uKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "E":
      eKey.style.color = "#ffffff";
      eKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "O":
      oKey.style.color = "#ffffff";
      oKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "Q":
      qKey.style.color = "#ffffff";
      qKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "W":
      wKey.style.color = "#ffffff";
      wKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "R":
      rKey.style.color = "#ffffff";
      rKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "T":
      tKey.style.color = "#ffffff";
      tKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        secondFinger.style.backgroundColor = "#ffb43e";
      } else {
        thirdFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "Y":
      yKey.style.color = "#ffffff";
      yKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        thirdFinger.style.backgroundColor = "#ffb43e";
      } else {
        fourthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "P":
      pKey.style.color = "#ffffff";
      pKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "S":
      sKey.style.color = "#ffffff";
      sKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "D":
      dKey.style.color = "#ffffff";
      dKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "F":
      fKey.style.color = "#ffffff";
      fKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "G":
      gKey.style.color = "#ffffff";
      gKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        secondFinger.style.backgroundColor = "#ffb43e";
      } else {
        thirdFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "H":
      hKey.style.color = "#ffffff";
      hKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        thirdFinger.style.backgroundColor = "#ffb43e";
      } else {
        fourthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "J":
      jKey.style.color = "#ffffff";
      jKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "K":
      kKey.style.color = "#ffffff";
      kKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "L":
      lKey.style.color = "#ffffff";
      lKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "Z":
      zKey.style.color = "#ffffff";
      zKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "X":
      xKey.style.color = "#ffffff";
      xKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "C":
      cKey.style.color = "#ffffff";
      cKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "V":
      vKey.style.color = "#ffffff";
      vKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        firstFinger.style.backgroundColor = "#ffb43e";
      } else {
        secondFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "B":
      bKey.style.color = "#ffffff";
      bKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        secondFinger.style.backgroundColor = "#ffb43e";
      } else {
        thirdFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "N":
      nKey.style.color = "#ffffff";
      nKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        thirdFinger.style.backgroundColor = "#ffb43e";
      } else {
        fourthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
    case "M":
      mKey.style.color = "#ffffff";
      mKey.style.backgroundColor = "#ffb43e";
      if (sessionStorage.getItem("dominantHandFlg") == "L") {
        fourthFinger.style.backgroundColor = "#ffb43e";
      } else {
        fifthFinger.style.backgroundColor = "#ffb43e";
      }
      break;
  }
}
// 結果表示処理
function setOverallResult() {
  // タイムリミットの非表示
  timeLimit.style.visibility = "hidden";
  // 日本語の非表示
  japaneseText.style.display = "none";
  // ローマ字の非表示
  romajiText.style.display = "none";
  // 正答率の初期化
  var percentage = 0;
  // スコアの初期化
  var score = 0;
  // 正解と不正解タイプ数が「0」の場合、
  // 正答率に「0 %」を設定
  if (correct == 0 && incorrect == 0) {
    percentage = 0 + "%";
  } else {
    // スコアの算出
    // 正解タイプ数の2乗と正答率の5乗を乗算
    score = Math.floor(
      Math.pow(correct, 2) * Math.pow(correct / (correct + incorrect), 5)
    );
    // 全タイプ数から正答率を算出
    percentage = ((correct / (correct + incorrect)) * 100).toFixed(1) + "%";
  }
  // 結果の要請を設定
  overallResult.style.display = "block";
  // 結果の表示
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
  // 再スタートの設定
  restartText.style.display = "block";
  restartText.style.color = "#ffb43e";
  restartText.style.textAlign = "center";
  restartText.innerHTML = "スペースキーで開始";
  // スタイルの初期化
  styleInitialization();
  // スペースキーのスタイル設定
  spaceKey.style.color = "#ffffff";
  spaceKey.style.backgroundColor = "#ffb43e";
  // 親指のスタイル設定
  if (sessionStorage.getItem("dominantHandFlg") == "L") {
    fifthFinger.style.backgroundColor = "#ffb43e";
  } else {
    firstFinger.style.backgroundColor = "#ffb43e";
  }
  // 入力する文字の初期化
  charToBeEntered = "";
  // 乱数の初期化
  random = 0;
  // 文字番号の初期化
  charNum = 0;
  // 実行中の解除
  sessionStorage.removeItem("runFlg");
}
