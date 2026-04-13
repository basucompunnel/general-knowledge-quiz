// Hollywood Classics Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const hollywoodClassicsQuestions: QuizQuestion[] = [
  {
    id: "hollywood-classics-sample-1",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who directed 'The Godfather'?",
    options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Quentin Tarantino"],
    correctAnswer: 1,
    explanation: "Francis Ford Coppola directed The Godfather in 1972."
  },
  {
    id: "hollywood-classics-sample-2",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which film won the most Oscars ever?",
    options: ["Titanic", "Ben-Hur", "Both A and B tied", "The Lord of the Rings: Return of the King"],
    correctAnswer: 2,
    explanation: "Ben-Hur (1959), Titanic (1997), and LOTR: Return of the King (2003) each won 11 Oscars."
  },
  {
    id: "hollywood-classics-sample-3",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Casablanca' was released during World War II.",
    correctAnswer: 1,
    explanation: "True. Casablanca was released in 1942."
  },
  {
    id: "hollywood-classics-sample-4",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actress starred in 'Breakfast at Tiffany's'?",
    options: ["Marilyn Monroe", "Audrey Hepburn", "Grace Kelly", "Elizabeth Taylor"],
    correctAnswer: 1,
    explanation: "Audrey Hepburn played Holly Golightly in 1961."
  },
  {
    id: "hollywood-classics-sample-5",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Citizen Kane' was Orson Welles' directorial debut.",
    correctAnswer: 1,
    explanation: "True. Welles co-wrote, directed, produced, and starred in Citizen Kane at age 25."
  }
] satisfies QuizQuestion[];
