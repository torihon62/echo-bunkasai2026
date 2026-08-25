/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import UranImg from "@/components/assets/UranSakiko2.jpg";
import TanakaImg from "@/components/assets/TanakaHideki.jpg";
import SawayamaImg from "@/components/assets/SawayamaKaori.jpg";
// import NakasujiImg from "@/components/assets/NakasujiAya.jpg";
import KuzutaniImg from "@/components/assets/KuzutaniTomoka.jpg";
import KatoImg from "@/components/assets/KatoTakuji.jpg";
import SatouHirokiImg from "@/components/assets/SatouHiroki.jpg";
import OmataImg from "@/components/assets/OmataKana.jpg";
import HashizumeImg from "@/components/assets/HashizumeAyaka.jpg";
import OkuboImg from "@/components/assets/OkuboAyano.jpg";
import SatoHanaImg from "@/components/assets/SatoHana.jpg";
import ArayaImg from "@/components/assets/ArayaKenta.jpg";

import PCCenterMLeftText from "../PCCenterMLeftText";
import DetailList from "../DetailList";
import PerformerComment from "../PerformerComment";

export default function Performers() {
  const uranDetail = [
    {
      subHeader: "舞台",
      contents: [
        "『大正パンデミック』(テアトル・エコー)",
        "『おかしな二人』(テアトル・エコー)",
        "『ら抜きの殺意』(テアトル・エコー)",
        "『馬かける男たち』(テアトル・エコー)",
        "『23階の笑い』(テアトル・エコー)",
      ],
    },
    {
      subHeader: "アテレコ・海外ドラマ",
      contents: [
        "『ダーマandグレッグ』（ダーマ）",
        "『ルーシー・ショー』（ルーシー）",
        "『バーン・ノーティス』（フィオナ）",
        "『サブリナ』（ヒルダ）",
      ],
    },
    {
      subHeader: "アニメ",
      contents: [
        "『トリコ』（節婆）",
        "『ブルードラゴン』（マルマロ）",
        "『ワンピース』（ジンラミー）",
        "『夏目友人帳』（ユキハナ）",
      ],
    },
    {
      subHeader: "ナレーション",
      contents: ["『火曜サプライズ』", "『伊東家の食卓』"],
    },
  ];
  const uranComments = [
    "10/12日曜日は",
    "一日中ずぅッと",
    "ニコニコゲラゲラしながら",
    "マルシェで売り子ちゃんします(^^)",
    "一緒に笑ってくださーい and 絵本も読みまぁーすウキウキ",
  ];

  const hidekiDetail = [
    {
      subHeader: "舞台",
      contents: [
        "『大正パンデミック』(テアトル・エコー)",
        "『雨』（こまつ座）",
      ],
    },
    {
      subHeader: "ＴＶドラマ",
      contents: ["『あなたを奪ったそのひから』", "『世にも奇妙な物語』"],
    },
    {
      subHeader: "アテレコ・アニメ",
      contents: [
        "『セサミストリート』（クリス/テリー）",
        "『モンスターズインク』（チェット）",
        "『ミッキーマウス』(巨人のウィリー)",
      ],
    },
    {
      subHeader: "司会・MC",
      contents: ["『恵比寿文化祭2022』"],
    },
  ];
  const hidekiComments = [
    "オオキイヒトヘ",
    "チイサイヒトヘ",
    "イラッシャイ　マセ",
    "ココロホグレル",
    "エガオアフレル",
    "トクベツナ　ヒトトキヲ",
    "イタシマショウ",
  ];

  const sawayamaDetail = [
    {
      subHeader: "",
      contents: [
        "劇団公演、小劇場の舞台に数多く出演。",
        "『絵本演劇ユニットBOO WHO WOOL』では、「こんにちはアンデルセンさん」「たっくんの出会った鬼」に出演",
      ],
    },
    {
      subHeader: "吹き替え",
      contents: ["「イサン」", "「王女の男（ヨリ）」"],
    },
    {
      subHeader: "MC",
      contents: ["恵比寿文化祭2023"],
    },
  ];
  const sawayamaComments = [
    "私たちが普段使っている稽古場で皆さんと一緒に楽しく過ごせたら！って妄想するだけで、ニヤニヤとワクワクが止まりません！うふふ（笑）お待ちしています♪",
  ];

  // const nakasujiDetail = [
  //   {
  //     subHeader: "舞台",
  //     contents: ["「星の王子さま」王子役", "「よだかの星」よだか役"],
  //   },
  // ];
  // const nakasujiComments = [
  //   "ちょこっとだけ見るだけでも、大歓迎！気軽に、遊びに来てください♪",
  // ];

  const kuzutaniDetail = [
    {
      subHeader: "",
      contents: [
        "『ドックはおもちゃドクター』（ドック）",
        "『銀河銭湯パンタくん』（ギギ）",
        "『しまじろう』（たまこ先生）",
        "『ココメロン』（JJ）",
      ],
    },
  ];
  const kuzutaniComments = [
    "ようこそ！『チーム・るるる』のおはなしパーティーへ。",
    "今年はどんな物語に出会えるのか⁉︎あなたのお気に入りの絵本をカバンに詰めて、遊びに来てくださいね♪",
  ];

  const katoDetail = [
    {
      subHeader: "舞台",
      contents: [
        "『フレディ』",
        "『プロポーズ・プロポーズ』",
        "『おかしな二人~女性版~』",
        "『バグポリス』",
        "『ままごと』",
      ],
    },
  ];
  const katoComments = ["全力で一緒に楽しみましょう！"];

  const satoHirokiDetail = [
    {
      subHeader: "舞台",
      contents: ["『大正パンデミック』", "『ミナト街電化物語』"],
    },
  ];
  const satoHirokiComments = [
    "おはなしマルシェのマルシェってなんだろう？",
    "おいしいのかな？きれいなのかな〜？マルシェっていうんだから、きっとまんまるなんだね。",
    "",
    "マルシェが何なのか気になったみんな、おはなしパーティーで待ってるよ。",
  ];

  const omataDetail = [
    {
      subHeader: "舞台",
      contents: [
        "『宝島』ジム・ホーキンス役",
        "『想稿・銀河鉄道の夜』ジョバンニ役",
      ],
    },
    {
      subHeader: "吹き替え",
      contents: [
        "『スーパーキティ』バディ役",
        "『セサミストリート』プレーリードーン役、タンゴ役",
      ],
    },
    {
      subHeader: "ナレーション",
      contents: ["NHK高校講座簿記"],
    },
  ];
  const omataComments = [
    "お芝居、歌、おしゃべり大好き「おまちゃん」です☺",
    "テアトル・エコーのケイコバで楽しいひとときを♪ レッツパーティー！",
  ];

  const hashizumeDetail = [
    {
      subHeader: "吹き替え",
      contents: [
        "『アバローのプリンセス エレナ』(エレナ)",
        "『スーパーキティ』(ジニー)",
        "『ライオンガード』(ジャスィリ)",
        "『ドックのおもちゃびょういん』(ケイティ)",
      ],
    },
  ];
  const hashizumeComments = [
    "今年はケイコバでマルシェが開催されます。",
    "みんなでおはなしを楽しんだあとは、掘り出し物いっぱいのマルシェを覗いて行ってくださいね♪",
  ];

  const okuboComments = [
    "こんにちは！あやのです！今年も私たちの秘密基地ケイコバでのパーティーに皆様をご招待します！",
    "一緒に楽しい思い出作りましょう♡",
  ];

  const satoHanaComments = [
    "どんなコトが待っているのか、考えるだけでわくわくです^^",
    "みなさんと、ニコニコ笑顔になったり？泣いたり？、どんなステキな時間になるのか、楽しみにしていまーす！",
  ];

  const arayaComments = [
    "新メンバーの「あらやん」です！",
    "遊びにきてくれたみんなと楽しい時間を過ごせると思うとワクワクです！",
    "ケイコバで素敵な絵本たちと待ってるよ♪",
    "がんばりまああああす！",
  ];

  return (
    <>
      <Grid container spacing={7} sx={{ pb: 3 }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={UranImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            雨蘭 咲木子
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={uranDetail}
          />
          <PerformerComment comments={uranComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={TanakaImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            田中 英樹
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={hidekiDetail}
          />
          <PerformerComment comments={hidekiComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={SawayamaImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            澤山 佳小里
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={sawayamaDetail}
          />
          <PerformerComment comments={sawayamaComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={KuzutaniImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            葛谷 知花
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={kuzutaniDetail}
          />
          <PerformerComment comments={kuzutaniComments} />
        </Grid>
      </Grid>
      <Box sx={{ py: { xs: 2, md: 4 } }} />
      <Grid container spacing={7} sx={{ pb: 3 }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={KatoImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            加藤 拓二
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={katoDetail}
          />
          <PerformerComment comments={katoComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={OmataImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            おまたかな
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={omataDetail}
          />
          <PerformerComment comments={omataComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={HashizumeImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            橋爪 紋佳
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={hashizumeDetail}
          />
          <PerformerComment comments={hashizumeComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={SatouHirokiImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            佐藤 裕樹
          </PCCenterMLeftText>
          <DetailList
            noMargin
            headerUnderline
            title="主な出演"
            summarys={satoHirokiDetail}
          />
          <PerformerComment comments={satoHirokiComments} />
        </Grid>
      </Grid>
      <Box sx={{ py: { xs: 2, md: 4 } }} />
      <Grid container spacing={7} sx={{ pb: 3 }}>
        <Grid size={{ xs: 12, md: 1.5 }} />
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={OkuboImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            大久保 彩乃
          </PCCenterMLeftText>
          <PerformerComment noTopPadding comments={okuboComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={SatoHanaImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            佐藤 巴南
          </PCCenterMLeftText>
          <PerformerComment noTopPadding comments={satoHanaComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={ArayaImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            新家 健太
          </PCCenterMLeftText>
          <PerformerComment noTopPadding comments={arayaComments} />
        </Grid>
        <Grid size={{ xs: 12, md: 1.5 }} />
      </Grid>
    </>
  );
}
