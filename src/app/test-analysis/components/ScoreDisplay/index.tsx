'use client';

import { motion } from 'framer-motion';

interface Props {
  score: number;
}

export default function ScoreDisplay({ score }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8 text-center"
    >
      <div className="text-6xl font-bold text-primary mb-4">
        {score}%
      </div>
      <div className="text-xl text-secondary-color">
        整体契合度评分
      </div>
    </motion.div>
  );
} 