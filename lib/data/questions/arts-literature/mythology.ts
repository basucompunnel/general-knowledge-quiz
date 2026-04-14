// Mythology Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const mythologyQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mythology-easy-1",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the king of the Greek gods?",
    options: ["Poseidon", "Hades", "Zeus", "Apollo"],
    correctAnswer: 2,
    explanation: "Zeus was the ruler of Mount Olympus and king of all gods in Greek mythology."
  },
  {
    id: "mythology-easy-2",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was Thor's hammer called?",
    options: ["Excalibur", "Mjolnir", "Gungnir", "Gram"],
    correctAnswer: 1,
    explanation: "Mjolnir was Thor's legendary hammer in Norse mythology, forged by dwarven smiths."
  },
  {
    id: "mythology-easy-3",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which Greek god carries a trident?",
    options: ["Hades", "Poseidon", "Apollo", "Hermes"],
    correctAnswer: 1,
    explanation: "Poseidon, god of the sea, is typically depicted carrying a trident as his symbol of power."
  },
  {
    id: "mythology-easy-4",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the Greek goddess of love and beauty?",
    options: ["Hera", "Aphrodite", "Artemis", "Athena"],
    correctAnswer: 1,
    explanation: "Aphrodite was the Greek goddess of love, beauty, and desire, born from the sea foam."
  },
  {
    id: "mythology-easy-5",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the underworld called in Greek mythology?",
    options: ["Tartarus", "Hades", "Erebus", "Sheol"],
    correctAnswer: 1,
    explanation: "Hades is the underworld where the dead reside, ruled by the god also named Hades."
  },
  {
    id: "mythology-easy-6",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which creature has the body of a lion and a human head?",
    options: ["Chimera", "Manticore", "Sphinx", "Harpy"],
    correctAnswer: 2,
    explanation: "The Sphinx is a legendary creature with a human head and the body of a lion, famous for its riddles."
  },
  {
    id: "mythology-easy-7",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a centaur?",
    options: ["A creature with eagle wings and a lion body", "A creature half-human, half-horse", "A creature half-human, half-fish", "A creature with multiple snake heads"],
    correctAnswer: 1,
    explanation: "A centaur is a mythological creature that is half-human and half-horse, from Greek and Roman mythology."
  },
  {
    id: "mythology-easy-8",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Athena was the Greek goddess of wisdom.",
    correctAnswer: 1,
    explanation: "True. Athena was also associated with warfare, craft, and strategy."
  },
  {
    id: "mythology-easy-9",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "There are twelve major Greek gods known as the Olympians.",
    correctAnswer: 1,
    explanation: "True. The Twelve Olympians are the principal deities of Greek mythology living on Mount Olympus."
  },
  {
    id: "mythology-easy-10",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "easy",
    question: "Heracles and Hercules refer to the same mythological hero.",
    correctAnswer: 1,
    explanation: "True. Heracles is the Greek name and Hercules is the Roman name for the same legendary hero known for his twelve labors."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mythology-medium-1",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who was forced to hold up the sky in Greek mythology?",
    options: ["Hercules", "Atlas", "Prometheus", "Sisyphus"],
    correctAnswer: 1,
    explanation: "Atlas was condemned to hold the celestial heavens on his shoulders for eternity as punishment."
  },
  {
    id: "mythology-medium-2",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What punishment did Prometheus receive for stealing fire for humans?",
    options: ["Immortal torment by an eagle", "To push a boulder uphill forever", "To spin gold from straw", "To guard the gates of Hades"],
    correctAnswer: 0,
    explanation: "Prometheus was chained to a rock where an eagle ate his liver daily in perpetuity for giving fire to mankind."
  },
  {
    id: "mythology-medium-3",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In Greek mythology, what does Odysseus encounter with multiple heads?",
    options: ["Cerberus", "Medusa", "Scylla", "Hydra"],
    correctAnswer: 3,
    explanation: "The Lernean Hydra was a serpent with multiple heads that Hercules defeated as his second labor."
  },
  {
    id: "mythology-medium-4",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who is the Norse god of war and wisdom?",
    options: ["Thor", "Loki", "Odin", "Freyr"],
    correctAnswer: 2,
    explanation: "Odin is the chief god in Norse mythology, associated with war, wisdom, poetry, and death."
  },
  {
    id: "mythology-medium-5",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the Norse realm where warriors who die in battle go?",
    options: ["Asgard", "Valhalla", "Niflheim", "Muspelheim"],
    correctAnswer: 1,
    explanation: "Valhalla is the hall in Asgard where the valiant warriors chosen by the Valkyries reside after death."
  },
  {
    id: "mythology-medium-6",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In Egyptian mythology, who is the god of the afterlife?",
    options: ["Ra", "Osiris", "Set", "Thoth"],
    correctAnswer: 1,
    explanation: "Osiris is the Egyptian god of the afterlife, resurrection, and the underworld."
  },
  {
    id: "mythology-medium-7",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which creature does Theseus fight in a labyrinth?",
    options: ["The Nemean Lion", "The Minotaur", "Cerberus", "The Chimera"],
    correctAnswer: 1,
    explanation: "Theseus defeats the Minotaur, a creature that is half-bull and half-man, in the labyrinth of Knossos."
  },
  {
    id: "mythology-medium-8",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "In Norse mythology, Ragnarök is the prophesied end of the world.",
    correctAnswer: 1,
    explanation: "True. Ragnarök describes a catastrophic series of events leading to the world's destruction and rebirth."
  },
  {
    id: "mythology-medium-9",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Medusa could turn people to stone by looking at them.",
    correctAnswer: 1,
    explanation: "True. Medusa's gaze had the power to turn anyone who looked at her to stone."
  },
  {
    id: "mythology-medium-10",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Aphrodite was born from sea foam.",
    correctAnswer: 1,
    explanation: "True. According to Greek mythology, Aphrodite emerged from the sea foam after Kronos's castration."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "mythology-hard-1",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What are the three Fates in Greek mythology called?",
    options: ["The Norns", "The Moirai", "The Furies", "The Titans"],
    correctAnswer: 1,
    explanation: "The three Moirai (Clotho, Lachesis, and Atropos) control the thread of every human's life."
  },
  {
    id: "mythology-hard-2",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In the Trojan War, what was the wooden horse used for?",
    options: ["To transport soldiers", "As a siege weapon", "To smuggle Greek soldiers into Troy", "To carry supplies"],
    correctAnswer: 2,
    explanation: "The Trojan Horse was used by the Greeks to deceive the Trojans and sneak soldiers into the city."
  },
  {
    id: "mythology-hard-3",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many labors did Hercules (Heracles) have to complete?",
    options: ["Six", "Nine", "Twelve", "Fifteen"],
    correctAnswer: 2,
    explanation: "Heracles performed Twelve Labors as penance for killing his family in a fit of madness caused by Hera."
  },
  {
    id: "mythology-hard-4",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of Odin's spear in Norse mythology?",
    options: ["Gungnir", "Hofund", "Draupnir", "Serpent's Eye"],
    correctAnswer: 0,
    explanation: "Gungnir is Odin's magical spear that always hits its target, forged by dwarven smiths."
  },
  {
    id: "mythology-hard-5",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In Hindu mythology, who is the god of destruction and transformation?",
    options: ["Brahma", "Vishnu", "Shiva", "Indra"],
    correctAnswer: 2,
    explanation: "Shiva is the god of destruction and transformation, part of the Hindu trinity (Trimurti) with Brahma and Vishnu."
  },
  {
    id: "mythology-hard-6",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is Excalibur in Arthurian legend?",
    options: ["A shield", "A magical sword", "A castle", "A magical book"],
    correctAnswer: 1,
    explanation: "Excalibur is King Arthur's legendary sword, said to have been forged by the Lady of the Lake."
  },
  {
    id: "mythology-hard-7",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the rainbow bridge in Norse mythology?",
    options: ["Yggdrasil", "Bifrost", "Asgard", "Midgard"],
    correctAnswer: 1,
    explanation: "Bifrost is the rainbow bridge that connects Midgard (Earth) to Asgard (home of the gods) in Norse mythology."
  },
  {
    id: "mythology-hard-8",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Loki is bound in chains beneath the earth with serpent venom dripping on him.",
    correctAnswer: 1,
    explanation: "True. As punishment for causing Ragnarök, Loki is chained and has serpent venom drip on him until the world's end."
  },
  {
    id: "mythology-hard-9",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Prometheus stole fire from the gods to help humanity.",
    correctAnswer: 1,
    explanation: "True. Prometheus defied Zeus by stealing fire from the gods and giving it to mankind, leading to his eternal punishment."
  },
  {
    id: "mythology-hard-10",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Achilles' weakness was his heel.",
    correctAnswer: 1,
    explanation: "True. According to Greek mythology, Achilles was invulnerable except for his heel, where he was struck by Paris's arrow."
  }
] satisfies QuizQuestion[];
