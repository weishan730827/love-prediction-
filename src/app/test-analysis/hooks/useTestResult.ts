'use client';

import { useState, useEffect, useCallback } from 'react';
import type { TestResult, LoadingState } from '../types';
import { getTestResult } from '../utils/api';
import { getErrorMessage } from '../utils/error';

export function useTestResult(resultId: string) {
  const [result, setResult] = useState<TestResult | null>(null);
  const [status, setStatus] = useState<LoadingState>('idle');
  const [error, setError] = useState<string>('');

  const fetchResult = useCallback(async () => {
    try {
      setStatus('loading');
      setError('');
      
      const data = await getTestResult(resultId);
      
      if (!data) {
        throw new Error('获取测试结果失败');
      }

      setResult(data);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(getErrorMessage(err));
      console.error('获取测试结果失败:', err);
    }
  }, [resultId]);

  useEffect(() => {
    if (resultId) {
      fetchResult();
    }
  }, [resultId, fetchResult]);

  return { 
    result, 
    status, 
    error,
    retry: fetchResult 
  };
} 