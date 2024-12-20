export interface Dimension {
  id: string;
  label: string;
  score: number;
  description: string;
}

export interface TestResult {
  overallScore: number;
  dimensions: Dimension[];
  suggestions: any[];
  createdAt: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'; 