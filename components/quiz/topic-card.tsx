"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { QuizTopic } from "@/types/quiz";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TopicCardProps {
  topic: QuizTopic;
  href: string;
}

export function TopicCard({ topic, href }: TopicCardProps) {
  const Icon = Icons[topic.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <Link href={href} className="w-full">
      <Card className="cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg">
        <div className="flex items-center gap-3 p-3 py-1">
          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center shrink-0", topic.color)}>
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="mb-1 text-base">{topic.name}</CardTitle>
            <p className="text-xs text-muted-foreground line-clamp-1">{topic.description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
