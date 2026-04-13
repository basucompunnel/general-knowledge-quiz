// Marine Biology Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const marineBiologyQuestions: QuizQuestion[] = [
  {
    id: "marine-biology-sample-1",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest animal in the ocean?",
    options: ["Great White Shark", "Blue Whale", "Giant Squid", "Orca"],
    correctAnswer: 1,
    explanation: "The blue whale is the largest animal ever known to have existed."
  },
  {
    id: "marine-biology-sample-2",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do coral reefs primarily consist of?",
    options: ["Plants", "Rocks", "Living organisms", "Sand"],
    correctAnswer: 2,
    explanation: "Coral reefs are built by tiny living organisms called coral polyps."
  },
  {
    id: "marine-biology-sample-3",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Dolphins are mammals, not fish.",
    correctAnswer: 1,
    explanation: "True. Dolphins are marine mammals that breathe air."
  },
  {
    id: "marine-biology-sample-4",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's oxygen is produced by ocean phytoplankton?",
    options: ["About 25%", "About 50%", "About 70%", "About 90%"],
    correctAnswer: 1,
    explanation: "Ocean phytoplankton produce approximately 50-80% of Earth's oxygen."
  },
  {
    id: "marine-biology-sample-5",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The Mariana Trench is the deepest part of the world's oceans.",
    correctAnswer: 1,
    explanation: "True. The Challenger Deep in the Mariana Trench is nearly 36,000 feet deep."
  }
] satisfies QuizQuestion[];
