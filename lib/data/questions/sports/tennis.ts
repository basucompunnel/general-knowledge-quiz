// Tennis Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const tennisQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tennis-easy-1",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many Grand Slam tournaments are there in tennis?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "The four Grand Slams are Australian Open, French Open, Wimbledon, and US Open."
  },
  {
    id: "tennis-easy-2",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a score of zero called in tennis?",
    options: ["Nil", "Zero", "Love", "Nought"],
    correctAnswer: 2,
    explanation: "A score of zero in tennis is called 'love'."
  },
  {
    id: "tennis-easy-3",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many players compete in a singles tennis match?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 0,
    explanation: "A singles tennis match is between two players."
  },
  {
    id: "tennis-easy-4",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a tennis court divided into?",
    options: ["Two halves", "Two halves and service boxes", "Three sections", "Four equal squares"],
    correctAnswer: 1,
    explanation: "A tennis court is divided into two halves separated by a net and has service boxes."
  },
  {
    id: "tennis-easy-5",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is an ace in tennis?",
    options: ["A good player", "A unreturnable serve", "A successful volley", "A tiebreak point"],
    correctAnswer: 1,
    explanation: "An ace is a serve that the opponent cannot reach or return."
  },
  {
    id: "tennis-easy-6",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points constitute a game in tennis?",
    options: ["First to 3 points", "First to 4 points", "First to 5 points", "First to 6 points"],
    correctAnswer: 1,
    explanation: "A game is won by the first player to score 4 points (0, 15, 30, 40, game)."
  },
  {
    id: "tennis-easy-7",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a break point in tennis?",
    options: ["A pause in play", "A chance to break the opponent's serve", "When tied at deuce", "A timeout"],
    correctAnswer: 1,
    explanation: "A break point is an opportunity for the receiver to win the game on the opponent's serve."
  },
  {
    id: "tennis-easy-8",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Wimbledon is played on grass courts.",
    correctAnswer: 1,
    explanation: "True. Wimbledon is the only Grand Slam played on grass."
  },
  {
    id: "tennis-easy-9",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Tennis was invented in the United States.",
    correctAnswer: 0,
    explanation: "False. Modern tennis was developed in England in the 1870s."
  },
  {
    id: "tennis-easy-10",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "A tennis net is stretched between two courts to separate them.",
    correctAnswer: 0,
    explanation: "False. A tennis net divides opposite sides of the same court in the middle."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tennis-medium-1",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a deuce in tennis?",
    options: ["Two aces in a row", "When both players have 40 points", "Two sets of tennis", "A double fault"],
    correctAnswer: 1,
    explanation: "Deuce occurs when both players reach 40 points (tied game), requiring one to win by 2."
  },
  {
    id: "tennis-medium-2",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a tiebreaker in tennis?",
    options: ["A way to break ties at 6-6 in sets", "A method to win at deuce", "A first-to-7-points game", "All of the above"],
    correctAnswer: 3,
    explanation: "A tiebreaker is played when sets are tied at 6-6, first to 7 points (win by 2)."
  },
  {
    id: "tennis-medium-3",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many sets must a player win to win a professional tennis match?",
    options: ["Best of 2 sets", "First to 2 sets", "Best of 3 sets", "First to 3 sets"],
    correctAnswer: 2,
    explanation: "Most professional matches are best of 3 sets for women, and best of 5 for men in Grand Slams."
  },
  {
    id: "tennis-medium-4",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who has won the most Grand Slam singles titles in men's tennis?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    correctAnswer: 2,
    explanation: "Novak Djokovic has won 24 Grand Slam singles titles as of 2024, the most in men's tennis."
  },
  {
    id: "tennis-medium-5",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What surface is the French Open played on?",
    options: ["Grass", "Hard court", "Clay", "Carpet"],
    correctAnswer: 2,
    explanation: "The French Open (Roland Garros) is played on red clay courts."
  },
  {
    id: "tennis-medium-6",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What surface is the Australian Open played on?",
    options: ["Grass", "Hard court", "Clay", "Carpet"],
    correctAnswer: 1,
    explanation: "The Australian Open is played on hard courts (Plexicushion surface)."
  },
  {
    id: "tennis-medium-7",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a volley in tennis?",
    options: ["A long rally", "A fast serve", "Hitting the ball before it bounces", "A defensive shot"],
    correctAnswer: 2,
    explanation: "A volley is when a player hits the ball before it bounces on the court."
  },
  {
    id: "tennis-medium-8",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Roger Federer holds the record for most men's Grand Slam titles.",
    correctAnswer: 0,
    explanation: "False. Novak Djokovic holds the record with 24 Grand Slam titles, surpassing Federer's 20."
  },
  {
    id: "tennis-medium-9",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Venus and Serena Williams are famous tennis players.",
    correctAnswer: 1,
    explanation: "True. Both Williams sisters are among the greatest tennis players of all time."
  },
  {
    id: "tennis-medium-10",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "A double fault results in losing a point in tennis.",
    correctAnswer: 1,
    explanation: "True. Two consecutive failed serves (double fault) result in losing the point."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "tennis-hard-1",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who holds the record for the most women's Grand Slam singles titles?",
    options: ["Serena Williams", "Margaret Court", "Martina Navratilova", "Billie Jean King"],
    correctAnswer: 1,
    explanation: "Margaret Court won 24 Grand Slam singles titles, though debate exists about the count."
  },
  {
    id: "tennis-hard-2",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the longest tennis match in history?",
    options: ["Isner vs. Mahut", "Federer vs. Nadal", "McEnroe vs. Borg", "Connors vs. Vilas"],
    correctAnswer: 0,
    explanation: "Isner vs. Mahut at Wimbledon 2010 lasted 11 hours 5 minutes, longest in Grand Slam history."
  },
  {
    id: "tennis-hard-3",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many times has Rafael Nadal won the French Open?",
    options: ["10 times", "11 times", "12 times", "13 times"],
    correctAnswer: 3,
    explanation: "Rafael Nadal won the French Open 14 times (2005 to 2022), the most for any player at one Grand Slam."
  },
  {
    id: "tennis-hard-4",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the fastest tennis serve ever recorded?",
    options: ["140 mph", "155 mph", "165 mph", "175 mph"],
    correctAnswer: 2,
    explanation: "The fastest serve recorded was 165 mph by Juan Martin del Potro."
  },
  {
    id: "tennis-hard-5",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who won the Golden Slam (win all 4 Grand Slams in one calendar year)?",
    options: ["Rod Laver", "Steffi Graf", "Both A and B (different years)", "Nobody"],
    correctAnswer: 2,
    explanation: "Rod Laver won the Golden Slam in 1969, and Steffi Graf achieved it in 1988."
  },
  {
    id: "tennis-hard-6",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is tennis ranking called internationally?",
    options: ["International Tennis Ranking", "ATP/WTA Ranking", "International Tennis Federation Ranking", "Pro Tennis Ranking"],
    correctAnswer: 1,
    explanation: "Men's rankings are ATP (Association of Tennis Professionals) and women's are WTA (Women's Tennis Association)."
  },
  {
    id: "tennis-hard-7",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many times did Serena Williams win Wimbledon?",
    options: ["5 times", "6 times", "7 times", "8 times"],
    correctAnswer: 2,
    explanation: "Serena Williams won Wimbledon 7 times (2002, 2003, 2009, 2012, 2015, 2016, 2019)."
  },
  {
    id: "tennis-hard-8",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The longest tennis match in history lasted over 11 hours.",
    correctAnswer: 1,
    explanation: "True. Isner vs. Mahut at Wimbledon 2010 lasted 11 hours and 5 minutes (ended at 9:26 PM)."
  },
  {
    id: "tennis-hard-9",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Novak Djokovic has achieved the Golden Slam (all 4 Grand Slams in one year).",
    correctAnswer: 0,
    explanation: "False. While Djokovic has won all 4 Grand Slams, he did not achieve them in the same calendar year."
  },
  {
    id: "tennis-hard-10",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The US Open is played on hard courts.",
    correctAnswer: 1,
    explanation: "True. The US Open is played on hard courts (DecoTurf surface) at Flushing Meadows."
  }
] satisfies QuizQuestion[];
