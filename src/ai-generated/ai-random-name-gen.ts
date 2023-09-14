class NameGenerator {
    private dataset: string[];
    private order: number;
  
    constructor(names: string[], order: number) {
      this.dataset = names;
      this.order = order;
    }
  
    generateRandomName(length: number): string {
      if (length < this.order) {
        throw new Error(`Length must be at least ${this.order} for this order Markov chain.`);
      }
  
      const dataset = this.dataset.join(' '); // Concatenate all names into one string
      const name = this.generateNameFromDataset(dataset, length);
  
      return name;
    }
  
    private generateNameFromDataset(dataset: string, length: number): string {
      const name = [];
      const startIndex = Math.floor(Math.random() * (dataset.length - this.order));
      let currentSubstring = dataset.substring(startIndex, startIndex + this.order);
  
      for (let i = 0; i < length; i++) {
        const nextChar = this.getNextChar(dataset, currentSubstring);
        name.push(nextChar);
        currentSubstring = currentSubstring.slice(1) + nextChar;
      }
  
      return name.join('');
    }
  
    private getNextChar(dataset: string, currentSubstring: string): string {
      const possibleNextChars = [];
  
      for (let i = 0; i < dataset.length - this.order; i++) {
        if (dataset.slice(i, i + this.order) === currentSubstring) {
          possibleNextChars.push(dataset[i + this.order]);
        }
      }
  
      if (possibleNextChars.length === 0) {
        return this.getRandomCharFromDataset(dataset);
      }
  
      return possibleNextChars[Math.floor(Math.random() * possibleNextChars.length)];
    }
  
    private getRandomCharFromDataset(dataset: string): string {
      const randomIndex = Math.floor(Math.random() * dataset.length);
      return dataset[randomIndex];
    }
  }
  
  // Example usage:
  
const nameDataset = [
    'Rivendell', 'Gondor', 'Mirkwood', 'Minas Tirith', 'Hogwarts', 'Narnia', 'Camelot', 'Atlantis', 'Valinor', 'Shangri-La',
    'El Dorado', 'Neverland', 'Midgard', 'Asgard', 'Mordor', 'Dunwall', 'Rapture', 'Stormwind', 'Gilead', 'Oz',
    'Westeros', 'Essos', 'Gotham', 'Metropolis', 'Raccoon City', 'Silent Hill', 'Bikini Bottom', 'Vice City', 'Los Santos', 'Cybertron',
    'Zion', 'Krypton', 'Pandora', 'Elysium', 'Arrakis', 'Drogoth', 'Anor Londo', 'Rapture', 'Columbia', 'Black Mesa',
    'Valyria', 'Winterfell', 'Westerfield', 'Dreadfort', 'Rivertown', 'Alderaan', 'Coruscant', 'Tatooine', 'Mos Eisley', 'Bespin',
    'Avalon', 'Nevermore', 'Drakonia', 'Ravenholm', 'Thundertop', 'Ivorygate', 'Shadowmere', 'Gloomhaven', 'Frostholm', 'Sablewood',
    'Mistralia', 'Silverspire', 'Dragonhold', 'Serpent\'s Reach', 'Stoneshadow', 'Ebonridge', 'Vorathel', 'Thornwatch', 'Moonshadow', 'Feywild',
    'Eaglespire', 'Dreadkeep', 'Ironhold', 'Sablefort', 'Shadowfen', 'Ravenhold', 'Whiteridge', 'Frosthold', 'Stormwatch', 'Stormfall',
    'Ellesméra', 'Alagaësia', 'Xandria', 'Astoria', 'Whisperwind', 'Mysthaven', 'Embershore', 'Thunderspire', 'Mythrendale', 'Glimmerhold',
    'Veridia', 'Ravencliff', 'Frostspire', 'Eldertop', 'Sunhaven', 'Shadowglade', 'Ironhelm', 'Emberwatch', 'Twilightwood', 'Lunaris',
    'Silverglow', 'Duskmire', 'Gloomvale', 'Havenbrook', 'Starhaven', 'Dragonspire', 'Darkholm', 'Frostholme', 'Ebonwood', 'Glenhaven',
    'Necropolis', 'Bloodhaven', 'Cursed Hollow', 'Shadowfell', 'Dreadmarsh', 'Ghoulmire', 'Cryptwood', 'Sorrow\'s End', 'Vampiria', 'Duskhaven',
    'Abyssgate', 'Ebonhaven', 'Lichspire', 'Soulforge', 'Grimwatch', 'Shadowgate', 'Netherhall', 'Wraithhold', 'Darkhaven', 'Netherreach',
    'Serpenthorn', 'Duskbane', 'Gorekeep', 'Cryptspire', 'Hallow\'s End', 'Sorrowfell', 'Wraithspire', 'Nightshroud', 'Gloomwych', 'Blackcrypt',
    'Fellshadow', 'Dreadfortress', 'Desolation', 'Abyssalreach', 'Necrotower', 'Ghoulhaven', 'Witchinghour', 'Shadowcrag', 'Duskmarsh', 'Gloomscape',
    'Soulspire', 'Doomspire', 'Cursedspire', 'Shadowskull Citadel', 'Serpenthold', 'Netherfortress', 'Dreadshade', 'Nighthold', 'Obsidiankeep', 'Sorrowscape',
    'Duskblood Citadel', 'Crimsonhold', 'Goregate', 'Necrowatch', 'Abyssalhaven', 'Ebonreach', 'Wraithfort', 'Lichgate', 'Soulspire Citadel', 'Dreadwych',
    // Continue adding more unique grimdark fantasy city names as needed
    'Blightspire', 'Doomhaven', 'Sanguinarium', 'Malicehold', 'Wretchedreach', 'Abyssalstorm', 'Eldritchgate', 'Nightsorrow', 'Grimshroud', 'Deathmire',
    'Morbidhaven', 'Nightmare Citadel', 'Voidcrypt', 'Malevolence', 'Gloomspire', 'Banespire', 'Netherstorm', 'Gorevault', 'Cryptwraith', 'Sorrowscar',
    'Duskmaw', 'Desolateshade', 'Shadowcursed', 'Wraithfall', 'Blackvoid', 'Ghoulspire', 'Ebonchasm', 'Cursedominion', 'Bloodwither', 'Soulterror',
];
  
const nameGenerator = new NameGenerator(nameDataset, 2);
  
// Generate a random name with a specified length
const randomName = nameGenerator.generateRandomName(6); // You can change the length as needed
console.log(randomName);

//Adding some code for typing purposes
const generateButton = document.getElementById('generate') as HTMLButtonElement;
const lengthInput = document.getElementById('length') as HTMLInputElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

generateButton.addEventListener('click', () => {
    const nameLength = parseInt(lengthInput.value, 10);
    const randomName = nameGenerator.generateRandomName(nameLength);
    resultDiv.textContent = `Generated Name: ${randomName}`;
});