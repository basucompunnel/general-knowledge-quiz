"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { QuizCategory, QuizTopic, QuizQuestion, DifficultyLevel } from "@/types/quiz";

interface QuizPlayerProps {
  category: QuizCategory;
  topic: QuizTopic;
  difficulty: DifficultyLevel;
  questions: QuizQuestion[];
}

// Utility Functions
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const getLetterGrade = (percentage: number) => {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
};

const calculateScore = (selectedAnswers: (number | null)[], questions: QuizQuestion[]) => {
  return selectedAnswers.reduce((score, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return (score || 0) + 1;
    }
    return score;
  }, 0);
};

// Subcomponents
interface QuizHeaderProps {
  topic: QuizTopic;
  difficulty: DifficultyLevel;
  timeSpent: number;
}

function QuizHeader({ topic, difficulty, timeSpent }: QuizHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">{topic.name}</h1>
          <p className="text-sm text-muted-foreground">
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Time</div>
          <div className="text-xl font-bold">{formatTime(timeSpent)}</div>
        </div>
      </div>
    </div>
  );
}

interface QuizProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  answeredCount: number;
}

function QuizProgressBar({
  currentQuestionIndex,
  totalQuestions,
  answeredCount,
}: QuizProgressBarProps) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
        <span>{answeredCount} answered</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary rounded-full h-2 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

interface QuizContentProps {
  question: QuizQuestion;
  questionIndex: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
}

