// Athletics Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const athleticsQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "athletics-easy-1",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the standard distance of a marathon?",
    options: ["26.2 miles", "28.2 miles", "24.2 miles", "30 miles"],
    correctAnswer: 0,
    explanation: "A marathon is 26.2 miles or 42.195 kilometers, established as the standard Olympic distance."
  },
  {
    id: "athletics-easy-2",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the standard distance of a 100-meter sprint?",
    options: ["90 meters", "100 meters", "110 meters", "120 meters"],
    correctAnswer: 1,
    explanation: "The 100-meter dash is one of the fastest Olympic events, typically completed in under 10 seconds by elite sprinters."
  },
  {
    id: "athletics-easy-3",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the long jump?",
    options: ["A sprint down a track", "A high jump over a bar", "A jump for horizontal distance from a takeoff line", "A jump over hurdles"],
    correctAnswer: 2,
    explanation: "The long jump is a field event where athletes sprint and jump as far as possible from a marked line."
  },
  {
    id: "athletics-easy-4",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the fastest man in the world?",
    options: ["Carl Lewis", "Usain Bolt", "Jesse Owens", "Michael Johnson"],
    correctAnswer: 1,
    explanation: "Usain Bolt holds the 100m (9.58s) and 200m (19.19s) world records set at the 2009 World Championships."
  },
  {
    id: "athletics-easy-5",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What Olympic event involves running over obstacles called hurdles?",
    options: ["Steeplechase", "Sprint", "Hurdles", "Relay"],
    correctAnswer: 2,
    explanation: "Hurdles events feature runners clearing barriers at set heights and intervals."
  },
  {
    id: "athletics-easy-6",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a relay race?",
    options: ["A single runner going around the track multiple times", "A race where team members pass a baton", "A race between two runners", "A race over mixed terrain"],
    correctAnswer: 1,
    explanation: "In relay races, team members take turns running segments and passing a baton to the next runner."
  },
  {
    id: "athletics-easy-7",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the shot put?",
    options: ["Throwing a small ball", "Throwing a heavy metal sphere", "Throwing a spear", "Throwing a discus"],
    correctAnswer: 1,
    explanation: "The shot put is a throwing event where athletes propel a heavy metal ball as far as possible."
  },
  {
    id: "athletics-easy-8",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "A decathlon consists of 10 different track and field events.",
    correctAnswer: 1,
    explanation: "True. The decathlon consists of 10 track and field events spread over two days."
  },
  {
    id: "athletics-easy-9",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "The high jump has athletes jumping over a horizontal bar.",
    correctAnswer: 1,
    explanation: "True. Athletes take turns jumping over a progressively higher horizontal bar."
  },
  {
    id: "athletics-easy-10",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "easy",
    question: "Jesse Owens was an American track and field athlete who won Olympic gold medals.",
    correctAnswer: 1,
    explanation: "True. Owens won 4 gold medals at the 1936 Berlin Olympics."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "athletics-medium-1",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Usain Bolt's 100m world record time?",
    options: ["9.58 seconds", "9.69 seconds", "9.72 seconds", "9.79 seconds"],
    correctAnswer: 0,
    explanation: "Bolt set the 100m world record of 9.58 seconds at the 2009 World Championships in Berlin."
  },
  {
    id: "athletics-medium-2",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the standard track length in athletics?",
    options: ["300 meters", "400 meters", "500 meters", "600 meters"],
    correctAnswer: 1,
    explanation: "An Olympic standard running track is 400 meters in length, commonly used worldwide."
  },
  {
    id: "athletics-medium-3",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the heptathlon in female athletics?",
    options: ["7 events", "8 events", "9 events", "10 events"],
    correctAnswer: 0,
    explanation: "The heptathlon consists of 7 events for women, including sprints, jumps, throws, and distance running."
  },
  {
    id: "athletics-medium-4",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the triple jump?",
    options: ["Three consecutive long jumps", "A hop, step, and jump sequence", "Jumping three barriers", "Jumping three distances total"],
    correctAnswer: 1,
    explanation: "The triple jump involves a hop on one leg, a step onto the other leg, and a final jump into the sand pit."
  },
  {
    id: "athletics-medium-5",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the steeplechase?",
    options: ["A 3000m race with hurdles and water jumps", "A marathon with obstacles", "A sprint with stairs", "A 5000m hurdle race"],
    correctAnswer: 0,
    explanation: "The steeplechase is a 3000-meter race featuring hurdles and water obstacles that runners must navigate."
  },
  {
    id: "athletics-medium-6",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is race walking an Olympic event?",
    options: ["Jogging for distance", "Walking with specific rules about foot placement", "Walking fast", "Competitive pedestrian travel"],
    correctAnswer: 1,
    explanation: "Race walking requires one foot to be in contact with the ground at all times, and the supporting leg must be straight."
  },
  {
    id: "athletics-medium-7",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What threw is the discus?",
    options: ["A javelin", "A shot put", "A circular metal disk", "A hammer on a wire"],
    correctAnswer: 2,
    explanation: "The discus throw involves athletes spinning and releasing a heavy circular disk."
  },
  {
    id: "athletics-medium-8",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Flo Jo (Florence Griffith Joyner) holds the women's 100m world record.",
    correctAnswer: 1,
    explanation: "True. Flo Jo set the women's 100m record of 10.49 seconds in 1988, which still stands."
  },
  {
    id: "athletics-medium-9",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "The javelin throw requires athletes to throw a spear-like implement as far as possible.",
    correctAnswer: 1,
    explanation: "True. The javelin throw is a field event where athletes throw a lightweight spear for distance."
  },
  {
    id: "athletics-medium-10",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "The hammer throw uses a metal ball attached to a wire.",
    correctAnswer: 1,
    explanation: "True. The hammer consists of a metal ball attached to a wire and handle, thrown for distance."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "athletics-hard-1",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the pole vault world record?",
    options: ["6.12 meters", "6.18 meters", "6.24 meters", "6.30 meters"],
    correctAnswer: 2,
    explanation: "Armand Duplantis set the pole vault world record of 6.24 meters in February 2024."
  },
  {
    id: "athletics-hard-2",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the modern pentathlon?",
    options: ["5 track events", "5 varied sports combining riding, fencing, swimming, shooting, and running", "5 field events", "5 marathon races"],
    correctAnswer: 1,
    explanation: "The modern pentathlon combines equestrian, fencing, swimming, shooting, and running events."
  },
  {
    id: "athletics-hard-3",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the fastest recorded mile time?",
    options: ["3:43", "3:47", "3:51", "3:59"],
    correctAnswer: 0,
    explanation: "Hicham El Guerrouj holds the mile record of 3:43.13, set in 1999."
  },
  {
    id: "athletics-hard-4",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the women's 1500m world record time?",
    options: ["3:50", "3:52", "3:54", "3:56"],
    correctAnswer: 2,
    explanation: "Genzebe Dibaba holds the women's 1500m world record of 3:50.07, set in 2015."
  },
  {
    id: "athletics-hard-5",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What country produced Johannes Ingebrigsten, a middle-distance running champion?",
    options: ["Sweden", "Kenya", "Norway", "Ethiopia"],
    correctAnswer: 2,
    explanation: "Johannes Ingebrigsen is a Norwegian distance runner who holds the world record for 1500m."
  },
  {
    id: "athletics-hard-6",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the shot put world record distance?",
    options: ["22.5 meters", "23 meters", "23.5 meters", "24 meters"],
    correctAnswer: 1,
    explanation: "Randy Barnes holds the men's shot put world record of 23.12 meters, set in 1990."
  },
  {
    id: "athletics-hard-7",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the men's long jump world record?",
    options: ["8.87 meters", "8.91 meters", "8.95 meters", "8.99 meters"],
    correctAnswer: 1,
    explanation: "Mike Powell holds the men's long jump world record of 8.95 meters, set in 1991."
  },
  {
    id: "athletics-hard-8",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The pole vault world record is over 6 meters.",
    correctAnswer: 1,
    explanation: "True. Armand Duplantis's world record of 6.24 meters is well over 6 meters."
  },
  {
    id: "athletics-hard-9",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Eliud Kipchoge holds the marathon world record.",
    correctAnswer: 1,
    explanation: "True. Kipchoge set the marathon record of 2:01:09 at the 2022 Berlin Marathon."
  },
  {
    id: "athletics-hard-10",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Nadia Eke broke the women's 5000m world record multiple times in her career.",
    correctAnswer: 1,
    explanation: "True. Female distance runners like Sifan Hassan have been breaking major distance records in recent years."
  }
] satisfies QuizQuestion[];
