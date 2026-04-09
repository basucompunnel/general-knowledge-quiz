import { notFound } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { getTopicById } from "@/lib/data/topics";
import { DifficultySelection } from "@/components/quiz/difficulty-selection";

interface TopicPageProps {
  params: Promise<{
    category: string;
    topic: string;
  }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { category: categoryId, topic: topicId } = await params;
  
  // Find the category and topic from our data
  const category = categories.find((cat) => cat.id === categoryId);
  const topic = getTopicById(topicId);

  // If category or topic doesn't exist, or topic doesn't belong to category, show 404
  if (!category || !topic || topic.categoryId !== categoryId) {
    notFound();
  }

  return <DifficultySelection category={category} topic={topic} />;
}
