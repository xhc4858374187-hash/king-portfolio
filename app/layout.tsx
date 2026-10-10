import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KING — Game & Concept Design",
  description:
    "游戏系统、玩法策划与概念设计作品集原型，展示项目、设计过程与视觉语言。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
