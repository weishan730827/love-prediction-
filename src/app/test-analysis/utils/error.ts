'use client';

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return '发生未知错误';
}

export const API_ERRORS = {
  NETWORK_ERROR: '网络连接失败，请检查网络设置',
  SERVER_ERROR: '服务器出错，请稍后再试',
  NOT_FOUND: '未找到相关数据',
  INVALID_RESPONSE: '服务器响应格式错误',
  VALIDATION_ERROR: '数据验证失败',
} as const; 