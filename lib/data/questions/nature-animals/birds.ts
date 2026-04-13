// Birds Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const birdsQuestions: QuizQuestion[] = [
  {
    id: "birds-sample-1",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird is the fastest in flight?",
    options: ["Eagle", "Peregrine Falcon", "Swift", "Albatross"],
    correctAnswer: 1,
    explanation: "The peregrine falcon can dive at speeds over 240 mph."
  },
  {
    id: "birds-sample-2",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird cannot fly?",
    options: ["Penguin", "Duck", "Swan", "Goose"],
    correctAnswer: 0,
    explanation: "Penguins are flightless birds adapted for swimming."
  },
  {
    id: "birds-sample-3",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Owls can rotate their heads 360 degrees.",
    correctAnswer: 0,
    explanation: "False. Owls can only rotate their heads about 270 degrees."
  },
  {
    id: "birds-sample-4",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the largest species of bird?",
    options: ["Albatross", "Condor", "Ostrich", "Emu"],
    correctAnswer: 2,
    explanation: "The ostrich is the largest bird, standing up to 9 feet tall."
  },
  {
    id: "birds-sample-5",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Hummingbirds can fly backwards.",
    correctAnswer: 1,
    explanation: "True. Hummingbirds are the only birds that can fly backwards."
  }
] satisfies QuizQuestion[];
