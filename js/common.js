// 日本語リスト
const japaneseList = [
  "青は藍より出でて藍より青し",
  "圧巻",
  "後の雁が先になる",
  "鞍上人なく、鞍下馬なし",
  "いずれ菖蒲か杜若",
];

// ローマ字リスト
const romajiList = [
  "AOHAAIYORIIDETEAIYORIAOSI",
  "AKKANN",
  "ATONOKARIGASAKININARU",
  "ANNJYOUHITONAKU,ANNKAUMANASI",
  "IZUREAYAMEKAKAKITUBATA",
];

const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
const verNum = "2.1.1";

function setCopyright() {
  copyright.innerHTML = copr;
}

function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
