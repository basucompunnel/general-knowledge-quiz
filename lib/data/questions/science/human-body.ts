// Human Body Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const humanBodyQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "human-body-easy-1",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: 1,
    explanation: "An adult human body has 206 bones. Babies are born with about 270 bones, some of which fuse as they grow."
  },
  {
    id: "human-body-easy-2",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswer: 2,
    explanation: "The skin is the largest organ, covering the entire body and accounting for about 16% of total body weight."
  },
  {
    id: "human-body-easy-3",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many chambers does the human heart have?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
    explanation: "The human heart has four chambers: two atria and two ventricles."
  },
  {
    id: "human-body-easy-4",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does the brain control?",
    options: ["Only thought", "Thoughts, breathing, and body movements", "Only memory", "Only emotions"],
    correctAnswer: 1,
    explanation: "The brain controls all body functions including thoughts, breathing, heart rate, movement, and emotions."
  },
  {
    id: "human-body-easy-5",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the main function of the lungs?",
    options: ["Digestion", "Oxygen exchange", "Blood circulation", "Temperature regulation"],
    correctAnswer: 1,
    explanation: "The lungs extract oxygen from air and release carbon dioxide through the process of respiration."
  },
  {
    id: "human-body-easy-6",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "How many muscles are in the human body?",
    options: ["About 300", "About 500", "About 600", "About 800"],
    correctAnswer: 2,
    explanation: "The adult human body has approximately 600-650 muscles that work together to produce movement."
  },
  {
    id: "human-body-easy-7",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the largest internal organ?",
    options: ["Brain", "Heart", "Liver", "Stomach"],
    correctAnswer: 2,
    explanation: "The liver is the largest internal organ, weighing about 3 pounds and performing over 300 functions."
  },
  {
    id: "human-body-easy-8",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "The human brain uses approximately 20% of the body's energy.",
    correctAnswer: 1,
    explanation: "True. Despite being only 2% of body weight, the brain uses about 20% of the body's energy at rest."
  },
  {
    id: "human-body-easy-9",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Adults have fewer bones than babies.",
    correctAnswer: 1,
    explanation: "True. Babies are born with about 270 bones, many of which are cartilage. As they grow, some fuse together, resulting in 206 adult bones."
  },
  {
    id: "human-body-easy-10",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "The human body is made up of about 60% water.",
    correctAnswer: 1,
    explanation: "True. About 60% of an adult's body weight is water, though this percentage varies by age and sex."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "human-body-medium-1",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the smallest bone in the human body?",
    options: ["Stirrup (stapes)", "Anvil (incus)", "Hammer (malleus)", "Hyoid"],
    correctAnswer: 0,
    explanation: "The stapes in the middle ear is the smallest bone, about 3mm long and weighing only 2.8 milligrams."
  },
  {
    id: "human-body-medium-2",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many chambers does the human brain have?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
    explanation: "The brain has four ventricles that produce and circulate cerebrospinal fluid."
  },
  {
    id: "human-body-medium-3",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the function of red blood cells?",
    options: ["Fight infections", "Carry oxygen", "Clot blood", "Produce antibodies"],
    correctAnswer: 1,
    explanation: "Red blood cells contain hemoglobin, which binds to oxygen and transports it throughout the body."
  },
  {
    id: "human-body-medium-4",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What gland produces insulin?",
    options: ["Thyroid gland", "Pancreas", "Pituitary gland", "Adrenal gland"],
    correctAnswer: 1,
    explanation: "The pancreas produces insulin, a hormone that regulates blood glucose levels."
  },
  {
    id: "human-body-medium-5",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the strong protein in bones that provides flexibility?",
    options: ["Calcium", "Collagen", "Phosphorus", "Keratin"],
    correctAnswer: 1,
    explanation: "Collagen is a protein that makes bones flexible, while calcium provides hardness and strength."
  },
  {
    id: "human-body-medium-6",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "How many pairs of chromosomes do humans have?",
    options: ["20 pairs", "23 pairs", "25 pairs", "30 pairs"],
    correctAnswer: 1,
    explanation: "Humans have 23 pairs of chromosomes (46 total), 22 pairs of autosomes and 1 pair of sex chromosomes."
  },
  {
    id: "human-body-medium-7",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What vitamin is essential for calcium absorption?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
    correctAnswer: 2,
    explanation: "Vitamin D is essential for calcium absorption in the small intestine and helps regulate blood calcium levels."
  },
  {
    id: "human-body-medium-8",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The human stomach completely replaces its lining every 3-4 days.",
    correctAnswer: 1,
    explanation: "True. The stomach lining regenerates rapidly to protect the underlying tissue from stomach acid."
  },
  {
    id: "human-body-medium-9",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Blood type O is the most common blood type worldwide.",
    correctAnswer: 1,
    explanation: "True. O+ is the most common blood type globally, found in about 37% of the population."
  },
  {
    id: "human-body-medium-10",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The human heart beats approximately 100,000 times per day.",
    correctAnswer: 1,
    explanation: "True. At an average rate of 60-100 beats per minute, the heart beats roughly 86,400-144,000 times daily."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "human-body-hard-1",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the protein in red blood cells that binds oxygen?",
    options: ["Myoglobin", "Hemoglobin", "Albumin", "Globulin"],
    correctAnswer: 1,
    explanation: "Hemoglobin is the iron-containing protein that binds oxygen and gives blood its red color."
  },
  {
    id: "human-body-hard-2",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the resting heart rate of a trained athlete typically?",
    options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
    correctAnswer: 0,
    explanation: "Elite athletes often have resting heart rates of 40-60 bpm due to better cardiovascular efficiency."
  },
  {
    id: "human-body-hard-3",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What percentage of the brain is gray matter?",
    options: ["20%", "40%", "60%", "80%"],
    correctAnswer: 1,
    explanation: "Gray matter comprises about 40% of the brain and contains neuronal cell bodies, while white matter is 60%."
  },
  {
    id: "human-body-hard-4",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the protein in muscles that causes contraction?",
    options: ["Myosin", "Actin", "Dystrophin", "Tropomyosin"],
    correctAnswer: 0,
    explanation: "Myosin and actin interact to cause muscle contraction; myosin heads pull actin filaments, contracting the muscle."
  },
  {
    id: "human-body-hard-5",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the name of the fluid that cushions the brain and spinal cord?",
    options: ["Synovial fluid", "Cerebrospinal fluid", "Lymph", "Interstitial fluid"],
    correctAnswer: 1,
    explanation: "Cerebrospinal fluid (CSF) cushions the brain and spinal cord and is produced in the brain's ventricles."
  },
  {
    id: "human-body-hard-6",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "How long is the small intestine?",
    options: ["About 5 feet", "About 10 feet", "About 20 feet", "About 30 feet"],
    correctAnswer: 2,
    explanation: "The small intestine is about 20-25 feet long and is where most nutrient absorption occurs."
  },
  {
    id: "human-body-hard-7",
    topicId: "human-body",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the most abundant mineral in the human body?",
    options: ["Iron", "Zinc", "Calcium", "Magnesium"],
    correctAnswer: 2,
    explanation: "Calcium is the most abundant mineral in the body, primarily found in bones and teeth."
  },
  {
    id: "human-body-hard-8",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The Broca's area and Wernicke's area are language centers in the left hemisphere.",
    correctAnswer: 1,
    explanation: "True. Both language areas are typically located in the left hemisphere of the brain for most people."
  },
  {
    id: "human-body-hard-9",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The human body replaces most of its cells every 7-10 years.",
    correctAnswer: 1,
    explanation: "True. Most cells in the body are replaced regularly, though some like neurons replace very slowly or not at all."
  },
  {
    id: "human-body-hard-10",
    topicId: "human-body",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The human eye can distinguish about 10 million different colors.",
    correctAnswer: 1,
    explanation: "True. The human eye's cone cells can distinguish approximately 10 million different color variations."
  }
] satisfies QuizQuestion[];
