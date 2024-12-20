'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import DimensionChart from '../components/DimensionChart';
import Suggestions from '../components/Suggestions';
import ShareButton from '../components/ShareButton';

interface Props {
  params: {
    id: string;
  };
}

export default function TestAnalysisPage({ params }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <button
            onClick={() => router.back()}
            className="text-secondary-color hover:text-primary-color transition-colors"
          >
            ← 返回
          </button>
          <h1 className="text-2xl font-bold text-primary-color">
            测试分析结果
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card p-8 mb-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-6xl font-bold text-primary mb-4"
            >
              85%
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-secondary-color"
            >
              整体契合度评分
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-6"
          >
            <h2 className="text-xl font-semibold text-primary-color mb-4">
              维度分析
            </h2>
            <DimensionChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="card p-6"
          >
            <h2 className="text-xl font-semibold text-primary-color mb-4">
              改善建议
            </h2>
            <Suggestions />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <ShareButton />
        </motion.div>
      </div>
    </div>
  );
} 