// 日本語リスト
const japaneseList = [
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

const copr = "&copy; Copyright emichika Inc. All Rights <span id='ver'></span>";
const verNum = "1.1.9";

function setCopyright() {
  copyright.innerHTML = copr;
}

function setVer() {
  ver.innerHTML = "Ver." + verNum;
}