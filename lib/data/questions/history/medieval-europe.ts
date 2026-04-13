// Medieval Europe Questions
// Current: 30 questions (Full topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const medievalEuropeQuestions: QuizQuestion[] = [
  {
    id: "medieval-easy-1",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is another name for the Medieval period?",
    options: ["The Dark Ages", "The Renaissance", "The Enlightenment", "The Iron Age"],
    correctAnswer: 0,
    explanation: "The Medieval period (5th-15th century) is also called the Middle Ages or Dark Ages."
  },
  {
    id: "medieval-easy-2",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was a knight's code of honor called?",
    options: ["Nobility", "Chivalry", "Heraldry", "Feudalism"],
    correctAnswer: 1,
    explanation: "Chivalry was the medieval code of conduct governing knights' behavior."
  },
  {
    id: "medieval-easy-3",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was the feudal system based on?",
    options: ["Money", "Democracy", "Land ownership", "Trade"],
    correctAnswer: 2,
    explanation: "Feudalism was based on land ownership where lords granted land to vassals in exchange for service."
  },
  {
    id: "medieval-easy-4",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What were castles primarily built for?",
    options: ["Beauty", "Defense", "Trade", "Religion"],
    correctAnswer: 1,
    explanation: "Medieval castles were fortified structures built primarily for defense and military purposes."
  },
  {
    id: "medieval-easy-5",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who led the Norman conquest of England in 1066?",
    options: ["Richard the Lionheart", "William the Conqueror", "Alfred the Great", "Edward the Confessor"],
    correctAnswer: 1,
    explanation: "William, Duke of Normandy, conquered England at the Battle of Hastings in 1066."
  },
  {
    id: "medieval-easy-6",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What were the religious military campaigns to the Holy Land called?",
    options: ["The Pilgrimages", "The Crusades", "The Inquisitions", "The Jihads"],
    correctAnswer: 1,
    explanation: "The Crusades were a series of religious wars from the 11th-13th centuries to recapture Jerusalem."
  },
  {
    id: "medieval-easy-7",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was a serf in medieval times?",
    options: ["A knight", "A priest", "A peasant bound to land", "A merchant"],
    correctAnswer: 2,
    explanation: "Serfs were peasants who were bound to the land they worked and couldn't leave without permission."
  },
  {
    id: "medieval-easy-8",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Black Death killed millions in Medieval Europe.",
    correctAnswer: 1,
    explanation: "True. The bubonic plague (1347-1353) killed an estimated 25-50 million people, about one-third of Europe's population."
  },
  {
    id: "medieval-easy-9",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "Medieval knights wore heavy armor in battle.",
    correctAnswer: 1,
    explanation: "True. Knights wore plate armor and chainmail for protection in combat."
  },
  {
    id: "medieval-easy-10",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Catholic Church had little influence in Medieval Europe.",
    correctAnswer: 0,
    explanation: "False. The Catholic Church was extremely powerful and influenced nearly every aspect of medieval life."
  },
  {
    id: "medieval-medium-1",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What document did King John sign in 1215 limiting royal power?",
    options: ["The Bill of Rights", "Magna Carta", "The Constitution", "The Petition of Right"],
    correctAnswer: 1,
    explanation: "The Magna Carta established that the king was subject to law and guaranteed certain rights."
  },
  {
    id: "medieval-medium-2",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which empire challenged Europe from the East during the Middle Ages?",
    options: ["The Mongol Empire", "The Persian Empire", "The Ottoman Empire", "The Byzantine Empire"],
    correctAnswer: 2,
    explanation: "The Ottoman Empire expanded into Europe, conquering Constantinople in 1453."
  },
  {
    id: "medieval-medium-3",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Domesday Book?",
    options: ["A religious text", "A legal code", "A land survey of England", "A history chronicle"],
    correctAnswer: 2,
    explanation: "Commissioned by William the Conqueror in 1086, it was a comprehensive survey of England's lands and resources."
  },
  {
    id: "medieval-medium-4",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who was crowned the first Holy Roman Emperor in 800 CE?",
    options: ["Frederick Barbarossa", "Otto I", "Charlemagne", "Charles V"],
    correctAnswer: 2,
    explanation: "Pope Leo III crowned Charlemagne on Christmas Day 800, reviving the concept of a Western empire."
  },
  {
    id: "medieval-medium-5",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the main purpose of medieval guilds?",
    options: ["Religious worship", "Military training", "Regulating trades and crafts", "Tax collection"],
    correctAnswer: 2,
    explanation: "Guilds controlled quality, training, and prices for specific trades like blacksmithing or weaving."
  },
  {
    id: "medieval-medium-6",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which English king was known as the Lionheart?",
    options: ["Richard I", "Henry V", "Edward III", "John I"],
    correctAnswer: 0,
    explanation: "Richard I earned the nickname 'Lionheart' for his military prowess during the Third Crusade."
  },
  {
    id: "medieval-medium-7",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What architectural style is characterized by pointed arches and flying buttresses?",
    options: ["Romanesque", "Gothic", "Byzantine", "Renaissance"],
    correctAnswer: 1,
    explanation: "Gothic architecture dominated medieval Europe from the 12th-16th centuries, seen in great cathedrals."
  },
  {
    id: "medieval-medium-8",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Hundred Years' War was fought between England and France.",
    correctAnswer: 1,
    explanation: "True. This series of conflicts (1337-1453) was fought over succession to the French throne."
  },
  {
    id: "medieval-medium-9",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Joan of Arc led French forces during the Hundred Years' War.",
    correctAnswer: 1,
    explanation: "True. Joan of Arc helped turn the tide of the war before being captured and executed in 1431."
  },
  {
    id: "medieval-medium-10",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Medieval universities like Oxford and Paris were founded in this period.",
    correctAnswer: 1,
    explanation: "True. The first universities emerged in the 11th-13th centuries, transforming education."
  },
  {
    id: "medieval-hard-1",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Investiture Controversy about?",
    options: ["Taxation rights", "Appointing bishops", "Military service", "Land ownership"],
    correctAnswer: 1,
    explanation: "The conflict between Pope and Emperor over who had authority to appoint bishops and abbots."
  },
  {
    id: "medieval-hard-2",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which battle in 732 CE stopped Muslim expansion into Western Europe?",
    options: ["Battle of Hastings", "Battle of Tours", "Battle of Agincourt", "Battle of Bouvines"],
    correctAnswer: 1,
    explanation: "Charles Martel's victory at Tours (also called Poitiers) halted the Umayyad advance into France."
  },
  {
    id: "medieval-hard-3",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What divided Christianity in 1054?",
    options: ["The Great Schism", "The Reformation", "The Inquisition", "The Crusades"],
    correctAnswer: 0,
    explanation: "The East-West Schism split Christianity into the Roman Catholic and Eastern Orthodox churches."
  },
  {
    id: "medieval-hard-4",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Mongol leader's invasions reached Eastern Europe in the 13th century?",
    options: ["Genghis Khan", "Kublai Khan", "Batu Khan", "Tamerlane"],
    correctAnswer: 2,
    explanation: "Batu Khan, grandson of Genghis, led the Golden Horde into Russia and Eastern Europe in the 1240s."
  },
  {
    id: "medieval-hard-5",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Hanseatic League?",
    options: ["A military alliance", "A trading confederation", "A religious order", "A royal dynasty"],
    correctAnswer: 1,
    explanation: "The Hanseatic League was a commercial alliance of merchant guilds dominating Baltic and North Sea trade."
  },
  {
    id: "medieval-hard-6",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which philosopher-theologian wrote 'Summa Theologica'?",
    options: ["Augustine of Hippo", "Thomas Aquinas", "Peter Abelard", "William of Ockham"],
    correctAnswer: 1,
    explanation: "Thomas Aquinas wrote this comprehensive theological work in the 13th century."
  },
  {
    id: "medieval-hard-7",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Peace and Truce of God movement?",
    options: ["A peace treaty", "Church restrictions on warfare", "A monastic order", "A diplomatic congress"],
    correctAnswer: 1,
    explanation: "This 10th-11th century movement sought to limit feudal violence by restricting when and where combat could occur."
  },
  {
    id: "medieval-hard-8",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Carolingian Renaissance was a cultural revival under Charlemagne.",
    correctAnswer: 1,
    explanation: "True. Charlemagne promoted learning, art, and architecture in the 8th-9th centuries."
  },
  {
    id: "medieval-hard-9",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Albigensian Crusade was fought against heretics in southern France.",
    correctAnswer: 1,
    explanation: "True. This 13th century crusade targeted the Cathar heresy in the Languedoc region."
  },
  {
    id: "medieval-hard-10",
    topicId: "medieval-europe",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Reconquista ended with the fall of Granada in 1492.",
    correctAnswer: 1,
    explanation: "True. The Christian reconquest of Iberia from Muslim rule concluded when Granada fell to Ferdinand and Isabella."
  }
] satisfies QuizQuestion[];
