// Celebrities Questions
// Current: 5 questions (Sample topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const celebritiesQuestions: QuizQuestion[] = [
  {
    id: "celebrities-sample-1",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actress played Hermione in the Harry Potter films?",
    options: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emily Blunt"],
    correctAnswer: 0,
    explanation: "Emma Watson portrayed Hermione Granger throughout the series."
  },
  {
    id: "celebrities-sample-2",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the highest-paid actor of all time?",
    options: ["Tom Cruise", "Dwayne Johnson", "Robert Downey Jr.", "Samuel L. Jackson"],
    correctAnswer: 1,
    explanation: "Dwayne 'The Rock' Johnson has been among the highest-paid actors in recent years."
  },
  {
    id: "celebrities-sample-3",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Meryl Streep has more Oscar nominations than any other actor.",
    correctAnswer: 1,
    explanation: "True. Streep has received 21 Academy Award nominations."
  },
  {
    id: "celebrities-sample-4",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which celebrity couple is known as 'Brangelina'?",
    options: ["Brad Pitt and Jennifer Aniston", "Brad Pitt and Angelina Jolie", "Bradley Cooper and Angelina Jolie", "Brandon Lee and Angela Bassett"],
    correctAnswer: 1,
    explanation: "Brad Pitt and Angelina Jolie were dubbed 'Brangelina' by the media."
  },
  {
    id: "celebrities-sample-5",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Tom Hanks has won back-to-back Best Actor Oscars.",
    correctAnswer: 1,
    explanation: "True. Hanks won for 'Philadelphia' (1993) and 'Forrest Gump' (1994)."
  }
] satisfies QuizQuestion[];
