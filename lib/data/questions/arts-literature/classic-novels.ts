// Classic Novels Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const classicNovelsQuestions: QuizQuestion[] = [
  {
    id: "classic-novels-sample-1",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "George Eliot"],
    correctAnswer: 1,
    explanation: "Jane Austen published Pride and Prejudice in 1813."
  },
  {
    id: "classic-novels-sample-2",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which novel begins with 'Call me Ishmael'?",
    options: ["Treasure Island", "Moby-Dick", "Robinson Crusoe", "The Old Man and the Sea"],
    correctAnswer: 1,
    explanation: "Moby-Dick by Herman Melville opens with this famous line."
  },
  {
    id: "classic-novels-sample-3",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "George Orwell wrote '1984' as a dystopian novel.",
    correctAnswer: 1,
    explanation: "True. 1984 depicts a totalitarian future society."
  },
  {
    id: "classic-novels-sample-4",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Great Gatsby'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
    correctAnswer: 1,
    explanation: "F. Scott Fitzgerald published The Great Gatsby in 1925."
  },
  {
    id: "classic-novels-sample-5",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Mary Shelley was only 18 when she began writing 'Frankenstein'.",
    correctAnswer: 1,
    explanation: "True. She started writing Frankenstein in 1816 at age 18."
  }
] satisfies QuizQuestion[];
