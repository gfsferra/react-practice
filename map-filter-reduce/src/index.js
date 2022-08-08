
import emojipedia from './emojipedia';

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const mappedNumbers = numbers.map(function (x) {
    return x * 2;
}); // [6, 112, 4, 96, 10]

console.log(`Map -> ${mappedNumbers}`);


//Filter - Create a new array by keeping the items that return true.

const filteredNumbers = numbers.filter(function (num) {
    return num > 10;
})

console.log(`Filter -> ${filteredNumbers}`); // [56, 48]

//Reduce - Accumulate a value by doing something to each item in an array.

const reduceNumbers = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
}, 0); // 3 + 56 + 2 + 48 + 5 = 114

console.log(`Reduce -> ${reduceNumbers}`);

//Find - find the first item that matches from an array.

const findNumbers = numbers.find(function (num) {
    return num > 10;
}); // 56

console.log(`Find -> ${findNumbers}`);

//FindIndex - find the index of the first item that matches.

const findIndexNumbers = numbers.findIndex(function (num) {
    return num < 3;
}) // 2

console.log(`FindIndex -> ${findIndexNumbers}`);

// ============================ Challenge ============================ //

var meanings = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
});

console.log(`Challenge solution -> ${meanings}`);