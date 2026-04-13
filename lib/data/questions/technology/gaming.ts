// Gaming Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const gamingQuestions: QuizQuestion[] = [
  {
    id: "gaming-sample-1",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the PlayStation?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correctAnswer: 2,
    explanation: "Sony released the first PlayStation in 1994."
  },
  {
    id: "gaming-sample-2",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is Mario's profession in the Super Mario games?",
    options: ["Chef", "Plumber", "Carpenter", "Doctor"],
    correctAnswer: 1,
    explanation: "Mario is a plumber by profession."
  },
  {
    id: "gaming-sample-3",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Minecraft is the best-selling video game of all time.",
    correctAnswer: 1,
    explanation: "True. Minecraft has sold over 300 million copies worldwide."
  },
  {
    id: "gaming-sample-4",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was the Nintendo Entertainment System (NES) released in North America?",
    options: ["1983", "1985", "1987", "1989"],
    correctAnswer: 1,
    explanation: "The NES was released in North America in 1985."
  },
  {
    id: "gaming-sample-5",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "'Pac-Man' was originally called 'Puck Man' in Japan.",
    correctAnswer: 1,
    explanation: "True. The name was changed for the international release to avoid vandalism."
  }
] satisfies QuizQuestion[];
