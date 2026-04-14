// Famous Painters Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const famousPaintersQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-painters-easy-1",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519. It is one of the most famous paintings in the world."
  },
  {
    id: "famous-painters-easy-2",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which artist cut off part of his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    correctAnswer: 1,
    explanation: "Vincent van Gogh cut off part of his ear in 1888 following a personal crisis in Arles, France."
  },
  {
    id: "famous-painters-easy-3",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted 'The Creation of Adam' on the Sistine Chapel ceiling?",
    options: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Donatello"],
    correctAnswer: 1,
    explanation: "Michelangelo painted 'The Creation of Adam' as part of his masterwork on the Sistine Chapel ceiling (1508-1512)."
  },
  {
    id: "famous-painters-easy-4",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country was Pablo Picasso from?",
    options: ["France", "Italy", "Spain", "Portugal"],
    correctAnswer: 2,
    explanation: "Pablo Picasso was born in Málaga, Spain in 1881 and is one of the most influential artists of the 20th century."
  },
  {
    id: "famous-painters-easy-5",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What art movement is Claude Monet associated with?",
    options: ["Cubism", "Impressionism", "Surrealism", "Modernism"],
    correctAnswer: 1,
    explanation: "Claude Monet was a leading figure in the Impressionist movement, known for his series of water lilies paintings."
  },
  {
    id: "famous-painters-easy-6",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which Dutch master is famous for his use of light and shadow?",
    options: ["Jan Vermeer", "Rembrandt", "Peter Bruegel", "Vincent van Gogh"],
    correctAnswer: 1,
    explanation: "Rembrandt van Rijn is renowned for his masterful use of chiaroscuro, the contrast of light and dark."
  },
  {
    id: "famous-painters-easy-7",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted 'Girl with a Pearl Earring'?",
    options: ["Jan Vermeer", "Rembrandt", "Peter Bruegel", "Frans Hals"],
    correctAnswer: 0,
    explanation: "Jan Vermeer painted 'Girl with a Pearl Earring' around 1665, often called the 'Mona Lisa of the North'."
  },
  {
    id: "famous-painters-easy-8",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Michelangelo was also a sculptor and architect.",
    correctAnswer: 1,
    explanation: "True. Michelangelo excelled not only as a painter but also as a renowned sculptor and architect."
  },
  {
    id: "famous-painters-easy-9",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Vincent van Gogh sold many paintings during his lifetime.",
    correctAnswer: 0,
    explanation: "False. Van Gogh was largely unsuccessful during his lifetime, selling very few paintings. He gained recognition after his death."
  },
  {
    id: "famous-painters-easy-10",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Leonardo da Vinci was only a painter.",
    correctAnswer: 0,
    explanation: "False. Leonardo da Vinci was a polymath who excelled as a painter, sculptor, inventor, scientist, and engineer."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-painters-medium-1",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who painted 'The Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Henri Matisse"],
    correctAnswer: 1,
    explanation: "Van Gogh painted 'The Starry Night' in 1889 while staying in an asylum in Saint-Rémy-de-Provence."
  },
  {
    id: "famous-painters-medium-2",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What art movement did Salvador Dalí pioneer?",
    options: ["Cubism", "Surrealism", "Impressionism", "Abstract Expressionism"],
    correctAnswer: 1,
    explanation: "Salvador Dalí was a key figure in the Surrealist movement, known for his dreamlike and irrational imagery."
  },
  {
    id: "famous-painters-medium-3",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who painted 'American Gothic'?",
    options: ["Edward Hopper", "Grant Wood", "Georgia O'Keeffe", "Andrew Wyeth"],
    correctAnswer: 1,
    explanation: "Grant Wood painted 'American Gothic' in 1930, depicting a farmer and his daughter and becoming an iconic American image."
  },
  {
    id: "famous-painters-medium-4",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist is known for his 'Water Lilies' series?",
    options: ["Vincent van Gogh", "Paul Cézanne", "Claude Monet", "Henri Renoir"],
    correctAnswer: 2,
    explanation: "Claude Monet created a series of paintings of his garden's water lilies from 1890 until his death in 1926."
  },
  {
    id: "famous-painters-medium-5",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was Andy Warhol's primary art technique?",
    options: ["Oil painting", "Watercolor", "Silkscreen printing", "Charcoal drawing"],
    correctAnswer: 2,
    explanation: "Andy Warhol pioneered the silkscreen printing technique to create pop art works, often of consumer products and celebrities."
  },
  {
    id: "famous-painters-medium-6",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who painted 'Nighthawks' in 1942?",
    options: ["Grant Wood", "Edward Hopper", "Jackson Pollock", "Mark Rothko"],
    correctAnswer: 1,
    explanation: "Edward Hopper painted 'Nighthawks', depicting solitary figures in a late-night diner, one of American art's iconic images."
  },
  {
    id: "famous-painters-medium-7",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist created the 'Sunflowers' series?",
    options: ["Claude Monet", "Vincent van Gogh", "Paul Gauguin", "Henri Matisse"],
    correctAnswer: 1,
    explanation: "Vincent van Gogh painted several 'Sunflowers' canvases during his time in Arles, southern France."
  },
  {
    id: "famous-painters-medium-8",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Pablo Picasso co-founded the Cubist movement.",
    correctAnswer: 1,
    explanation: "True. Picasso and Georges Braque pioneered Cubism in the early 20th century, revolutionizing modern art."
  },
  {
    id: "famous-painters-medium-9",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Jackson Pollock was known for his drip painting technique.",
    correctAnswer: 1,
    explanation: "True. Jackson Pollock developed abstract expressionism using action painting, dripping and pouring paint onto canvas."
  },
  {
    id: "famous-painters-medium-10",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Frida Kahlo was a Mexican painter known for her self-portraits.",
    correctAnswer: 1,
    explanation: "True. Frida Kahlo is famous for her intimate and surreal self-portraits exploring identity and pain."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "famous-painters-hard-1",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of Leonardo da Vinci's study of human anatomy through drawings?",
    options: ["Treatise on Form", "Vitruvian Man", "Studies of Movement", "Anatomical Sketches"],
    correctAnswer: 1,
    explanation: "The 'Vitruvian Man' is Leonardo's famous drawing showing human proportions based on Vitruvius's writings, created around 1490."
  },
  {
    id: "famous-painters-hard-2",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the technique of using dots of color to create images in pointillist painting?",
    options: ["Impasto", "Glazing", "Stippling", "Scumbling"],
    correctAnswer: 2,
    explanation: "Stippling, or pointillism, is the technique of applying small dots of color that blend optically to create an image."
  },
  {
    id: "famous-painters-hard-3",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which artist painted 'The Persistence of Memory' featuring melting clocks?",
    options: ["Max Ernst", "Joan Miró", "Salvador Dalí", "René Magritte"],
    correctAnswer: 2,
    explanation: "Salvador Dalí painted 'The Persistence of Memory' in 1931, an iconic surrealist work with famously melting watches."
  },
  {
    id: "famous-painters-hard-4",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What movement did Mark Rothko help establish with his color field paintings?",
    options: ["Impressionism", "Abstract Expressionism", "Minimalism", "Op Art"],
    correctAnswer: 1,
    explanation: "Mark Rothko was a leading figure in Abstract Expressionism, known for large color fields and emotional abstraction."
  },
  {
    id: "famous-painters-hard-5",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many paintings did Vincent van Gogh create in his lifetime?",
    options: ["Approximately 500", "Approximately 900", "Approximately 1,500", "Approximately 2,100"],
    correctAnswer: 2,
    explanation: "Van Gogh created approximately 1,500 paintings in just 10 years, despite struggling with mental illness and poverty."
  },
  {
    id: "famous-painters-hard-6",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Baroque artist is known for his religious paintings and the 'Night Watch'?",
    options: ["Peter Rubens", "Rembrandt", "Diego Velázquez", "Caravaggio"],
    correctAnswer: 1,
    explanation: "Rembrandt's 'The Night Watch' (1642) is one of the most famous paintings in the Rijksmuseum in Amsterdam."
  },
  {
    id: "famous-painters-hard-7",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is chiaroscuro, the technique that Rembrandt and Caravaggio are known for?",
    options: ["Soft color blending", "Use of light and shadow to create drama", "Pointillist technique", "Geometric abstraction"],
    correctAnswer: 1,
    explanation: "Chiaroscuro is the dramatic use of stark contrasts between light and dark to create depth and emotion in paintings."
  },
  {
    id: "famous-painters-hard-8",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Rembrandt's full name was Rembrandt Harmenszoon van Rijn.",
    correctAnswer: 1,
    explanation: "True. Rembrandt Harmenszoon van Rijn was the Dutch master's actual name, though he is known simply as Rembrandt."
  },
  {
    id: "famous-painters-hard-9",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "The Mona Lisa hangs in the Metropolitan Museum of Art in New York.",
    correctAnswer: 0,
    explanation: "False. The Mona Lisa is housed in the Louvre Museum in Paris, France, and is one of its most famous attractions."
  },
  {
    id: "famous-painters-hard-10",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "The Sistine Chapel ceiling was painted entirely by Michelangelo without assistants.",
    correctAnswer: 0,
    explanation: "False. While Michelangelo led the project, he had assistants who helped with background work and less important sections."
  }
] satisfies QuizQuestion[];
