// Smartphones Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const smartphonesQuestions: QuizQuestion[] = [
  {
    id: "smartphones-sample-1",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company introduced the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correctAnswer: 2,
    explanation: "Apple introduced the first iPhone in 2007."
  },
  {
    id: "smartphones-sample-2",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'OS' stand for in iOS and Android OS?",
    options: ["Operating System", "Online Service", "Open Source", "Official Software"],
    correctAnswer: 0,
    explanation: "OS stands for Operating System."
  },
  {
    id: "smartphones-sample-3",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Android was developed by Google from the start.",
    correctAnswer: 0,
    explanation: "False. Android was created by Android Inc., which Google acquired in 2005."
  },
  {
    id: "smartphones-sample-4",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2,
    explanation: "The first iPhone was released on June 29, 2007."
  },
  {
    id: "smartphones-sample-5",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first smartphone with a touchscreen was the iPhone.",
    correctAnswer: 0,
    explanation: "False. Devices like the IBM Simon (1994) and LG Prada (2006) had touchscreens before the iPhone."
  }
] satisfies QuizQuestion[];
