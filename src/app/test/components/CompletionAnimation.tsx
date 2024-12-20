'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isVisible: boolean;
  onComplete: () => void;
}

export default function CompletionAnimation({ isVisible, onComplete }: Props) {
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="bg-card-background p-8 rounded-xl max-w-sm w-full text-center"
          onAnimationComplete={onComplete}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold text-primary-color mb-4"
          >
            测试完成！
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-secondary-color mb-6"
          >
            正在为你生成分析报告...
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.9, duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 