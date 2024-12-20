import type { TestResult } from '../types';
import { ApiError, API_ERRORS } from './error';

interface ApiResponse {
  success: boolean;
  data?: TestResult;
  error?: string;
}

export async function getTestResult(id: string): Promise<TestResult | null> {
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 返回模拟数据
    return {
      overallScore: 85,
      dimensions: [
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
      ],
      suggestions: [
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
      ],
      createdAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('获取测试结果失败:', error);
    return null;
  }
}

export async function submitTestAnswers(answers: Record<string, string>): Promise<string> {
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 生成一个随机ID作为结果ID
    const resultId = Math.random().toString(36).substring(2);
    
    return resultId;
  } catch (error) {
    console.error('提交测试答案失败:', error);
    throw new ApiError(API_ERRORS.SERVER_ERROR);
  }
} 