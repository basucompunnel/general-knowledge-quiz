// Main questions index - aggregates all topic question files
// Auto-generated index for modular question structure

import type { QuizQuestion, DifficultyLevel } from "@/types/quiz";

// History imports
import { ancientRomeQuestions } from "./history/ancient-rome";
import { worldWar2Questions } from "./history/world-war-ii";
import { renaissanceQuestions } from "./history/renaissance";
import { medievalEuropeQuestions } from "./history/medieval-europe";
import { coldWarQuestions } from "./history/cold-war";

// Geography imports
import { europeanCapitalsQuestions } from "./geography/european-capitals";
import { worldFlagsQuestions } from "./geography/world-flags";
import { mountainsRiversQuestions } from "./geography/mountains-rivers";
import { continentsOceansQuestions } from "./geography/continents-oceans";
import { famousLandmarksQuestions } from "./geography/famous-landmarks";

// Science imports
import { humanBodyQuestions } from "./science/human-body";
import { spaceAstronomyQuestions } from "./science/space-astronomy";
import { chemistryElementsQuestions } from "./science/chemistry-elements";
import { physicsForcesQuestions } from "./science/physics-forces";
import { marineBiologyQuestions } from "./science/marine-biology";

// Arts & Literature imports
import { shakespeareQuestions } from "./arts-literature/shakespeare";
import { classicNovelsQuestions } from "./arts-literature/classic-novels";
import { famousPaintersQuestions } from "./arts-literature/famous-painters";
import { poetryQuestions } from "./arts-literature/poetry";
import { mythologyQuestions } from "./arts-literature/mythology";

// Sports imports
import { olympicsQuestions } from "./sports/olympics";
import { footballSoccerQuestions } from "./sports/football-soccer";
import { basketballQuestions } from "./sports/basketball";
import { tennisQuestions } from "./sports/tennis";
import { athleticsQuestions } from "./sports/athletics";

// Entertainment imports
import { hollywoodClassicsQuestions } from "./entertainment/hollywood-classics";
import { popMusicQuestions } from "./entertainment/pop-music";
import { tvShowsQuestions } from "./entertainment/tv-shows";
import { rockBandsQuestions } from "./entertainment/rock-bands";
import { celebritiesQuestions } from "./entertainment/celebrities";

// Technology imports
import { computerHistoryQuestions } from "./technology/computer-history";
import { internetWebQuestions } from "./technology/internet-web";
import { smartphonesQuestions } from "./technology/smartphones";
import { famousInventorsQuestions } from "./technology/famous-inventors";
import { gamingQuestions } from "./technology/gaming";

// Nature & Animals imports
import { africanWildlifeQuestions } from "./nature-animals/african-wildlife";
import { birdsQuestions } from "./nature-animals/birds";
import { rainforestsQuestions } from "./nature-animals/rainforests";
import { endangeredSpeciesQuestions } from "./nature-animals/endangered-species";
import { insectsQuestions } from "./nature-animals/insects";

// Combine all questions into a single array
export const questions: QuizQuestion[] = [
  // History (150 questions)
  ...ancientRomeQuestions,
  ...worldWar2Questions,
  ...renaissanceQuestions,
  ...medievalEuropeQuestions,
  ...coldWarQuestions,
  
  // Geography (50 questions)
  ...europeanCapitalsQuestions,
  ...worldFlagsQuestions,
  ...mountainsRiversQuestions,
  ...continentsOceansQuestions,
  ...famousLandmarksQuestions,
  
  // Science (25 questions)
  ...humanBodyQuestions,
  ...spaceAstronomyQuestions,
  ...chemistryElementsQuestions,
  ...physicsForcesQuestions,
  ...marineBiologyQuestions,
  
  // Arts & Literature (25 questions)
  ...shakespeareQuestions,
  ...classicNovelsQuestions,
  ...famousPaintersQuestions,
  ...poetryQuestions,
  ...mythologyQuestions,
  
  // Sports (25 questions)
  ...olympicsQuestions,
  ...footballSoccerQuestions,
  ...basketballQuestions,
  ...tennisQuestions,
  ...athleticsQuestions,
  
  // Entertainment (25 questions)
  ...hollywoodClassicsQuestions,
  ...popMusicQuestions,
  ...tvShowsQuestions,
  ...rockBandsQuestions,
  ...celebritiesQuestions,
  
  // Technology (25 questions)
  ...computerHistoryQuestions,
  ...internetWebQuestions,
  ...smartphonesQuestions,
  ...famousInventorsQuestions,
  ...gamingQuestions,
  
  // Nature & Animals (25 questions)
  ...africanWildlifeQuestions,
  ...birdsQuestions,
  ...rainforestsQuestions,
  ...endangeredSpeciesQuestions,
  ...insectsQuestions,
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
