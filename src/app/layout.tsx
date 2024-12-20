import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI恋爱契合度测试 - 了解你们的匹配程度',
  description: '通过AI技术分析你和伴侣的契合度，从性格相容性、生活习惯、价值观等多个维度进行全面分析，获取个性化的关系建议。',
  openGraph: {
    title: 'AI恋爱契合度测试',
    description: '想知道你们有多般配吗？快来测试吧！',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
} 