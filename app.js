'use strict';

/*
The objective is to turn "About-Me" into an job seeker profile structured as an
interactive quiz.  The quiz will have 7 questions that will provide potential employers
with a personal yet profession impression of me.
Technical requirements for this iteration:
Add at least 1 ordered and 1 unordered list
Do not write functions in JavaScript (not sure about what this means?)
6th question a guessing game with one correct answer and the 7th a game with multiple
correct answers.
*/
// TODO: Incorporate Arrays
// TODO: Make the guessing game incorporate a random number as the correct answer
// TODO: Move the guessing game to a seperate HTML
// TODO:  Add code to inform user of an out of bounds response and take them back to the question again

// 5 Yes or No questions that provide some information about me
// Declare a variable for coding experience
alert('Welcome to my quiz! If you\'ve seen my LinkedIn profile or resume, this might be easy.')

var codingExperience = prompt('Prior to CodeFellows, did I have any coding experience?');
console.log(codingExperience);

var lowerCodingExperience = codingExperience.toLocaleLowerCase();
//  the code below resulted in an infite loop
// while (lowerCodingExperience !== 'y' || lowerCodingExperience !== 'yes' || lowerCodingExperience !== 'n'|| lowerCodingExperience !== 'no'){
//     alert('Please answer yes or no.');
// }
if (lowerCodingExperience === 'yes' || lowerCodingExperience === 'y' ){
    console.log('Aside from a few spreadsheet macros and some SQL, this is new to me.');
} else if (lowerCodingExperience === 'no' || lowerCodingExperience === 'n'){
    console.log('Yes, I\'m new to this, but its fun!');
}

var priorField = prompt('Did I used to work in finance?');
console.log(priorField);

var lowerPriorField = priorField.toLocaleLowerCase();

if(lowerPriorField === 'yes' || lowerPriorField === 'y' ){
    console.log('Yes, my prior career was in finance.');
} else if(lowerPriorField === 'no' || lowerPriorField === 'n'){
    console.log('Sorry, but I worked in finance for many years.');
}

var overseasExp = prompt('Have I worked overseas?');
console.log(priorField);

var lowerOverseasExp = overseasExp.toLocaleLowerCase();

if(lowerCodingExperience === 'yes' || lowerOverseasExp === 'y' ){
    console.log('Correct, I was in Hong Kong for three years');
} else if(lowerOverseasExp === 'no' || lowerOverseasExp === 'n'){
    console.log('Actually, I worked in Hong Kong for three years.');
}


// Repeat the above functions for overseasExp, correctName

// var eyeColorResponse = prompt('Do I have blue eyes?');
//     console.log(eyeColorResponse);

// if (eyeColorResponse.toUpperCase() === 'N' || eyeColorResponse.toUpperCase() === 'NO'){
//     console.log('That\'s right, I have brown eyes');
// } else if (eyeColorResponse.toUpperCase() === 'Y' || eyeColorResponse.toUpperCase() === 'YES'){
//     console.log('I have brown eyes.');
// }

// var overseasExp = prompt('Did I used to work overseas?');
//     console.log(overseasExp);

// if (overseasExp.toUpperCase() === 'N' || overseasExp.toUpperCase() === 'NO'){
//     console.log('Actually, I worked in Hong Kong for three years.');
// } else if (overseasExp.toUpperCase() === 'Y' || overseasExp.toUpperCase() === 'YES'){
//     console.log('Yes, I was in Hong Kong for three years');
// }

// var correctName = prompt('Is my name Richard?');
//     console.log(correctName);

// if (correctName.toUpperCase() === 'N' || correctName.toUpperCase() === 'NO'){
//     console.log('Oh, I thought you would have guessed who I was after 4 questions.');
// } else if (correctName.toUpperCase() === 'Y' || correctName.toUpperCase() === 'YES'){
//     console.log('Hi, I\'m Richard, great to meet you!');
// }


