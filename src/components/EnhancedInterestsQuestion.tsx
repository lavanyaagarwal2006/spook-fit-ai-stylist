import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { INTEREST_CATEGORIES } from '@/data/interestCategories';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface EnhancedInterestsQuestionProps {
  selectedInterests: string[];
  onSelectionChange: (interests: string[]) => void;
}

export const EnhancedInterestsQuestion = ({ selectedInterests, onSelectionChange }: EnhancedInterestsQuestionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(['movies-tv', 'gaming', 'anime']));

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleInterest = (interestValue: string) => {
    if (selectedInterests.includes(interestValue)) {
      onSelectionChange(selectedInterests.filter(i => i !== interestValue));
    } else {
      onSelectionChange([...selectedInterests, interestValue]);
    }
  };

  const selectAllInCategory = (categoryId: string) => {
    const category = INTEREST_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;
    
    const categoryValues = category.interests.map(i => i.value);
    const newSelection = [...new Set([...selectedInterests, ...categoryValues])];
    onSelectionChange(newSelection);
  };

  const clearCategory = (categoryId: string) => {
    const category = INTEREST_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;
    
    const categoryValues = new Set(category.interests.map(i => i.value));
    onSelectionChange(selectedInterests.filter(i => !categoryValues.has(i)));
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return INTEREST_CATEGORIES;

    const term = searchTerm.toLowerCase();
    return INTEREST_CATEGORIES.map(category => ({
      ...category,
      interests: category.interests.filter(interest =>
        interest.label.toLowerCase().includes(term) ||
        interest.value.toLowerCase().includes(term)
      )
    })).filter(category => category.interests.length > 0);
  }, [searchTerm]);

  const getCategorySelectedCount = (categoryId: string) => {
    const category = INTEREST_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return 0;
    return category.interests.filter(i => selectedInterests.includes(i.value)).length;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">What are you into?</h2>
        <p className="text-muted-foreground">Select as many as you'd like - the more you choose, the better your recommendations!</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search interests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {filteredCategories.map((category) => {
          const selectedCount = getCategorySelectedCount(category.id);
          const totalCount = category.interests.length;
          const isOpen = openCategories.has(category.id);

          return (
            <Collapsible
              key={category.id}
              open={isOpen}
              onOpenChange={() => toggleCategory(category.id)}
              className="border rounded-lg bg-card"
            >
              <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedCount > 0 ? `${selectedCount} of ${totalCount} selected` : `${totalCount} options`}
                    </p>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </CollapsibleTrigger>

              <CollapsibleContent className="px-4 pb-4">
                {/* Category Actions */}
                <div className="flex gap-2 mb-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectAllInCategory(category.id);
                    }}
                  >
                    Select All
                  </Button>
                  {selectedCount > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearCategory(category.id);
                      }}
                    >
                      Clear
                    </Button>
                  )}
                </div>

                {/* Interest Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {category.interests.map((interest) => {
                    const isSelected = selectedInterests.includes(interest.value);
                    return (
                      <button
                        key={interest.value}
                        type="button"
                        onClick={() => toggleInterest(interest.value)}
                        className={`
                          flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                          transition-all border-2
                          ${isSelected
                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                            : 'bg-background hover:bg-accent border-border'
                          }
                        `}
                      >
                        <span>{interest.icon}</span>
                        <span className="truncate">{interest.label}</span>
                      </button>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>

      {/* Selection Counter */}
      <div className="sticky bottom-0 bg-gradient-to-t from-background to-background/80 backdrop-blur-sm py-4 text-center border-t">
        <p className="text-lg font-semibold">
          {selectedInterests.length === 0 ? (
            <span className="text-muted-foreground">No interests selected yet</span>
          ) : (
            <>
              <span className="text-primary">{selectedInterests.length}</span> interest{selectedInterests.length !== 1 ? 's' : ''} selected
            </>
          )}
        </p>
        {selectedInterests.length > 0 && selectedInterests.length < 3 && (
          <p className="text-sm text-muted-foreground mt-1">
            Select at least 3-5 interests for best results
          </p>
        )}
      </div>
    </div>
  );
};
