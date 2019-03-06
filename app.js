'use strict';

/*
The objective is to turn "About-Me" into an job seeker profile structured as an
interactive quiz.  The quiz will have 7 questions that will provide potential employers
with a personal yet profession impression of me.
Technical requirements for this iteration:
Add atleast 1 ordered and 1 unorder list
Do not write functions in JavaScript (not sure about what this means?)
6th question a guessing game with one correct answer and the 7th a game with multiple
correct answers.
*/
// TO DO: Incorporate Arrays
// TO DO: Make the guessing game incorporate a random number as the correct answer
// TO DO: Move the guessing game to a seperate HTML
// TODO:  Add code to inform user of an out of bounds response and take them back to the question again

// Declare a variable for laptop type response
var laptopTypeResponse = prompt('Do I use a Windows/Linux machine for class?');
console.log(laptopTypeResponse);

// Collect response and alert
if (laptopTypeResponse.toUpperCase() === 'N' || laptopTypeResponse.toUpperCase() === 'NO'){
    console.log('That\'s correct, I have a Mac!');
} else if (laptopTypeResponse.toUpperCase() === 'Y' || laptopTypeResponse.toUpperCase() === 'YES'){
    console.log('No, I use a Mac in class.');
} 

// Repeat the above functions for priorCareer, eyeColor, overseasExp, correctName
var priorCareerResponse = prompt('Did I used to work in finance?');
console.log(priorCareerResponse);

if (priorCareerResponse.toUpperCase() === 'N' || priorCareerResponse.toUpperCase() === 'NO'){
    console.log('Sorry, I did used to work in finance');
} else if (priorCareerResponse.toUpperCase() === 'Y' || priorCareerResponse.toUpperCase() === 'YES'){
    console.log('Yes, my prior career was in finance');
}

var eyeColorResponse = prompt('Do I have blue eyes?');
    console.log(eyeColorResponse);

if (eyeColorResponse.toUpperCase() === 'N' || eyeColorResponse.toUpperCase() === 'NO'){
    console.log('That\'s right, I have brown eyes');
} else if (eyeColorResponse.toUpperCase() === 'Y' || eyeColorResponse.toUpperCase() === 'YES'){
    console.log('I have brown eyes.');
}

var overseasExp = prompt('Did I used to work overseas?');
    console.log(overseasExp);

if (overseasExp.toUpperCase() === 'N' || overseasExp.toUpperCase() === 'NO'){
    console.log('Actually, I worked in Hong Kong for three years.');
} else if (overseasExp.toUpperCase() === 'Y' || overseasExp.toUpperCase() === 'YES'){
    console.log('Yes, I was in Hong Kong for three years');
}

var correctName = prompt('Is my name Richard?');
    console.log(correctName);

if (correctName.toUpperCase() === 'N' || correctName.toUpperCase() === 'NO'){
    console.log('Oh, I thought you would have guessed who I was after 4 questions.');
} else if (correctName.toUpperCase() === 'Y' || correctName.toUpperCase() === 'YES'){
    console.log('Hi, I\'m Richard, great to meet you!');
}


