export interface Question {
  id: string;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}

export interface TestAnswers {
  [questionId: string]: string;
}

export interface TestSubmission {
  answers: TestAnswers;
}

export interface TestResponse {
  success: boolean;
  id?: string;
  score?: number;
  error?: string;
} 