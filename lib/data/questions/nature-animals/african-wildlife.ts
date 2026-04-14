// African Wildlife Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const africanWildlifeQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "african-wildlife-easy-1",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
    correctAnswer: 1,
    explanation: "The cheetah can reach speeds up to 70 mph (113 km/h)."
  },
  {
    id: "african-wildlife-easy-2",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest land animal?",
    options: ["Hippopotamus", "Rhinoceros", "Giraffe", "African Elephant"],
    correctAnswer: 3,
    explanation: "The African elephant can weigh up to 14,000 pounds."
  },
  {
    id: "african-wildlife-easy-3",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do lions hunt in groups called?",
    options: ["Herds", "Packs", "Prides", "Troops"],
    correctAnswer: 2,
    explanation: "Lions live and hunt in groups called prides."
  },
  {
    id: "african-wildlife-easy-4",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How tall can an adult giraffe grow?",
    options: ["Up to 12 feet", "Up to 15 feet", "Up to 18 feet", "Up to 20 feet"],
    correctAnswer: 2,
    explanation: "Giraffes can grow up to 18 feet tall, making them the tallest land animal."
  },
  {
    id: "african-wildlife-easy-5",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the zebra's main defense mechanism?",
    options: ["Speed", "Stripes for camouflage", "Kicking with powerful hooves", "Herd group protection"],
    correctAnswer: 3,
    explanation: "Zebras rely on their herd for protection and use their powerful kicks when threatened."
  },
  {
    id: "african-wildlife-easy-6",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does a hippopotamus primarily eat?",
    options: ["Meat", "Fish", "Grass", "Trees"],
    correctAnswer: 2,
    explanation: "Hippopotamuses are herbivores that graze on grass at night."
  },
  {
    id: "african-wildlife-easy-7",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest African cat?",
    options: ["Leopard", "Cheetah", "Lion", "Serval"],
    correctAnswer: 2,
    explanation: "The lion is the largest African cat, weighing up to 570 pounds."
  },
  {
    id: "african-wildlife-easy-8",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Lions are the only cats that live in groups called prides.",
    correctAnswer: 1,
    explanation: "True. Lions are unique among cats for their social structure."
  },
  {
    id: "african-wildlife-easy-9",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "African elephants have larger ears than Asian elephants.",
    correctAnswer: 1,
    explanation: "True. African elephants have much larger ears for cooling."
  },
  {
    id: "african-wildlife-easy-10",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Rhinoceros are herbivores.",
    correctAnswer: 1,
    explanation: "True. Rhinoceros are herbivores that eat grass and leaves."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "african-wildlife-medium-1",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How often do lions sleep per day?",
    options: ["4 hours", "8 hours", "12-20 hours", "24 hours"],
    correctAnswer: 2,
    explanation: "Lions are very lazy and sleep 12-20 hours daily."
  },
  {
    id: "african-wildlife-medium-2",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a group of hippopotamuses called?",
    options: ["A herd", "A pod", "A school", "A pod or bloat (underwater)"],
    correctAnswer: 3,
    explanation: "A group of hippos is called a pod (underwater) or bloat (on land)."
  },
  {
    id: "african-wildlife-medium-3",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How long is a giraffe's tongue?",
    options: ["12 inches", "18 inches", "20-22 inches", "24 inches"],
    correctAnswer: 2,
    explanation: "A giraffe's tongue can be 20-22 inches long for reaching leaves."
  },
  {
    id: "african-wildlife-medium-4",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the African wild dog also known as?",
    options: ["Hyena", "Painted wolf", "Bush dog", "Jackal"],
    correctAnswer: 1,
    explanation: "African wild dogs are also called painted wolves due to their coat patterns."
  },
  {
    id: "african-wildlife-medium-5",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many horns does a rhinoceros have?",
    options: ["1 horn", "2 horns (some species 1)", "3 horns", "4 horns"],
    correctAnswer: 1,
    explanation: "Most rhinos have 2 horns, but some species have only 1."
  },
  {
    id: "african-wildlife-medium-6",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What do leopards use their spots for?",
    options: ["Attracting mates", "Camouflage", "Temperature regulation", "All of the above"],
    correctAnswer: 1,
    explanation: "Leopards' spots (rosettes) provide excellent camouflage in trees and grass."
  },
  {
    id: "african-wildlife-medium-7",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How fast can a wildebeest run?",
    options: ["30 mph", "40 mph", "50 mph", "60 mph"],
    correctAnswer: 2,
    explanation: "Wildebeest can run up to 50 mph, helping them escape predators."
  },
  {
    id: "african-wildlife-medium-8",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Cheetahs can retract their claws like other cats.",
    correctAnswer: 0,
    explanation: "False. Cheetahs cannot retract their claws; they're semi-fixed for traction."
  },
  {
    id: "african-wildlife-medium-9",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Zebras and horses can interbreed to create a zonkey.",
    correctAnswer: 1,
    explanation: "True. Zebras and horses can interbreed and produce offspring called zonkeys."
  },
  {
    id: "african-wildlife-medium-10",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Crocodiles can grow up to 20 feet long.",
    correctAnswer: 1,
    explanation: "True. Some Nile crocodiles can reach up to 20 feet in length."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "african-wildlife-hard-1",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the scientific name for the African elephant?",
    options: ["Loxodonta africana", "Elephas africanus", "Loxodonta africanus", "Elephanta africana"],
    correctAnswer: 0,
    explanation: "The African elephant's scientific name is Loxodonta africana."
  },
  {
    id: "african-wildlife-hard-2",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many teeth does an African elephant have?",
    options: ["20 teeth", "24 teeth", "28 teeth", "32 teeth"],
    correctAnswer: 2,
    explanation: "African elephants have 28 teeth throughout their lifetime."
  },
  {
    id: "african-wildlife-hard-3",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the lifespan of an African lion in the wild?",
    options: ["10-12 years", "13-15 years", "16-18 years", "19-21 years"],
    correctAnswer: 1,
    explanation: "Wild lions typically live 13-15 years, longer in captivity."
  },
  {
    id: "african-wildlife-hard-4",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many different species of hyena live in Africa?",
    options: ["1 species", "2 species", "3 species", "4 species"],
    correctAnswer: 2,
    explanation: "Three hyena species live in Africa: spotted, striped, and brown hyenas."
  },
  {
    id: "african-wildlife-hard-5",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of big cats are found in Africa?",
    options: ["About 30%", "About 50%", "About 70%", "About 90%"],
    correctAnswer: 1,
    explanation: "Africa is home to approximately 50% of the world's big cats."
  },
  {
    id: "african-wildlife-hard-6",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many spots does a cheetah have?",
    options: ["About 2,000", "About 2,500", "About 3,000", "About 3,500"],
    correctAnswer: 2,
    explanation: "Cheetahs have approximately 2,000-3,000 solid black spots."
  },
  {
    id: "african-wildlife-hard-7",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the average population of a lion pride?",
    options: ["3-5 lions", "5-15 lions", "15-25 lions", "25-35 lions"],
    correctAnswer: 1,
    explanation: "A typical lion pride consists of 5-15 individuals."
  },
  {
    id: "african-wildlife-hard-8",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Hyenas are more closely related to dogs than to cats.",
    correctAnswer: 0,
    explanation: "False. Hyenas are actually more closely related to cats than to dogs."
  },
  {
    id: "african-wildlife-hard-9",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "An African elephant's trunk contains over 40,000 muscles.",
    correctAnswer: 1,
    explanation: "True. An elephant's trunk has over 40,000 muscles and nerves."
  },
  {
    id: "african-wildlife-hard-10",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "A giraffe's heart weighs about 25 pounds.",
    correctAnswer: 1,
    explanation: "True. A giraffe's heart weighs approximately 25 pounds."
  }
] satisfies QuizQuestion[];
