// Physics & Forces Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const physicsForcesQuestions: QuizQuestion[] = [
  {
    id: "physics-forces-sample-1",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the force that pulls objects toward Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Inertia"],
    correctAnswer: 1,
    explanation: "Gravity is the force that attracts objects toward the center of Earth."
  },
  {
    id: "physics-forces-sample-2",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
    correctAnswer: 0,
    explanation: "Light travels at approximately 299,792 km/s (about 300,000 km/s) in a vacuum."
  },
  {
    id: "physics-forces-sample-3",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Newton's First Law states that an object in motion stays in motion unless acted upon by an external force.",
    correctAnswer: 1,
    explanation: "True. This is the law of inertia."
  },
  {
    id: "physics-forces-sample-4",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The Newton (N) is the SI unit of force."
  },
  {
    id: "physics-forces-sample-5",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Einstein's E=mc² shows that mass and energy are interchangeable.",
    correctAnswer: 1,
    explanation: "True. This equation demonstrates mass-energy equivalence."
  }
] satisfies QuizQuestion[];
