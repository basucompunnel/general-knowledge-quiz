import { CategoryGrid } from "@/components/quiz/category-grid";

export function HomeContent() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center py-16 px-4 bg-white dark:bg-black">
        <CategoryGrid />
      </main>
    </div>
  );
}
