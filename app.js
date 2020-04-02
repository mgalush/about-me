'use strict';

var totalScore = 0;

// intro question
// ask user what their name is
let userName = prompt('What\'s your name?');
while (!userName) {
  userName = prompt('Let\'s try that again... what\'s your name?');
  //console.log('Let\'s try that again... What\'s your name?')
}

// question one
// ask user if they know what my name is
let isMyName = prompt(
  'Hi ' + userName + '! Is my name Melissa?'
).toLowerCase();
if (isMyName === 'yes') {
  // console.log(isMyName + ' my name is Melissa')
  alert('Yup!  That\'s my name.');
  totalScore++;
} else {
  // console.log('Actually, you\'re wrong, my name is Melissa. ')
  alert('Actually, you\'re wrong.  My name is Melissa');
}

// question two
// ask if I just moved from NC
let didIJustMove = prompt('Did I just move from NC?').toLowerCase();
if (didIJustMove === 'yes') {
  // console.log('You\'re correct!  I just moved from NC')
  alert('You\'re correct!  I just moved from NC');
  totalScore++;
} else {
  //  console.log('I did just move from NC')
  alert('I did just move from NC');
}

// question three
// ask if my last job was as a paralegal
let whatWasMyJob = prompt('Was my last job as a paralegal?').toLowerCase();
if (whatWasMyJob === 'yes') {
  alert('I was a paralegal.  So exciting...');
  // console.log('I was a paralegal.  So exciting....')
  totalScore++;
} else {
  alert('Incorrect.  I was a paralegal.  So exciting...');
  // console.log('Incorrect.  I was a paralegal.  So exciting...')
}

// question four
// ask if my biggest passions are psychology and philosophy
let myBiggestPassions = prompt(
  'Are my biggest passions psychology and philosophy?'
).toLowerCase;
if (myBiggestPassions === 'yes') {
  alert('Obviouslyyyy my biggest passions are psychology and philosophy');
  // console.log('Obviouslyyyy my biggest passions are psychology and philosophy')
  totalScore++;
} else {
  alert('I\'m obsessed with all things psychology and philsophy');
  //console.log('I\'m obsessed with all things psychology and philsophy')
}

// question five
//ask if my favorite place to be is in nature
let myFavPlace = prompt('Is my favorite place to be in nature?').toLowerCase();
if (myFavPlace === 'yes') {
  alert('Correct!  I feel so at peace in nature.');
  //console.log('Correct!  I feel so at peace in nature.')
  totalScore++;
} else {
  alert('My favorite place to be is definitely in nature');
  //console.log('My favorite place to be is definitely in nature')
}

// question six
// ask how many dogs I have
let guessCountDogs = 0;
while (guessCountDogs < 4 && howManyDogs != 3) {
  var howManyDogs = prompt('How many dogs do I have?');
  if (howManyDogs == 3) {
    alert('Good job!  I have 3 dogs');
    //console.log('Good job! I do have 3 dogs.')
    totalScore++;
  } else if (howManyDogs < 3) {
    alert('Too low!');
    // console.log('Too low!')
  } else if (howManyDogs > 3) {
    alert('Too high!');
    // console.log ('Too high!')
  } else {
    !howManyDogs;
    alert('Close!  I have 3 dogs');
    // console.log('Close! I have 3 dogs')
  }
  guessCountDogs++;
}

// question seven
// ask where I want to travel
let guessCountTravel = 0;
let whereIWantToTravelAnswer = [
  'iceland',
  'south africa',
  'costa rica',
  'australia',
  'new zealand',
  'thailand',
  'japan',
  'iceland',
  'banff',
  'austria'
];
let guessedCorrectPlace = false;
while (guessCountTravel < 6 && !guessedCorrectPlace) {
  let whereIWantToTravel = prompt('Where do I want to travel?').toLowerCase;
  if (whereIWantToTravelAnswer.indexOf(whereIWantToTravel) == -1) {
    guessedCorrectPlace = true;
    alert('Correct! I would love to travel to ' + whereIWantToTravelAnswer.toString());
    console.log('Correct! I would love to travel to ' + whereIWantToTravel);
    totalScore++;
  } else {
    alert('That wasn\'t on my list but I\'d still like to visit!');
    console.log('That wasn\'t on my list but I\'d still like to visit!');
    guessCountTravel++;
  }
}
// say bye and give user their score
let goodBye = alert('Thanks for taking my quiz! You scored a ' + totalScore + ' out of 10.. nice work! Bye ' + userName + '!');
