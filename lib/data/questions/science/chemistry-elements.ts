// Chemistry & Elements Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const chemistryElementsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "chemistry-elements-easy-1",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
    explanation: "Water's chemical formula is H2O - two hydrogen atoms and one oxygen atom."
  },
  {
    id: "chemistry-elements-easy-2",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: "chemistry-elements-easy-3",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the chemical formula for sodium chloride (table salt)?",
    options: ["NaCl", "NaClO", "Na2Cl", "NaCl2"],
    correctAnswer: 0,
    explanation: "Table salt is sodium chloride (NaCl), consisting of one sodium and one chlorine ion."
  },
  {
    id: "chemistry-elements-easy-4",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Oganesson", "Operon"],
    correctAnswer: 1,
    explanation: "Oxygen, a gas essential for human respiration, has the chemical symbol O."
  },
  {
    id: "chemistry-elements-easy-5",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the atomic number of hydrogen?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    explanation: "Hydrogen has atomic number 1, meaning it has one proton in its nucleus."
  },
  {
    id: "chemistry-elements-easy-6",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the chemical formula for carbon dioxide?",
    options: ["CO", "CO2", "CO3", "C2O"],
    correctAnswer: 1,
    explanation: "Carbon dioxide (CO2) is a compound made of one carbon and two oxygen atoms."
  },
  {
    id: "chemistry-elements-easy-7",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which element is essential for building proteins in living organisms?",
    options: ["Carbon", "Nitrogen", "Sulfur", "Phosphorus"],
    correctAnswer: 1,
    explanation: "Nitrogen is an essential component of amino acids, which build proteins."
  },
  {
    id: "chemistry-elements-easy-8",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Gold's chemical symbol is Au.",
    correctAnswer: 1,
    explanation: "True. Au comes from the Latin word 'aurum' meaning gold."
  },
  {
    id: "chemistry-elements-easy-9",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "All metals are solid at room temperature.",
    correctAnswer: 0,
    explanation: "False. Mercury is a metal that is liquid at room temperature."
  },
  {
    id: "chemistry-elements-easy-10",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Helium is the second-lightest element.",
    correctAnswer: 1,
    explanation: "True. Helium has atomic number 2, making it the second-lightest element after hydrogen."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "chemistry-elements-medium-1",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Carbon has 6 protons, giving it an atomic number of 6."
  },
  {
    id: "chemistry-elements-medium-2",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many electrons does a neutral oxygen atom have?",
    options: ["6", "8", "10", "16"],
    correctAnswer: 1,
    explanation: "A neutral oxygen atom has 8 electrons, matching its atomic number of 8."
  },
  {
    id: "chemistry-elements-medium-3",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does pH measure?",
    options: ["Temperature", "Pressure", "Acidity or alkalinity", "Density"],
    correctAnswer: 2,
    explanation: "pH measures the concentration of hydrogen ions, indicating whether a solution is acidic (pH < 7), neutral (pH = 7), or alkaline (pH > 7)."
  },
  {
    id: "chemistry-elements-medium-4",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which of these elements is a noble gas?",
    options: ["Helium", "Nitrogen", "Chlorine", "Fluorine"],
    correctAnswer: 0,
    explanation: "Helium is a noble gas with a complete electron shell, making it inert and non-reactive."
  },
  {
    id: "chemistry-elements-medium-5",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What compound is formed when hydrogen and oxygen combine?",
    options: ["Hydrogen peroxide", "Water", "Ozone", "Both A and B"],
    correctAnswer: 3,
    explanation: "Both water (H2O) and hydrogen peroxide (H2O2) are formed from hydrogen and oxygen in different ratios."
  },
  {
    id: "chemistry-elements-medium-6",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the main component of natural gas?",
    options: ["Ethane", "Propane", "Methane", "Butane"],
    correctAnswer: 2,
    explanation: "Methane (CH4) is the primary component of natural gas, making up about 70-90% of it."
  },
  {
    id: "chemistry-elements-medium-7",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the chemical formula for calcium carbonate?",
    options: ["CaCO", "CaCO3", "Ca2CO3", "CaCO2"],
    correctAnswer: 1,
    explanation: "Calcium carbonate (CaCO3) is the main component of limestone and chalk."
  },
  {
    id: "chemistry-elements-medium-8",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Neutrons have a negative charge.",
    correctAnswer: 0,
    explanation: "False. Neutrons are neutral (uncharged). Protons are positively charged and electrons are negatively charged."
  },
  {
    id: "chemistry-elements-medium-9",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Isotopes of an element have different numbers of neutrons.",
    correctAnswer: 1,
    explanation: "True. Isotopes are atoms of the same element with different numbers of neutrons, thus different mass numbers."
  },
  {
    id: "chemistry-elements-medium-10",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Iron's chemical symbol is Fe.",
    correctAnswer: 1,
    explanation: "True. Fe comes from the Latin word 'ferrum' meaning iron."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "chemistry-elements-hard-1",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many elements are in the periodic table?",
    options: ["92", "104", "118", "126"],
    correctAnswer: 2,
    explanation: "As of 2024, there are 118 confirmed elements in the periodic table."
  },
  {
    id: "chemistry-elements-hard-2",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is Avogadro's number?",
    options: ["6.02 × 10^22", "6.02 × 10^23", "6.02 × 10^24", "6.02 × 10^25"],
    correctAnswer: 1,
    explanation: "Avogadro's number is 6.022 × 10^23, the number of atoms or molecules in one mole of a substance."
  },
  {
    id: "chemistry-elements-hard-3",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the oxidation state of oxygen in most compounds?",
    options: ["-1", "-2", "+2", "+4"],
    correctAnswer: 1,
    explanation: "Oxygen typically has an oxidation state of -2 in most compounds, except in peroxides (-1) and when bonded to fluorine."
  },
  {
    id: "chemistry-elements-hard-4",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Nitrogen", "Chlorine", "Fluorine"],
    correctAnswer: 3,
    explanation: "Fluorine has the highest electronegativity value (4.0 on the Pauling scale), making it highly attractive to electrons."
  },
  {
    id: "chemistry-elements-hard-5",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "10"],
    correctAnswer: 1,
    explanation: "A neutral solution has a pH of 7 at 25°C, with equal concentrations of H+ and OH- ions."
  },
  {
    id: "chemistry-elements-hard-6",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the electron configuration of hydrogen?",
    options: ["1s1", "1s2", "2s1", "2p1"],
    correctAnswer: 0,
    explanation: "Hydrogen has the electron configuration 1s1, with one electron in the first shell's s orbital."
  },
  {
    id: "chemistry-elements-hard-7",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What name is given to elements 58-71 in the periodic table?",
    options: ["Halogens", "Lanthanides", "Actinides", "Transition metals"],
    correctAnswer: 1,
    explanation: "Elements 58-71 (Cerium to Lutetium) are called the Lanthanides or rare earth elements."
  },
  {
    id: "chemistry-elements-hard-8",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Diamonds and graphite are both forms of carbon.",
    correctAnswer: 1,
    explanation: "True. They are allotropes of carbon with different molecular structures - diamond has a tetrahedral structure while graphite has layers."
  },
  {
    id: "chemistry-elements-hard-9",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The atomic mass of an element is always a whole number.",
    correctAnswer: 0,
    explanation: "False. Atomic masses are rarely whole numbers because they're weighted averages of isotopes with different mass numbers."
  },
  {
    id: "chemistry-elements-hard-10",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Uranium undergoes radioactive decay to become lead.",
    correctAnswer: 1,
    explanation: "True. Uranium-238 decays through a series of radioactive decays (alpha and beta) to eventually form lead-206."
  }
] satisfies QuizQuestion[];
