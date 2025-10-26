import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion, QuizAnswers } from "@/types/quiz";
import { quizQuestions } from "@/data/quizQuestions";
import { cn } from "@/lib/utils";

interface QuizScreenProps {
  onComplete: (answers: QuizAnswers) => void;
  onBack: () => void;
}

export const QuizScreen = ({ onComplete, onBack }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  const handleAnswer = (value: string, isMulti = false) => {
    if (isMulti) {
      const current = (answers[question.id] as string[]) || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setAnswers({ ...answers, [question.id]: updated });
    } else {
      setAnswers({ ...answers, [question.id]: value });
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) {
      onBack();
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = () => {
    const answer = answers[question.id];
    if (question.type === 'multi-select') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return answer && answer.toString().trim().length > 0;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_hsl(0_0%_0%/0.4)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.type === 'single' && question.options && (
              <div className="grid gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={cn(
                      "w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 hover:scale-[1.02]",
                      answers[question.id] === option.value
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(271_91%_65%/0.3)]"
                        : "border-border bg-card/30 hover:border-primary/50"
                    )}
                  >
                    <span className="text-3xl">{option.emoji}</span>
                    <span className="text-lg font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'multi-select' && question.options && (
              <div className="grid md:grid-cols-2 gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value, true)}
                    className={cn(
                      "p-4 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-3 hover:scale-[1.02]",
                      (answers[question.id] as string[])?.includes(option.value)
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_hsl(271_91%_65%/0.3)]"
                        : "border-border bg-card/30 hover:border-primary/50"
                    )}
                  >
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {question.type === 'text' && (
              <Textarea
                placeholder={question.placeholder}
                value={(answers[question.id] as string) || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                className="min-h-[120px] text-lg border-2 bg-card/30 focus:border-primary rounded-2xl resize-none"
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handleBack}
            variant="outline"
            size="lg"
            className="rounded-2xl border-2 hover:border-primary transition-all"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground rounded-2xl shadow-[0_0_20px_hsl(271_91%_65%/0.3)] hover:shadow-[0_0_40px_hsl(271_91%_65%/0.5)] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLastQuestion ? 'Get My Costumes' : 'Next'}
            {!isLastQuestion && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
};
