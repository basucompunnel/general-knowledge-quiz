export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color?: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  icon: string;
  color?: string;
}

export type DifficultyLevel = "easy" | "medium" | "hard";

export type QuestionType = "multiple-choice" | "true-false";

export interface QuizQuestion {
  id: string;
  topicId: string;
  categoryId: string;
  question: string;
  type: QuestionType;
  options?: string[]; // Required for multiple-choice, not used for true-false
  correctAnswer: number; // For MC: index (0-3), For T/F: 0=false, 1=true
  difficulty: DifficultyLevel;
  explanation?: string; // Optional explanation for educational value
}
