// Olympics Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const olympicsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "olympics-easy-1",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where were the ancient Olympic Games held?",
    options: ["Athens", "Olympia", "Sparta", "Corinth"],
    correctAnswer: 1,
    explanation: "The ancient Olympics were held in Olympia, Greece, starting in 776 BC."
  },
  {
    id: "olympics-easy-2",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How often are the Summer Olympics held?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    correctAnswer: 2,
    explanation: "The Summer Olympics occur every four years."
  },
  {
    id: "olympics-easy-3",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do the five Olympic rings represent?",
    options: ["Five continents", "Five countries", "Five events", "Five medals"],
    correctAnswer: 0,
    explanation: "The five Olympic rings symbolize the five inhabited continents united by Olympism."
  },
  {
    id: "olympics-easy-4",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What are the three medal colors for Olympic winners?",
    options: ["Silver, Gold, Bronze", "Gold, Silver, Bronze", "Gold, Platinum, Bronze", "Gold, Silver, Copper"],
    correctAnswer: 1,
    explanation: "Olympic medals are Gold (1st place), Silver (2nd place), and Bronze (3rd place)."
  },
  {
    id: "olympics-easy-5",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the Olympic motto?",
    options: ["Faster, Higher, Stronger", "Citius, Altius, Fortius", "Both A and B", "Unity, Peace, Sport"],
    correctAnswer: 2,
    explanation: "The Olympic motto 'Citius, Altius, Fortius' translates to 'Faster, Higher, Stronger'."
  },
  {
    id: "olympics-easy-6",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many events typically take place during the Summer Olympics?",
    options: ["About 100", "About 200", "About 300", "About 400"],
    correctAnswer: 2,
    explanation: "The Summer Olympics typically feature around 300+ events across various sports."
  },
  {
    id: "olympics-easy-7",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the Winter Olympics?",
    options: ["Summer Olympics held in winter", "Olympic games held in winter with winter sports", "Practice for Summer Olympics", "Regional competition"],
    correctAnswer: 1,
    explanation: "The Winter Olympics feature winter sports such as skiing, ice skating, and ice hockey."
  },
  {
    id: "olympics-easy-8",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Michael Phelps is the most decorated Olympian of all time.",
    correctAnswer: 1,
    explanation: "True. Phelps has won 28 Olympic medals (23 gold, 3 silver, 2 bronze)."
  },
  {
    id: "olympics-easy-9",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "The Olympics are held in the same location every year.",
    correctAnswer: 0,
    explanation: "False. Different cities host the Olympics every four years."
  },
  {
    id: "olympics-easy-10",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Ancient Olympians competed naked in the games.",
    correctAnswer: 1,
    explanation: "True. Athletes in ancient Greece competed nude in the Olympic Games as a tradition."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "olympics-medium-1",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In which year were the first modern Olympic Games held?",
    options: ["1892", "1896", "1900", "1904"],
    correctAnswer: 1,
    explanation: "The first modern Olympics were held in Athens, Greece in 1896."
  },
  {
    id: "olympics-medium-2",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who revived the Olympic Games in modern times?",
    options: ["Pierre de Coubertin", "Baron de Coubertin", "Henri de Coubertin", "Jacques de Coubertin"],
    correctAnswer: 0,
    explanation: "Pierre de Coubertin, a French educator, founded the International Olympic Committee and revived the Games."
  },
  {
    id: "olympics-medium-3",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which country has hosted the most Summer Olympics?",
    options: ["Greece", "France", "Germany", "United States"],
    correctAnswer: 3,
    explanation: "The United States has hosted the Summer Olympics four times (1904, 1932, 1984, 1996)."
  },
  {
    id: "olympics-medium-4",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year did women first compete in the modern Olympics?",
    options: ["1888", "1900", "1912", "1920"],
    correctAnswer: 1,
    explanation: "Women first competed at the 1900 Paris Olympics, though in limited events."
  },
  {
    id: "olympics-medium-5",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Olympic sport requires a horse?",
    options: ["Pentathlon", "Equestrian", "Polo", "Archery"],
    correctAnswer: 1,
    explanation: "Equestrian events (jumping, dressage, eventing) are Olympic sports that require horses."
  },
  {
    id: "olympics-medium-6",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many gold medals did Jesse Owens win at the 1936 Berlin Olympics?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "Jesse Owens won 4 gold medals at the 1936 Berlin Olympics in track and field."
  },
  {
    id: "olympics-medium-7",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "At which Olympics did the torch relay tradition start?",
    options: ["1912 Stockholm", "1932 Los Angeles", "1936 Berlin", "1948 London"],
    correctAnswer: 2,
    explanation: "The Olympic torch relay tradition began at the 1936 Berlin Olympics."
  },
  {
    id: "olympics-medium-8",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Olympic athletes must be amateurs and cannot be professionals.",
    correctAnswer: 0,
    explanation: "False. Since 1988, professional athletes have been allowed to compete in the Olympics."
  },
  {
    id: "olympics-medium-9",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Simone Biles is an American gymnast who won multiple Olympic gold medals.",
    correctAnswer: 1,
    explanation: "True. Simone Biles is one of the most decorated American gymnasts in Olympic history."
  },
  {
    id: "olympics-medium-10",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "The Winter Olympics and Summer Olympics are held in the same year.",
    correctAnswer: 0,
    explanation: "False. Since 1992, the Winter Olympics have been held in a different year than the Summer Olympics."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "olympics-hard-1",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Olympics were cancelled due to World War II?",
    options: ["1936 Berlin", "1940 Tokyo", "1944 London", "Both B and C"],
    correctAnswer: 3,
    explanation: "Both the 1940 Tokyo Olympics and 1944 London Olympics were cancelled due to World War II."
  },
  {
    id: "olympics-hard-2",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many total medals has Michael Phelps won in his Olympic career?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 3,
    explanation: "Michael Phelps has won 28 Olympic medals, the most of any Olympian."
  },
  {
    id: "olympics-hard-3",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which city hosted the 2020 Summer Olympics (held in 2021)?",
    options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correctAnswer: 1,
    explanation: "Tokyo, Japan hosted the 2020 Summer Olympics, which were postponed to 2021 due to COVID-19."
  },
  {
    id: "olympics-hard-4",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the maximum number of Olympic Games a city can host?",
    options: ["One time", "Two times", "Three times", "Unlimited"],
    correctAnswer: 3,
    explanation: "There is no limit to how many times a city can host the Olympics, though most cities host once."
  },
  {
    id: "olympics-hard-5",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many countries participated in the first modern Olympics in 1896?",
    options: ["10", "14", "20", "30"],
    correctAnswer: 1,
    explanation: "14 countries participated in the first modern Olympic Games in Athens in 1896."
  },
  {
    id: "olympics-hard-6",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which athlete holds the record for most individual gold medals?",
    options: ["Mark Spitz", "Michael Phelps", "Carl Lewis", "Larisa Latynina"],
    correctAnswer: 1,
    explanation: "Michael Phelps holds the record for most individual gold medals with 23 golds."
  },
  {
    id: "olympics-hard-7",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What Olympic event was added in 2016 for the first time?",
    options: ["Golf", "Rugby Sevens", "Skateboarding", "Both A and B"],
    correctAnswer: 3,
    explanation: "Golf and Rugby Sevens were both added to the Olympic Games in 2016, along with other new sports."
  },
  {
    id: "olympics-hard-8",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Women were first allowed to compete in the Olympics in 1900.",
    correctAnswer: 1,
    explanation: "True. Women first competed at the 1900 Paris Olympics, with 22 women competing."
  },
  {
    id: "olympics-hard-9",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The Olympic Games have been held continuously without interruption since 1896.",
    correctAnswer: 0,
    explanation: "False. The Olympics were not held in 1916 (WWI), 1940, and 1944 (WWII)."
  },
  {
    id: "olympics-hard-10",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The Olympic Games have been held in every continent except Africa and Antarctica.",
    correctAnswer: 0,
    explanation: "False. Olympics have been held in Africa (2020 Tokyo had African nations, but never hosted in Africa). Antarctica has never hosted."
  }
] satisfies QuizQuestion[];
