// Endangered Species Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const endangeredSpeciesQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "endangered-species-easy-1",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which animal is critically endangered and native to China?",
    options: ["Tiger", "Giant Panda", "Elephant", "Gorilla"],
    correctAnswer: 1,
    explanation: "The giant panda is an iconic endangered species from China."
  },
  {
    id: "endangered-species-easy-2",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the main threat to endangered species?",
    options: ["Natural disasters", "Habitat loss", "Old age", "Migration"],
    correctAnswer: 1,
    explanation: "Habitat loss is the primary threat to most endangered species."
  },
  {
    id: "endangered-species-easy-3",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which large ape is most endangered?",
    options: ["Gorilla", "Orangutan", "Chimpanzee", "Bonobo"],
    correctAnswer: 0,
    explanation: "Mountain gorillas are among the most critically endangered apes."
  },
  {
    id: "endangered-species-easy-4",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which marine animal is critically endangered?",
    options: ["Great White Shark", "Blue Whale", "Sea Turtle", "Dolphin"],
    correctAnswer: 2,
    explanation: "Sea turtles are particularly vulnerable to plastic pollution and fishing."
  },
  {
    id: "endangered-species-easy-5",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the conservation status color code system called?",
    options: ["Traffic light system", "IUCN Red List", "Rainbow scale", "Color codes"],
    correctAnswer: 1,
    explanation: "The IUCN Red List categorizes conservation status of all species."
  },
  {
    id: "endangered-species-easy-6",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird species went extinct and was famously brought back?",
    options: ["California Condor", "Dodo", "Passenger Pigeon", "Labrador Duck"],
    correctAnswer: 0,
    explanation: "California Condors were bred in captivity and reintroduced to the wild."
  },
  {
    id: "endangered-species-easy-7",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does IUCN stand for?",
    options: ["International Unusual Conservation Network", "International Union for Conservation of Nature", "International Union of Conservation Networks", "Integrated Union for Conservation Needs"],
    correctAnswer: 1,
    explanation: "IUCN is the International Union for Conservation of Nature."
  },
  {
    id: "endangered-species-easy-8",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "There are only about 3,900 tigers left in the wild.",
    correctAnswer: 1,
    explanation: "True. Tiger populations have declined dramatically due to poaching and habitat loss."
  },
  {
    id: "endangered-species-easy-9",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Polar bears are endangered due to climate change.",
    correctAnswer: 1,
    explanation: "True. Polar bears are threatened by melting sea ice from global warming."
  },
  {
    id: "endangered-species-easy-10",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Black rhinoceros have become extinct in the wild.",
    correctAnswer: 0,
    explanation: "False. Black rhinoceros are critically endangered but not extinct in the wild."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "endangered-species-medium-1",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many species are estimated to go extinct daily?",
    options: ["About 10", "About 50", "About 100", "About 200"],
    correctAnswer: 2,
    explanation: "Approximately 100-150 species are estimated to go extinct daily."
  },
  {
    id: "endangered-species-medium-2",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a 'extinct in the wild' species?",
    options: ["Gone from Earth", "Not found in nature but only in captivity", "Rare in the wild", "Recently discovered"],
    correctAnswer: 1,
    explanation: "Extinct in the wild means species survive only in captivity."
  },
  {
    id: "endangered-species-medium-3",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which primate species is most numerous but endangered?",
    options: ["Chimpanzee", "Western lowland gorilla", "Bonobo", "Orangutan"],
    correctAnswer: 2,
    explanation: "Bonobos are critically endangered with only 3,000-5,000 remaining."
  },
  {
    id: "endangered-species-medium-4",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many giant pandas are estimated in the wild today?",
    options: ["About 500", "About 1,000", "About 1,800", "About 2,500"],
    correctAnswer: 2,
    explanation: "There are approximately 1,800 giant pandas in the wild."
  },
  {
    id: "endangered-species-medium-5",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of mammals are endangered?",
    options: ["About 15%", "About 25%", "About 35%", "About 45%"],
    correctAnswer: 2,
    explanation: "Approximately 35% of mammal species are threatened with extinction."
  },
  {
    id: "endangered-species-medium-6",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Asian rhino species has only about 80 individuals left?",
    options: ["Indian rhino", "Javan rhino", "Sumatran rhino", "Bornean rhino"],
    correctAnswer: 2,
    explanation: "The Sumatran rhino has fewer than 80 individuals remaining."
  },
  {
    id: "endangered-species-medium-7",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the main cause of amphibian decline?",
    options: ["Overhunting", "Pollution and habitat loss", "Invasive species", "All of the above"],
    correctAnswer: 3,
    explanation: "Multiple factors contribute to amphibian decline worldwide."
  },
  {
    id: "endangered-species-medium-8",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "The Arabian oryx was the first species to recover from the brink of extinction.",
    correctAnswer: 1,
    explanation: "True. The Arabian oryx was reintroduced through the 'Operation Oryx' program."
  },
  {
    id: "endangered-species-medium-9",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "The California condor has only 500 individuals left.",
    correctAnswer: 0,
    explanation: "False. There are now about 500+ California condors (both wild and captive)."
  },
  {
    id: "endangered-species-medium-10",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Deforestation is a major threat to rainforest species.",
    correctAnswer: 1,
    explanation: "True. Deforestation destroys habitats for countless species."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "endangered-species-hard-1",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of bird species are threatened with extinction?",
    options: ["About 10%", "About 20%", "About 30%", "About 40%"],
    correctAnswer: 1,
    explanation: "Approximately 1 in 8 bird species (13-14%) are threatened."
  },
  {
    id: "endangered-species-hard-2",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many species are estimated to be undiscovered?",
    options: ["About 1 million", "About 5 million", "About 8 million", "About 15 million"],
    correctAnswer: 2,
    explanation: "Scientists estimate 5-10 million species remain undiscovered."
  },
  {
    id: "endangered-species-hard-3",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Passenger Pigeon famous for?",
    options: ["Being reintroduced", "Historical extinction (billions to zero)", "Being the rarest bird", "Recent discovery"],
    correctAnswer: 1,
    explanation: "Passenger pigeons went from billions to extinction in ~100 years."
  },
  {
    id: "endangered-species-hard-4",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Mexican animal is critically endangered?",
    options: ["Jaguar", "Vaquita", "Axolotl", "Ocelot"],
    correctAnswer: 1,
    explanation: "The vaquita (porpoise) has only 10-15 individuals left."
  },
  {
    id: "endangered-species-hard-5",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Holocene extinction rate compared to background rates?",
    options: ["10 times faster", "100 times faster", "1,000 times faster", "10,000 times faster"],
    correctAnswer: 2,
    explanation: "Current extinction rates are about 1,000 times natural background rates."
  },
  {
    id: "endangered-species-hard-6",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many species did CITES (Convention on International Trade) protect in 1973?",
    options: ["About 100 species", "About 500 species", "About 1,000 species", "About 38,000 species"],
    correctAnswer: 3,
    explanation: "CITES now protects over 38,000 animal and plant species."
  },
  {
    id: "endangered-species-hard-7",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a 'keystone species'?",
    options: ["Most endangered species", "Species crucial to ecosystem balance", "Largest species", "Oldest species"],
    correctAnswer: 1,
    explanation: "Keystone species have disproportionate ecological importance."
  },
  {
    id: "endangered-species-hard-8",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Javan tiger is functionally extinct in the wild.",
    correctAnswer: 1,
    explanation: "True. The Javan tiger was last documented in 1976."
  },
  {
    id: "endangered-species-hard-9",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Pangolins are the most trafficked mammals due to poaching.",
    correctAnswer: 1,
    explanation: "True. Over 1 million pangolins are poached annually."
  },
  {
    id: "endangered-species-hard-10",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The northern white rhino is now functionally extinct.",
    correctAnswer: 1,
    explanation: "True. Only 2 females remain; breeding is no longer possible."
  }
] satisfies QuizQuestion[];
