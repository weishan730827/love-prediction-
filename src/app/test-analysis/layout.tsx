import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '测试分析 - AI恋爱契合度测试',
  description: '查看你们的契合度分析结果，包括性格相容性、生活习惯、价值观等多个维度的详细分析。',
  openGraph: {
    title: 'AI恋爱契合度测试结果',
    description: '查看测试分析结果',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI恋爱契合度测试分析',
  description: '查看你们的契合度分析结果，包括性格相容性、生活习惯、价值观等多个维度的详细分析。',
  publisher: {
    '@type': 'Organization',
    name: 'AI恋爱契合度测试',
    url: 'https://love-test.example.com'
  }
};

export default function TestAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
} 