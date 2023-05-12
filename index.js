//ONLY ODDS ------------------------------------------------------------------------------------------------------------------------------

let numbers1 = [2, 4, 6, 8, 11, 20, 15, 22];
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers3 = [70, 42, 55, 81, 21, 91, 34];
let numbers4 = [2, 4, 6, 8, 10, 11, 12];

function oddSelector(arr) {
    let oddsArray = [];
    //create for loop to itirate through elements
    for ( let i = 0; i < arr.length; i++) {
        //apply conditional to filter through numbers
        if (arr[i] % 2 !== 0) {
            //push values to the array so they are entered in the end
            oddsArray.push(arr[i]);
        }
    }

    console.log(oddsArray);
}

oddSelector(numbers1);
oddSelector(numbers2);
oddSelector(numbers3);
oddSelector(numbers4);


//VOWEL VS. CONSONANT ------------------------------------------------------------------------------------------------------------------------------

str1 = "hello";
str2 = "ukulele";
str3 = "awesome";
str4 = "onomonopia";
str5 = "textbook";

function letterTypeCounter(str) {
    //convert string into an array
    let arr = str.split("");
    //create vowels variable as reference
    let vowels = "aeiuo";
    //create count variables for both vowels and consonants
    let vowelCount = 0;
    let consonantCount = 0;
    //create for loop to itirate through 'arrayed' word 
    for (let i = 0; i < arr.length; i++) {
        //verify if the vowels variable has that element, if so add to vowel counter
        if (vowels.includes(arr[i])) {
            vowelCount++;
            //if not vowel, increment consonant counter
        } else {
            consonantCount++;
        }
    }

    console.log(`${str} has ${consonantCount} consonants and ${vowelCount} vowels`);
}

letterTypeCounter(str1);
letterTypeCounter(str2);
letterTypeCounter(str3);
letterTypeCounter(str4);
letterTypeCounter(str5);


//REVERSE ARRAY ------------------------------------------------------------------------------------------------------------------------------

let arr1 = [1, 2, 3];
let arr2 = [1, 3, 5, 7, 9, 11];
let arr3 = [20, 50, 30, 60, 200];
let arr4 = [1, -1, 2, -3, 5, -8, 13];

//I'm guessing you don't want me to use: console.log(arr.reverse());

function arrayReverser(arr) {
    //create new empty array variable to reorder elements
    let newArr = [];
    //create for loop to iterate 
    for (let i = 0; i < arr.length; i++) {
        //place values from old array in the front of new array elements to invert the order
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}

arrayReverser(arr1);
arrayReverser(arr2);
arrayReverser(arr3);
arrayReverser(arr4);


//FIZZBUZZ ------------------------------------------------------------------------------------------------------------------------------

function fizzBuzz() {
    //create empty array variable to allow the new values to be added to it
    let arr = [];
    //create a for loop that goes from 1-100 
    for (let i = 1; i <= 100; i++) {
        //verify the values through conditions prioritizing more complex and selective ones and push correct values into the array
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            //if none of the conditions are met, have the original number go in the array
            arr.push(i);
        }

    }

    console.log(arr);
}

fizzBuzz();