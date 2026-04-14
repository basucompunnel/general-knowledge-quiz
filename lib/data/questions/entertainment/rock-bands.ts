// Rock Bands Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const rockBandsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rock-bands-easy-1",
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
    id: "rock-bands-easy-2",
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
    id: "rock-bands-easy-3",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the lead singer of The Rolling Stones?",
    options: ["Keith Richards", "Charlie Watts", "Mick Jagger", "Bill Wyman"],
    correctAnswer: 2,
    explanation: "Mick Jagger is the iconic frontman of The Rolling Stones."
  },
  {
    id: "rock-bands-easy-4",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band sang 'Hotel California'?",
    options: ["Fleetwood Mac", "The Eagles", "The Doors", "Lynyrd Skynyrd"],
    correctAnswer: 1,
    explanation: "The Eagles released 'Hotel California' in 1976."
  },
  {
    id: "rock-bands-easy-5",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the drummer for The Who?",
    options: ["Pete Townshend", "Keith Moon", "John Entwistle", "Roger Daltrey"],
    correctAnswer: 1,
    explanation: "Keith Moon was The Who's legendary and wild drummer."
  },
  {
    id: "rock-bands-easy-6",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band performed 'Bohemian Rhapsody'?",
    options: ["David Bowie", "Queen", "Pink Floyd", "The Beatles"],
    correctAnswer: 1,
    explanation: "Queen released 'Bohemian Rhapsody' in 1975."
  },
  {
    id: "rock-bands-easy-7",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the lead guitarist of The Rolling Stones?",
    options: ["Mick Jagger", "Keith Richards", "Brian Jones", "Mick Taylor"],
    correctAnswer: 1,
    explanation: "Keith Richards is the legendary guitarist and co-founder of The Rolling Stones."
  },
  {
    id: "rock-bands-easy-8",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Led Zeppelin's 'Stairway to Heaven' is one of the longest rock songs played on radio.",
    correctAnswer: 1,
    explanation: "True. At over 8 minutes, it became a rock radio staple despite its length."
  },
  {
    id: "rock-bands-easy-9",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "The Beatles originally came from England.",
    correctAnswer: 1,
    explanation: "True. The Beatles were from Liverpool, England."
  },
  {
    id: "rock-bands-easy-10",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Pink Floyd's 'The Wall' was a double album.",
    correctAnswer: 1,
    explanation: "True. The Wall was a double album released in 1979."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rock-bands-medium-1",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which song by Led Zeppelin is 8 minutes and 2 seconds long?",
    options: ["Black Dog", "Whole Lotta Love", "Stairway to Heaven", "Immigrant Song"],
    correctAnswer: 2,
    explanation: "Stairway to Heaven is one of the longest classic rock songs at 8:02."
  },
  {
    id: "rock-bands-medium-2",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was The Beatles' first album?",
    options: ["Rubber Soul", "Please Please Me", "A Hard Day's Night", "Revolver"],
    correctAnswer: 1,
    explanation: "Please Please Me was The Beatles' first album released in 1963."
  },
  {
    id: "rock-bands-medium-3",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which band released 'Dark Side of the Moon'?",
    options: ["Led Zeppelin", "Pink Floyd", "Black Sabbath", "Deep Purple"],
    correctAnswer: 1,
    explanation: "Pink Floyd released The Dark Side of the Moon in 1973."
  },
  {
    id: "rock-bands-medium-4",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was Nirvana's breakthrough album?",
    options: ["Bleach", "In Utero", "Nevermind", "Incesticide"],
    correctAnswer: 2,
    explanation: "Nevermind was released in 1991 and changed rock music forever."
  },
  {
    id: "rock-bands-medium-5",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who was the lead singer of Nirvana?",
    options: ["Dave Grohl", "Kurt Cobain", "Krist Novoselic", "Chad Channing"],
    correctAnswer: 1,
    explanation: "Kurt Cobain was Nirvana's lead singer and songwriter."
  },
  {
    id: "rock-bands-medium-6",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which band released 'The Wall'?",
    options: ["Led Zeppelin", "Pink Floyd", "The Who", "King Crimson"],
    correctAnswer: 1,
    explanation: "Pink Floyd released The Wall in 1979 as a rock opera."
  },
  {
    id: "rock-bands-medium-7",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many members does Queen have?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Queen is a four-member rock band with Freddie Mercury as the lead."
  },
  {
    id: "rock-bands-medium-8",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Pink Floyd's 'The Dark Side of the Moon' spent over 900 weeks on the Billboard 200.",
    correctAnswer: 1,
    explanation: "True. It spent 950 weeks on the chart, a record for many years."
  },
  {
    id: "rock-bands-medium-9",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "David Bowie was born David Robert Jones.",
    correctAnswer: 1,
    explanation: "True. Bowie changed his name to avoid confusion with Davy Jones of The Monkees."
  },
  {
    id: "rock-bands-medium-10",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "The Who wrote the rock opera 'Tommy'.",
    correctAnswer: 1,
    explanation: "True. The Who released Tommy in 1969."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rock-bands-hard-1",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Led Zeppelin album featured 'Whole Lotta Love'?",
    options: ["Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III", "Led Zeppelin IV"],
    correctAnswer: 1,
    explanation: "'Whole Lotta Love' is from Led Zeppelin II, released in 1969."
  },
  {
    id: "rock-bands-hard-2",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was The Beatles' last album released during their time as a group?",
    options: ["Sgt. Pepper's Lonely Hearts Club Band", "Abbey Road", "Let It Be", "The White Album"],
    correctAnswer: 1,
    explanation: "Abbey Road was the last album recorded before they broke up, though Let It Be came later."
  },
  {
    id: "rock-bands-hard-3",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which member of The Beatles died first?",
    options: ["John Lennon", "George Harrison", "Ringo Starr", "Paul McCartney"],
    correctAnswer: 0,
    explanation: "John Lennon was assassinated in 1980."
  },
  {
    id: "rock-bands-hard-4",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was Jimi Hendrix's first hit single?",
    options: ["Purple Haze", "All Along the Watchtower", "Foxy Lady", "Fire"],
    correctAnswer: 0,
    explanation: "'Purple Haze' was Jimi Hendrix's debut single in 1967."
  },
  {
    id: "rock-bands-hard-5",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the original drummer of The Beatles?",
    options: ["Ringo Starr", "Pete Best", "Keith Moon", "Ginger Baker"],
    correctAnswer: 1,
    explanation: "Pete Best was The Beatles' drummer before Ringo Starr joined in 1962."
  },
  {
    id: "rock-bands-hard-6",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What city were The Rolling Stones actually formed?",
    options: ["London", "Manchester", "Liverpool", "Bristol"],
    correctAnswer: 0,
    explanation: "The Rolling Stones were formed in London in 1962."
  },
  {
    id: "rock-bands-hard-7",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many times has Pink Floyd reformed since band member deaths?",
    options: ["Once", "Twice", "Three times", "Never"],
    correctAnswer: 0,
    explanation: "Pink Floyd reunited for the 2005 Live 8 concert before disbanding again."
  },
  {
    id: "rock-bands-hard-8",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Kurt Cobain died in 1994.",
    correctAnswer: 1,
    explanation: "True. Kurt Cobain died on April 5, 1994 at age 27."
  },
  {
    id: "rock-bands-hard-9",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "The Who's 'Who's Next' album featured 'Baba O'Riley' and 'Won't Get Fooled Again'.",
    correctAnswer: 1,
    explanation: "True. Who's Next (1971) featured both of these iconic songs."
  },
  {
    id: "rock-bands-hard-10",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Freddie Mercury was the lead singer of Queen.",
    correctAnswer: 1,
    explanation: "True. Freddie Mercury was Queen's iconic frontman and primary songwriter."
  }
] satisfies QuizQuestion[];
