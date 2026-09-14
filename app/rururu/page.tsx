import { Metadata } from "next";
import View from "./View";

export const metadata: Metadata = {
  title: "チーム・るるるのおはなしであそぼ！",
  description: "楽しいことの達人、テアトル・エコー「チーム・るるる」です。",
  openGraph: {
    title: "チーム・るるるのおはなしであそぼ！",
    siteName: "チーム・るるるのおはなしであそぼ！",
    type: "website",
    description: "楽しいことの達人、テアトル・エコー「チーム・るるる」です。",
    url: "https://echo-bunkasai2026.site/rururu/",
    images: "https://echo-bunkasai2026.site/FirstView_party.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kuma_ga_suki",
  },
};

export default function Home() {
  return <View />;
}
