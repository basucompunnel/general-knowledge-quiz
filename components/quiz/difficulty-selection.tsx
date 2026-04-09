"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizCategory, QuizTopic } from "@/types/quiz";

interface DifficultySelectionProps {
  category: QuizCategory;
  topic: QuizTopic;
}

export function DifficultySelection({
  category,
  topic,
}: DifficultySelectionProps) {
  const Icon = Icons[topic.icon as keyof typeof Icons] as React.ComponentType<{
    className?: string;
  }>;

  const difficulties = [
    {
      level: "easy",
      name: "Easy",
      description: "Perfect for beginners",
      icon: "Smile",
      color: "bg-green-500",
    },
    {
      level: "medium",
      name: "Medium",
      description: "A balanced challenge",
      icon: "Meh",
      color: "bg-yellow-500",
    },
    {
      level: "hard",
      name: "Hard",
      description: "For quiz masters",
      icon: "Frown",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="h-[calc(100vh-5rem)] overflow-hidden">
      <div className="container mx-auto px-4 py-8 max-w-5xl h-full">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* Left Sidebar - Fixed */}
          <div className="md:w-2/5 md:pr-4">
            <div className="mb-6">
              <Link href={`/quiz/${category.id}`}>
                <Button variant="ghost">← Back to {category.name}</Button>
              </Link>
            </div>

            <div className="text-center md:text-left">
              <div
                className={cn(
                  "w-24 h-24 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4",
                  topic.color,
                )}
              >
                {Icon && <Icon className="w-12 h-12 text-white" />}
              </div>
              <h1 className="text-4xl font-bold mb-3">{topic.name}</h1>
              <p className="text-lg text-muted-foreground">
                {topic.description}
              </p>
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="pl-4 md:w-3/5 md:overflow-y-auto md:pr-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Choose Difficulty</h2>
              <p className="text-sm text-muted-foreground">
                Select your challenge level
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {difficulties.map((difficulty) => {
                const DifficultyIcon = Icons[
                  difficulty.icon as keyof typeof Icons
                ] as React.ComponentType<{ className?: string }>;
                return (
                  <Card
                    key={difficulty.level}
                    className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4 p-4 py-0">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-lg flex items-center justify-center shrink-0",
                          difficulty.color,
                        )}
                      >
                        {DifficultyIcon && (
                          <DifficultyIcon className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">
                          {difficulty.name}
                        </CardTitle>
                        <CardDescription>
                          {difficulty.description}
                        </CardDescription>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
