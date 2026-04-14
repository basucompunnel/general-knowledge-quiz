// Football (Soccer) Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const footballSoccerQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "football-soccer-easy-1",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many players are on a soccer team during a match?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "Each team has 11 players on the field during a match."
  },
  {
    id: "football-soccer-easy-2",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How long is a standard soccer match?",
    options: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"],
    correctAnswer: 2,
    explanation: "A standard soccer match is 90 minutes, divided into two 45-minute halves."
  },
  {
    id: "football-soccer-easy-3",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a goal in soccer?",
    options: ["A score of 1 point", "A score of 3 points", "A score of 1 point when the ball crosses the goal line", "A defensive position"],
    correctAnswer: 2,
    explanation: "A goal is scored when the ball completely crosses the goal line between the goalposts and crossbar."
  },
  {
    id: "football-soccer-easy-4",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    correctAnswer: 2,
    explanation: "Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002)."
  },
  {
    id: "football-soccer-easy-5",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is an offside in soccer?",
    options: ["Fouling on the side", "Being ahead of the ball when it's played", "Being in an illegal forward position with fewer than two opponents ahead", "Standing on the side of the field"],
    correctAnswer: 2,
    explanation: "Offside occurs when a player is nearer to the goal line than both the ball and two opponents."
  },
  {
    id: "football-soccer-easy-6",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a penalty kick in soccer?",
    options: ["A free shot from mid-field", "A direct shot at goal from 12 yards for a foul in the penalty area", "A corner kick", "A throw-in"],
    correctAnswer: 1,
    explanation: "A penalty kick is awarded for a foul in the penalty area and is taken from a spot 12 yards from the goal."
  },
  {
    id: "football-soccer-easy-7",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the FIFA World Cup?",
    options: ["A club tournament", "The international soccer championship held every 4 years", "A regional tournament", "A youth tournament"],
    correctAnswer: 1,
    explanation: "The FIFA World Cup is the premier international soccer tournament held every 4 years."
  },
  {
    id: "football-soccer-easy-8",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Pelé scored over 1,000 career goals.",
    correctAnswer: 1,
    explanation: "True. Pelé scored approximately 1,283 goals in his career, though figures vary by source."
  },
  {
    id: "football-soccer-easy-9",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "A red card in soccer results in immediate ejection from the game.",
    correctAnswer: 1,
    explanation: "True. A red card means the player is sent off and cannot continue playing."
  },
  {
    id: "football-soccer-easy-10",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Germany has never won a FIFA World Cup.",
    correctAnswer: 0,
    explanation: "False. Germany has won the World Cup 4 times (1954, 1974, 1990, 2014)."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "football-soccer-medium-1",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which player has won the most Ballon d'Or awards?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
    correctAnswer: 1,
    explanation: "Lionel Messi has won 8 Ballon d'Or awards as of 2023."
  },
  {
    id: "football-soccer-medium-2",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the UEFA Champions League?",
    options: ["National team tournament", "Club tournament for European teams", "Youth tournament", "Community tournament"],
    correctAnswer: 1,
    explanation: "The UEFA Champions League is an annual club tournament featuring the best European teams."
  },
  {
    id: "football-soccer-medium-3",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many World Cups has France won?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "France has won 3 World Cups (1998, 2018, 2022)."
  },
  {
    id: "football-soccer-medium-4",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a hat-trick in soccer?",
    options: ["Three consecutive wins", "Three goals scored by one player in a match", "Three assists", "Three consecutive shots"],
    correctAnswer: 1,
    explanation: "A hat-trick is when a single player scores three goals in one match."
  },
  {
    id: "football-soccer-medium-5",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does FIFA stand for?",
    options: ["Football International Federation Association", "Fédération Internationale de Football Association", "Football Institute For Athletes", "Federal International Football Authority"],
    correctAnswer: 1,
    explanation: "FIFA stands for Fédération Internationale de Football Association (International Federation of Association Football)."
  },
  {
    id: "football-soccer-medium-6",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["United States", "Qatar", "Russia", "Brazil"],
    correctAnswer: 1,
    explanation: "Qatar hosted the 2022 FIFA World Cup, the first World Cup held in the Middle East."
  },
  {
    id: "football-soccer-medium-7",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a yellow card in soccer?",
    options: ["Warning for unsporting behavior", "Means the player is ejected", "A signal for halftime", "A goal celebration rule"],
    correctAnswer: 0,
    explanation: "A yellow card is issued as a warning for misconduct; two yellow cards result in a red card and ejection."
  },
  {
    id: "football-soccer-medium-8",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "The fastest goal in World Cup history was scored in 11 seconds.",
    correctAnswer: 1,
    explanation: "True. Hakan Şükür scored for Turkey against Belgium after 11 seconds in 2002."
  },
  {
    id: "football-soccer-medium-9",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Cristiano Ronaldo plays for various teams including Manchester United and Real Madrid.",
    correctAnswer: 1,
    explanation: "True. Ronaldo played for many top clubs including Sporting CP, Manchester United, Real Madrid, and Juventus."
  },
  {
    id: "football-soccer-medium-10",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Argentina won the 2022 FIFA World Cup.",
    correctAnswer: 1,
    explanation: "True. Argentina won the 2022 FIFA World Cup held in Qatar, defeating France in the final."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "football-soccer-hard-1",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the standard size of a soccer field in meters?",
    options: ["100-110 by 50-60", "105-110 by 65-70", "110-120 by 70-80", "130-140 by 90-100"],
    correctAnswer: 1,
    explanation: "Standard soccer field dimensions are 105-110 meters in length and 65-70 meters in width."
  },
  {
    id: "football-soccer-hard-2",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who scored in the 1950 World Cup final?",
    options: ["Pelé", "Maracanã", "Ghiggia", "Alcides Ghiggia"],
    correctAnswer: 3,
    explanation: "Alcides Ghiggia scored the winning goal for Uruguay in the 1950 World Cup held in Brazil."
  },
  {
    id: "football-soccer-hard-3",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many times has Argentina won the FIFA World Cup?",
    options: ["2 times", "3 times", "4 times", "5 times"],
    correctAnswer: 2,
    explanation: "Argentina won the World Cup 3 times (1978, 1986, 2022)."
  },
  {
    id: "football-soccer-hard-4",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the handball rule in soccer?",
    options: ["No hands allowed", "Intentional handball by outfield players results in a penalty", "Goalkeeper can use hands in the penalty area", "All of the above"],
    correctAnswer: 3,
    explanation: "Outfield players cannot deliberately handle the ball (handball = penalty), but goalkeepers can use hands in their penalty area."
  },
  {
    id: "football-soccer-hard-5",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who won the most recent FIFA World Cup (2022)?",
    options: ["France", "Argentina", "Brazil", "Germany"],
    correctAnswer: 1,
    explanation: "Argentina won the 2022 FIFA World Cup, with Lionel Messi finally achieving his World Cup dream."
  },
  {
    id: "football-soccer-hard-6",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many goals did Messi score in his international career for Argentina?",
    options: ["80+", "90+", "100+", "110+"],
    correctAnswer: 2,
    explanation: "Lionel Messi scored over 100 goals for the Argentina national team during his career."
  },
  {
    id: "football-soccer-hard-7",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is VAR in soccer?",
    options: ["A video review system", "Video Assistant Referee for checking goals and penalties", "A VAR management system", "Venue Action Review"],
    correctAnswer: 1,
    explanation: "VAR (Video Assistant Referee) allows match officials to review decisions using video footage."
  },
  {
    id: "football-soccer-hard-8",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Pelé played for Pele CF and became a legend there.",
    correctAnswer: 0,
    explanation: "False. While Pelé is the naming of many clubs, he famously played for Santos and then New York Cosmos."
  },
  {
    id: "football-soccer-hard-9",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The length of a soccer match can be extended for injury time or stoppages.",
    correctAnswer: 1,
    explanation: "True. Referees add extra time at the end of each half to compensate for injuries, substitutions, and other delays."
  },
  {
    id: "football-soccer-hard-10",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Ronaldinho was a famous Brazilian soccer player known for his dribbling skills.",
    correctAnswer: 1,
    explanation: "True. Ronaldinho was renowned for his exceptional dribbling ability and played for European clubs including Barcelona."
  }
] satisfies QuizQuestion[];
