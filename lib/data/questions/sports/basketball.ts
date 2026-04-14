// Basketball Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const basketballQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "basketball-easy-1",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points is a free throw worth in basketball?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "A free throw is worth 1 point and is awarded for certain fouls."
  },
  {
    id: "basketball-easy-2",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points is a two-point shot worth in basketball?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "A two-point shot is made from inside the three-point line."
  },
  {
    id: "basketball-easy-3",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points is a three-point shot worth in basketball?",
    options: ["2", "2.5", "3", "4"],
    correctAnswer: 2,
    explanation: "A three-point shot is made from beyond the three-point line."
  },
  {
    id: "basketball-easy-4",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many players from each team are on the court during play?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Each team has 5 players on the court at a time."
  },
  {
    id: "basketball-easy-5",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is an assist in basketball?",
    options: ["Making a shot", "Passing the ball to a teammate who scores", "Stealing the ball", "Blocking a shot"],
    correctAnswer: 1,
    explanation: "An assist is credited to a player whose pass directly leads to a teammate scoring."
  },
  {
    id: "basketball-easy-6",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a slam dunk?",
    options: ["A difficult shot", "Dunking the ball after a steal", "Forcefully throwing the ball through the hoop", "A jump shot"],
    correctAnswer: 2,
    explanation: "A slam dunk is when a player forcefully throws the ball directly through the basket."
  },
  {
    id: "basketball-easy-7",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which NBA team does LeBron James currently play for?",
    options: ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: 2,
    explanation: "As of 2026, LeBron James plays for the Los Angeles Lakers."
  },
  {
    id: "basketball-easy-8",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Basketball was invented by Dr. James Naismith in 1891.",
    correctAnswer: 1,
    explanation: "True. Naismith created the sport at Springfield College in Massachusetts."
  },
  {
    id: "basketball-easy-9",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "An NBA game is divided into four quarters of 12 minutes each.",
    correctAnswer: 1,
    explanation: "True. An NBA game has four quarters of 12 minutes each, totaling 48 minutes."
  },
  {
    id: "basketball-easy-10",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "A basketball is typically orange in color.",
    correctAnswer: 1,
    explanation: "True. Basketballs are traditionally orange with black lines for visibility."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "basketball-medium-1",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many NBA championships has Michael Jordan won?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    explanation: "Michael Jordan won 6 NBA championships with the Chicago Bulls (1991-1993, 1996-1998)."
  },
  {
    id: "basketball-medium-2",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a double-double in basketball?",
    options: ["Two consecutive scores", "Double points in a quarter", "Double-digit points in two statistical categories", "Two shots in a row"],
    correctAnswer: 2,
    explanation: "A double-double is when a player achieves double-digit stats (usually 10+) in two categories like points and rebounds."
  },
  {
    id: "basketball-medium-3",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a traveling violation in basketball?",
    options: ["Leaving the court", "Moving more than two steps without dribbling", "Running with the ball", "Taking too many steps after catching the ball"],
    correctAnswer: 2,
    explanation: "Traveling occurs when a player takes too many steps without dribbling the ball."
  },
  {
    id: "basketball-medium-4",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who has won the most NBA MVP awards?",
    options: ["Michael Jordan", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "LeBron James"],
    correctAnswer: 2,
    explanation: "Kareem Abdul-Jabbar won 6 MVP awards, the most in NBA history."
  },
  {
    id: "basketball-medium-5",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a pick and roll in basketball?",
    options: ["A defensive play", "An offensive play where a screener sets a block and rolls to the basket", "A stealing technique", "A fast break move"],
    correctAnswer: 1,
    explanation: "A pick and roll is an offensive play where one player sets a screen for another, who then rolls to the basket."
  },
  {
    id: "basketball-medium-6",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many seconds can a player hold the ball in the paint without shooting?",
    options: ["2 seconds", "3 seconds", "5 seconds", "10 seconds"],
    correctAnswer: 1,
    explanation: "The lane violation (3-second rule) prevents a player from staying in the paint for more than 3 seconds without the ball."
  },
  {
    id: "basketball-medium-7",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a crossover dribble?",
    options: ["Passing across the court", "Bouncing the ball between the legs quickly", "A defensive move", "A traveling violation"],
    correctAnswer: 1,
    explanation: "A crossover dribble is a move where a player dribbles the ball from one side to the other, often between the legs."
  },
  {
    id: "basketball-medium-8",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Michael Jordan won 6 NBA championships with the Chicago Bulls.",
    correctAnswer: 1,
    explanation: "True. Jordan won championships in 1991, 1992, 1993, 1996, 1997, and 1998."
  },
  {
    id: "basketball-medium-9",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Wilt Chamberlain scored 100 points in a single NBA game.",
    correctAnswer: 1,
    explanation: "True. Chamberlain scored exactly 100 points for the Philadelphia Warriors on March 2, 1962."
  },
  {
    id: "basketball-medium-10",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Stephen Curry is known for his exceptional three-point shooting ability.",
    correctAnswer: 1,
    explanation: "True. Curry revolutionized basketball with his long-range shooting and holds multiple three-point records."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "basketball-hard-1",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the current length of a three-point line in the NBA?",
    options: ["20 feet", "22 feet", "23.75 feet", "25 feet"],
    correctAnswer: 2,
    explanation: "The NBA three-point line is 23 feet 9 inches from the basket at the top of the arc."
  },
  {
    id: "basketball-hard-2",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who holds the all-time NBA scoring record?",
    options: ["Michael Jordan", "LeBron James", "Wilt Chamberlain", "Kobe Bryant"],
    correctAnswer: 1,
    explanation: "LeBron James surpassed Kareem Abdul-Jabbar's previous record and holds the all-time scoring record."
  },
  {
    id: "basketball-hard-3",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a pick-and-pop in basketball?",
    options: ["A fast break", "A screen where the screener pops out for a shot", "A steal attempt", "A defensive rotation"],
    correctAnswer: 1,
    explanation: "A pick-and-pop is similar to a pick-and-roll, but the screener pops out for a jump shot instead of rolling."
  },
  {
    id: "basketball-hard-4",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a triple-double in basketball?",
    options: ["Three players score double digits", "Triple-digit score", "Double-digit stats in three categories", "Three consecutive scores"],
    correctAnswer: 2,
    explanation: "A triple-double is when a player achieves double-digit stats in three categories (usually points, rebounds, and assists)."
  },
  {
    id: "basketball-hard-5",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many NBA championships has the Boston Celtics won as of 2024?",
    options: ["15", "17", "18", "20"],
    correctAnswer: 2,
    explanation: "The Boston Celtics won their 18th NBA championship in 2024, tying the Los Angeles Lakers."
  },
  {
    id: "basketball-hard-6",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the salary cap in the NBA for the 2024-25 season approximately?",
    options: ["$130 million", "$135 million", "$140 million", "$145 million"],
    correctAnswer: 2,
    explanation: "The NBA salary cap for the 2024-25 season is approximately $140.3 million."
  },
  {
    id: "basketball-hard-7",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the first player drafted in the 2003 NBA Draft?",
    options: ["Kobe Bryant", "LeBron James", "Dwyane Wade", "Chris Bosh"],
    correctAnswer: 1,
    explanation: "LeBron James was drafted first overall by the Cleveland Cavaliers in 2003."
  },
  {
    id: "basketball-hard-8",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "NBA games use a 24-second shot clock.",
    correctAnswer: 1,
    explanation: "True. Teams must attempt a shot within 24 seconds or lose possession in the NBA."
  },
  {
    id: "basketball-hard-9",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Magic Johnson and Larry Bird won the NBA Finals MVP in the same year.",
    correctAnswer: 0,
    explanation: "False. While they were rivals, Magic Johnson (1980, 1982, 1987, 1988) and Larry Bird (1984, 1985, 1986) won in different years."
  },
  {
    id: "basketball-hard-10",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Nikola Jokic won the NBA MVP award multiple times in recent years.",
    correctAnswer: 1,
    explanation: "True. Nikola Jokic won consecutive MVP awards in 2021, 2022, and 2024."
  }
] satisfies QuizQuestion[];
