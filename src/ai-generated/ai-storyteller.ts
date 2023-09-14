//Helped ChatGPT with forgetting about case-sensitivity

const storyTemplates = [
    "Once upon a time in a [setting], [character] embarked on a quest to [goal].",
    "[character] found themselves in a [setting] facing a [conflict].",
    "In a [setting], [character] discovered [artifact] and [action].",
    "Deep within the [setting], [character] stumbled upon a [mystery] that needed solving.",
    "[character] woke up one morning with a burning desire to [goal].",
    "In a land filled with [creatures], [character] set out to [goal].",
    "Amidst the [setting], [character] stumbled upon an old [object] with a [mysterious quality].",
    "[character] was born with a unique [ability] that would change their destiny.",
    "In a realm where [magic] was real, [character] uncovered a [secret] that would alter the course of history.",
    "Long ago in the [era], [character] became the last hope for [civilization] as they faced the [threat].",
    "As the [era] came to an end, [character] sought to preserve the legacy of [legendary figure] by [action].",
    "In the heart of [setting], [character] encountered [ancient entity] and was tasked with [quest].",
    "For generations, [family] had guarded the [family heirloom], until [character] stumbled upon it one fateful day.",
  ];

  const characters = [
    "Alice",
    "Bob",
    "Eve",
    "Luna",
    "Maxwell",
    "Aria",
    "Finn",
    "Seraphina",
    "Oliver",
    "Isabella",
    "Dexter",
    "Athena",
    "Xander",
    "Zara",
    "Lucas",
    "Nova",
    "Elijah",
    "Amara",
    "Theo",
    "Cora",
    "Milo",
    "Lyra",
    "Leo",
    "Savannah",
    "Ezra",
    "Aurora",
    "Oscar",
    "Nora",
    "Wyatt",
    "Ivy",
    "Henry",
    "Ava",
    "Liam",
    "Sophia",
    "Mia",
    "Noah",
    "Ella",
    "Lily",
    "Jackson",
    "Emma",
    "Harper",
    "Logan",
    "Grace",
    "Zoe",
    "Evelyn",
    "Sebastian",
    "Emily",
    "Caleb",
    "Amelia",
  ];
  
  const goals = [
    "retrieve a legendary artifact",
    "uncover the truth about a family secret",
    "master a forbidden magic",
    "restore balance to a fractured world",
    "fulfill an ancient prophecy",
    "rescue a kidnapped mentor",
    "escape a labyrinthine maze",
    "befriend a reclusive mythical creature",
    "discover the lost city of Atlantis",
    "outsmart a cunning master thief",
    "survive a harrowing journey through the wilderness",
    "solve a series of unsolvable puzzles",
    "forge an unbreakable bond with a sworn enemy",
    "acquire the last remaining dragon egg",
    "break a curse that has plagued the land for centuries",
    "navigate a treacherous underground kingdom",
    "defend the realm from an impending invasion",
    "become the greatest bard in the kingdom",
    "expose a corrupt political conspiracy",
    "unlock the secrets of time travel",
    "conquer the highest peak in the world",
    "redeem a tarnished family name",
    "tame a wild and mysterious steed",
    "win the heart of an unattainable love",
    "unleash the power of a dormant god",
    "protect a sacred forest from destruction",
    "discover a hidden realm beyond the stars",
    "unravel the mysteries of a haunted mansion",
    "survive a trial by fire and emerge reborn",
  ];
  
  const settings = ["enchanted forest", "ancient castle", "deep cave", "deserted island"];
  const abilities = ["gift of invisibility", "power to control time", "ability to communicate with the dead", "superhuman strength"];
  const objects = ["book", "amulet", "map", "crystal ball"];
  const mysteriousQualities = ["glowing aura", "whispering secrets", "strange symbols", "echoing laughter"];
  const mysteries = ["hidden curse", "forgotten prophecy", "cryptic riddle", "enchanted mirror"];
  const creatures = ["dragons", "unicorns", "goblins", "mermaids"];
  const legendaryFigures = ["a legendary warrior", "a wise sage", "a notorious pirate", "an enigmatic oracle"];
  const ancientEntities = ["a celestial guardian", "an eldritch deity", "a sentient AI", "a time-traveling entity"];
  const family = ["the Smith family", "the Moonshadow clan", "the Von Hammersteins", "the Nightshade dynasty"];
  const magic = ["ancient runes", "sacred relics", "cosmic energy", "chaos magic"];
  const eras = ["age of steam", "cyberpunk future", "post-apocalyptic wasteland", "mythical past"];
  const civilization = ["a nomadic tribe", "a utopian society", "a dystopian megacity", "an underground realm"];
  const threats = ["reawakening of a dormant evil", "collapse of reality itself", "intergalactic invasion", "a cosmic alignment"];
  
  function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  function generateRandomStory() {
    const template = getRandomItem(storyTemplates);
    const filledStory = template
        .replace("[setting]", getRandomItem(settings))
        .replace("[character]", getRandomItem(characters))
        .replace("[goal]", getRandomItem(goals))
        .replace("[ability]", getRandomItem(abilities))
        .replace("[object]", getRandomItem(objects))
        .replace("[mysterious quality]", getRandomItem(mysteriousQualities))
        .replace("[mystery]", getRandomItem(mysteries))
        .replace("[creature]", getRandomItem(creatures))
        .replace("[legendary figure]", getRandomItem(legendaryFigures))
        .replace("[ancient entity]", getRandomItem(ancientEntities))
        .replace("[family]", getRandomItem(family))
        .replace("[magic]", getRandomItem(magic))
        .replace("[era]", getRandomItem(eras))
        .replace("[civilization]", getRandomItem(civilization))
        .replace("[threat]", getRandomItem(threats));
  
    return filledStory;
  }

//Helping ChatGPT with typing

// Get references to HTML paragraph elements
const story1Element = document.getElementById('story-1') as HTMLParagraphElement;
const story2Element = document.getElementById('story-2') as HTMLParagraphElement;
const storyGenerateButton = document.getElementById('generate-button') as HTMLButtonElement;

// Generate and display stories

function generateAndDisplayStories() {
    const generatedStory1 = generateRandomStory();
    const generatedStory2 = generateRandomStory();

    story1Element.textContent = generatedStory1;
    story2Element.textContent = generatedStory2;
  }

storyGenerateButton.addEventListener('click', generateAndDisplayStories);

generateAndDisplayStories();