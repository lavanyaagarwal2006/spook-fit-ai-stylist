import { Ghost, Sparkles, Wand2 } from "lucide-react";

interface LoadingScreenProps {
  title?: string;
  description?: string;
  timeEstimate?: string;
}

export const LoadingScreen = ({ 
  title = "Conjuring Your Perfect Costumes...",
  description = "Our AI is analyzing your interests to find character-perfect matches",
  timeEstimate = "This usually takes 5-10 seconds..."
}: LoadingScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="relative">
          <Ghost className="w-24 h-24 mx-auto text-primary animate-float" strokeWidth={1.5} />
          <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-secondary animate-pulse" />
          <Wand2 className="w-8 h-8 absolute bottom-0 left-1/4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="h-2 bg-card/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse w-full" />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            {timeEstimate}
          </p>
        </div>
      </div>
    </div>
  );
};
