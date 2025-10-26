export interface Interest {
  value: string;
  label: string;
  icon: string;
}

export interface InterestCategory {
  id: string;
  name: string;
  icon: string;
  interests: Interest[];
}

export const INTEREST_CATEGORIES: InterestCategory[] = [
  {
    id: "movies-tv",
    name: "Movies & TV",
    icon: "🎬",
    interests: [
      { value: "star-wars", label: "Star Wars", icon: "⭐" },
      { value: "harry-potter", label: "Harry Potter", icon: "⚡" },
      { value: "lord-of-rings", label: "Lord of the Rings", icon: "💍" },
      { value: "marvel-mcu", label: "Marvel (MCU)", icon: "🦸" },
      { value: "dc-universe", label: "DC Comics", icon: "🦇" },
      { value: "stranger-things", label: "Stranger Things", icon: "🔦" },
      { value: "game-of-thrones", label: "Game of Thrones", icon: "👑" },
      { value: "breaking-bad", label: "Breaking Bad", icon: "🧪" },
      { value: "the-office", label: "The Office", icon: "📎" },
      { value: "friends-sitcoms", label: "Friends / 90s Sitcoms", icon: "☕" },
      { value: "80s-movies", label: "80s Classics", icon: "📼" },
      { value: "90s-movies", label: "90s Movies", icon: "📀" },
      { value: "disney-movies", label: "Disney Movies", icon: "🏰" },
      { value: "pixar", label: "Pixar Films", icon: "🎈" },
      { value: "studio-ghibli", label: "Studio Ghibli", icon: "🌸" },
      { value: "horror-movies", label: "Horror Films", icon: "😱" },
      { value: "rom-coms", label: "Rom-Coms", icon: "💕" },
      { value: "action-movies", label: "Action Movies", icon: "💥" },
      { value: "christopher-nolan", label: "Christopher Nolan Films", icon: "🎥" },
      { value: "quentin-tarantino", label: "Tarantino Films", icon: "🔫" },
      { value: "wes-anderson", label: "Wes Anderson", icon: "🎨" },
      { value: "barbie-2023", label: "Barbie (2023)", icon: "💗" },
      { value: "wednesday-addams", label: "Wednesday / Addams Family", icon: "🖤" },
      { value: "squid-game", label: "Squid Game", icon: "🔺" },
      { value: "ted-lasso", label: "Ted Lasso", icon: "⚽" },
      { value: "succession", label: "Succession", icon: "💼" },
      { value: "the-last-of-us", label: "The Last of Us", icon: "🍄" },
      { value: "euphoria", label: "Euphoria", icon: "✨" }
    ]
  },
  {
    id: "gaming",
    name: "Video Games",
    icon: "🎮",
    interests: [
      { value: "nintendo-games", label: "Nintendo Games", icon: "🍄" },
      { value: "mario", label: "Super Mario", icon: "🔴" },
      { value: "zelda", label: "Legend of Zelda", icon: "🗡️" },
      { value: "pokemon", label: "Pokémon", icon: "⚡" },
      { value: "minecraft", label: "Minecraft", icon: "⛏️" },
      { value: "fortnite", label: "Fortnite", icon: "🪂" },
      { value: "roblox", label: "Roblox", icon: "🟥" },
      { value: "among-us", label: "Among Us", icon: "👤" },
      { value: "fall-guys", label: "Fall Guys", icon: "🫘" },
      { value: "halo", label: "Halo", icon: "💚" },
      { value: "cod-military", label: "Call of Duty / Military", icon: "🎖️" },
      { value: "final-fantasy", label: "Final Fantasy", icon: "⚔️" },
      { value: "witcher-games", label: "The Witcher", icon: "🐺" },
      { value: "assassins-creed", label: "Assassin's Creed", icon: "🗡️" },
      { value: "god-of-war", label: "God of War", icon: "🪓" },
      { value: "resident-evil", label: "Resident Evil", icon: "🧟" },
      { value: "silent-hill", label: "Silent Hill", icon: "🌫️" },
      { value: "tomb-raider", label: "Tomb Raider", icon: "🔫" },
      { value: "uncharted", label: "Uncharted", icon: "🗺️" },
      { value: "street-fighter", label: "Street Fighter", icon: "👊" },
      { value: "mortal-kombat", label: "Mortal Kombat", icon: "🩸" },
      { value: "overwatch", label: "Overwatch", icon: "🎯" },
      { value: "league-of-legends", label: "League of Legends", icon: "🛡️" },
      { value: "valorant", label: "Valorant", icon: "💎" },
      { value: "skyrim-elder-scrolls", label: "Skyrim / Elder Scrolls", icon: "🐉" },
      { value: "dark-souls-elden-ring", label: "Dark Souls / Elden Ring", icon: "💀" },
      { value: "world-of-warcraft", label: "World of Warcraft", icon: "🗡️" },
      { value: "genshin-impact", label: "Genshin Impact", icon: "✨" },
      { value: "honkai-star-rail", label: "Honkai Star Rail", icon: "🚂" },
      { value: "pac-man-arcade", label: "Pac-Man / Arcade Classics", icon: "👾" },
      { value: "sonic-hedgehog", label: "Sonic the Hedgehog", icon: "💨" },
      { value: "crash-spyro", label: "Crash & Spyro", icon: "🟠" }
    ]
  },
  {
    id: "anime",
    name: "Anime & Manga",
    icon: "🎌",
    interests: [
      { value: "dragon-ball", label: "Dragon Ball Z", icon: "🔮" },
      { value: "naruto", label: "Naruto", icon: "🍥" },
      { value: "one-piece", label: "One Piece", icon: "🏴‍☠️" },
      { value: "bleach", label: "Bleach", icon: "👘" },
      { value: "my-hero-academia", label: "My Hero Academia", icon: "🦸" },
      { value: "jujutsu-kaisen", label: "Jujutsu Kaisen", icon: "👹" },
      { value: "demon-slayer", label: "Demon Slayer", icon: "⚔️" },
      { value: "one-punch-man", label: "One Punch Man", icon: "👊" },
      { value: "attack-on-titan", label: "Attack on Titan", icon: "🧱" },
      { value: "death-note", label: "Death Note", icon: "📓" },
      { value: "tokyo-ghoul", label: "Tokyo Ghoul", icon: "👁️" },
      { value: "fullmetal-alchemist", label: "Fullmetal Alchemist", icon: "⚙️" },
      { value: "hunter-x-hunter", label: "Hunter x Hunter", icon: "🎣" },
      { value: "sword-art-online", label: "Sword Art Online", icon: "🗡️" },
      { value: "re-zero", label: "Re:Zero", icon: "🔄" },
      { value: "overlord", label: "Overlord", icon: "💀" },
      { value: "sailor-moon", label: "Sailor Moon", icon: "🌙" },
      { value: "cardcaptor-sakura", label: "Cardcaptor Sakura", icon: "🪄" },
      { value: "madoka-magica", label: "Madoka Magica", icon: "🎀" },
      { value: "spy-x-family", label: "Spy x Family", icon: "🕵️" },
      { value: "chainsaw-man", label: "Chainsaw Man", icon: "🪚" },
      { value: "mob-psycho", label: "Mob Psycho 100", icon: "🌀" },
      { value: "k-pop-idols", label: "K-Pop Idols", icon: "🎤" },
      { value: "vocaloid-hatsune-miku", label: "Vocaloid / Hatsune Miku", icon: "🎵" }
    ]
  },
  {
    id: "music",
    name: "Music & Artists",
    icon: "🎵",
    interests: [
      { value: "taylor-swift", label: "Taylor Swift", icon: "✨" },
      { value: "ariana-grande", label: "Ariana Grande", icon: "💕" },
      { value: "billie-eilish", label: "Billie Eilish", icon: "💚" },
      { value: "lady-gaga", label: "Lady Gaga", icon: "🎭" },
      { value: "beyonce", label: "Beyoncé", icon: "👑" },
      { value: "rihanna", label: "Rihanna", icon: "💎" },
      { value: "dua-lipa", label: "Dua Lipa", icon: "🪩" },
      { value: "elvis-presley", label: "Elvis Presley", icon: "🕺" },
      { value: "david-bowie", label: "David Bowie", icon: "⚡" },
      { value: "prince", label: "Prince", icon: "💜" },
      { value: "freddie-mercury", label: "Freddie Mercury / Queen", icon: "👨‍🎤" },
      { value: "kiss-band", label: "KISS", icon: "😈" },
      { value: "tupac-biggie", label: "Tupac / Biggie", icon: "🎤" },
      { value: "eminem", label: "Eminem", icon: "🧢" },
      { value: "travis-scott", label: "Travis Scott", icon: "🌵" },
      { value: "doja-cat", label: "Doja Cat", icon: "🐱" },
      { value: "80s-pop-stars", label: "80s Pop Stars", icon: "📼" },
      { value: "90s-grunge", label: "90s Grunge", icon: "🎸" },
      { value: "disco-70s", label: "70s Disco", icon: "🪩" },
      { value: "boy-bands", label: "Boy Bands", icon: "🎶" },
      { value: "emo-scene", label: "Emo / Scene", icon: "🖤" },
      { value: "country-western", label: "Country / Western", icon: "🤠" }
    ]
  },
  {
    id: "history",
    name: "History & Time Periods",
    icon: "🏛️",
    interests: [
      { value: "ancient-egypt", label: "Ancient Egypt", icon: "🐍" },
      { value: "ancient-rome", label: "Ancient Rome", icon: "🏛️" },
      { value: "ancient-greece", label: "Ancient Greece", icon: "🏺" },
      { value: "vikings", label: "Vikings", icon: "⚔️" },
      { value: "medieval-knights", label: "Medieval Knights", icon: "🛡️" },
      { value: "renaissance", label: "Renaissance", icon: "🎨" },
      { value: "pirates", label: "Pirates", icon: "🏴‍☠️" },
      { value: "revolutionary-war", label: "Revolutionary War", icon: "🎩" },
      { value: "victorian-era", label: "Victorian Era", icon: "🎩" },
      { value: "wild-west", label: "Wild West", icon: "🤠" },
      { value: "roaring-20s", label: "Roaring 20s", icon: "🥂" },
      { value: "1940s-wwii", label: "1940s / WWII", icon: "🪖" },
      { value: "1950s-retro", label: "1950s Retro", icon: "🍔" },
      { value: "1960s-hippie", label: "1960s Hippie", icon: "☮️" },
      { value: "1970s-disco", label: "1970s Disco", icon: "🕺" },
      { value: "1980s-nostalgia", label: "1980s", icon: "📼" },
      { value: "1990s-nostalgia", label: "1990s", icon: "📟" },
      { value: "y2k-2000s", label: "Y2K / Early 2000s", icon: "💿" }
    ]
  },
  {
    id: "sports",
    name: "Sports & Athletics",
    icon: "🏅",
    interests: [
      { value: "football-nfl", label: "Football (NFL)", icon: "🏈" },
      { value: "basketball-nba", label: "Basketball (NBA)", icon: "🏀" },
      { value: "baseball-mlb", label: "Baseball (MLB)", icon: "⚾" },
      { value: "soccer-football", label: "Soccer / Football", icon: "⚽" },
      { value: "hockey", label: "Hockey", icon: "🏒" },
      { value: "boxing-ufc", label: "Boxing / UFC", icon: "🥊" },
      { value: "wrestling-wwe", label: "Wrestling (WWE)", icon: "🤼" },
      { value: "olympics", label: "Olympics", icon: "🥇" },
      { value: "cheerleading", label: "Cheerleading", icon: "📣" },
      { value: "gymnastics", label: "Gymnastics", icon: "🤸" },
      { value: "skateboarding", label: "Skateboarding", icon: "🛹" },
      { value: "surfing", label: "Surfing", icon: "🏄" },
      { value: "tennis", label: "Tennis", icon: "🎾" },
      { value: "golf", label: "Golf", icon: "⛳" }
    ]
  },
  {
    id: "humor",
    name: "Humor & Internet Culture",
    icon: "😂",
    interests: [
      { value: "puns-wordplay", label: "Puns & Wordplay", icon: "🤡" },
      { value: "memes", label: "Internet Memes", icon: "🐸" },
      { value: "tiktok-trends", label: "TikTok Trends", icon: "📱" },
      { value: "sarcastic-funny", label: "Sarcastic / Ironic", icon: "🙄" },
      { value: "dad-jokes", label: "Dad Jokes", icon: "👨" },
      { value: "parody", label: "Parody / Satire", icon: "🎭" },
      { value: "couples-funny", label: "Funny Couples Costumes", icon: "👫" },
      { value: "food-costumes", label: "Food Costumes", icon: "🍕" },
      { value: "object-costumes", label: "Object Costumes", icon: "📦" },
      { value: "inflation-costumes", label: "Inflatable Costumes", icon: "🎈" },
      { value: "group-funny", label: "Group Pun Costumes", icon: "👥" },
      { value: "office-humor", label: "Office / Work Humor", icon: "💼" },
      { value: "political-satire", label: "Political Satire", icon: "🗳️" },
      { value: "awkward-funny", label: "Awkwardly Funny", icon: "😬" },
      { value: "anti-costume", label: "Anti-Costume / Lazy", icon: "😴" },
      { value: "florida-man", label: "Florida Man / Weird News", icon: "🐊" }
    ]
  },
  {
    id: "halloween",
    name: "Classic Halloween",
    icon: "🎃",
    interests: [
      { value: "vampires", label: "Vampires", icon: "🧛" },
      { value: "werewolves", label: "Werewolves", icon: "🐺" },
      { value: "zombies", label: "Zombies", icon: "🧟" },
      { value: "ghosts", label: "Ghosts", icon: "👻" },
      { value: "witches", label: "Witches", icon: "🧙" },
      { value: "skeletons", label: "Skeletons", icon: "💀" },
      { value: "mummies", label: "Mummies", icon: "🧟" },
      { value: "frankenstein", label: "Frankenstein", icon: "⚡" },
      { value: "devils-demons", label: "Devils & Demons", icon: "😈" },
      { value: "angels-dark", label: "Dark Angels", icon: "😇" },
      { value: "grim-reaper", label: "Grim Reaper", icon: "☠️" },
      { value: "scarecrows", label: "Scarecrows", icon: "🌾" },
      { value: "clowns-scary", label: "Scary Clowns", icon: "🤡" },
      { value: "dolls-creepy", label: "Creepy Dolls", icon: "🪆" },
      { value: "plague-doctor", label: "Plague Doctor", icon: "🩺" },
      { value: "classic-monsters", label: "Universal Monsters", icon: "🎬" }
    ]
  },
  {
    id: "superheroes",
    name: "Superheroes & Comics",
    icon: "🦸",
    interests: [
      { value: "batman", label: "Batman", icon: "🦇" },
      { value: "superman", label: "Superman", icon: "🦸" },
      { value: "wonder-woman", label: "Wonder Woman", icon: "🗡️" },
      { value: "joker", label: "Joker", icon: "🃏" },
      { value: "harley-quinn", label: "Harley Quinn", icon: "🔨" },
      { value: "spider-man", label: "Spider-Man", icon: "🕷️" },
      { value: "iron-man", label: "Iron Man", icon: "🤖" },
      { value: "captain-america", label: "Captain America", icon: "🛡️" },
      { value: "thor", label: "Thor", icon: "⚡" },
      { value: "black-widow", label: "Black Widow", icon: "🕷️" },
      { value: "deadpool", label: "Deadpool", icon: "🔴" },
      { value: "wolverine-xmen", label: "Wolverine / X-Men", icon: "❌" },
      { value: "thanos", label: "Thanos", icon: "💜" }
    ]
  },
  {
    id: "fantasy",
    name: "Fantasy & Mythology",
    icon: "🌟",
    interests: [
      { value: "dragons", label: "Dragons", icon: "🐉" },
      { value: "unicorns", label: "Unicorns", icon: "🦄" },
      { value: "fairies-fae", label: "Fairies / Fae", icon: "🧚" },
      { value: "mermaids", label: "Mermaids", icon: "🧜" },
      { value: "elves", label: "Elves", icon: "🧝" },
      { value: "dwarves", label: "Dwarves", icon: "⛏️" },
      { value: "wizards-mages", label: "Wizards & Mages", icon: "🧙" },
      { value: "greek-gods", label: "Greek Gods", icon: "⚡" },
      { value: "norse-gods", label: "Norse Mythology", icon: "🔨" },
      { value: "egyptian-gods", label: "Egyptian Deities", icon: "☥" },
      { value: "centaurs", label: "Centaurs", icon: "🐴" },
      { value: "phoenix", label: "Phoenix", icon: "🔥" },
      { value: "griffins", label: "Griffins", icon: "🦅" },
      { value: "medieval-fantasy", label: "Medieval Fantasy", icon: "🏰" }
    ]
  },
  {
    id: "scifi",
    name: "Sci-Fi & Space",
    icon: "🚀",
    interests: [
      { value: "astronauts", label: "Astronauts", icon: "👨‍🚀" },
      { value: "aliens", label: "Aliens", icon: "👽" },
      { value: "robots-androids", label: "Robots & Androids", icon: "🤖" },
      { value: "cyberpunk", label: "Cyberpunk", icon: "🌃" },
      { value: "steampunk", label: "Steampunk", icon: "⚙️" },
      { value: "space-opera", label: "Space Opera", icon: "🌌" },
      { value: "time-travelers", label: "Time Travelers", icon: "⏰" },
      { value: "mad-scientist", label: "Mad Scientists", icon: "🧪" },
      { value: "post-apocalyptic", label: "Post-Apocalyptic", icon: "☢️" },
      { value: "futuristic", label: "Futuristic / Sci-Fi", icon: "🔮" }
    ]
  },
  {
    id: "animals",
    name: "Animals & Nature",
    icon: "🦁",
    interests: [
      { value: "cats-kittens", label: "Cats & Kittens", icon: "🐱" },
      { value: "dogs-puppies", label: "Dogs & Puppies", icon: "🐶" },
      { value: "wild-cats", label: "Big Cats (Lions, Tigers)", icon: "🦁" },
      { value: "bears", label: "Bears", icon: "🐻" },
      { value: "wolves", label: "Wolves", icon: "🐺" },
      { value: "birds", label: "Birds", icon: "🦜" },
      { value: "bees-insects", label: "Bees & Insects", icon: "🐝" },
      { value: "butterflies", label: "Butterflies", icon: "🦋" },
      { value: "dinosaurs", label: "Dinosaurs", icon: "🦖" },
      { value: "sea-creatures", label: "Sea Creatures", icon: "🐙" },
      { value: "farm-animals", label: "Farm Animals", icon: "🐄" },
      { value: "endangered-animals", label: "Endangered Animals", icon: "🐼" },
      { value: "mythical-creatures", label: "Mythical Creatures", icon: "🐲" },
      { value: "plants-flowers", label: "Plants & Flowers", icon: "🌻" }
    ]
  },
  {
    id: "professions",
    name: "Professions",
    icon: "💼",
    interests: [
      { value: "doctors-nurses", label: "Doctors & Nurses", icon: "👨‍⚕️" },
      { value: "police-detective", label: "Police & Detectives", icon: "👮" },
      { value: "firefighters", label: "Firefighters", icon: "🧑‍🚒" },
      { value: "chefs-cooks", label: "Chefs & Cooks", icon: "👨‍🍳" },
      { value: "pilots-flight-crew", label: "Pilots & Flight Crew", icon: "👨‍✈️" },
      { value: "construction", label: "Construction Workers", icon: "👷" },
      { value: "business-executive", label: "Business Executive", icon: "👔" },
      { value: "teachers-professors", label: "Teachers & Professors", icon: "👩‍🏫" },
      { value: "artists-painters", label: "Artists & Painters", icon: "👩‍🎨" },
      { value: "musicians-rockstars", label: "Musicians & Rockstars", icon: "🎸" },
      { value: "lawyers-judges", label: "Lawyers & Judges", icon: "⚖️" },
      { value: "scientists-researchers", label: "Scientists", icon: "🔬" }
    ]
  },
  {
    id: "art-culture",
    name: "Art & Culture",
    icon: "🎨",
    interests: [
      { value: "famous-paintings", label: "Famous Paintings", icon: "🖼️" },
      { value: "renaissance-art", label: "Renaissance Art", icon: "👨‍🎨" },
      { value: "pop-art", label: "Pop Art", icon: "🎨" },
      { value: "street-art", label: "Street Art / Graffiti", icon: "🎨" },
      { value: "abstract-art", label: "Abstract Art", icon: "🌀" },
      { value: "masquerade", label: "Masquerade", icon: "🎭" },
      { value: "theater-broadway", label: "Theater / Broadway", icon: "🎭" },
      { value: "circus-carnival", label: "Circus / Carnival", icon: "🎪" },
      { value: "fashion-runway", label: "High Fashion / Runway", icon: "👗" },
      { value: "cultural-traditional", label: "Cultural & Traditional", icon: "🌏" }
    ]
  }
];
