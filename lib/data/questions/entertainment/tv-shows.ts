// TV Shows Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const tvShowsQuestions: QuizQuestion[] = [
  {
    id: "tv-shows-sample-1",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which TV show features the characters Ross, Rachel, and Monica?",
    options: ["Seinfeld", "Friends", "How I Met Your Mother", "The Big Bang Theory"],
    correctAnswer: 1,
    explanation: "Friends ran from 1994 to 2004."
  },
  {
    id: "tv-shows-sample-2",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of Walter White's alias in 'Breaking Bad'?",
    options: ["Heisenberg", "Scarface", "Cap'n Cook", "Tuco"],
    correctAnswer: 0,
    explanation: "Walter White uses the alias Heisenberg in his meth operation."
  },
  {
    id: "tv-shows-sample-3",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Game of Thrones' is based on books by George R.R. Martin.",
    correctAnswer: 1,
    explanation: "True. The series is based on 'A Song of Ice and Fire' book series."
  },
  {
    id: "tv-shows-sample-4",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which show features the fictional Dunder Mifflin Paper Company?",
    options: ["Parks and Recreation", "The Office", "30 Rock", "Arrested Development"],
    correctAnswer: 1,
    explanation: "The Office is set at Dunder Mifflin in Scranton, Pennsylvania."
  },
  {
    id: "tv-shows-sample-5",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'The Simpsons' has aired for over 30 seasons.",
    correctAnswer: 1,
    explanation: "True. The Simpsons premiered in 1989 and has over 35 seasons."
  }
] satisfies QuizQuestion[];
