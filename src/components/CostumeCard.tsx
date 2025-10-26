import { ExternalLink, Heart, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CostumeRecommendation } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface CostumeCardProps {
  costume: CostumeRecommendation & { source?: string };
  isSaved: boolean;
  onToggleSave: () => void;
  onSelect: () => void;
}

export const CostumeCard = ({ costume, isSaved, onToggleSave, onSelect }: CostumeCardProps) => {
  const openImageSearch = () => {
    window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(costume.imageSearch)}`, '_blank');
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(271_91%_65%/0.3)] rounded-3xl">
      {/* Save Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleSave();
        }}
        className={cn(
          "absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-300",
          isSaved
            ? "bg-primary text-primary-foreground"
            : "bg-card/80 text-muted-foreground hover:text-primary"
        )}
      >
        <Heart className={cn("w-5 h-5", isSaved && "fill-current")} />
      </button>

      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl font-bold mb-2 pr-10 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {costume.name}
          </h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
            {costume.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {costume.description}
        </p>

        {/* Why This Fits */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
          <p className="text-sm text-foreground/90">
            <span className="font-semibold text-primary">Perfect for you:</span> {costume.why}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-secondary mb-1">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-xs text-muted-foreground">{costume.difficulty}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-accent mb-1">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="text-xs text-muted-foreground">{costume.cost}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs text-muted-foreground">{costume.time}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button
            onClick={openImageSearch}
            variant="outline"
            className="flex-1 rounded-xl border-2 hover:border-secondary hover:text-secondary transition-all"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Photos
          </Button>
          <Button
            onClick={onSelect}
            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground rounded-xl shadow-[0_0_15px_hsl(271_91%_65%/0.3)] hover:shadow-[0_0_25px_hsl(271_91%_65%/0.5)] transition-all"
          >
            Get Guide
          </Button>
        </div>
      </div>
    </Card>
  );
};
