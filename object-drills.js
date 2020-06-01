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

6. Cracking the code

Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. This means, instead of doing some kind of condition check like if (char === 'a'), you should use an object's key-value pair structure as the code translator.

Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

*/

/*

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
    };
}

*/

//console.log(decode(encodedWord));

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
        "z": " ",
    }
    return cipher[encodedWord[0]];
}

function decodeWords(string) {

    let split = string.split(" ");
    let chars = split.map(function(item) {
        return decode(item);
    })
    let decodedWord = chars.reduce(function(decodedWord, char) {
        return decodedWord += char;
    }, "")
    return decodedWord;
}

let string = "craft block argon meter bells brown croon droop";

console.log(decodeWords(string));

/*
8. BONUS: A Database Search

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
    let result;
    arr.forEach(function(item) {
        for (let x in item) {
            for (let y in query) {
                if (item[x] == query[y]) {
                    return item;
                }
            }
        }
    })
    return result;
}

console.log(findOne(HEROES, {id: 1}));

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