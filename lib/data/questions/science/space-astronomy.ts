// Space & Astronomy Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const spaceAstronomyQuestions: QuizQuestion[] = [
  {
    id: "space-astronomy-sample-1",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    correctAnswer: 1,
    explanation: "Mercury is the closest planet to the Sun."
  },
  {
    id: "space-astronomy-sample-2",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many planets are in our solar system?",
    options: ["Seven", "Eight", "Nine", "Ten"],
    correctAnswer: 1,
    explanation: "There are eight planets in our solar system (Pluto was reclassified as a dwarf planet in 2006)."
  },
  {
    id: "space-astronomy-sample-3",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Jupiter is the largest planet in our solar system.",
    correctAnswer: 1,
    explanation: "True. Jupiter's mass is more than twice that of all other planets combined."
  },
  {
    id: "space-astronomy-sample-4",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of Earth's natural satellite?",
    options: ["Luna", "The Moon", "Both A and B", "Selene"],
    correctAnswer: 2,
    explanation: "Earth's moon is commonly called 'The Moon' or 'Luna' in Latin."
  },
  {
    id: "space-astronomy-sample-5",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Light from the Sun takes approximately 8 minutes to reach Earth.",
    correctAnswer: 1,
    explanation: "True. Light travels at 299,792 km/s and takes about 8 minutes 20 seconds to reach Earth."
  }
] satisfies QuizQuestion[];
