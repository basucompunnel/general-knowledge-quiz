import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <h1 className="text-xl font-semibold">General Knowledge Quiz</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
