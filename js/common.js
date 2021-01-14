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
  "打てば響く",
  "老いたる馬は道を忘れず",
  "恐れ入り谷の鬼子母神",
  "鬼に金棒",
  "終わりよければすべてよし",
  "温故知新",
  "快刀乱麻を断つ",
  "眼光紙背に徹す",
  "癖ある馬に能あり",
  "口も八丁手も八丁",
  "君子危うきに近寄らず",
  "君子は豹変す",
  "君子は和して同ぜず、小人は同じて和せず",
  "鶏群の一鶴",
  "兄たり難く弟たり難し",
  "好機逸すべからず",
  "弘法筆を選ばず",
  "虚仮の一心",
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
  "UTEBAHIBIKU",
  "OITARUUMAHAMITIWOWASUREZU",
  "OSOREIRIYANOKISIMOJINN",
  "ONINIKANABOU",
  "OWARIYOKEREBASUBETEYOSI",
  "ONKOTISINN",
  "KAITOURANNMAWOTATU",
  "GANNKOUSIHAINITESSU",
  "KUSEARUUMANINOUARI",
  "KUTIMOHATTYOUTEMOHATTYOU",
  "KUNNSIAYAUKINITIKAYORAZU",
  "KUNNSIHAHYOUHENNSU",
  "KUNNSIHAWASITEDOUZEZU,SYOUJINNHADOUJITEWASEZU",
  "KEIGUNNNOIKKAKU",
  "KEITARIGATAKUTEITARIGATASI",
  "KOUKIISSUBEKARAZU",
  "KOUBOUHUDEWOERABAZU",
  "KOKENOISSIN",
];
// 残り時間
const remainingTimeVal = 10;
// コピーライト
const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
// バージョン
const verNum = "2.3.11";
// コピーライトの設定
function setCopyright() {
  copyright.innerHTML = copr;
}
// バージョンの設定
function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
