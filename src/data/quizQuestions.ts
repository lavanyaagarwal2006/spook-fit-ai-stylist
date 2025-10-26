import { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
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
    id: 'time',
    question: "How much time do you have?",
    type: 'single',
    options: [
      { value: 'rushed', label: 'Last minute (1-2 days)', emoji: '⚡' },
      { value: 'moderate', label: 'About a week', emoji: '📅' },
      { value: 'plenty', label: 'Plenty (2+ weeks)', emoji: '🗓️' }
    ]
  },
  {
    id: 'group',
    question: "Who's dressing up?",
    type: 'single',
    options: [
      { value: 'solo', label: 'Just me', emoji: '🧍' },
      { value: 'couple', label: 'Me and a partner', emoji: '👫' },
      { value: 'group', label: 'Group/family', emoji: '👨‍👩‍👧‍👦' }
    ]
  },
  {
    id: 'interests',
    question: "What are you into? (Select all that apply)",
    type: 'multi-select',
    options: [
      { value: 'movies', label: 'Movies & TV', emoji: '🎬' },
      { value: 'gaming', label: 'Video Games', emoji: '🎮' },
      { value: 'anime', label: 'Anime & Manga', emoji: '🎌' },
      { value: 'history', label: 'History & Period', emoji: '🏛️' },
      { value: 'animals', label: 'Animals & Nature', emoji: '🦁' },
      { value: 'fantasy', label: 'Fantasy & Magic', emoji: '🧙' },
      { value: 'scifi', label: 'Sci-Fi & Space', emoji: '🚀' },
      { value: 'music', label: 'Music & Artists', emoji: '🎵' }
    ]
  },
  {
    id: 'specific_interests',
    question: "Tell us more about your specific interests",
    type: 'text',
    placeholder: "e.g., 'Marvel movies, hip-hop music, football' or 'K-pop, retro gaming, Attack on Titan'"
  },
  {
    id: 'general_interests',
    question: "What are your hobbies in general?",
    type: 'text',
    placeholder: "e.g., 'Football, technology, traveling, cooking, photography'"
  },
  {
    id: 'past',
    question: "Any costumes you've loved or want to avoid?",
    type: 'text',
    placeholder: "e.g., 'Last year I was a witch and loved it' or 'No masks please'"
  }
];
