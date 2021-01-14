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
  "酒は憂いの玉箒",
  "酒は天の美禄",
  "山椒は小粒でもぴりりと辛い",
  "三人寄れば文殊の知恵",
  "自家薬籠中の物",
  "死せる孔明、生ける仲達を走らす",
  "蛇は寸にして人を吞む",
  "酸いも甘いも嚙み分ける",
  "好きこそ物の上手なれ",
  "切磋琢磨",
  "栴檀は双葉より芳し",
  "千里の道も一歩から",
  "双璧",
  "知恵は万代の宝",
  "掉尾を飾る",
  "使ている鍬は光る",
  "敵もさるもの引っ搔くもの",
  "天衣無縫",
  "頭角を現す",
  "堂に入る",
  "能ある鷹は爪を隠す",
  "嚢中の錐",
  "掃き溜めに鶴",
  "白眉",
  "八面六臂",
  "花も実もある",
  "万緑叢中紅一点",
  "深い川は静かに流れる",
  "実ほど頭の下がる稲穂かな",
  "明鏡止水",
  "名人は人を謗らず",
  "目から鼻へ抜ける",
  "有終の美を飾る",
  "柳絮の才",
  "両手に花",
  "瑠璃も玻璃も照らせば光る",
  "老馬の智",
  "六根清浄",
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
  "SAKEHAUREINOTAMAHAHAKI",
  "SAKEHATENNNOBIROKU",
  "SANNSYOUHAKOTUBUDEMOPIRIRITOKARAI",
  "SANNNINNYOREBAMONNJYUNOTIE",
  "JIKAYAKUROUTYUUNOMONO",
  "SISERUKOUMEI,IKERUTYUUTATUWOHASIRASU",
  "JYAHASUNNNISITEHITOWONOMU",
  "SUIMOAMAIMOKAMIWAKERU",
  "SUKIKOSOMONONOJYOUZUNARE",
  "SESSATAKUMA",
  "SENNDANNHAHUTABAYORIKANBASI",
  "SENNRINOMITIMOIPPOKARA",
  "SOUHEKI",
  "TIEHABANNDAINOTAKARA",
  "TYOUBIWOKAZARU",
  "TUKATTEIRUKUWAHAHIKARU",
  "TEKIMOSARUMONOHIKKAKUMONO",
  "TENNIMUHOU",
  "TOUKAKUWOARAWASU",
  "DOUNIHAIRU",
  "NOUARUTAKAHATUMEWOKAKUSU",
  "NOUTYUUNOKIRI",
  "HAKIDAMENITURU",
  "HAKUBI",
  "HATIMENNROPPI",
  "HANAMOMIMOARU",
  "BANNRYOKUSOUTYUUKOUITTENN",
  "HUKAIKAWAHASIZUKANINAGARERU",
  "MINORUHODOATAMANOSAGARUINAHOKANA",
  "MEIKYOUSISUI",
  "MEIJINNHAHITOWOSOSIRAZU",
  "MEKARAHANAHENUKERU",
  "YUUSYUUNOBIWOKAZARU",
  "RYUUJYONOSAI",
  "RYOUTENIHANA",
  "RURIMOHARIMOTERASEBAHIKARU",
  "ROUBANOTI",
  "ROKKONNSYOUJYOU",
];
// 残り時間
const remainingTimeVal = 10;
// コピーライト
const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
// バージョン
const verNum = "2.3.12";
// コピーライトの設定
function setCopyright() {
  copyright.innerHTML = copr;
}
// バージョンの設定
function setVer() {
  ver.innerHTML = "Ver." + verNum;
}
