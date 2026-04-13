// Poetry Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const poetryQuestions: QuizQuestion[] = [
  {
    id: "poetry-sample-1",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'The Road Not Taken'?",
    options: ["Robert Frost", "Emily Dickinson", "Walt Whitman", "Edgar Allan Poe"],
    correctAnswer: 0,
    explanation: "Robert Frost wrote this famous poem published in 1916."
  },
  {
    id: "poetry-sample-2",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many lines does a sonnet typically have?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 2,
    explanation: "A sonnet traditionally contains 14 lines."
  },
  {
    id: "poetry-sample-3",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Haiku is a Japanese form of poetry with 17 syllables.",
    correctAnswer: 1,
    explanation: "True. Haiku follows a 5-7-5 syllable pattern across three lines."
  },
  {
    id: "poetry-sample-4",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Raven'?",
    options: ["Edgar Allan Poe", "Lord Byron", "John Keats", "Percy Shelley"],
    correctAnswer: 0,
    explanation: "Edgar Allan Poe published The Raven in 1845."
  },
  {
    id: "poetry-sample-5",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Emily Dickinson published only a dozen poems during her lifetime.",
    correctAnswer: 1,
    explanation: "True. Most of her nearly 1,800 poems were published posthumously."
  }
] satisfies QuizQuestion[];
