import { useState } from "react";
import { ChevronLeft, ShoppingCart, Scissors, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { CostumeRecommendation, ImplementationGuide } from "@/types/quiz";

interface DetailScreenProps {
  costume: CostumeRecommendation;
  guide: ImplementationGuide;
  onBack: () => void;
}

export const DetailScreen = ({ costume, guide, onBack }: DetailScreenProps) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'diy'>('buy');

  const openImageSearch = () => {
    window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(costume.imageSearch)}`, '_blank');
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <Button
          onClick={onBack}
          variant="outline"
          className="rounded-2xl border-2 hover:border-primary mb-4"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Results
        </Button>

        {/* Costume Info */}
        <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-8 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {costume.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{costume.description}</p>
            <Button
              onClick={openImageSearch}
              variant="outline"
              className="rounded-xl border-2 hover:border-secondary hover:text-secondary"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Reference Photos
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Difficulty</div>
              <div className="text-xl font-bold text-primary">{costume.difficulty}</div>
            </div>
            <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Cost Range</div>
              <div className="text-xl font-bold text-secondary">{costume.cost}</div>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Time Needed</div>
              <div className="text-xl font-bold text-accent">{costume.time}</div>
            </div>
          </div>
        </div>

        {/* Implementation Guides */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'buy' | 'diy')} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-2">
            <TabsTrigger
              value="buy"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Guide
            </TabsTrigger>
            <TabsTrigger
              value="diy"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-primary-foreground"
            >
              <Scissors className="w-4 h-4 mr-2" />
              DIY Guide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buy" className="space-y-6 animate-fade-in">
            {guide.buyPath && (
              <>
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Shopping List</h3>
                  <div className="space-y-3">
                    {guide.buyPath.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between p-4 bg-primary/5 border border-primary/20 rounded-2xl hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">{item.name}</div>
                          <div className="text-sm text-muted-foreground mt-1">{item.where}</div>
                        </div>
                        <div className="text-lg font-bold text-primary ml-4">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Cost:</span>
                    <span className="text-2xl font-bold text-primary">{guide.buyPath.totalCost}</span>
                  </div>
                </Card>

                {guide.buyPath.tips && guide.buyPath.tips.length > 0 && (
                  <Card className="bg-secondary/10 backdrop-blur-sm border-2 border-secondary/30 rounded-3xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-secondary">Shopping Tips</h3>
                    <ul className="space-y-3">
                      {guide.buyPath.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="diy" className="space-y-6 animate-fade-in">
            {guide.diyPath && (
              <>
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">Materials Needed</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {guide.diyPath.materials.map((material, idx) => (
                      <li key={idx} className="flex items-center gap-3 p-3 bg-secondary/5 border border-secondary/20 rounded-xl">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Step-by-Step Instructions</h3>
                  <div className="space-y-4">
                    {guide.diyPath.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-accent/5 border border-accent/20 rounded-2xl">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center font-bold text-primary-foreground">
                          {idx + 1}
                        </div>
                        <p className="flex-1 text-foreground/90">{step}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {guide.diyPath.tools && guide.diyPath.tools.length > 0 && (
                  <Card className="bg-primary/10 backdrop-blur-sm border-2 border-primary/30 rounded-3xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Tools Required</h3>
                    <div className="flex flex-wrap gap-2">
                      {guide.diyPath.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-xl text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}

                <Card className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Estimated DIY Cost:</span>
                    <span className="text-2xl font-bold text-secondary">{guide.diyPath.totalCost}</span>
                  </div>
                </Card>

                {guide.diyPath.tips && guide.diyPath.tips.length > 0 && (
                  <Card className="bg-accent/10 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-accent">DIY Tips</h3>
                    <ul className="space-y-3">
                      {guide.diyPath.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
