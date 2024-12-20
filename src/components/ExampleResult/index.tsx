'use client';

import { motion } from 'framer-motion';

const exampleDimensions = [
  { label: '性格相容性', score: 92 },
  { label: '生活习惯', score: 85 },
  { label: '价值观契合', score: 88 },
  { label: '沟通方式', score: 90 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ExampleResult() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="bg-card-background rounded-xl shadow-sm overflow-hidden max-w-3xl mx-auto border border-card-border"
    >
      {/* 总分区域 */}
      <motion.div
        variants={itemVariants}
        className="text-center p-8 border-b border-card-border"
      >
        <div className="text-6xl font-bold text-primary mb-4">89%</div>
        <div className="text-xl text-secondary-color">整体契合度评分</div>
      </motion.div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-card-border">
        {/* 维度分析 */}
        <motion.div
          variants={itemVariants}
          className="p-8"
        >
          <h3 className="text-lg font-semibold text-primary-color mb-6">
            维度分析
          </h3>
          <div className="space-y-6">
            {exampleDimensions.map((dim, index) => (
              <motion.div
                key={dim.label}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-color">{dim.label}</span>
                  <span className="font-medium text-primary">{dim.score}%</span>
                </div>
                <div className="h-2 bg-card-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${dim.score}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 匹配建议 */}
        <motion.div
          variants={itemVariants}
          className="p-8"
        >
          <h3 className="text-lg font-semibold text-primary-color mb-6">
            匹配建议
          </h3>
          <div className="space-y-4">
            <motion.div
              variants={itemVariants}
              className="flex gap-3"
            >
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-medium text-primary-color mb-1">核心优势</div>
                <p className="text-sm text-secondary-color">
                  你们在性格相容性和沟通方式上表现出色，这为关系的发展奠定了良好基础。
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-3"
            >
              <span className="text-2xl">✨</span>
              <div>
                <div className="font-medium text-primary-color mb-1">行动建议</div>
                <p className="text-sm text-secondary-color">
                  建议继续保持良好的沟通习惯，同时在生活习惯方面可以多加协调。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 开始测试按钮 */}
      <motion.div
        variants={itemVariants}
        className="p-8 text-center border-t border-card-border"
      >
        <motion.a
          href="/test"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary-hover transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          开始测试
        </motion.a>
      </motion.div>
    </motion.div>
  );
} 