/* eslint-disable indent */
/* eslint-disable strict */
/*

Object drills

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

let character = {

  { Name:'Gandalf the White', 'Nickname':'gandalf', 'Race':'Wizard', 'Origin':'Middle Earth', 'Attack':'10', 'Defense':'6' },

  { Name:'Bilbo Baggins', 'Nickname':'bilbo', 'Race':'Hobbit', 'Origin':'The Shire', 'Attack':'2', 'Defense':'1' },

  { Name:'Frodo Baggins', 'Nickname':'frodo', 'Race':'Hobbit', 'Origin':'The Shire', 'Attack':'3', 'Defense':'2' },

  { Name:'Aragorn son of Arathorn', 'Nickname':'aragorn', 'Race':'Man', 'Origin':'Dunnedain', 'Attack':'6', 'Defense':'8' },

  { Name:'Legolas', 'Nickname':'legolas', 'Race':'Elf', 'Origin':'Woodland Realm', 'Attack':'8', 'Defense':'5' },

};

function createCharacter ( arr ) {
  console.log( '***createCharacter start\n' );

  //let describe () => { `${ name } is a ${ race } from ${ origin }`; };
      
  //let evaluateFight = ( characterIn ) => { `Your opponent takes ${ x } damage and you receive ${ y } damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.`; };

  for ( const character in arr ) {
    console.log ( `character.Name == ${ character.Name }` );
    console.log ( `character.Nickname == ${ character.Nickname }` );
    console.log ( `character.Race == ${ character.Race }` );
    console.log ( `character.Origin == ${ character.Origin }` );
    console.log ( `character.Attack == ${ character.Attack }` );
    console.log ( `character.Defense == ${ character.Defense }` );
  }  
    //console.log ( `${ item [ index ]}\n` );
  
    /*let character = {

      name: item [ index ],

      Nickname: item [ index ],

      Race: item [ index ],

      Origin: item [ index ],

      Attack: item [ index ],
                    
      Defense: item [ index ],

    };*/
                
  //console.log ( character );            

  });

}

createCharacter ( characterInfo );
