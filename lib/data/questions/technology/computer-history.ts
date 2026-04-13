// Computer History Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const computerHistoryQuestions: QuizQuestion[] = [
  {
    id: "computer-history-sample-1",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is considered the father of computer science?",
    options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Mark Zuckerberg"],
    correctAnswer: 2,
    explanation: "Alan Turing is widely regarded as the father of computer science and AI."
  },
  {
    id: "computer-history-sample-2",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the first personal computer?",
    options: ["IBM", "Apple", "Microsoft", "Commodore"],
    correctAnswer: 1,
    explanation: "Apple released the Apple I in 1976, one of the first personal computers."
  },
  {
    id: "computer-history-sample-3",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "ENIAC was one of the first electronic general-purpose computers.",
    correctAnswer: 1,
    explanation: "True. ENIAC was completed in 1945 and weighed about 30 tons."
  },
  {
    id: "computer-history-sample-4",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who co-founded Apple Computer with Steve Jobs?",
    options: ["Bill Gates", "Steve Wozniak", "Paul Allen", "Larry Page"],
    correctAnswer: 1,
    explanation: "Steve Wozniak and Steve Jobs founded Apple in 1976."
  },
  {
    id: "computer-history-sample-5",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first computer mouse was made of wood.",
    correctAnswer: 1,
    explanation: "True. Douglas Engelbart invented the first mouse in 1964, which had a wooden shell."
  }
] satisfies QuizQuestion[];
