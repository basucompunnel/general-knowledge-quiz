// Basketball Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const basketballQuestions: QuizQuestion[] = [
  {
    id: "basketball-sample-1",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points is a free throw worth in basketball?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "A free throw is worth 1 point."
  },
  {
    id: "basketball-sample-2",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which NBA team does LeBron James currently play for?",
    options: ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: 2,
    explanation: "As of 2026, LeBron James plays for the Los Angeles Lakers."
  },
  {
    id: "basketball-sample-3",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Michael Jordan won 6 NBA championships with the Chicago Bulls.",
    correctAnswer: 1,
    explanation: "True. Jordan won championships in 1991, 1992, 1993, 1996, 1997, and 1998."
  },
  {
    id: "basketball-sample-4",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many players from each team are on the court during play?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Each team has 5 players on the court at a time."
  },
  {
    id: "basketball-sample-5",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Wilt Chamberlain scored 100 points in a single NBA game.",
    correctAnswer: 1,
    explanation: "True. Chamberlain scored 100 points for the Philadelphia Warriors in 1962."
  }
] satisfies QuizQuestion[];
