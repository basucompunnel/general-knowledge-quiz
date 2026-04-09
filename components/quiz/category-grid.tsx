"use client";

import { CategoryCard } from "@/components/quiz/category-card";
import { categories } from "@/lib/data/categories";

export function CategoryGrid() {
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Choose a Category</h2>
        <p className="text-muted-foreground">Select a topic to start your quiz</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            href={`/quiz/${category.id}`}
          />
        ))}
      </div>
    </div>
  );
}
