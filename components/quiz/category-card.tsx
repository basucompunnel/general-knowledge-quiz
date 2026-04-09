"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { QuizCategory } from "@/types/quiz";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoryCardProps {
  category: QuizCategory;
  href: string;
}

export function CategoryCard({ category, href }: CategoryCardProps) {
  const Icon = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <Link href={href}>
      <Card className="cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <div className={cn("w-12 h-12 rounded-xs flex items-center justify-center mb-2", category.color)}>
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
