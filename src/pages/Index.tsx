import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ResultsScreen } from "@/components/ResultsScreen";
import { QuizAnswers, CostumeRecommendation } from "@/types/quiz";
import { toast } from "sonner";

type Stage = 'welcome' | 'quiz' | 'loading' | 'results';

const Index = () => {
  const [stage, setStage] = useState<Stage>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [recommendations, setRecommendations] = useState<CostumeRecommendation[]>([]);
  const [savedCostumes, setSavedCostumes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStartQuiz = () => {
    setStage('quiz');
  };

  const handleQuizComplete = async (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setStage('loading');
    
    try {
      // TODO: Replace with actual API call to backend edge function
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Mock data for now
      const mockRecommendations: CostumeRecommendation[] = [
        {
          name: "Miles Morales Spider-Man",
          description: "Black suit with red web pattern, red and black sneakers, spray-painted spider logo on chest. Iconic look from Into the Spider-Verse.",
          imageSearch: "Miles Morales Spider-Man costume Into the Spider-Verse",
          why: "Perfect blend of pop culture and creative style with a modern superhero twist",
          difficulty: "Medium",
          cost: "$45-65",
          time: "4-6 hours",
          category: "pop-culture"
        },
        {
          name: "Wednesday Addams",
          description: "Black dress with white collar, long black braided pigtails, deadpan expression. The iconic gothic character from The Addams Family.",
          imageSearch: "Wednesday Addams costume Netflix",
          why: "Classic spooky aesthetic that's trending in 2025",
          difficulty: "Easy",
          cost: "$30-50",
          time: "2-3 hours",
          category: "classic"
        },
        {
          name: "Princess Peach",
          description: "Pink floor-length ball gown with puffy sleeves, gold crown with red gems, long blonde hair, white gloves. The beloved Nintendo princess.",
          imageSearch: "Princess Peach costume Super Mario",
          why: "Glamorous and recognizable, perfect for gaming fans",
          difficulty: "Hard",
          cost: "$80-120",
          time: "8-10 hours",
          category: "pop-culture"
        }
      ];
      
      setRecommendations(mockRecommendations);
      setStage('results');
      toast.success("Your costumes are ready! 🎃");
    } catch (error) {
      console.error('Error generating recommendations:', error);
      toast.error("Oops! Something went wrong. Please try again.");
      setStage('quiz');
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);
    try {
      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Generated 5 more costume ideas!");
    } catch (error) {
      console.error('Error generating more:', error);
      toast.error("Failed to generate more costumes. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleToggleSave = (costumeName: string) => {
    setSavedCostumes(prev =>
      prev.includes(costumeName)
        ? prev.filter(name => name !== costumeName)
        : [...prev, costumeName]
    );
  };

  const handleSelectCostume = (costume: CostumeRecommendation) => {
    // TODO: Implement detail screen with implementation guides
    toast.info("Implementation guide coming soon!");
  };

  const handleBackToWelcome = () => {
    setStage('welcome');
    setQuizAnswers({});
    setRecommendations([]);
    setSavedCostumes([]);
  };

  const handleBackToQuiz = () => {
    setStage('quiz');
  };

  return (
    <>
      {stage === 'welcome' && <WelcomeScreen onStart={handleStartQuiz} />}
      {stage === 'quiz' && <QuizScreen onComplete={handleQuizComplete} onBack={handleBackToWelcome} />}
      {stage === 'loading' && <LoadingScreen />}
      {stage === 'results' && (
        <ResultsScreen
          recommendations={recommendations}
          savedCostumes={savedCostumes}
          onToggleSave={handleToggleSave}
          onSelectCostume={handleSelectCostume}
          onGenerateMore={handleGenerateMore}
          onBack={handleBackToQuiz}
          isGenerating={isGenerating}
        />
      )}
    </>
  );
};

export default Index;
