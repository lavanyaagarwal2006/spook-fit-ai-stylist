import { useState } from "react";
import { Sparkles, ChevronLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CostumeRecommendation } from "@/types/quiz";
import { CostumeCard } from "./CostumeCard";

interface ResultsScreenProps {
  recommendations: CostumeRecommendation[];
  savedCostumes: string[];
  onToggleSave: (costumeName: string) => void;
  onSelectCostume: (costume: CostumeRecommendation) => void;
  onGenerateMore: () => void;
  onBack: () => void;
  isGenerating: boolean;
}

export const ResultsScreen = ({
  recommendations,
  savedCostumes,
  onToggleSave,
  onSelectCostume,
  onGenerateMore,
  onBack,
  isGenerating
}: ResultsScreenProps) => {
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const displayedCostumes = showSavedOnly
    ? recommendations.filter((c) => savedCostumes.includes(c.name))
    : recommendations;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your Perfect Costumes
          </h1>
          <p className="text-muted-foreground text-lg">
            AI-curated just for you based on your interests
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="rounded-2xl border-2 hover:border-primary"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Quiz
          </Button>

          <div className="flex gap-3">
            <Button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              variant={showSavedOnly ? "default" : "outline"}
              className={showSavedOnly
                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl"
                : "rounded-2xl border-2 hover:border-primary"
              }
            >
              <Filter className="w-4 h-4 mr-2" />
              {showSavedOnly ? 'Show All' : `Saved (${savedCostumes.length})`}
            </Button>

            <Button
              onClick={onGenerateMore}
              disabled={isGenerating}
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary-glow hover:to-accent text-primary-foreground rounded-2xl shadow-[0_0_20px_hsl(16_100%_60%/0.3)] hover:shadow-[0_0_30px_hsl(16_100%_60%/0.5)] transition-all"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {isGenerating ? 'Generating...' : 'Generate More'}
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        {displayedCostumes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCostumes.map((costume, index) => (
              <div
                key={`${costume.name}-${index}`}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CostumeCard
                  costume={costume}
                  isSaved={savedCostumes.includes(costume.name)}
                  onToggleSave={() => onToggleSave(costume.name)}
                  onSelect={() => onSelectCostume(costume)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No saved costumes yet. Save some to view them here!</p>
          </div>
        )}

        {/* Info Box */}
        {recommendations.length > 0 && (
          <div className="bg-primary/10 border border-primary/30 rounded-3xl p-6 text-center">
            <p className="text-foreground/90">
              <span className="font-semibold text-primary">Pro tip:</span> Not quite right? Click "Generate More" for fresh ideas,
              or go back and adjust your preferences!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
