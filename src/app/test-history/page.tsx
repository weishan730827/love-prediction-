'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { getTestHistory, clearTestHistory } from '../test/utils/storage';

interface TestHistoryItem {
  id: string;
  score: number;
  date: string;
}

export default function TestHistoryPage() {
  const [history, setHistory] = useState<TestHistoryItem[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    setHistory(getTestHistory());
  }, []);

  const handleClear = () => {
    clearTestHistory();
    setHistory([]);
    setShowClearConfirm(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[800px] mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">测试历史</h1>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            返回首页
          </Link>
        </header>

        {history.length > 0 ? (
          <>
            <div className="space-y-4 mb-8">
              {history.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-primary">
                      {item.score}%
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/test-analysis/${item.id}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      查看详情
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link
                href="/test"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                开始新测试
              </Link>

              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                清除历史记录
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-8">暂无测试记录</p>
            <Link
              href="/test"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              开始测试
            </Link>
          </div>
        )}

        {/* 清除确认对话框 */}
        <AnimatePresence>
          {showClearConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-xl p-6 max-w-sm w-full"
              >
                <h3 className="text-xl font-semibold mb-4">
                  确认清除历史记录？
                </h3>
                <p className="text-gray-600 mb-6">
                  此操作无法撤销，确定要清除所有测试历史记录吗？
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-4 py-2 text-gray-600"
                  >
                    取消
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    确认清除
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 