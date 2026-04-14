// Insects Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const insectsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "insects-easy-1",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many legs do insects have?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1,
    explanation: "All insects have six legs, which distinguishes them from arachnids (8 legs)."
  },
  {
    id: "insects-easy-2",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which insect is known for making honey?",
    options: ["Wasp", "Hornet", "Bee", "Fly"],
    correctAnswer: 2,
    explanation: "Honeybees produce honey from flower nectar."
  },
  {
    id: "insects-easy-3",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the life stage of a butterfly before it becomes an adult?",
    options: ["Nymph", "Caterpillar/Larva", "Pupa", "Both B and C"],
    correctAnswer: 3,
    explanation: "Butterflies go through larva (caterpillar) and pupa stages before becoming adults."
  },
  {
    id: "insects-easy-4",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the lifespan of a mayfly?",
    options: ["A few hours to days", "A few weeks", "A few months", "A year"],
    correctAnswer: 0,
    explanation: "Adult mayflies live from a few hours to a few days."
  },
  {
    id: "insects-easy-5",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do grasshoppers use for jumping?",
    options: ["Their wings", "Their strong back legs", "Their antennae", "Their front legs"],
    correctAnswer: 1,
    explanation: "Grasshoppers have powerful hind legs designed for jumping."
  },
  {
    id: "insects-easy-6",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do dragonflies primarily eat?",
    options: ["Plants", "Other insects", "Small fish", "Nectar"],
    correctAnswer: 1,
    explanation: "Dragonflies are voracious hunters that eat other insects."
  },
  {
    id: "insects-easy-7",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many compound eyes do most insects have?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Most insects have two compound eyes."
  },
  {
    id: "insects-easy-8",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Butterflies taste with their feet.",
    correctAnswer: 1,
    explanation: "True. Butterflies have chemoreceptors on their feet to taste plants."
  },
  {
    id: "insects-easy-9",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Ants can carry objects up to 50 times their own body weight.",
    correctAnswer: 1,
    explanation: "True. Ants are remarkably strong for their size and can carry heavy loads."
  },
  {
    id: "insects-easy-10",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Fireflies are actually beetles.",
    correctAnswer: 1,
    explanation: "True. Fireflies (lightning bugs) are a type of beetle."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "insects-medium-1",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many years can a termite colony last?",
    options: ["About 5 years", "About 20 years", "About 50 years", "Over 100 years"],
    correctAnswer: 3,
    explanation: "Termite colonies can last over 100 years with a single queen."
  },
  {
    id: "insects-medium-2",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What color light are mosquitoes attracted to?",
    options: ["Blue light", "Red light", "Green light", "Yellow light"],
    correctAnswer: 0,
    explanation: "Mosquitoes are attracted to blue light more than other colors."
  },
  {
    id: "insects-medium-3",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How fast can a cockroach run?",
    options: ["About 1 mph", "About 3 mph", "About 5 mph", "About 7 mph"],
    correctAnswer: 2,
    explanation: "Cockroaches can run at speeds up to 3 mph (quite fast for their size)."
  },
  {
    id: "insects-medium-4",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What do cicadas use for their loud buzzing sound?",
    options: ["Their wings", "Their legs", "Vibrating membranes on their abdomen", "Their mouth"],
    correctAnswer: 2,
    explanation: "Cicadas use specialized membranes called tympana to produce sound."
  },
  {
    id: "insects-medium-5",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many eyes do spiders typically have?",
    options: ["2 eyes", "4 eyes", "6 eyes", "8 eyes"],
    correctAnswer: 3,
    explanation: "Most spiders have 8 eyes arranged in different patterns."
  },
  {
    id: "insects-medium-6",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What do carpenter ants primarily eat?",
    options: ["Wood", "Other insects", "Dead wood and plant matter", "Honey"],
    correctAnswer: 2,
    explanation: "Carpenter ants don't eat wood; they hollow it out to build nests."
  },
  {
    id: "insects-medium-7",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How long can a bee dance to communicate location?",
    options: ["Less than a minute", "About 5 minutes", "About 15 minutes", "About 30 minutes"],
    correctAnswer: 1,
    explanation: "Bees perform the waggle dance which can last several minutes."
  },
  {
    id: "insects-medium-8",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "A praying mantis can turn its head 360 degrees.",
    correctAnswer: 1,
    explanation: "True. Praying mantises can rotate their heads nearly 360 degrees."
  },
  {
    id: "insects-medium-9",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Bees are the only insects that pollinate flowers.",
    correctAnswer: 0,
    explanation: "False. Many insects pollinate including butterflies, moths, beetles, and flies."
  },
  {
    id: "insects-medium-10",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Ladybugs can eat up to 50 aphids in a day.",
    correctAnswer: 1,
    explanation: "True. Ladybugs consume many aphids daily, making them beneficial."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "insects-hard-1",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of all animals on Earth are insects?",
    options: ["About 50%", "About 75%", "About 80%", "About 99%"],
    correctAnswer: 1,
    explanation: "Insects comprise approximately 75-80% of all described animal species."
  },
  {
    id: "insects-hard-2",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How much of the global biomass is made up of insects?",
    options: ["About 1%", "About 5%", "About 17%", "About 30%"],
    correctAnswer: 2,
    explanation: "Insects represent approximately 17% of Earth's total biomass."
  },
  {
    id: "insects-hard-3",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the smallest insect ever discovered?",
    options: ["0.1mm", "0.25mm", "0.5mm", "1mm"],
    correctAnswer: 1,
    explanation: "Some parasitic wasps are only 0.2-0.3mm long."
  },
  {
    id: "insects-hard-4",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many insect species are estimated to exist?",
    options: ["About 500,000", "About 1 million", "About 5-10 million", "About 30 million"],
    correctAnswer: 2,
    explanation: "Scientists estimate 5-10 million insect species exist."
  },
  {
    id: "insects-hard-5",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the speed of a locust swarm?",
    options: ["About 5 mph", "About 10 mph", "About 20 mph", "About 35 mph"],
    correctAnswer: 3,
    explanation: "Locust swarms can travel at speeds up to 35 mph."
  },
  {
    id: "insects-hard-6",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the bite force of a mosquito relative to its weight?",
    options: ["500 times", "1,000 times", "2,000 times", "equivalent"],
    correctAnswer: 1,
    explanation: "A mosquito's bite creates pressure 1,000 times its body weight."
  },
  {
    id: "insects-hard-7",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many ants are estimated to exist on Earth?",
    options: ["About 1 quadrillion", "About 10 quadrillion", "About 20 quadrillion", "About 100 quadrillion"],
    correctAnswer: 1,
    explanation: "Scientists estimate approximately 20 quadrillion ants on Earth."
  },
  {
    id: "insects-hard-8",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "A bee's waggle dance communicates the exact distance to food.",
    correctAnswer: 1,
    explanation: "True. The waggle dance encodes distance and direction to nectar sources."
  },
  {
    id: "insects-hard-9",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Insect populations have declined by 75% in the past 50 years.",
    correctAnswer: 1,
    explanation: "True. Studies show alarming declines in insect populations globally."
  },
  {
    id: "insects-hard-10",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Dragonflies are among the most successful insect predators with a 95% hunting success rate.",
    correctAnswer: 1,
    explanation: "True. Dragonflies have a 95% success rate in hunting other insects."
  }
] satisfies QuizQuestion[];
