// Mythology Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const mythologyQuestions: QuizQuestion[] = [
  {
    id: "mythology-sample-1",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the king of the Greek gods?",
    options: ["Poseidon", "Hades", "Zeus", "Apollo"],
    correctAnswer: 2,
    explanation: "Zeus was the ruler of Mount Olympus and king of all gods."
  },
  {
    id: "mythology-sample-2",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was Thor's hammer called?",
    options: ["Excalibur", "Mjolnir", "Gungnir", "Gram"],
    correctAnswer: 1,
    explanation: "Mjolnir was Thor's legendary hammer in Norse mythology."
  },
  {
    id: "mythology-sample-3",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Athena was the Greek goddess of wisdom.",
    correctAnswer: 1,
    explanation: "True. Athena was also associated with warfare and crafts."
  },
  {
    id: "mythology-sample-4",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who was forced to hold up the sky in Greek mythology?",
    options: ["Hercules", "Atlas", "Prometheus", "Sisyphus"],
    correctAnswer: 1,
    explanation: "Atlas was condemned to hold up the celestial heavens for eternity."
  },
  {
    id: "mythology-sample-5",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "In Norse mythology, Ragnarök is the prophesied end of the world.",
    correctAnswer: 1,
    explanation: "True. Ragnarök describes a series of events leading to the world's destruction and rebirth."
  }
] satisfies QuizQuestion[];
