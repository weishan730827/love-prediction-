'use client';

import { motion } from 'framer-motion';
import type { Suggestion } from '../../types';

interface Props {
  suggestions: Suggestion[];
}

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function MatchSuggestion({ suggestions }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {suggestions.map((suggestion) => (
        <motion.div
          key={suggestion.id}
          variants={itemVariants}
          className="card p-6"
        >
          <div className="flex gap-4">
            <div className="text-2xl">{suggestion.icon}</div>
            <div>
              <div className="font-medium text-primary-color mb-2">
                {suggestion.title}
              </div>
              <div className="text-secondary-color whitespace-pre-line">
                {suggestion.content}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 