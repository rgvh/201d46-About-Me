'use strict';

// Declare a variable for laptop type response
var laptopTypeResponse = prompt('Do I use a Windows/Linux machine for class?');
console.log(laptopTypeResponse);

// Collect response and alert
if (laptopTypeResponse  === 'N' || laptopTypeResponse === 'No'){
console.log('That\'s correct, I have a Mac!');
} else if (laptopTypeResponse === 'Y' || laptopTypeResponse === 'Yes'){
console.log('No, I use a Mac in class.');
}

var priorCareerResponse = prompt('Did I used to work in finance?');
console.log(priorCareerResponse);

if (priorCareerResponse      === 'N' || priorCareerResponse === 'No'){
console.log('Sorry, I did used to work in finance');
} else if (priorCareerResponse === 'Y' || priorCareerResponse === 'Yes'){
console.log('Yes, my prior career was in finance');
}



//var priorCareerResponse
//   } else if (favorite_color === 'maybe'){
//     alert('well isnt that cheeky');
//   } else {
//     alert('no way');
//   }