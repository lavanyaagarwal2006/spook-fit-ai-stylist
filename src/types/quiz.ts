export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multi-select' | 'text' | 'enhanced-interests';
  options?: QuizOption[];
  placeholder?: string;
}

export interface QuizOption {
  value: string;
  label: string;
  emoji: string;
}

export interface QuizAnswers {
  [key: string]: string | string[];
}

export interface CostumeRecommendation {
  name: string;
  description: string;
  imageSearch: string;
  why: string;
  difficulty: string;
  cost: string;
  time: string;
  category: string;
}

export interface ImplementationGuide {
  buyPath?: {
    items: Array<{
      name: string;
      price: string;
      where: string;
    }>;
    totalCost: string;
    tips: string[];
  };
  diyPath?: {
    materials: string[];
    steps: string[];
    tools: string[];
    totalCost: string;
    tips: string[];
  };
}
