// TV Shows Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const tvShowsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tv-shows-easy-1",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which TV show features the characters Ross, Rachel, and Monica?",
    options: ["Seinfeld", "Friends", "How I Met Your Mother", "The Big Bang Theory"],
    correctAnswer: 1,
    explanation: "Friends ran from 1994 to 2004 on NBC."
  },
  {
    id: "tv-shows-easy-2",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of Walter White's alias in 'Breaking Bad'?",
    options: ["Heisenberg", "Scarface", "Cap'n Cook", "Tuco"],
    correctAnswer: 0,
    explanation: "Walter White uses the alias Heisenberg in his meth operation."
  },
  {
    id: "tv-shows-easy-3",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which show features the fictional Dunder Mifflin Paper Company?",
    options: ["Parks and Recreation", "The Office", "30 Rock", "Arrested Development"],
    correctAnswer: 1,
    explanation: "The Office is set at Dunder Mifflin in Scranton, Pennsylvania."
  },
  {
    id: "tv-shows-easy-4",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the main character in 'The Sopranos'?",
    options: ["Tony Blundetto", "Tony Soprano", "Tony Blandish", "Tony Blunt"],
    correctAnswer: 1,
    explanation: "Tony Soprano, a mob boss, is the protagonist of The Sopranos."
  },
  {
    id: "tv-shows-easy-5",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which show follows the lives of the Bluth family?",
    options: ["Modern Family", "Schitt's Creek", "Arrested Development", "The Office"],
    correctAnswer: 2,
    explanation: "Arrested Development revolves around the eccentric Bluth family."
  },
  {
    id: "tv-shows-easy-6",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of the bar in 'It's Always Sunny in Philadelphia'?",
    options: ["McGillicuddy's", "Paddy's Pub", "Murphy's Bar", "The Blarney Stone"],
    correctAnswer: 1,
    explanation: "Paddy's Pub is the main setting for It's Always Sunny in Philadelphia."
  },
  {
    id: "tv-shows-easy-7",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the host of 'The Ellen DeGeneres Show'?",
    options: ["Oprah Winfrey", "Ellen DeGeneres", "Jimmy Fallon", "James Corden"],
    correctAnswer: 1,
    explanation: "Ellen DeGeneres hosted her namesake talk show for many years."
  },
  {
    id: "tv-shows-easy-8",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Game of Thrones' is based on books by George R.R. Martin.",
    correctAnswer: 1,
    explanation: "True. The series is based on 'A Song of Ice and Fire' book series."
  },
  {
    id: "tv-shows-easy-9",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Friends' aired on ABC.",
    correctAnswer: 0,
    explanation: "False. Friends aired on NBC, not ABC."
  },
  {
    id: "tv-shows-easy-10",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Stranger Things' is set in the 1980s.",
    correctAnswer: 1,
    explanation: "True. Stranger Things is primarily set in the 1980s."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tv-shows-medium-1",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many seasons did 'Breaking Bad' run?",
    options: ["3 seasons", "4 seasons", "5 seasons", "6 seasons"],
    correctAnswer: 2,
    explanation: "Breaking Bad ran for 5 seasons from 2008 to 2013."
  },
  {
    id: "tv-shows-medium-2",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which show won the most Emmy Awards in 2023?",
    options: ["Game of Thrones", "Succession", "The Last of Us", "Andor"],
    correctAnswer: 1,
    explanation: "Succession won multiple Emmy Awards for its final season."
  },
  {
    id: "tv-shows-medium-3",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the setting for 'Downton Abbey'?",
    options: ["A London townhouse", "A countryside estate", "A rural village", "An urban manor"],
    correctAnswer: 1,
    explanation: "Downton Abbey is set at the Crawley family estate in Yorkshire."
  },
  {
    id: "tv-shows-medium-4",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actor played Jon Snow in 'Game of Thrones'?",
    options: ["Pedro Pascal", "Kit Harington", "Lena Headey", "Emilia Clarke"],
    correctAnswer: 1,
    explanation: "Kit Harington played Jon Snow throughout the series."
  },
  {
    id: "tv-shows-medium-5",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is 'The Crown' about?",
    options: ["A jewelry heist", "The British royal family", "Medieval politics", "A sports drama"],
    correctAnswer: 1,
    explanation: "The Crown is a historical drama about the British royal family."
  },
  {
    id: "tv-shows-medium-6",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What streaming service is 'The Mandalorian' on?",
    options: ["Netflix", "Disney+", "Amazon Prime", "HBO Max"],
    correctAnswer: 1,
    explanation: "The Mandalorian is a Star Wars series on Disney+."
  },
  {
    id: "tv-shows-medium-7",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many seasons did 'The Office' US version have?",
    options: ["7 seasons", "8 seasons", "9 seasons", "10 seasons"],
    correctAnswer: 2,
    explanation: "The Office US ran for 9 seasons from 2005 to 2013."
  },
  {
    id: "tv-shows-medium-8",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'The Simpsons' has aired for over 30 seasons.",
    correctAnswer: 1,
    explanation: "True. The Simpsons premiered in 1989 and has over 35 seasons."
  },
  {
    id: "tv-shows-medium-9",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Black Mirror' is an anthology series.",
    correctAnswer: 1,
    explanation: "True. Black Mirror features standalone episodes with different stories."
  },
  {
    id: "tv-shows-medium-10",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'House of Cards' starred Kevin Spacey as the main character.",
    correctAnswer: 1,
    explanation: "True. Kevin Spacey played Frank Underwood in the series."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tv-shows-hard-1",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many total episodes of 'Friends' were there?",
    options: ["235", "236", "237", "238"],
    correctAnswer: 1,
    explanation: "Friends had 236 episodes across its 10 seasons."
  },
  {
    id: "tv-shows-hard-2",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year did 'Game of Thrones' premiere?",
    options: ["2009", "2010", "2011", "2012"],
    correctAnswer: 2,
    explanation: "Game of Thrones premiered on April 17, 2011."
  },
  {
    id: "tv-shows-hard-3",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which streaming platform originally aired 'The Crown'?",
    options: ["Netflix", "Amazon Prime", "Disney+", "Apple TV+"],
    correctAnswer: 0,
    explanation: "Netflix finances and produces The Crown."
  },
  {
    id: "tv-shows-hard-4",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the highest-rated TV series finale on IMDb?",
    options: ["Breaking Bad", "Game of Thrones", "Seinfeld", "The Office"],
    correctAnswer: 0,
    explanation: "Breaking Bad's series finale is highly rated among fans."
  },
  {
    id: "tv-shows-hard-5",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many seasons did 'Game of Thrones' have?",
    options: ["7 seasons", "8 seasons", "9 seasons", "10 seasons"],
    correctAnswer: 1,
    explanation: "Game of Thrones ran for 8 seasons."
  },
  {
    id: "tv-shows-hard-6",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which network originally aired 'The Sopranos'?",
    options: ["HBO", "Showtime", "AMC", "FX"],
    correctAnswer: 0,
    explanation: "The Sopranos premiered on HBO in 1999."
  },
  {
    id: "tv-shows-hard-7",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What character did Jon Snow become the lord of?",
    options: ["The Reach", "The Vale", "Winterfell", "The North"],
    correctAnswer: 2,
    explanation: "Jon Snow became the Lord of Winterfell after major events in the series."
  },
  {
    id: "tv-shows-hard-8",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Breaking Bad' was supposed to only run for 5 seasons.",
    correctAnswer: 1,
    explanation: "True. Creator Vince Gilligan planned the series to last exactly 5 seasons."
  },
  {
    id: "tv-shows-hard-9",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'The Last of Us' HBO series was based on the video game.",
    correctAnswer: 1,
    explanation: "True. The HBO series adaptation of The Last of Us received critical acclaim."
  },
  {
    id: "tv-shows-hard-10",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'True Detective' Season 1 starred Matthew McConaughey and Woody Harrelson.",
    correctAnswer: 1,
    explanation: "True. McConaughey and Harrelson starred in the acclaimed first season."
  }
] satisfies QuizQuestion[];
