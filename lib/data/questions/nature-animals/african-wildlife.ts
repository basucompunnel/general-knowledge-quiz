// African Wildlife Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const africanWildlifeQuestions: QuizQuestion[] = [
  {
    id: "african-wildlife-sample-1",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
    correctAnswer: 1,
    explanation: "The cheetah can reach speeds up to 70 mph (113 km/h)."
  },
  {
    id: "african-wildlife-sample-2",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest land animal?",
    options: ["Hippopotamus", "Rhinoceros", "Giraffe", "African Elephant"],
    correctAnswer: 3,
    explanation: "The African elephant can weigh up to 14,000 pounds."
  },
  {
    id: "african-wildlife-sample-3",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Lions are the only cats that live in groups called prides.",
    correctAnswer: 1,
    explanation: "True. Lions are unique among cats for their social structure."
  },
  {
    id: "african-wildlife-sample-4",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How tall can an adult giraffe grow?",
    options: ["Up to 12 feet", "Up to 15 feet", "Up to 18 feet", "Up to 20 feet"],
    correctAnswer: 2,
    explanation: "Giraffes can grow up to 18 feet tall, making them the tallest land animal."
  },
  {
    id: "african-wildlife-sample-5",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "A group of zebras is called a 'dazzle'.",
    correctAnswer: 1,
    explanation: "True. Zebras in a group are called a dazzle or a zeal."
  }
] satisfies QuizQuestion[];
