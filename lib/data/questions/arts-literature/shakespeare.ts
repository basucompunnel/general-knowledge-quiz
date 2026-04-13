// Shakespeare Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const shakespeareQuestions: QuizQuestion[] = [
  {
    id: "shakespeare-sample-1",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    explanation: "William Shakespeare wrote Romeo and Juliet around 1594-1596."
  },
  {
    id: "shakespeare-sample-2",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which play does the line 'To be or not to be' appear?",
    options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
    correctAnswer: 1,
    explanation: "This famous soliloquy is from Hamlet."
  },
  {
    id: "shakespeare-sample-3",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Shakespeare wrote both plays and sonnets.",
    correctAnswer: 1,
    explanation: "True. Shakespeare wrote 37 plays and 154 sonnets."
  },
  {
    id: "shakespeare-sample-4",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Shakespeare play features the characters Oberon and Titania?",
    options: ["The Tempest", "A Midsummer Night's Dream", "As You Like It", "Twelfth Night"],
    correctAnswer: 1,
    explanation: "Oberon and Titania are the fairy king and queen in A Midsummer Night's Dream."
  },
  {
    id: "shakespeare-sample-5",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Shakespeare invented over 1,700 words that are still used in English today.",
    correctAnswer: 1,
    explanation: "True. Shakespeare coined many words including 'assassination' and 'bedroom'."
  }
] satisfies QuizQuestion[];
