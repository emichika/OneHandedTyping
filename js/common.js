// 参考 https://proverb-encyclopedia.com/subarasi/
// 日本語リスト
const japaneseList = [
  "青は藍より出でて藍より青し",
  "圧巻",
  "後の雁が先になる",
  "鞍上人なく、鞍下馬なし",
  "いずれ菖蒲か杜若",
  "一字千金",
  "一を聞いて十を知る",
  "一騎当千",
  "一頭地を抜く",
  "上には上がある",
];
// ローマ字リスト
const romajiList = [
  "AOHAAIYORIIDETEAIYORIAOSI",
  "AKKANN",
  "ATONOKARIGASAKININARU",
  "ANNJYOUHITONAKU,ANNKAUMANASI",
  "IZUREAYAMEKAKAKITUBATA",
  "ITIJISENNKINN",
  "ITIWOKIITEJYUUWOSIRU",
  "IKKITOUSENN",
  "ITTOUTIWONUKU",
  "UENIHAUEGAARU",
];
// 残り時間
const remainingTimeVal = 10;
// コピーライト
const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
// バージョン
const verNum = "2.3.5";
// コピーライトの設定
function setCopyright() {
  copyright.innerHTML = copr;
}
// バージョンの設定
function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
