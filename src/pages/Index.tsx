import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ResultsScreen } from "@/components/ResultsScreen";
import { DetailScreen } from "@/components/DetailScreen";
import { QuizAnswers, CostumeRecommendation, ImplementationGuide } from "@/types/quiz";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { costumeDatabase } from "@/data/costumeDatabase";

type Stage = 'welcome' | 'quiz' | 'loading' | 'results' | 'detail';

const Index = () => {
  const [stage, setStage] = useState<Stage>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [recommendations, setRecommendations] = useState<CostumeRecommendation[]>([]);
  const [savedCostumes, setSavedCostumes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCostume, setSelectedCostume] = useState<CostumeRecommendation | null>(null);
  const [costumeGuide, setCostumeGuide] = useState<ImplementationGuide | null>(null);
  const [isLoadingGuide, setIsLoadingGuide] = useState(false);

  const handleStartQuiz = () => {
    setStage('quiz');
  };

  const handleQuizComplete = async (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setStage('loading');
    
    try {
      const previousNames = recommendations.map(r => r.name);
      
      // Phase 1: AI matches user profile to database
      const { data: matchData, error: matchError } = await supabase.functions.invoke('match-costumes', {
        body: { 
          userProfile: answers,
          costumeDatabase,
          excludeNames: previousNames,
          count: 5
        }
      });

      if (matchError) throw matchError;

      if (!matchData?.costumes || matchData.costumes.length === 0) {
        throw new Error("No matches found");
      }

      // Phase 2: AI enhances with visual details
      const { data: enhanceData, error: enhanceError } = await supabase.functions.invoke('enhance-costumes', {
        body: { 
          costumes: matchData.costumes,
          userProfile: answers
        }
      });

      if (enhanceError) throw enhanceError;

      if (enhanceData?.costumes && Array.isArray(enhanceData.costumes)) {
        setRecommendations(enhanceData.costumes);
        setStage('results');
        toast.success("Your costumes are ready! 🎃");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error('Error generating recommendations:', error);
      toast.error("Oops! Something went wrong. Please try again.");
      
      // Simple fallback
      const budgetMap: { [key: string]: string } = {
        '<$30': '$20-30',
        '$30-60': '$35-55',
        '$60-100': '$65-95',
        '$100+': '$100-150'
      };

      const genderFiltered = (costumeDatabase as any[])
        .filter(c => answers.gender === 'any' || c.genders.includes(answers.gender as string))
        .slice(0, 5)
        .map(costume => ({
          ...costume,
          description: `Classic ${costume.name} costume from ${costume.source}.`,
          cost: budgetMap[answers.budget as string] || '$30-60',
          time: '3-5 hours',
          difficulty: 'Medium',
          imageSearch: `${costume.name} costume`,
          category: 'pop-culture',
          why: 'Great costume choice!'
        }));
      
      setRecommendations(genderFiltered as CostumeRecommendation[]);
      setStage('results');
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);
    try {
      const previousNames = recommendations.map(r => r.name);
      
      // Phase 1: AI matches
      const { data: matchData, error: matchError } = await supabase.functions.invoke('match-costumes', {
        body: { 
          userProfile: quizAnswers,
          costumeDatabase,
          excludeNames: previousNames,
          count: 5
        }
      });

      if (matchError) throw matchError;

      if (!matchData?.costumes || matchData.costumes.length === 0) {
        throw new Error("No new matches found");
      }

      // Phase 2: AI enhances
      const { data: enhanceData, error: enhanceError } = await supabase.functions.invoke('enhance-costumes', {
        body: { 
          costumes: matchData.costumes,
          userProfile: quizAnswers
        }
      });

      if (enhanceError) throw enhanceError;

      if (enhanceData?.costumes && Array.isArray(enhanceData.costumes)) {
        setRecommendations([...recommendations, ...enhanceData.costumes]);
        toast.success("Generated 5 more costume ideas!");
      } else {
        throw new Error("Invalid response format");
      }
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

  const handleSelectCostume = async (costume: CostumeRecommendation) => {
    setSelectedCostume(costume);
    setIsLoadingGuide(true);
    setStage('loading');

    try {
      const { data, error } = await supabase.functions.invoke('generate-guide', {
        body: {
          costume: {
            name: costume.name,
            description: costume.description
          },
          approach: quizAnswers.approach || 'hybrid',
          budget: quizAnswers.budget || 'medium'
        }
      });

      if (error) throw error;

      if (data) {
        setCostumeGuide(data);
        setStage('detail');
        toast.success("Implementation guide ready!");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error('Error generating guide:', error);
      toast.error("Failed to generate guide. Please try again.");
      setStage('results');
    } finally {
      setIsLoadingGuide(false);
    }
  };

  const handleBackToWelcome = () => {
    setStage('welcome');
    setQuizAnswers({});
    setRecommendations([]);
    setSavedCostumes([]);
    setSelectedCostume(null);
    setCostumeGuide(null);
  };

  const handleBackToQuiz = () => {
    setStage('quiz');
  };

  const handleBackToResults = () => {
    setStage('results');
    setSelectedCostume(null);
    setCostumeGuide(null);
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
      {stage === 'detail' && selectedCostume && costumeGuide && (
        <DetailScreen
          costume={selectedCostume}
          guide={costumeGuide}
          onBack={handleBackToResults}
        />
      )}
    </>
  );
};

export default Index;
