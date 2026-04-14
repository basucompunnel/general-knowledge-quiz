// Smartphones Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const smartphonesQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "smartphones-easy-1",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company introduced the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correctAnswer: 2,
    explanation: "Apple introduced the first iPhone in 2007."
  },
  {
    id: "smartphones-easy-2",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'OS' stand for in iOS and Android OS?",
    options: ["Operating System", "Online Service", "Open Source", "Official Software"],
    correctAnswer: 0,
    explanation: "OS stands for Operating System."
  },
  {
    id: "smartphones-easy-3",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company developed Android?",
    options: ["Apple", "Microsoft", "Google", "Samsung"],
    correctAnswer: 2,
    explanation: "Google acquired Android Inc. and developed Android OS."
  },
  {
    id: "smartphones-easy-4",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2,
    explanation: "The first iPhone was released on June 29, 2007."
  },
  {
    id: "smartphones-easy-5",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company makes the Samsung Galaxy?",
    options: ["LG", "Samsung", "HTC", "Motorola"],
    correctAnswer: 1,
    explanation: "Samsung manufactures the Galaxy series of smartphones."
  },
  {
    id: "smartphones-easy-6",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'GPS' stand for in smartphones?",
    options: ["Global Personal Service", "Global Positioning System", "General Purpose System", "Global Packet Service"],
    correctAnswer: 1,
    explanation: "GPS is used for location tracking and navigation."
  },
  {
    id: "smartphones-easy-7",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What feature was revolutionary in the first iPhone?",
    options: ["Touchscreen display", "Camera", "App store", "Fingerprint sensor"],
    correctAnswer: 0,
    explanation: "The iPhone's capacitive touchscreen was revolutionary."
  },
  {
    id: "smartphones-easy-8",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "The iPhone has always used iOS as its operating system.",
    correctAnswer: 1,
    explanation: "True. iOS (originally called iPhone OS) has been used since 2007."
  },
  {
    id: "smartphones-easy-9",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Android phones are made by Google only.",
    correctAnswer: 0,
    explanation: "False. Many manufacturers use Android (Samsung, LG, HTC, etc.)."
  },
  {
    id: "smartphones-easy-10",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Smartphones have become more powerful than early personal computers.",
    correctAnswer: 1,
    explanation: "True. Modern smartphones have more processing power than PCs from decades ago."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "smartphones-medium-1",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was the first Android phone released?",
    options: ["2006", "2007", "2008", "2009"],
    correctAnswer: 2,
    explanation: "The first Android phone (T-Mobile G1) was released in 2008."
  },
  {
    id: "smartphones-medium-2",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which company acquired WhatsApp?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
    correctAnswer: 2,
    explanation: "Facebook acquired WhatsApp in 2014 for $19 billion."
  },
  {
    id: "smartphones-medium-3",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is an app store?",
    options: ["A physical shop selling phones", "A digital marketplace for applications", "A store that sells phone plans", "A service center"],
    correctAnswer: 1,
    explanation: "App stores are digital marketplaces for downloading applications."
  },
  {
    id: "smartphones-medium-4",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which phone introduced the notch design?",
    options: ["iPhone X", "iPhone 8", "iPhone 7 Plus", "Samsung Galaxy S8"],
    correctAnswer: 0,
    explanation: "The iPhone X introduced the notch design in 2017."
  },
  {
    id: "smartphones-medium-5",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the most common smartphone operating system?",
    options: ["iOS", "Android", "Windows Phone", "Both A and B equally"],
    correctAnswer: 1,
    explanation: "Android has the larger market share globally."
  },
  {
    id: "smartphones-medium-6",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is '5G' in smartphones?",
    options: ["A phone model", "5th generation wireless technology", "A processor brand", "A display technology"],
    correctAnswer: 1,
    explanation: "5G is the fifth generation of mobile network technology."
  },
  {
    id: "smartphones-medium-7",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Face ID on iPhones?",
    options: ["A username", "Facial recognition technology", "A password manager", "A social feature"],
    correctAnswer: 1,
    explanation: "Face ID uses facial recognition for unlocking iPhones."
  },
  {
    id: "smartphones-medium-8",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Android was developed by Android Inc., which Google acquired.",
    correctAnswer: 1,
    explanation: "True. Google acquired Android Inc. in 2005."
  },
  {
    id: "smartphones-medium-9",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The iPhone 6 Plus was the first large-screen iPhone.",
    correctAnswer: 1,
    explanation: "True. The iPhone 6 Plus introduced larger screens to the iPhone lineup."
  },
  {
    id: "smartphones-medium-10",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Smartphones have more ram than laptops from 10 years ago.",
    correctAnswer: 1,
    explanation: "True. Modern smartphones often have comparable or more RAM than older laptops."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "smartphones-hard-1",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the first touchscreen smartphone?",
    options: ["IBM Simon", "LG Prada", "iPhone", "HTC Dream"],
    correctAnswer: 0,
    explanation: "The IBM Simon (1994) was the first smartphone with a touchscreen."
  },
  {
    id: "smartphones-hard-2",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many models of iPhones have been released as of 2024?",
    options: ["15", "18", "20", "25"],
    correctAnswer: 2,
    explanation: "Apple has released numerous iPhone models including Plus and Pro variants."
  },
  {
    id: "smartphones-hard-3",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What acquisition did Apple announce related to Intel modems?",
    options: ["Bought Intel's modem division", "Acquired a startup", "Developed in-house", "Partnered with Qualcomm"],
    correctAnswer: 0,
    explanation: "Apple acquired Intel's smartphone modem business in 2019."
  },
  {
    id: "smartphones-hard-4",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the primary processor used in iPhones called?",
    options: ["Snapdragon", "Exynos", "A-series chip", "Kirin"],
    correctAnswer: 2,
    explanation: "Apple uses its proprietary A-series chips in iPhones."
  },
  {
    id: "smartphones-hard-5",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Chinese company is the largest smartphone manufacturer?",
    options: ["Huawei", "Oppo", "Xiaomi", "Vivo"],
    correctAnswer: 0,
    explanation: "Huawei is one of the largest smartphone manufacturers globally."
  },
  {
    id: "smartphones-hard-6",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the standard for wireless charging in most phones?",
    options: ["Qi", "NFC", "Bluetooth", "USB-C"],
    correctAnswer: 0,
    explanation: "Qi is the most common wireless charging standard."
  },
  {
    id: "smartphones-hard-7",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of global smartphone market share does Android have?",
    options: ["50%", "60%", "70%", "80%"],
    correctAnswer: 3,
    explanation: "Android commands approximately 70-80% of global smartphone market share."
  },
  {
    id: "smartphones-hard-8",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first smartphone with a touchscreen was the iPhone.",
    correctAnswer: 0,
    explanation: "False. The IBM Simon (1994) and LG Prada (2006) had touchscreens before the iPhone."
  },
  {
    id: "smartphones-hard-9",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "iPhone 15 uses USB-C instead of Lightning.",
    correctAnswer: 1,
    explanation: "True. Apple switched to USB-C connectors with the iPhone 15."
  },
  {
    id: "smartphones-hard-10",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Samsung Galaxy S series is the most popular Android phone line.",
    correctAnswer: 1,
    explanation: "True. The Galaxy S series is Samsung's flagship line and very popular."
  }
] satisfies QuizQuestion[];
