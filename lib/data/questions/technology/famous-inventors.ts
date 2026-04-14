// Famous Inventors Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousInventorsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-inventors-easy-1",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the light bulb?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
    correctAnswer: 1,
    explanation: "Thomas Edison developed the first practical incandescent light bulb."
  },
  {
    id: "famous-inventors-easy-2",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is credited with inventing the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Samuel Morse", "Guglielmo Marconi"],
    correctAnswer: 1,
    explanation: "Alexander Graham Bell patented the telephone in 1876."
  },
  {
    id: "famous-inventors-easy-3",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the steam engine?",
    options: ["James Watt", "George Stephenson", "Richard Trevithick", "Thomas Newcomen"],
    correctAnswer: 0,
    explanation: "James Watt improved the steam engine, which drove the Industrial Revolution."
  },
  {
    id: "famous-inventors-easy-4",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the airplane?",
    options: ["Nikola Tesla", "The Wright Brothers", "Samuel Morse", "Benjamin Franklin"],
    correctAnswer: 1,
    explanation: "Orville and Wilbur Wright achieved the first powered flight in 1903."
  },
  {
    id: "famous-inventors-easy-5",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the electric light?",
    options: ["Nikola Tesla", "Thomas Edison", "Joseph Swan", "Humphry Davy"],
    correctAnswer: 3,
    explanation: "Humphry Davy created the electric light with an arc lamp in 1802."
  },
  {
    id: "famous-inventors-easy-6",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the telephone exchange?",
    options: ["Almon Strowger", "Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi"],
    correctAnswer: 0,
    explanation: "Almon Strowger invented the automatic telephone exchange in 1889."
  },
  {
    id: "famous-inventors-easy-7",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the refrigerator?",
    options: ["Oliver Evans", "Jacob Perkins", "Carl von Linde", "All contributed"],
    correctAnswer: 3,
    explanation: "Multiple inventors contributed to refrigeration technology over time."
  },
  {
    id: "famous-inventors-easy-8",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "The Wright brothers invented the airplane.",
    correctAnswer: 1,
    explanation: "True. Orville and Wilbur Wright achieved the first powered flight in 1903."
  },
  {
    id: "famous-inventors-easy-9",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Thomas Edison invented the phonograph.",
    correctAnswer: 1,
    explanation: "True. Edison invented the phonograph in 1877."
  },
  {
    id: "famous-inventors-easy-10",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Guglielmo Marconi invented the radio.",
    correctAnswer: 1,
    explanation: "True. Marconi developed wireless telegraphy (radio)."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-inventors-medium-1",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the printing press?",
    options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "William Caxton"],
    correctAnswer: 0,
    explanation: "Johannes Gutenberg invented the movable-type printing press around 1440."
  },
  {
    id: "famous-inventors-medium-2",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Nikola Tesla most famous for developing?",
    options: ["The light bulb", "The telephone", "Alternating current (AC) systems", "The airplane"],
    correctAnswer: 2,
    explanation: "Tesla developed the AC electrical system, which became the standard."
  },
  {
    id: "famous-inventors-medium-3",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What did Samuel Morse invent?",
    options: ["The telegraph", "The telephone", "The typewriter", "The microphone"],
    correctAnswer: 0,
    explanation: "Samuel Morse invented the telegraph and Morse code."
  },
  {
    id: "famous-inventors-medium-4",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the typewriter?",
    options: ["Christopher Sholes", "Thomas Edison", "Alexander Graham Bell", "Samuel Morse"],
    correctAnswer: 0,
    explanation: "Christopher Sholes invented the typewriter in 1868."
  },
  {
    id: "famous-inventors-medium-5",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What did George Eastman invent?",
    options: ["The camera", "The microfilm", "Photographic film", "The projector"],
    correctAnswer: 2,
    explanation: "George Eastman invented flexible photographic film in 1884."
  },
  {
    id: "famous-inventors-medium-6",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who developed the X-ray?",
    options: ["Marie Curie", "Pierre Curie", "Wilhelm Röntgen", "Ernst Mach"],
    correctAnswer: 2,
    explanation: "Wilhelm Röntgen discovered X-rays in 1895."
  },
  {
    id: "famous-inventors-medium-7",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the internal combustion engine?",
    options: ["Nicolaus Otto", "Rudolf Diesel", "Karl Benz", "Nikola Tesla"],
    correctAnswer: 0,
    explanation: "Nicolaus Otto developed the first internal combustion engine in 1876."
  },
  {
    id: "famous-inventors-medium-8",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Nikola Tesla invented the alternating current (AC) electrical system.",
    correctAnswer: 1,
    explanation: "True. Tesla developed the AC electrical system, which became the standard."
  },
  {
    id: "famous-inventors-medium-9",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Thomas Edison invented the first commercial electric light bulb.",
    correctAnswer: 1,
    explanation: "True. Though not the first to invent it, Edison made it practical and commercial."
  },
  {
    id: "famous-inventors-medium-10",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Rudolf Diesel invented the diesel engine.",
    correctAnswer: 1,
    explanation: "True. Rudolf Diesel developed the diesel engine in 1892."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-inventors-hard-1",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year did Thomas Edison invent the practical light bulb?",
    options: ["1877", "1878", "1879", "1880"],
    correctAnswer: 2,
    explanation: "Edison perfected the incandescent light bulb in 1879."
  },
  {
    id: "famous-inventors-hard-2",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year did the Wright brothers achieve powered flight?",
    options: ["1900", "1901", "1902", "1903"],
    correctAnswer: 3,
    explanation: "The Wright brothers' first powered flight was on December 17, 1903."
  },
  {
    id: "famous-inventors-hard-3",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What nationality was Nikola Tesla?",
    options: ["Serbian", "American", "Austrian", "Hungarian"],
    correctAnswer: 0,
    explanation: "Nikola Tesla was a Serbian-American inventor and electrical engineer."
  },
  {
    id: "famous-inventors-hard-4",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What did Charles Babbage design that was a precursor to the computer?",
    options: ["The analytical engine", "The difference engine", "Both A and B", "The calculator"],
    correctAnswer: 2,
    explanation: "Babbage designed both the Difference Engine and the Analytical Engine."
  },
  {
    id: "famous-inventors-hard-5",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year did Guglielmo Marconi win the Nobel Prize in Physics?",
    options: ["1909", "1911", "1913", "1915"],
    correctAnswer: 0,
    explanation: "Marconi won the Nobel Prize in Physics in 1909."
  },
  {
    id: "famous-inventors-hard-6",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who invented the silicon-based transistor?",
    options: ["William Shockley", "John Bardeen", "Walter Brattain", "All three"],
    correctAnswer: 3,
    explanation: "Shockley, Bardeen, and Brattain jointly invented the transistor."
  },
  {
    id: "famous-inventors-hard-7",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What did Ada Lovelace contribute to computing?",
    options: ["The first algorithm", "The first computer", "The first program", "The first compiler"],
    correctAnswer: 2,
    explanation: "Ada Lovelace wrote the first computer program for Babbage's engine."
  },
  {
    id: "famous-inventors-hard-8",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Karl Benz invented the first practical automobile with an internal combustion engine.",
    correctAnswer: 1,
    explanation: "True. Benz built the first practical automobile in 1885-1886."
  },
  {
    id: "famous-inventors-hard-9",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Margaret Knight invented the paper bag machine.",
    correctAnswer: 1,
    explanation: "True. Knight received a patent for her paper bag machine in 1871."
  },
  {
    id: "famous-inventors-hard-10",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first synthetic plastic was invented by Leo Baekeland.",
    correctAnswer: 1,
    explanation: "True. Baekeland invented Bakelite, the first synthetic plastic (1907)."
  }
] satisfies QuizQuestion[];
