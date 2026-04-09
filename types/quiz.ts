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

export interface QuizQuestion {
  id: string;
  categoryId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: DifficultyLevel;
}
