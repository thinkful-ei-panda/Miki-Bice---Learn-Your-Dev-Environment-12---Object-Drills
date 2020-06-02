/* eslint-disable indent */
/* eslint-disable strict */



/*

Object Drills

1. Object initializers and methods

Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.

*/

let loaf = {

  flour: 300,

  water: 210,

  hydration () {

    return ( loaf.water / loaf.flour ) * 100;

  }

};

console.log ( loaf.flour, loaf.water );

console.log ( loaf.hydration() );

/*

2. Iterating over an object's properties

Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value.

*/

let obj = {
  foo: "boo",
  bar: "keep",
  fum: "fie",
  quux: "suux",
  spam: "breakfast"
};

for (let x in obj) {
  console.log(x, obj[x]);
};

/*

3. Arrays in objects

Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
Use console.log to show the name of a hobbit's fourth meal of the day.
Don't forget that humans and hobbits count from 1, but computers count from 0.

*/

let someObj = {

  meals: [ 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper' ]
};

console.log ( someObj.meals [ 3 ] );

/*

4. Arrays of objects

Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.

*/

let theOffice = [
  {name: "Joe",
    jobTitle: "Barkeep"},
  {name: "Tony",
    jobTitle: "Runner"},
  {name: "Alex",
    jobTitle: "Server"},
  {name: "Bobby",
    jobTitle: "Chef"},
  {name: "Victor",
    jobTitle: "Manager"},
];

for (let i = 0; i < theOffice.length; i++) {
  for (let x in theOffice[i]) {
    console.log(theOffice[i][x]);
  }
}

/*

5. Properties that aren't there

Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

*/

theOffice.forEach( ( item, index ) => {

  if ( item.name !== 'Alex' ) item.boss = false;
  else item.boss = true;

});

for (let i = 0; i < theOffice.length; i++) {
  for (let x in theOffice[i]) {
    console.log(theOffice[i][x]);
  }
}

/*

6. Cracking the code
Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. This means, instead of doing some kind of condition check like if (char === 'a'), you should use an object's key-value pair structure as the code translator.

Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

*/

function decode(encodedWord) {
    switch(encodedWord[0]) {
      case "a":
        return encodedWord[1];
        break;
      case "b":
        return encodedWord[2];
        break;
      case "c":
        return encodedWord[3];
        break;
      case "d":
        return encodedWord[4];
        break;
      default:
        return " ";
    }
  }
  
  function decode(encodedWord) {
    let cipher = {
      "a": encodedWord[1],
      "b": encodedWord[2],
      "c": encodedWord[3],
      "d": encodedWord[4],
      "e": " ",
      "f": " ",
      "g": " ",
      "h": " ",
      "i": " ",
      "j": " ",
      "k": " ",
      "l": " ",
      "m": " ",
      "n": " ",
      "o": " ",
      "p": " ",
      "q": " ",
      "r": " ",
      "s": " ",
      "t": " ",
      "u": " ",
      "v": " ",
      "w": " ",
      "x": " ",
      "y": " ",
      "z": " "
    }
    return cipher[encodedWord[0]];
  }
  
  function decodeWords(string) {
    let splits = string.split(" ");
    let cracker = splits.map(function(split) {
      return decode(split);  
    });
    let message = cracker.reduce(function(message, char) {
      return message + char;
    }, "")
    return message;
  }
  
   console.log(decodeWords("craft block argon meter bells brown croon droop"))

/*

7. Factory Functions with LOTR

Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------

Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

Add a new character to characters (make up any attributes not provided):

Arwen Undomiel is a Half-Elf of Rivendell
Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

What if you wanted to equip a weapon for each character and change how they are described? For example:

Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
Bilbo Baggings is a Hobbit of the Shire who uses the Ring
Frodo ... String and Barrow Blade
Aragon .... Anduril
Legolas ... Bow and Arrow
Arwen .... Hadhafang
How would you change the factory function and other methods?

*/

/*

BICE'S SOLUTION TO #7

*/


function createCharacter ( character ) {

  console.log ( '\n***createCharacter start\n' );

  //console.log ( character );

  //console.log ( `\ntype of character == ${ typeof character }\n` );

  //console.log ( `character.Name == ${ character.Name }\n` );
  this.Name = character.Name;

  //console.log ( `property.Nickname == ${ character.Nickname }\n` );
  this.Nickname = character.Nickname;

  //console.log ( `property.Race == ${ character.Race }\n` );
  this.Race = character.Race;

  //console.log ( `property.Origin == ${ character.Origin }\n` );
  this.Origin = character.Origin;

  //console.log ( `property.Attack == ${ character.Attack }\n` );
  this.Attack = character.Attack;

  //console.log ( `property.Defense == ${ character.Defense }\n` );
  this.Defense = character.Defense;
  
  this.Describe = function () { console.log ( `${ this.Name } is a ${ this.Race } from ${ this.Origin }` ); };
      
  this.evaluateFight = function ( characterIn ) { 
    
    console.log ( '\nBegin evaluate fight\n' );

    console.log ( `${ this.Name } has an attack of ${ this.Attack }` );

    console.log ( `${ characterIn.Name } has an defense of ${ characterIn.Defense }` );

    let xDamage = 0;

    if ( this.Attack > characterIn.Defense ) xDamage = this.Attack - characterIn.Defense;

    console.log ( `${ characterIn.Name } takes ${ xDamage } damage` );

    console.log ( '\n' );

    console.log ( `${ this.Name } has an Defense of ${ this.Defense }` );

    console.log ( `${ characterIn.Name } has an attack of ${ characterIn.Attack }` );

    let yDamage = 0;

    if ( characterIn.Attack > this.Defense ) yDamage = characterIn.Attack - this.Defense;

    console.log ( `${ this.Name } takes ${ yDamage } damage` );

  };
  
  return this;

}

// Signifies the input of a new character creation:

let gandalf = new createCharacter ( { 'Name':'Gandalf the White', 'Nickname':'gandalf', 'Race':'Wizard', 'Origin':'Middle Earth', 'Attack':10, 'Defense':6 } );

let bilbo = new createCharacter ( { 'Name':'Bilbo Baggins', 'Nickname':'bilbo', 'Race':'Hobbit', 'Origin':'The Shire', 'Attack':2, 'Defense':1 } );

let frodo = new createCharacter ( { 'Name':'Frodo Baggins', 'Nickname':'frodo', 'Race':'Hobbit', 'Origin':'The Shire', 'Attack':3, 'Defense':2 } );

let aragorn = new createCharacter ( { 'Name':'Aragorn son of Arathorn', 'Nickname':'aragorn', 'Race':'Man', 'Origin':'Dunnedain', 'Attack':6, 'Defense':8 } );

let legolas = new createCharacter ( { 'Name':'Legolas', 'Nickname':'legolas', 'Race':'Elf', 'Origin':'Woodland Realm', 'Attack':8, 'Defense':5 } );

let arwen = new createCharacter ( { 'Name':'Arwen Undomiel', 'Nickname':'arwen', 'Race':'Half-Elf', 'Origin':'Rivendell', 'Attack':6, 'Defense':4 } );

// Creation of arrays for as yet misc. functions.
let characterArray = [];

function makeCharacterArray () {

  characterArray.push ( gandalf );

  characterArray.push ( bilbo );

  characterArray.push ( frodo );

  characterArray.push ( aragorn );

  characterArray.push ( legolas );

  characterArray.push ( arwen );

}

makeCharacterArray ();

let hobbitArray = [];

function makeHobbitArray () {

  characterArray.filter ( ( item ) => {

    if ( item.Race == 'Hobbit' ) hobbitArray.push ( item );

  });

}

makeHobbitArray ();

let attackValueArray = [];

function makeAttackValueArray () {

  attackValueArray.filter ( ( item ) => {

    if ( item.Attack > 5 ) attackValueArray.push ( item );

  });

}

makeAttackValueArray ();

// Add a weapon to a character

function addWeapon () {

  characterArray.forEach ( ( item ) => {

    if ( item.Name == 'Gandalf the White' ) item.Weapon = 'Wizard Staff';
    if ( item.Name == 'Bilbo Baggins' ) item.Weapon = 'The One Ring';
    if ( item.Name == 'Frodo Baggins' ) item.Weapon = 'String and Barrow Blade';
    if ( item.Name == 'Aragorn son of Arathorn' ) item.Weapon = 'Anduril';
    if ( item.Name == 'Legolas' ) item.Weapon = 'Bow and Arrow';
    if ( item.Name == 'Arwen Undomiel' ) item.Weapon = 'Hadhafang';

  });
}

addWeapon ();

// Log info:

characterArray.forEach ( ( item ) => {

  console.log ( item.Name );
  console.log ( item.Nickname );
  console.log ( item.Race );
  console.log ( item.Origin );
  console.log ( item.Weapon );
  console.log ( item.Attack );
  console.log ( item.Defense );

  item.Describe ( item.Describe )

  /*
  
  ** This is functional but as you can see the abover line is a much easier call.
  ** although the below would be useful as a search function if their were many 
  ** array elements and you needed to find a specific one.
  
  characterArray.find ( ( item ) => {

    if ( item.Name == 'Aragorn son of Arathorn' ) item.Describe ( aragorn )

  });
  
  */
  
  item.evaluateFight ( bilbo )

  console.log ( '\n' );

});


/*

MIKI'S SOLUTION TO #7

*/

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe () {
      return(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight(opponent) {
      return `Your opponent takes ${this.attack - opponent.defense} and you receive ${this.defense - opponent.defense}`
    }
  }
}

const gandalf = createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6)
const opponent = createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1)
console.log(gandalf.evaluateFight(opponent));

