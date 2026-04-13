// World War II Questions
// Current: 30 questions (Full topic)
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const worldWar2Questions: QuizQuestion[] = [
  {
    id: "ww2-easy-1",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which year did World War II begin?",
    options: ["1937", "1939", "1941", "1945"],
    correctAnswer: 1,
    explanation: "WWII began on September 1, 1939, when Germany invaded Poland."
  },
  {
    id: "ww2-easy-2",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the leader of Nazi Germany during WWII?",
    options: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
    correctAnswer: 2,
    explanation: "Adolf Hitler led Nazi Germany from 1933 until his death in 1945."
  },
  {
    id: "ww2-easy-3",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What date is known as D-Day?",
    options: ["June 6, 1944", "May 8, 1945", "December 7, 1941", "September 2, 1945"],
    correctAnswer: 0,
    explanation: "D-Day, June 6, 1944, was the Allied invasion of Normandy, France."
  },
  {
    id: "ww2-easy-4",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which two cities were hit by atomic bombs in 1945?",
    options: ["Tokyo and Kyoto", "Hiroshima and Nagasaki", "Osaka and Kobe", "Yokohama and Sapporo"],
    correctAnswer: 1,
    explanation: "The U.S. dropped atomic bombs on Hiroshima (August 6) and Nagasaki (August 9), 1945."
  },
  {
    id: "ww2-easy-5",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the British Prime Minister for most of WWII?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
    correctAnswer: 1,
    explanation: "Winston Churchill served as Prime Minister from 1940-1945 during most of the war."
  },
  {
    id: "ww2-easy-6",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was the main alliance fighting against the Axis powers?",
    options: ["The Allies", "The Coalition", "The Union", "The League"],
    correctAnswer: 0,
    explanation: "The Allies included Britain, the Soviet Union, the United States, and other nations fighting the Axis."
  },
  {
    id: "ww2-easy-7",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country was NOT part of the Axis powers?",
    options: ["Germany", "Italy", "France", "Japan"],
    correctAnswer: 2,
    explanation: "France was invaded by Germany and was not part of the Axis; the main Axis powers were Germany, Italy, and Japan."
  },
  {
    id: "ww2-easy-8",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "Pearl Harbor brought the United States into World War II.",
    correctAnswer: 1,
    explanation: "True. The Japanese attack on Pearl Harbor on December 7, 1941, led to U.S. entry into the war."
  },
  {
    id: "ww2-easy-9",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "World War II ended in 1945.",
    correctAnswer: 1,
    explanation: "True. Germany surrendered in May 1945, and Japan surrendered in September 1945."
  },
  {
    id: "ww2-easy-10",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Soviet Union fought on the side of the Axis powers.",
    correctAnswer: 0,
    explanation: "False. The Soviet Union fought with the Allies against the Axis, despite initially having a non-aggression pact with Germany."
  },
  {
    id: "ww2-medium-1",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the code name for the German invasion of the Soviet Union?",
    options: ["Operation Overlord", "Operation Barbarossa", "Operation Market Garden", "Operation Torch"],
    correctAnswer: 1,
    explanation: "Operation Barbarossa, launched June 22, 1941, was the largest invasion force in history."
  },
  {
    id: "ww2-medium-2",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which battle is considered the turning point of the war in the Pacific?",
    options: ["Battle of Coral Sea", "Battle of Midway", "Battle of Iwo Jima", "Battle of Okinawa"],
    correctAnswer: 1,
    explanation: "The Battle of Midway (June 1942) destroyed four Japanese carriers and shifted momentum to the Allies."
  },
  {
    id: "ww2-medium-3",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Manhattan Project?",
    options: ["A spy network", "The atomic bomb program", "An invasion plan", "A refugee program"],
    correctAnswer: 1,
    explanation: "The Manhattan Project was the secret U.S. program that developed the first atomic bombs."
  },
  {
    id: "ww2-medium-4",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which German field marshal was known as the 'Desert Fox'?",
    options: ["Hermann Göring", "Erwin Rommel", "Heinz Guderian", "Erich von Manstein"],
    correctAnswer: 1,
    explanation: "Erwin Rommel earned the nickname for his brilliant tactics in the North African campaign."
  },
  {
    id: "ww2-medium-5",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the RAF's defensive campaign against German air raids called?",
    options: ["The London Offensive", "The Battle of Britain", "Operation Sea Lion", "The Blitz Campaign"],
    correctAnswer: 1,
    explanation: "The Battle of Britain (July-October 1940) was the RAF's successful defense against the Luftwaffe."
  },
  {
    id: "ww2-medium-6",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Soviet city endured a 900-day siege by German forces?",
    options: ["Moscow", "Stalingrad", "Leningrad", "Kiev"],
    correctAnswer: 2,
    explanation: "The Siege of Leningrad lasted from 1941-1944 and resulted in over a million deaths."
  },
  {
    id: "ww2-medium-7",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the name of Hitler's headquarters in East Prussia?",
    options: ["Eagle's Nest", "Wolf's Lair", "Reich Chancellery", "Berghof"],
    correctAnswer: 1,
    explanation: "The Wolf's Lair (Wolfsschanze) was where the July 1944 assassination attempt on Hitler occurred."
  },
  {
    id: "ww2-medium-8",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Battle of Stalingrad was a major turning point on the Eastern Front.",
    correctAnswer: 1,
    explanation: "True. The Soviet victory at Stalingrad (1942-43) marked the beginning of Germany's retreat."
  },
  {
    id: "ww2-medium-9",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Enigma machine was a German encryption device broken by Allied codebreakers.",
    correctAnswer: 1,
    explanation: "True. British codebreakers at Bletchley Park, including Alan Turing, cracked the Enigma code."
  },
  {
    id: "ww2-medium-10",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "France surrendered to Germany in 1940.",
    correctAnswer: 1,
    explanation: "True. France signed an armistice with Germany on June 22, 1940, after six weeks of fighting."
  },
  {
    id: "ww2-hard-1",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which conference decided on the post-war division of Germany?",
    options: ["Tehran Conference", "Yalta Conference", "Potsdam Conference", "Casablanca Conference"],
    correctAnswer: 2,
    explanation: "The Potsdam Conference (July-August 1945) finalized plans for Germany's occupation and division."
  },
  {
    id: "ww2-hard-2",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the largest tank battle in history?",
    options: ["Battle of Kursk", "Battle of El Alamein", "Battle of the Bulge", "Battle of Prokhorovka"],
    correctAnswer: 0,
    explanation: "The Battle of Kursk (July 1943) involved over 6,000 tanks and ended German offensive capability."
  },
  {
    id: "ww2-hard-3",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Japanese admiral planned the attack on Pearl Harbor?",
    options: ["Hideki Tojo", "Isoroku Yamamoto", "Chuichi Nagumo", "Takijiro Onishi"],
    correctAnswer: 1,
    explanation: "Admiral Yamamoto conceived the Pearl Harbor attack, though he reportedly had doubts about the strategy."
  },
  {
    id: "ww2-hard-4",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Molotov-Ribbentrop Pact?",
    options: ["A Soviet-German alliance", "A non-aggression pact", "A trade agreement", "A military treaty"],
    correctAnswer: 1,
    explanation: "The 1939 pact was a non-aggression treaty between Nazi Germany and the Soviet Union with secret protocols dividing Eastern Europe."
  },
  {
    id: "ww2-hard-5",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which German operation attempted to capture Moscow in 1941?",
    options: ["Operation Citadel", "Operation Typhoon", "Operation Blue", "Operation Bagration"],
    correctAnswer: 1,
    explanation: "Operation Typhoon launched in October 1941 but failed to capture Moscow before winter set in."
  },
  {
    id: "ww2-hard-6",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Tripartite Pact?",
    options: ["The formal alliance of Germany, Italy, and Japan", "A peace treaty", "A trade agreement", "A non-aggression pact"],
    correctAnswer: 0,
    explanation: "Signed in September 1940, it formalized the military alliance between the three main Axis powers."
  },
  {
    id: "ww2-hard-7",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which U.S. general commanded Operation Overlord?",
    options: ["George Patton", "Douglas MacArthur", "Dwight Eisenhower", "Omar Bradley"],
    correctAnswer: 2,
    explanation: "Dwight D. Eisenhower was Supreme Commander of the Allied Expeditionary Force for D-Day."
  },
  {
    id: "ww2-hard-8",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The V-2 rocket was the world's first long-range guided ballistic missile.",
    correctAnswer: 1,
    explanation: "True. Germany's V-2 rocket, developed by Wernher von Braun, was used against Allied cities in 1944-45."
  },
  {
    id: "ww2-hard-9",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Operation Valkyrie was the code name for the D-Day invasion.",
    correctAnswer: 0,
    explanation: "False. Operation Valkyrie was the July 1944 plot to assassinate Hitler. D-Day was Operation Overlord."
  },
  {
    id: "ww2-hard-10",
    topicId: "world-war-ii",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Wannsee Conference planned the 'Final Solution' to the Jewish question.",
    correctAnswer: 1,
    explanation: "True. The January 1942 conference coordinated the systematic genocide of European Jews."
  }
] satisfies QuizQuestion[];
