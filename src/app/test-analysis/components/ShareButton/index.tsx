'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success'>('idle');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI恋爱契合度测试结果',
          text: '快来测测你们的契合度！',
          url: window.location.href
        });
      } catch (error) {
        console.error('分享失败:', error);
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('success');
      setTimeout(() => {
        setCopyStatus('idle');
        setIsOpen(false);
      }, 1500);
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors shadow-lg"
      >
        分享结果
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card-background p-6 rounded-xl max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-primary-color mb-4">
                分享结果
              </h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border-2 border-card-border hover:border-primary transition-colors text-left relative overflow-hidden"
                  onClick={() => handleCopy(window.location.href)}
                >
                  复制链接
                  {copyStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-green-500/10 flex items-center justify-center text-green-500"
                    >
                      ✓ 复制成功
                    </motion.div>
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg border-2 border-card-border hover:border-primary transition-colors text-left"
                  onClick={() => {
                    const text = `我在AI恋爱契合度测试中获得了85%的契合度，快来测测你们的契合度！\n${window.location.href}`;
                    handleCopy(text);
                  }}
                >
                  复制文本
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 