// Computer History Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const computerHistoryQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "computer-history-easy-1",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is considered the father of computer science?",
    options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Mark Zuckerberg"],
    correctAnswer: 2,
    explanation: "Alan Turing is widely regarded as the father of computer science and AI."
  },
  {
    id: "computer-history-easy-2",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the first personal computer?",
    options: ["IBM", "Apple", "Microsoft", "Commodore"],
    correctAnswer: 1,
    explanation: "Apple released the Apple I in 1976, one of the first personal computers."
  },
  {
    id: "computer-history-easy-3",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does CPU stand for?",
    options: ["Central Processor Unit", "Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    correctAnswer: 1,
    explanation: "CPU stands for Central Processing Unit, the brain of the computer."
  },
  {
    id: "computer-history-easy-4",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who co-founded Apple Computer with Steve Jobs?",
    options: ["Bill Gates", "Steve Wozniak", "Paul Allen", "Larry Page"],
    correctAnswer: 1,
    explanation: "Steve Wozniak and Steve Jobs founded Apple in 1976."
  },
  {
    id: "computer-history-easy-5",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which was the first commercially successful personal computer?",
    options: ["Apple I", "Apple II", "Commodore 64", "IBM PC"],
    correctAnswer: 1,
    explanation: "The Apple II (1977) was the first commercially successful personal computer."
  },
  {
    id: "computer-history-easy-6",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In what decade was the first electronic computer built?",
    options: ["1920s", "1930s", "1940s", "1950s"],
    correctAnswer: 2,
    explanation: "ENIAC, the first electronic general-purpose computer, was completed in 1946."
  },
  {
    id: "computer-history-easy-7",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Runtime Access Module"],
    correctAnswer: 0,
    explanation: "RAM stands for Random Access Memory, used for temporary data storage."
  },
  {
    id: "computer-history-easy-8",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "ENIAC was one of the first electronic general-purpose computers.",
    correctAnswer: 1,
    explanation: "True. ENIAC was completed in 1945 and weighed about 30 tons."
  },
  {
    id: "computer-history-easy-9",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "The first computer mouse was made of wood.",
    correctAnswer: 1,
    explanation: "True. Douglas Engelbart invented the first mouse in 1964, which had a wooden shell."
  },
  {
    id: "computer-history-easy-10",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "easy",
    question: "Microsoft was founded before Apple.",
    correctAnswer: 1,
    explanation: "True. Microsoft was founded in 1975, while Apple was founded in 1976."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "computer-history-medium-1",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How much did the first IBM PC cost when released in 1981?",
    options: ["$500", "$1,000", "$1,565", "$2,000"],
    correctAnswer: 2,
    explanation: "The IBM PC was priced at $1,565 when it launched in 1981."
  },
  {
    id: "computer-history-medium-2",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the first graphical user interface (GUI) released by Apple?",
    options: ["MacOS 1.0", "System 1", "Lisa OS", "Newton OS"],
    correctAnswer: 1,
    explanation: "Apple System 1 was released with the Macintosh in 1984."
  },
  {
    id: "computer-history-medium-3",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year did Windows 95 revolutionize personal computing?",
    options: ["1993", "1994", "1995", "1996"],
    correctAnswer: 2,
    explanation: "Windows 95 was released in August 1995 and became hugely successful."
  },
  {
    id: "computer-history-medium-4",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does the term 'disk' refer to in computing?",
    options: ["A storage device", "A memory chip", "A processor", "A monitor"],
    correctAnswer: 0,
    explanation: "A disk is a storage device for saving data persistently."
  },
  {
    id: "computer-history-medium-5",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the transistor?",
    options: ["Lee De Forest", "William Shockley", "John Bardeen", "All of the above"],
    correctAnswer: 3,
    explanation: "The transistor was invented at Bell Labs by Shockley, Bardeen, and Brattain."
  },
  {
    id: "computer-history-medium-6",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Commodore 64?",
    options: ["A supercomputer", "A mainframe computer", "A famous home computer", "A gaming console"],
    correctAnswer: 2,
    explanation: "The Commodore 64 was a hugely popular home computer released in 1982."
  },
  {
    id: "computer-history-medium-7",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which operating system was initially called MS-DOS?",
    options: ["Windows", "MS-DOS", "DOS", "CP/M"],
    correctAnswer: 0,
    explanation: "Microsoft DOS was the predecessor to Windows operating systems."
  },
  {
    id: "computer-history-medium-8",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The Altair 8800 was one of the first personal computers.",
    correctAnswer: 1,
    explanation: "True. The Altair 8800 (1975) is considered a pioneering personal computer."
  },
  {
    id: "computer-history-medium-9",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Steve Jobs founded NeXT Computer after leaving Apple.",
    correctAnswer: 1,
    explanation: "True. Jobs founded NeXT Computer in 1985 after initially leaving Apple."
  },
  {
    id: "computer-history-medium-10",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The first laptop computer was the GRiD Compass 1100.",
    correctAnswer: 1,
    explanation: "True. The GRiD Compass 1100 (1979) is considered the first laptop."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "computer-history-hard-1",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How much did the original Apple I computer cost?",
    options: ["$200", "$399", "$666.66", "$1,000"],
    correctAnswer: 2,
    explanation: "The Apple I was priced at $666.66 when first sold in 1976."
  },
  {
    id: "computer-history-hard-2",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the first general-purpose electronic computer called?",
    options: ["UNIVAC", "ENIAC", "Mark I", "COLOSSUS"],
    correctAnswer: 1,
    explanation: "ENIAC (Electronic Numerical Integrator and Computer) was completed in 1946."
  },
  {
    id: "computer-history-hard-3",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was awarded the Turing Award for computer architecture?",
    options: ["John von Neumann", "Grace Hopper", "Donald Knuth", "Edsger Dijkstra"],
    correctAnswer: 0,
    explanation: "John von Neumann developed the von Neumann architecture, fundamental to computing."
  },
  {
    id: "computer-history-hard-4",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What year was the Intel 4004 microprocessor released?",
    options: ["1970", "1971", "1972", "1973"],
    correctAnswer: 1,
    explanation: "The Intel 4004 was released in 1971 and was the first commercial microprocessor."
  },
  {
    id: "computer-history-hard-5",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How much memory did the original Apple II have?",
    options: ["4 KB", "16 KB", "64 KB", "128 KB"],
    correctAnswer: 1,
    explanation: "The Apple II came with 16 KB of RAM initially (expandable to 64 KB)."
  },
  {
    id: "computer-history-hard-6",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What programming language did Grace Hopper develop?",
    options: ["FORTRAN", "COBOL", "ALGOL", "BASIC"],
    correctAnswer: 1,
    explanation: "Grace Hopper developed COBOL, one of the first higher-level languages."
  },
  {
    id: "computer-history-hard-7",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the operating system of the Xerox Alto?",
    options: ["CP/M", "Alto Executive", "Lisa OS", "System Software"],
    correctAnswer: 1,
    explanation: "The Xerox Alto ran Alto Executive, an early GUI-based OS (1973)."
  },
  {
    id: "computer-history-hard-8",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The Xerox Alto was a precursor to the modern graphical user interface.",
    correctAnswer: 1,
    explanation: "True. The Xerox Alto (1973) pioneered GUI concepts that influenced modern systems."
  },
  {
    id: "computer-history-hard-9",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Bill Gates and Paul Allen founded Microsoft to develop BASIC for the Altair 8800.",
    correctAnswer: 1,
    explanation: "True. Microsoft's first product was Altair BASIC (1975)."
  },
  {
    id: "computer-history-hard-10",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The term 'bug' in computing originated from an actual moth in a computer.",
    correctAnswer: 1,
    explanation: "True. Grace Hopper found a moth in ENIAC, coining the term 'bug'."
  }
] satisfies QuizQuestion[];
