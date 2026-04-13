// Mountains & Rivers Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const mountainsRiversQuestions: QuizQuestion[] = [
  {
    id: "mountains-rivers-sample-1",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the highest mountain in the world?",
    options: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount McKinley"],
    correctAnswer: 2,
    explanation: "Mount Everest stands at 29,032 feet (8,849 meters) above sea level."
  },
  {
    id: "mountains-rivers-sample-2",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the longest river in the world?",
    options: ["The Amazon", "The Nile", "The Yangtze", "The Mississippi"],
    correctAnswer: 1,
    explanation: "The Nile River in Africa is approximately 4,130 miles long."
  },
  {
    id: "mountains-rivers-sample-3",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Andes is the longest mountain range in the world.",
    correctAnswer: 1,
    explanation: "True. The Andes extends for approximately 4,000 miles along South America's western coast."
  },
  {
    id: "mountains-rivers-sample-4",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the second-highest mountain in the world?",
    options: ["Kangchenjunga", "Makalu", "K2", "Lhotse"],
    correctAnswer: 2,
    explanation: "K2 in the Karakoram Range is 28,251 feet tall."
  },
  {
    id: "mountains-rivers-sample-5",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Mauna Kea in Hawaii is the tallest mountain when measured from base to peak.",
    correctAnswer: 1,
    explanation: "True. Mauna Kea measures approximately 33,500 feet from ocean floor to summit."
  }
] satisfies QuizQuestion[];
