import type { QuizQuestion, DifficultyLevel } from "@/types/quiz";

export const questions: QuizQuestion[] = [
  // ===========================
  // HISTORY CATEGORY - Ancient Rome
  // ===========================
  
  // Ancient Rome - Easy (7 MC + 3 T/F)
  {
    id: "ancient-rome-easy-1",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the first emperor of Rome?",
    options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
    correctAnswer: 1,
    explanation: "Augustus (formerly Octavian) became the first Roman Emperor in 27 BCE after the fall of the Roman Republic."
  },
  {
    id: "ancient-rome-easy-2",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was the main language spoken in Ancient Rome?",
    options: ["Greek", "Latin", "Italian", "Arabic"],
    correctAnswer: 1,
    explanation: "Latin was the official language of Ancient Rome and formed the basis for Romance languages."
  },
  {
    id: "ancient-rome-easy-3",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What large structure in Rome was used for gladiator battles?",
    options: ["The Pantheon", "The Forum", "The Colosseum", "The Circus Maximus"],
    correctAnswer: 2,
    explanation: "The Colosseum, completed in 80 CE, could hold up to 80,000 spectators for gladiatorial contests."
  },
  {
    id: "ancient-rome-easy-4",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which legendary brothers were said to have founded Rome?",
    options: ["Castor and Pollux", "Romulus and Remus", "Brutus and Cassius", "Antony and Octavian"],
    correctAnswer: 1,
    explanation: "According to Roman mythology, twin brothers Romulus and Remus founded Rome in 753 BCE."
  },
  {
    id: "ancient-rome-easy-5",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What were Roman soldiers called?",
    options: ["Spartans", "Legionaries", "Knights", "Samurai"],
    correctAnswer: 1,
    explanation: "Roman soldiers were called legionaries and were organized into legions."
  },
  {
    id: "ancient-rome-easy-6",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who famously crossed the Rubicon River with his army?",
    options: ["Augustus", "Julius Caesar", "Pompey", "Cicero"],
    correctAnswer: 1,
    explanation: "Julius Caesar crossed the Rubicon in 49 BCE, starting a civil war. The phrase 'crossing the Rubicon' means passing a point of no return."
  },
  {
    id: "ancient-rome-easy-7",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What city was destroyed by Mount Vesuvius in 79 CE?",
    options: ["Athens", "Pompeii", "Carthage", "Alexandria"],
    correctAnswer: 1,
    explanation: "The eruption of Mount Vesuvius buried Pompeii under volcanic ash, preserving it for future archaeologists."
  },
  {
    id: "ancient-rome-easy-8",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Roman Empire used coins as currency.",
    correctAnswer: 1,
    explanation: "True. Romans used various denominations of coins including the denarius and aureus."
  },
  {
    id: "ancient-rome-easy-9",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "Ancient Romans built aqueducts to transport water.",
    correctAnswer: 1,
    explanation: "True. Roman aqueducts were remarkable engineering achievements that brought fresh water to cities."
  },
  {
    id: "ancient-rome-easy-10",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Roman Empire fell in one day.",
    correctAnswer: 0,
    explanation: "False. The fall of Rome was a gradual process over several centuries, with the Western Empire officially ending in 476 CE."
  },

  // Ancient Rome - Medium (7 MC + 3 T/F)
  {
    id: "ancient-rome-medium-1",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Roman emperor famously 'fiddled while Rome burned'?",
    options: ["Caligula", "Nero", "Tiberius", "Commodus"],
    correctAnswer: 1,
    explanation: "Legend says Nero played the lyre during the Great Fire of Rome in 64 CE, though this is likely not historically accurate."
  },
  {
    id: "ancient-rome-medium-2",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the name of the council of elders in the Roman Republic?",
    options: ["The Senate", "The Assembly", "The Consul", "The Tribune"],
    correctAnswer: 0,
    explanation: "The Roman Senate was an advisory body that wielded significant political power during the Republic."
  },
  {
    id: "ancient-rome-medium-3",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who led the slave revolt known as the Third Servile War?",
    options: ["Crixus", "Spartacus", "Gannicus", "Oenomaus"],
    correctAnswer: 1,
    explanation: "Spartacus led a major slave uprising from 73-71 BCE that threatened the Roman Republic."
  },
  {
    id: "ancient-rome-medium-4",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year did Julius Caesar die?",
    options: ["27 BCE", "44 BCE", "49 BCE", "37 BCE"],
    correctAnswer: 1,
    explanation: "Julius Caesar was assassinated on the Ides of March (March 15) in 44 BCE."
  },
  {
    id: "ancient-rome-medium-5",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which emperor divided the Roman Empire into East and West?",
    options: ["Constantine", "Theodosius", "Diocletian", "Justinian"],
    correctAnswer: 2,
    explanation: "Diocletian divided the empire in 285 CE to make it easier to govern, creating the Tetrarchy system."
  },
  {
    id: "ancient-rome-medium-6",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What was the Roman term for 'peace of Rome'?",
    options: ["Pax Romana", "Pax Dei", "Pax Britannica", "Pax Augusta"],
    correctAnswer: 0,
    explanation: "Pax Romana refers to the long period of relative peace across the empire from 27 BCE to 180 CE."
  },
  {
    id: "ancient-rome-medium-7",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Carthaginian general famously crossed the Alps with elephants?",
    options: ["Scipio Africanus", "Hamilcar Barca", "Hannibal", "Hasdrubal"],
    correctAnswer: 2,
    explanation: "Hannibal crossed the Alps in 218 BCE during the Second Punic War to invade Italy."
  },
  {
    id: "ancient-rome-medium-8",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Roman citizens were required to serve in the military.",
    correctAnswer: 1,
    explanation: "True. During the Republic, Roman citizens had a duty to serve in the legions when called upon."
  },
  {
    id: "ancient-rome-medium-9",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Praetorian Guard was responsible for protecting the Emperor.",
    correctAnswer: 1,
    explanation: "True. The Praetorian Guard was an elite unit that served as the emperor's personal bodyguards."
  },
  {
    id: "ancient-rome-medium-10",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Rome fought three wars against Carthage known as the Punic Wars.",
    correctAnswer: 1,
    explanation: "True. The three Punic Wars (264-146 BCE) ended with Rome's complete victory and Carthage's destruction."
  },

  // Ancient Rome - Hard (7 MC + 3 T/F)
  {
    id: "ancient-rome-hard-1",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which of the Five Good Emperors ruled the longest?",
    options: ["Nerva", "Trajan", "Hadrian", "Antoninus Pius"],
    correctAnswer: 3,
    explanation: "Antoninus Pius ruled for 23 years (138-161 CE), the longest reign among the Five Good Emperors."
  },
  {
    id: "ancient-rome-hard-2",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the name of Caesar's famous military campaign in Gaul?",
    options: ["Commentarii de Bello Gallico", "De Re Publica", "Aeneid", "Historiae"],
    correctAnswer: 0,
    explanation: "Caesar wrote 'Commentarii de Bello Gallico' (Commentaries on the Gallic War) about his campaigns from 58-50 BCE."
  },
  {
    id: "ancient-rome-hard-3",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was the last Western Roman Emperor?",
    options: ["Romulus Augustus", "Julius Nepos", "Odoacer", "Flavius Orestes"],
    correctAnswer: 0,
    explanation: "Romulus Augustus, ironically named after Rome's founder and first emperor, was deposed in 476 CE."
  },
  {
    id: "ancient-rome-hard-4",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Roman emperor was known as the 'Restorer of the World'?",
    options: ["Diocletian", "Aurelian", "Constantine", "Valerian"],
    correctAnswer: 1,
    explanation: "Aurelian earned this title by reunifying the empire after the Crisis of the Third Century."
  },
  {
    id: "ancient-rome-hard-5",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the name of the lower class citizens in Rome?",
    options: ["Patricians", "Equites", "Plebeians", "Optimates"],
    correctAnswer: 2,
    explanation: "Plebeians were the common people, while patricians were the aristocratic class."
  },
  {
    id: "ancient-rome-hard-6",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which battle in 216 BCE was Hannibal's greatest victory against Rome?",
    options: ["Battle of Trebia", "Battle of Cannae", "Battle of Lake Trasimene", "Battle of Zama"],
    correctAnswer: 1,
    explanation: "At Cannae, Hannibal used a double envelopment tactic to annihilate a much larger Roman army."
  },
  {
    id: "ancient-rome-hard-7",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Tetrarchy established by Diocletian?",
    options: ["A system of four co-emperors", "A military reform", "A tax system", "A religious council"],
    correctAnswer: 0,
    explanation: "The Tetrarchy divided imperial rule among two senior Augusti and two junior Caesars."
  },
  {
    id: "ancient-rome-hard-8",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Roman Province of Dacia was located in modern-day Romania.",
    correctAnswer: 1,
    explanation: "True. Dacia was conquered by Trajan in 106 CE and corresponds to much of present-day Romania."
  },
  {
    id: "ancient-rome-hard-9",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Marcus Aurelius wrote the philosophical work 'Meditations'.",
    correctAnswer: 1,
    explanation: "True. The Stoic philosopher-emperor wrote 'Meditations' as personal reflections during his military campaigns."
  },
  {
    id: "ancient-rome-hard-10",
    topicId: "ancient-rome",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Battle of Actium was fought between Octavian and Brutus.",
    correctAnswer: 0,
    explanation: "False. The Battle of Actium (31 BCE) was between Octavian and Mark Antony/Cleopatra, not Brutus."
  },

  // ===========================
  // HISTORY - World War II
  // ===========================
  
  // World War II - Easy (7 MC + 3 T/F)
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

  // World War II - Medium (7 MC + 3 T/F)
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

  // World War II - Hard (7 MC + 3 T/F)
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
  },

  // ===========================
  // HISTORY - Renaissance
  // ===========================
  
  // Renaissance - Easy (7 MC + 3 T/F)
  {
    id: "renaissance-easy-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which country did the Renaissance begin?",
    options: ["France", "Italy", "England", "Spain"],
    correctAnswer: 1,
    explanation: "The Renaissance began in Italy in the 14th century, particularly in Florence."
  },
  {
    id: "renaissance-easy-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
  },
  {
    id: "renaissance-easy-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'Renaissance' mean?",
    options: ["Revolution", "Rebirth", "Reform", "Renewal"],
    correctAnswer: 1,
    explanation: "Renaissance is French for 'rebirth,' referring to the revival of classical learning and art."
  },
  {
    id: "renaissance-easy-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Botticelli"],
    correctAnswer: 2,
    explanation: "Michelangelo painted the Sistine Chapel ceiling between 1508-1512."
  },
  {
    id: "renaissance-easy-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which influential family dominated Florence during the Renaissance?",
    options: ["The Borgias", "The Medicis", "The Sforzas", "The Gonzagas"],
    correctAnswer: 1,
    explanation: "The Medici family were powerful bankers and patrons of the arts who ruled Florence."
  },
  {
    id: "renaissance-easy-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which invention helped spread Renaissance ideas across Europe?",
    options: ["The telescope", "The printing press", "The compass", "The steam engine"],
    correctAnswer: 1,
    explanation: "Gutenberg's printing press (c. 1440) revolutionized the spread of knowledge and ideas."
  },
  {
    id: "renaissance-easy-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which Renaissance artist was also a sculptor, architect, and poet?",
    options: ["Titian", "Giotto", "Michelangelo", "Caravaggio"],
    correctAnswer: 2,
    explanation: "Michelangelo was a polymath who excelled in sculpture (David), painting, architecture, and poetry."
  },
  {
    id: "renaissance-easy-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Renaissance was a period of cultural rebirth in Europe.",
    correctAnswer: 1,
    explanation: "True. The Renaissance marked a revival of classical learning, art, and humanism from the 14th-17th centuries."
  },
  {
    id: "renaissance-easy-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "Leonardo da Vinci designed flying machines and war devices.",
    correctAnswer: 1,
    explanation: "True. Da Vinci was an inventor who sketched helicopters, tanks, and other advanced machines."
  },
  {
    id: "renaissance-easy-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "easy",
    question: "The Renaissance only affected Italy and did not spread to other countries.",
    correctAnswer: 0,
    explanation: "False. The Renaissance spread throughout Europe, influencing art, science, and culture in many countries."
  },

  // Renaissance - Medium (7 MC + 3 T/F)
  {
    id: "renaissance-medium-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Prince,' a treatise on political power?",
    options: ["Leonardo da Vinci", "Niccolò Machiavelli", "Dante Alighieri", "Petrarch"],
    correctAnswer: 1,
    explanation: "Machiavelli wrote 'The Prince' in 1513, a pragmatic guide to acquiring and maintaining political power."
  },
  {
    id: "renaissance-medium-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Renaissance scholar was known as the 'Father of Humanism'?",
    options: ["Erasmus", "Petrarch", "Boccaccio", "Lorenzo Valla"],
    correctAnswer: 1,
    explanation: "Petrarch (1304-1374) pioneered the humanist movement by reviving interest in classical texts."
  },
  {
    id: "renaissance-medium-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What artistic technique creates the illusion of depth on a flat surface?",
    options: ["Chiaroscuro", "Sfumato", "Linear perspective", "Tenebrism"],
    correctAnswer: 2,
    explanation: "Linear perspective, developed by Brunelleschi, uses converging lines to create depth."
  },
  {
    id: "renaissance-medium-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist painted 'The School of Athens'?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Botticelli"],
    correctAnswer: 2,
    explanation: "Raphael painted this fresco (1509-1511) in the Vatican, depicting great philosophers."
  },
  {
    id: "renaissance-medium-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who sculpted the bronze doors of the Florence Baptistery?",
    options: ["Donatello", "Lorenzo Ghiberti", "Verrocchio", "Brunelleschi"],
    correctAnswer: 1,
    explanation: "Ghiberti's doors were so beautiful that Michelangelo called them the 'Gates of Paradise.'"
  },
  {
    id: "renaissance-medium-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Pope commissioned Michelangelo to paint the Sistine Chapel?",
    options: ["Pope Leo X", "Pope Julius II", "Pope Alexander VI", "Pope Clement VII"],
    correctAnswer: 1,
    explanation: "Pope Julius II commissioned the ceiling in 1508, and later the Last Judgment was added under Pope Paul III."
  },
  {
    id: "renaissance-medium-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Flemish painter is considered part of the Northern Renaissance?",
    options: ["Jan van Eyck", "Caravaggio", "El Greco", "Velázquez"],
    correctAnswer: 0,
    explanation: "Jan van Eyck (1390-1441) pioneered oil painting techniques in the Northern Renaissance."
  },
  {
    id: "renaissance-medium-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Humanism emphasized the value and agency of human beings.",
    correctAnswer: 1,
    explanation: "True. Renaissance humanism focused on classical learning and human potential rather than purely religious concerns."
  },
  {
    id: "renaissance-medium-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "Michelangelo's David was carved from a single block of marble.",
    correctAnswer: 1,
    explanation: "True. The 17-foot statue was carved from one massive block of Carrara marble between 1501-1504."
  },
  {
    id: "renaissance-medium-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "medium",
    question: "The Medici family were popes during the Renaissance.",
    correctAnswer: 1,
    explanation: "True. Two Medicis became Pope: Leo X (1513-1521) and Clement VII (1523-1534)."
  },

  // Renaissance - Hard (7 MC + 3 T/F)
  {
    id: "renaissance-hard-1",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which architect designed the dome of Florence Cathedral?",
    options: ["Leon Battista Alberti", "Filippo Brunelleschi", "Andrea Palladio", "Donato Bramante"],
    correctAnswer: 1,
    explanation: "Brunelleschi's innovative double-shell dome (1420-1436) was an engineering marvel."
  },
  {
    id: "renaissance-hard-2",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Platonic Academy in Florence?",
    options: ["A university", "An art school", "A philosophical gathering", "A military academy"],
    correctAnswer: 2,
    explanation: "Founded by Cosimo de' Medici, it was an informal gathering of scholars studying Plato's works."
  },
  {
    id: "renaissance-hard-3",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who wrote 'Utopia,' describing an ideal society?",
    options: ["Erasmus", "Thomas More", "Francis Bacon", "Michel de Montaigne"],
    correctAnswer: 1,
    explanation: "Sir Thomas More published 'Utopia' in 1516, coining the term for an ideal society."
  },
  {
    id: "renaissance-hard-4",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which Renaissance artist developed the sfumato technique?",
    options: ["Raphael", "Botticelli", "Leonardo da Vinci", "Titian"],
    correctAnswer: 2,
    explanation: "Da Vinci perfected sfumato (subtle gradations of light and shadow) seen in the Mona Lisa."
  },
  {
    id: "renaissance-hard-5",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What was the Aldine Press known for?",
    options: ["Music printing", "Map making", "Classical text printing", "Currency production"],
    correctAnswer: 2,
    explanation: "Aldus Manutius's press in Venice (1494) produced high-quality editions of Greek and Latin classics."
  },
  {
    id: "renaissance-hard-6",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Which artist painted 'The Birth of Venus'?",
    options: ["Sandro Botticelli", "Giorgione", "Paolo Uccello", "Fra Angelico"],
    correctAnswer: 0,
    explanation: "Botticelli painted this iconic work around 1485, depicting the goddess Venus emerging from the sea."
  },
  {
    id: "renaissance-hard-7",
    topicId: "renaissance",
    categoryId: "history",
    type: "multiple-choice",
    difficulty: "hard",
    question: "Who was Lorenzo de' Medici's nickname?",
    options: ["The Wise", "The Magnificent", "The Great", "The Just"],
    correctAnswer: 1,
    explanation: "Lorenzo il Magnifico (1449-1492) was a great patron of arts and de facto ruler of Florence."
  },
  {
    id: "renaissance-hard-8",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Giorgio Vasari wrote 'Lives of the Most Excellent Painters, Sculptors, and Architects.'",
    correctAnswer: 1,
    explanation: "True. Vasari's 1550 book is a foundational text of art history and coined the term 'Renaissance.'"
  },
  {
    id: "renaissance-hard-9",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "The Council of Trent was part of the Counter-Reformation responding to Protestantism.",
    correctAnswer: 1,
    explanation: "True. The Council (1545-1563) reformed the Catholic Church in response to the Protestant Reformation."
  },
  {
    id: "renaissance-hard-10",
    topicId: "renaissance",
    categoryId: "history",
    type: "true-false",
    difficulty: "hard",
    question: "Pico della Mirandola wrote the 'Oration on the Dignity of Man.'",
    correctAnswer: 1,
    explanation: "True. This 1486 work is considered a manifesto of Renaissance humanism."
  },

  // ===========================
  // HISTORY - Medieval Europe
  // ===========================
  
  // Medieval Europe - Easy (7 MC + 3 T/F)
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

  // Medieval Europe - Medium (7 MC + 3 T/F)
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

  // Medieval Europe - Hard (7 MC + 3 T/F)
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
  },

  // ===========================
  // HISTORY - Cold War
  // ===========================
  
  // Cold War - Easy (7 MC + 3 T/F)
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

  // Cold War - Medium (7 MC + 3 T/F)
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

  // Cold War - Hard (7 MC + 3 T/F)
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
  },

  // ===========================
  // GEOGRAPHY CATEGORY - European Capitals
  // ===========================
  
  // European Capitals - Easy (7 MC + 3 T/F)
  {
    id: "eu-capitals-easy-1",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of France?",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
    correctAnswer: 2,
    explanation: "Paris has been the capital of France for over 1,000 years."
  },
  {
    id: "eu-capitals-easy-2",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of Italy?",
    options: ["Milan", "Rome", "Venice", "Florence"],
    correctAnswer: 1,
    explanation: "Rome, the 'Eternal City,' is Italy's capital and largest city."
  },
  {
    id: "eu-capitals-easy-3",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    correctAnswer: 1,
    explanation: "Madrid, located in the center of Spain, has been the capital since 1561."
  },
  {
    id: "eu-capitals-easy-4",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of Germany?",
    options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
    correctAnswer: 2,
    explanation: "Berlin became the capital of reunified Germany in 1990."
  },
  {
    id: "eu-capitals-easy-5",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of the United Kingdom?",
    options: ["London", "Manchester", "Birmingham", "Edinburgh"],
    correctAnswer: 0,
    explanation: "London is the UK's capital and one of the world's most influential cities."
  },
  {
    id: "eu-capitals-easy-6",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of Greece?",
    options: ["Thessaloniki", "Athens", "Sparta", "Crete"],
    correctAnswer: 1,
    explanation: "Athens has been Greece's capital since 1834 and is named after the goddess Athena."
  },
  {
    id: "eu-capitals-easy-7",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the capital of Portugal?",
    options: ["Porto", "Lisbon", "Faro", "Braga"],
    correctAnswer: 1,
    explanation: "Lisbon is Portugal's largest city and capital, located on the Atlantic coast."
  },
  {
    id: "eu-capitals-easy-8",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Amsterdam is the capital of the Netherlands.",
    correctAnswer: 1,
    explanation: "True. Although the government is in The Hague, Amsterdam is the official capital."
  },
  {
    id: "eu-capitals-easy-9",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Brussels is the capital of Belgium.",
    correctAnswer: 1,
    explanation: "True. Brussels is also considered the de facto capital of the European Union."
  },
  {
    id: "eu-capitals-easy-10",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "easy",
    question: "Barcelona is the capital of Spain.",
    correctAnswer: 0,
    explanation: "False. Madrid is the capital of Spain, while Barcelona is the capital of Catalonia region."
  },

  // European Capitals - Medium (7 MC + 3 T/F)
  {
    id: "eu-capitals-medium-1",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Croatia?",
    options: ["Split", "Dubrovnik", "Zagreb", "Rijeka"],
    correctAnswer: 2,
    explanation: "Zagreb has been Croatia's capital since 1991 when the country gained independence."
  },
  {
    id: "eu-capitals-medium-2",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Romania?",
    options: ["Bucharest", "Cluj-Napoca", "Timișoara", "Brașov"],
    correctAnswer: 0,
    explanation: "Bucharest has been Romania's capital since 1862."
  },
  {
    id: "eu-capitals-medium-3",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Austria?",
    options: ["Salzburg", "Innsbruck", "Graz", "Vienna"],
    correctAnswer: 3,
    explanation: "Vienna (Wien) has been Austria's capital for centuries and was the seat of the Habsburg Empire."
  },
  {
    id: "eu-capitals-medium-4",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Czech Republic?",
    options: ["Brno", "Ostrava", "Prague", "Plzeň"],
    correctAnswer: 2,
    explanation: "Prague is known as the 'City of a Hundred Spires' and has been the capital since medieval times."
  },
  {
    id: "eu-capitals-medium-5",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Denmark?",
    options: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    correctAnswer: 0,
    explanation: "Copenhagen is Denmark's capital and largest city, known for its harbors and bicycle culture."
  },
  {
    id: "eu-capitals-medium-6",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Sweden?",
    options: ["Gothenburg", "Malmö", "Stockholm", "Uppsala"],
    correctAnswer: 2,
    explanation: "Stockholm, built on 14 islands, has been Sweden's capital since 1436."
  },
  {
    id: "eu-capitals-medium-7",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the capital of Hungary?",
    options: ["Debrecen", "Szeged", "Budapest", "Pécs"],
    correctAnswer: 2,
    explanation: "Budapest was formed in 1873 by merging the cities of Buda and Pest."
  },
  {
    id: "eu-capitals-medium-8",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Warsaw is the capital of Poland.",
    correctAnswer: 1,
    explanation: "True. Warsaw has been Poland's capital since 1596, replacing Kraków."
  },
  {
    id: "eu-capitals-medium-9",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Bern is the capital of Switzerland.",
    correctAnswer: 1,
    explanation: "True. Bern has been the de facto capital (federal city) of Switzerland since 1848."
  },
  {
    id: "eu-capitals-medium-10",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Oslo is the capital of both Norway and Sweden.",
    correctAnswer: 0,
    explanation: "False. Oslo is the capital of Norway. Stockholm is the capital of Sweden."
  },

  // European Capitals - Hard (7 MC + 3 T/F)
  {
    id: "eu-capitals-hard-1",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Slovenia?",
    options: ["Maribor", "Ljubljana", "Celje", "Kranj"],
    correctAnswer: 1,
    explanation: "Ljubljana has been Slovenia's capital since the country's independence in 1991."
  },
  {
    id: "eu-capitals-hard-2",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Slovakia?",
    options: ["Košice", "Bratislava", "Prešov", "Žilina"],
    correctAnswer: 1,
    explanation: "Bratislava became Slovakia's capital when the country gained independence in 1993."
  },
  {
    id: "eu-capitals-hard-3",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Estonia?",
    options: ["Tartu", "Tallinn", "Narva", "Pärnu"],
    correctAnswer: 1,
    explanation: "Tallinn has been Estonia's capital since medieval times and is known for its preserved Old Town."
  },
  {
    id: "eu-capitals-hard-4",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Latvia?",
    options: ["Daugavpils", "Liepāja", "Riga", "Jelgava"],
    correctAnswer: 2,
    explanation: "Riga, founded in 1201, is Latvia's capital and the largest city in the Baltic states."
  },
  {
    id: "eu-capitals-hard-5",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Lithuania?",
    options: ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai"],
    correctAnswer: 1,
    explanation: "Vilnius has been Lithuania's capital since 1323 and is known for its baroque architecture."
  },
  {
    id: "eu-capitals-hard-6",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Luxembourg?",
    options: ["Esch-sur-Alzette", "Differdange", "Luxembourg City", "Dudelange"],
    correctAnswer: 2,
    explanation: "Luxembourg City is both the capital and the name of the country."
  },
  {
    id: "eu-capitals-hard-7",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the capital of Malta?",
    options: ["Mdina", "Valletta", "Sliema", "Birkirkara"],
    correctAnswer: 1,
    explanation: "Valletta, built by the Knights of St. John, has been Malta's capital since 1571."
  },
  {
    id: "eu-capitals-hard-8",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Reykjavik is the northernmost capital city in Europe.",
    correctAnswer: 1,
    explanation: "True. Reykjavik, Iceland's capital, is the world's northernmost capital of a sovereign state."
  },
  {
    id: "eu-capitals-hard-9",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Sarajevo is the capital of Bosnia and Herzegovina.",
    correctAnswer: 1,
    explanation: "True. Sarajevo has been the capital since 1639 during Ottoman rule."
  },
  {
    id: "eu-capitals-hard-10",
    topicId: "european-capitals",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Podgorica is the capital of Montenegro.",
    correctAnswer: 1,
    explanation: "True. Podgorica has been Montenegro's capital since 1946, replacing Cetinje as the administrative center."
  },

  // ===========================
  // GEOGRAPHY - World Flags (5 sample questions)
  // ===========================
  {
    id: "world-flags-sample-1",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What symbol appears on the flag of Canada?",
    options: ["Maple leaf", "Beaver", "Moose", "Bear"],
    correctAnswer: 0,
    explanation: "Canada's flag features a red maple leaf in the center, adopted in 1965."
  },
  {
    id: "world-flags-sample-2",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has a flag with a yellow star on a red background?",
    options: ["Vietnam", "China", "Morocco", "Tunisia"],
    correctAnswer: 1,
    explanation: "China's flag is red with five golden stars representing the Communist Party and the people."
  },
  {
    id: "world-flags-sample-3",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The South African flag has six colors.",
    correctAnswer: 1,
    explanation: "True. South Africa's flag has black, gold, green, white, blue, and red."
  },
  {
    id: "world-flags-sample-4",
    topicId: "world-flags",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of the cross pattern on the Norwegian flag?",
    options: ["Greek Cross", "Nordic Cross", "Celtic Cross", "Latin Cross"],
    correctAnswer: 1,
    explanation: "The Nordic Cross is characteristic of Scandinavian flags."
  },
  {
    id: "world-flags-sample-5",
    topicId: "world-flags",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Japanese flag's red circle is perfectly centered on the flag.",
    correctAnswer: 1,
    explanation: "True. The red circle (Hinomaru) is precisely centered on Japan's flag."
  },

  // ===========================
  // GEOGRAPHY - Mountains & Rivers (5 sample questions)
  // ===========================
  {
    id: "mountains-rivers-sample-1",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the highest mountain in the world?",
    options: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount McKinley"],
    correctAnswer: 2,
    explanation: "Mount Everest stands at 29,032 feet (8,849 meters) above sea level."
  },
  {
    id: "mountains-rivers-sample-2",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the longest river in the world?",
    options: ["The Amazon", "The Nile", "The Yangtze", "The Mississippi"],
    correctAnswer: 1,
    explanation: "The Nile River in Africa is approximately 4,130 miles long."
  },
  {
    id: "mountains-rivers-sample-3",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Andes is the longest mountain range in the world.",
    correctAnswer: 1,
    explanation: "True. The Andes extends for approximately 4,000 miles along South America's western coast."
  },
  {
    id: "mountains-rivers-sample-4",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the second-highest mountain in the world?",
    options: ["Kangchenjunga", "Makalu", "K2", "Lhotse"],
    correctAnswer: 2,
    explanation: "K2 in the Karakoram Range is 28,251 feet tall."
  },
  {
    id: "mountains-rivers-sample-5",
    topicId: "mountains-rivers",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "Mauna Kea in Hawaii is the tallest mountain when measured from base to peak.",
    correctAnswer: 1,
    explanation: "True. Mauna Kea measures approximately 33,500 feet from ocean floor to summit."
  },

  // ===========================
  // GEOGRAPHY - Continents & Oceans (5 sample questions)
  // ===========================
  {
    id: "continents-oceans-sample-1",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many continents are there?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2,
    explanation: "Most regions recognize seven continents."
  },
  {
    id: "continents-oceans-sample-2",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which is the largest ocean?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Pacific Ocean is the largest ocean on Earth."
  },
  {
    id: "continents-oceans-sample-3",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "Antarctica is a desert.",
    correctAnswer: 1,
    explanation: "True. Antarctica is the world's largest desert due to low precipitation."
  },
  {
    id: "continents-oceans-sample-4",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["Approximately 60%", "Approximately 71%", "Approximately 80%", "Approximately 50%"],
    correctAnswer: 1,
    explanation: "Oceans cover approximately 71% of Earth's surface."
  },
  {
    id: "continents-oceans-sample-5",
    topicId: "continents-oceans",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Southern Ocean was officially recognized as the fifth ocean in 2000.",
    correctAnswer: 1,
    explanation: "True. The IHO recognized the Southern Ocean as distinct in 2000."
  },

  // ===========================
  // GEOGRAPHY - Famous Landmarks (5 sample questions)
  // ===========================
  {
    id: "famous-landmarks-sample-1",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country is home to the Statue of Liberty?",
    options: ["France", "Canada", "United States", "Mexico"],
    correctAnswer: 2,
    explanation: "The Statue of Liberty is located in New York Harbor."
  },
  {
    id: "famous-landmarks-sample-2",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where is the Eiffel Tower located?",
    options: ["London", "Paris", "Rome", "Berlin"],
    correctAnswer: 1,
    explanation: "The Eiffel Tower is in Paris, France."
  },
  {
    id: "famous-landmarks-sample-3",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "medium",
    question: "The Taj Mahal is located in India.",
    correctAnswer: 1,
    explanation: "True. The Taj Mahal is in Agra, India."
  },
  {
    id: "famous-landmarks-sample-4",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In what year was the Statue of Liberty dedicated?",
    options: ["1876", "1886", "1896", "1906"],
    correctAnswer: 1,
    explanation: "The Statue of Liberty was dedicated on October 28, 1886."
  },
  {
    id: "famous-landmarks-sample-5",
    topicId: "famous-landmarks",
    categoryId: "geography",
    type: "true-false",
    difficulty: "hard",
    question: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",
    correctAnswer: 1,
    explanation: "True. It held the record until Lincoln Cathedral was completed in 1311."
  },

  // ===========================
  // SCIENCE - Human Body (5 sample questions)
  // ===========================
  {
    id: "human-body-sample-1",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    explanation: "An adult human has 206 bones."
  },
  {
    id: "human-body-sample-2",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswer: 2,
    explanation: "The skin is the largest organ, covering the entire body."
  },
  {
    id: "human-body-sample-3",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The human brain uses approximately 20% of the body's energy.",
    correctAnswer: 1,
    explanation: "True. Despite being only 2% of body weight, the brain uses about 20% of energy."
  },
  {
    id: "human-body-sample-4",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the smallest bone in the human body?",
    options: ["Stirrup (stapes)", "Anvil (incus)", "Hammer (malleus)", "Hyoid"],
    correctAnswer: 0,
    explanation: "The stapes in the middle ear is the smallest bone, about 3mm long."
  },
  {
    id: "human-body-sample-5",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The human stomach completely replaces its lining every 3-4 days.",
    correctAnswer: 1,
    explanation: "True. The stomach lining regenerates rapidly to protect against acid damage."
  },

  // ===========================
  // SCIENCE - Space & Astronomy (5 sample questions)
  // ===========================
  {
    id: "space-astronomy-sample-1",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    correctAnswer: 1,
    explanation: "Mercury is the closest planet to the Sun."
  },
  {
    id: "space-astronomy-sample-2",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many planets are in our solar system?",
    options: ["Seven", "Eight", "Nine", "Ten"],
    correctAnswer: 1,
    explanation: "There are eight planets in our solar system (Pluto was reclassified as a dwarf planet in 2006)."
  },
  {
    id: "space-astronomy-sample-3",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Jupiter is the largest planet in our solar system.",
    correctAnswer: 1,
    explanation: "True. Jupiter's mass is more than twice that of all other planets combined."
  },
  {
    id: "space-astronomy-sample-4",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the name of Earth's natural satellite?",
    options: ["Luna", "The Moon", "Both A and B", "Selene"],
    correctAnswer: 2,
    explanation: "Earth's moon is commonly called 'The Moon' or 'Luna' in Latin."
  },
  {
    id: "space-astronomy-sample-5",
    topicId: "space-astronomy",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Light from the Sun takes approximately 8 minutes to reach Earth.",
    correctAnswer: 1,
    explanation: "True. Light travels at 299,792 km/s and takes about 8 minutes 20 seconds to reach Earth."
  },

  // ===========================
  // SCIENCE - Chemistry & Elements (5 sample questions)
  // ===========================
  {
    id: "chemistry-elements-sample-1",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
    explanation: "Water's chemical formula is H2O - two hydrogen atoms and one oxygen atom."
  },
  {
    id: "chemistry-elements-sample-2",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
  },
  {
    id: "chemistry-elements-sample-3",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Gold's chemical symbol is Au.",
    correctAnswer: 1,
    explanation: "True. Au comes from the Latin word 'aurum' meaning gold."
  },
  {
    id: "chemistry-elements-sample-4",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Carbon has 6 protons, giving it an atomic number of 6."
  },
  {
    id: "chemistry-elements-sample-5",
    topicId: "chemistry-elements",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Diamonds and graphite are both forms of carbon.",
    correctAnswer: 1,
    explanation: "True. They are allotropes of carbon with different molecular structures."
  },

  // ===========================
  // SCIENCE - Physics & Forces (5 sample questions)
  // ===========================
  {
    id: "physics-forces-sample-1",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the force that pulls objects toward Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Inertia"],
    correctAnswer: 1,
    explanation: "Gravity is the force that attracts objects toward the center of Earth."
  },
  {
    id: "physics-forces-sample-2",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
    correctAnswer: 0,
    explanation: "Light travels at approximately 299,792 km/s (about 300,000 km/s) in a vacuum."
  },
  {
    id: "physics-forces-sample-3",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Newton's First Law states that an object in motion stays in motion unless acted upon by an external force.",
    correctAnswer: 1,
    explanation: "True. This is the law of inertia."
  },
  {
    id: "physics-forces-sample-4",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The Newton (N) is the SI unit of force."
  },
  {
    id: "physics-forces-sample-5",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Einstein's E=mc² shows that mass and energy are interchangeable.",
    correctAnswer: 1,
    explanation: "True. This equation demonstrates mass-energy equivalence."
  },

  // ===========================
  // SCIENCE - Marine Biology (5 sample questions)
  // ===========================
  {
    id: "marine-biology-sample-1",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest animal in the ocean?",
    options: ["Great White Shark", "Blue Whale", "Giant Squid", "Orca"],
    correctAnswer: 1,
    explanation: "The blue whale is the largest animal ever known to have existed."
  },
  {
    id: "marine-biology-sample-2",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What do coral reefs primarily consist of?",
    options: ["Plants", "Rocks", "Living organisms", "Sand"],
    correctAnswer: 2,
    explanation: "Coral reefs are built by tiny living organisms called coral polyps."
  },
  {
    id: "marine-biology-sample-3",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Dolphins are mammals, not fish.",
    correctAnswer: 1,
    explanation: "True. Dolphins are marine mammals that breathe air."
  },
  {
    id: "marine-biology-sample-4",
    topicId: "marine-biology",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of Earth's oxygen is produced by ocean phytoplankton?",
    options: ["About 25%", "About 50%", "About 70%", "About 90%"],
    correctAnswer: 1,
    explanation: "Ocean phytoplankton produce approximately 50-80% of Earth's oxygen."
  },
  {
    id: "marine-biology-sample-5",
    topicId: "marine-biology",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The Mariana Trench is the deepest part of the world's oceans.",
    correctAnswer: 1,
    explanation: "True. The Challenger Deep in the Mariana Trench is nearly 36,000 feet deep."
  },

  // ===========================
  // ARTS & LITERATURE - Shakespeare (5 sample questions)
  // ===========================
  {
    id: "shakespeare-sample-1",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    explanation: "William Shakespeare wrote Romeo and Juliet around 1594-1596."
  },
  {
    id: "shakespeare-sample-2",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "In which play does the line 'To be or not to be' appear?",
    options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
    correctAnswer: 1,
    explanation: "This famous soliloquy is from Hamlet."
  },
  {
    id: "shakespeare-sample-3",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Shakespeare wrote both plays and sonnets.",
    correctAnswer: 1,
    explanation: "True. Shakespeare wrote 37 plays and 154 sonnets."
  },
  {
    id: "shakespeare-sample-4",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which Shakespeare play features the characters Oberon and Titania?",
    options: ["The Tempest", "A Midsummer Night's Dream", "As You Like It", "Twelfth Night"],
    correctAnswer: 1,
    explanation: "Oberon and Titania are the fairy king and queen in A Midsummer Night's Dream."
  },
  {
    id: "shakespeare-sample-5",
    topicId: "shakespeare",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Shakespeare invented over 1,700 words that are still used in English today.",
    correctAnswer: 1,
    explanation: "True. Shakespeare coined many words including 'assassination' and 'bedroom'."
  },

  // ===========================
  // ARTS & LITERATURE - Classic Novels (5 sample questions)
  // ===========================
  {
    id: "classic-novels-sample-1",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "George Eliot"],
    correctAnswer: 1,
    explanation: "Jane Austen published Pride and Prejudice in 1813."
  },
  {
    id: "classic-novels-sample-2",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which novel begins with 'Call me Ishmael'?",
    options: ["Treasure Island", "Moby-Dick", "Robinson Crusoe", "The Old Man and the Sea"],
    correctAnswer: 1,
    explanation: "Moby-Dick by Herman Melville opens with this famous line."
  },
  {
    id: "classic-novels-sample-3",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "George Orwell wrote '1984' as a dystopian novel.",
    correctAnswer: 1,
    explanation: "True. 1984 depicts a totalitarian future society."
  },
  {
    id: "classic-novels-sample-4",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Great Gatsby'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
    correctAnswer: 1,
    explanation: "F. Scott Fitzgerald published The Great Gatsby in 1925."
  },
  {
    id: "classic-novels-sample-5",
    topicId: "classic-novels",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Mary Shelley was only 18 when she began writing 'Frankenstein'.",
    correctAnswer: 1,
    explanation: "True. She started writing Frankenstein in 1816 at age 18."
  },

  // ===========================
  // ARTS & LITERATURE - Famous Painters (5 sample questions)
  // ===========================
  {
    id: "famous-painters-sample-1",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
  },
  {
    id: "famous-painters-sample-2",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which artist cut off part of his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
    correctAnswer: 1,
    explanation: "Vincent van Gogh cut off part of his ear in 1888."
  },
  {
    id: "famous-painters-sample-3",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Pablo Picasso co-founded the Cubist movement.",
    correctAnswer: 1,
    explanation: "True. Picasso and Georges Braque pioneered Cubism in the early 20th century."
  },
  {
    id: "famous-painters-sample-4",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who painted 'The Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Henri Matisse"],
    correctAnswer: 1,
    explanation: "Van Gogh painted The Starry Night in 1889 while in an asylum in Saint-Rémy."
  },
  {
    id: "famous-painters-sample-5",
    topicId: "famous-painters",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Rembrandt's full name was Rembrandt Harmenszoon van Rijn.",
    correctAnswer: 1,
    explanation: "True. The Dutch master is commonly known just as Rembrandt."
  },

  // ===========================
  // ARTS & LITERATURE - Poetry (5 sample questions)
  // ===========================
  {
    id: "poetry-sample-1",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who wrote 'The Road Not Taken'?",
    options: ["Robert Frost", "Emily Dickinson", "Walt Whitman", "Edgar Allan Poe"],
    correctAnswer: 0,
    explanation: "Robert Frost wrote this famous poem published in 1916."
  },
  {
    id: "poetry-sample-2",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many lines does a sonnet typically have?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 2,
    explanation: "A sonnet traditionally contains 14 lines."
  },
  {
    id: "poetry-sample-3",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Haiku is a Japanese form of poetry with 17 syllables.",
    correctAnswer: 1,
    explanation: "True. Haiku follows a 5-7-5 syllable pattern across three lines."
  },
  {
    id: "poetry-sample-4",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who wrote 'The Raven'?",
    options: ["Edgar Allan Poe", "Lord Byron", "John Keats", "Percy Shelley"],
    correctAnswer: 0,
    explanation: "Edgar Allan Poe published The Raven in 1845."
  },
  {
    id: "poetry-sample-5",
    topicId: "poetry",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "Emily Dickinson published only a dozen poems during her lifetime.",
    correctAnswer: 1,
    explanation: "True. Most of her nearly 1,800 poems were published posthumously."
  },

  // ===========================
  // ARTS & LITERATURE - Mythology (5 sample questions)
  // ===========================
  {
    id: "mythology-sample-1",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the king of the Greek gods?",
    options: ["Poseidon", "Hades", "Zeus", "Apollo"],
    correctAnswer: 2,
    explanation: "Zeus was the ruler of Mount Olympus and king of all gods."
  },
  {
    id: "mythology-sample-2",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What was Thor's hammer called?",
    options: ["Excalibur", "Mjolnir", "Gungnir", "Gram"],
    correctAnswer: 1,
    explanation: "Mjolnir was Thor's legendary hammer in Norse mythology."
  },
  {
    id: "mythology-sample-3",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "medium",
    question: "Athena was the Greek goddess of wisdom.",
    correctAnswer: 1,
    explanation: "True. Athena was also associated with warfare and crafts."
  },
  {
    id: "mythology-sample-4",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who was forced to hold up the sky in Greek mythology?",
    options: ["Hercules", "Atlas", "Prometheus", "Sisyphus"],
    correctAnswer: 1,
    explanation: "Atlas was condemned to hold up the celestial heavens for eternity."
  },
  {
    id: "mythology-sample-5",
    topicId: "mythology",
    categoryId: "arts-literature",
    type: "true-false",
    difficulty: "hard",
    question: "In Norse mythology, Ragnarök is the prophesied end of the world.",
    correctAnswer: 1,
    explanation: "True. Ragnarök describes a series of events leading to the world's destruction and rebirth."
  },

  // ===========================
  // SPORTS - Olympics (5 sample questions)
  // ===========================
  {
    id: "olympics-sample-1",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Where were the ancient Olympic Games held?",
    options: ["Athens", "Olympia", "Sparta", "Corinth"],
    correctAnswer: 1,
    explanation: "The ancient Olympics were held in Olympia, Greece."
  },
  {
    id: "olympics-sample-2",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How often are the Summer Olympics held?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    correctAnswer: 2,
    explanation: "The Summer Olympics occur every four years."
  },
  {
    id: "olympics-sample-3",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Michael Phelps is the most decorated Olympian of all time.",
    correctAnswer: 1,
    explanation: "True. Phelps has won 28 Olympic medals (23 gold)."
  },
  {
    id: "olympics-sample-4",
    topicId: "olympics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "In which year were the first modern Olympic Games held?",
    options: ["1892", "1896", "1900", "1904"],
    correctAnswer: 1,
    explanation: "The first modern Olympics were held in Athens in 1896."
  },
  {
    id: "olympics-sample-5",
    topicId: "olympics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Women were first allowed to compete in the Olympics in 1900.",
    correctAnswer: 1,
    explanation: "True. Women first competed at the 1900 Paris Olympics."
  },

  // ===========================
  // SPORTS - Football (Soccer) (5 sample questions)
  // ===========================
  {
    id: "football-soccer-sample-1",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    correctAnswer: 2,
    explanation: "Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002)."
  },
  {
    id: "football-soccer-sample-2",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many players are on a soccer team during a match?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
    explanation: "Each team has 11 players on the field during a match."
  },
  {
    id: "football-soccer-sample-3",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Pelé scored over 1,000 career goals.",
    correctAnswer: 1,
    explanation: "True. Pelé scored 1,283 goals in his career."
  },
  {
    id: "football-soccer-sample-4",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which player has won the most Ballon d'Or awards?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
    correctAnswer: 1,
    explanation: "Lionel Messi has won 8 Ballon d'Or awards as of 2023."
  },
  {
    id: "football-soccer-sample-5",
    topicId: "football-soccer",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The fastest goal in World Cup history was scored in 11 seconds.",
    correctAnswer: 1,
    explanation: "True. Hakan Şükür scored for Turkey after 11 seconds in 2002."
  },

  // ===========================
  // SPORTS - Basketball (5 sample questions)
  // ===========================
  {
    id: "basketball-sample-1",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many points is a free throw worth in basketball?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "A free throw is worth 1 point."
  },
  {
    id: "basketball-sample-2",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which NBA team does LeBron James currently play for?",
    options: ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: 2,
    explanation: "As of 2026, LeBron James plays for the Los Angeles Lakers."
  },
  {
    id: "basketball-sample-3",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Michael Jordan won 6 NBA championships with the Chicago Bulls.",
    correctAnswer: 1,
    explanation: "True. Jordan won championships in 1991, 1992, 1993, 1996, 1997, and 1998."
  },
  {
    id: "basketball-sample-4",
    topicId: "basketball",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many players from each team are on the court during play?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "Each team has 5 players on the court at a time."
  },
  {
    id: "basketball-sample-5",
    topicId: "basketball",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "Wilt Chamberlain scored 100 points in a single NBA game.",
    correctAnswer: 1,
    explanation: "True. Chamberlain scored 100 points for the Philadelphia Warriors in 1962."
  },

  // ===========================
  // SPORTS - Tennis (5 sample questions)
  // ===========================
  {
    id: "tennis-sample-1",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many Grand Slam tournaments are there in tennis?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "The four Grand Slams are Australian Open, French Open, Wimbledon, and US Open."
  },
  {
    id: "tennis-sample-2",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is a score of zero called in tennis?",
    options: ["Nil", "Zero", "Love", "Nought"],
    correctAnswer: 2,
    explanation: "A score of zero in tennis is called 'love'."
  },
  {
    id: "tennis-sample-3",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "Wimbledon is played on grass courts.",
    correctAnswer: 1,
    explanation: "True. Wimbledon is the only Grand Slam played on grass."
  },
  {
    id: "tennis-sample-4",
    topicId: "tennis",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who has won the most Grand Slam singles titles in men's tennis?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    correctAnswer: 2,
    explanation: "Novak Djokovic has won 24 Grand Slam singles titles as of 2023."
  },
  {
    id: "tennis-sample-5",
    topicId: "tennis",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The longest tennis match in history lasted over 11 hours.",
    correctAnswer: 1,
    explanation: "True. Isner vs. Mahut at Wimbledon 2010 lasted 11 hours and 5 minutes."
  },

  // ===========================
  // SPORTS - Athletics (5 sample questions)
  // ===========================
  {
    id: "athletics-sample-1",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the standard distance of a marathon?",
    options: ["26.2 miles", "28.2 miles", "24.2 miles", "30 miles"],
    correctAnswer: 0,
    explanation: "A marathon is 26.2 miles or 42.195 kilometers."
  },
  {
    id: "athletics-sample-2",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the fastest man in the world?",
    options: ["Carl Lewis", "Usain Bolt", "Jesse Owens", "Michael Johnson"],
    correctAnswer: 1,
    explanation: "Usain Bolt holds the 100m and 200m world records."
  },
  {
    id: "athletics-sample-3",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "medium",
    question: "A decathlon consists of 10 different track and field events.",
    correctAnswer: 1,
    explanation: "True. The decathlon includes 10 events over two days."
  },
  {
    id: "athletics-sample-4",
    topicId: "athletics",
    categoryId: "sports",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is Usain Bolt's 100m world record time?",
    options: ["9.58 seconds", "9.69 seconds", "9.72 seconds", "9.79 seconds"],
    correctAnswer: 0,
    explanation: "Bolt set the record of 9.58 seconds in Berlin in 2009."
  },
  {
    id: "athletics-sample-5",
    topicId: "athletics",
    categoryId: "sports",
    type: "true-false",
    difficulty: "hard",
    question: "The pole vault world record is over 6 meters.",
    correctAnswer: 1,
    explanation: "True. Armand Duplantis set the record at 6.24m in 2024."
  },

  // ===========================
  // ENTERTAINMENT - Hollywood Classics (5 sample questions)
  // ===========================
  {
    id: "hollywood-classics-sample-1",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who directed 'The Godfather'?",
    options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Quentin Tarantino"],
    correctAnswer: 1,
    explanation: "Francis Ford Coppola directed The Godfather in 1972."
  },
  {
    id: "hollywood-classics-sample-2",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which film won the most Oscars ever?",
    options: ["Titanic", "Ben-Hur", "Both A and B tied", "The Lord of the Rings: Return of the King"],
    correctAnswer: 2,
    explanation: "Ben-Hur (1959), Titanic (1997), and LOTR: Return of the King (2003) each won 11 Oscars."
  },
  {
    id: "hollywood-classics-sample-3",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Casablanca' was released during World War II.",
    correctAnswer: 1,
    explanation: "True. Casablanca was released in 1942."
  },
  {
    id: "hollywood-classics-sample-4",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which actress starred in 'Breakfast at Tiffany's'?",
    options: ["Marilyn Monroe", "Audrey Hepburn", "Grace Kelly", "Elizabeth Taylor"],
    correctAnswer: 1,
    explanation: "Audrey Hepburn played Holly Golightly in 1961."
  },
  {
    id: "hollywood-classics-sample-5",
    topicId: "hollywood-classics",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Citizen Kane' was Orson Welles' directorial debut.",
    correctAnswer: 1,
    explanation: "True. Welles co-wrote, directed, produced, and starred in Citizen Kane at age 25."
  },

  // ===========================
  // ENTERTAINMENT - Pop Music (5 sample questions)
  // ===========================
  {
    id: "pop-music-sample-1",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
    correctAnswer: 1,
    explanation: "Michael Jackson earned this title for his massive influence on pop music."
  },
  {
    id: "pop-music-sample-2",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band sang 'Yesterday'?",
    options: ["The Rolling Stones", "The Beatles", "The Who", "Led Zeppelin"],
    correctAnswer: 1,
    explanation: "The Beatles released 'Yesterday' in 1965."
  },
  {
    id: "pop-music-sample-3",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Madonna is often called the 'Queen of Pop'.",
    correctAnswer: 1,
    explanation: "True. Madonna has been a dominant force in pop music since the 1980s."
  },
  {
    id: "pop-music-sample-4",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which artist has the most Grammy Awards?",
    options: ["Beyoncé", "Quincy Jones", "Georg Solti", "All tied"],
    correctAnswer: 0,
    explanation: "Beyoncé holds the record with 32 Grammy Awards as of 2023."
  },
  {
    id: "pop-music-sample-5",
    topicId: "pop-music",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'Thriller' by Michael Jackson is the best-selling album of all time.",
    correctAnswer: 1,
    explanation: "True. Thriller has sold over 66 million copies worldwide."
  },

  // ===========================
  // ENTERTAINMENT - TV Shows (5 sample questions)
  // ===========================
  {
    id: "tv-shows-sample-1",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which TV show features the characters Ross, Rachel, and Monica?",
    options: ["Seinfeld", "Friends", "How I Met Your Mother", "The Big Bang Theory"],
    correctAnswer: 1,
    explanation: "Friends ran from 1994 to 2004."
  },
  {
    id: "tv-shows-sample-2",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the name of Walter White's alias in 'Breaking Bad'?",
    options: ["Heisenberg", "Scarface", "Cap'n Cook", "Tuco"],
    correctAnswer: 0,
    explanation: "Walter White uses the alias Heisenberg in his meth operation."
  },
  {
    id: "tv-shows-sample-3",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "'Game of Thrones' is based on books by George R.R. Martin.",
    correctAnswer: 1,
    explanation: "True. The series is based on 'A Song of Ice and Fire' book series."
  },
  {
    id: "tv-shows-sample-4",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which show features the fictional Dunder Mifflin Paper Company?",
    options: ["Parks and Recreation", "The Office", "30 Rock", "Arrested Development"],
    correctAnswer: 1,
    explanation: "The Office is set at Dunder Mifflin in Scranton, Pennsylvania."
  },
  {
    id: "tv-shows-sample-5",
    topicId: "tv-shows",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "'The Simpsons' has aired for over 30 seasons.",
    correctAnswer: 1,
    explanation: "True. The Simpsons premiered in 1989 and has over 35 seasons."
  },

  // ===========================
  // ENTERTAINMENT - Rock Bands (5 sample questions)
  // ===========================
  {
    id: "rock-bands-sample-1",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who was the lead singer of Queen?",
    options: ["David Bowie", "Freddie Mercury", "Mick Jagger", "Robert Plant"],
    correctAnswer: 1,
    explanation: "Freddie Mercury was Queen's iconic frontman until his death in 1991."
  },
  {
    id: "rock-bands-sample-2",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which band released the album 'Abbey Road'?",
    options: ["The Rolling Stones", "Pink Floyd", "The Beatles", "Led Zeppelin"],
    correctAnswer: 2,
    explanation: "The Beatles released Abbey Road in 1969."
  },
  {
    id: "rock-bands-sample-3",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Led Zeppelin's 'Stairway to Heaven' is one of the longest rock songs ever played on radio.",
    correctAnswer: 1,
    explanation: "True. At over 8 minutes, it became a rock radio staple despite its length."
  },
  {
    id: "rock-bands-sample-4",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which band sang 'Hotel California'?",
    options: ["Fleetwood Mac", "The Eagles", "The Doors", "Lynyrd Skynyrd"],
    correctAnswer: 1,
    explanation: "The Eagles released 'Hotel California' in 1976."
  },
  {
    id: "rock-bands-sample-5",
    topicId: "rock-bands",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Pink Floyd's 'The Dark Side of the Moon' spent over 900 weeks on the Billboard 200 chart.",
    correctAnswer: 1,
    explanation: "True. It spent 950 weeks on the chart, a record for many years."
  },

  // ===========================
  // ENTERTAINMENT - Celebrities (5 sample questions)
  // ===========================
  {
    id: "celebrities-sample-1",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which actress played Hermione in the Harry Potter films?",
    options: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emily Blunt"],
    correctAnswer: 0,
    explanation: "Emma Watson portrayed Hermione Granger throughout the series."
  },
  {
    id: "celebrities-sample-2",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is the highest-paid actor of all time?",
    options: ["Tom Cruise", "Dwayne Johnson", "Robert Downey Jr.", "Samuel L. Jackson"],
    correctAnswer: 1,
    explanation: "Dwayne 'The Rock' Johnson has been among the highest-paid actors in recent years."
  },
  {
    id: "celebrities-sample-3",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "medium",
    question: "Meryl Streep has more Oscar nominations than any other actor.",
    correctAnswer: 1,
    explanation: "True. Streep has received 21 Academy Award nominations."
  },
  {
    id: "celebrities-sample-4",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which celebrity couple is known as 'Brangelina'?",
    options: ["Brad Pitt and Jennifer Aniston", "Brad Pitt and Angelina Jolie", "Bradley Cooper and Angelina Jolie", "Brandon Lee and Angela Bassett"],
    correctAnswer: 1,
    explanation: "Brad Pitt and Angelina Jolie were dubbed 'Brangelina' by the media."
  },
  {
    id: "celebrities-sample-5",
    topicId: "celebrities",
    categoryId: "entertainment",
    type: "true-false",
    difficulty: "hard",
    question: "Tom Hanks has won back-to-back Best Actor Oscars.",
    correctAnswer: 1,
    explanation: "True. Hanks won for 'Philadelphia' (1993) and 'Forrest Gump' (1994)."
  },

  // ===========================
  // TECHNOLOGY - Computer History (5 sample questions)
  // ===========================
  {
    id: "computer-history-sample-1",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is considered the father of computer science?",
    options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Mark Zuckerberg"],
    correctAnswer: 2,
    explanation: "Alan Turing is widely regarded as the father of computer science and AI."
  },
  {
    id: "computer-history-sample-2",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the first personal computer?",
    options: ["IBM", "Apple", "Microsoft", "Commodore"],
    correctAnswer: 1,
    explanation: "Apple released the Apple I in 1976, one of the first personal computers."
  },
  {
    id: "computer-history-sample-3",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "ENIAC was one of the first electronic general-purpose computers.",
    correctAnswer: 1,
    explanation: "True. ENIAC was completed in 1945 and weighed about 30 tons."
  },
  {
    id: "computer-history-sample-4",
    topicId: "computer-history",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who co-founded Apple Computer with Steve Jobs?",
    options: ["Bill Gates", "Steve Wozniak", "Paul Allen", "Larry Page"],
    correctAnswer: 1,
    explanation: "Steve Wozniak and Steve Jobs founded Apple in 1976."
  },
  {
    id: "computer-history-sample-5",
    topicId: "computer-history",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first computer mouse was made of wood.",
    correctAnswer: 1,
    explanation: "True. Douglas Engelbart invented the first mouse in 1964, which had a wooden shell."
  },

  // ===========================
  // TECHNOLOGY - Internet & Web (5 sample questions)
  // ===========================
  {
    id: "internet-web-sample-1",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correctAnswer: 1,
    explanation: "Tim Berners-Lee invented the World Wide Web in 1989."
  },
  {
    id: "internet-web-sample-2",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'HTTP' stand for?",
    options: ["HyperText Transfer Protocol", "High Tech Transfer Program", "Home Tool Transfer Protocol", "Hyper Transfer Text Protocol"],
    correctAnswer: 0,
    explanation: "HTTP is the protocol used for transferring web pages."
  },
  {
    id: "internet-web-sample-3",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The first website ever created is still online today.",
    correctAnswer: 1,
    explanation: "True. The first website, info.cern.ch, is still accessible."
  },
  {
    id: "internet-web-sample-4",
    topicId: "internet-web",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was Google founded?",
    options: ["1996", "1998", "2000", "2002"],
    correctAnswer: 1,
    explanation: "Google was founded by Larry Page and Sergey Brin in 1998."
  },
  {
    id: "internet-web-sample-5",
    topicId: "internet-web",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The '@' symbol in email addresses was chosen by Ray Tomlinson.",
    correctAnswer: 1,
    explanation: "True. Tomlinson chose '@' for the first email system in 1971."
  },

  // ===========================
  // TECHNOLOGY - Smartphones (5 sample questions)
  // ===========================
  {
    id: "smartphones-sample-1",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company introduced the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correctAnswer: 2,
    explanation: "Apple introduced the first iPhone in 2007."
  },
  {
    id: "smartphones-sample-2",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does 'OS' stand for in iOS and Android OS?",
    options: ["Operating System", "Online Service", "Open Source", "Official Software"],
    correctAnswer: 0,
    explanation: "OS stands for Operating System."
  },
  {
    id: "smartphones-sample-3",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Android was developed by Google from the start.",
    correctAnswer: 0,
    explanation: "False. Android was created by Android Inc., which Google acquired in 2005."
  },
  {
    id: "smartphones-sample-4",
    topicId: "smartphones",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correctAnswer: 2,
    explanation: "The first iPhone was released on June 29, 2007."
  },
  {
    id: "smartphones-sample-5",
    topicId: "smartphones",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "The first smartphone with a touchscreen was the iPhone.",
    correctAnswer: 0,
    explanation: "False. Devices like the IBM Simon (1994) and LG Prada (2006) had touchscreens before the iPhone."
  },

  // ===========================
  // TECHNOLOGY - Famous Inventors (5 sample questions)
  // ===========================
  {
    id: "famous-inventors-sample-1",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who invented the light bulb?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
    correctAnswer: 1,
    explanation: "Thomas Edison developed the first practical incandescent light bulb."
  },
  {
    id: "famous-inventors-sample-2",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Who is credited with inventing the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Samuel Morse", "Guglielmo Marconi"],
    correctAnswer: 1,
    explanation: "Alexander Graham Bell patented the telephone in 1876."
  },
  {
    id: "famous-inventors-sample-3",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "The Wright brothers invented the airplane.",
    correctAnswer: 1,
    explanation: "True. Orville and Wilbur Wright achieved the first powered flight in 1903."
  },
  {
    id: "famous-inventors-sample-4",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Who invented the printing press?",
    options: ["Johannes Gutenberg", "Leonardo da Vinci", "Benjamin Franklin", "William Caxton"],
    correctAnswer: 0,
    explanation: "Johannes Gutenberg invented the movable-type printing press around 1440."
  },
  {
    id: "famous-inventors-sample-5",
    topicId: "famous-inventors",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "Nikola Tesla invented the alternating current (AC) electrical system.",
    correctAnswer: 1,
    explanation: "True. Tesla developed the AC electrical system, which became the standard for power distribution."
  },

  // ===========================
  // TECHNOLOGY - Gaming (5 sample questions)
  // ===========================
  {
    id: "gaming-sample-1",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which company created the PlayStation?",
    options: ["Microsoft", "Nintendo", "Sony", "Sega"],
    correctAnswer: 2,
    explanation: "Sony released the first PlayStation in 1994."
  },
  {
    id: "gaming-sample-2",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is Mario's profession in the Super Mario games?",
    options: ["Chef", "Plumber", "Carpenter", "Doctor"],
    correctAnswer: 1,
    explanation: "Mario is a plumber by profession."
  },
  {
    id: "gaming-sample-3",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "medium",
    question: "Minecraft is the best-selling video game of all time.",
    correctAnswer: 1,
    explanation: "True. Minecraft has sold over 300 million copies worldwide."
  },
  {
    id: "gaming-sample-4",
    topicId: "gaming",
    categoryId: "technology",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What year was the Nintendo Entertainment System (NES) released in North America?",
    options: ["1983", "1985", "1987", "1989"],
    correctAnswer: 1,
    explanation: "The NES was released in North America in 1985."
  },
  {
    id: "gaming-sample-5",
    topicId: "gaming",
    categoryId: "technology",
    type: "true-false",
    difficulty: "hard",
    question: "'Pac-Man' was originally called 'Puck Man' in Japan.",
    correctAnswer: 1,
    explanation: "True. The name was changed for the international release to avoid vandalism."
  },

  // ===========================
  // NATURE & ANIMALS - African Wildlife (5 sample questions)
  // ===========================
  {
    id: "african-wildlife-sample-1",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
    correctAnswer: 1,
    explanation: "The cheetah can reach speeds up to 70 mph (113 km/h)."
  },
  {
    id: "african-wildlife-sample-2",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest land animal?",
    options: ["Hippopotamus", "Rhinoceros", "Giraffe", "African Elephant"],
    correctAnswer: 3,
    explanation: "The African elephant can weigh up to 14,000 pounds."
  },
  {
    id: "african-wildlife-sample-3",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Lions are the only cats that live in groups called prides.",
    correctAnswer: 1,
    explanation: "True. Lions are unique among cats for their social structure."
  },
  {
    id: "african-wildlife-sample-4",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How tall can an adult giraffe grow?",
    options: ["Up to 12 feet", "Up to 15 feet", "Up to 18 feet", "Up to 20 feet"],
    correctAnswer: 2,
    explanation: "Giraffes can grow up to 18 feet tall, making them the tallest land animal."
  },
  {
    id: "african-wildlife-sample-5",
    topicId: "african-wildlife",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "A group of zebras is called a 'dazzle'.",
    correctAnswer: 1,
    explanation: "True. Zebras in a group are called a dazzle or a zeal."
  },

  // ===========================
  // NATURE & ANIMALS - Birds (5 sample questions)
  // ===========================
  {
    id: "birds-sample-1",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird is the fastest in flight?",
    options: ["Eagle", "Peregrine Falcon", "Swift", "Albatross"],
    correctAnswer: 1,
    explanation: "The peregrine falcon can dive at speeds over 240 mph."
  },
  {
    id: "birds-sample-2",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which bird cannot fly?",
    options: ["Penguin", "Duck", "Swan", "Goose"],
    correctAnswer: 0,
    explanation: "Penguins are flightless birds adapted for swimming."
  },
  {
    id: "birds-sample-3",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Owls can rotate their heads 360 degrees.",
    correctAnswer: 0,
    explanation: "False. Owls can only rotate their heads about 270 degrees."
  },
  {
    id: "birds-sample-4",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the largest species of bird?",
    options: ["Albatross", "Condor", "Ostrich", "Emu"],
    correctAnswer: 2,
    explanation: "The ostrich is the largest bird, standing up to 9 feet tall."
  },
  {
    id: "birds-sample-5",
    topicId: "birds",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Hummingbirds can fly backwards.",
    correctAnswer: 1,
    explanation: "True. Hummingbirds are the only birds that can fly backwards."
  },

  // ===========================
  // NATURE & ANIMALS - Rainforests (5 sample questions)
  // ===========================
  {
    id: "rainforests-sample-1",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest rainforest in the world?",
    options: ["Congo Rainforest", "Amazon Rainforest", "Southeast Asian Rainforest", "Australian Rainforest"],
    correctAnswer: 1,
    explanation: "The Amazon Rainforest spans over 2.1 million square miles."
  },
  {
    id: "rainforests-sample-2",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which continent has no rainforests?",
    options: ["Europe", "Antarctica", "Australia", "Asia"],
    correctAnswer: 1,
    explanation: "Antarctica is too cold and dry to support rainforest ecosystems."
  },
  {
    id: "rainforests-sample-3",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Rainforests produce about 20% of Earth's oxygen.",
    correctAnswer: 1,
    explanation: "True. Tropical rainforests are often called the 'lungs of the Earth'."
  },
  {
    id: "rainforests-sample-4",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What percentage of all species on Earth live in rainforests?",
    options: ["About 25%", "About 50%", "About 75%", "About 90%"],
    correctAnswer: 1,
    explanation: "Rainforests contain approximately 50% of all terrestrial species."
  },
  {
    id: "rainforests-sample-5",
    topicId: "rainforests",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Amazon Rainforest spans nine countries.",
    correctAnswer: 1,
    explanation: "True. The Amazon covers parts of Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, and French Guiana."
  },

  // ===========================
  // NATURE & ANIMALS - Endangered Species (5 sample questions)
  // ===========================
  {
    id: "endangered-species-sample-1",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which animal is critically endangered and native to China?",
    options: ["Tiger", "Giant Panda", "Elephant", "Gorilla"],
    correctAnswer: 1,
    explanation: "The giant panda is an iconic endangered species from China."
  },
  {
    id: "endangered-species-sample-2",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the main threat to endangered species?",
    options: ["Natural disasters", "Habitat loss", "Old age", "Migration"],
    correctAnswer: 1,
    explanation: "Habitat loss is the primary threat to most endangered species."
  },
  {
    id: "endangered-species-sample-3",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "There are only about 3,900 tigers left in the wild.",
    correctAnswer: 1,
    explanation: "True. Tiger populations have declined dramatically due to poaching and habitat loss."
  },
  {
    id: "endangered-species-sample-4",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "Which marine animal is critically endangered due to plastic pollution?",
    options: ["Great White Shark", "Blue Whale", "Sea Turtle", "Dolphin"],
    correctAnswer: 2,
    explanation: "Sea turtles are particularly vulnerable to plastic pollution in oceans."
  },
  {
    id: "endangered-species-sample-5",
    topicId: "endangered-species",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "The Javan rhino has fewer than 100 individuals left in the wild.",
    correctAnswer: 1,
    explanation: "True. The Javan rhino is one of the rarest large mammals with around 70 individuals."
  },

  // ===========================
  // NATURE & ANIMALS - Insects (5 sample questions)
  // ===========================
  {
    id: "insects-sample-1",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many legs do insects have?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1,
    explanation: "All insects have six legs, which distinguishes them from arachnids (8 legs)."
  },
  {
    id: "insects-sample-2",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "easy",
    question: "Which insect is known for making honey?",
    options: ["Wasp", "Hornet", "Bee", "Fly"],
    correctAnswer: 2,
    explanation: "Honeybees produce honey from flower nectar."
  },
  {
    id: "insects-sample-3",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "medium",
    question: "Butterflies taste with their feet.",
    correctAnswer: 1,
    explanation: "True. Butterflies have chemoreceptors on their feet to taste plants."
  },
  {
    id: "insects-sample-4",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the lifespan of a mayfly?",
    options: ["A few hours to days", "A few weeks", "A few months", "A year"],
    correctAnswer: 0,
    explanation: "Adult mayflies live from a few hours to a few days."
  },
  {
    id: "insects-sample-5",
    topicId: "insects",
    categoryId: "nature-animals",
    type: "true-false",
    difficulty: "hard",
    question: "Ants can carry objects up to 50 times their own body weight.",
    correctAnswer: 1,
    explanation: "True. Ants are remarkably strong for their size and can carry heavy loads."
  },
];

