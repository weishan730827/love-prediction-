import type { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '测试分析 - AI恋爱契合度测试',
  description: '查看你们的契合度分析结果，包括性格相容性、生活习惯、价值观等多个维度的详细分析。',
};

export default function TestAnalysisLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {children}
    </div>
  );
} 