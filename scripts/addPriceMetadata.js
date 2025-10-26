/**
 * Script to add price metadata to costume database
 * Categorizes costumes by complexity and adds realistic price ranges
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Complexity categories with pricing
const COMPLEXITY_DATA = {
  simple: {
    pricing: {
      buy: { min: 20, max: 50 },
      diy: { min: 10, max: 30 }
    },
    difficulty: { buy: "Easy", diy: "Easy" },
    timeHours: { buy: { min: 0.5, max: 1 }, diy: { min: 2, max: 4 } }
  },
  medium: {
    pricing: {
      buy: { min: 35, max: 85 },
      diy: { min: 20, max: 55 }
    },
    difficulty: { buy: "Easy", diy: "Medium" },
    timeHours: { buy: { min: 1, max: 2 }, diy: { min: 4, max: 8 } }
  },
  complex: {
    pricing: {
      buy: { min: 70, max: 200 },
      diy: { min: 40, max: 120 }
    },
    difficulty: { buy: "Medium", diy: "Hard" },
    timeHours: { buy: { min: 2, max: 4 }, diy: { min: 8, max: 20 } }
  }
};

// Categorization logic based on tags
function categorizeByComplexity(costume) {
  const tags = costume.tags || [];
  const name = costume.name.toLowerCase();

  // Complex: armor, helmets, prosthetics, heavy makeup, electronics
  const complexIndicators = [
    'armor', 'helmet', 'tech', 'mechanical', 'robot', 'cyborg',
    'mandalorian', 'iron-man', 'spartan', 'knight', 'samurai',
    'monster', 'creature', 'alien', 'prosthetic', 'transforming'
  ];

  // Medium: makeup, crafting, multiple pieces, wigs
  const mediumIndicators = [
    'makeup', 'wig', 'mask', 'cape', 'weapon', 'wings',
    'accessories', 'crafting', 'sewing', 'paint', 'detailed'
  ];

  // Check for complex
  for (const indicator of complexIndicators) {
    if (tags.some(tag => tag.includes(indicator)) || name.includes(indicator)) {
      return 'complex';
    }
  }

  // Check for medium
  for (const indicator of mediumIndicators) {
    if (tags.some(tag => tag.includes(indicator)) || name.includes(indicator)) {
      return 'medium';
    }
  }

  // Default to simple
  return 'simple';
}

// Add metadata to costume
function addMetadata(costume) {
  const complexity = categorizeByComplexity(costume);
  const data = COMPLEXITY_DATA[complexity];

  return {
    ...costume,
    pricing: data.pricing,
    difficulty: data.difficulty,
    timeHours: data.timeHours,
    complexity: complexity
  };
}

// Main function
async function main() {
  try {
    const dbPath = path.join(__dirname, '../src/data/costumeDatabase.ts');

    // Read the file
    let content = fs.readFileSync(dbPath, 'utf-8');

    // Extract the array content
    const arrayMatch = content.match(/export const costumeDatabase = \[([\s\S]*)\];/);
    if (!arrayMatch) {
      throw new Error('Could not parse costume database');
    }

    // Parse costumes (using eval is safe here since we control the input)
    const costumesCode = `[${arrayMatch[1]}]`;
    const costumes = eval(costumesCode);

    console.log(`Found ${costumes.length} costumes`);

    // Add metadata to each costume
    const updatedCostumes = costumes.map((costume, idx) => {
      const updated = addMetadata(costume);
      if ((idx + 1) % 50 === 0) {
        console.log(`Processed ${idx + 1}/${costumes.length} costumes...`);
      }
      return updated;
    });

    // Count by complexity
    const complexityCount = {
      simple: updatedCostumes.filter(c => c.complexity === 'simple').length,
      medium: updatedCostumes.filter(c => c.complexity === 'medium').length,
      complex: updatedCostumes.filter(c => c.complexity === 'complex').length
    };

    console.log('\nComplexity Distribution:');
    console.log(`Simple: ${complexityCount.simple}`);
    console.log(`Medium: ${complexityCount.medium}`);
    console.log(`Complex: ${complexityCount.complex}`);

    // Generate new file content
    const header = `// SpookFit Costume Database - Enhanced with Price Metadata
// Pricing, difficulty, and time data added for accurate recommendations

export interface CostumePricing {
  buy: { min: number; max: number };
  diy: { min: number; max: number };
}

export interface CostumeDifficulty {
  buy: "Easy" | "Medium" | "Hard";
  diy: "Easy" | "Medium" | "Hard";
}

export interface CostumeTimeHours {
  buy: { min: number; max: number };
  diy: { min: number; max: number };
}

export interface Costume {
  name: string;
  source: string;
  tags: string[];
  genders: string[];
  vibes: string[];
  interests: string[];
  pricing: CostumePricing;
  difficulty: CostumeDifficulty;
  timeHours: CostumeTimeHours;
  complexity: "simple" | "medium" | "complex";
}

export const costumeDatabase: Costume[] = `;

    const costumesStr = JSON.stringify(updatedCostumes, null, 2);
    const footer = `;\n\nexport default costumeDatabase;\n`;

    const newContent = header + costumesStr + footer;

    // Write updated file
    fs.writeFileSync(dbPath, newContent, 'utf-8');

    console.log(`\n✅ Successfully updated ${costumes.length} costumes with price metadata!`);
    console.log(`📝 File saved to: ${dbPath}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