/**
 * Get all questions for a specific topic and difficulty level
 */
export function getQuestionsByTopicAndDifficulty(
  topicId: string,
  difficulty: DifficultyLevel
): QuizQuestion[] {
  return questions.filter(
    (q) => q.topicId === topicId && q.difficulty === difficulty
  );
}

/**
 * Get all questions for a specific topic (all difficulties)
 */
export function getQuestionsByTopic(topicId: string): QuizQuestion[] {
  return questions.filter((q) => q.topicId === topicId);
}

/**
 * Get a random subset of questions for a topic and difficulty
 */
export function getRandomQuestions(
  topicId: string,
  difficulty: DifficultyLevel,
  count: number
): QuizQuestion[] {
  const allQuestions = getQuestionsByTopicAndDifficulty(topicId, difficulty);
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get question statistics for a topic
 */
export function getTopicQuestionStats(topicId: string) {
  const topicQuestions = getQuestionsByTopic(topicId);
  return {
    total: topicQuestions.length,
    easy: topicQuestions.filter((q) => q.difficulty === "easy").length,
    medium: topicQuestions.filter((q) => q.difficulty === "medium").length,
    hard: topicQuestions.filter((q) => q.difficulty === "hard").length,
    multipleChoice: topicQuestions.filter((q) => q.type === "multiple-choice").length,
    trueFalse: topicQuestions.filter((q) => q.type === "true-false").length,
  };
}
