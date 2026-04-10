import { notFound } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { getTopicById } from "@/lib/data/topics";
import { getQuestionsByTopicAndDifficulty } from "@/lib/data/questions";
import { QuizPlayer } from "@/components/quiz/quiz-player";
import type { DifficultyLevel } from "@/types/quiz";

interface QuizDifficultyPageProps {
  params: Promise<{
    category: string;
    topic: string;
    difficulty: string;
  }>;
}

export default async function QuizDifficultyPage({
  params,
}: QuizDifficultyPageProps) {
  const { category: categoryId, topic: topicId, difficulty } = await params;

  // Validate difficulty level
  if (!["easy", "medium", "hard"].includes(difficulty)) {
    notFound();
  }

  // Find the category and topic
  const category = categories.find((cat) => cat.id === categoryId);
  const topic = getTopicById(topicId);

  // If category or topic doesn't exist, or topic doesn't belong to category, show 404
  if (!category || !topic || topic.categoryId !== categoryId) {
    notFound();
  }

  // Get questions for this topic and difficulty
  const questions = getQuestionsByTopicAndDifficulty(
    topicId,
    difficulty as DifficultyLevel
  );

  // If no questions available, show 404
  if (questions.length === 0) {
    notFound();
  }

  return (
    <QuizPlayer
      category={category}
      topic={topic}
      difficulty={difficulty as DifficultyLevel}
      questions={questions}
    />
  );
}
