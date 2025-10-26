# 🎃 SpookFit - AI-Powered Halloween Costume Planner

[![Spookathon 2025](https://img.shields.io/badge/Spookathon-2025-orange)](https://spookathon.org)
[![AI Track](https://img.shields.io/badge/Track-AI-purple)](https://spookathon.org)
[![Daily Life](https://img.shields.io/badge/Track-Daily%20Life-green)](https://spookathon.org)

> **Personalized Halloween costume recommendations powered by AI**  
> Solving the annual costume planning struggle with intelligent, character-specific suggestions

##  Hackathon Information

- **Event:** Spookathon 2025 - OCC Ballroom
- **Dates:** October 25-26, 2025
- **Tracks:** Artificial Intelligence & Daily Life
- **Team:** October's Very Own

##  The Problem

Every Halloween, millions struggle with:
- Finding costume ideas that match their personality
- Understanding what costumes actually look like
- Deciding between buying vs. DIY
- Getting step-by-step guidance
- Finding options within budget
- Avoiding costumes they've done before

## ✨ The Solution

SpookFit uses AI to provide **personalized, character-specific Halloween costume recommendations** with detailed implementation guides. Unlike generic costume suggestion apps, SpookFit:

-  **Character-Specific:** Suggests actual characters (not "generic witch")
-  **AI-Powered:** Deep understanding of interests and preferences
-  **Visual References:** Direct links to Google Images for each costume
-  **Budget-Conscious:** Options for every price range
-  **Implementation Guides:** Detailed buy/DIY instructions
-  **Time-Aware:** Matches suggestions to available time

##  Key Features

### 1. Intelligent Onboarding
- 9-question quiz capturing style, budget, interests, and constraints
- Smooth, card-based UI with progress tracking
- Multi-select and text input for comprehensive profiling

### 2. AI Costume Generation
- Powered by Google Gemini 2.5 Flash via Lovable AI
- Generates 5 specific, recognizable characters per request
- Considers nuanced interests (Marvel fan → Iron Man, not generic superhero)
- Avoids repetition across multiple generations

### 3. Visual Reference Integration
- Each costume has a "View Reference Photos" button
- AI-optimized Google Images search queries
- Helps users visualize the exact costume look

### 4. Detailed Implementation Guides
**Buy Path:**
- 5-7 specific items with prices
- Where to buy recommendations
- Total cost calculation
- Character-specific shopping tips

**DIY Path:**
- Complete materials list
- 6-8 step-by-step instructions
- Tools required
- Character-specific DIY tips

### 5. Smart Features
- Save favorite costumes
- Generate more suggestions without retaking quiz
- Filter by saved costumes
- Responsive mobile-first design

##  Technical Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling with custom Halloween theme
- **Shadcn/ui** component library
- **React Query** for state management
- **Lucide React** for icons

### Backend
- **Supabase** for backend infrastructure
- **Edge Functions** for serverless AI integration
- **Lovable AI Gateway** for AI model access
  - Google Gemini 2.5 Flash
  - Structured JSON responses
  - Rate limiting & error handling

### AI Integration
Two main edge functions:
1. `generate-costumes` - Generates 20 personalized costume recommendations
2. `generate-guide` - Creates detailed buy/DIY implementation guides


## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd spookfit

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## How to Use

1. **Welcome Screen:** Click "Start Your Spooky Journey"
2. **Quiz:** Answer 9 questions about your preferences
3. **Results:** View 20 AI-generated costume recommendations
4. **Details:** Click "Get Guide" for implementation instructions
5. **Generate More:** Get 5 additional suggestions anytime

## Target Audience

- Halloween enthusiasts of all ages
- Last-minute costume seekers
- Budget-conscious shoppers
- DIY creators
- Indecisive costume planners
- Parents planning family costumes

## Future Enhancements

- Social sharing functionality
- Costume history tracking
- Group costume coordination
- Amazon affiliate integration
- Tutorial video links
- Community costume ratings
- Photo upload for style matching

## Contributing

This is a hackathon project, but feedback and suggestions are welcome!

## 📄 License

MIT License - feel free to use this code for your own projects

## Team

Dhruv Mantri, Lavanya Agarwal, Sara Khan


---

**Made with 🎃 for Spookathon 2025**

*Solving the Halloween costume crisis, one AI recommendation at a time.*
