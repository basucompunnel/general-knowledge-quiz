// Gaming Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const gamingQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "gaming-easy-1",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the PlayStation?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correctAnswer: 2,
    explanation: "Sony released the first PlayStation in 1994."
  },
  {
    id: "gaming-easy-2",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is Mario's profession in the Super Mario games?",
    options: ["Chef", "Plumber", "Carpenter", "Doctor"],
    correctAnswer: 1,
    explanation: "Mario is a plumber by profession."
  },
  {
    id: "gaming-easy-3",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company makes Xbox?",
    options: ["Microsoft", "Sony", "Nintendo", "Sega"],
    correctAnswer: 0,
    explanation: "Microsoft developed and produces the Xbox gaming console."
  },
  {
    id: "gaming-easy-4",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What year was the Nintendo Entertainment System (NES) released in North America?",
    options: ["1983", "1985", "1987", "1989"],
    correctAnswer: 1,
    explanation: "The NES was released in North America in 1985."
  },
  {
    id: "gaming-easy-5",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the Game Boy?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correctAnswer: 1,
    explanation: "Nintendo released the iconic Game Boy handheld in 1989."
  },
  {
    id: "gaming-easy-6",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the goal in 'Pac-Man'?",
    options: ["Reach the finish line", "Eat dots and avoid ghosts", "Collect coins", "Defeat all enemies"],
    correctAnswer: 1,
    explanation: "In Pac-Man, the player eats dots while avoiding ghosts."
  },
  {
    id: "gaming-easy-7",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the main character in 'The Legend of Zelda'?",
    options: ["Zelda", "Link", "Ganon", "Impa"],
    correctAnswer: 1,
    explanation: "Link is the protagonist of The Legend of Zelda series."
  },
  {
    id: "gaming-easy-8",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Minecraft is the best-selling video game of all time.",
    correctAnswer: 1,
    explanation: "True. Minecraft has sold over 300 million copies worldwide."
  },
  {
    id: "gaming-easy-9",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "'Fortnite' is a free-to-play battle royale game.",
    correctAnswer: 1,
    explanation: "True. Fortnite is free-to-play and one of the most popular games."
  },
  {
    id: "gaming-easy-10",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "The Nintendo Switch is a handheld console.",
    correctAnswer: 1,
    explanation: "True. The Switch is a hybrid handheld/home console."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "gaming-medium-1",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which console is considered to have won the 'sixth generation console wars'?",
    options: ["PlayStation 2", "Xbox", "GameCube", "Dreamcast"],
    correctAnswer: 0,
    explanation: "The PlayStation 2 was the best-selling console of the sixth generation."
  },
  {
    id: "gaming-medium-2",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the best-selling franchise in gaming?",
    options: ["Mario", "Call of Duty", "Tetris", "Pokemon"],
    correctAnswer: 2,
    explanation: "Tetris is the best-selling video game franchise of all time."
  },
  {
    id: "gaming-medium-3",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year did 'The Legend of Zelda: Breath of the Wild' release?",
    options: ["2015", "2016", "2017", "2018"],
    correctAnswer: 2,
    explanation: "Breath of the Wild was released in 2017 for Nintendo Switch."
  },
  {
    id: "gaming-medium-4",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the protagonist's name in 'The Elder Scrolls' series?",
    options: ["You (player character)", "The Dragonborn", "Both A and B", "Alduin"],
    correctAnswer: 2,
    explanation: "While titles vary, the player character is often called the Dragonborn."
  },
  {
    id: "gaming-medium-5",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which company developed 'God of War'?",
    options: ["Naughty Dog", "Santa Monica Studio", "Guerrilla Games", "Insomniac Games"],
    correctAnswer: 1,
    explanation: "Santa Monica Studio developed the God of War franchise."
  },
  {
    id: "gaming-medium-6",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is 'Esports'?",
    options: ["Electronic sports competitions", "Sports video games", "Virtual reality sports", "Online sports betting"],
    correctAnswer: 0,
    explanation: "Esports refers to competitive video gaming at a professional level."
  },
  {
    id: "gaming-medium-7",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which game is known for its battle royale mode?",
    options: ["Call of Duty", "Fortnite", "PUBG", "All of the above"],
    correctAnswer: 3,
    explanation: "All these games feature popular battle royale modes."
  },
  {
    id: "gaming-medium-8",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "'Pac-Man' was originally called 'Puck Man' in Japan.",
    correctAnswer: 1,
    explanation: "True. The name was changed for the international release."
  },
  {
    id: "gaming-medium-9",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The PlayStation 5 was released in 2020.",
    correctAnswer: 1,
    explanation: "True. The PS5 was released in November 2020."
  },
  {
    id: "gaming-medium-10",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "'Streetfighter' is a turn-based RPG game.",
    correctAnswer: 0,
    explanation: "False. Street Fighter is a real-time fighting game."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "gaming-hard-1",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the main character's name in 'The Last of Us'?",
    options: ["Joel Miller", "Ellie Williams", "Tommy Miller", "Jesse"],
    correctAnswer: 0,
    explanation: "Joel Miller is the main protagonist of The Last of Us."
  },
  {
    id: "gaming-hard-2",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which game won 'Game of the Year' at The Game Awards 2023?",
    options: ["Baldur's Gate 3", "Alan Wake 2", "Starfield", "Cyberpunk 2077"],
    correctAnswer: 0,
    explanation: "Baldur's Gate 3 won Game of the Year at The Game Awards 2023."
  },
  {
    id: "gaming-hard-3",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the highest price ever paid for a video game?",
    options: ["$60", "$70", "Limited editions can cost thousands", "Video games are never sold physically for high prices"],
    correctAnswer: 2,
    explanation: "Limited edition and collector's versions can fetch thousands of dollars."
  },
  {
    id: "gaming-hard-4",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "When was the first 'Super Mario Bros' game released?",
    options: ["1983", "1984", "1985", "1986"],
    correctAnswer: 2,
    explanation: "Super Mario Bros was released in 1985 for the NES."
  },
  {
    id: "gaming-hard-5",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many main entries are in the 'Main' series Halo franchise?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    explanation: "Main series Halo games numbered 1-6, with Infinite as a soft reboot."
  },
  {
    id: "gaming-hard-6",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the fastest-selling game of all time?",
    options: ["Call of Duty: Modern Warfare", "Diablo IV", "Elden Ring", "Grand Theft Auto V"],
    correctAnswer: 0,
    explanation: "Call of Duty: Modern Warfare is among the fastest-selling games."
  },
  {
    id: "gaming-hard-7",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What platform did 'Pong' originally release on?",
    options: ["Home console", "Arcade", "Computer", "Handheld"],
    correctAnswer: 1,
    explanation: "Pong originated as an arcade game in 1972."
  },
  {
    id: "gaming-hard-8",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "'Tetris' was created by a Russian programmer named Alexey Pajitnov.",
    correctAnswer: 1,
    explanation: "True. Pajitnov created Tetris in 1985."
  },
  {
    id: "gaming-hard-9",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first 3D video game was 'Battlezone'.",
    correctAnswer: 1,
    explanation: "True. Battlezone (1980) was a pioneering 3D arcade game."
  },
  {
    id: "gaming-hard-10",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "'Final Fantasy VII' was originally released on PlayStation.",
    correctAnswer: 1,
    explanation: "True. FF7 was released on PlayStation in 1997."
  }
] satisfies QuizQuestion[];
