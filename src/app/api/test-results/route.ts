import { NextResponse } from 'next/server';
import { questions } from '@/app/test/constants';
import type { TestSubmission } from '@/app/test/types';
import type { TestResult, Suggestion } from '@/app/test-analysis/types';

function calculateResults(answers: TestSubmission['answers']): TestResult {
  // 计算每个维度的得分
  const dimensions = questions.map(question => {
    const selectedOptionId = answers[question.id];
    const selectedOption = question.options.find(opt => opt.id === selectedOptionId);
    const score = selectedOption?.value ?? 60; // 默认给60分

    return {
      id: question.id,
      label: question.title,
      score,
      description: getScoreDescription(question.id, score)
    };
  });

  // 计算总分
  const overallScore = Math.round(
    dimensions.reduce((sum, dim) => sum + dim.score, 0) / dimensions.length
  );

  // 生成建议
  const suggestions = generateSuggestions(dimensions);

  return {
    overallScore,
    dimensions,
    suggestions,
    createdAt: new Date().toISOString()
  };
}

function getScoreDescription(questionId: string, score: number): string {
  const descriptions: Record<string, Record<string, string>> = {
    personality: {
      high: '你们的性格特征高度互补，能够很好地理解和包容对方。',
      medium: '你们的性格有一定差异，但能够相互理解和适应。',
      low: '你们的性格差异较大，需要更多的包容和理解。'
    },
    lifestyle: {
      high: '你们的生活习惯高度一致，这为共同生活奠定了良好基础。',
      medium: '你们的生活习惯基本相似，偶尔需要相互调整。',
      low: '你们的生活习惯存在较大差异，需要更多沟通和适应。'
    },
    values: {
      high: '你们的价值观高度契合，对重要问题有共同的认识。',
      medium: '你们的核心价值观基本一致，在细节上有所差异。',
      low: '你们在一些重要问题上的看法存在差异，需要多加沟通。'
    },
    communication: {
      high: '你们的沟通非常顺畅，能够有效地表达和理解彼此。',
      medium: '你们的沟通基本顺畅，偶尔会有一些误解。',
      low: '你们在沟通方面存在一些障碍，需要改善沟通方式。'
    },
    future: {
      high: '你们对未来有共同的期望和规划，这是很好的基础。',
      medium: '你们对未来的主要规划一致，细节可以继续商议。',
      low: '你们对未来的规划存在一些分歧，需要进一步沟通。'
    }
  };

  const level = score >= 85 ? 'high' : score >= 70 ? 'medium' : 'low';
  return descriptions[questionId]?.[level] ?? '需要进一步了解和沟通。';
}

function generateSuggestions(dimensions: TestResult['dimensions']): Suggestion[] {
  const suggestions: Suggestion[] = [];
  let priority = 1;

  // 找出最高分维度作为优势
  const highestDim = [...dimensions].sort((a, b) => b.score - a.score)[0];
  suggestions.push({
    id: `s${priority}`,
    type: 'strength' as const,
    title: '核心优势',
    content: `你们在${highestDim.label}方面表现出色，这为关系的发展奠定了良好基础。`,
    priority: priority++,
    icon: '💪'
  });

  // 找出最低分维度作为需要改进的地方
  const lowestDim = [...dimensions].sort((a, b) => a.score - b.score)[0];
  if (lowestDim.score < 80) {
    suggestions.push({
      id: `s${priority}`,
      type: 'improvement' as const,
      title: '需要关注',
      content: `在${lowestDim.label}方面还有提升空间，建议多加沟通和理解。`,
      priority: priority++,
      icon: '🎯'
    });
  }

  // 添加行动建议
  suggestions.push({
    id: `s${priority}`,
    type: 'action' as const,
    title: '行动建议',
    content: '1. 保持开放和诚恳的沟通\n2. 共同制定生活计划\n3. 培养共同兴趣爱好\n4. 定期进行感情状态回顾',
    priority: priority++,
    icon: '✨'
  });

  // 添加长期发展建议
  suggestions.push({
    id: `s${priority}`,
    type: 'longTerm' as const,
    title: '长期发展',
    content: '建议进一步深入讨论关于事业发展、家庭规划等重要话题，确保双方期望能够很好地融合。',
    priority: priority++,
    icon: '🌟'
  });

  return suggestions;
}

export async function POST(request: Request) {
  try {
    const body: TestSubmission = await request.json();

    if (!body.answers || Object.keys(body.answers).length !== questions.length) {
      return NextResponse.json(
        { success: false, error: '请回答所有问题' },
        { status: 400 }
      );
    }

    // 计算结果
    const result = calculateResults(body.answers);

    // 保存结果
    const id = Math.random().toString(36).substring(2, 15);
    // TODO: 将结果保存到数据库

    return NextResponse.json({
      success: true,
      id,
      score: result.overallScore
    });

  } catch (error) {
    console.error('处理测试提交失败:', error);
    return NextResponse.json(
      { success: false, error: '服务器内部错误' },
      { status: 500 }
    );
  }
} 