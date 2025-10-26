import { Ghost, Sparkles, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4 animate-slide-up">
          <Ghost className="w-20 h-20 mx-auto text-primary animate-float" strokeWidth={1.5} />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SpookFit
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI-Powered Halloween Costume Planner
          </p>
        </div>

        <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-foreground/90">
            Find your perfect costume with personalized AI recommendations
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Smart recommendations based on your unique interests
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <DollarSign className="w-8 h-8 mx-auto mb-3 text-secondary" />
              <h3 className="font-semibold mb-2">Budget-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Options for every budget with buy or DIY guides
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold mb-2">Time-Saving</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized suggestions in seconds
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-[0_0_30px_hsl(271_91%_65%/0.4)] hover:shadow-[0_0_50px_hsl(271_91%_65%/0.6)] transition-all duration-300 hover:scale-105 font-semibold animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Start Your Spooky Journey
        </Button>
      </div>
    </div>
  );
};
