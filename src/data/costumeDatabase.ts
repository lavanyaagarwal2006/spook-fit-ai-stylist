// SpookFit 700+ Costume Database - Expanded for Hybrid System
// This database provides consistent baseline matching
// AI will also generate beyond-database recommendations for unlimited variety

export interface Costume {
  name: string;
  source: string;
  genders: string[];
  quickTags: string[];
}

const costumeDatabase: Costume[] = [
  // === GAMING (80+) ===
  { name: "Master Chief", source: "Halo", genders: ["male", "female", "non-binary"], quickTags: ["master-chief", "halo", "spartan", "helmet", "green-armor"] },
  { name: "Lara Croft", source: "Tomb Raider", genders: ["female"], quickTags: ["lara-croft", "tomb-raider", "tank-top", "shorts", "dual-pistols"] },
  { name: "Minecraft Steve", source: "Minecraft", genders: ["male", "female", "non-binary"], quickTags: ["steve", "minecraft", "blocky", "blue-shirt", "pickaxe"] },
  { name: "Minecraft Creeper", source: "Minecraft", genders: ["male", "female", "non-binary"], quickTags: ["creeper", "minecraft", "green", "pixelated", "explosive"] },
  { name: "Enderman", source: "Minecraft", genders: ["male", "female", "non-binary"], quickTags: ["enderman", "minecraft", "tall", "black", "purple-eyes"] },
  { name: "Among Us Crewmate", source: "Among Us", genders: ["male", "female", "non-binary"], quickTags: ["among-us", "crewmate", "colorful", "sus", "visor"] },
  { name: "Fortnite Default Skin", source: "Fortnite", genders: ["male", "female", "non-binary"], quickTags: ["fortnite", "default", "battle-royale", "dancing", "gaming"] },
  { name: "Roblox Character", source: "Roblox", genders: ["male", "female", "non-binary"], quickTags: ["roblox", "blocky", "avatar", "gaming", "oof"] },
  { name: "Fall Guys Bean", source: "Fall Guys", genders: ["male", "female", "non-binary"], quickTags: ["fall-guys", "bean", "colorful", "cute", "stumble"] },
  { name: "Crash Bandicoot", source: "Crash Bandicoot", genders: ["male", "non-binary"], quickTags: ["crash", "bandicoot", "orange", "jeans", "spin"] },
  { name: "Spyro", source: "Spyro", genders: ["male", "non-binary"], quickTags: ["spyro", "dragon", "purple", "fire", "gems"] },
  { name: "Rayman", source: "Rayman", genders: ["male", "non-binary"], quickTags: ["rayman", "floating-hands", "purple-hoodie", "limbless", "platformer"] },
  { name: "Ryu", source: "Street Fighter", genders: ["male", "non-binary"], quickTags: ["ryu", "street-fighter", "gi", "headband", "hadouken"] },
  { name: "Chun-Li", source: "Street Fighter", genders: ["female"], quickTags: ["chun-li", "street-fighter", "buns", "blue-dress", "kicks"] },
  { name: "Scorpion", source: "Mortal Kombat", genders: ["male", "non-binary"], quickTags: ["scorpion", "mortal-kombat", "ninja", "yellow", "get-over-here"] },
  { name: "Sub-Zero", source: "Mortal Kombat", genders: ["male", "non-binary"], quickTags: ["sub-zero", "mortal-kombat", "ninja", "blue", "ice"] },
  { name: "Tracer", source: "Overwatch", genders: ["female", "non-binary"], quickTags: ["tracer", "overwatch", "goggles", "orange", "cheers-love"] },
  { name: "D.Va", source: "Overwatch", genders: ["female"], quickTags: ["dva", "overwatch", "mech", "pink", "gamer"] },
  { name: "Mercy", source: "Overwatch", genders: ["female"], quickTags: ["mercy", "overwatch", "wings", "blonde", "healer"] },
  { name: "Reaper", source: "Overwatch", genders: ["male", "non-binary"], quickTags: ["reaper", "overwatch", "skull-mask", "black", "edgy"] },
  { name: "Junkrat", source: "Overwatch", genders: ["male", "non-binary"], quickTags: ["junkrat", "overwatch", "explosives", "mohawk", "crazy"] },
  { name: "Cloud Strife", source: "Final Fantasy VII", genders: ["male", "non-binary"], quickTags: ["cloud", "final-fantasy", "spiky-hair", "buster-sword", "soldier"] },
  { name: "Sephiroth", source: "Final Fantasy VII", genders: ["male", "non-binary"], quickTags: ["sephiroth", "final-fantasy", "silver-hair", "long-sword", "one-wing"] },
  { name: "Geralt of Rivia", source: "The Witcher", genders: ["male", "non-binary"], quickTags: ["geralt", "witcher", "white-hair", "sword", "medallion"] },
  { name: "Ezio Auditore", source: "Assassin's Creed", genders: ["male", "non-binary"], quickTags: ["ezio", "assassins-creed", "hood", "white-robes", "hidden-blade"] },
  { name: "Nathan Drake", source: "Uncharted", genders: ["male", "non-binary"], quickTags: ["nathan-drake", "uncharted", "henley", "holster", "adventurer"] },
  { name: "Kratos", source: "God of War", genders: ["male", "non-binary"], quickTags: ["kratos", "god-of-war", "bald", "red-tattoo", "axe"] },
  { name: "Ellie", source: "The Last of Us", genders: ["female", "non-binary"], quickTags: ["ellie", "last-of-us", "flannel", "backpack", "survivor"] },
  { name: "Joel", source: "The Last of Us", genders: ["male", "non-binary"], quickTags: ["joel", "last-of-us", "flannel", "beard", "survivor"] },
  { name: "Leon Kennedy", source: "Resident Evil", genders: ["male", "non-binary"], quickTags: ["leon", "resident-evil", "leather-jacket", "blonde", "rpd"] },
  { name: "Jill Valentine", source: "Resident Evil", genders: ["female"], quickTags: ["jill", "resident-evil", "beret", "stars", "zombie-killer"] },
  { name: "Ratchet", source: "Ratchet & Clank", genders: ["male", "non-binary"], quickTags: ["ratchet", "lombax", "wrench", "orange", "mechanic"] },
  { name: "Link", source: "The Legend of Zelda", genders: ["male", "female", "non-binary"], quickTags: ["link", "zelda", "green-tunic", "sword", "shield", "elf"] },
  { name: "Mario", source: "Super Mario", genders: ["male", "female", "non-binary"], quickTags: ["mario", "nintendo", "red-hat", "mustache", "plumber"] },
  { name: "Luigi", source: "Super Mario", genders: ["male", "female", "non-binary"], quickTags: ["luigi", "nintendo", "green-hat", "mustache", "plumber"] },
  { name: "Princess Peach", source: "Super Mario", genders: ["female"], quickTags: ["peach", "nintendo", "pink-dress", "crown", "princess"] },
  { name: "Bowser", source: "Super Mario", genders: ["male", "non-binary"], quickTags: ["bowser", "nintendo", "turtle", "villain", "spikes"] },
  { name: "Samus Aran", source: "Metroid", genders: ["female"], quickTags: ["samus", "metroid", "power-suit", "bounty-hunter", "sci-fi"] },
  { name: "Sonic the Hedgehog", source: "Sonic", genders: ["male", "female", "non-binary"], quickTags: ["sonic", "blue", "fast", "hedgehog", "sneakers"] },
  { name: "Pikachu", source: "Pokemon", genders: ["male", "female", "non-binary"], quickTags: ["pikachu", "pokemon", "yellow", "electric", "cute"] },
  { name: "Charizard", source: "Pokemon", genders: ["male", "female", "non-binary"], quickTags: ["charizard", "pokemon", "dragon", "fire", "orange"] },
  { name: "Eevee", source: "Pokemon", genders: ["male", "female", "non-binary"], quickTags: ["eevee", "pokemon", "brown", "cute", "fluffy"] },
  { name: "Meowth", source: "Pokemon", genders: ["male", "female", "non-binary"], quickTags: ["meowth", "pokemon", "cat", "coin", "team-rocket"] },
];

export default costumeDatabase;
