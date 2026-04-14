// Space & Astronomy Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const spaceAstronomyQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "space-astronomy-easy-1",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    correctAnswer: 1,
    explanation: "Mercury is the closest planet to the Sun, orbiting at an average distance of 58 million km."
  },
  {
    id: "space-astronomy-easy-2",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many planets are in our solar system?",
    options: ["Seven", "Eight", "Nine", "Ten"],
    correctAnswer: 1,
    explanation: "There are eight planets in our solar system. Pluto was reclassified as a dwarf planet in 2006."
  },
  {
    id: "space-astronomy-easy-3",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Uranus", "Jupiter", "Neptune"],
    correctAnswer: 2,
    explanation: "Jupiter is the largest planet in our solar system, with a diameter of about 142,984 km."
  },
  {
    id: "space-astronomy-easy-4",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of Earth's natural satellite?",
    options: ["Luna", "The Moon", "Both A and B", "Selene"],
    correctAnswer: 2,
    explanation: "Earth's moon is commonly called 'The Moon' or 'Luna' (from Latin). Both terms are correct."
  },
  {
    id: "space-astronomy-easy-5",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which one of these is a red planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: 1,
    explanation: "Mars is known as the red planet due to iron oxide (rust) on its surface."
  },
  {
    id: "space-astronomy-easy-6",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the Sun primarily made of?",
    options: ["Iron", "Hydrogen and Helium", "Rock", "Water"],
    correctAnswer: 1,
    explanation: "The Sun is primarily composed of hydrogen and helium, fused in its core through nuclear fusion."
  },
  {
    id: "space-astronomy-easy-7",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a meteor?",
    options: ["A small asteroid", "A rock burning in Earth's atmosphere", "A crater on the Moon", "A type of star"],
    correctAnswer: 1,
    explanation: "A meteor is a small rock or particle from space that burns up as it passes through Earth's atmosphere."
  },
  {
    id: "space-astronomy-easy-8",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Jupiter is the largest planet in our solar system.",
    correctAnswer: 1,
    explanation: "True. Jupiter's mass is more than twice that of all other planets combined."
  },
  {
    id: "space-astronomy-easy-9",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "The Moon is farther from Earth than the Sun.",
    correctAnswer: 0,
    explanation: "False. The Moon is about 384,400 km away, while the Sun is about 150 million km away."
  },
  {
    id: "space-astronomy-easy-10",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Venus is the hottest planet in our solar system.",
    correctAnswer: 1,
    explanation: "True. Venus has a thick atmosphere that traps heat, making it hotter than Mercury despite being farther from the Sun."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "space-astronomy-medium-1",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a light-year?",
    options: ["A year in space", "The distance light travels in one year", "The time it takes to orbit the Sun", "A measurement of brightness"],
    correctAnswer: 1,
    explanation: "A light-year is the distance that light travels in one year in a vacuum (about 9.46 trillion km)."
  },
  {
    id: "space-astronomy-medium-2",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is an astronomical unit (AU)?",
    options: ["The distance from Earth to the Moon", "The average distance from Earth to the Sun", "The diameter of the Sun", "A measurement of stellar brightness"],
    correctAnswer: 1,
    explanation: "An AU is the average distance from Earth to the Sun, approximately 150 million km."
  },
  {
    id: "space-astronomy-medium-3",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What are the rings of Saturn primarily made of?",
    options: ["Ice and rock", "Dust", "Gas", "Ice and dust"],
    correctAnswer: 0,
    explanation: "Saturn's rings are primarily composed of ice particles and rocky debris ranging from tiny grains to house-sized chunks."
  },
  {
    id: "space-astronomy-medium-4",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many moons does Mars have?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 1,
    explanation: "Mars has two moons: Phobos and Deimos, both relatively small compared to Earth's Moon."
  },
  {
    id: "space-astronomy-medium-5",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the region where most asteroids in our solar system are found?",
    options: ["Kuiper Belt", "Asteroid Belt", "Oort Cloud", "Van Allen Belts"],
    correctAnswer: 1,
    explanation: "The Asteroid Belt is located between Mars and Jupiter, containing millions of rocky objects."
  },
  {
    id: "space-astronomy-medium-6",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is a black hole?",
    options: ["A hole in space that is empty", "A region where gravity is so strong that nothing can escape", "A gap between galaxies", "A type of star"],
    correctAnswer: 1,
    explanation: "A black hole is a region of spacetime where gravity is so intense that not even light can escape from within its event horizon."
  },
  {
    id: "space-astronomy-medium-7",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many moons does Jupiter have?",
    options: ["About 20", "About 50", "About 80", "Over 90"],
    correctAnswer: 2,
    explanation: "Jupiter has at least 95 known moons (as of 2024), making it the planet with the most moons."
  },
  {
    id: "space-astronomy-medium-8",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Light from the Sun takes approximately 8 minutes to reach Earth.",
    correctAnswer: 1,
    explanation: "True. Light travels at 299,792 km/s and takes about 8 minutes 20 seconds to reach Earth from the Sun."
  },
  {
    id: "space-astronomy-medium-9",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The Andromeda Galaxy is the closest large galaxy to the Milky Way.",
    correctAnswer: 1,
    explanation: "True. Andromeda is about 2.5 million light-years away and is on a collision course with the Milky Way."
  },
  {
    id: "space-astronomy-medium-10",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "A year on Mercury is shorter than a year on Venus.",
    correctAnswer: 0,
    explanation: "False. Mercury orbits faster (88 Earth days) but Venus's year is longer (225 Earth days)."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "space-astronomy-hard-1",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Goldilocks Zone?",
    options: ["The region with no asteroids", "The habitable zone where liquid water can exist", "The area around Saturn", "The asteroid belt"],
    correctAnswer: 1,
    explanation: "The Goldilocks Zone (habitable zone) is the region around a star where conditions allow liquid water to exist on a planet."
  },
  {
    id: "space-astronomy-hard-2",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Oort Cloud?",
    options: ["A cloud of comets surrounding the solar system", "A nebula", "A cluster of stars", "A region of the Sun's atmosphere"],
    correctAnswer: 0,
    explanation: "The Oort Cloud is a theoretical spherical shell of icy objects surrounding the solar system at about 2,000-100,000 AU from the Sun."
  },
  {
    id: "space-astronomy-hard-3",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What theory explains the origin of the universe?",
    options: ["Steady State Theory", "Big Bang Theory", "Cyclic Theory", "Creationism"],
    correctAnswer: 1,
    explanation: "The Big Bang Theory states that the universe began from a singularity about 13.8 billion years ago."
  },
  {
    id: "space-astronomy-hard-4",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a neutron star?",
    options: ["A small star with no neutrons", "An extremely dense stellar remnant composed mostly of neutrons", "A star made of antimatter", "A very young star"],
    correctAnswer: 1,
    explanation: "A neutron star is the collapsed core of a massive star, so dense that a teaspoon would weigh billions of tons."
  },
  {
    id: "space-astronomy-hard-5",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the approximate age of the universe?",
    options: ["4.5 billion years", "9.2 billion years", "13.8 billion years", "20 billion years"],
    correctAnswer: 2,
    explanation: "The universe is approximately 13.8 billion years old, based on observations of cosmic background radiation."
  },
  {
    id: "space-astronomy-hard-6",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is an exoplanet?",
    options: ["A planet in our solar system", "A planet orbiting another star", "A moon", "An asteroid"],
    correctAnswer: 1,
    explanation: "An exoplanet is a planet that orbits a star other than our Sun. Thousands have been discovered."
  },
  {
    id: "space-astronomy-hard-7",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the space telescope launched in 2021?",
    options: ["Hubble Space Telescope", "James Webb Space Telescope", "Chandra X-ray Observatory", "Kepler Space Telescope"],
    correctAnswer: 1,
    explanation: "The James Webb Space Telescope, launched in December 2021, is the successor to Hubble and observes in infrared."
  },
  {
    id: "space-astronomy-hard-8",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "A pulsar is a rapidly rotating neutron star.",
    correctAnswer: 1,
    explanation: "True. Pulsars are neutron stars that emit beams of radiation and appear to pulse as they rotate."
  },
  {
    id: "space-astronomy-hard-9",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Dark matter makes up more of the universe than ordinary matter.",
    correctAnswer: 1,
    explanation: "True. Dark matter comprises about 85% of the matter in the universe and its nature remains largely unknown."
  },
  {
    id: "space-astronomy-hard-10",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The speed of light is constant in all reference frames according to Einstein's theory of relativity.",
    correctAnswer: 1,
    explanation: "True. This is a fundamental postulate of special relativity - light speed (c) is constant for all observers."
  }
] satisfies QuizQuestion[];
