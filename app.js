'use strict';

/*
The objective is to turn "About-Me" into an job seeker profile structured as an
interactive quiz.  The quiz will have 7 questions that will provide potential employers
with a personal yet profession impression of me.
Technical requirements for this iteration:
-Add at least 1 ordered and 1 unordered list
-Do not write functions in JavaScript (not sure about what this means?)
-6th question a guessing game with one correct answer and the 7th a game with multiple
correct answers.
*/
// TODO: Incorporate Arrays
// TODO: Make the guessing game incorporate a random number as the correct answer
// TODO: Move the guessing game to a seperate HTML
// TODO:  Add code to inform user of an out of bounds response and take them back to the question again

// 5 Yes or No questions that provide some information about me
// Declare a variable for coding experience
alert('Welcome to my quiz! If you\'ve seen my LinkedIn profile or resume, this might be easy.');

// Q1 asking about my coding experience

function question1 (){


var codingExperience = prompt('Prior to CodeFellows, did I have any coding experience?');
console.log(codingExperience);

var lowerCodingExperience = codingExperience.toLowerCase();

//  the code below resulted in an infite loop
// while (lowerCodingExperience !== 'y' || lowerCodingExperience !== 'yes' || lowerCodingExperience !== 'n'|| lowerCodingExperience !== 'no'){
//     alert('Please answer yes or no.');
// }

if (lowerCodingExperience === 'yes' || lowerCodingExperience === 'y' ){
    console.log('Aside from a few spreadsheet macros and some SQL, this is new to me.');
} else if (lowerCodingExperience === 'no' || lowerCodingExperience === 'n'){
    console.log('Yes, I\'m new to this, but its fun!');
}
 
}

question1();

// Q2 asking about my prior career

var priorField = prompt('Did I used to work in finance?');
console.log(priorField);

var lowerPriorField = priorField.toLowerCase()

if(lowerPriorField === 'yes' || lowerPriorField === 'y' ){
    console.log('Yes, my prior career was in finance.');
} else if(lowerPriorField === 'no' || lowerPriorField === 'n'){
    console.log('Sorry, but I worked in finance for many years.');
}

// Q3 asking about my overseas experience

var overseasExp = prompt('Have I worked overseas?');
console.log(priorField);

var lowerOverseasExp = overseasExp.toLowerCase();
console.log('exp: ' + lowerOverseasExp);

if(lowerOverseasExp === 'yes' || lowerOverseasExp === 'y' ){
    console.log('Correct, I was in Hong Kong for three years.');
} else if(lowerOverseasExp === 'no' || lowerOverseasExp === 'n'){
    console.log('Actually, I worked in Hong Kong for three years.');
}

// Q4 asking about product management experience

var productMgmt = prompt('Do I have product management experience?');
console.log(productMgmt);

var lowerProductMgmt = productMgmt.toLowerCase();

if(lowerProductMgmt === 'yes' || lowerProductMgmt === 'y' ){
    console.log('I\'ve had roles in product management and product development.');
} else if(lowerProductMgmt === 'no' || lowerProductMgmt === 'n'){
    console.log('While I didn\'t have a title of PM, it was my functional role.');
}

// Q5 asking about startup interest

var startupInterest = prompt('Am I interested in startups?');
console.log(startupInterest);

var lowerStartupInterest = startupInterest.toLowerCase();

if(lowerStartupInterest === 'yes' || lowerStartupInterest === 'y' ){
    console.log('Correct, I really like working with startups.');
} else if(lowerStartupInterest === 'no' || lowerStartupInterest === 'n'){
    console.log('Actually, I\'ve been working with startups for the last three years.');
}

// Q6  guesses
alert('Now you have four guesses to get to know something about me.');

var numGuesses = 0;
var yearsWorked = prompt('How many years did I live in New York?');

while ((yearsWorked > 13 || yearsWorked <13) && numGuesses <4){
    ++numGuesses
    if(yearsWorked > 13){
    alert('Not that many. Guess again.');
    console.log(yearsWorked);
    }
    if (yearsWorked < 13){
    alert('It was longer than that. Guess again.');
    console.log(yearsWorked);
    }
    // numGuesses++
    prompt('How many years did I live in New York?');
}

if(yearsWorked === 13){
console.log('You guess right!');
if(yearsWorked !== 13);
console.log('Better luck next time.');
}
/* Notes on Q6 status: Loop is currently not functioning correctly: var yearsWorked given in prompt is not getting stored therefore
the conditional if statements on the value may not be correct after first attempt.   Ideas to try: move things around, create an array
and pop the last value (this could also then be used to limit number of guesses using array length).
*/

// Q7 select from an array

var states = ["Washington", "New Jersey", "New York", "DC"];



