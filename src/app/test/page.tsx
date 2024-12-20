'use client';

import { useState, useCallback, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { questions } from './constants';
import { saveProgress, getProgress, clearProgress } from './utils/progress';
import { playSound } from './utils/sound';
import { submitTestAnswers } from '../test-analysis/utils/api';

// 懒加载组件
const ConfirmDialog = lazy(() => import('./components/ConfirmDialog'));
const CompletionAnimation = lazy(() => import('./components/CompletionAnimation'));
const SoundSettings = lazy(() => import('./components/SoundSettings'));
const KeyboardHints = lazy(() => import('./components/KeyboardHints'));

export default function TestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // 处理答案选择
  const handleAnswer = useCallback(async (optionId: string) => {
    playSound('select');
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: optionId
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      try {
        setShowCompletion(true);
        setIsSubmitting(true);
        const resultId = await submitTestAnswers(newAnswers);
        clearProgress();
        router.push(`/test-analysis/${resultId}`);
      } catch (error) {
        setError('提交失败，请重试');
        setShowCompletion(false);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [currentQuestion?.id, currentQuestionIndex, answers, router]);

  // 键盘导航
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (currentQuestionIndex === -1) return;
      
      if (event.key >= '1' && event.key <= '4') {
        const index = parseInt(event.key) - 1;
        const options = questions[currentQuestionIndex].options;
        if (index < options.length) {
          handleAnswer(options[index].id);
        }
      } else if (event.key === '?') {
        setShowKeyboardHints(prev => !prev);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [currentQuestionIndex, handleAnswer]);

  // 渲染测试说明页面
  if (currentQuestionIndex === -1) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-[800px] mx-auto">
          <div className="card p-8">
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              准备开始测试
            </h1>
            <div className="space-y-4 text-secondary-color mb-8">
              <p>这个测试包含 {questions.length} 个问题，主要涉及以下几个方面：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>性格相容性</li>
                <li>生活习惯匹配度</li>
                <li>价值观契合程度</li>
                <li>沟通方式分析</li>
                <li>未来发展潜力</li>
              </ul>
              <p>预计用时：3-5分钟</p>
              <p>提示：可以使用键盘数字键 1-4 快速选择答案</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-6 py-2 text-secondary-color hover:text-primary-color transition-colors"
              >
                返回首页
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
                onClick={() => setCurrentQuestionIndex(0)}
              >
                开始测试
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-[800px] mx-auto">
          {/* 顶部导航 */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="text-secondary-color hover:text-primary-color transition-colors"
            >
              返回首页
            </button>
            <div className="text-sm text-secondary-color">
              问题 {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>

          {/* 进度条 */}
          <div className="mb-8">
            <div className="h-2 bg-card-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* 问题区域 */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="card p-6 mb-8"
            >
              <h2 className="text-2xl font-semibold text-primary-color mb-2">
                {currentQuestion.title}
              </h2>
              <p className="text-secondary-color mb-6">
                {currentQuestion.description}
              </p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 
                      ${answers[currentQuestion.id] === option.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-card-border hover:border-primary'
                      }
                      transition-colors relative
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.id)}
                  >
                    <span className="text-sm text-tertiary-color absolute right-4">
                      {index + 1}
                    </span>
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 对话框组件 */}
      <Suspense fallback={null}>
        <ConfirmDialog
          isOpen={showExitConfirm}
          onClose={() => setShowExitConfirm(false)}
          onConfirm={() => router.push('/')}
        />
        <CompletionAnimation
          isVisible={showCompletion}
          onComplete={() => {}}
        />
        <KeyboardHints isVisible={showKeyboardHints} />
      </Suspense>
    </>
  );
} 