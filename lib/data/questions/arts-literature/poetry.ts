// Poetry Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const poetryQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "poetry-easy-1",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'The Road Not Taken'?",
    options: ["Robert Frost", "Emily Dickinson", "Walt Whitman", "Edgar Allan Poe"],
    correctAnswer: 0,
    explanation: "Robert Frost wrote this famous poem published in 1916 about choosing between two diverging paths."
  },
  {
    id: "poetry-easy-2",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many lines does a sonnet typically have?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 2,
    explanation: "A sonnet traditionally contains 14 lines, usually written in iambic pentameter."
  },
  {
    id: "poetry-easy-3",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Shall I Compare Thee to a Summer's Day'?",
    options: ["William Shakespeare", "John Milton", "John Keats", "Samuel Coleridge"],
    correctAnswer: 0,
    explanation: "Shakespeare wrote this famous love sonnet (Sonnet 18), one of his best-known poems."
  },
  {
    id: "poetry-easy-4",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the rhyme scheme of a Shakespearean sonnet?",
    options: ["ABAB CDCD EFEF GG", "ABBA ABBA CDECDE", "AABB CCDD EEFF GG", "ABAB BCBC CDCD EE"],
    correctAnswer: 0,
    explanation: "The Shakespearean or English sonnet follows the rhyme scheme ABAB CDCD EFEF GG."
  },
  {
    id: "poetry-easy-5",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the first line of Walt Whitman's 'Song of Myself'?",
    options: ["I celebrate myself", "I sing the body electric", "Hear America singing", "Do I contradict myself"],
    correctAnswer: 0,
    explanation: "'I celebrate myself' is the opening line of Walt Whitman's epic free verse poem from 1855."
  },
  {
    id: "poetry-easy-6",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a rhyming couplet?",
    options: ["Two consecutive lines with the same rhyme", "Two stanzas that rhyme", "A pair of poems", "A line that rhymes with itself"],
    correctAnswer: 0,
    explanation: "A rhyming couplet is two consecutive lines that rhyme with each other, often used at the end of sonnets."
  },
  {
    id: "poetry-easy-7",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Howl'?",
    options: ["Allen Ginsberg", "Jack Kerouac", "Gregory Corso", "Lawrence Ferlinghetti"],
    correctAnswer: 0,
    explanation: "Allen Ginsberg wrote the controversial and influential Beat poetry work 'Howl' in 1956."
  },
  {
    id: "poetry-easy-8",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Haiku is a Japanese form of poetry with 17 syllables.",
    correctAnswer: 1,
    explanation: "True. Haiku follows a 5-7-5 syllable pattern across three lines, totaling 17 syllables."
  },
  {
    id: "poetry-easy-9",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Free verse poetry requires a specific rhyme scheme.",
    correctAnswer: 0,
    explanation: "False. Free verse poetry has no required rhyme scheme or regular meter, allowing poets creative freedom."
  },
  {
    id: "poetry-easy-10",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "A metaphor directly compares two things using 'like' or 'as'.",
    correctAnswer: 0,
    explanation: "False. That's a simile. A metaphor directly compares two things without using 'like' or 'as'."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "poetry-medium-1",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Raven'?",
    options: ["Edgar Allan Poe", "Lord Byron", "John Keats", "Percy Shelley"],
    correctAnswer: 0,
    explanation: "Edgar Allan Poe published 'The Raven' in 1845, one of his most famous narrative poems."
  },
  {
    id: "poetry-medium-2",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does 'metaphor' literally mean?",
    options: ["To carry over", "To change form", "To transfer meaning", "To compare"],
    correctAnswer: 0,
    explanation: "Metaphor comes from Greek 'metapherein', meaning 'to carry over' or transfer meaning between concepts."
  },
  {
    id: "poetry-medium-3",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'Ozymandias'?",
    options: ["John Keats", "Percy Bysshe Shelley", "Lord Byron", "Samuel Coleridge"],
    correctAnswer: 1,
    explanation: "Percy Bysshe Shelley wrote 'Ozymandias' (1818), a sonnet about the ruins of an ancient empire."
  },
  {
    id: "poetry-medium-4",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the rhythmic pattern in poetry?",
    options: ["Rhythm", "Meter", "Beat", "Cadence"],
    correctAnswer: 1,
    explanation: "Meter is the regular pattern of stressed and unstressed syllables in poetry."
  },
  {
    id: "poetry-medium-5",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Waste Land'?",
    options: ["W.H. Auden", "T.S. Eliot", "Ezra Pound", "William Carlos Williams"],
    correctAnswer: 1,
    explanation: "T.S. Eliot wrote 'The Waste Land' (1922), one of the most important modernist poems of the 20th century."
  },
  {
    id: "poetry-medium-6",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is an 'ode'?",
    options: ["A tragic poem", "A formal poem of praise", "A humorous poem", "A love poem"],
    correctAnswer: 1,
    explanation: "An ode is a formal poem that praises or celebrates a specific person, place, or thing."
  },
  {
    id: "poetry-medium-7",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is alliteration?",
    options: ["Using words that end with the same sound", "Repetition of initial consonant sounds", "Using metaphors", "Creating rhythm"],
    correctAnswer: 1,
    explanation: "Alliteration is the repetition of the same initial consonant sound in words close to each other."
  },
  {
    id: "poetry-medium-8",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Emily Dickinson published very few poems during her lifetime.",
    correctAnswer: 1,
    explanation: "True. During her lifetime, fewer than 20 of her nearly 1,800 poems were published."
  },
  {
    id: "poetry-medium-9",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Iambic pentameter has 10 syllables per line.",
    correctAnswer: 1,
    explanation: "True. Iambic pentameter consists of five iambic feet (unstressed-stressed pairs), totaling 10 syllables."
  },
  {
    id: "poetry-medium-10",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "W.B. Yeats was an Irish poet and playwright.",
    correctAnswer: 1,
    explanation: "True. W.B. Yeats was a major Irish poet, playwright, and co-founder of the Abbey Theatre."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "poetry-hard-1",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a villanelle?",
    options: ["A 14-line poem", "A 10-line comic poem", "A 19-line poem with specific repetition", "A prose poem"],
    correctAnswer: 2,
    explanation: "A villanelle is a 19-line poem with a specific rhyme and repetition pattern, famously used in 'Do Not Go Gentle'."
  },
  {
    id: "poetry-hard-2",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who wrote 'Do Not Go Gentle Into That Good Night'?",
    options: ["Dylan Thomas", "W.H. Auden", "Philip Larkin", "Seamus Heaney"],
    correctAnswer: 0,
    explanation: "Dylan Thomas wrote this famous villanelle in 1951 as an ode to his dying father."
  },
  {
    id: "poetry-hard-3",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a 'volta' in a sonnet?",
    options: ["A rhyming couplet", "A turn or shift in thought", "A metaphor", "An iambic foot"],
    correctAnswer: 1,
    explanation: "The volta is a turn in thought or argument within a sonnet, often occurring before the final couplet."
  },
  {
    id: "poetry-hard-4",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is an 'elegy'?",
    options: ["A poem of praise", "A heroic poem", "A poem mourning the dead", "A narrative poem"],
    correctAnswer: 2,
    explanation: "An elegy is a lyric poem that expresses sorrow or mourning, typically for someone who has died."
  },
  {
    id: "poetry-hard-5",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is 'assonance' in poetry?",
    options: ["Repetition of initial consonant sounds", "Repetition of vowel sounds", "Repetition of line endings", "Use of similes"],
    correctAnswer: 1,
    explanation: "Assonance is the repetition of vowel sounds within words close together in a poem."
  },
  {
    id: "poetry-hard-6",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who were the 'Romantic poets'?",
    options: ["Victorian-era poets", "Late 18th and early 19th-century poets like Wordsworth and Keats", "Medieval poets", "Ancient Greek poets"],
    correctAnswer: 1,
    explanation: "The Romantic poets included Wordsworth, Coleridge, Byron, Keats, and Shelley, focusing on emotion and nature."
  },
  {
    id: "poetry-hard-7",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is a 'pantoum'?",
    options: ["A haiku variant", "A Malaysian poetic form with interlocking repetitions", "A type of acrostic", "A free verse form"],
    correctAnswer: 1,
    explanation: "A pantoum is a form derived from Malaysian poetry with an intricate pattern of repeating lines and rhymes."
  },
  {
    id: "poetry-hard-8",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Emily Dickinson used dashes unconventionally to create pauses in her poems.",
    correctAnswer: 1,
    explanation: "True. Dickinson's use of dashes and unconventional capitalization is a distinctive feature of her poetic style."
  },
  {
    id: "poetry-hard-9",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Ezra Pound believed poetry should be modernist and experimental.",
    correctAnswer: 1,
    explanation: "True. Ezra Pound was a champion of modernism and helped developed imagist poetry, encouraging innovation."
  },
  {
    id: "poetry-hard-10",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "The 'Lost Generation' referred to American writers who lived in Paris after World War I.",
    correctAnswer: 1,
    explanation: "True. Writers like Hemingway, Fitzgerald, and Stein lived in Paris and were called the Lost Generation."
  }
] satisfies QuizQuestion[];
