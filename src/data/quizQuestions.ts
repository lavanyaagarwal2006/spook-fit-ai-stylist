import { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'gender',
    question: "What gender do you identify as?",
    type: 'single',
    options: [
      { value: 'male', label: 'Male', emoji: '👨' },
      { value: 'female', label: 'Female', emoji: '👩' },
      { value: 'non-binary', label: 'Non-binary', emoji: '🧑' },
      { value: 'any', label: 'Any/All options', emoji: '✨' }
    ]
  },
  {
    id: 'style',
    question: "What's your Halloween vibe?",
    type: 'multi-select',
    options: [
      { value: 'scary', label: 'Scary & Spooky', emoji: '👻' },
      { value: 'funny', label: 'Funny & Comedic', emoji: '🤡' },
      { value: 'pop-culture', label: 'Pop Culture', emoji: '🎬' },
      { value: 'classic', label: 'Classic Halloween', emoji: '🦇' },
      { value: 'creative', label: 'Creative & Unique', emoji: '🎨' },
      { value: 'sexy', label: 'Glamorous & Sexy', emoji: '💃' }
    ]
  },
  {
    id: 'budget',
    question: "What's your budget?",
    type: 'single',
    options: [
      { value: 'low', label: 'Under $30', emoji: '💵' },
      { value: 'medium', label: '$30 - $75', emoji: '💰' },
      { value: 'high', label: '$75 - $150', emoji: '💎' },
      { value: 'unlimited', label: '$150+', emoji: '🤑' }
    ]
  },
  {
    id: 'approach',
    question: "How do you want to get your costume?",
    type: 'single',
    options: [
      { value: 'buy', label: 'Buy ready-made', emoji: '🛍️' },
      { value: 'diy', label: 'DIY it yourself', emoji: '✂️' },
      { value: 'hybrid', label: 'Mix of both', emoji: '🎨' }
    ]
  },
  {
    id: 'interests',
    question: "What are you into? (Select all that apply)",
    type: 'enhanced-interests',
    options: []
  },
  {
    id: 'past',
    question: "Any costumes you've loved or want to avoid?",
    type: 'text',
    placeholder: "e.g., 'Last year I was a witch and loved it' or 'No masks please'",
    skippable: true,
    skipLabel: "Skip this question"
  }
];
