// Tennis Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const tennisQuestions: QuizQuestion[] = [
  {
    id: "tennis-sample-1",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many Grand Slam tournaments are there in tennis?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "The four Grand Slams are Australian Open, French Open, Wimbledon, and US Open."
  },
  {
    id: "tennis-sample-2",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a score of zero called in tennis?",
    options: ["Nil", "Zero", "Love", "Nought"],
    correctAnswer: 2,
    explanation: "A score of zero in tennis is called 'love'."
  },
  {
    id: "tennis-sample-3",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Wimbledon is played on grass courts.",
    correctAnswer: 1,
    explanation: "True. Wimbledon is the only Grand Slam played on grass."
  },
  {
    id: "tennis-sample-4",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who has won the most Grand Slam singles titles in men's tennis?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    correctAnswer: 2,
    explanation: "Novak Djokovic has won 24 Grand Slam singles titles as of 2023."
  },
  {
    id: "tennis-sample-5",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The longest tennis match in history lasted over 11 hours.",
    correctAnswer: 1,
    explanation: "True. Isner vs. Mahut at Wimbledon 2010 lasted 11 hours and 5 minutes."
  }
] satisfies QuizQuestion[];
