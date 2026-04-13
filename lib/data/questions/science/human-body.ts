// Human Body Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const humanBodyQuestions: QuizQuestion[] = [
  {
    id: "human-body-sample-1",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    explanation: "An adult human has 206 bones."
  },
  {
    id: "human-body-sample-2",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswer: 2,
    explanation: "The skin is the largest organ, covering the entire body."
  },
  {
    id: "human-body-sample-3",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The human brain uses approximately 20% of the body's energy.",
    correctAnswer: 1,
    explanation: "True. Despite being only 2% of body weight, the brain uses about 20% of energy."
  },
  {
    id: "human-body-sample-4",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the smallest bone in the human body?",
    options: ["Stirrup (stapes)", "Anvil (incus)", "Hammer (malleus)", "Hyoid"],
    correctAnswer: 0,
    explanation: "The stapes in the middle ear is the smallest bone, about 3mm long."
  },
  {
    id: "human-body-sample-5",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The human stomach completely replaces its lining every 3-4 days.",
    correctAnswer: 1,
    explanation: "True. The stomach lining regenerates rapidly to protect against acid damage."
  }
] satisfies QuizQuestion[];
