// Marine Biology Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const marineBiologyQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "marine-biology-easy-1",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest animal in the ocean?",
    options: ["Great White Shark", "Blue Whale", "Giant Squid", "Orca"],
    correctAnswer: 1,
    explanation: "The blue whale is the largest animal ever known to have existed, weighing up to 200 tons."
  },
  {
    id: "marine-biology-easy-2",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do coral reefs primarily consist of?",
    options: ["Plants", "Rocks", "Living organisms", "Sand"],
    correctAnswer: 2,
    explanation: "Coral reefs are built by tiny living organisms called coral polyps that create limestone skeletons."
  },
  {
    id: "marine-biology-easy-3",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do fish use to breathe underwater?",
    options: ["Lungs", "Gills", "Spiracles", "Stomata"],
    correctAnswer: 1,
    explanation: "Fish use gills to extract oxygen from water, allowing them to breathe underwater."
  },
  {
    id: "marine-biology-easy-4",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the most abundant creature in the ocean?",
    options: ["Jellyfish", "Krill", "Fish", "Plankton"],
    correctAnswer: 3,
    explanation: "Plankton are the most abundant creatures in the ocean and form the base of the marine food chain."
  },
  {
    id: "marine-biology-easy-5",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a group of dolphins called?",
    options: ["Pod", "School", "Herd", "Flock"],
    correctAnswer: 0,
    explanation: "A group of dolphins is called a pod, typically containing 10 to 30 individuals."
  },
  {
    id: "marine-biology-easy-6",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the main diet of baleen whales?",
    options: ["Fish", "Seals", "Krill and plankton", "Squid"],
    correctAnswer: 2,
    explanation: "Baleen whales filter krill and plankton from water using baleen plates instead of teeth."
  },
  {
    id: "marine-biology-easy-7",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the Great Barrier Reef?",
    options: ["A large underwater mountain", "The world's largest coral reef system", "A deep ocean trench", "A group of islands"],
    correctAnswer: 1,
    explanation: "The Great Barrier Reef is the world's largest coral reef system, located off Australia."
  },
  {
    id: "marine-biology-easy-8",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Dolphins are mammals, not fish.",
    correctAnswer: 1,
    explanation: "True. Dolphins are marine mammals that breathe air and nurse their young with milk."
  },
  {
    id: "marine-biology-easy-9",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Sharks have bones like most other fish.",
    correctAnswer: 0,
    explanation: "False. Sharks have a skeleton made of cartilage, not bone, making them cartilaginous fish."
  },
  {
    id: "marine-biology-easy-10",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Seahorses are actually fish.",
    correctAnswer: 1,
    explanation: "True. Despite their unusual appearance, seahorses are fish with a prehensile tail and swim slowly."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "marine-biology-medium-1",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's oxygen is produced by ocean phytoplankton?",
    options: ["About 25%", "About 50%", "About 70%", "About 90%"],
    correctAnswer: 1,
    explanation: "Ocean phytoplankton produce approximately 50-80% of Earth's oxygen through photosynthesis."
  },
  {
    id: "marine-biology-medium-2",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the process by which plants convert sunlight into energy called?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Oxidation"],
    correctAnswer: 1,
    explanation: "Photosynthesis is the process by which plants and phytoplankton convert sunlight into chemical energy."
  },
  {
    id: "marine-biology-medium-3",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is an organism that eats dead organic matter?",
    options: ["Herbivore", "Carnivore", "Detritivore", "Omnivore"],
    correctAnswer: 2,
    explanation: "Detritivores feed on dead organic matter and play a crucial role in ocean nutrient cycling."
  },
  {
    id: "marine-biology-medium-4",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the term for a marine animal that has tentacles?",
    options: ["Tentacled", "Cephalopod", "Appendage bearer", "Polyp"],
    correctAnswer: 1,
    explanation: "Cephalopods include octopuses, squids, and cuttlefish - all characterized by arms or tentacles."
  },
  {
    id: "marine-biology-medium-5",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How deep is the twilight zone of the ocean?",
    options: ["200-1000 meters", "1000-4000 meters", "4000-6000 meters", "6000-11000 meters"],
    correctAnswer: 0,
    explanation: "The twilight zone (or mesopelagic zone) extends from about 200-1000 meters deep, where some light penetrates."
  },
  {
    id: "marine-biology-medium-6",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is bioluminescence?",
    options: ["Light produced by living organisms", "Reflection of sunlight", "Thermal radiation", "Fluorescence from minerals"],
    correctAnswer: 0,
    explanation: "Bioluminescence is the production and emission of light by living organisms, common in deep-sea creatures."
  },
  {
    id: "marine-biology-medium-7",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which marine animal is known for its ability to change color?",
    options: ["Seahorse", "Cuttlefish", "Pufferfish", "Clownfish"],
    correctAnswer: 1,
    explanation: "Cuttlefish are masters of camouflage, rapidly changing color by controlling pigment cells called chromatophores."
  },
  {
    id: "marine-biology-medium-8",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The Mariana Trench is the deepest part of the world's oceans.",
    correctAnswer: 1,
    explanation: "True. The Challenger Deep in the Mariana Trench is nearly 36,000 feet deep in the western Pacific."
  },
  {
    id: "marine-biology-medium-9",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Coral bleaching is caused by water temperature changes.",
    correctAnswer: 1,
    explanation: "True. When water temperature increases, corals expel their symbiotic algae, causing bleaching and potential death."
  },
  {
    id: "marine-biology-medium-10",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Starfish are fish despite their name.",
    correctAnswer: 0,
    explanation: "False. Starfish (sea stars) are echinoderms, not fish. They have no brain, blood, or heart."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "marine-biology-hard-1",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the term for the relationship between a clownfish and a sea anemone?",
    options: ["Parasitism", "Predation", "Mutualism", "Competition"],
    correctAnswer: 2,
    explanation: "Mutualism is a symbiotic relationship where both organisms benefit - the clownfish gains protection while cleaning the anemone."
  },
  {
    id: "marine-biology-hard-2",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the primary layer of the ocean where photosynthesis occurs?",
    options: ["Abyssal zone", "Photic zone", "Bathaphotic zone", "Hadal zone"],
    correctAnswer: 1,
    explanation: "The photic zone is the upper layer (0-200 meters) where light penetrates and photosynthesis occurs."
  },
  {
    id: "marine-biology-hard-3",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the fluid that fills the internal cavity of a cnidarian?",
    options: ["Hemocoel", "Gastrovascular cavity", "Coelom", "Blastocoel"],
    correctAnswer: 1,
    explanation: "Cnidarians like corals and jellyfish have a gastrovascular cavity that serves digestive and circulatory functions."
  },
  {
    id: "marine-biology-hard-4",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many arms does a typical octopus have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 1,
    explanation: "Octopuses have 8 arms (not tentacles), each lined with suckers that provide tremendous dexterity and grip."
  },
  {
    id: "marine-biology-hard-5",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the term for the migration of marine organisms between surface and deep water daily?",
    options: ["Vertical stratification", "Diel vertical migration", "Horizontal migration", "Seasonal migration"],
    correctAnswer: 1,
    explanation: "Diel vertical migration is when trillions of tons of zooplankton move up at night and down during the day."
  },
  {
    id: "marine-biology-hard-6",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What adaptation allows fish to maintain neutral buoyancy?",
    options: ["Fins", "Swim bladder", "Scales", "Fins and scales"],
    correctAnswer: 1,
    explanation: "A swim bladder (gas bladder) filled with gas allows fish to control their buoyancy at different depths."
  },
  {
    id: "marine-biology-hard-7",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the dominant primary producer in ocean ecosystems?",
    options: ["Seaweed", "Kelp", "Phytoplankton", "Seagrass"],
    correctAnswer: 2,
    explanation: "Phytoplankton are microscopic plants that are the primary producers supporting most marine food webs."
  },
  {
    id: "marine-biology-hard-8",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Whales are fish, not mammals.",
    correctAnswer: 0,
    explanation: "False. Whales are marine mammals - they breathe air, have warm blood, and nurse their young with milk."
  },
  {
    id: "marine-biology-hard-9",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The blood of octopuses is blue due to copper-containing hemocyanin.",
    correctAnswer: 1,
    explanation: "True. Octopuses use hemocyanin (with copper) instead of hemoglobin (with iron) for oxygen transport."
  },
  {
    id: "marine-biology-hard-10",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Sea turtles return to the same beach where they were born to lay eggs.",
    correctAnswer: 1,
    explanation: "True. Sea turtles exhibit strong natal philopatry, returning to their birth beaches to nest."
  }
] satisfies QuizQuestion[];
