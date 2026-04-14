// Mountains & Rivers Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const mountainsRiversQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mountains-rivers-easy-1",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the highest mountain in the world?",
    options: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount McKinley"],
    correctAnswer: 2,
    explanation: "Mount Everest stands at 29,032 feet (8,849 meters) above sea level, located in the Himalayas on the Nepal-Tibet border."
  },
  {
    id: "mountains-rivers-easy-2",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the longest river in the world?",
    options: ["The Amazon", "The Nile", "The Yangtze", "The Mississippi"],
    correctAnswer: 1,
    explanation: "The Nile River in Africa is approximately 4,130 miles (6,650 km) long, flowing through 11 countries."
  },
  {
    id: "mountains-rivers-easy-3",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Through which city does the River Thames flow?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 1,
    explanation: "The River Thames flows through London, England, and is about 215 miles long."
  },
  {
    id: "mountains-rivers-easy-4",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which mountain range separates Europe from Asia?",
    options: ["The Alps", "The Himalayas", "The Ural Mountains", "The Rockies"],
    correctAnswer: 2,
    explanation: "The Ural Mountains form the traditional boundary between Europe and Asia, stretching about 1,550 miles through Russia."
  },
  {
    id: "mountains-rivers-easy-5",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which river runs through Paris, France?",
    options: ["The Rhine", "The Thames", "The Seine", "The Danube"],
    correctAnswer: 2,
    explanation: "The Seine River flows through Paris, France, and is approximately 485 miles long."
  },
  {
    id: "mountains-rivers-easy-6",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "On which continent would you find Mount Kilimanjaro?",
    options: ["Asia", "Africa", "South America", "Europe"],
    correctAnswer: 1,
    explanation: "Mount Kilimanjaro is located in Tanzania, Africa. At 19,341 feet, it is Africa's highest mountain."
  },
  {
    id: "mountains-rivers-easy-7",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which river is known as 'Old Man River' in the United States?",
    options: ["The Colorado", "The Mississippi", "The Missouri", "The Ohio"],
    correctAnswer: 1,
    explanation: "The Mississippi River is often called 'Old Man River,' flowing 2,320 miles from Minnesota to the Gulf of Mexico."
  },
  {
    id: "mountains-rivers-easy-8",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Amazon River flows through Brazil.",
    correctAnswer: 1,
    explanation: "True. The Amazon River flows through Brazil and several other South American countries, carrying more water than any other river."
  },
  {
    id: "mountains-rivers-easy-9",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Rocky Mountains are located in North America.",
    correctAnswer: 1,
    explanation: "True. The Rocky Mountains stretch over 3,000 miles from Canada through the United States to New Mexico."
  },
  {
    id: "mountains-rivers-easy-10",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Alps are the highest mountain range in Europe.",
    correctAnswer: 1,
    explanation: "True. The Alps are Europe's highest mountain range, with Mont Blanc reaching 15,774 feet."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mountains-rivers-medium-1",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the second-highest mountain in the world?",
    options: ["Kangchenjunga", "Makalu", "K2", "Lhotse"],
    correctAnswer: 2,
    explanation: "K2, located in the Karakoram Range on the Pakistan-China border, is 28,251 feet (8,611 m) tall."
  },
  {
    id: "mountains-rivers-medium-2",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which river forms part of the border between the United States and Mexico?",
    options: ["Rio Grande", "Colorado River", "Columbia River", "Snake River"],
    correctAnswer: 0,
    explanation: "The Rio Grande forms the border between Texas and Mexico for about 1,250 miles."
  },
  {
    id: "mountains-rivers-medium-3",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the longest mountain range in the world?",
    options: ["The Himalayas", "The Rockies", "The Andes", "The Alps"],
    correctAnswer: 2,
    explanation: "The Andes mountain range extends for approximately 4,300 miles along South America's western coast."
  },
  {
    id: "mountains-rivers-medium-4",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Through how many countries does the Danube River flow?",
    options: ["6 countries", "8 countries", "10 countries", "12 countries"],
    correctAnswer: 2,
    explanation: "The Danube flows through 10 countries: Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Romania, Bulgaria, Moldova, and Ukraine."
  },
  {
    id: "mountains-rivers-medium-5",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the highest mountain in Africa?",
    options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
    correctAnswer: 1,
    explanation: "Mount Kilimanjaro in Tanzania stands at 19,341 feet (5,895 m), making it Africa's highest peak."
  },
  {
    id: "mountains-rivers-medium-6",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which river is sacred in Hinduism?",
    options: ["The Indus", "The Brahmaputra", "The Ganges", "The Yamuna"],
    correctAnswer: 2,
    explanation: "The Ganges (Ganga) is considered sacred in Hinduism, flowing 1,560 miles through India and Bangladesh."
  },
  {
    id: "mountains-rivers-medium-7",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the highest peak in North America?",
    options: ["Mount Logan", "Mount Whitney", "Denali", "Pikes Peak"],
    correctAnswer: 2,
    explanation: "Denali (formerly Mount McKinley) in Alaska stands at 20,310 feet (6,190 m), North America's highest peak."
  },
  {
    id: "mountains-rivers-medium-8",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Andes is the longest mountain range in the world.",
    correctAnswer: 1,
    explanation: "True. The Andes extends for approximately 4,300 miles along South America's western coast through seven countries."
  },
  {
    id: "mountains-rivers-medium-9",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Amazon River is longer than the Nile River.",
    correctAnswer: 0,
    explanation: "False. While the Amazon carries more water, the Nile is generally considered longer at about 4,130 miles versus the Amazon's 4,000 miles."
  },
  {
    id: "mountains-rivers-medium-10",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Yangtze is the longest river in Asia.",
    correctAnswer: 1,
    explanation: "True. The Yangtze River in China is approximately 3,917 miles long, making it Asia's longest river."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mountains-rivers-hard-1",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many of the world's 14 highest peaks (over 8,000 meters) are in the Himalayas?",
    options: ["8 peaks", "10 peaks", "12 peaks", "All 14 peaks"],
    correctAnswer: 3,
    explanation: "All 14 peaks over 8,000 meters (26,247 feet) are located in the Himalayas and Karakoram ranges in Asia."
  },
  {
    id: "mountains-rivers-hard-2",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the discharge rate of the Amazon River compared to the next seven largest rivers combined?",
    options: ["Equal to them", "Twice as much", "Greater than them combined", "Half of them"],
    correctAnswer: 2,
    explanation: "The Amazon's discharge is greater than the next seven largest rivers combined, at about 209,000 cubic meters per second."
  },
  {
    id: "mountains-rivers-hard-3",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which mountain has the highest fatality rate among climbers?",
    options: ["K2", "Annapurna", "Nanga Parbat", "Kangchenjunga"],
    correctAnswer: 1,
    explanation: "Annapurna I has a fatality rate of about 32%, making it statistically the deadliest 8,000-meter peak to climb."
  },
  {
    id: "mountains-rivers-hard-4",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the deepest river gorge in the world?",
    options: ["Grand Canyon (Colorado River)", "Yarlung Tsangpo Canyon", "Cotahuasi Canyon", "Colca Canyon"],
    correctAnswer: 1,
    explanation: "The Yarlung Tsangpo Canyon in Tibet is over 17,000 feet deep at its deepest point, making it the world's deepest gorge."
  },
  {
    id: "mountains-rivers-hard-5",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which river has the largest drainage basin in the world?",
    options: ["The Nile", "The Amazon", "The Congo", "The Mississippi"],
    correctAnswer: 1,
    explanation: "The Amazon basin covers approximately 2.7 million square miles, roughly 40% of South America's land area."
  },
  {
    id: "mountains-rivers-hard-6",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of Mount Everest's height is actually underwater (below sea level) compared to Mauna Kea?",
    options: ["Everest is entirely above sea level", "About 10%", "About 25%", "About 50%"],
    correctAnswer: 0,
    explanation: "Mount Everest is entirely above sea level at 29,032 feet, while Mauna Kea extends 19,700 feet below sea level, making it taller overall."
  },
  {
    id: "mountains-rivers-hard-7",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many tributaries does the Amazon River have?",
    options: ["Over 200", "Over 600", "Over 1,100", "Over 2,000"],
    correctAnswer: 2,
    explanation: "The Amazon River has over 1,100 tributaries, 17 of which are over 1,000 miles long."
  },
  {
    id: "mountains-rivers-hard-8",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Mauna Kea in Hawaii is the tallest mountain when measured from base to peak.",
    correctAnswer: 1,
    explanation: "True. Mauna Kea measures approximately 33,500 feet (10,210 m) from its base on the ocean floor to its summit, surpassing Everest."
  },
  {
    id: "mountains-rivers-hard-9",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Nile River flows from south to north.",
    correctAnswer: 1,
    explanation: "True. The Nile flows northward from its sources in East Africa to the Mediterranean Sea, one of few major rivers flowing north."
  },
  {
    id: "mountains-rivers-hard-10",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Mount Chimborazo in Ecuador is the farthest point from Earth's center.",
    correctAnswer: 1,
    explanation: "True. Due to Earth's equatorial bulge, Chimborazo's summit is about 6,800 feet farther from Earth's center than Everest's peak."
  }
] satisfies QuizQuestion[];