let characters = [
  createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6),
  createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
  createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
  createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 10, 10)
];

let match = characters.find(function(attr) {
  for (let x in attr) {
    if (attr[x] == "aragorn") {
      return attr;
    }
  }
})

console.log(match);
console.log(match.describe());

let hobbit = characters.filter(function(attr) {
  return attr.race == "Hobbit";
})

console.log(hobbit);

let attackAboveFive = characters.filter(function(attr) {
  return attr.attack > 5;
})

console.log(attackAboveFive);

function createEquippedCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe () {
      return(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
    },
    evaluateFight(opponent) {
      return `Your opponent takes ${this.attack - opponent.defense} and you receive ${this.defense - opponent.defense}`
    }
  }
}

let equippedCharacter = [
  createEquippedCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6, "A Wizard Staff"),
  createEquippedCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1, "The Ring"),
  createEquippedCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2, "String and Barrow Blade"),
  createEquippedCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8, "Anduril"),
  createEquippedCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5, "Bow and Arrow"),
  createEquippedCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 10, 10, "Hadhafang")
];

/*

8.
Write a function findOne() that takes in the following two arguments:

arr - array of Heroes objects to search through
query - object with one or more key/value pairs that must exactly match the target Hero
The first matching result should be returned even if multiple match. If a match isn't found, return null

*/

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
  
  function findOne(arr, query) {
    for(let i = 0; i < arr.length; i++) {
      let count = 0;
      for(let key in query){
        if(key in arr[i] && arr[i][key] === query[key]){
          count ++;
        }
      }
      if(count === Object.keys(query).length) {
        return arr[i];
      }
    }
    return null;
  }
  
  let query = {squad: 'Justice League'};
  console.log(findOne(HEROES, query));

  /*

8a. BONUS II: A Database Method
Let's create a fake database in memory with the same dataset:

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  }
};
Add a method to Database called findOne and have it behave the same as the findOne function above. However, instead of referencing a HEROES array in the global scope, it should pull from the store in the Database. HINT: You'll want to use this for this...

The usage should be:

Database.findOne({ id: 2 });
=> { id: 2, name: 'Iron Man', squad: 'Avengers' }

*/

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne(query) {
    for(let i = 0; i < this.store.heroes.length; i++) {
      let count = 0;
      for(let key in query){
        if(key in this.store.heroes[i] && this.store.heroes[i][key] === query[key]){
          count ++;
        }
      }
      if(count === Object.keys(query).length) {
        return this.store.heroes[i];
      }
    }
    return null;
  }
};

console.log(Database.findOne({id:2}))