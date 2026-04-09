import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <h1 className="text-xl font-semibold">General Knowledge Quiz</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
