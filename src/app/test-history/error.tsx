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
    console.error('历史记录页面错误:', error);
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          历史记录加载失败
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || '发生了一些错误，请稍后再试'}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            返回首页
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            重试
          </motion.button>
        </div>
      </div>
    </div>
  );
} 