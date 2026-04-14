// Rainforests Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const rainforestsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rainforests-easy-1",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest rainforest in the world?",
    options: ["Congo Rainforest", "Amazon Rainforest", "Southeast Asian Rainforest", "Australian Rainforest"],
    correctAnswer: 1,
    explanation: "The Amazon Rainforest spans over 2.1 million square miles."
  },
  {
    id: "rainforests-easy-2",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which continent has no rainforests?",
    options: ["Europe", "Antarctica", "Australia", "Asia"],
    correctAnswer: 1,
    explanation: "Antarctica is too cold and dry to support rainforest ecosystems."
  },
  {
    id: "rainforests-easy-3",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What percentage of all species on Earth live in rainforests?",
    options: ["About 25%", "About 50%", "About 75%", "About 90%"],
    correctAnswer: 1,
    explanation: "Rainforests contain approximately 50% of all terrestrial species."
  },
  {
    id: "rainforests-easy-4",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How much rainfall do rainforests typically receive annually?",
    options: ["Less than 40 inches", "40-80 inches", "80-100 inches", "More than 100 inches"],
    correctAnswer: 3,
    explanation: "Rainforests receive more than 100 inches of rain annually."
  },
  {
    id: "rainforests-easy-5",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the primary cause of rainforest deforestation?",
    options: ["Natural disasters", "Cattle ranching and agriculture", "Water pollution", "Overhunting"],
    correctAnswer: 1,
    explanation: "Cattle ranching and agriculture are the leading causes of deforestation."
  },
  {
    id: "rainforests-easy-6",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What are the four layers of a rainforest?",
    options: ["Top, Middle, Bottom, Floor", "Emergent, Canopy, Understory, Forest Floor", "Upper, Middle, Lower, Ground", "Sky, Trees, Shrubs, Soil"],
    correctAnswer: 1,
    explanation: "Rainforests have four distinct layers: Emergent, Canopy, Understory, and Forest Floor."
  },
  {
    id: "rainforests-easy-7",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which rainforest is the largest in South America?",
    options: ["Daintree Rainforest", "Amazon Rainforest", "Tongass Rainforest", "Tongass National Forest"],
    correctAnswer: 1,
    explanation: "The Amazon Rainforest is the largest rainforest in South America."
  },
  {
    id: "rainforests-easy-8",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Rainforests produce about 20% of Earth's oxygen.",
    correctAnswer: 1,
    explanation: "True. Tropical rainforests are often called the 'lungs of the Earth'."
  },
  {
    id: "rainforests-easy-9",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Most rainforest animals live in the trees.",
    correctAnswer: 1,
    explanation: "True. The vast majority of rainforest animals are arboreal (tree-dwelling)."
  },
  {
    id: "rainforests-easy-10",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Rainforests are found only near the equator.",
    correctAnswer: 0,
    explanation: "False. Rainforests exist in Africa, South America, Asia, and even Australia."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rainforests-medium-1",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many acres of rainforest are lost daily?",
    options: ["About 1,000 acres", "About 50,000 acres", "About 100,000 acres", "About 200,000 acres"],
    correctAnswer: 2,
    explanation: "Approximately 137 acres of rainforest are lost every minute globally."
  },
  {
    id: "rainforests-medium-2",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of rainforest plants have medicinal properties?",
    options: ["About 10%", "About 25%", "About 50%", "About 75%"],
    correctAnswer: 1,
    explanation: "About 25% of rainforest plants have medicinal properties."
  },
  {
    id: "rainforests-medium-3",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which rainforest covers multiple countries including Brazil?",
    options: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Tongass National Forest"],
    correctAnswer: 1,
    explanation: "The Amazon spans 9 countries, with Brazil holding 60%."
  },
  {
    id: "rainforests-medium-4",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the densest layer of a rainforest?",
    options: ["Emergent layer", "Canopy", "Understory", "Forest floor"],
    correctAnswer: 2,
    explanation: "The Understory is the densest layer with thick vegetation."
  },
  {
    id: "rainforests-medium-5",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How much light reaches the forest floor in a rainforest?",
    options: ["Less than 1%", "About 5%", "About 25%", "About 50%"],
    correctAnswer: 0,
    explanation: "Less than 1% of sunlight reaches the forest floor due to dense canopy."
  },
  {
    id: "rainforests-medium-6",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What role do epiphytes play in a rainforest?",
    options: ["Decompose dead matter", "Grow on trees without harming them", "Control predators", "Produce fruits"],
    correctAnswer: 1,
    explanation: "Epiphytes are plants that grow on trees without parasitizing them."
  },
  {
    id: "rainforests-medium-7",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many indigenous tribes are estimated to live in rainforests?",
    options: ["About 50", "About 200", "About 400", "About 1,000"],
    correctAnswer: 2,
    explanation: "Approximately 400+ indigenous tribes live in rainforests."
  },
  {
    id: "rainforests-medium-8",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Rainforests are found only between the Tropics of Cancer and Capricorn.",
    correctAnswer: 0,
    explanation: "False. Temperate rainforests exist outside these zones."
  },
  {
    id: "rainforests-medium-9",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "The Amazon Rainforest covers about 5.5 million square kilometers.",
    correctAnswer: 1,
    explanation: "True. The Amazon covers approximately 5.5 million km²."
  },
  {
    id: "rainforests-medium-10",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Jaguars are the apex predators of the Amazon Rainforest.",
    correctAnswer: 1,
    explanation: "True. Jaguars are the largest cats in the Amazon."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "rainforests-hard-1",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of Earth's rainforests have been destroyed?",
    options: ["About 20%", "About 40%", "About 60%", "About 80%"],
    correctAnswer: 1,
    explanation: "Approximately 50% of the world's rainforests have been destroyed."
  },
  {
    id: "rainforests-hard-2",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a 'flying river' in the context of rainforests?",
    options: ["Airborne animals", "Water vapor released by trees", "Flying fish", "Air currents"],
    correctAnswer: 1,
    explanation: "Trees release water vapor creating 'flying rivers' of moisture."
  },
  {
    id: "rainforests-hard-3",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many plant species were discovered in rainforests in 2022-2023?",
    options: ["About 50 species", "About 100 species", "About 200 species", "About 500 species"],
    correctAnswer: 2,
    explanation: "Hundreds of new plant and animal species are discovered annually."
  },
  {
    id: "rainforests-hard-4",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of global pharmaceutical drugs have rainforest plant origins?",
    options: ["About 10%", "About 25%", "About 35%", "About 50%"],
    correctAnswer: 2,
    explanation: "Approximately 25% of modern drugs contain rainforest plant ingredients."
  },
  {
    id: "rainforests-hard-5",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Congo Rainforest's role in global climate?",
    options: ["Minimal impact", "Stores carbon and produces oxygen", "Creates local weather only", "Minor carbon storage"],
    correctAnswer: 1,
    explanation: "The Congo stores massive carbon and produces crucial oxygen."
  },
  {
    id: "rainforests-hard-6",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many insect species are estimated to exist in rainforests?",
    options: ["About 1 million", "About 5 million", "About 10 million", "About 50 million"],
    correctAnswer: 2,
    explanation: "Scientists estimate millions of insect species in rainforests."
  },
  {
    id: "rainforests-hard-7",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a 'tipping point' for rainforest destruction?",
    options: ["Point of no return", "Loss threshold for ecosystem collapse", "Maximum deforestation", "All of the above"],
    correctAnswer: 3,
    explanation: "Scientists warn of tipping points beyond which ecosystems collapse."
  },
  {
    id: "rainforests-hard-8",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Amazon is responsible for about 10% of global oxygen production.",
    correctAnswer: 1,
    explanation: "True. Despite myth, the Amazon produces significant oxygen."
  },
  {
    id: "rainforests-hard-9",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Rainforest biodiversity has already been fully cataloged and studied.",
    correctAnswer: 0,
    explanation: "False. Most rainforest species remain unknown and unstudied."
  },
  {
    id: "rainforests-hard-10",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Great Green Wall project aims to restore rainforests in Africa.",
    correctAnswer: 0,
    explanation: "False. The Great Green Wall restores Sahel ecosystems, not rainforests."
  }
] satisfies QuizQuestion[];
