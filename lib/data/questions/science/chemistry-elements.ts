// Chemistry & Elements Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const chemistryElementsQuestions: QuizQuestion[] = [
  {
    id: "chemistry-elements-sample-1",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
    explanation: "Water's chemical formula is H2O - two hydrogen atoms and one oxygen atom."
  },
  {
    id: "chemistry-elements-sample-2",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: "chemistry-elements-sample-3",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Gold's chemical symbol is Au.",
    correctAnswer: 1,
    explanation: "True. Au comes from the Latin word 'aurum' meaning gold."
  },
  {
    id: "chemistry-elements-sample-4",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Carbon has 6 protons, giving it an atomic number of 6."
  },
  {
    id: "chemistry-elements-sample-5",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Diamonds and graphite are both forms of carbon.",
    correctAnswer: 1,
    explanation: "True. They are allotropes of carbon with different molecular structures."
  }
] satisfies QuizQuestion[];
