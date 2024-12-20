import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '测试历史 - AI恋爱契合度测试',
  description: '查看你的历史测试结果，了解你们的契合度变化。',
  openGraph: {
    title: '测试历史 - AI恋爱契合度测试',
    description: '查看历史测试结果',
    type: 'website',
  },
};

export default function TestHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
} 