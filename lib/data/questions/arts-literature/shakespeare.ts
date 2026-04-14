// Shakespeare Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const shakespeareQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "shakespeare-easy-1",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    explanation: "William Shakespeare wrote Romeo and Juliet around 1594-1596, one of his most famous tragedies."
  },
  {
    id: "shakespeare-easy-2",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which play does the line 'To be or not to be' appear?",
    options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
    correctAnswer: 1,
    explanation: "This famous soliloquy is from Hamlet, delivered by Prince Hamlet in Act 3, Scene 1."
  },
  {
    id: "shakespeare-easy-3",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the setting of 'A Midsummer Night's Dream'?",
    options: ["Ancient Rome", "Medieval England", "Ancient Athens and an enchanted forest", "Renaissance Venice"],
    correctAnswer: 2,
    explanation: "The play is set in Athens and a magical forest filled with fairies and enchantment."
  },
  {
    id: "shakespeare-easy-4",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which Shakespeare tragedy features a forest that comes to life?",
    options: ["Hamlet", "Macbeth", "Othello", "The Tempest"],
    correctAnswer: 1,
    explanation: "In Macbeth, Birnam Wood appears to move when soldiers cut branches for camouflage."
  },
  {
    id: "shakespeare-easy-5",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In 'The Tempest', what is Prospero's primary magical instrument?",
    options: ["A wand", "A staff", "A sword", "A book"],
    correctAnswer: 1,
    explanation: "Prospero uses a magical staff as his primary instrument of power in The Tempest."
  },
  {
    id: "shakespeare-easy-6",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which play begins with three witches predicting Macbeth's future?",
    options: ["Hamlet", "Othello", "Macbeth", "The Taming of the Shrew"],
    correctAnswer: 2,
    explanation: "Three witches on a heath deliver prophecies that set the tragic events of Macbeth in motion."
  },
  {
    id: "shakespeare-easy-7",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of Juliet's cousin who is killed in 'Romeo and Juliet'?",
    options: ["Mercutio", "Tybalt", "Paris", "Benvolio"],
    correctAnswer: 1,
    explanation: "Tybalt, Juliet's hot-headed cousin, is killed by Romeo in a duel."
  },
  {
    id: "shakespeare-easy-8",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Shakespeare wrote both plays and sonnets.",
    correctAnswer: 1,
    explanation: "True. Shakespeare wrote 37 plays and 154 sonnets throughout his career."
  },
  {
    id: "shakespeare-easy-9",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "All of Shakespeare's plays were tragedies.",
    correctAnswer: 0,
    explanation: "False. Shakespeare wrote tragedies, comedies, and histories. Examples include comedies like 'Much Ado About Nothing'."
  },
  {
    id: "shakespeare-easy-10",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Shakespeare's plays were first collected and printed during his lifetime.",
    correctAnswer: 0,
    explanation: "False. Most of Shakespeare's plays were not published until the First Folio in 1623, after his death in 1616."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "shakespeare-medium-1",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Shakespeare play features the characters Oberon and Titania?",
    options: ["The Tempest", "A Midsummer Night's Dream", "As You Like It", "Twelfth Night"],
    correctAnswer: 1,
    explanation: "Oberon and Titania are the fairy king and queen in A Midsummer Night's Dream, written around 1595-1596."
  },
  {
    id: "shakespeare-medium-2",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In 'Othello', who is the villain that manipulates everyone?",
    options: ["Cassio", "Iago", "Desdemona", "Roderigo"],
    correctAnswer: 1,
    explanation: "Iago is the cunning antagonist who orchestrates the tragic downfall of Othello."
  },
  {
    id: "shakespeare-medium-3",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the primary conflict in 'Romeo and Juliet'?",
    options: ["A love triangle", "A feud between two families", "A political uprising", "A curse from a witch"],
    correctAnswer: 1,
    explanation: "The play revolves around the conflict between the Montagues and Capulets, forcing Romeo and Juliet to hide their love."
  },
  {
    id: "shakespeare-medium-4",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In 'Hamlet', what is Hamlet's most famous internal conflict about?",
    options: ["Whether to pursue love", "Whether to avenge his father or remain principled", "Whether to claim the throne", "Whether to forgive his mother"],
    correctAnswer: 1,
    explanation: "Hamlet struggles with whether to take revenge against his uncle Claudius for murdering his father."
  },
  {
    id: "shakespeare-medium-5",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Shakespeare comedy features twins who are mistaken for each other?",
    options: ["Much Ado About Nothing", "Twelfth Night", "As You Like It", "All's Well That Ends Well"],
    correctAnswer: 1,
    explanation: "Twelfth Night features Viola and Sebastian, twins who cause hilarious confusion due to their resemblance."
  },
  {
    id: "shakespeare-medium-6",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Lady Macbeth's main role in 'Macbeth'?",
    options: ["To warn him of danger", "To encourage him to commit murder and seize the throne", "To help him rule wisely", "To prevent his ambitions"],
    correctAnswer: 1,
    explanation: "Lady Macbeth manipulates her husband into murdering King Duncan to fulfill the witches' prophecy."
  },
  {
    id: "shakespeare-medium-7",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In 'King Lear', what triggers the king's downfall?",
    options: ["A betrayal by his generals", "His decision to divide his kingdom based on flattery", "A rebellion by his son", "An invasion by a foreign power"],
    correctAnswer: 1,
    explanation: "King Lear decides to give his kingdom to whichever daughter flatters him most, leading to tragedy."
  },
  {
    id: "shakespeare-medium-8",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Shakespeare invented over 1,700 words that are still used in English today.",
    correctAnswer: 1,
    explanation: "True. Shakespeare coined many words and phrases including 'assassination', 'bedroom', and 'eyeball'."
  },
  {
    id: "shakespeare-medium-9",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "The Globe Theatre, where Shakespeare's plays were performed, no longer exists.",
    correctAnswer: 0,
    explanation: "False. The original Globe burned in 1613, but it has since been reconstructed and is open to the public."
  },
  {
    id: "shakespeare-medium-10",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Shakespeare lived during the Elizabethan era.",
    correctAnswer: 1,
    explanation: "True. Shakespeare's career flourished during the reign of Queen Elizabeth I (1558-1603)."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "shakespeare-hard-1",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the play-within-a-play in 'Hamlet'?",
    options: ["The Tragedy of Claudius", "The Murder of Gonzago", "The Prince's Revenge", "Elsinore Betrayed"],
    correctAnswer: 1,
    explanation: "'The Murder of Gonzago' is the play Hamlet uses to confirm Claudius's guilt by recreating his father's murder."
  },
  {
    id: "shakespeare-hard-2",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In 'The Merchant of Venice', what is Shylock's claim for compensation?",
    options: ["Money", "A pound of flesh", "Property", "Revenge on Antonio"],
    correctAnswer: 1,
    explanation: "Shylock demands a pound of flesh as recorded in their bond when Antonio defaults on his loan."
  },
  {
    id: "shakespeare-hard-3",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many acts do Shakespeare's plays typically contain?",
    options: ["Three", "Four", "Five", "Six"],
    correctAnswer: 2,
    explanation: "Most of Shakespeare's plays are divided into five acts, following classical dramatic structure."
  },
  {
    id: "shakespeare-hard-4",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In 'Antony and Cleopatra', which battle is crucial to the plot?",
    options: ["Battle of Alexandria", "Battle of Actium", "Battle of the Nile", "Battle of Rome"],
    correctAnswer: 1,
    explanation: "The Battle of Actium represents a turning point where Octavian defeats Antony and Cleopatra's forces."
  },
  {
    id: "shakespeare-hard-5",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the primary theme of 'Measure for Measure'?",
    options: ["True love conquers all", "Justice, mercy, and the abuse of power", "The triumph of good over evil", "The wages of ambition"],
    correctAnswer: 1,
    explanation: "The play explores themes of justice, morality, and the dangers of unchecked authority through its complex plot."
  },
  {
    id: "shakespeare-hard-6",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In 'Romeo and Juliet', what is the fate of both protagonists?",
    options: ["They escape and marry in secret", "Romeo is banished and Juliet becomes a nun", "Both die tragically", "They reconcile their families and live happily"],
    correctAnswer: 2,
    explanation: "Both Romeo and Juliet die in the tomb, with Romeo poisoning himself and Juliet stabbing herself upon his death."
  },
  {
    id: "shakespeare-hard-7",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What form of poetry did Shakespeare master, with 154 examples published?",
    options: ["Haikus", "Sonnets", "Ballads", "Epics"],
    correctAnswer: 1,
    explanation: "Shakespeare's 154 sonnets are masterpieces of the sonnet form, particularly the English/Shakespearean sonnet."
  },
  {
    id: "shakespeare-hard-8",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Shakespeare's real name was William Shakspere.",
    correctAnswer: 1,
    explanation: "True. Various spellings of his name exist in historical documents, with Shakspere being one variant."
  },
  {
    id: "shakespeare-hard-9",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Shakespeare wrote only tragedies and comedies, no historical plays.",
    correctAnswer: 0,
    explanation: "False. Shakespeare wrote three genres: tragedies, comedies, and histories (like Henry V and Richard III)."
  },
  {
    id: "shakespeare-hard-10",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "The First Folio was published within a year of Shakespeare's death.",
    correctAnswer: 0,
    explanation: "False. Shakespeare died in 1616, but the First Folio, collecting his plays, wasn't published until 1623."
  }
] satisfies QuizQuestion[];
