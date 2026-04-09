"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizCategory } from "@/types/quiz";
import { TopicGrid } from "@/components/quiz/topic-grid";

interface QuizContentProps {
  category: QuizCategory;
}

export function QuizContent({ category }: QuizContentProps) {
  const Icon = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="h-[calc(100vh-5rem)] overflow-hidden">
      <div className="container mx-auto px-4 py-8 max-w-5xl h-full">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* Left Sidebar - Fixed */}
          <div className="md:w-2/5 md:pr-4">
            <div className="mb-6">
              <Link href="/">
                <Button variant="ghost">
                  ← Back to Categories
                </Button>
              </Link>
            </div>
            
            <div className="text-center md:text-left">
              <div className={cn("w-24 h-24 rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4", category.color)}>
                {Icon && <Icon className="w-12 h-12 text-white" />}
              </div>
              <h1 className="text-4xl font-bold mb-3">{category.name}</h1>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="pl-4 md:w-3/5 md:overflow-y-auto md:pr-2">
            <TopicGrid categoryId={category.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
