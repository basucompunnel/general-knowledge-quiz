// Pop Music Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const popMusicQuestions: QuizQuestion[] = [
  {
    id: "pop-music-sample-1",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
    correctAnswer: 1,
    explanation: "Michael Jackson earned this title for his massive influence on pop music."
  },
  {
    id: "pop-music-sample-2",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band sang 'Yesterday'?",
    options: ["The Rolling Stones", "The Beatles", "The Who", "Led Zeppelin"],
    correctAnswer: 1,
    explanation: "The Beatles released 'Yesterday' in 1965."
  },
  {
    id: "pop-music-sample-3",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Madonna is often called the 'Queen of Pop'.",
    correctAnswer: 1,
    explanation: "True. Madonna has been a dominant force in pop music since the 1980s."
  },
  {
    id: "pop-music-sample-4",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist has the most Grammy Awards?",
    options: ["Beyoncé", "Quincy Jones", "Georg Solti", "All tied"],
    correctAnswer: 0,
    explanation: "Beyoncé holds the record with 32 Grammy Awards as of 2023."
  },
  {
    id: "pop-music-sample-5",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Thriller' by Michael Jackson is the best-selling album of all time.",
    correctAnswer: 1,
    explanation: "True. Thriller has sold over 66 million copies worldwide."
  }
] satisfies QuizQuestion[];
