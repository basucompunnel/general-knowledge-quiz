// Insects Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const insectsQuestions: QuizQuestion[] = [
  {
    id: "insects-sample-1",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many legs do insects have?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1,
    explanation: "All insects have six legs, which distinguishes them from arachnids (8 legs)."
  },
  {
    id: "insects-sample-2",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which insect is known for making honey?",
    options: ["Wasp", "Hornet", "Bee", "Fly"],
    correctAnswer: 2,
    explanation: "Honeybees produce honey from flower nectar."
  },
  {
    id: "insects-sample-3",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Butterflies taste with their feet.",
    correctAnswer: 1,
    explanation: "True. Butterflies have chemoreceptors on their feet to taste plants."
  },
  {
    id: "insects-sample-4",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the lifespan of a mayfly?",
    options: ["A few hours to days", "A few weeks", "A few months", "A year"],
    correctAnswer: 0,
    explanation: "Adult mayflies live from a few hours to a few days."
  },
  {
    id: "insects-sample-5",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Ants can carry objects up to 50 times their own body weight.",
    correctAnswer: 1,
    explanation: "True. Ants are remarkably strong for their size and can carry heavy loads."
  }
] satisfies QuizQuestion[];
