import { notFound } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { QuizContent } from "@/components/quiz/quiz-content";

interface QuizPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { category: categoryId } = await params;
  
  // Find the category from our data
  const category = categories.find((cat) => cat.id === categoryId);

  // If category doesn't exist, show 404
  if (!category) {
    notFound();
  }

  return <QuizContent category={category} />;
}
