import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI恋爱/婚姻契合度预测平台 - 了解你们的匹配程度",
  description: "通过AI技术分析你和伴侣的契合度，获取个性化的建议和匹配分析。简单易用，实时反馈，注重隐私保护。",
  keywords: "AI预测,恋爱测试,婚姻测试,契合度分析,情感咨询",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
