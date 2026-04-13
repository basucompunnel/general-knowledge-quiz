// Endangered Species Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const endangeredSpeciesQuestions: QuizQuestion[] = [
  {
    id: "endangered-species-sample-1",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which animal is critically endangered and native to China?",
    options: ["Tiger", "Giant Panda", "Elephant", "Gorilla"],
    correctAnswer: 1,
    explanation: "The giant panda is an iconic endangered species from China."
  },
  {
    id: "endangered-species-sample-2",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the main threat to endangered species?",
    options: ["Natural disasters", "Habitat loss", "Old age", "Migration"],
    correctAnswer: 1,
    explanation: "Habitat loss is the primary threat to most endangered species."
  },
  {
    id: "endangered-species-sample-3",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "There are only about 3,900 tigers left in the wild.",
    correctAnswer: 1,
    explanation: "True. Tiger populations have declined dramatically due to poaching and habitat loss."
  },
  {
    id: "endangered-species-sample-4",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which marine animal is critically endangered due to plastic pollution?",
    options: ["Great White Shark", "Blue Whale", "Sea Turtle", "Dolphin"],
    correctAnswer: 2,
    explanation: "Sea turtles are particularly vulnerable to plastic pollution in oceans."
  },
  {
    id: "endangered-species-sample-5",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Javan rhino has fewer than 100 individuals left in the wild.",
    correctAnswer: 1,
    explanation: "True. The Javan rhino is one of the rarest large mammals with around 70 individuals."
  }
] satisfies QuizQuestion[];
