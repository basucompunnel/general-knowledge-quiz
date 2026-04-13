// Famous Painters Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousPaintersQuestions: QuizQuestion[] = [
  {
    id: "famous-painters-sample-1",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
  },
  {
    id: "famous-painters-sample-2",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which artist cut off part of his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    correctAnswer: 1,
    explanation: "Vincent van Gogh cut off part of his ear in 1888."
  },
  {
    id: "famous-painters-sample-3",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Pablo Picasso co-founded the Cubist movement.",
    correctAnswer: 1,
    explanation: "True. Picasso and Georges Braque pioneered Cubism in the early 20th century."
  },
  {
    id: "famous-painters-sample-4",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who painted 'The Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Henri Matisse"],
    correctAnswer: 1,
    explanation: "Van Gogh painted The Starry Night in 1889 while in an asylum in Saint-Rémy."
  },
  {
    id: "famous-painters-sample-5",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Rembrandt's full name was Rembrandt Harmenszoon van Rijn.",
    correctAnswer: 1,
    explanation: "True. The Dutch master is commonly known just as Rembrandt."
  }
] satisfies QuizQuestion[];
