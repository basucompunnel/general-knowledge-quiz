"use client";

import { TopicCard } from "@/components/quiz/topic-card";
import { getTopicsByCategory } from "@/lib/data/topics";

interface TopicGridProps {
  categoryId: string;
}

export function TopicGrid({ categoryId }: TopicGridProps) {
  const topics = getTopicsByCategory(categoryId);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Choose a Topic</h2>
        <p className="text-sm text-muted-foreground">Select a specific topic to start your quiz</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            href={`/quiz/${categoryId}/${topic.id}`}
          />
        ))}
      </div>
    </div>
  );
}
