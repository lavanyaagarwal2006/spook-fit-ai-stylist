// SpookFit Costume Database - Enhanced with Price Metadata
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

export const costumeDatabase: Costume[] = [
  {
    "name": "Miles Morales Spider-Man",
    "source": "Into the Spider-Verse",
    "tags": [
      "marvel",
      "superhero",
      "spiderman",
      "animation",
      "street-style",
      "action",
      "teenager",
      "black-suit"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "cool"
    ],
    "interests": [
      "movies",
      "comics",
      "animation",
      "superheroes"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Iron Man",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "tech",
      "tony-stark",
      "armor",
      "genius",
      "billionaire"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "technology",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Black Widow",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "spy",
      "assassin",
      "badass",
      "tactical"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "sexy",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "action",
      "superheroes",
      "spy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Doctor Strange",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "sorcerer",
      "magic",
      "mystic",
      "cape",
      "wizard"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "fantasy",
      "magic",
      "superheroes"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Thor",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "norse",
      "god",
      "hammer",
      "viking",
      "mythology"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "mythology",
      "superheroes",
      "norse"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Captain America",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "soldier",
      "shield",
      "patriotic",
      "hero"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "history"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Scarlet Witch",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "magic",
      "witch",
      "powerful",
      "chaos-magic"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "scary",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "magic",
      "superheroes"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Loki",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "villain",
      "antihero",
      "trickster",
      "norse",
      "god",
      "mischief",
      "horns"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "villains",
      "mythology",
      "antiheroes"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Deadpool",
    "source": "Marvel",
    "tags": [
      "marvel",
      "antihero",
      "mercenary",
      "funny",
      "fourth-wall",
      "red-suit",
      "katanas"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "comics",
      "comedy",
      "action",
      "antiheroes"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "The Hulk",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "green",
      "strong",
      "monster",
      "scientist"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "scary"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "The Joker (Heath Ledger)",
    "source": "The Dark Knight",
    "tags": [
      "dc",
      "villain",
      "batman",
      "clown",
      "chaos",
      "purple-suit",
      "psycho",
      "iconic"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "villains",
      "dark"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Harley Quinn",
    "source": "Suicide Squad / DC",
    "tags": [
      "dc",
      "villain",
      "antihero",
      "batman",
      "clown",
      "baseball-bat",
      "pigtails",
      "chaotic"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "sexy",
      "funny"
    ],
    "interests": [
      "movies",
      "comics",
      "villains",
      "antiheroes"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Batman",
    "source": "DC / The Dark Knight",
    "tags": [
      "dc",
      "superhero",
      "vigilante",
      "dark",
      "bat",
      "gotham",
      "detective",
      "rich"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "pop-culture",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "detective"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Wonder Woman",
    "source": "DC / Justice League",
    "tags": [
      "dc",
      "superhero",
      "amazonian",
      "warrior",
      "lasso",
      "tiara",
      "goddess",
      "powerful"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "sexy",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "mythology"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Superman",
    "source": "DC",
    "tags": [
      "dc",
      "superhero",
      "alien",
      "cape",
      "kryptonian",
      "clark-kent",
      "hero",
      "flying"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "classic"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Catwoman",
    "source": "DC / Batman",
    "tags": [
      "dc",
      "antihero",
      "villain",
      "batman",
      "cat",
      "thief",
      "leather",
      "seductive"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "sexy",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "comics",
      "antiheroes",
      "batman"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "The Flash",
    "source": "DC / Justice League",
    "tags": [
      "dc",
      "superhero",
      "speedster",
      "lightning",
      "red-suit",
      "fast",
      "science"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ghostface",
    "source": "Scream",
    "tags": [
      "horror",
      "slasher",
      "mask",
      "killer",
      "scary",
      "halloween",
      "knife"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "horror",
      "thriller"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Wednesday Addams",
    "source": "Wednesday / Addams Family",
    "tags": [
      "goth",
      "dark",
      "braids",
      "deadpan",
      "creepy",
      "netflix",
      "macabre"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "tv",
      "movies",
      "goth",
      "dark-comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Michael Myers",
    "source": "Halloween",
    "tags": [
      "horror",
      "slasher",
      "mask",
      "killer",
      "halloween",
      "classic-horror",
      "silent"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "movies",
      "horror",
      "classic-horror"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Pennywise",
    "source": "IT",
    "tags": [
      "horror",
      "clown",
      "stephen-king",
      "scary-clown",
      "evil",
      "supernatural"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "horror",
      "stephen-king"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Freddy Krueger",
    "source": "A Nightmare on Elm Street",
    "tags": [
      "horror",
      "slasher",
      "dreams",
      "burned",
      "glove",
      "striped-sweater",
      "classic-horror"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "movies",
      "horror",
      "classic-horror"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Jason Voorhees",
    "source": "Friday the 13th",
    "tags": [
      "horror",
      "slasher",
      "hockey-mask",
      "machete",
      "camp",
      "killer",
      "classic-horror"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "movies",
      "horror",
      "classic-horror"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Chucky",
    "source": "Child's Play",
    "tags": [
      "horror",
      "doll",
      "killer-doll",
      "redhead",
      "possessed",
      "creepy"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "funny"
    ],
    "interests": [
      "movies",
      "horror"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Annabelle",
    "source": "The Conjuring / Annabelle",
    "tags": [
      "horror",
      "doll",
      "possessed",
      "demon",
      "creepy-doll",
      "vintage"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary"
    ],
    "interests": [
      "movies",
      "horror"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Morticia Addams",
    "source": "The Addams Family",
    "tags": [
      "goth",
      "elegant",
      "vampire-like",
      "dark",
      "sophisticated",
      "long-dress"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "scary",
      "sexy",
      "classic"
    ],
    "interests": [
      "movies",
      "tv",
      "goth",
      "vintage"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Vampire (Classic)",
    "source": "Universal Monsters / Dracula",
    "tags": [
      "vampire",
      "dracula",
      "gothic",
      "fangs",
      "cape",
      "undead",
      "classic-monster"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic",
      "sexy"
    ],
    "interests": [
      "horror",
      "classic-horror",
      "goth",
      "literature"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Zombie",
    "source": "The Walking Dead / Classic Horror",
    "tags": [
      "zombie",
      "undead",
      "walker",
      "apocalypse",
      "gore",
      "classic-monster"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "horror",
      "tv",
      "apocalypse"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Witch (Classic)",
    "source": "Classic Halloween / The Wizard of Oz",
    "tags": [
      "witch",
      "magic",
      "broom",
      "hat",
      "spell",
      "classic-halloween",
      "warlock"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "fantasy",
      "magic",
      "classic-halloween"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Mario",
    "source": "Super Mario Bros",
    "tags": [
      "nintendo",
      "plumber",
      "video-game",
      "red",
      "mustache",
      "iconic",
      "retro"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture",
      "classic"
    ],
    "interests": [
      "gaming",
      "retro",
      "nintendo"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Princess Peach",
    "source": "Super Mario Bros",
    "tags": [
      "nintendo",
      "princess",
      "video-game",
      "pink",
      "royal",
      "mario"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "classic",
      "sexy"
    ],
    "interests": [
      "gaming",
      "nintendo"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Luigi",
    "source": "Super Mario Bros",
    "tags": [
      "nintendo",
      "plumber",
      "video-game",
      "green",
      "mario",
      "underdog"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "gaming",
      "nintendo"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Link",
    "source": "The Legend of Zelda",
    "tags": [
      "nintendo",
      "zelda",
      "elf",
      "hero",
      "sword",
      "adventure",
      "fantasy",
      "green"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "gaming",
      "fantasy",
      "adventure",
      "nintendo"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Zelda",
    "source": "The Legend of Zelda",
    "tags": [
      "nintendo",
      "princess",
      "magic",
      "hero",
      "wisdom",
      "fantasy",
      "royal"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "gaming",
      "fantasy",
      "nintendo"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Lara Croft",
    "source": "Tomb Raider",
    "tags": [
      "video-game",
      "adventurer",
      "archaeologist",
      "dual-pistols",
      "explorer",
      "badass"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "sexy",
      "creative"
    ],
    "interests": [
      "gaming",
      "action",
      "adventure"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Sonic the Hedgehog",
    "source": "Sonic",
    "tags": [
      "sega",
      "hedgehog",
      "video-game",
      "blue",
      "fast",
      "retro",
      "rings"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "gaming",
      "retro"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Pikachu",
    "source": "Pokémon",
    "tags": [
      "pokemon",
      "electric",
      "yellow",
      "cute",
      "anime",
      "nintendo",
      "mascot"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture",
      "creative"
    ],
    "interests": [
      "gaming",
      "anime",
      "pokemon"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Pac-Man",
    "source": "Pac-Man",
    "tags": [
      "retro",
      "arcade",
      "yellow",
      "video-game",
      "classic-gaming",
      "iconic"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture",
      "classic"
    ],
    "interests": [
      "gaming",
      "retro"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Master Chief",
    "source": "Halo",
    "tags": [
      "xbox",
      "spartan",
      "armor",
      "sci-fi",
      "shooter",
      "helmet",
      "soldier"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "gaming",
      "sci-fi",
      "shooter"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Goku",
    "source": "Dragon Ball Z",
    "tags": [
      "anime",
      "saiyan",
      "martial-arts",
      "super-saiyan",
      "orange-gi",
      "powerful"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "action"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Naruto Uzumaki",
    "source": "Naruto",
    "tags": [
      "anime",
      "ninja",
      "hokage",
      "orange",
      "headband",
      "shinobi"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "ninja"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Sailor Moon",
    "source": "Sailor Moon",
    "tags": [
      "anime",
      "magical-girl",
      "sailor",
      "transformation",
      "moon",
      "warrior"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "magical-girl"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ash Ketchum",
    "source": "Pokémon",
    "tags": [
      "anime",
      "pokemon",
      "trainer",
      "cap",
      "pikachu",
      "adventure"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "anime",
      "pokemon",
      "adventure"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Eren Yeager",
    "source": "Attack on Titan",
    "tags": [
      "anime",
      "titan",
      "scout",
      "survey-corps",
      "dark",
      "action"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "dark",
      "action"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Mikasa Ackerman",
    "source": "Attack on Titan",
    "tags": [
      "anime",
      "titan",
      "scout",
      "survey-corps",
      "badass",
      "scarf"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "action"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Luffy",
    "source": "One Piece",
    "tags": [
      "anime",
      "pirate",
      "straw-hat",
      "adventure",
      "rubber",
      "shonen"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "pirate",
      "adventure"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "L",
    "source": "Death Note",
    "tags": [
      "anime",
      "detective",
      "genius",
      "dark",
      "psychological",
      "sweet-tooth"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "anime",
      "manga",
      "detective",
      "psychological"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Eleven",
    "source": "Stranger Things",
    "tags": [
      "netflix",
      "80s",
      "telekinesis",
      "pink-dress",
      "eggo-waffles",
      "psychic"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "tv",
      "sci-fi",
      "80s",
      "netflix"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Walter White / Heisenberg",
    "source": "Breaking Bad",
    "tags": [
      "tv",
      "meth",
      "hazmat-suit",
      "teacher",
      "criminal",
      "yellow-suit",
      "hat"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "tv",
      "crime",
      "drama"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Daenerys Targaryen",
    "source": "Game of Thrones",
    "tags": [
      "tv",
      "fantasy",
      "dragon",
      "queen",
      "silver-hair",
      "medieval",
      "khaleesi"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "sexy"
    ],
    "interests": [
      "tv",
      "fantasy",
      "medieval"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Jon Snow",
    "source": "Game of Thrones",
    "tags": [
      "tv",
      "fantasy",
      "nights-watch",
      "warrior",
      "medieval",
      "fur",
      "sword"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "tv",
      "fantasy",
      "medieval"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "The Mandalorian",
    "source": "Star Wars / The Mandalorian",
    "tags": [
      "star-wars",
      "bounty-hunter",
      "armor",
      "helmet",
      "baby-yoda",
      "sci-fi"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "tv",
      "movies",
      "star-wars",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Princess Leia",
    "source": "Star Wars",
    "tags": [
      "star-wars",
      "princess",
      "rebel",
      "space",
      "buns-hair",
      "iconic",
      "sci-fi"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "classic",
      "sexy"
    ],
    "interests": [
      "movies",
      "star-wars",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Darth Vader",
    "source": "Star Wars",
    "tags": [
      "star-wars",
      "villain",
      "sith",
      "dark-side",
      "mask",
      "cape",
      "iconic"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "pop-culture",
      "classic"
    ],
    "interests": [
      "movies",
      "star-wars",
      "sci-fi",
      "villains"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Indiana Jones",
    "source": "Indiana Jones",
    "tags": [
      "adventurer",
      "archaeologist",
      "whip",
      "fedora",
      "explorer",
      "action"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "movies",
      "adventure",
      "history"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Harry Potter",
    "source": "Harry Potter",
    "tags": [
      "wizard",
      "hogwarts",
      "gryffindor",
      "magic",
      "scar",
      "wand",
      "glasses"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "movies",
      "fantasy",
      "magic",
      "books"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Hermione Granger",
    "source": "Harry Potter",
    "tags": [
      "wizard",
      "hogwarts",
      "gryffindor",
      "magic",
      "smart",
      "wand",
      "bushy-hair"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "fantasy",
      "magic",
      "books"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Willy Wonka",
    "source": "Charlie and the Chocolate Factory",
    "tags": [
      "chocolate",
      "eccentric",
      "top-hat",
      "purple-suit",
      "candy",
      "whimsical"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "fantasy",
      "candy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "The Dude",
    "source": "The Big Lebowski",
    "tags": [
      "laid-back",
      "robe",
      "bowling",
      "slacker",
      "cult-classic",
      "sunglasses"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "movies",
      "cult-classic",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Forrest Gump",
    "source": "Forrest Gump",
    "tags": [
      "runner",
      "bench",
      "box-of-chocolates",
      "americana",
      "classic-movie"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "movies",
      "classic",
      "americana"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Elvis Presley",
    "source": "Music Legend",
    "tags": [
      "rock",
      "50s",
      "king",
      "jumpsuit",
      "pompadour",
      "legend",
      "musician"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "classic",
      "sexy"
    ],
    "interests": [
      "music",
      "rock",
      "vintage",
      "50s"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Freddie Mercury",
    "source": "Queen",
    "tags": [
      "rock",
      "queen",
      "performer",
      "mustache",
      "yellow-jacket",
      "legend",
      "musician"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "sexy"
    ],
    "interests": [
      "music",
      "rock",
      "lgbtq"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "David Bowie",
    "source": "Music Legend",
    "tags": [
      "rock",
      "glam",
      "ziggy-stardust",
      "androgynous",
      "artistic",
      "musician"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "pop-culture",
      "sexy"
    ],
    "interests": [
      "music",
      "rock",
      "art",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Madonna",
    "source": "Music Legend",
    "tags": [
      "pop",
      "80s",
      "cone-bra",
      "icon",
      "performer",
      "musician"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "sexy"
    ],
    "interests": [
      "music",
      "pop",
      "80s",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Michael Jackson",
    "source": "King of Pop",
    "tags": [
      "pop",
      "thriller",
      "moonwalk",
      "glove",
      "icon",
      "musician",
      "80s"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "classic"
    ],
    "interests": [
      "music",
      "pop",
      "dance",
      "80s"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Prince",
    "source": "Music Legend",
    "tags": [
      "pop",
      "rock",
      "purple",
      "flamboyant",
      "icon",
      "musician"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy",
      "pop-culture"
    ],
    "interests": [
      "music",
      "rock",
      "pop",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Tupac Shakur",
    "source": "Hip-Hop Legend",
    "tags": [
      "hip-hop",
      "rapper",
      "90s",
      "bandana",
      "thug-life",
      "legend",
      "west-coast"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "music",
      "hip-hop",
      "90s",
      "rap"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Billie Eilish",
    "source": "Pop Artist",
    "tags": [
      "pop",
      "alt-pop",
      "baggy-clothes",
      "neon",
      "gen-z",
      "musician",
      "modern"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "music",
      "pop",
      "alternative",
      "modern"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "BTS Member",
    "source": "K-Pop",
    "tags": [
      "kpop",
      "korean",
      "idol",
      "colorful",
      "fashion",
      "modern",
      "musician"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "music",
      "kpop",
      "korean",
      "dance"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "BLACKPINK Member",
    "source": "K-Pop",
    "tags": [
      "kpop",
      "korean",
      "idol",
      "fashion",
      "modern",
      "musician",
      "girl-group"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "sexy",
      "creative"
    ],
    "interests": [
      "music",
      "kpop",
      "korean",
      "dance",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Cleopatra",
    "source": "Ancient Egypt",
    "tags": [
      "egypt",
      "pharaoh",
      "queen",
      "ancient",
      "gold",
      "headdress",
      "historical"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "creative",
      "sexy",
      "classic"
    ],
    "interests": [
      "history",
      "egypt",
      "ancient",
      "royalty"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Roman Gladiator",
    "source": "Ancient Rome",
    "tags": [
      "rome",
      "warrior",
      "arena",
      "historical",
      "armor",
      "sword",
      "ancient"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "creative"
    ],
    "interests": [
      "history",
      "rome",
      "ancient",
      "warrior"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Viking Warrior",
    "source": "Norse History",
    "tags": [
      "viking",
      "norse",
      "warrior",
      "horns",
      "fur",
      "axe",
      "historical"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "creative"
    ],
    "interests": [
      "history",
      "norse",
      "viking",
      "mythology"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Pirate",
    "source": "Caribbean / Historical",
    "tags": [
      "pirate",
      "caribbean",
      "buccaneer",
      "sword",
      "ship",
      "sea",
      "adventure"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "classic"
    ],
    "interests": [
      "history",
      "adventure",
      "pirate",
      "sea"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Flapper",
    "source": "1920s",
    "tags": [
      "20s",
      "jazz",
      "gatsby",
      "beads",
      "fringe",
      "vintage",
      "dance"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "sexy",
      "creative",
      "classic"
    ],
    "interests": [
      "history",
      "vintage",
      "20s",
      "dance",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Greek God/Goddess",
    "source": "Greek Mythology",
    "tags": [
      "greece",
      "mythology",
      "god",
      "toga",
      "ancient",
      "olympus",
      "divine"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy"
    ],
    "interests": [
      "history",
      "mythology",
      "ancient",
      "greece"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Bob Ross",
    "source": "TV Painter",
    "tags": [
      "painter",
      "afro",
      "happy-trees",
      "wholesome",
      "70s",
      "pbs",
      "artist"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "art",
      "tv",
      "wholesome",
      "meme"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Where's Waldo",
    "source": "Book Character",
    "tags": [
      "striped-shirt",
      "glasses",
      "hidden",
      "book",
      "iconic",
      "nostalgia"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "books",
      "nostalgia",
      "meme"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Inflatable Dinosaur",
    "source": "Meme / Viral",
    "tags": [
      "dinosaur",
      "t-rex",
      "inflatable",
      "funny",
      "viral",
      "meme"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "meme",
      "viral",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Among Us Crewmate",
    "source": "Among Us Game",
    "tags": [
      "game",
      "imposter",
      "sus",
      "viral",
      "meme",
      "colorful"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "gaming",
      "meme",
      "viral"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Black Cat",
    "source": "Classic Halloween",
    "tags": [
      "cat",
      "animal",
      "black",
      "halloween",
      "feline",
      "classic",
      "witch-companion"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "classic",
      "creative"
    ],
    "interests": [
      "animals",
      "classic-halloween",
      "cats"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Werewolf",
    "source": "Classic Horror / Mythology",
    "tags": [
      "werewolf",
      "wolf",
      "monster",
      "full-moon",
      "fur",
      "transformation",
      "horror"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "horror",
      "animals",
      "mythology",
      "classic-horror"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Unicorn",
    "source": "Fantasy Creature",
    "tags": [
      "unicorn",
      "magical",
      "rainbow",
      "horn",
      "fantasy",
      "sparkle",
      "cute"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "funny"
    ],
    "interests": [
      "fantasy",
      "animals",
      "magic"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Dragon",
    "source": "Fantasy Creature",
    "tags": [
      "dragon",
      "fantasy",
      "wings",
      "fire",
      "scales",
      "mythical",
      "powerful"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "scary"
    ],
    "interests": [
      "fantasy",
      "mythology",
      "animals"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Dinosaur (T-Rex)",
    "source": "Prehistoric",
    "tags": [
      "dinosaur",
      "t-rex",
      "prehistoric",
      "jurassic",
      "extinct",
      "reptile"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "animals",
      "science",
      "prehistoric"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Shark",
    "source": "Ocean Animal",
    "tags": [
      "shark",
      "ocean",
      "predator",
      "jaws",
      "sea",
      "animal",
      "fish"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "scary"
    ],
    "interests": [
      "animals",
      "ocean",
      "nature"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Bee",
    "source": "Insect",
    "tags": [
      "bee",
      "insect",
      "yellow",
      "stripes",
      "pollinator",
      "buzz",
      "cute"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "animals",
      "nature",
      "cute"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Butterfly",
    "source": "Insect",
    "tags": [
      "butterfly",
      "insect",
      "wings",
      "colorful",
      "transformation",
      "nature",
      "beautiful"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy"
    ],
    "interests": [
      "animals",
      "nature",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Devil",
    "source": "Classic Halloween",
    "tags": [
      "devil",
      "demon",
      "satan",
      "horns",
      "tail",
      "pitchfork",
      "red",
      "evil"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "sexy",
      "classic"
    ],
    "interests": [
      "classic-halloween",
      "religious"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Angel",
    "source": "Religious / Classic",
    "tags": [
      "angel",
      "wings",
      "halo",
      "white",
      "heaven",
      "holy",
      "divine"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy",
      "classic"
    ],
    "interests": [
      "classic-halloween",
      "religious"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Skeleton",
    "source": "Classic Halloween",
    "tags": [
      "skeleton",
      "bones",
      "skull",
      "death",
      "classic-halloween",
      "spooky"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic",
      "funny"
    ],
    "interests": [
      "classic-halloween",
      "horror"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ghost",
    "source": "Classic Halloween",
    "tags": [
      "ghost",
      "spirit",
      "sheet",
      "boo",
      "haunted",
      "classic-halloween",
      "spooky"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic",
      "funny"
    ],
    "interests": [
      "classic-halloween",
      "horror"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Mummy",
    "source": "Classic Horror / Egypt",
    "tags": [
      "mummy",
      "egypt",
      "bandages",
      "wrapped",
      "undead",
      "classic-monster"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "horror",
      "egypt",
      "classic-halloween"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Frankenstein's Monster",
    "source": "Classic Horror",
    "tags": [
      "frankenstein",
      "monster",
      "green",
      "bolts",
      "stitches",
      "classic-monster"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "horror",
      "classic-horror",
      "literature"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Grim Reaper",
    "source": "Classic Horror / Mythology",
    "tags": [
      "grim-reaper",
      "death",
      "scythe",
      "black-robe",
      "skeleton",
      "dark"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "classic"
    ],
    "interests": [
      "horror",
      "mythology",
      "classic-halloween"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Doctor / Surgeon",
    "source": "Medical Professional",
    "tags": [
      "doctor",
      "surgeon",
      "medical",
      "scrubs",
      "stethoscope",
      "hospital"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative"
    ],
    "interests": [
      "medicine",
      "science",
      "healthcare"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Nurse",
    "source": "Medical Professional",
    "tags": [
      "nurse",
      "medical",
      "scrubs",
      "healthcare",
      "hospital",
      "caregiver"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy"
    ],
    "interests": [
      "medicine",
      "healthcare"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Police Officer",
    "source": "Law Enforcement",
    "tags": [
      "police",
      "cop",
      "uniform",
      "badge",
      "law",
      "authority"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative"
    ],
    "interests": [
      "law",
      "authority"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Firefighter",
    "source": "First Responder",
    "tags": [
      "firefighter",
      "hero",
      "uniform",
      "helmet",
      "hose",
      "brave"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative",
      "sexy"
    ],
    "interests": [
      "heroes",
      "emergency"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Construction Worker",
    "source": "Blue Collar",
    "tags": [
      "construction",
      "hard-hat",
      "tool-belt",
      "vest",
      "builder",
      "worker"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "labor",
      "building"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Chef",
    "source": "Culinary",
    "tags": [
      "chef",
      "cook",
      "hat",
      "apron",
      "culinary",
      "food",
      "kitchen"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative"
    ],
    "interests": [
      "cooking",
      "food",
      "culinary"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Athlete / Sports Player",
    "source": "Sports",
    "tags": [
      "athlete",
      "sports",
      "jersey",
      "football",
      "basketball",
      "soccer",
      "player"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "creative"
    ],
    "interests": [
      "sports",
      "football",
      "basketball",
      "athletic"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Cheerleader",
    "source": "Sports",
    "tags": [
      "cheerleader",
      "pom-poms",
      "uniform",
      "spirit",
      "sports",
      "dance"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "sexy",
      "funny"
    ],
    "interests": [
      "sports",
      "dance",
      "cheer"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "SpongeBob SquarePants",
    "source": "Nickelodeon",
    "tags": [
      "spongebob",
      "cartoon",
      "nickelodeon",
      "yellow",
      "square",
      "krabby-patty",
      "kid-show"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "cartoons",
      "nostalgia",
      "nickelodeon"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Patrick Star",
    "source": "SpongeBob SquarePants",
    "tags": [
      "patrick",
      "spongebob",
      "starfish",
      "pink",
      "cartoon",
      "nickelodeon"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "cartoons",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Scooby-Doo",
    "source": "Scooby-Doo",
    "tags": [
      "scooby-doo",
      "dog",
      "mystery",
      "cartoon",
      "detective",
      "nostalgia"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "cartoons",
      "mystery",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Shaggy",
    "source": "Scooby-Doo",
    "tags": [
      "shaggy",
      "scooby-doo",
      "hippie",
      "green-shirt",
      "cartoon",
      "stoner"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "cartoons",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Fred Flintstone",
    "source": "The Flintstones",
    "tags": [
      "flintstones",
      "caveman",
      "prehistoric",
      "cartoon",
      "orange",
      "yabba-dabba-doo"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "classic"
    ],
    "interests": [
      "cartoons",
      "nostalgia",
      "vintage"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Bugs Bunny",
    "source": "Looney Tunes",
    "tags": [
      "bugs-bunny",
      "rabbit",
      "carrot",
      "cartoon",
      "looney-tunes",
      "classic"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "classic"
    ],
    "interests": [
      "cartoons",
      "nostalgia",
      "vintage"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Mickey Mouse",
    "source": "Disney",
    "tags": [
      "mickey",
      "mouse",
      "disney",
      "cartoon",
      "icon",
      "classic",
      "ears"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "classic"
    ],
    "interests": [
      "cartoons",
      "disney",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Minnie Mouse",
    "source": "Disney",
    "tags": [
      "minnie",
      "mouse",
      "disney",
      "cartoon",
      "polka-dots",
      "bow",
      "classic"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "funny",
      "creative",
      "sexy"
    ],
    "interests": [
      "cartoons",
      "disney",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Elsa",
    "source": "Frozen",
    "tags": [
      "frozen",
      "disney",
      "princess",
      "ice",
      "queen",
      "let-it-go",
      "blue-dress"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "disney",
      "princess"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Anna",
    "source": "Frozen",
    "tags": [
      "frozen",
      "disney",
      "princess",
      "sister",
      "braids",
      "adventurous"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "disney",
      "princess"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Buzz Lightyear",
    "source": "Toy Story",
    "tags": [
      "toy-story",
      "pixar",
      "space-ranger",
      "astronaut",
      "to-infinity",
      "purple"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "pixar",
      "space",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Woody",
    "source": "Toy Story",
    "tags": [
      "toy-story",
      "pixar",
      "cowboy",
      "sheriff",
      "western",
      "hat"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "movies",
      "pixar",
      "western",
      "nostalgia"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Belle",
    "source": "Beauty and the Beast",
    "tags": [
      "beauty-beast",
      "disney",
      "princess",
      "yellow-dress",
      "books",
      "rose"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "creative",
      "sexy"
    ],
    "interests": [
      "movies",
      "disney",
      "princess",
      "books"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ariel",
    "source": "The Little Mermaid",
    "tags": [
      "little-mermaid",
      "disney",
      "princess",
      "mermaid",
      "red-hair",
      "ocean"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "sexy"
    ],
    "interests": [
      "movies",
      "disney",
      "princess",
      "ocean"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Moana",
    "source": "Moana",
    "tags": [
      "moana",
      "disney",
      "princess",
      "ocean",
      "polynesian",
      "wayfinder",
      "adventurer"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "disney",
      "princess",
      "ocean",
      "adventure"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Maui",
    "source": "Moana",
    "tags": [
      "maui",
      "moana",
      "disney",
      "demigod",
      "polynesian",
      "tattoos",
      "strong"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "disney",
      "mythology"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Tinker Bell",
    "source": "Peter Pan / Disney Fairies",
    "tags": [
      "tinkerbell",
      "fairy",
      "disney",
      "peter-pan",
      "pixie",
      "green-dress",
      "wings"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "creative",
      "sexy"
    ],
    "interests": [
      "movies",
      "disney",
      "fantasy"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Cruella de Vil",
    "source": "101 Dalmatians",
    "tags": [
      "cruella",
      "disney",
      "villain",
      "dalmatians",
      "fashion",
      "black-white",
      "fur"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "creative",
      "sexy",
      "scary"
    ],
    "interests": [
      "movies",
      "disney",
      "villains",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Maleficent",
    "source": "Sleeping Beauty",
    "tags": [
      "maleficent",
      "disney",
      "villain",
      "fairy",
      "horns",
      "dark",
      "powerful"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "scary",
      "creative",
      "sexy"
    ],
    "interests": [
      "movies",
      "disney",
      "villains",
      "fantasy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Baby Yoda (Grogu)",
    "source": "The Mandalorian",
    "tags": [
      "baby-yoda",
      "grogu",
      "star-wars",
      "cute",
      "meme",
      "viral",
      "mandalorian"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture",
      "creative"
    ],
    "interests": [
      "tv",
      "star-wars",
      "meme",
      "cute"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Karen (Meme)",
    "source": "Internet Meme",
    "tags": [
      "karen",
      "meme",
      "manager",
      "entitled",
      "blonde-bob",
      "viral",
      "internet"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "meme",
      "internet",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Aquaman",
    "source": "DC / Justice League",
    "tags": [
      "dc",
      "superhero",
      "ocean",
      "trident",
      "atlantis",
      "scales",
      "justice-league"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "ocean"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Green Lantern",
    "source": "DC / Justice League",
    "tags": [
      "dc",
      "superhero",
      "ring",
      "green",
      "willpower",
      "justice-league"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ant-Man",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "shrinking",
      "ants",
      "heist",
      "size"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "funny"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "The Wasp",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "shrinking",
      "wings",
      "wasp",
      "flying"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Black Panther",
    "source": "Marvel MCU",
    "tags": [
      "marvel",
      "superhero",
      "avengers",
      "wakanda",
      "king",
      "vibranium",
      "african"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "african-culture"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Shuri",
    "source": "Black Panther / Marvel",
    "tags": [
      "marvel",
      "superhero",
      "wakanda",
      "tech-genius",
      "princess",
      "scientist"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "technology",
      "superheroes"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Gamora",
    "source": "Guardians of the Galaxy / Marvel",
    "tags": [
      "marvel",
      "guardians",
      "alien",
      "assassin",
      "green",
      "badass",
      "space"
    ],
    "genders": [
      "female",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 70,
        "max": 200
      },
      "diy": {
        "min": 40,
        "max": 120
      }
    },
    "difficulty": {
      "buy": "Medium",
      "diy": "Hard"
    },
    "timeHours": {
      "buy": {
        "min": 2,
        "max": 4
      },
      "diy": {
        "min": 8,
        "max": 20
      }
    },
    "complexity": "complex"
  },
  {
    "name": "Star-Lord",
    "source": "Guardians of the Galaxy / Marvel",
    "tags": [
      "marvel",
      "guardians",
      "space",
      "outlaw",
      "music",
      "walkman",
      "leather-jacket"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture",
      "creative"
    ],
    "interests": [
      "movies",
      "comics",
      "superheroes",
      "music",
      "sci-fi"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Hot Dog",
    "source": "Food Costume",
    "tags": [
      "food",
      "hot-dog",
      "funny",
      "sausage",
      "bun",
      "condiments"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Pizza Slice",
    "source": "Food Costume",
    "tags": [
      "food",
      "pizza",
      "funny",
      "cheese",
      "pepperoni",
      "slice"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Avocado",
    "source": "Food Costume",
    "tags": [
      "food",
      "avocado",
      "funny",
      "millennial",
      "hipster",
      "healthy",
      "green"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "creative"
    ],
    "interests": [
      "food",
      "comedy",
      "millennial"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Taco",
    "source": "Food Costume",
    "tags": [
      "food",
      "taco",
      "funny",
      "mexican",
      "shell",
      "meat"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "comedy",
      "mexican"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Banana",
    "source": "Food Costume",
    "tags": [
      "food",
      "banana",
      "funny",
      "fruit",
      "yellow",
      "peel"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ketchup",
    "source": "Couples Costume",
    "tags": [
      "condiment",
      "ketchup",
      "red",
      "couples",
      "food",
      "funny"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "couples"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Mustard",
    "source": "Couples Costume",
    "tags": [
      "condiment",
      "mustard",
      "yellow",
      "couples",
      "food",
      "funny"
    ],
    "genders": [
      "male",
      "female",
      "non-binary"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "food",
      "couples"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Plug",
    "source": "Couples Costume",
    "tags": [
      "electrical",
      "plug",
      "couples",
      "funny",
      "socket",
      "connection"
    ],
    "genders": [
      "male"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "couples",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Socket",
    "source": "Couples Costume",
    "tags": [
      "electrical",
      "socket",
      "couples",
      "funny",
      "plug",
      "connection"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "funny"
    ],
    "interests": [
      "couples",
      "comedy"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Rachel Green",
    "source": "Friends",
    "tags": [
      "friends",
      "tv",
      "90s",
      "fashion",
      "waitress",
      "central-perk",
      "sitcom"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "tv",
      "90s",
      "sitcom",
      "fashion"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ross Geller",
    "source": "Friends",
    "tags": [
      "friends",
      "tv",
      "90s",
      "dinosaur",
      "paleontologist",
      "we-were-on-a-break",
      "sitcom"
    ],
    "genders": [
      "male"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "tv",
      "90s",
      "sitcom"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Dwight Schrute",
    "source": "The Office",
    "tags": [
      "office",
      "tv",
      "salesman",
      "beets",
      "assistant-regional-manager",
      "comedy"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "tv",
      "comedy",
      "office"
    ],
    "pricing": {
      "buy": {
        "min": 35,
        "max": 85
      },
      "diy": {
        "min": 20,
        "max": 55
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Medium"
    },
    "timeHours": {
      "buy": {
        "min": 1,
        "max": 2
      },
      "diy": {
        "min": 4,
        "max": 8
      }
    },
    "complexity": "medium"
  },
  {
    "name": "Michael Scott",
    "source": "The Office",
    "tags": [
      "office",
      "tv",
      "boss",
      "world-best-boss",
      "comedy",
      "regional-manager"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "tv",
      "comedy",
      "office"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Ted Lasso",
    "source": "Ted Lasso",
    "tags": [
      "ted-lasso",
      "tv",
      "coach",
      "soccer",
      "positive",
      "mustache",
      "wholesome"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "funny",
      "pop-culture"
    ],
    "interests": [
      "tv",
      "sports",
      "soccer",
      "wholesome"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Michael Jordan",
    "source": "NBA Legend",
    "tags": [
      "basketball",
      "nba",
      "jordan",
      "23",
      "bulls",
      "athlete",
      "legend"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "sports",
      "basketball",
      "athlete"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Serena Williams",
    "source": "Tennis Legend",
    "tags": [
      "tennis",
      "athlete",
      "champion",
      "sports",
      "powerful",
      "legend"
    ],
    "genders": [
      "female"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "sports",
      "tennis",
      "athlete"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Cristiano Ronaldo",
    "source": "Soccer Legend",
    "tags": [
      "soccer",
      "football",
      "ronaldo",
      "portugal",
      "athlete",
      "cr7",
      "legend"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "sports",
      "soccer",
      "football",
      "athlete"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  },
  {
    "name": "Messi",
    "source": "Soccer Legend",
    "tags": [
      "soccer",
      "football",
      "messi",
      "argentina",
      "athlete",
      "legend",
      "goat"
    ],
    "genders": [
      "male",
      "non-binary"
    ],
    "vibes": [
      "pop-culture"
    ],
    "interests": [
      "sports",
      "soccer",
      "football",
      "athlete"
    ],
    "pricing": {
      "buy": {
        "min": 20,
        "max": 50
      },
      "diy": {
        "min": 10,
        "max": 30
      }
    },
    "difficulty": {
      "buy": "Easy",
      "diy": "Easy"
    },
    "timeHours": {
      "buy": {
        "min": 0.5,
        "max": 1
      },
      "diy": {
        "min": 2,
        "max": 4
      }
    },
    "complexity": "simple"
  }
];

export default costumeDatabase;
