// Football (Soccer) Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const footballSoccerQuestions: QuizQuestion[] = [
  {
    id: "football-soccer-sample-1",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    correctAnswer: 2,
    explanation: "Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002)."
  },
  {
    id: "football-soccer-sample-2",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many players are on a soccer team during a match?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "Each team has 11 players on the field during a match."
  },
  {
    id: "football-soccer-sample-3",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Pelé scored over 1,000 career goals.",
    correctAnswer: 1,
    explanation: "True. Pelé scored 1,283 goals in his career."
  },
  {
    id: "football-soccer-sample-4",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which player has won the most Ballon d'Or awards?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
    correctAnswer: 1,
    explanation: "Lionel Messi has won 8 Ballon d'Or awards as of 2023."
  },
  {
    id: "football-soccer-sample-5",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The fastest goal in World Cup history was scored in 11 seconds.",
    correctAnswer: 1,
    explanation: "True. Hakan Şükür scored for Turkey after 11 seconds in 2002."
  }
] satisfies QuizQuestion[];
