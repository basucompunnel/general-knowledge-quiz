// Famous Landmarks Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousLandmarksQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-landmarks-easy-1",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country is home to the Statue of Liberty?",
    options: ["France", "Canada", "United States", "Mexico"],
    correctAnswer: 2,
    explanation: "The Statue of Liberty is located in New York Harbor, USA, though it was a gift from France in 1886."
  },
  {
    id: "famous-landmarks-easy-2",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where is the Eiffel Tower located?",
    options: ["London", "Paris", "Rome", "Berlin"],
    correctAnswer: 1,
    explanation: "The Eiffel Tower is in Paris, France, built in 1889 for the World's Fair."
  },
  {
    id: "famous-landmarks-easy-3",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which country would you find the pyramids of Giza?",
    options: ["Mexico", "Egypt", "Peru", "Iraq"],
    correctAnswer: 1,
    explanation: "The famous pyramids of Giza are located in Egypt, near Cairo, built around 2560 BC."
  },
  {
    id: "famous-landmarks-easy-4",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which landmark features a clock tower in London?",
    options: ["Big Ben", "Tower Bridge", "London Eye", "Buckingham Palace"],
    correctAnswer: 0,
    explanation: "Big Ben is the nickname for the Great Bell in the clock tower (Elizabeth Tower) at the Palace of Westminster in London."
  },
  {
    id: "famous-landmarks-easy-5",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where is the Colosseum located?",
    options: ["Athens", "Rome", "Istanbul", "Cairo"],
    correctAnswer: 1,
    explanation: "The Colosseum is an ancient amphitheater in Rome, Italy, built between 70-80 AD."
  },
  {
    id: "famous-landmarks-easy-6",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country is home to the Taj Mahal?",
    options: ["Pakistan", "Bangladesh", "India", "Nepal"],
    correctAnswer: 2,
    explanation: "The Taj Mahal is located in Agra, India, built by Emperor Shah Jahan as a tomb for his wife."
  },
  {
    id: "famous-landmarks-easy-7",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where is the Great Wall primarily located?",
    options: ["Japan", "Korea", "China", "Mongolia"],
    correctAnswer: 2,
    explanation: "The Great Wall of China stretches across northern China, built over centuries to protect against invasions."
  },
  {
    id: "famous-landmarks-easy-8",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Leaning Tower of Pisa is located in Italy.",
    correctAnswer: 1,
    explanation: "True. The Leaning Tower of Pisa is in Pisa, Italy, famous for its unintended tilt due to unstable foundation soil."
  },
  {
    id: "famous-landmarks-easy-9",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The Sphinx is located next to the pyramids of Giza.",
    correctAnswer: 1,
    explanation: "True. The Great Sphinx is located on the Giza Plateau, directly in front of the pyramids."
  },
  {
    id: "famous-landmarks-easy-10",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Mount Rushmore is located in California.",
    correctAnswer: 0,
    explanation: "False. Mount Rushmore is located in South Dakota, featuring carved faces of four U.S. presidents."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-landmarks-medium-1",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In what year was the Statue of Liberty dedicated?",
    options: ["1876", "1886", "1896", "1906"],
    correctAnswer: 1,
    explanation: "The Statue of Liberty was dedicated on October 28, 1886, a gift from France to the United States."
  },
  {
    id: "famous-landmarks-medium-2",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which city is home to the Sydney Opera House?",
    options: ["Melbourne", "Brisbane", "Sydney", "Perth"],
    correctAnswer: 2,
    explanation: "The Sydney Opera House is in Sydney, Australia, opened in 1973 and designed by Jørn Utzon."
  },
  {
    id: "famous-landmarks-medium-3",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What ancient city is home to Petra, the famous rose-red city carved into rock?",
    options: ["Jordan", "Syria", "Lebanon", "Israel"],
    correctAnswer: 0,
    explanation: "Petra is located in Jordan, an ancient Nabataean city famous for its rock-cut architecture dating to around 300 BC."
  },
  {
    id: "famous-landmarks-medium-4",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who designed the Sagrada Família in Barcelona?",
    options: ["Le Corbusier", "Frank Lloyd Wright", "Antoni Gaudí", "Oscar Niemeyer"],
    correctAnswer: 2,
    explanation: "Antoni Gaudí designed the Sagrada Família, a basilica in Barcelona that began construction in 1882 and remains unfinished."
  },
  {
    id: "famous-landmarks-medium-5",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In which country is Machu Picchu located?",
    options: ["Bolivia", "Peru", "Ecuador", "Colombia"],
    correctAnswer: 1,
    explanation: "Machu Picchu is an ancient Incan citadel in Peru, built in the 15th century at 7,970 feet above sea level."
  },
  {
    id: "famous-landmarks-medium-6",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the famous palace complex in Beijing's Forbidden City?",
    options: ["Imperial Palace", "Summer Palace", "Forbidden Palace", "Palace Museum"],
    correctAnswer: 3,
    explanation: "The Palace Museum is the official name of Beijing's Forbidden City complex, home to Chinese emperors from 1420-1912."
  },
  {
    id: "famous-landmarks-medium-7",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which landmark was originally built as a fortress and then became a palace before becoming a museum?",
    options: ["The Hermitage", "The Louvre", "Buckingham Palace", "Versailles"],
    correctAnswer: 1,
    explanation: "The Louvre in Paris was originally built as a fortress in 1190, became a royal palace, and is now the world's largest art museum."
  },
  {
    id: "famous-landmarks-medium-8",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Taj Mahal was built as a mausoleum.",
    correctAnswer: 1,
    explanation: "True. The Taj Mahal is a mausoleum built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal, completed in 1653."
  },
  {
    id: "famous-landmarks-medium-9",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Christ the Redeemer statue is located in Rio de Janeiro, Brazil.",
    correctAnswer: 1,
    explanation: "True. The iconic Christ the Redeemer statue stands atop Mount Corcovado in Rio de Janeiro, completed in 1931."
  },
  {
    id: "famous-landmarks-medium-10",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Stonehenge is located in Scotland.",
    correctAnswer: 0,
    explanation: "False. Stonehenge is located in Wiltshire, England, a prehistoric monument dating to around 3000 BC."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-landmarks-hard-1",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many years did it take to build the Taj Mahal?",
    options: ["12 years", "17 years", "22 years", "32 years"],
    correctAnswer: 2,
    explanation: "The Taj Mahal took approximately 22 years to build, from 1631 to 1653, employing thousands of artisans."
  },
  {
    id: "famous-landmarks-hard-2",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the original intended height of the Washington Monument?",
    options: ["500 feet", "555 feet", "600 feet", "650 feet"],
    correctAnswer: 1,
    explanation: "The Washington Monument is 555 feet 5⅛ inches (169.046 m) tall, making it the world's tallest stone structure and obelisk."
  },
  {
    id: "famous-landmarks-hard-3",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many stones make up the Great Pyramid of Giza?",
    options: ["About 1.3 million", "About 2.3 million", "About 3.3 million", "About 4.3 million"],
    correctAnswer: 1,
    explanation: "The Great Pyramid contains approximately 2.3 million stone blocks, each weighing an average of 2.5 tons."
  },
  {
    id: "famous-landmarks-hard-4",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which ancient wonder of the world is the only one still standing?",
    options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens of Babylon", "Lighthouse of Alexandria"],
    correctAnswer: 1,
    explanation: "The Great Pyramid of Giza is the only ancient wonder still intact. The other six have been destroyed by earthquakes, fires, or wars."
  },
  {
    id: "famous-landmarks-hard-5",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the total length of the Great Wall of China including all branches?",
    options: ["13,000 miles", "15,000 miles", "17,000 miles", "21,000 miles"],
    correctAnswer: 3,
    explanation: "Including all branches and sections, the Great Wall spans approximately 21,196 kilometers (13,171 miles)."
  },
  {
    id: "famous-landmarks-hard-6",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many years was the Eiffel Tower the world's tallest structure?",
    options: ["21 years", "31 years", "41 years", "51 years"],
    correctAnswer: 2,
    explanation: "The Eiffel Tower held the title from 1889 until 1930 (41 years), when the Chrysler Building in New York surpassed it."
  },
  {
    id: "famous-landmarks-hard-7",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What material gives the Statue of Liberty its green color?",
    options: ["Paint", "Copper patina", "Bronze oxidation", "Green stone"],
    correctAnswer: 1,
    explanation: "The Statue of Liberty is made of copper, which has oxidized over time to create the distinctive green patina (copper carbonate)."
  },
  {
    id: "famous-landmarks-hard-8",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",
    correctAnswer: 1,
    explanation: "True. It held the record from around 2560 BC until Lincoln Cathedral was completed in 1311 AD."
  },
  {
    id: "famous-landmarks-hard-9",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Colosseum could hold approximately 80,000 spectators.",
    correctAnswer: 1,
    explanation: "True. The Colosseum had a capacity of 50,000 to 80,000 spectators and featured retractable awnings for shade."
  },
  {
    id: "famous-landmarks-hard-10",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Angkor Wat in Cambodia is the largest religious monument in the world.",
    correctAnswer: 1,
    explanation: "True. Angkor Wat covers 162.6 hectares (402 acres), making it the largest religious monument in the world, built in the 12th century."
  }
] satisfies QuizQuestion[];
