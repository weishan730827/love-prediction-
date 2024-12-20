import { NextResponse } from 'next/server';
import type { TestResult } from '@/app/test-analysis/types';

const mockResults: Record<string, TestResult> = {
  '123': {
    overallScore: 89,
    dimensions: [
      {
        id: '1',
        label: '性格相容性',
        score: 92,
        description: '你们的性格特征高度互补，能够很好地理解和包容对方。'
      },
      {
        id: '2',
        label: '生活习惯',
        score: 85,
        description: '在日常生活中有较好的契合度，但仍有提升空间。'
      },
      {
        id: '3',
        label: '价值观契合',
        score: 88,
        description: '在人生重要议题上有较高的共识。'
      },
      {
        id: '4',
        label: '沟通方式',
        score: 90,
        description: '能够有效地表达和倾听，沟通顺畅。'
      },
      {
        id: '5',
        label: '未来规划',
        score: 87,
        description: '对未来的期望和规划方向基本一致。'
      }
    ],
    suggestions: [
      {
        id: '1',
        type: 'strength',
        title: '核心优势',
        content: '你们在性格相容性和沟通方式上表现出色，尤其是在倾听和理解对方需求方面有很强的默契。这为关系的长期发展奠定了良好基础。',
        priority: 1,
        icon: '💪'
      },
      {
        id: '2',
        type: 'improvement',
        title: '需要关注',
        content: '在生活习惯方面存在一些差异，建议通过开放和诚恳的沟通，找到双方都舒适的相处方式。重点关注作息时间和个人空间的平衡。',
        priority: 2,
        icon: '🎯'
      },
      {
        id: '3',
        type: 'action',
        title: '行动建议',
        content: '1. 每周安排固定的约会时间\n2. 共同制定一些生活规划\n3. 尝试一起培养新的共同兴趣\n4. 定期进行感情状态回顾',
        priority: 3,
        icon: '✨'
      },
      {
        id: '4',
        type: 'longTerm',
        title: '长期发展',
        content: '你们在未来规划上有较高的一致性，建议进一步深入讨论关于事业发展、家庭规划等重要话题，确保双方期望能够很好地融合。',
        priority: 4,
        icon: '🌟'
      }
    ],
    createdAt: new Date().toISOString()
  }
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { 
          success: false,
          error: '缺少必要的参数' 
        },
        { status: 400 }
      );
    }

    const result = mockResults[id];
    
    if (!result) {
      return NextResponse.json(
        { 
          success: false,
          error: '未找到测试结果' 
        },
        { status: 404 }
      );
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      data: result
    });
    
  } catch (error) {
    console.error('获取测试结果失败:', error);
    return NextResponse.json(
      { 
        success: false,
        error: '服务器内部错误' 
      },
      { status: 500 }
    );
  }
} 