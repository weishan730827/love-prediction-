import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '开始测试 - AI恋爱契合度测试',
  description: '通过回答一系列问题，了解你们的契合程度。我们的AI系统会从性格相容性、生活习惯、价值观等多个维度进行分析。',
  openGraph: {
    title: 'AI恋爱契合度测试',
    description: '想知道你们有多般配吗？快来测试吧！',
    type: 'website',
    images: [
      {
        url: '/images/test-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'AI恋爱契合度测试',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI恋爱契合度测试',
    description: '想知道你们有多般配吗？快来测试吧！',
    images: ['/images/test-preview.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'AI恋爱契合度测试',
  description: '通过AI技术分析你和伴侣的契合度，从性格相容性、生活习惯、价值观等多个维度进行全面分析。',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1024',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function TestLayout({
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