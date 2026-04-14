// Classic Novels Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const classicNovelsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "classic-novels-easy-1",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "George Eliot"],
    correctAnswer: 1,
    explanation: "Jane Austen published Pride and Prejudice in 1813, a novel about manners and marriage in Georgian England."
  },
  {
    id: "classic-novels-easy-2",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which novel begins with 'Call me Ishmael'?",
    options: ["Treasure Island", "Moby-Dick", "Robinson Crusoe", "The Old Man and the Sea"],
    correctAnswer: 1,
    explanation: "Moby-Dick by Herman Melville opens with this famous line, introducing the narrator Ishmael."
  },
  {
    id: "classic-novels-easy-3",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the main character in 'Jane Eyre'?",
    options: ["Bertha Mason", "Rochester", "Jane Eyre", "St. John Rivers"],
    correctAnswer: 2,
    explanation: "Jane Eyre is the protagonist and narrator of Charlotte Brontë's 1847 novel about a young orphan."
  },
  {
    id: "classic-novels-easy-4",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What island is 'Robinson Crusoe' stranded on?",
    options: ["A Caribbean island", "An island near Madagascar", "An island off the coast of South America", "An unspecified island"],
    correctAnswer: 0,
    explanation: "Robinson Crusoe is shipwrecked on an island in the Caribbean, where he must survive alone."
  },
  {
    id: "classic-novels-easy-5",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who authored 'Wuthering Heights'?",
    options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"],
    correctAnswer: 2,
    explanation: "Emily Brontë wrote Wuthering Heights, published in 1847 under the pseudonym Bell."
  },
  {
    id: "classic-novels-easy-6",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In 'The Count of Monte Cristo', who is the main character seeking revenge?",
    options: ["Albert Mondego", "Edmond Dantès", "Fernand Mondego", "Valentine de Villefort"],
    correctAnswer: 1,
    explanation: "Edmond Dantès is wrongly imprisoned and later becomes the Count of Monte Cristo, seeking vengeance on those who betrayed him."
  },
  {
    id: "classic-novels-easy-7",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the setting of 'A Tale of Two Cities'?",
    options: ["London and Paris", "London and Amsterdam", "Paris and Berlin", "London and Rome"],
    correctAnswer: 0,
    explanation: "Charles Dickens' novel is set in London and Paris during the French Revolution."
  },
  {
    id: "classic-novels-easy-8",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "'Great Expectations' was written by Charles Dickens.",
    correctAnswer: 1,
    explanation: "True. Great Expectations (1861) follows Pip's journey from childhood to adulthood in Victorian England."
  },
  {
    id: "classic-novels-easy-9",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "'Anna Karenina' is set primarily in Russia.",
    correctAnswer: 1,
    explanation: "True. Leo Tolstoy's novel is set in 19th-century Russia and explores themes of love, family, and society."
  },
  {
    id: "classic-novels-easy-10",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "'The Three Musketeers' is by Victor Hugo.",
    correctAnswer: 0,
    explanation: "False. The Three Musketeers was written by Alexandre Dumas, not Victor Hugo. Victor Hugo wrote Les Misérables."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "classic-novels-medium-1",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Great Gatsby'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
    correctAnswer: 1,
    explanation: "F. Scott Fitzgerald published The Great Gatsby in 1925, often called the Great American Novel."
  },
  {
    id: "classic-novels-medium-2",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the main theme of George Orwell's '1984'?",
    options: ["A love story", "Totalitarianism and oppression", "Science fiction adventure", "A detective mystery"],
    correctAnswer: 1,
    explanation: "1984 depicts a dystopian totalitarian society with themes of surveillance, control, and the manipulation of truth."
  },
  {
    id: "classic-novels-medium-3",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In 'The Picture of Dorian Gray', what does Dorian Gray wish for?",
    options: ["Eternal youth", "Wealth and power", "To remain beautiful while his portrait ages", "To become famous"],
    correctAnswer: 2,
    explanation: "Oscar Wilde's protagonist wishes to remain young while his magical portrait bears the marks of aging and sin."
  },
  {
    id: "classic-novels-medium-4",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which novel features the character Heathcliff?",
    options: ["Jane Eyre", "Wuthering Heights", "The Tenant of Wildfell Hall", "The Governess"],
    correctAnswer: 1,
    explanation: "Heathcliff is the brooding, mysterious protagonist of Emily Brontë's Wuthering Heights."
  },
  {
    id: "classic-novels-medium-5",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the setting of 'The Strange Case of Dr. Jekyll and Mr. Hyde'?",
    options: ["Victorian Paris", "Victorian London", "Victorian Edinburgh", "Victorian Berlin"],
    correctAnswer: 1,
    explanation: "Robert Louis Stevenson's novel is set in London during the Victorian era."
  },
  {
    id: "classic-novels-medium-6",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'Les Misérables'?",
    options: ["Alexandre Dumas", "Victor Hugo", "Émile Zola", "Gustave Flaubert"],
    correctAnswer: 1,
    explanation: "Victor Hugo wrote Les Misérables, an epic novel set during the French Revolution and its aftermath."
  },
  {
    id: "classic-novels-medium-7",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In 'Sense and Sensibility', who are the two main sisters?",
    options: ["Elizabeth and Jane", "Anne and Charlotte", "Elinor and Marianne", "Emma and Harriet"],
    correctAnswer: 2,
    explanation: "Elinor and Marianne are the contrasting sisters in Jane Austen's 1811 novel about sense and emotion."
  },
  {
    id: "classic-novels-medium-8",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "George Orwell wrote '1984' as a dystopian novel.",
    correctAnswer: 1,
    explanation: "True. 1984 depicts a nightmarish totalitarian future society with pervasive surveillance and mind control."
  },
  {
    id: "classic-novels-medium-9",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "'Frankenstein' is named after the monster in Mary Shelley's novel.",
    correctAnswer: 0,
    explanation: "False. Frankenstein is the name of the scientist (Victor Frankenstein), not the monster. The monster is often called 'the creature'."
  },
  {
    id: "classic-novels-medium-10",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "'War and Peace' by Tolstoy is primarily set during the Napoleonic Wars.",
    correctAnswer: 1,
    explanation: "True. War and Peace is set in Russia during the Napoleonic Wars and explores both historical events and personal narratives."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "classic-novels-hard-1",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the narrator's name in 'The Great Gatsby'?",
    options: ["Jay Gatsby", "Nick Carraway", "Tom Buchanan", "Daisy Buchanan"],
    correctAnswer: 1,
    explanation: "Nick Carraway is the story's narrator and tells the tale of his neighbor Jay Gatsby's obsession with Daisy."
  },
  {
    id: "classic-novels-hard-2",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In 'Pride and Prejudice', what is Mr. Darcy's first name?",
    options: ["William", "Charles", "Fitzwilliam", "Edward"],
    correctAnswer: 2,
    explanation: "His full name is Fitzwilliam Darcy, the stern aristocrat who eventually falls for Elizabeth Bennet."
  },
  {
    id: "classic-novels-hard-3",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is Pip's real name in 'Great Expectations'?",
    options: ["Philip Pirrip", "Peter Pirrip", "Paul Pirrip", "Patrick Pirrip"],
    correctAnswer: 0,
    explanation: "Pip is a nickname for Philip Pirrip, the novel's protagonist and narrator."
  },
  {
    id: "classic-novels-hard-4",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many chapters does 'One Hundred Years of Solitude' typically have?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 2,
    explanation: "Gabriel García Márquez's magical realist masterpiece typically contains around 20-25 chapters depending on the edition."
  },
  {
    id: "classic-novels-hard-5",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In 'Rebecca', what is the name of the mysterious first wife?",
    options: ["Rebecca de Winter", "Rebecca Manderley", "Rebecca Ashford", "Rebecca Grange"],
    correctAnswer: 0,
    explanation: "Rebecca de Winter is the dead first wife of Maxim de Winter whose presence haunts Daphne du Maurier's Gothic novel."
  },
  {
    id: "classic-novels-hard-6",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the first line of 'It' by Stephen King?",
    options: ["'The book is written from the perspective of fear'", "'The terror, which would not end for another twenty-eight years'", "'We were somewhere around Barstow'", "'It was the best of times'"],
    correctAnswer: 1,
    explanation: "King's epic opens with 'The terror, which would not end for another twenty-eight years if it ever did end...'"
  },
  {
    id: "classic-novels-hard-7",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How old was Mary Shelley when she wrote 'Frankenstein'?",
    options: ["16 years old", "18 years old", "20 years old", "22 years old"],
    correctAnswer: 1,
    explanation: "Mary Shelley began writing Frankenstein in 1816 at age 18 during a summer stay in Geneva."
  },
  {
    id: "classic-novels-hard-8",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "The subtitle of 'Frankenstein' is 'The Modern Prometheus'.",
    correctAnswer: 1,
    explanation: "True. The full title is 'Frankenstein; or, The Modern Prometheus', comparing Victor to the Greek titan."
  },
  {
    id: "classic-novels-hard-9",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "'Crime and Punishment' is set in St. Petersburg, Russia.",
    correctAnswer: 1,
    explanation: "True. Dostoevsky's novel is set in 19th-century St. Petersburg and explores the psychological torment of the protagonist Raskolnikov."
  },
  {
    id: "classic-novels-hard-10",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "'Moby Dick' is more commonly read today than 'Pride and Prejudice'.",
    correctAnswer: 0,
    explanation: "False. While both are classics, Pride and Prejudice is more widely read and adapted than Moby Dick in modern times."
  }
] satisfies QuizQuestion[];
