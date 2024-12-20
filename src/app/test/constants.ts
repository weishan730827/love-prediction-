import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'personality',
    title: '性格相容性',
    description: '你们的性格特征是否互补?',
    options: [
      { id: 'p1', text: '非常互补,能很好理解对方', value: 100 },
      { id: 'p2', text: '基本互补,偶尔有分歧', value: 80 },
      { id: 'p3', text: '差异较大,但可以包容', value: 60 },
      { id: 'p4', text: '性格冲突比较多', value: 40 }
    ]
  },
  {
    id: 'lifestyle',
    title: '生活习惯',
    description: '你们的生活作息和习惯是否一致?',
    options: [
      { id: 'l1', text: '非常一致,生活节奏很配合', value: 100 },
      { id: 'l2', text: '基本一致,偶尔需要协调', value: 80 },
      { id: 'l3', text: '有一定差异,但可以调整', value: 60 },
      { id: 'l4', text: '差异较大,经常有矛盾', value: 40 }
    ]
  },
  {
    id: 'values',
    title: '价值观契合',
    description: '在重要的人生议题上,你们的观点是否一致?',
    options: [
      { id: 'v1', text: '高度一致,对未来有共同愿景', value: 100 },
      { id: 'v2', text: '基本一致,细节可以商议', value: 80 },
      { id: 'v3', text: '有一些分歧,但能相互尊重', value: 60 },
      { id: 'v4', text: '差异明显,难以达成共识', value: 40 }
    ]
  },
  {
    id: 'communication',
    title: '沟通方式',
    description: '你们平时是如何交流和处理分歧的?',
    options: [
      { id: 'c1', text: '沟通顺畅,能理性讨论问题', value: 100 },
      { id: 'c2', text: '基本顺畅,偶尔需要调整', value: 80 },
      { id: 'c3', text: '有时不畅,但能慢慢理解', value: 60 },
      { id: 'c4', text: '经常误解,难以沟通', value: 40 }
    ]
  },
  {
    id: 'future',
    title: '未来发展',
    description: '对于未来的规划,你们的想法如何?',
    options: [
      { id: 'f1', text: '目标一致,有共同规划', value: 100 },
      { id: 'f2', text: '大方向一致,细节待定', value: 80 },
      { id: 'f3', text: '部分不同,但可协调', value: 60 },
      { id: 'f4', text: '规划差异大,难以调和', value: 40 }
    ]
  }
]; 