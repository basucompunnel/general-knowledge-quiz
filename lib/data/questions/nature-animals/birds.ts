// Birds Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const birdsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "birds-easy-1",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird is the fastest in flight?",
    options: ["Eagle", "Peregrine Falcon", "Swift", "Albatross"],
    correctAnswer: 1,
    explanation: "The peregrine falcon can dive at speeds over 240 mph."
  },
  {
    id: "birds-easy-2",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird cannot fly?",
    options: ["Penguin", "Duck", "Swan", "Goose"],
    correctAnswer: 0,
    explanation: "Penguins are flightless birds adapted for swimming."
  },
  {
    id: "birds-easy-3",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest species of bird?",
    options: ["Albatross", "Condor", "Ostrich", "Emu"],
    correctAnswer: 2,
    explanation: "The ostrich is the largest bird, standing up to 9 feet tall."
  },
  {
    id: "birds-easy-4",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird is known for imitating sounds?",
    options: ["Raven", "Mockingbird", "Parrot", "All of the above"],
    correctAnswer: 3,
    explanation: "Ravens, mockingbirds, and parrots can all imitate sounds."
  },
  {
    id: "birds-easy-5",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many chambers does a bird's heart have?",
    options: ["2 chambers", "3 chambers", "4 chambers", "6 chambers"],
    correctAnswer: 2,
    explanation: "Birds have a 4-chambered heart like mammals."
  },
  {
    id: "birds-easy-6",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do birds use their feathers for?",
    options: ["Only flight", "Flight, insulation, and waterproofing", "Only insulation", "Only display"],
    correctAnswer: 1,
    explanation: "Feathers serve multiple purposes including flight, insulation, and waterproofing."
  },
  {
    id: "birds-easy-7",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird is known for its migratory journey?",
    options: ["Chicken", "Pigeon", "Arctic Tern", "Sparrow"],
    correctAnswer: 2,
    explanation: "The Arctic Tern migrates between Arctic and Antarctic regions annually."
  },
  {
    id: "birds-easy-8",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Owls can rotate their heads 360 degrees.",
    correctAnswer: 0,
    explanation: "False. Owls can only rotate their heads about 270 degrees."
  },
  {
    id: "birds-easy-9",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Hummingbirds can fly backwards.",
    correctAnswer: 1,
    explanation: "True. Hummingbirds are the only birds that can fly backwards."
  },
  {
    id: "birds-easy-10",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "easy",
    question: "Eagles have eyesight about 8 times better than humans.",
    correctAnswer: 1,
    explanation: "True. Eagles have exceptional vision for spotting prey from great distances."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "birds-medium-1",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many times per second can a hummingbird flap its wings?",
    options: ["20 flaps", "50 flaps", "80 flaps", "120 flaps"],
    correctAnswer: 2,
    explanation: "Hummingbirds flap their wings approximately 80 times per second."
  },
  {
    id: "birds-medium-2",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a group of crows called?",
    options: ["A flock", "A swarm", "A murder", "A parliament"],
    correctAnswer: 2,
    explanation: "A group of crows is called a murder."
  },
  {
    id: "birds-medium-3",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many feathers does a swan typically have?",
    options: ["About 5,000 feathers", "About 10,000 feathers", "About 25,000 feathers", "About 40,000 feathers"],
    correctAnswer: 2,
    explanation: "Swans have approximately 25,000 feathers."
  },
  {
    id: "birds-medium-4",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the peacock's tail display called?",
    options: ["Plumage", "Train", "Crown", "Crest"],
    correctAnswer: 1,
    explanation: "A peacock's elaborate tail display is called a train."
  },
  {
    id: "birds-medium-5",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What do birds secrete on their feathers for waterproofing?",
    options: ["Mucus", "Oil", "Wax", "Sweat"],
    correctAnswer: 1,
    explanation: "Birds secrete oil from their preen glands to waterproof feathers."
  },
  {
    id: "birds-medium-6",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which bird has the longest lifespan?",
    options: ["Parrot", "Raven", "Swan", "Eagle"],
    correctAnswer: 0,
    explanation: "Parrots can live 40-80+ years, making them among the longest-lived birds."
  },
  {
    id: "birds-medium-7",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How deep can a penguin dive?",
    options: ["About 100 feet", "About 300 feet", "About 500 feet", "About 1,000 feet"],
    correctAnswer: 2,
    explanation: "Penguins can dive to depths of approximately 500 feet."
  },
  {
    id: "birds-medium-8",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Flamingos get their pink color from their diet of algae and shrimp.",
    correctAnswer: 1,
    explanation: "True. Carotenoids in their diet give flamingos their pink color."
  },
  {
    id: "birds-medium-9",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Ostriches can run faster than 40 mph.",
    correctAnswer: 1,
    explanation: "True. Ostriches can run at speeds up to 45 mph."
  },
  {
    id: "birds-medium-10",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Albatrosses can sleep while flying.",
    correctAnswer: 1,
    explanation: "True. Albatrosses can rest one brain hemisphere while flying."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "birds-hard-1",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the only bird that can fly upside down?",
    options: ["Hummingbird", "Parrot", "Swift", "Sparrow"],
    correctAnswer: 0,
    explanation: "Hummingbirds can fly upside down by rotating their wings."
  },
  {
    id: "birds-hard-2",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many species of birds are there in the world?",
    options: ["About 5,000 species", "About 8,000 species", "About 10,000 species", "About 15,000 species"],
    correctAnswer: 2,
    explanation: "There are approximately 10,000 bird species worldwide."
  },
  {
    id: "birds-hard-3",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Arctic Tern's migration distance annually?",
    options: ["About 10,000 miles", "About 30,000 miles", "About 50,000 miles", "About 70,000 miles"],
    correctAnswer: 2,
    explanation: "Arctic Terns migrate approximately 50,000 miles annually, the longest migration."
  },
  {
    id: "birds-hard-4",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the smallest bird species?",
    options: ["Sparrow", "Wren", "Bee Hummingbird", "Kinglet"],
    correctAnswer: 2,
    explanation: "The bee hummingbird is about 2 inches long and weighs less than a penny."
  },
  {
    id: "birds-hard-5",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What type of bird has the most species?",
    options: ["Warblers", "Hummingbirds", "Eagles", "Flycatchers"],
    correctAnswer: 3,
    explanation: "Flycatchers constitute the largest bird family with 400+ species."
  },
  {
    id: "birds-hard-6",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many bones does a bird's skeleton have?",
    options: ["About 100 bones", "About 150 bones", "About 200 bones", "About 250 bones"],
    correctAnswer: 1,
    explanation: "Birds have approximately 150 bones, many fused for strength."
  },
  {
    id: "birds-hard-7",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a bird's air sac system used for?",
    options: ["Storage", "Breathing and thermoregulation", "Sound production", "Buoyancy"],
    correctAnswer: 1,
    explanation: "Air sacs allow birds to breathe continuously and regulate body temperature."
  },
  {
    id: "birds-hard-8",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Birds are descendants of theropod dinosaurs.",
    correctAnswer: 1,
    explanation: "True. Modern birds evolved from small theropod dinosaurs."
  },
  {
    id: "birds-hard-9",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The kakapo (parrot) is endangered and found only in New Zealand.",
    correctAnswer: 1,
    explanation: "True. The kakapo is a critically endangered flightless parrot."
  },
  {
    id: "birds-hard-10",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Albatrosses can sleep while flying.",
    correctAnswer: 1,
    explanation: "True. Albatrosses can rest one brain hemisphere while flying."
  }
] satisfies QuizQuestion[];
