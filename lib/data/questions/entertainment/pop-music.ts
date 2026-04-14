// Pop Music Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const popMusicQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "pop-music-easy-1",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
    correctAnswer: 1,
    explanation: "Michael Jackson earned this title for his massive influence on pop music and culture."
  },
  {
    id: "pop-music-easy-2",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band sang 'Yesterday'?",
    options: ["The Rolling Stones", "The Beatles", "The Who", "Led Zeppelin"],
    correctAnswer: 1,
    explanation: "The Beatles released 'Yesterday' in 1965, one of their most famous songs."
  },
  {
    id: "pop-music-easy-3",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who sang 'Like a Virgin'?",
    options: ["Prince", "Madonna", "Cyndi Lauper", "Cher"],
    correctAnswer: 1,
    explanation: "Madonna released 'Like a Virgin' in 1984, defining her career."
  },
  {
    id: "pop-music-easy-4",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which artist sang 'Imagine'?",
    options: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
    correctAnswer: 1,
    explanation: "John Lennon released the iconic song 'Imagine' in 1971."
  },
  {
    id: "pop-music-easy-5",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who sang 'Billie Jean'?",
    options: ["Prince", "Elton John", "Michael Jackson", "David Bowie"],
    correctAnswer: 2,
    explanation: "Michael Jackson sang 'Billie Jean' from his album Thriller in 1982."
  },
  {
    id: "pop-music-easy-6",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which artist is known for 'Like a Prayer'?",
    options: ["Prince", "Madonna", "Janet Jackson", "Whitney Houston"],
    correctAnswer: 1,
    explanation: "Madonna released 'Like a Prayer' in 1989, causing controversy."
  },
  {
    id: "pop-music-easy-7",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who sang 'Wannabe'?",
    options: ["All Saints", "Spice Girls", "TLC", "Destiny's Child"],
    correctAnswer: 1,
    explanation: "The Spice Girls sang 'Wannabe' in 1996, a global hit."
  },
  {
    id: "pop-music-easy-8",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Madonna is often called the 'Queen of Pop'.",
    correctAnswer: 1,
    explanation: "True. Madonna has been a dominant force in pop music since the 1980s."
  },
  {
    id: "pop-music-easy-9",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Michael Jackson died in 2009.",
    correctAnswer: 1,
    explanation: "True. Michael Jackson died on June 25, 2009 at age 50."
  },
  {
    id: "pop-music-easy-10",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Prince was born in Minnesota.",
    correctAnswer: 1,
    explanation: "True. Prince was born in Minneapolis, Minnesota in 1958."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "pop-music-medium-1",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist has the most Grammy Awards?",
    options: ["Beyoncé", "Quincy Jones", "Georg Solti", "Bono"],
    correctAnswer: 0,
    explanation: "Beyoncé holds the record with 32 Grammy Awards as of 2023."
  },
  {
    id: "pop-music-medium-2",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the best-selling album of all time?",
    options: ["The Dark Side of the Moon", "Thriller", "Hotel California", "Rumours"],
    correctAnswer: 1,
    explanation: "Thriller by Michael Jackson is the best-selling album with over 66 million copies sold."
  },
  {
    id: "pop-music-medium-3",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who sang 'I Will Always Love You' famously?",
    options: ["Mariah Carey", "Celine Dion", "Whitney Houston", "Aretha Franklin"],
    correctAnswer: 2,
    explanation: "Whitney Houston covered this Dolly Parton song in 1992 for The Bodyguard."
  },
  {
    id: "pop-music-medium-4",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist released 'Purple Rain'?",
    options: ["Prince", "David Bowie", "Prince", "Sting"],
    correctAnswer: 0,
    explanation: "Prince released the iconic album and song 'Purple Rain' in 1984."
  },
  {
    id: "pop-music-medium-5",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who sang 'Born to Run'?",
    options: ["Bruce Springsteen", "Bob Dylan", "Tom Petty", "Dave Matthews"],
    correctAnswer: 0,
    explanation: "Bruce Springsteen released 'Born to Run' in 1975."
  },
  {
    id: "pop-music-medium-6",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist is known for 'Halo'?",
    options: ["Rihanna", "Beyoncé", "Britney Spears", "Lady Gaga"],
    correctAnswer: 1,
    explanation: "Beyoncé sang 'Halo' in 2008, one of her biggest hits."
  },
  {
    id: "pop-music-medium-7",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who performed at the 2012 Super Bowl halftime show?",
    options: ["Madonna", "Prince", "Michael Jackson", "Beyoncé"],
    correctAnswer: 0,
    explanation: "Madonna performed at Super Bowl XLVI in 2012."
  },
  {
    id: "pop-music-medium-8",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Thriller' by Michael Jackson is the best-selling album of all time.",
    correctAnswer: 1,
    explanation: "True. Thriller has sold over 66 million copies worldwide."
  },
  {
    id: "pop-music-medium-9",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Taylor Swift is a pop musician and songwriter.",
    correctAnswer: 1,
    explanation: "True. Taylor Swift is known for songs across pop and country genres."
  },
  {
    id: "pop-music-medium-10",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Lady Gaga's real name is Stefani Germanotta.",
    correctAnswer: 1,
    explanation: "True. Lady Gaga was born Stefani Joanne Angelina Germanotta."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "pop-music-hard-1",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was Michael Jackson's first solo album?",
    options: ["Thriller", "Off the Wall", "Bad", "Dangerous"],
    correctAnswer: 1,
    explanation: "Off the Wall was Michael Jackson's first major solo album released in 1979."
  },
  {
    id: "pop-music-hard-2",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many studio albums did Prince release in his lifetime?",
    options: ["Over 20", "Around 30", "Around 40", "Over 50"],
    correctAnswer: 2,
    explanation: "Prince released 39 studio albums during his lifetime (1978-2016)."
  },
  {
    id: "pop-music-hard-3",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which artist won the most Grammy Awards in a single night?",
    options: ["Adele", "Beyoncé", "Georg Solti", "Quincy Jones"],
    correctAnswer: 1,
    explanation: "Beyoncé won 4 Grammy Awards at the 2023 Grammy Awards ceremony."
  },
  {
    id: "pop-music-hard-4",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the most-streamed song on Spotify?",
    options: ["Shape of You", "Blinding Lights", "Someone You Loved", "As It Was"],
    correctAnswer: 1,
    explanation: "'Blinding Lights' by The Weeknd became the most-streamed track on Spotify."
  },
  {
    id: "pop-music-hard-5",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which rapper won the most Grammy Awards in 2023?",
    options: ["Kendrick Lamar", "Drake", "Jay-Z", "Kanye West"],
    correctAnswer: 0,
    explanation: "Kendrick Lamar won multiple Grammy Awards at the 2024 Grammy Awards."
  },
  {
    id: "pop-music-hard-6",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year did Michael Jackson release 'Thriller'?",
    options: ["1980", "1981", "1982", "1983"],
    correctAnswer: 2,
    explanation: "Thriller was released in November 1982 and became a cultural phenomenon."
  },
  {
    id: "pop-music-hard-7",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many consecutive number-one albums does Taylor Swift hold?",
    options: ["5", "8", "10", "12"],
    correctAnswer: 2,
    explanation: "Taylor Swift broke records with numerous consecutive number-one albums."
  },
  {
    id: "pop-music-hard-8",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Elvis Presley is often called the 'King of Rock and Roll'.",
    correctAnswer: 1,
    explanation: "True. Elvis earned this title for revolutionizing music in the 1950s."
  },
  {
    id: "pop-music-hard-9",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "The Beatles broke up in 1970.",
    correctAnswer: 1,
    explanation: "True. The Beatles officially disbanded in April 1970."
  },
  {
    id: "pop-music-hard-10",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Beyoncé was a member of Destiny's Child before her solo career.",
    correctAnswer: 1,
    explanation: "True. Beyoncé was the lead singer of Destiny's Child from 1997-2005."
  }
] satisfies QuizQuestion[];
