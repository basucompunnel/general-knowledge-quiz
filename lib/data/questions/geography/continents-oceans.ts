// Continents & Oceans Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const continentsOceansQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "continents-oceans-easy-1",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many continents are there?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2,
    explanation: "Most models recognize seven continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America."
  },
  {
    id: "continents-oceans-easy-2",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the largest ocean?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Pacific Ocean is the largest ocean on Earth, covering more than 63 million square miles."
  },
  {
    id: "continents-oceans-easy-3",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Antarctica", "Australia", "South America"],
    correctAnswer: 2,
    explanation: "Australia (Oceania) is the smallest continent, with an area of about 3 million square miles."
  },
  {
    id: "continents-oceans-easy-4",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which ocean is located between Africa and Australia?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 2,
    explanation: "The Indian Ocean lies between Africa to the west and Australia to the east."
  },
  {
    id: "continents-oceans-easy-5",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which continent has the largest population?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correctAnswer: 1,
    explanation: "Asia is the most populous continent, home to over 4.7 billion people, including China and India."
  },
  {
    id: "continents-oceans-easy-6",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the coldest continent?",
    options: ["Antarctica", "Arctic", "Asia", "Europe"],
    correctAnswer: 0,
    explanation: "Antarctica is the coldest continent, with temperatures dropping below -80°C (-112°F) in winter."
  },
  {
    id: "continents-oceans-easy-7",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which ocean is the smallest?",
    options: ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],
    correctAnswer: 0,
    explanation: "The Arctic Ocean is the smallest ocean, covering about 5.4 million square miles around the North Pole."
  },
  {
    id: "continents-oceans-easy-8",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Africa is connected to Asia by the Isthmus of Suez.",
    correctAnswer: 1,
    explanation: "True. Africa and Asia are connected by the Isthmus of Suez, where the Suez Canal was built."
  },
  {
    id: "continents-oceans-easy-9",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Atlantic Ocean is larger than the Pacific Ocean.",
    correctAnswer: 0,
    explanation: "False. The Pacific Ocean is much larger, covering about 63 million square miles compared to the Atlantic's 41 million."
  },
  {
    id: "continents-oceans-easy-10",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "South America and North America are connected by land.",
    correctAnswer: 1,
    explanation: "True. They are connected by the Isthmus of Panama, a narrow strip of land in Central America."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "continents-oceans-medium-1",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["Approximately 60%", "Approximately 71%", "Approximately 80%", "Approximately 50%"],
    correctAnswer: 1,
    explanation: "Oceans cover approximately 71% of Earth's surface, with land making up only 29%."
  },
  {
    id: "continents-oceans-medium-2",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which continent is sometimes called Oceania?",
    options: ["Antarctica", "Australia", "South America", "Africa"],
    correctAnswer: 1,
    explanation: "Australia is often referred to as Oceania when including nearby Pacific islands in the continental region."
  },
  {
    id: "continents-oceans-medium-3",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the deepest point in Earth's oceans?",
    options: ["Mariana Trench", "Java Trench", "Puerto Rico Trench", "Tonga Trench"],
    correctAnswer: 0,
    explanation: "The Mariana Trench in the Pacific Ocean is the deepest point, reaching about 36,000 feet (11,000 meters) deep."
  },
  {
    id: "continents-oceans-medium-4",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which two continents are entirely in the Southern Hemisphere?",
    options: ["Africa and South America", "Antarctica and Australia", "Australia and South America", "Antarctica and Africa"],
    correctAnswer: 1,
    explanation: "Antarctica and Australia are the only continents located entirely in the Southern Hemisphere."
  },
  {
    id: "continents-oceans-medium-5",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the largest desert continent?",
    options: ["Africa", "Antarctica", "Asia", "Australia"],
    correctAnswer: 1,
    explanation: "Antarctica is actually the world's largest desert due to its extremely low precipitation, despite being covered in ice."
  },
  {
    id: "continents-oceans-medium-6",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which ocean was named after a Greek Titan?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Atlantic Ocean is named after Atlas, the Greek Titan who held up the sky."
  },
  {
    id: "continents-oceans-medium-7",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which continent has land in all four hemispheres?",
    options: ["Asia", "Africa", "Europe", "South America"],
    correctAnswer: 1,
    explanation: "Africa extends into all four hemispheres: Northern, Southern, Eastern, and Western."
  },
  {
    id: "continents-oceans-medium-8",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Antarctica is a desert.",
    correctAnswer: 1,
    explanation: "True. Antarctica is the world's largest desert due to receiving less than 2 inches of precipitation annually."
  },
  {
    id: "continents-oceans-medium-9",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Pacific Ocean touches all seven continents.",
    correctAnswer: 0,
    explanation: "False. The Pacific Ocean does not touch Africa or Europe. It borders Asia, Australia, North and South America, and Antarctica."
  },
  {
    id: "continents-oceans-medium-10",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Europe and Asia are technically one landmass called Eurasia.",
    correctAnswer: 1,
    explanation: "True. Europe and Asia form a continuous landmass, separated only by cultural and historical definitions, not water."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "continents-oceans-hard-1",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the average depth of the world's oceans?",
    options: ["1,200 meters (3,900 feet)", "2,400 meters (7,900 feet)", "3,688 meters (12,100 feet)", "5,000 meters (16,400 feet)"],
    correctAnswer: 2,
    explanation: "The average depth of the world's oceans is approximately 3,688 meters (12,100 feet)."
  },
  {
    id: "continents-oceans-hard-2",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which tectonic feature runs through the middle of the Atlantic Ocean?",
    options: ["The Ring of Fire", "The Mid-Atlantic Ridge", "The San Andreas Fault", "The Mariana Trench"],
    correctAnswer: 1,
    explanation: "The Mid-Atlantic Ridge is an underwater mountain range running through the Atlantic, where tectonic plates are spreading apart."
  },
  {
    id: "continents-oceans-hard-3",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the super-continent that existed approximately 335 million years ago?",
    options: ["Laurasia", "Gondwana", "Pangaea", "Rodinia"],
    correctAnswer: 2,
    explanation: "Pangaea was a super-continent that existed from about 335 to 175 million years ago before breaking into today's continents."
  },
  {
    id: "continents-oceans-hard-4",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which continent is moving north at the fastest rate due to tectonic plate movement?",
    options: ["Africa", "Australia", "South America", "Antarctica"],
    correctAnswer: 1,
    explanation: "Australia is moving north at about 7 centimeters per year, one of the fastest continental movements on Earth."
  },
  {
    id: "continents-oceans-hard-5",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of Earth's fresh water is locked in Antarctica's ice?",
    options: ["About 50%", "About 60%", "About 70%", "About 90%"],
    correctAnswer: 2,
    explanation: "Antarctica contains approximately 70% of Earth's fresh water, frozen in its massive ice sheets."
  },
  {
    id: "continents-oceans-hard-6",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which ocean has the most volcanic activity?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2,
    explanation: "The Pacific Ocean has the most volcanic activity due to the 'Ring of Fire,' a horseshoe of active volcanoes and earthquake zones."
  },
  {
    id: "continents-oceans-hard-7",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the point in the Pacific Ocean that is farthest from any land?",
    options: ["Point Nemo", "Point Zero", "Point Ultima", "Point Oceanus"],
    correctAnswer: 0,
    explanation: "Point Nemo (officially the Oceanic Pole of Inaccessibility) is over 1,600 miles from the nearest land."
  },
  {
    id: "continents-oceans-hard-8",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Southern Ocean was officially recognized as the fifth ocean in 2000.",
    correctAnswer: 1,
    explanation: "True. The International Hydrographic Organization recognized the Southern Ocean as a distinct ocean in 2000."
  },
  {
    id: "continents-oceans-hard-9",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Arctic Ocean is entirely frozen year-round.",
    correctAnswer: 0,
    explanation: "False. While much of the Arctic Ocean is ice-covered, significant portions melt during summer months, especially with climate change."
  },
  {
    id: "continents-oceans-hard-10",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Ural Mountains serve as the traditional boundary between Europe and Asia.",
    correctAnswer: 1,
    explanation: "True. The Ural Mountains, along with the Ural River and Caspian Sea, form the conventional boundary between Europe and Asia."
  }
] satisfies QuizQuestion[];
