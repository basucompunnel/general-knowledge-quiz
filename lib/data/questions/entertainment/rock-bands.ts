// Rock Bands Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const rockBandsQuestions: QuizQuestion[] = [
  {
    id: "rock-bands-sample-1",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the lead singer of Queen?",
    options: ["David Bowie", "Freddie Mercury", "Mick Jagger", "Robert Plant"],
    correctAnswer: 1,
    explanation: "Freddie Mercury was Queen's iconic frontman until his death in 1991."
  },
  {
    id: "rock-bands-sample-2",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band released the album 'Abbey Road'?",
    options: ["The Rolling Stones", "Pink Floyd", "The Beatles", "Led Zeppelin"],
    correctAnswer: 2,
    explanation: "The Beatles released Abbey Road in 1969."
  },
  {
    id: "rock-bands-sample-3",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Led Zeppelin's 'Stairway to Heaven' is one of the longest rock songs ever played on radio.",
    correctAnswer: 1,
    explanation: "True. At over 8 minutes, it became a rock radio staple despite its length."
  },
  {
    id: "rock-bands-sample-4",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which band sang 'Hotel California'?",
    options: ["Fleetwood Mac", "The Eagles", "The Doors", "Lynyrd Skynyrd"],
    correctAnswer: 1,
    explanation: "The Eagles released 'Hotel California' in 1976."
  },
  {
    id: "rock-bands-sample-5",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Pink Floyd's 'The Dark Side of the Moon' spent over 900 weeks on the Billboard 200 chart.",
    correctAnswer: 1,
    explanation: "True. It spent 950 weeks on the chart, a record for many years."
  }
] satisfies QuizQuestion[];
