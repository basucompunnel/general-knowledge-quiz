// Famous Inventors Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousInventorsQuestions: QuizQuestion[] = [
  {
    id: "famous-inventors-sample-1",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the light bulb?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
    correctAnswer: 1,
    explanation: "Thomas Edison developed the first practical incandescent light bulb."
  },
  {
    id: "famous-inventors-sample-2",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is credited with inventing the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Samuel Morse", "Guglielmo Marconi"],
    correctAnswer: 1,
    explanation: "Alexander Graham Bell patented the telephone in 1876."
  },
  {
    id: "famous-inventors-sample-3",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The Wright brothers invented the airplane.",
    correctAnswer: 1,
    explanation: "True. Orville and Wilbur Wright achieved the first powered flight in 1903."
  },
  {
    id: "famous-inventors-sample-4",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the printing press?",
    options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "William Caxton"],
    correctAnswer: 0,
    explanation: "Johannes Gutenberg invented the movable-type printing press around 1440."
  },
  {
    id: "famous-inventors-sample-5",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Nikola Tesla invented the alternating current (AC) electrical system.",
    correctAnswer: 1,
    explanation: "True. Tesla developed the AC electrical system, which became the standard for power distribution."
  }
] satisfies QuizQuestion[];
