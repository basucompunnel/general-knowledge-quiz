// Celebrities Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const celebritiesQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "celebrities-easy-1",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actress played Hermione in the Harry Potter films?",
    options: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emily Blunt"],
    correctAnswer: 0,
    explanation: "Emma Watson portrayed Hermione Granger throughout the entire Harry Potter film series."
  },
  {
    id: "celebrities-easy-2",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who plays Iron Man in the Marvel Cinematic Universe?",
    options: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Tom Hiddleston"],
    correctAnswer: 0,
    explanation: "Robert Downey Jr. played Tony Stark/Iron Man throughout the MCU films."
  },
  {
    id: "celebrities-easy-3",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actor played the Joker in 'The Dark Knight'?",
    options: ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"],
    correctAnswer: 1,
    explanation: "Heath Ledger delivered an iconic performance as the Joker in 2008."
  },
  {
    id: "celebrities-easy-4",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the highest-paid actor of recent years?",
    options: ["Tom Cruise", "Dwayne Johnson", "Shah Rukh Khan", "Jerry Seinfeld"],
    correctAnswer: 1,
    explanation: "Dwayne 'The Rock' Johnson has been among the highest-paid actors."
  },
  {
    id: "celebrities-easy-5",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actress starred in 'Legally Blonde'?",
    options: ["Reese Witherspoon", "Jennifer Aniston", "Cameron Diaz", "Drew Barrymore"],
    correctAnswer: 0,
    explanation: "Reese Witherspoon played Elle Woods in the 2001 comedy film."
  },
  {
    id: "celebrities-easy-6",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who played Superman in the Christopher Reeve films?",
    options: ["Christopher Reeve", "Henry Cavill", "Brandon Routh", "Dean Cain"],
    correctAnswer: 0,
    explanation: "Christopher Reeve is iconic for his portrayal of Superman in four films from 1978-1987."
  },
  {
    id: "celebrities-easy-7",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actor is known for the 'Mission: Impossible' franchise?",
    options: ["Matt Damon", "Tom Cruise", "Jeremy Renner", "Christian Bale"],
    correctAnswer: 1,
    explanation: "Tom Cruise has starred in and produced the Mission: Impossible films since 1996."
  },
  {
    id: "celebrities-easy-8",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Tom Hanks won two consecutive Best Actor Oscars.",
    correctAnswer: 1,
    explanation: "True. Hanks won for 'Philadelphia' (1993) and 'Forrest Gump' (1994)."
  },
  {
    id: "celebrities-easy-9",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Meryl Streep has been nominated for more Academy Awards than any other actor.",
    correctAnswer: 1,
    explanation: "True. Streep has received 21+ Academy Award nominations, the most of any actor."
  },
  {
    id: "celebrities-easy-10",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "easy",
    question: "Johnny Depp played Captain Jack Sparrow in the Pirates of the Caribbean films.",
    correctAnswer: 1,
    explanation: "True. Depp's portrayal of the eccentric pirate became iconic over five films."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "celebrities-medium-1",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which celebrity couple was known as 'Brangelina'?",
    options: ["Brad Pitt and Jennifer Aniston", "Brad Pitt and Angelina Jolie", "Bradley Cooper and Angelina Jolie", "Brandon Lee and Angela Bassett"],
    correctAnswer: 1,
    explanation: "Brad Pitt and Angelina Jolie were dubbed 'Brangelina' by the media during their relationship."
  },
  {
    id: "celebrities-medium-2",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actor won three Academy Awards for acting?",
    options: ["Denzel Washington", "Jack Lemmon", "Daniel Day-Lewis", "Jack Nicholson"],
    correctAnswer: 2,
    explanation: "Daniel Day-Lewis won 3 Best Actor Oscars (1989, 2002, 2012)."
  },
  {
    id: "celebrities-medium-3",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who is married to Beyoncé?",
    options: ["Chris Brown", "Jay-Z", "Kanye West", "Drake"],
    correctAnswer: 1,
    explanation: "Beyoncé is married to rapper and music executive Jay-Z since 2008."
  },
  {
    id: "celebrities-medium-4",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actress has appeared in the most movies according to some counts?",
    options: ["Meryl Streep", "Marilyn Monroe", "Zoe Tate", "Gloria Holden"],
    correctAnswer: 3,
    explanation: "Gloria Holden appeared in over 90 films during the 1930s-1940s era."
  },
  {
    id: "celebrities-medium-5",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who is the most-followed person on Instagram?",
    options: ["Kylie Jenner", "Cristiano Ronaldo", "Lionel Messi", "Taylor Swift"],
    correctAnswer: 1,
    explanation: "Cristiano Ronaldo has over 600 million followers, making him the most-followed person."
  },
  {
    id: "celebrities-medium-6",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actor starred in all three original 'Back to the Future' films?",
    options: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson", "Tom Wilson"],
    correctAnswer: 0,
    explanation: "Michael J. Fox played Marty McFly throughout the trilogy."
  },
  {
    id: "celebrities-medium-7",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actress is known for the 'Resident Evil' film franchise?",
    options: ["Milla Jovovich", "Kate Beckinsale", "Charlize Theron", "Sigourney Weaver"],
    correctAnswer: 0,
    explanation: "Milla Jovovich starred in six Resident Evil films from 2002-2016."
  },
  {
    id: "celebrities-medium-8",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Bruce Willis was a musician before becoming an actor.",
    correctAnswer: 1,
    explanation: "True. Willis recorded a successful recording in 1987 with the single 'Respect Yourself'."
  },
  {
    id: "celebrities-medium-9",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Angelina Jolie has adopted children from multiple countries.",
    correctAnswer: 1,
    explanation: "True. Jolie has adopted children from Cambodia, Vietnam, and Ethiopia."
  },
  {
    id: "celebrities-medium-10",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Arnold Schwarzenegger served as Governor of California.",
    correctAnswer: 1,
    explanation: "True. Schwarzenegger was Governor of California from 2003 to 2011."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "celebrities-hard-1",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which actor has won the most BAFTA Awards?",
    options: ["Jack Lemmon", "Laurence Olivier", "Meryl Streep", "Peter Ustinov"],
    correctAnswer: 3,
    explanation: "Peter Ustinov won 4 BAFTA Awards, more than any other actor."
  },
  {
    id: "celebrities-hard-2",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "In what year was Leonardo DiCaprio born?",
    options: ["1971", "1972", "1974", "1975"],
    correctAnswer: 2,
    explanation: "Leonardo DiCaprio was born on November 11, 1974."
  },
  {
    id: "celebrities-hard-3",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which actress is the godmother of Prince George?",
    options: ["Kate Middleton", "Meghan Markle", "Pippa Middleton", "Savannah Phillips"],
    correctAnswer: 2,
    explanation: "Pippa Middleton, the sister of Catherine, Princess of Wales, is godmother to Prince George."
  },
  {
    id: "celebrities-hard-4",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How many Academy Award nominations has Meryl Streep received?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 3,
    explanation: "Meryl Streep has received 21 Academy Award nominations, the record for any actor."
  },
  {
    id: "celebrities-hard-5",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which actor played Rocky Balboa in the original 1976 film?",
    options: ["Arnold Schwarzenegger", "Sylvester Stallone", "Jean-Claude Van Damme", "Steven Seagal"],
    correctAnswer: 1,
    explanation: "Sylvester Stallone played Rocky Balboa and also wrote the screenplay and directed the film."
  },
  {
    id: "celebrities-hard-6",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which actor has appeared in the most films according to some sources?",
    options: ["Samuel L. Jackson", "Stan Lee", "Bud Spencer", "Christopher Lee"],
    correctAnswer: 0,
    explanation: "Samuel L. Jackson has appeared in over 150 films, one of the highest counts in cinema history."
  },
  {
    id: "celebrities-hard-7",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is Oprah Winfrey's real first name?",
    options: ["Orpah", "Ophelia", "Opal", "Olympia"],
    correctAnswer: 0,
    explanation: "Oprah's real name is Orpah, but a mispronunciation led to the name 'Oprah' being used."
  },
  {
    id: "celebrities-hard-8",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Julia Roberts and Eric Roberts are siblings.",
    correctAnswer: 1,
    explanation: "True. Julia Roberts' brother Eric Roberts is also an accomplished actor."
  },
  {
    id: "celebrities-hard-9",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Marilyn Monroe's real name was Norma Jeane Mortenson.",
    correctAnswer: 1,
    explanation: "True. Monroe was born Norma Jeane Mortenson Baker and adopted her stage name."
  },
  {
    id: "celebrities-hard-10",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Morgan Freeman has been nominated for an Academy Award.",
    correctAnswer: 1,
    explanation: "True. Freeman has been nominated for 5 Academy Awards and won 1 for Best Supporting Actor."
  }
] satisfies QuizQuestion[];
