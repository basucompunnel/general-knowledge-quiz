// Continents & Oceans Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const continentsOceansQuestions: QuizQuestion[] = [
  {
    id: "continents-oceans-sample-1",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many continents are there?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2,
    explanation: "Most regions recognize seven continents."
  },
  {
    id: "continents-oceans-sample-2",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the largest ocean?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Pacific Ocean is the largest ocean on Earth."
  },
  {
    id: "continents-oceans-sample-3",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Antarctica is a desert.",
    correctAnswer: 1,
    explanation: "True. Antarctica is the world's largest desert due to low precipitation."
  },
  {
    id: "continents-oceans-sample-4",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["Approximately 60%", "Approximately 71%", "Approximately 80%", "Approximately 50%"],
    correctAnswer: 1,
    explanation: "Oceans cover approximately 71% of Earth's surface."
  },
  {
    id: "continents-oceans-sample-5",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Southern Ocean was officially recognized as the fifth ocean in 2000.",
    correctAnswer: 1,
    explanation: "True. The IHO recognized the Southern Ocean as distinct in 2000."
  }
] satisfies QuizQuestion[];
