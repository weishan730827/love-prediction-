'use client';

import { motion } from 'framer-motion';

interface Dimension {
  id: string;
  label: string;
  score: number;
  description: string;
}

const dimensions: Dimension[] = [
  {
    id: 'personality',
    label: '性格相容性',
    score: 90,
    description: '你们的性格特征非常互补，能很好地理解对方。'
  },
  {
    id: 'lifestyle',
    label: '生活习惯',
    score: 85,
    description: '生活作息和习惯基本一致，偶尔需要协调。'
  },
  {
    id: 'values',
    label: '价值观契合',
    score: 88,
    description: '在重要议题上观点高度一致，对未来有共同愿景。'
  },
  {
    id: 'communication',
    label: '沟通方式',
    score: 82,
    description: '沟通顺畅，能理性讨论问题，偶尔需要调整。'
  },
  {
    id: 'future',
    label: '未来发展',
    score: 80,
    description: '对未来规划大方向一致，细节可以商议。'
  }
];

export default function DimensionChart() {
  return (
    <div className="space-y-6">
      {dimensions.map((dimension) => (
        <div key={dimension.id} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-primary-color font-medium">
              {dimension.label}
            </span>
            <span className="text-secondary-color">
              {dimension.score}%
            </span>
          </div>
          <div className="h-2 bg-card-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${dimension.score}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-primary"
            />
          </div>
          <p className="text-sm text-secondary-color">
            {dimension.description}
          </p>
        </div>
      ))}
    </div>
  );
} 