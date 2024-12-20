export interface TestResult {
  overallScore: number;
  dimensions: Dimension[];
  suggestions: Suggestion[];
  createdAt: string;
}

export interface Dimension {
  id: string;
  label: string;
  score: number;
  description: string;
}

export interface Suggestion {
  id: string;
  type: 'strength' | 'improvement' | 'action' | 'longTerm';
  title: string;
  content: string;
  priority: number;
  icon: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'; 