// Famous Landmarks Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousLandmarksQuestions: QuizQuestion[] = [
  {
    id: "famous-landmarks-sample-1",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country is home to the Statue of Liberty?",
    options: ["France", "Canada", "United States", "Mexico"],
    correctAnswer: 2,
    explanation: "The Statue of Liberty is located in New York Harbor."
  },
  {
    id: "famous-landmarks-sample-2",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where is the Eiffel Tower located?",
    options: ["London", "Paris", "Rome", "Berlin"],
    correctAnswer: 1,
    explanation: "The Eiffel Tower is in Paris, France."
  },
  {
    id: "famous-landmarks-sample-3",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Taj Mahal is located in India.",
    correctAnswer: 1,
    explanation: "True. The Taj Mahal is in Agra, India."
  },
  {
    id: "famous-landmarks-sample-4",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In what year was the Statue of Liberty dedicated?",
    options: ["1876", "1886", "1896", "1906"],
    correctAnswer: 1,
    explanation: "The Statue of Liberty was dedicated on October 28, 1886."
  },
  {
    id: "famous-landmarks-sample-5",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",
    correctAnswer: 1,
    explanation: "True. It held the record until Lincoln Cathedral was completed in 1311."
  }
] satisfies QuizQuestion[];
