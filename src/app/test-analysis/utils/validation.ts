export function isValidTestId(id: string): boolean {
  // 这里可以根据实际需求添加更多验证规则
  return /^[a-zA-Z0-9]{3,32}$/.test(id);
}

export function validateTestId(id: string): string | null {
  if (!id) {
    return '测试ID不能为空';
  }
  
  if (!isValidTestId(id)) {
    return '无效的测试ID';
  }

  return null;
} 