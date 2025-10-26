// Maps each interest to relevant costume database quickTags
export const INTEREST_TAG_MAPPING: Record<string, string[]> = {
  // Movies & TV
  "star-wars": ["star-wars", "jedi", "sith", "sci-fi", "space", "darth-vader", "luke", "leia", "mandalorian"],
  "harry-potter": ["harry-potter", "wizard", "magic", "gryffindor", "slytherin", "hermione", "dumbledore"],
  "lord-of-rings": ["lotr", "fantasy", "medieval", "elf", "hobbit", "gandalf", "legolas", "aragorn"],
  "marvel-mcu": ["marvel", "superhero", "avengers", "iron-man", "spider-man", "captain-america", "thor"],
  "dc-universe": ["dc", "batman", "superman", "wonder-woman", "joker", "harley-quinn"],
  "stranger-things": ["stranger-things", "80s", "sci-fi", "demogorgon", "eleven"],
  "game-of-thrones": ["game-of-thrones", "fantasy", "medieval", "dragon", "jon-snow", "daenerys"],
  "breaking-bad": ["breaking-bad", "crime", "modern", "walter-white", "heisenberg"],
  "the-office": ["office", "comedy", "workplace", "jim", "dwight", "michael-scott"],
  "friends-sitcoms": ["90s", "sitcom", "comedy", "retro", "rachel", "monica", "chandler"],
  "80s-movies": ["80s", "retro", "nostalgia", "classic"],
  "90s-movies": ["90s", "retro", "nostalgia"],
  "disney-movies": ["disney", "animated", "princess", "frozen", "moana", "belle", "ariel"],
  "pixar": ["pixar", "animated", "toy-story", "woody", "buzz", "incredibles"],
  "studio-ghibli": ["ghibli", "anime", "japanese", "spirited-away", "totoro"],
  "horror-movies": ["horror", "scary", "monster", "slasher", "creepy", "scream", "jason", "freddy"],
  "rom-coms": ["romance", "comedy", "cute"],
  "action-movies": ["action", "badass", "tough"],
  "christopher-nolan": ["nolan", "batman", "inception", "interstellar"],
  "quentin-tarantino": ["tarantino", "cult", "pulp-fiction"],
  "wes-anderson": ["anderson", "quirky", "colorful"],
  "barbie-2023": ["barbie", "pink", "trendy", "margot-robbie"],
  "wednesday-addams": ["wednesday", "addams-family", "goth", "dark", "gothic"],
  "squid-game": ["squid-game", "korean", "tracksuit", "red-light-green-light"],
  "ted-lasso": ["ted-lasso", "soccer", "comedy"],
  "succession": ["succession", "business", "luxury"],
  "the-last-of-us": ["last-of-us", "zombie", "post-apocalyptic", "ellie", "joel"],
  "euphoria": ["euphoria", "gen-z", "glam", "edgy"],

  // Gaming
  "nintendo-games": ["nintendo", "mario", "luigi", "zelda", "pokemon"],
  "mario": ["mario", "luigi", "princess-peach", "bowser", "nintendo"],
  "zelda": ["zelda", "link", "princess-zelda", "nintendo", "fantasy"],
  "pokemon": ["pokemon", "pikachu", "ash", "trainer", "charizard", "squirtle"],
  "minecraft": ["minecraft", "steve", "creeper", "enderman", "blocky"],
  "fortnite": ["fortnite", "battle-royale", "gaming"],
  "roblox": ["roblox", "blocky", "gaming"],
  "among-us": ["among-us", "sus", "crewmate", "imposter"],
  "fall-guys": ["fall-guys", "bean", "cute"],
  "halo": ["halo", "master-chief", "spartan", "sci-fi"],
  "cod-military": ["call-of-duty", "military", "soldier", "tactical"],
  "final-fantasy": ["final-fantasy", "rpg", "fantasy", "cloud", "sephiroth"],
  "witcher-games": ["witcher", "geralt", "fantasy", "monster-hunter"],
  "assassins-creed": ["assassins-creed", "assassin", "historical", "ezio"],
  "god-of-war": ["god-of-war", "kratos", "norse", "viking"],
  "resident-evil": ["resident-evil", "zombie", "horror", "jill", "leon"],
  "silent-hill": ["silent-hill", "horror", "nurse", "pyramid-head"],
  "tomb-raider": ["tomb-raider", "lara-croft", "explorer"],
  "uncharted": ["uncharted", "nathan-drake", "explorer"],
  "street-fighter": ["street-fighter", "ryu", "ken", "chun-li", "fighting"],
  "mortal-kombat": ["mortal-kombat", "sub-zero", "scorpion", "ninja", "fighting"],
  "overwatch": ["overwatch", "tracer", "dva", "reaper", "mercy"],
  "league-of-legends": ["league-of-legends", "lol", "fantasy"],
  "valorant": ["valorant", "tactical", "fps"],
  "skyrim-elder-scrolls": ["skyrim", "dragonborn", "dragon", "fantasy"],
  "dark-souls-elden-ring": ["dark-souls", "elden-ring", "armor", "fantasy"],
  "world-of-warcraft": ["wow", "warcraft", "orc", "elf", "fantasy"],
  "genshin-impact": ["genshin", "anime", "fantasy"],
  "honkai-star-rail": ["honkai", "anime", "sci-fi"],
  "pac-man-arcade": ["pacman", "retro", "80s", "arcade"],
  "sonic-hedgehog": ["sonic", "tails", "knuckles", "sega"],
  "crash-spyro": ["crash-bandicoot", "spyro", "90s"],

  // Anime & Manga
  "dragon-ball": ["dragonball", "goku", "vegeta", "dbz", "saiyan"],
  "naruto": ["naruto", "ninja", "sasuke", "kakashi", "akatsuki"],
  "one-piece": ["one-piece", "luffy", "pirate", "zoro", "nami"],
  "bleach": ["bleach", "ichigo", "shinigami", "sword"],
  "my-hero-academia": ["my-hero-academia", "deku", "all-might", "bakugo"],
  "jujutsu-kaisen": ["jujutsu-kaisen", "gojo", "yuji"],
  "demon-slayer": ["demon-slayer", "tanjiro", "nezuko", "sword"],
  "one-punch-man": ["one-punch-man", "saitama", "genos"],
  "attack-on-titan": ["attack-on-titan", "eren", "mikasa", "titan"],
  "death-note": ["death-note", "light", "l", "ryuk"],
  "tokyo-ghoul": ["tokyo-ghoul", "kaneki", "mask"],
  "fullmetal-alchemist": ["fullmetal-alchemist", "edward", "alphonse"],
  "hunter-x-hunter": ["hunter-x-hunter", "gon", "killua"],
  "sword-art-online": ["sword-art-online", "kirito", "asuna"],
  "re-zero": ["re-zero", "subaru", "rem"],
  "overlord": ["overlord", "ainz", "skeleton"],
  "sailor-moon": ["sailor-moon", "usagi", "magical-girl"],
  "cardcaptor-sakura": ["cardcaptor-sakura", "sakura", "magical-girl"],
  "madoka-magica": ["madoka-magica", "magical-girl"],
  "spy-x-family": ["spy-x-family", "loid", "anya", "yor"],
  "chainsaw-man": ["chainsaw-man", "denji", "power"],
  "mob-psycho": ["mob-psycho", "mob", "reigen"],
  "k-pop-idols": ["kpop", "idol", "colorful"],
  "vocaloid-hatsune-miku": ["vocaloid", "hatsune-miku", "cyan", "anime"],

  // Music & Artists
  "taylor-swift": ["taylor-swift", "eras", "pop", "glitter", "sequins"],
  "ariana-grande": ["ariana-grande", "pop", "ponytail", "glam"],
  "billie-eilish": ["billie-eilish", "alt-pop", "oversized", "green"],
  "lady-gaga": ["lady-gaga", "pop", "avant-garde", "glam"],
  "beyonce": ["beyonce", "queen", "glam", "destiny"],
  "rihanna": ["rihanna", "pop", "fashion"],
  "dua-lipa": ["dua-lipa", "pop", "disco"],
  "elvis-presley": ["elvis", "rock", "50s", "jumpsuit"],
  "david-bowie": ["david-bowie", "ziggy-stardust", "glam-rock"],
  "prince": ["prince", "purple", "funk"],
  "freddie-mercury": ["freddie-mercury", "queen", "rock", "mustache"],
  "kiss-band": ["kiss", "rock", "makeup", "face-paint"],
  "tupac-biggie": ["tupac", "biggie", "hip-hop", "90s"],
  "eminem": ["eminem", "rap", "hoodie"],
  "travis-scott": ["travis-scott", "rap", "cactus"],
  "doja-cat": ["doja-cat", "pop", "cat"],
  "80s-pop-stars": ["80s", "pop", "neon", "retro"],
  "90s-grunge": ["90s", "grunge", "flannel", "nirvana"],
  "disco-70s": ["70s", "disco", "bell-bottoms", "afro"],
  "boy-bands": ["boy-band", "nsync", "backstreet-boys"],
  "emo-scene": ["emo", "scene", "punk", "black"],
  "country-western": ["country", "cowboy", "cowgirl", "western"],

  // History & Time Periods
  "ancient-egypt": ["egypt", "pharaoh", "cleopatra", "pyramid", "ancient"],
  "ancient-rome": ["rome", "gladiator", "toga", "caesar", "ancient"],
  "ancient-greece": ["greece", "toga", "sparta", "ancient"],
  "vikings": ["viking", "norse", "warrior", "raider"],
  "medieval-knights": ["medieval", "knight", "armor", "crusader"],
  "renaissance": ["renaissance", "shakespeare", "period"],
  "pirates": ["pirate", "buccaneer", "jack-sparrow", "caribbean"],
  "revolutionary-war": ["revolutionary", "colonial", "founding-father"],
  "victorian-era": ["victorian", "steampunk", "1800s"],
  "wild-west": ["western", "cowboy", "outlaw", "sheriff"],
  "roaring-20s": ["1920s", "flapper", "gatsby", "jazz"],
  "1940s-wwii": ["1940s", "wwii", "rosie-riveter", "soldier"],
  "1950s-retro": ["1950s", "rockabilly", "poodle-skirt", "greaser"],
  "1960s-hippie": ["1960s", "hippie", "flower-power", "peace"],
  "1970s-disco": ["1970s", "disco", "bell-bottoms", "groovy"],
  "1980s-nostalgia": ["1980s", "80s", "neon", "arcade"],
  "1990s-nostalgia": ["1990s", "90s", "grunge", "retro"],
  "y2k-2000s": ["2000s", "y2k", "metallic", "low-rise"],

  // Sports
  "football-nfl": ["football", "nfl", "quarterback", "jersey"],
  "basketball-nba": ["basketball", "nba", "jersey"],
  "baseball-mlb": ["baseball", "mlb", "pitcher"],
  "soccer-football": ["soccer", "football", "jersey"],
  "hockey": ["hockey", "nhl", "goalie"],
  "boxing-ufc": ["boxer", "ufc", "fighter"],
  "wrestling-wwe": ["wrestler", "wwe", "luchador"],
  "olympics": ["olympic", "athlete", "medal"],
  "cheerleading": ["cheerleader", "pom-pom"],
  "gymnastics": ["gymnast", "leotard"],
  "skateboarding": ["skater", "skateboard", "punk"],
  "surfing": ["surfer", "beach", "wave"],
  "tennis": ["tennis", "racket"],
  "golf": ["golfer", "polo"],

  // Humor & Internet Culture
  "puns-wordplay": ["pun", "clever", "funny"],
  "memes": ["meme", "internet", "viral"],
  "tiktok-trends": ["tiktok", "viral", "trendy"],
  "sarcastic-funny": ["sarcastic", "ironic", "funny"],
  "dad-jokes": ["dad-joke", "corny", "funny"],
  "parody": ["parody", "satire", "spoof"],
  "couples-funny": ["couple", "duo", "pair", "funny"],
  "food-costumes": ["food", "pizza", "taco", "burger", "funny"],
  "object-costumes": ["object", "inanimate", "funny"],
  "inflation-costumes": ["inflatable", "balloon", "funny"],
  "group-funny": ["group", "team", "funny", "coordinated"],
  "office-humor": ["office", "work", "employee", "funny"],
  "political-satire": ["political", "politician", "satire"],
  "awkward-funny": ["awkward", "cringe", "funny"],
  "anti-costume": ["lazy", "no-costume", "funny"],
  "florida-man": ["florida-man", "weird", "news", "funny"],

  // Classic Halloween
  "vampires": ["vampire", "dracula", "fangs", "gothic", "bloodsucker"],
  "werewolves": ["werewolf", "wolf", "lycanthrope"],
  "zombies": ["zombie", "undead", "walker", "apocalypse"],
  "ghosts": ["ghost", "spirit", "phantom", "spooky"],
  "witches": ["witch", "wizard", "broomstick", "magic", "pointy-hat"],
  "skeletons": ["skeleton", "bones", "skull"],
  "mummies": ["mummy", "egypt", "wrapped"],
  "frankenstein": ["frankenstein", "monster", "bolts"],
  "devils-demons": ["devil", "demon", "satan", "horns"],
  "angels-dark": ["angel", "dark-angel", "fallen"],
  "grim-reaper": ["grim-reaper", "death", "scythe"],
  "scarecrows": ["scarecrow", "hay", "creepy"],
  "clowns-scary": ["clown", "scary-clown", "pennywise", "it"],
  "dolls-creepy": ["doll", "creepy-doll", "porcelain", "annabelle"],
  "plague-doctor": ["plague-doctor", "bird-mask", "medieval"],
  "classic-monsters": ["universal-monsters", "classic-horror", "monster"],

  // Superheroes
  "batman": ["batman", "bruce-wayne", "dark-knight", "gotham"],
  "superman": ["superman", "clark-kent", "man-of-steel"],
  "wonder-woman": ["wonder-woman", "diana", "amazonian"],
  "joker": ["joker", "clown", "villain", "chaos"],
  "harley-quinn": ["harley-quinn", "villain", "jester"],
  "spider-man": ["spider-man", "spiderman", "peter-parker", "web"],
  "iron-man": ["iron-man", "tony-stark", "armor"],
  "captain-america": ["captain-america", "steve-rogers", "shield"],
  "thor": ["thor", "god", "hammer", "asgard"],
  "black-widow": ["black-widow", "natasha", "spy"],
  "deadpool": ["deadpool", "wade", "mercenary"],
  "wolverine-xmen": ["wolverine", "xmen", "logan", "claws"],
  "thanos": ["thanos", "villain", "purple", "gauntlet"],

  // Fantasy & Mythology
  "dragons": ["dragon", "fire", "fantasy", "mythical"],
  "unicorns": ["unicorn", "rainbow", "magic", "horn"],
  "fairies-fae": ["fairy", "fae", "wings", "magic"],
  "mermaids": ["mermaid", "ariel", "ocean", "tail"],
  "elves": ["elf", "fantasy", "pointed-ears"],
  "dwarves": ["dwarf", "fantasy", "beard"],
  "wizards-mages": ["wizard", "mage", "magic", "staff"],
  "greek-gods": ["greek", "zeus", "athena", "apollo", "mythology"],
  "norse-gods": ["norse", "odin", "loki", "mythology"],
  "egyptian-gods": ["egyptian", "ra", "anubis", "mythology"],
  "centaurs": ["centaur", "half-horse", "mythology"],
  "phoenix": ["phoenix", "fire", "bird", "mythical"],
  "griffins": ["griffin", "mythical", "eagle"],
  "medieval-fantasy": ["medieval", "fantasy", "knight", "castle"],

  // Sci-Fi & Space
  "astronauts": ["astronaut", "space", "nasa", "spacesuit"],
  "aliens": ["alien", "extraterrestrial", "et", "space"],
  "robots-androids": ["robot", "android", "cyborg", "mech"],
  "cyberpunk": ["cyberpunk", "neon", "futuristic", "tech"],
  "steampunk": ["steampunk", "victorian", "gears", "brass"],
  "space-opera": ["space-opera", "sci-fi", "galaxy"],
  "time-travelers": ["time-traveler", "doctor-who", "back-to-future"],
  "mad-scientist": ["mad-scientist", "lab-coat", "crazy-hair"],
  "post-apocalyptic": ["post-apocalyptic", "wasteland", "survivor"],
  "futuristic": ["futuristic", "sci-fi", "tech", "modern"],

  // Animals & Nature
  "cats-kittens": ["cat", "kitten", "feline", "meow"],
  "dogs-puppies": ["dog", "puppy", "canine", "woof"],
  "wild-cats": ["lion", "tiger", "leopard", "cheetah", "panther"],
  "bears": ["bear", "panda", "grizzly", "polar"],
  "wolves": ["wolf", "pack", "howl"],
  "birds": ["bird", "parrot", "owl", "eagle"],
  "bees-insects": ["bee", "insect", "bug", "butterfly"],
  "butterflies": ["butterfly", "monarch", "wings"],
  "dinosaurs": ["dinosaur", "t-rex", "triceratops", "prehistoric"],
  "sea-creatures": ["octopus", "shark", "fish", "jellyfish", "sea"],
  "farm-animals": ["cow", "pig", "chicken", "horse", "farm"],
  "endangered-animals": ["panda", "elephant", "rhino", "endangered"],
  "mythical-creatures": ["mythical", "creature", "fantasy"],
  "plants-flowers": ["flower", "plant", "rose", "sunflower"],

  // Professions
  "doctors-nurses": ["doctor", "nurse", "medical", "scrubs"],
  "police-detective": ["police", "cop", "detective", "officer"],
  "firefighters": ["firefighter", "fire", "hero"],
  "chefs-cooks": ["chef", "cook", "baker", "kitchen"],
  "pilots-flight-crew": ["pilot", "flight-attendant", "airline"],
  "construction": ["construction", "builder", "hard-hat"],
  "business-executive": ["business", "executive", "suit", "corporate"],
  "teachers-professors": ["teacher", "professor", "school"],
  "artists-painters": ["artist", "painter", "creative"],
  "musicians-rockstars": ["musician", "rockstar", "band", "guitar"],
  "lawyers-judges": ["lawyer", "judge", "attorney", "court"],
  "scientists-researchers": ["scientist", "researcher", "lab"],

  // Art & Culture
  "famous-paintings": ["art", "painting", "mona-lisa", "starry-night"],
  "renaissance-art": ["renaissance", "art", "period"],
  "pop-art": ["pop-art", "warhol", "colorful"],
  "street-art": ["street-art", "graffiti", "banksy"],
  "abstract-art": ["abstract", "art", "modern"],
  "masquerade": ["masquerade", "mask", "ball", "elegant"],
  "theater-broadway": ["theater", "broadway", "musical", "phantom"],
  "circus-carnival": ["circus", "carnival", "clown", "ringmaster"],
  "fashion-runway": ["fashion", "runway", "model", "haute-couture"],
  "cultural-traditional": ["cultural", "traditional", "ethnic", "heritage"]
};

// Helper function to get all tags from selected interests
export function getTagsFromInterests(selectedInterests: string[]): string[] {
  const allTags = new Set<string>();
  selectedInterests.forEach(interest => {
    const tags = INTEREST_TAG_MAPPING[interest] || [];
    tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags);
}

// Helper function to build a human-readable summary
export function buildInterestSummary(selectedInterests: string[], categories: any[]): string {
  const categorized: Record<string, string[]> = {};
  
  selectedInterests.forEach(interestValue => {
    for (const category of categories) {
      const interest = category.interests.find((i: any) => i.value === interestValue);
      if (interest) {
        if (!categorized[category.name]) {
          categorized[category.name] = [];
        }
        categorized[category.name].push(interest.label);
        break;
      }
    }
  });

  return Object.entries(categorized)
    .map(([category, interests]) => `${category}: ${interests.join(', ')}`)
    .join('\n');
}
