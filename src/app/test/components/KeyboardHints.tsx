'use client';

import { motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

export default function KeyboardHints({ isVisible }: Props) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 p-4 bg-card-background rounded-xl shadow-lg max-w-sm w-full mx-4"
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary-color mb-4">
          键盘快捷键
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-secondary-color">
            <span className="inline-block px-2 py-1 bg-card-border rounded mr-2">1-4</span>
            选择答案
          </div>
          <div className="text-secondary-color">
            <span className="inline-block px-2 py-1 bg-card-border rounded mr-2">Enter</span>
            确认选择
          </div>
          <div className="text-secondary-color">
            <span className="inline-block px-2 py-1 bg-card-border rounded mr-2">Esc</span>
            返回首页
          </div>
          <div className="text-secondary-color">
            <span className="inline-block px-2 py-1 bg-card-border rounded mr-2">?</span>
            显示/隐藏帮助
          </div>
        </div>
      </div>
    </motion.div>
  );
} 