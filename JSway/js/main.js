/*chapter 9 exercises*/

/*Dogs
Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
*/


  class Dog{
      constructor(name, species, size){
          this.name = name;
          this.species= species;
          this.size= size;
      }
      bark(){
          let sound= 'Woof! Woof!'
          if(this.size > 60){
              sound= 'Grrr! Grrr!'
          }
          return sound;
      }
  }

  const fang= new Dog('Fang', 'boarhound', 75)
  console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`)
  console.log(`Look a cat! ${fang.name} barks: ${fang.bark()}`)

  const snowy= new Dog('Snowy', 'terrier', 22)
  console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`)
  console.log(`Look a cat! ${snowy.name} barks: ${snowy.bark()}`)



  /*Character inventory
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.*/

class Character {
    // Initialize the character
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      // Inventory is managed by an object containg 2 properties
      this.inventory = {
        gold: 10,
        keys: 1
      };
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points` +
              `, ${target.inventory.gold} gold and ${target.inventory.keys} key(s)`
          );
          this.xp += bonusXP;
          // The victim's inventory goes to its vanquisher
          this.inventory.gold += target.inventory.gold;
          this.inventory.keys += target.inventory.keys;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return (
        `${this.name} has ${this.health} health points, ${this.strength} as strength, ` +
        `${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`
      );
    }
  }
  
  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());
  
  const monster = new Character("Spike", 40, 20);
  console.log(`A wild monster has appeared: it's named ${monster.name}`);
  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);
  
  console.log(aurora.describe());
  console.log(glacius.describe());


  /*Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.*/


class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }
    // Add an amount to the bank balance
    credit(amount) {
      this.balance += amount;
    }
    // Return account description
    describe() {
      return `owner: ${this.owner}, balance: ${this.balance}`;
    }
  }
  
  const accountList = [];
  // Add 3 accounts to the list
  accountList.push(new Account("Sean"));
  accountList.push(new Account("Brad"));
  accountList.push(new Account("Georges"));
  
  // Credit and describe each account
  accountList.forEach(account => {
    account.credit(1000);
    console.log(account.describe());
  });