function QuizContent({
  question,
  questionIndex,
  selectedAnswer,
  onAnswerSelect,
}: QuizContentProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start gap-2">
          <span className="font-bold text-lg">Q{questionIndex + 1}.</span>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {question.type === "multiple-choice" && question.options && (
          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className="h-20 text-left flex flex-col items-start justify-center"
                onClick={() => onAnswerSelect(index)}
              >
                <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                <span className="text-sm">{option}</span>
              </Button>
            ))}
          </div>
        )}

        {question.type === "true-false" && (
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant={selectedAnswer === 1 ? "default" : "outline"}
              className="h-20 text-lg"
              onClick={() => onAnswerSelect(1)}
            >
              True
            </Button>
            <Button
              variant={selectedAnswer === 0 ? "default" : "outline"}
              className="h-20 text-lg"
              onClick={() => onAnswerSelect(0)}
            >
              False
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface QuizNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  answeredCount: number;
  selectedAnswers: (number | null)[];
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

function QuizNavigation({
  currentQuestionIndex,
  totalQuestions,
  answeredCount,
  selectedAnswers,
  onPrevious,
  onNext,
  onSubmit,
}: QuizNavigationProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </Button>

        <div className="flex gap-1">
          {selectedAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => {}}
              className={cn(
                "w-8 h-8 rounded text-sm transition-colors",
                index === currentQuestionIndex
                  ? "bg-primary text-primary-foreground"
                  : answer !== null
                  ? "bg-green-500 text-white"
                  : "bg-secondary"
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button onClick={onNext}>
            Next →
          </Button>
        ) : (
          <Button
            onClick={onSubmit}
            disabled={answeredCount < totalQuestions}
            className="bg-green-600 hover:bg-green-700"
          >
            Submit Quiz
          </Button>
        )}
      </div>

      {answeredCount < totalQuestions && currentQuestionIndex === totalQuestions - 1 && (
        <div className="text-center text-sm text-muted-foreground">
          Please answer all questions before submitting
        </div>
      )}
    </div>
  );
}

interface QuestionReviewProps {
  question: QuizQuestion;
  questionIndex: number;
  userAnswer: number | null;
}

function QuestionReview({ question, questionIndex, userAnswer }: QuestionReviewProps) {
  const isCorrect = userAnswer === question.correctAnswer;

  return (
    <Card
      className={cn(
        "border-2",
        isCorrect ? "border-green-500" : "border-red-500"
      )}
    >
      <CardHeader>
        <div className="flex items-start gap-2">
          <span className="font-bold">Q{questionIndex + 1}.</span>
          <div className="flex-1">
            <CardTitle className="text-lg">{question.question}</CardTitle>
            {question.type === "multiple-choice" && question.options && (
              <div className="mt-3 grid grid-cols-2 gap-2">
                {question.options.map((option, optIndex) => {
                  const isUserAnswer = userAnswer === optIndex;
                  const isCorrectAnswer = question.correctAnswer === optIndex;

                  return (
                    <div
                      key={optIndex}
                      className={cn(
                        "p-2 rounded text-sm",
                        isCorrectAnswer && "bg-green-100 dark:bg-green-900",
                        isUserAnswer && !isCorrectAnswer && "bg-red-100 dark:bg-red-900"
                      )}
                    >
                      <strong>{String.fromCharCode(65 + optIndex)}.</strong> {option}
                      {isCorrectAnswer && " ✓"}
                      {isUserAnswer && !isCorrectAnswer && " ✗"}
                    </div>
                  );
                })}
              </div>
            )}
            {question.type === "true-false" && (
              <div className="mt-3 space-y-2">
                <div
                  className={cn(
                    "p-2 rounded",
                    question.correctAnswer === 1 && "bg-green-100 dark:bg-green-900",
                    userAnswer === 1 && question.correctAnswer !== 1 && "bg-red-100 dark:bg-red-900"
                  )}
                >
                  True {question.correctAnswer === 1 && "✓"} {userAnswer === 1 && question.correctAnswer !== 1 && "✗"}
                </div>
                <div
                  className={cn(
                    "p-2 rounded",
                    question.correctAnswer === 0 && "bg-green-100 dark:bg-green-900",
                    userAnswer === 0 && question.correctAnswer !== 0 && "bg-red-100 dark:bg-red-900"
                  )}
                >
                  False {question.correctAnswer === 0 && "✓"} {userAnswer === 0 && question.correctAnswer !== 0 && "✗"}
                </div>
              </div>
            )}
            {question.explanation && (
              <div className="mt-3 text-sm text-muted-foreground italic">
                {question.explanation}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

interface QuizResultsProps {
  category: QuizCategory;
  topic: QuizTopic;
  difficulty: DifficultyLevel;
  questions: QuizQuestion[];
  selectedAnswers: (number | null)[];
  timeSpent: number;
}

function QuizResults({
  category,
  topic,
  difficulty,
  questions,
  selectedAnswers,
  timeSpent,
}: QuizResultsProps) {
  const score = calculateScore(selectedAnswers, questions);
  const percentage = ((score || 0) / questions.length) * 100;
  const grade = getLetterGrade(percentage);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="mb-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
          <CardDescription>
            {topic.name} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4 text-primary">
              {percentage.toFixed(0)}%
            </div>
            <div className="text-4xl font-bold mb-2">Grade: {grade}</div>
            <div className="text-lg text-muted-foreground">
              {score} out of {questions.length} correct
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Time: {formatTime(timeSpent)}
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <Link href={`/quiz/${category.id}/${topic.id}`}>
              <Button variant="outline">Try Different Difficulty</Button>
            </Link>
            <Link href={`/quiz/${category.id}`}>
              <Button variant="outline">Back to Topics</Button>
            </Link>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Review Answers</h3>
            {questions.map((q, index) => (
              <QuestionReview
                key={q.id}
                question={q}
                questionIndex={index}
                userAnswer={selectedAnswers[index]}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Main Component
export function QuizPlayer({
  category,
  topic,
  difficulty,
  questions,
}: QuizPlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  // Timer
  useEffect(() => {
    if (showResults) return;
    
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [showResults]);

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = selectedAnswers.filter((a) => a !== null).length;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    
    // Save to localStorage
    const result = {
      categoryId: category.id,
      topicId: topic.id,
      difficulty,
      score: calculateScore(selectedAnswers, questions),
      totalQuestions: questions.length,
      timeSpent,
      date: new Date().toISOString(),
    };
    
    const existingResults = JSON.parse(localStorage.getItem("quizResults") || "[]");
    localStorage.setItem("quizResults", JSON.stringify([...existingResults, result]));
  };

  if (showResults) {
    return (
      <QuizResults
        category={category}
        topic={topic}
        difficulty={difficulty}
        questions={questions}
        selectedAnswers={selectedAnswers}
        timeSpent={timeSpent}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <QuizHeader topic={topic} difficulty={difficulty} timeSpent={timeSpent} />
      <QuizProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
      />
      <QuizContent
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswers[currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
      />
      <QuizNavigation
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        answeredCount={answeredCount}
        selectedAnswers={selectedAnswers}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
