'use client';

import { motion } from 'framer-motion';

interface Suggestion {
  id: string;
  title: string;
  content: string;
  icon: string;
}

const suggestions: Suggestion[] = [
  {
    id: 'communication',
    title: '加强沟通',
    content: '建议定期进行深入交流，分享各自的想法和感受，增进相互理解。',
    icon: '💬'
  },
  {
    id: 'activities',
    title: '共同活动',
    content: '多参与共同感兴趣的活动，创造更多美好的回忆。',
    icon: '🎯'
  },
  {
    id: 'growth',
    title: '共同成长',
    content: '互相支持对方的个人发展，一起学习新技能或培养共同兴趣。',
    icon: '🌱'
  },
  {
    id: 'future',
    title: '规划未来',
    content: '讨论并制定共同的未来计划，包括短期和长期目标。',
    icon: '🎯'
  }
];

export default function Suggestions() {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={suggestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <div className="text-2xl w-10 h-10 flex items-center justify-center bg-primary/5 rounded-full">
            {suggestion.icon}
          </div>
          <div className="flex-1">
            <div className="font-medium text-primary-color mb-1">
              {suggestion.title}
            </div>
            <div className="text-secondary-color text-sm">
              {suggestion.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 