// Athletics Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const athleticsQuestions: QuizQuestion[] = [
  {
    id: "athletics-sample-1",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the standard distance of a marathon?",
    options: ["26.2 miles", "28.2 miles", "24.2 miles", "30 miles"],
    correctAnswer: 0,
    explanation: "A marathon is 26.2 miles or 42.195 kilometers."
  },
  {
    id: "athletics-sample-2",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the fastest man in the world?",
    options: ["Carl Lewis", "Usain Bolt", "Jesse Owens", "Michael Johnson"],
    correctAnswer: 1,
    explanation: "Usain Bolt holds the 100m and 200m world records."
  },
  {
    id: "athletics-sample-3",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "A decathlon consists of 10 different track and field events.",
    correctAnswer: 1,
    explanation: "True. The decathlon includes 10 events over two days."
  },
  {
    id: "athletics-sample-4",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Usain Bolt's 100m world record time?",
    options: ["9.58 seconds", "9.69 seconds", "9.72 seconds", "9.79 seconds"],
    correctAnswer: 0,
    explanation: "Bolt set the record of 9.58 seconds in Berlin in 2009."
  },
  {
    id: "athletics-sample-5",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The pole vault world record is over 6 meters.",
    correctAnswer: 1,
    explanation: "True. Armand Duplantis set the record at 6.24m in 2024."
  }
] satisfies QuizQuestion[];
