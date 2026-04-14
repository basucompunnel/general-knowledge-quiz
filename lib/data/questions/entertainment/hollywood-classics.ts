// Hollywood Classics Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const hollywoodClassicsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "hollywood-classics-easy-1",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who directed 'The Godfather'?",
    options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Quentin Tarantino"],
    correctAnswer: 1,
    explanation: "Francis Ford Coppola directed The Godfather in 1972, creating a masterpiece."
  },
  {
    id: "hollywood-classics-easy-2",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which film won the most Oscars ever?",
    options: ["Titanic", "Ben-Hur", "Both A and B tied", "The Lord of the Rings: Return of the King"],
    correctAnswer: 2,
    explanation: "Ben-Hur, Titanic, and LOTR: Return of the King each won 11 Oscars."
  },
  {
    id: "hollywood-classics-easy-3",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who starred in 'Singin' in the Rain'?",
    options: ["Fred Astaire", "Gene Kelly", "Cary Grant", "James Stewart"],
    correctAnswer: 1,
    explanation: "Gene Kelly starred in and choreographed the 1952 musical classic."
  },
  {
    id: "hollywood-classics-easy-4",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actress starred in 'Breakfast at Tiffany's'?",
    options: ["Marilyn Monroe", "Audrey Hepburn", "Grace Kelly", "Elizabeth Taylor"],
    correctAnswer: 1,
    explanation: "Audrey Hepburn played Holly Golightly in the iconic 1961 film."
  },
  {
    id: "hollywood-classics-easy-5",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who directed 'Sunset Boulevard'?",
    options: ["Otto Preminger", "Billy Wilder", "George Cukor", "Vincente Minnelli"],
    correctAnswer: 1,
    explanation: "Billy Wilder directed the 1950 film noir classic about Hollywood."
  },
  {
    id: "hollywood-classics-easy-6",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What famous line is from 'Casablanca'?",
    options: ["You can't handle the truth", "Here's looking at you, kid", "I'll be back", "Show me the money"],
    correctAnswer: 1,
    explanation: "'Here's looking at you, kid' is one of cinema's most famous lines from Casablanca."
  },
  {
    id: "hollywood-classics-easy-7",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who starred in 'It's a Wonderful Life'?",
    options: ["Cary Grant", "James Stewart", "Gary Cooper", "Humphrey Bogart"],
    correctAnswer: 1,
    explanation: "James Stewart played George Bailey in Frank Capra's 1946 classic."
  },
  {
    id: "hollywood-classics-easy-8",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Casablanca' was released during World War II.",
    correctAnswer: 1,
    explanation: "True. Casablanca was released in 1942 during WWII."
  },
  {
    id: "hollywood-classics-easy-9",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Vertigo' was directed by Alfred Hitchcock.",
    correctAnswer: 1,
    explanation: "True. Hitchcock directed Vertigo in 1958, considered one of his masterpieces."
  },
  {
    id: "hollywood-classics-easy-10",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "'Rear Window' starred Grace Kelly.",
    correctAnswer: 1,
    explanation: "True. Grace Kelly starred opposite James Stewart in Hitchcock's 1954 thriller."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "hollywood-classics-medium-1",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who won the Academy Award for Best Actor in 'One Flew Over the Cuckoo's Nest'?",
    options: ["Jack Nicholson", "Peter Fonda", "Warren Beatty", "Al Pacino"],
    correctAnswer: 0,
    explanation: "Jack Nicholson won for his role as Randle McMurphy in the 1975 film."
  },
  {
    id: "hollywood-classics-medium-2",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who directed 'Psycho'?",
    options: ["Otto Preminger", "Alfred Hitchcock", "Billy Wilder", "Elia Kazan"],
    correctAnswer: 1,
    explanation: "Alfred Hitchcock directed the 1960 thriller that revolutionized horror films."
  },
  {
    id: "hollywood-classics-medium-3",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was 'Gone with the Wind' released?",
    options: ["1937", "1939", "1942", "1945"],
    correctAnswer: 1,
    explanation: "Gone with the Wind was released in 1939 and won 10 Academy Awards."
  },
  {
    id: "hollywood-classics-medium-4",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who starred opposite Marilyn Monroe in 'Some Like It Hot'?",
    options: ["Cary Grant", "Tony Curtis", "James Stewart", "Frank Sinatra"],
    correctAnswer: 1,
    explanation: "Tony Curtis starred with Marilyn Monroe and Jack Lemmon in the 1959 comedy."
  },
  {
    id: "hollywood-classics-medium-5",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who played Doris Walker in 'Miracle on 34th Street'?",
    options: ["Debbie Reynolds", "Myrna Loy", "Loretta Young", "Celia Johnson"],
    correctAnswer: 2,
    explanation: "Loretta Young starred in the 1947 Christmas classic."
  },
  {
    id: "hollywood-classics-medium-6",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who directed 'A Place in the Sun'?",
    options: ["George Stevens", "William Wyler", "Frank Capra", "Elia Kazan"],
    correctAnswer: 0,
    explanation: "George Stevens directed the 1951 film starring Elizabeth Taylor and Montgomery Clift."
  },
  {
    id: "hollywood-classics-medium-7",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the 'MacGuffin' concept associated with Alfred Hitchcock?",
    options: ["A plot device that drives the action", "A camera technique", "A type of film music", "A editing style"],
    correctAnswer: 0,
    explanation: "A MacGuffin is an object that drives the plot but is relatively unimportant to the story."
  },
  {
    id: "hollywood-classics-medium-8",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Citizen Kane' was Orson Welles' directorial debut.",
    correctAnswer: 1,
    explanation: "True. Welles co-wrote, directed, produced, and starred in Citizen Kane at age 25."
  },
  {
    id: "hollywood-classics-medium-9",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Singin' in the Rain' has the famous rain dance sequence.",
    correctAnswer: 1,
    explanation: "True. Gene Kelly performed the iconic dance number in the 1952 film."
  },
  {
    id: "hollywood-classics-medium-10",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'The Maltese Falcon' starred Humphrey Bogart.",
    correctAnswer: 1,
    explanation: "True. Bogart played detective Sam Spade in the 1941 film noir classic."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "hollywood-classics-hard-1",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who directed 'The Seventh Seal'?",
    options: ["Akira Kurosawa", "Ingmar Bergman", "Jean-Luc Godard", "Federico Fellini"],
    correctAnswer: 1,
    explanation: "Ingmar Bergman directed the 1957 Swedish masterpiece about death and mortality."
  },
  {
    id: "hollywood-classics-hard-2",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the first feature-length animated film ever released?",
    options: ["Snow White", "Cinderella", "Fantasia", "Sleeping Beauty"],
    correctAnswer: 0,
    explanation: "Snow White and the Seven Dwarfs (1937) was the first full-length animated feature film."
  },
  {
    id: "hollywood-classics-hard-3",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the first actress to win three Academy Awards?",
    options: ["Bette Davis", "Katharine Hepburn", "Meryl Streep", "Ingrid Bergman"],
    correctAnswer: 1,
    explanation: "Katharine Hepburn won three Best Actress Oscars (1933, 1967, 1981)."
  },
  {
    id: "hollywood-classics-hard-4",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the highest-grossing film adjusted for inflation per some estimates?",
    options: ["Gone with the Wind", "The Sound of Music", "Ben-Hur", "The Ten Commandments"],
    correctAnswer: 0,
    explanation: "Gone with the Wind (1939) had phenomenal box office success with multiple re-releases."
  },
  {
    id: "hollywood-classics-hard-5",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Hitchcock film is also known as 'The Circle'?",
    options: ["Vertigo", "Shadow of a Doubt", "Rope", "Dial M for Murder"],
    correctAnswer: 1,
    explanation: "Shadow of a Doubt was Hitchcock's personal favorite of his own films."
  },
  {
    id: "hollywood-classics-hard-6",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the composer for 'Jaws'?",
    options: ["John Williams", "Jerry Goldsmith", "Elmer Bernstein", "Maurice Jarre"],
    correctAnswer: 0,
    explanation: "John Williams composed the iconic theme for Jaws in 1975."
  },
  {
    id: "hollywood-classics-hard-7",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What 1927 film is often called the first modern feature film?",
    options: ["Metropolis", "Nosferatu", "The General", "Battleship Potemkin"],
    correctAnswer: 0,
    explanation: "Metropolis was an ambitious German expressionist science fiction film by Fritz Lang."
  },
  {
    id: "hollywood-classics-hard-8",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'La Dolce Vita' was directed by Federico Fellini.",
    correctAnswer: 1,
    explanation: "True. Fellini directed the 1960 Italian film about life in Rome."
  },
  {
    id: "hollywood-classics-hard-9",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'2001: A Space Odyssey' was directed by Stanley Kubrick.",
    correctAnswer: 1,
    explanation: "True. Kubrick directed the 1968 science fiction masterpiece."
  },
  {
    id: "hollywood-classics-hard-10",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Singin' in the Rain' was Gene Kelly's own choreography.",
    correctAnswer: 1,
    explanation: "True. Kelly choreographed and performed the rain sequence in the film."
  }
] satisfies QuizQuestion[];
