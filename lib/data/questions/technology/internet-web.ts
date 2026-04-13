// Internet & Web Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const internetWebQuestions: QuizQuestion[] = [
  {
    id: "internet-web-sample-1",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correctAnswer: 1,
    explanation: "Tim Berners-Lee invented the World Wide Web in 1989."
  },
  {
    id: "internet-web-sample-2",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'HTTP' stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Program", "Home Tool Transfer Protocol", "Hyper Transfer Text Protocol"],
    correctAnswer: 0,
    explanation: "HTTP is the protocol used for transferring web pages."
  },
  {
    id: "internet-web-sample-3",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The first website ever created is still online today.",
    correctAnswer: 1,
    explanation: "True. The first website, info.cern.ch, is still accessible."
  },
  {
    id: "internet-web-sample-4",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was Google founded?",
    options: ["1996", "1998", "2000", "2002"],
    correctAnswer: 1,
    explanation: "Google was founded by Larry Page and Sergey Brin in 1998."
  },
  {
    id: "internet-web-sample-5",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The '@' symbol in email addresses was chosen by Ray Tomlinson.",
    correctAnswer: 1,
    explanation: "True. Tomlinson chose '@' for the first email system in 1971."
  }
] satisfies QuizQuestion[];
