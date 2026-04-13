// World Flags Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const worldFlagsQuestions: QuizQuestion[] = [
  {
    id: "world-flags-sample-1",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What symbol appears on the flag of Canada?",
    options: ["Maple leaf", "Beaver", "Moose", "Bear"],
    correctAnswer: 0,
    explanation: "Canada's flag features a red maple leaf in the center, adopted in 1965."
  },
  {
    id: "world-flags-sample-2",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has a flag with a yellow star on a red background?",
    options: ["Vietnam", "China", "Morocco", "Tunisia"],
    correctAnswer: 1,
    explanation: "China's flag is red with five golden stars representing the Communist Party and the people."
  },
  {
    id: "world-flags-sample-3",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The South African flag has six colors.",
    correctAnswer: 1,
    explanation: "True. South Africa's flag has black, gold, green, white, blue, and red."
  },
  {
    id: "world-flags-sample-4",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the cross pattern on the Norwegian flag?",
    options: ["Greek Cross", "Nordic Cross", "Celtic Cross", "Latin Cross"],
    correctAnswer: 1,
    explanation: "The Nordic Cross is characteristic of Scandinavian flags."
  },
  {
    id: "world-flags-sample-5",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Japanese flag's red circle is perfectly centered on the flag.",
    correctAnswer: 1,
    explanation: "True. The red circle (Hinomaru) is precisely centered on Japan's flag."
  }
] satisfies QuizQuestion[];
