// Olympics Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const olympicsQuestions: QuizQuestion[] = [
  {
    id: "olympics-sample-1",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where were the ancient Olympic Games held?",
    options: ["Athens", "Olympia", "Sparta", "Corinth"],
    correctAnswer: 1,
    explanation: "The ancient Olympics were held in Olympia, Greece."
  },
  {
    id: "olympics-sample-2",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How often are the Summer Olympics held?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    correctAnswer: 2,
    explanation: "The Summer Olympics occur every four years."
  },
  {
    id: "olympics-sample-3",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Michael Phelps is the most decorated Olympian of all time.",
    correctAnswer: 1,
    explanation: "True. Phelps has won 28 Olympic medals (23 gold)."
  },
  {
    id: "olympics-sample-4",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In which year were the first modern Olympic Games held?",
    options: ["1892", "1896", "1900", "1904"],
    correctAnswer: 1,
    explanation: "The first modern Olympics were held in Athens in 1896."
  },
  {
    id: "olympics-sample-5",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Women were first allowed to compete in the Olympics in 1900.",
    correctAnswer: 1,
    explanation: "True. Women first competed at the 1900 Paris Olympics."
  }
] satisfies QuizQuestion[];
