const STORAGE_KEY = 'test_history';

interface TestHistoryItem {
  id: string;
  score: number;
  date: string;
}

export function saveTestResult(id: string, score: number): void {
  try {
    const history = getTestHistory();
    history.unshift({
      id,
      score,
      date: new Date().toISOString()
    });
    
    // 只保留最近的10条记录
    if (history.length > 10) {
      history.pop();
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('保存测试历史失败:', error);
  }
}

export function getTestHistory(): TestHistoryItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('获取测试历史失败:', error);
    return [];
  }
}

export function clearTestHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('清除测试历史失败:', error);
  }
} 