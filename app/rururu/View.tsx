"use client";

import About from "@/components/About";
import ContentContainer from "@/components/ContentContainer";
import FirstView from "@/components/FirstView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import footerImage from "@/components/assets/footer.png";
import devider from "@/components/assets/section_divider_rururu.png";
import ContentTitle from "@/components/ContentTitle";
import TwoColumnContainer from "@/components/TwoColumnContainer";
import { Box } from "@mui/material";
import DetailList from "@/components/DetailList";
import Form from "@/components/Form";
import { useRef } from "react";

export default function View() {
  const aboutMessages = [
    "",
    "楽しいことの達人「チーム・るるる」です！",
    "お芝居、歌、ヒーローショー！？",
    "ハロウィンの仮装も大歓迎♪",
    "",
    "一緒におはなしを楽しみませんか？",
    "お子さまから大人まで、みんな集まれ〜！",
  ];

  const rururuSummaryLeft = [
    {
      subHeader: "タイトル",
      contents: ["チーム・るるるのおはなしであそぼ！"],
    },
    // {
    //   subHeader: "出演",
    //   contents: [
    //     "雨蘭 咲木子",
    //     "田中 英樹",
    //     "澤山 佳小里",
    //     "葛谷 知花",
    //     "加藤 拓二",
    //     "おまたかな",
    //     "橋爪 紋佳",
    //     "佐藤 裕樹",
    //     "大久保 彩乃",
    //     "佐藤 巴南",
    //     "新家 健太",
    //     "安原 義人 (スペシャルゲスト)  ※ 3 回目のみ出演",
    //     "後藤 敦 (スペシャルゲスト)",
    //   ],
    // },
    {
      subHeader: "日時",
      contents: [
        "2026年10月10日 (土)",
        "① 14時～　（スイート♡）",
        "② 17時～　（ビター♠️）",
        "　",
        "2026年10月11日 (日)",
        "③ 10時30分～　（スイート♡）",
        "④ 14時～　（スイート♡）",
        "　",
        "※ 開場は開演の15分前を予定しています。",
        "　",
        "♡スイート回：公演終了後は工作コーナーもあります。工作好きのお子様にオススメ！",
        "♠️ビター回：お話や歌を余韻深めにお届けします。絵本から小説まで、物語が好きなあなたにオススメ！",
      ],
    },
    {
      subHeader: "会場",
      contents: [
        "エコービル5F ケイコバ",
        "東京都渋谷区東3丁目18−3",
        "(JR・地下鉄日比谷線 恵比寿駅より徒歩5分)",
      ],
    },
  ];
  const rururuSummaryRight = [
    {
      subHeader: "料金",
      contents: [
        "♡スイート回：小学生以下無料、中学生以上500円",
        "♠️ビター回：小学生以下無料、中学生以上1,000円",
        "※ 当日現金精算のみ",
      ],
    },
    {
      subHeader: "公演時間",
      contents: [
        "♡スイート回：公演約45分＋工作タイム約30分",
        "♠️ビター回：公演約60分（工作タイムは無し）",
      ],
    },
    {
      subHeader: "参加方法",
      contents: [
        "本サイトの予約フォームより、ご希望の日時をお申し込みください。",
      ],
    },
    {
      subHeader: "ご案内",
      contents: [
        "入口にてお履物を脱いでいただきます。スリッパ等の室内履きと、脱いだ靴を入れる袋をご持参ください。",
      ],
    },
    {
      subHeader: "お問い合わせ先",
      contents: [`echo.bunkasai2026<span class="contact" />`],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <Header
        background="#f2ebe6"
        color="black"
        title="チーム・るるるのおはなしであそぼ！"
      /> */}
      <FirstView
        onClick={scroll}
        title="チーム・るるるのおはなしであそぼ！"
        fileName="FirstView_party.png"
        background="#f2ebe6"
        color="black"
      />
      <ContentContainer background="white" noPadding>
        <Box sx={{ pt: { xs: 2, md: 5 } }} />
        <About messages={aboutMessages} />
        <Box sx={{ pt: 5 }} />
      </ContentContainer>
      <ContentContainer background="#f6f6f6">
        <ContentTitle title="イベント詳細" />
        <TwoColumnContainer
          left={<DetailList summarys={rururuSummaryLeft} />}
          right={<DetailList summarys={rururuSummaryRight} />}
        />
      </ContentContainer>
      <ContentContainer background="#f2ebe6">
        <ContentTitle scrollRef={scrollRef} title="予約申し込みフォーム" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          うまくスクロールできない方は
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_4LDtWSOQWGxDbks1WPik8VfV1hc6PaRuK_46GHdBAbE7tA/viewform?usp=pp_url&entry.723210304=0%E4%BA%BA&entry.1799826848=0%E4%BA%BA&entry.1692645899=0%E4%BA%BA&entry.1693144841=0%E4%BA%BA&entry.970210763=0%E4%BA%BA&entry.309687673=0%E4%BA%BA&entry.1268175974=0%E4%BA%BA&entry.1511099593=0%E4%BA%BA" target="_blank">
            こちら
          </a>
          から
        </Box>
        <Form href="https://docs.google.com/forms/d/e/1FAIpQLSe_4LDtWSOQWGxDbks1WPik8VfV1hc6PaRuK_46GHdBAbE7tA/viewform?usp=pp_url&entry.723210304=0%E4%BA%BA&entry.1799826848=0%E4%BA%BA&entry.1692645899=0%E4%BA%BA&entry.1693144841=0%E4%BA%BA&entry.970210763=0%E4%BA%BA&entry.309687673=0%E4%BA%BA&entry.1268175974=0%E4%BA%BA&entry.1511099593=0%E4%BA%BA" />
      </ContentContainer>

      <Footer imageSource={footerImage.src} />
    </>
  );
}
