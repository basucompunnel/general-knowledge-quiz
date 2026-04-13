// Cold War Questions
// Current: 30 questions (Full topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const coldWarQuestions: QuizQuestion[] = [
  {
    id: "coldwar-easy-1",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which two superpowers were rivals during the Cold War?",
    options: ["USA and China", "USA and USSR", "USSR and Germany", "USA and Japan"],
    correctAnswer: 1,
    explanation: "The Cold War (1947-1991) was primarily between the United States and the Soviet Union (USSR)."
  },
  {
    id: "coldwar-easy-2",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was built in 1961 to divide East and West Berlin?",
    options: ["The Iron Curtain", "The Berlin Wall", "The Brandenburg Gate", "Checkpoint Charlie"],
    correctAnswer: 1,
    explanation: "The Berlin Wall was erected in 1961 and stood until 1989, symbolizing the Cold War division."
  },
  {
    id: "coldwar-easy-3",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What type of race did the USA and USSR engage in during the Cold War?",
    options: ["Economic race", "Space race", "Cultural race", "Trade race"],
    correctAnswer: 1,
    explanation: "The Space Race was a competition for space exploration dominance, including landing on the Moon."
  },
  {
    id: "coldwar-easy-4",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which military alliance did Western countries form?",
    options: ["SEATO", "NATO", "Warsaw Pact", "CENTO"],
    correctAnswer: 1,
    explanation: "NATO (North Atlantic Treaty Organization) was formed in 1949 as a Western military alliance."
  },
  {
    id: "coldwar-easy-5",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the Soviet leader during the Cuban Missile Crisis?",
    options: ["Joseph Stalin", "Leonid Brezhnev", "Nikita Khrushchev", "Mikhail Gorbachev"],
    correctAnswer: 2,
    explanation: "Nikita Khrushchev led the USSR during the 1962 Cuban Missile Crisis, bringing the world to the brink of nuclear war."
  },
  {
    id: "coldwar-easy-6",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country did the Soviet Union invade in 1979?",
    options: ["Iran", "Afghanistan", "Pakistan", "Iraq"],
    correctAnswer: 1,
    explanation: "The Soviet-Afghan War (1979-1989) was a major Cold War conflict that contributed to the USSR's decline."
  },
  {
    id: "coldwar-easy-7",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What year did the Soviet Union collapse?",
    options: ["1989", "1990", "1991", "1992"],
    correctAnswer: 2,
    explanation: "The Soviet Union officially dissolved on December 26, 1991, ending the Cold War."
  },
  {
    id: "coldwar-easy-8",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Cold War involved direct military conflict between the USA and USSR.",
    correctAnswer: 0,
    explanation: "False. While there were proxy wars, the superpowers never engaged in direct military combat."
  },
  {
    id: "coldwar-easy-9",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Berlin Wall fell in 1989.",
    correctAnswer: 1,
    explanation: "True. The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War era."
  },
  {
    id: "coldwar-easy-10",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Cold War was called 'cold' because it took place in winter.",
    correctAnswer: 0,
    explanation: "False. It was called 'cold' because there was no direct 'hot' warfare between the main superpowers."
  },
  {
    id: "coldwar-medium-1",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Marshall Plan?",
    options: ["A military strategy", "Economic aid to rebuild Europe", "A space program", "A nuclear treaty"],
    correctAnswer: 1,
    explanation: "The Marshall Plan (194 8-1952) provided over $13 billion to rebuild Western European economies."
  },
  {
    id: "coldwar-medium-2",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which US President announced the policy of containment?",
    options: ["Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John F. Kennedy"],
    correctAnswer: 1,
    explanation: "The Truman Doctrine (1947) committed the US to containing Soviet expansion."
  },
  {
    id: "coldwar-medium-3",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was glasnost?",
    options: ["Openness and transparency", "Military buildup", "Economic reform", "Space program"],
    correctAnswer: 0,
    explanation: "Glasnost ('openness') was Gorbachev's policy of transparency in government institutions."
  },
  {
    id: "coldwar-medium-4",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which war is considered the first major proxy conflict of the Cold War?",
    options: ["Vietnam War", "Korean War", "Afghan War", "Arab-Israeli War"],
    correctAnswer: 1,
    explanation: "The Korean War (1950-1953) saw US-backed South Korea fight Soviet-backed North Korea."
  },
  {
    id: "coldwar-medium-5",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Warsaw Pact?",
    options: ["A peace treaty", "Soviet military alliance", "Trade agreement", "Nuclear treaty"],
    correctAnswer: 1,
    explanation: "The Warsaw Pact (1955-1991) was the Soviet bloc's military alliance, countering NATO."
  },
  {
    id: "coldwar-medium-6",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Soviet leader introduced perestroika?",
    options: ["Leonid Brezhnev", "Yuri Andropov", "Mikhail Gorbachev", "Boris Yeltsin"],
    correctAnswer: 2,
    explanation: "Gorbachev's perestroika ('restructuring') attempted to reform the Soviet economy in the 1980s."
  },
  {
    id: "coldwar-medium-7",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the 'Iron Curtain' speech?",
    options: ["A military declaration", "Winston Churchill's 1946 speech", "A Soviet propaganda film", "A nuclear treaty announcement"],
    correctAnswer: 1,
    explanation: "Churchill's 1946 speech warned of Soviet expansion and coined the term 'Iron Curtain.'"
  },
  {
    id: "coldwar-medium-8",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Bay of Pigs invasion was a failed attempt to overthrow Fidel Castro.",
    correctAnswer: 1,
    explanation: "True. The 1961 CIA-backed invasion of Cuba was a disaster for the Kennedy administration."
  },
  {
    id: "coldwar-medium-9",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Prague Spring was a period of liberalization in Czechoslovakia crushed by Soviet tanks.",
    correctAnswer: 1,
    explanation: "True. The 1968 Prague Spring reforms were ended by Warsaw Pact invasion."
  },
  {
    id: "coldwar-medium-10",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Ronald Reagan called the Soviet Union the 'Evil Empire.'",
    correctAnswer: 1,
    explanation: "True. Reagan used this phrase in a 1983 speech, escalating Cold War rhetoric."
  },
  {
    id: "coldwar-hard-1",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Fulda Gap?",
    options: ["A spy tunnel", "Expected invasion route in Germany", "A missile site", "A diplomatic channel"],
    correctAnswer: 1,
    explanation: "The Fulda Gap was the area in Germany where NATO expected a Soviet invasion, heavily fortified during the Cold War."
  },
  {
    id: "coldwar-hard-2",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which nuclear treaty banned atmospheric nuclear testing?",
    options: ["SALT I", "START", "Partial Test Ban Treaty", "ABM Treaty"],
    correctAnswer: 2,
    explanation: "The Partial Test Ban Treaty (1963) prohibited nuclear tests in the atmosphere, underwater, and in space."
  },
  {
    id: "coldwar-hard-3",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was Operation RYAN?",
    options: ["US spy program", "Soviet intelligence operation", "Cuban operation", "Berlin airlift code name"],
    correctAnswer: 1,
    explanation: "RYAN was a Soviet intelligence operation monitoring for signs of a NATO nuclear first strike."
  },
  {
    id: "coldwar-hard-4",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the 'Butcher of Budapest'?",
    options: ["Imre Nagy", "János Kádár", "Mátyás Rákosi", "Nikita Khrushchev"],
    correctAnswer: 1,
    explanation: "János Kádár collaborated with the Soviets to crush the 1956 Hungarian Revolution."
  },
  {
    id: "coldwar-hard-5",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Able Archer 83 exercise?",
    options: ["Naval maneuver", "NATO nuclear war simulation", "Space mission", "Arctic expedition"],
    correctAnswer: 1,
    explanation: "This 1983 NATO exercise nearly triggered Soviet nuclear response due to misunderstanding."
  },
  {
    id: "coldwar-hard-6",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was Stanislav Petrov?",
    options: ["Soviet spy", "Officer who prevented nuclear war", "Cosmonaut", "KGB director"],
    correctAnswer: 1,
    explanation: "In 1983, Petrov correctly identified a false alarm preventing potential nuclear war."
  },
  {
    id: "coldwar-hard-7",
    topicId: "cold-war",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Brezhnev Doctrine?",
    options: ["Economic policy", "Right to intervene in socialist countries", "Arms treaty", "Space program"],
    correctAnswer: 1,
    explanation: "The Brezhnev Doctrine asserted the USSR's right to intervene in Eastern Bloc countries to preserve socialism."
  },
  {
    id: "coldwar-hard-8",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Kitchen Debate was an exchange between Nixon and Khrushchev at a trade fair.",
    correctAnswer: 1,
    explanation: "True. The 1959 debate in Moscow showcased ideological differences between capitalism and communism."
  },
  {
    id: "coldwar-hard-9",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "SALT I limited strategic nuclear weapons between the US and USSR.",
    correctAnswer: 1,
    explanation: "True. The Strategic Arms Limitation Talks produced the 1972 treaty limiting ICBMs and ABM systems."
  },
  {
    id: "coldwar-hard-10",
    topicId: "cold-war",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Stasi was the secret police of East Germany.",
    correctAnswer: 1,
    explanation: "True. The Stasi was one of the most effective intelligence and secret police agencies in the Cold War."
  }
] satisfies QuizQuestion[];
