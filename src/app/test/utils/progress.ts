const STORAGE_KEY = 'test_progress';

interface TestProgress {
  answers: Record<string, string>;
  lastQuestionIndex: number;
  timestamp: number;
}

export function saveProgress(answers: Record<string, string>, questionIndex: number): void {
  try {
    const progress: TestProgress = {
      answers,
      lastQuestionIndex: questionIndex,
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('保存测试进度失败:', error);
  }
}

export function getProgress(): TestProgress | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;

    const progress: TestProgress = JSON.parse(data);
    
    // 如果进度超过24小时，则清除
    if (Date.now() - progress.timestamp > 24 * 60 * 60 * 1000) {
      clearProgress();
      return null;
    }

    return progress;
  } catch (error) {
    console.error('获取测试进度失败:', error);
    return null;
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('清除测试进度失败:', error);
  }
} 