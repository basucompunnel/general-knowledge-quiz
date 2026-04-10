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
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
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
      score: calculateScore(),
      totalQuestions: questions.length,
      timeSpent,
      date: new Date().toISOString(),
    };
    
    const existingResults = JSON.parse(localStorage.getItem("quizResults") || "[]");
    localStorage.setItem("quizResults", JSON.stringify([...existingResults, result]));
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const getLetterGrade = (percentage: number) => {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    const grade = getLetterGrade(percentage);

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
              {questions.map((q, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <Card
                    key={q.id}
                    className={cn(
                      "border-2",
                      isCorrect ? "border-green-500" : "border-red-500"
                    )}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-2">
                        <span className="font-bold">Q{index + 1}.</span>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{q.question}</CardTitle>
                          {q.type === "multiple-choice" && q.options && (
                            <div className="mt-3 space-y-2">
                              {q.options.map((option, optIndex) => {
                                const isUserAnswer = userAnswer === optIndex;
                                const isCorrectAnswer = q.correctAnswer === optIndex;

                                return (
                                  <div
                                    key={optIndex}
                                    className={cn(
                                      "p-2 rounded",
                                      isCorrectAnswer && "bg-green-100 dark:bg-green-900",
                                      isUserAnswer && !isCorrectAnswer && "bg-red-100 dark:bg-red-900"
                                    )}
                                  >
                                    {option}
                                    {isCorrectAnswer && " ✓"}
                                    {isUserAnswer && !isCorrectAnswer && " ✗"}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          {q.type === "true-false" && (
                            <div className="mt-3 space-y-2">
                              <div
                                className={cn(
                                  "p-2 rounded",
                                  q.correctAnswer === 1 && "bg-green-100 dark:bg-green-900",
                                  userAnswer === 1 && q.correctAnswer !== 1 && "bg-red-100 dark:bg-red-900"
                                )}
                              >
                                True {q.correctAnswer === 1 && "✓"} {userAnswer === 1 && q.correctAnswer !== 1 && "✗"}
                              </div>
                              <div
                                className={cn(
                                  "p-2 rounded",
                                  q.correctAnswer === 0 && "bg-green-100 dark:bg-green-900",
                                  userAnswer === 0 && q.correctAnswer !== 0 && "bg-red-100 dark:bg-red-900"
                                )}
                              >
                                False {q.correctAnswer === 0 && "✓"} {userAnswer === 0 && q.correctAnswer !== 0 && "✗"}
                              </div>
                            </div>
                          )}
                          {q.explanation && (
                            <div className="mt-3 text-sm text-muted-foreground italic">
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
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

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{answeredCount} answered</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start gap-2">
            <span className="font-bold text-lg">Q{currentQuestionIndex + 1}.</span>
            <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestionIndex] === index ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-4 px-4"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="font-bold mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          )}

          {currentQuestion.type === "true-false" && (
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={selectedAnswers[currentQuestionIndex] === 1 ? "default" : "outline"}
                className="h-20 text-lg"
                onClick={() => handleAnswerSelect(1)}
              >
                True
              </Button>
              <Button
                variant={selectedAnswers[currentQuestionIndex] === 0 ? "default" : "outline"}
                className="h-20 text-lg"
                onClick={() => handleAnswerSelect(0)}
              >
                False
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Previous
        </Button>

        <div className="flex gap-1">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={cn(
                "w-8 h-8 rounded text-sm transition-colors",
                index === currentQuestionIndex
                  ? "bg-primary text-primary-foreground"
                  : selectedAnswers[index] !== null
                  ? "bg-green-500 text-white"
                  : "bg-secondary"
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestionIndex < questions.length - 1 ? (
          <Button onClick={handleNext}>
            Next →
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
            className="bg-green-600 hover:bg-green-700"
          >
            Submit Quiz
          </Button>
        )}
      </div>

      {answeredCount < questions.length && currentQuestionIndex === questions.length - 1 && (
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Please answer all questions before submitting
        </div>
      )}
    </div>
  );
}
