"use client";

import About from "@/components/About";
import ContentContainer from "@/components/ContentContainer";
import FirstView from "@/components/FirstView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDevider from "@/components/SectionDevider";

import footerImage from "@/components/assets/footer.png";
import devider from "@/components/assets/section_divider_rururu.png";
import ContentTitle from "@/components/ContentTitle";
import Performers from "@/components/rururu/Performers";
import TwoColumnContainer from "@/components/TwoColumnContainer";
import { Box } from "@mui/material";
import DetailList from "@/components/DetailList";
import GuestPerformers from "@/components/rururu/GuestPerformers";

export default function View() {
  const aboutMessages = [
    "準備中",
    "",
  ];

  const rururuSummaryLeft = [
    {
      subHeader: "ワークショップ名",
      contents: ["チーム・るるるのおはなしであそぼ！"],
    },
    {
      subHeader: "出演",
      contents: [
        "雨蘭 咲木子",
        "田中 英樹",
        "澤山 佳小里",
        "葛谷 知花",
        "加藤 拓二",
        "おまたかな",
        "橋爪 紋佳",
        "佐藤 裕樹",
        "大久保 彩乃",
        "佐藤 巴南",
        "新家 健太",
        "安原 義人 (スペシャルゲスト)  ※ 3 回目のみ出演",
        "後藤 敦 (スペシャルゲスト)",
      ],
    },
    {
      subHeader: "日時",
      contents: [
        "2026年10月10日 (土)",
        "・ 14:00～15:30　スイート",
        "・ 17:00～18:00　ビター",
        "",
        "2026年10月11日 (日)",
        "・ 10:30～12:00　スイート",
        "・ 14:00～15:30　スイート",
        "※ 開場は開演の15分前",
      ],
    },
  ];
  const rururuSummaryRight = [
    {
      subHeader: "定員",
      contents: ["各回 30 人程度"],
    },
    {
      subHeader: "対象年齢",
      contents: ["どなたでも"],
    },
    {
      subHeader: "参加費",
      contents: [
        "マルシェ入場料 500 円",
        "※ 同会場開催の「ケイコバ de マルシェ」に入場できます",
        "※ 会場に何度でも自由に出入りできます",
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
    {
      subHeader: "お問い合わせ先",
      contents: [`echo.bunkasai2026<span class="contact" />`],
    },
  ];

  return (
    <>
      <Header
        background="#f2ebe6"
        color="black"
        title="チーム・るるるのおはなしであそぼ！"
      />
      <FirstView
        title="チーム・るるるのおはなしであそぼ！"
        // fileName="FirstView_party.png"
        background="#f2ebe6"
        color="black"
      />
      <ContentContainer background="white" noPadding>
        <Box sx={{ pt: { xs: 2, md: 5 } }} />
        <About messages={aboutMessages} />
        <Box sx={{ pt: 5 }} />
      </ContentContainer>
      {/* <SectionDevider imageSource={devider.src} />
      <ContentContainer background="white">
        <ContentTitle title="出演者" />
        <Box sx={{ pb: { xs: 4, md: 8 } }} />
        <Performers />
      </ContentContainer>
      <ContentContainer background="white">
        <ContentTitle title="スペシャルゲスト" />
        <Box sx={{ pb: { xs: 4, md: 8 } }} />
        <GuestPerformers />
      </ContentContainer>
      <ContentContainer background="#f6f6f6">
        <ContentTitle title="ワークショップ詳細" />
        <TwoColumnContainer
          left={<DetailList summarys={rururuSummaryLeft} />}
          right={<DetailList summarys={rururuSummaryRight} />}
        />
      </ContentContainer> */}

      <Footer imageSource={footerImage.src} />
    </>
  );
}
