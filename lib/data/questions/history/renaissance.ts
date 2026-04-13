// Renaissance Questions
// Current: 30 questions (Full topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const renaissanceQuestions: QuizQuestion[] = [
  {
    id: "renaissance-easy-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which country did the Renaissance begin?",
    options: ["France", "Italy", "England", "Spain"],
    correctAnswer: 1,
    explanation: "The Renaissance began in Italy in the 14th century, particularly in Florence."
  },
  {
    id: "renaissance-easy-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
  },
  {
    id: "renaissance-easy-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'Renaissance' mean?",
    options: ["Revolution", "Rebirth", "Reform", "Renewal"],
    correctAnswer: 1,
    explanation: "Renaissance is French for 'rebirth,' referring to the revival of classical learning and art."
  },
  {
    id: "renaissance-easy-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Botticelli"],
    correctAnswer: 2,
    explanation: "Michelangelo painted the Sistine Chapel ceiling between 1508-1512."
  },
  {
    id: "renaissance-easy-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which influential family dominated Florence during the Renaissance?",
    options: ["The Borgias", "The Medicis", "The Sforzas", "The Gonzagas"],
    correctAnswer: 1,
    explanation: "The Medici family were powerful bankers and patrons of the arts who ruled Florence."
  },
  {
    id: "renaissance-easy-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which invention helped spread Renaissance ideas across Europe?",
    options: ["The telescope", "The printing press", "The compass", "The steam engine"],
    correctAnswer: 1,
    explanation: "Gutenberg's printing press (c. 1440) revolutionized the spread of knowledge and ideas."
  },
  {
    id: "renaissance-easy-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which Renaissance artist was also a sculptor, architect, and poet?",
    options: ["Titian", "Giotto", "Michelangelo", "Caravaggio"],
    correctAnswer: 2,
    explanation: "Michelangelo was a polymath who excelled in sculpture (David), painting, architecture, and poetry."
  },
  {
    id: "renaissance-easy-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Renaissance was a period of cultural rebirth in Europe.",
    correctAnswer: 1,
    explanation: "True. The Renaissance marked a revival of classical learning, art, and humanism from the 14th-17th centuries."
  },
  {
    id: "renaissance-easy-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "Leonardo da Vinci designed flying machines and war devices.",
    correctAnswer: 1,
    explanation: "True. Da Vinci was an inventor who sketched helicopters, tanks, and other advanced machines."
  },
  {
    id: "renaissance-easy-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Renaissance only affected Italy and did not spread to other countries.",
    correctAnswer: 0,
    explanation: "False. The Renaissance spread throughout Europe, influencing art, science, and culture in many countries."
  },
  {
    id: "renaissance-medium-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Prince,' a treatise on political power?",
    options: ["Leonardo da Vinci", "Niccolò Machiavelli", "Dante Alighieri", "Petrarch"],
    correctAnswer: 1,
    explanation: "Machiavelli wrote 'The Prince' in 1513, a pragmatic guide to acquiring and maintaining political power."
  },
  {
    id: "renaissance-medium-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Renaissance scholar was known as the 'Father of Humanism'?",
    options: ["Erasmus", "Petrarch", "Boccaccio", "Lorenzo Valla"],
    correctAnswer: 1,
    explanation: "Petrarch (1304-1374) pioneered the humanist movement by reviving interest in classical texts."
  },
  {
    id: "renaissance-medium-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What artistic technique creates the illusion of depth on a flat surface?",
    options: ["Chiaroscuro", "Sfumato", "Linear perspective", "Tenebrism"],
    correctAnswer: 2,
    explanation: "Linear perspective, developed by Brunelleschi, uses converging lines to create depth."
  },
  {
    id: "renaissance-medium-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist painted 'The School of Athens'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Botticelli"],
    correctAnswer: 2,
    explanation: "Raphael painted this fresco (1509-1511) in the Vatican, depicting great philosophers."
  },
  {
    id: "renaissance-medium-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who sculpted the bronze doors of the Florence Baptistery?",
    options: ["Donatello", "Lorenzo Ghiberti", "Verrocchio", "Brunelleschi"],
    correctAnswer: 1,
    explanation: "Ghiberti's doors were so beautiful that Michelangelo called them the 'Gates of Paradise.'"
  },
  {
    id: "renaissance-medium-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Pope commissioned Michelangelo to paint the Sistine Chapel?",
    options: ["Pope Leo X", "Pope Julius II", "Pope Alexander VI", "Pope Clement VII"],
    correctAnswer: 1,
    explanation: "Pope Julius II commissioned the ceiling in 1508, and later the Last Judgment was added under Pope Paul III."
  },
  {
    id: "renaissance-medium-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Flemish painter is considered part of the Northern Renaissance?",
    options: ["Jan van Eyck", "Caravaggio", "El Greco", "Velázquez"],
    correctAnswer: 0,
    explanation: "Jan van Eyck (1390-1441) pioneered oil painting techniques in the Northern Renaissance."
  },
  {
    id: "renaissance-medium-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Humanism emphasized the value and agency of human beings.",
    correctAnswer: 1,
    explanation: "True. Renaissance humanism focused on classical learning and human potential rather than purely religious concerns."
  },
  {
    id: "renaissance-medium-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Michelangelo's David was carved from a single block of marble.",
    correctAnswer: 1,
    explanation: "True. The 17-foot statue was carved from one massive block of Carrara marble between 1501-1504."
  },
  {
    id: "renaissance-medium-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Medici family were popes during the Renaissance.",
    correctAnswer: 1,
    explanation: "True. Two Medicis became Pope: Leo X (1513-1521) and Clement VII (1523-1534)."
  },
  {
    id: "renaissance-hard-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which architect designed the dome of Florence Cathedral?",
    options: ["Leon Battista Alberti", "Filippo Brunelleschi", "Andrea Palladio", "Donato Bramante"],
    correctAnswer: 1,
    explanation: "Brunelleschi's innovative double-shell dome (1420-1436) was an engineering marvel."
  },
  {
    id: "renaissance-hard-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Platonic Academy in Florence?",
    options: ["A university", "An art school", "A philosophical gathering", "A military academy"],
    correctAnswer: 2,
    explanation: "Founded by Cosimo de' Medici, it was an informal gathering of scholars studying Plato's works."
  },
  {
    id: "renaissance-hard-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who wrote 'Utopia,' describing an ideal society?",
    options: ["Erasmus", "Thomas More", "Francis Bacon", "Michel de Montaigne"],
    correctAnswer: 1,
    explanation: "Sir Thomas More published 'Utopia' in 1516, coining the term for an ideal society."
  },
  {
    id: "renaissance-hard-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Renaissance artist developed the sfumato technique?",
    options: ["Raphael", "Botticelli", "Leonardo da Vinci", "Titian"],
    correctAnswer: 2,
    explanation: "Da Vinci perfected sfumato (subtle gradations of light and shadow) seen in the Mona Lisa."
  },
  {
    id: "renaissance-hard-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Aldine Press known for?",
    options: ["Music printing", "Map making", "Classical text printing", "Currency production"],
    correctAnswer: 2,
    explanation: "Aldus Manutius's press in Venice (1494) produced high-quality editions of Greek and Latin classics."
  },
  {
    id: "renaissance-hard-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which artist painted 'The Birth of Venus'?",
    options: ["Sandro Botticelli", "Giorgione", "Paolo Uccello", "Fra Angelico"],
    correctAnswer: 0,
    explanation: "Botticelli painted this iconic work around 1485, depicting the goddess Venus emerging from the sea."
  },
  {
    id: "renaissance-hard-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was Lorenzo de' Medici's nickname?",
    options: ["The Wise", "The Magnificent", "The Great", "The Just"],
    correctAnswer: 1,
    explanation: "Lorenzo il Magnifico (1449-1492) was a great patron of arts and de facto ruler of Florence."
  },
  {
    id: "renaissance-hard-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Giorgio Vasari wrote 'Lives of the Most Excellent Painters, Sculptors, and Architects.'",
    correctAnswer: 1,
    explanation: "True. Vasari's 1550 book is a foundational text of art history and coined the term 'Renaissance.'"
  },
  {
    id: "renaissance-hard-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Council of Trent was part of the Counter-Reformation responding to Protestantism.",
    correctAnswer: 1,
    explanation: "True. The Council (1545-1563) reformed the Catholic Church in response to the Protestant Reformation."
  },
  {
    id: "renaissance-hard-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Pico della Mirandola wrote the 'Oration on the Dignity of Man.'",
    correctAnswer: 1,
    explanation: "True. This 1486 work is considered a manifesto of Renaissance humanism."
  }
] satisfies QuizQuestion[];
