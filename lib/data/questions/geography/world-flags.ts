// World Flags Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const worldFlagsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "world-flags-easy-1",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What symbol appears on the flag of Canada?",
    options: ["Maple leaf", "Beaver", "Moose", "Bear"],
    correctAnswer: 0,
    explanation: "Canada's flag features a red maple leaf in the center, adopted in 1965 as a national symbol."
  },
  {
    id: "world-flags-easy-2",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many stars are on the flag of the United States?",
    options: ["48", "49", "50", "51"],
    correctAnswer: 2,
    explanation: "The U.S. flag has 50 stars, representing each of the 50 states in the union."
  },
  {
    id: "world-flags-easy-3",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What three colors appear on the French flag?",
    options: ["Red, white, and blue", "Blue, white, and red", "Red, yellow, and blue", "Green, white, and red"],
    correctAnswer: 1,
    explanation: "The French tricolor consists of blue, white, and red vertical stripes, adopted during the French Revolution."
  },
  {
    id: "world-flags-easy-4",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country's flag is a simple red circle on a white background?",
    options: ["China", "South Korea", "Japan", "Vietnam"],
    correctAnswer: 2,
    explanation: "Japan's flag, called the Hinomaru, features a red disc representing the sun on a white background."
  },
  {
    id: "world-flags-easy-5",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What colors make up the flag of Germany?",
    options: ["Black, red, and yellow", "Red, white, and blue", "Black, red, and green", "Yellow, blue, and red"],
    correctAnswer: 0,
    explanation: "The German flag has three horizontal stripes of black, red, and gold (yellow), representing unity and freedom."
  },
  {
    id: "world-flags-easy-6",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has a flag with a white cross on a red background?",
    options: ["Switzerland", "Sweden", "Austria", "Denmark"],
    correctAnswer: 0,
    explanation: "Switzerland's flag features a white cross centered on a red square background, unique as one of only two square national flags."
  },
  {
    id: "world-flags-easy-7",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What celestial object appears on the flag of Turkey?",
    options: ["Sun", "Star only", "Moon and star", "Comet"],
    correctAnswer: 2,
    explanation: "Turkey's flag features a white crescent moon and a five-pointed star on a red background."
  },
  {
    id: "world-flags-easy-8",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The flag of the United Kingdom is commonly called the Union Jack.",
    correctAnswer: 1,
    explanation: "True. The UK flag is officially called the Union Flag, but is widely known as the Union Jack, especially when flown at sea."
  },
  {
    id: "world-flags-easy-9",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Brazil's flag contains a green background with a yellow diamond.",
    correctAnswer: 1,
    explanation: "True. Brazil's flag features a green field with a yellow diamond containing a blue globe with stars and a white banner."
  },
  {
    id: "world-flags-easy-10",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "The flag of Australia features the Union Jack in its design.",
    correctAnswer: 1,
    explanation: "True. The Australian flag includes the Union Jack in the upper left corner, reflecting its historical ties to Britain."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "world-flags-medium-1",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the cross pattern featured on Scandinavian flags?",
    options: ["Latin Cross", "Nordic Cross", "Celtic Cross", "Greek Cross"],
    correctAnswer: 1,
    explanation: "The Nordic Cross is an off-center cross that appears on the flags of Denmark, Sweden, Norway, Finland, and Iceland."
  },
  {
    id: "world-flags-medium-2",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which country's flag features a cedar tree?",
    options: ["Lebanon", "Cyprus", "Palestine", "Jordan"],
    correctAnswer: 0,
    explanation: "Lebanon's flag features a green cedar tree in the center, symbolizing holiness, eternity, and peace."
  },
  {
    id: "world-flags-medium-3",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many colors are on the South African flag?",
    options: ["Four", "Five", "Six", "Seven"],
    correctAnswer: 2,
    explanation: "South Africa's flag has six colors: black, gold, green, white, red, and blue, representing unity and diversity."
  },
  {
    id: "world-flags-medium-4",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which country's flag is the only one that features a firearm?",
    options: ["Guatemala", "Haiti", "Mozambique", "Angola"],
    correctAnswer: 2,
    explanation: "Mozambique's flag features an AK-47 rifle, representing defense and vigilance, along with a hoe and book."
  },
  {
    id: "world-flags-medium-5",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What do the 13 stripes on the U.S. flag represent?",
    options: ["The first 13 presidents", "The 13 original colonies", "The 13 founding fathers", "The 13 amendments"],
    correctAnswer: 1,
    explanation: "The 13 stripes represent the 13 original British colonies that declared independence in 1776."
  },
  {
    id: "world-flags-medium-6",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which country has a dragon on its flag?",
    options: ["Wales", "Bhutan", "Both Wales and Bhutan", "Mongolia"],
    correctAnswer: 2,
    explanation: "Both Wales and Bhutan feature dragons on their flags. Wales has a red dragon, while Bhutan has a white dragon."
  },
  {
    id: "world-flags-medium-7",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What color is NOT on the flag of India?",
    options: ["Orange", "White", "Green", "Yellow"],
    correctAnswer: 3,
    explanation: "India's flag has saffron (orange), white, and green horizontal stripes with a blue wheel in the center. Yellow is not present."
  },
  {
    id: "world-flags-medium-8",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Nepal is the only country with a non-rectangular national flag.",
    correctAnswer: 1,
    explanation: "True. Nepal's flag is the only non-quadrilateral national flag, consisting of two stacked triangular pennants."
  },
  {
    id: "world-flags-medium-9",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The flags of Monaco and Indonesia are identical.",
    correctAnswer: 0,
    explanation: "False. While both flags are red and white horizontal bicolors, they have different proportions and slightly different shades of red."
  },
  {
    id: "world-flags-medium-10",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Libya once had a flag that was entirely one color with no symbols.",
    correctAnswer: 1,
    explanation: "True. From 1977 to 2011, Libya's flag was entirely green with no other colors or symbols, the only national flag to be a single solid color."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "world-flags-hard-1",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which flag features the Ashoka Chakra, a 24-spoke wheel?",
    options: ["India", "Sri Lanka", "Myanmar", "Bangladesh"],
    correctAnswer: 0,
    explanation: "India's flag features the Ashoka Chakra, a 24-spoke wheel in navy blue at the center of the white stripe."
  },
  {
    id: "world-flags-hard-2",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is unique about the flag of Paraguay?",
    options: ["It changes colors at night", "It has different emblems on each side", "It is triangular", "It features a photograph"],
    correctAnswer: 1,
    explanation: "Paraguay's flag is unique as it has different emblems on the front (national coat of arms) and reverse (treasury seal) sides."
  },
  {
    id: "world-flags-hard-3",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which country's flag features the Southern Cross constellation?",
    options: ["Australia and New Zealand", "Brazil and Australia", "All of the above", "Chile and Argentina"],
    correctAnswer: 2,
    explanation: "Australia, New Zealand, Brazil, Samoa, and Papua New Guinea all feature the Southern Cross constellation on their flags."
  },
  {
    id: "world-flags-hard-4",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What do the 27 stars on Brazil's flag represent?",
    options: ["Brazilian states and the Federal District", "Days in the month", "Founding fathers", "Major cities"],
    correctAnswer: 0,
    explanation: "The 27 stars represent Brazil's 26 states and the Federal District (Brasília), arranged to show the night sky over Rio on November 15, 1889."
  },
  {
    id: "world-flags-hard-5",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which country's flag is the oldest continuously used national flag design?",
    options: ["Denmark", "Scotland", "Japan", "Austria"],
    correctAnswer: 0,
    explanation: "Denmark's flag, the Dannebrog, dates back to 1219 and is considered the oldest continuously used national flag design."
  },
  {
    id: "world-flags-hard-6",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What does the Portuguese word on Brazil's flag, 'Ordem e Progresso', mean?",
    options: ["Peace and Justice", "Order and Progress", "Liberty and Unity", "Strength and Honor"],
    correctAnswer: 1,
    explanation: "'Ordem e Progresso' means 'Order and Progress', inspired by French philosopher Auguste Comte's positivism."
  },
  {
    id: "world-flags-hard-7",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which two countries had nearly identical flags until 2010, causing confusion?",
    options: ["Chad and Romania", "Ireland and Ivory Coast", "Luxembourg and Netherlands", "Colombia and Ecuador"],
    correctAnswer: 0,
    explanation: "Chad and Romania both had blue, yellow, and red vertical stripes until Romania added its coat of arms in 1948 (removed in 1989)."
  },
  {
    id: "world-flags-hard-8",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Union Jack is asymmetrical and has a correct way up.",
    correctAnswer: 1,
    explanation: "True. The Union Jack is asymmetrical; the white stripes of St Patrick's Cross are offset, making it possible to fly it upside down."
  },
  {
    id: "world-flags-hard-9",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Switzerland and Vatican City are the only two countries with square flags.",
    correctAnswer: 1,
    explanation: "True. Switzerland has a red square flag with a white cross, while Vatican City has a square yellow and white flag."
  },
  {
    id: "world-flags-hard-10",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The flag of Cyprus shows the geographical shape of the island.",
    correctAnswer: 1,
    explanation: "True. Cyprus's flag uniquely features a copper-orange silhouette of the island itself above two green olive branches symbolizing peace."
  }
] satisfies QuizQuestion[];
