'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error('测试分析页面错误:', error);
  }, [error]);

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl mb-4"
        >
          😢
        </motion.div>
        <h2 className="text-xl font-semibold text-primary-color mb-4">
          分析结果加载失败
        </h2>
        <p className="text-secondary-color mb-6">
          {error.message || '发生了一些错误，请稍后再试'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-4 py-2 text-secondary-color hover:text-primary-color transition-colors"
          >
            返回首页
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            重试
          </motion.button>
        </div>
      </div>
    </div>
  );
} 