import type { QuizCategory } from "@/types/quiz";

export const categories: QuizCategory[] = [
  {
    id: "history",
    name: "History",
    description: "World events, historical figures, and civilizations",
    icon: "Scroll",
    color: "bg-amber-500",
  },
  {
    id: "geography",
    name: "Geography",
    description: "Countries, capitals, landmarks, and flags",
    icon: "Globe",
    color: "bg-blue-500",
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, chemistry, biology, and astronomy",
    icon: "Atom",
    color: "bg-purple-500",
  },
  {
    id: "arts-literature",
    name: "Arts & Literature",
    description: "Books, authors, paintings, and literary movements",
    icon: "BookOpen",
    color: "bg-pink-500",
  },
  {
    id: "sports",
    name: "Sports",
    description: "Athletes, championships, and Olympic records",
    icon: "Trophy",
    color: "bg-green-500",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Movies, music, TV shows, and pop culture",
    icon: "Film",
    color: "bg-red-500",
  },
  {
    id: "technology",
    name: "Technology",
    description: "Inventions, computers, and innovations",
    icon: "Laptop",
    color: "bg-cyan-500",
  },
  {
    id: "nature-animals",
    name: "Nature & Animals",
    description: "Wildlife, ecosystems, and biodiversity",
    icon: "Leaf",
    color: "bg-emerald-500",
  },
];
