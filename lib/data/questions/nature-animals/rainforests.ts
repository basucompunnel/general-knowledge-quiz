// Rainforests Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const rainforestsQuestions: QuizQuestion[] = [
  {
    id: "rainforests-sample-1",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest rainforest in the world?",
    options: ["Congo Rainforest", "Amazon Rainforest", "Southeast Asian Rainforest", "Australian Rainforest"],
    correctAnswer: 1,
    explanation: "The Amazon Rainforest spans over 2.1 million square miles."
  },
  {
    id: "rainforests-sample-2",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which continent has no rainforests?",
    options: ["Europe", "Antarctica", "Australia", "Asia"],
    correctAnswer: 1,
    explanation: "Antarctica is too cold and dry to support rainforest ecosystems."
  },
  {
    id: "rainforests-sample-3",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Rainforests produce about 20% of Earth's oxygen.",
    correctAnswer: 1,
    explanation: "True. Tropical rainforests are often called the 'lungs of the Earth'."
  },
  {
    id: "rainforests-sample-4",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of all species on Earth live in rainforests?",
    options: ["About 25%", "About 50%", "About 75%", "About 90%"],
    correctAnswer: 1,
    explanation: "Rainforests contain approximately 50% of all terrestrial species."
  },
  {
    id: "rainforests-sample-5",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Amazon Rainforest spans nine countries.",
    correctAnswer: 1,
    explanation: "True. The Amazon covers parts of Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana."
  }
] satisfies QuizQuestion[];
