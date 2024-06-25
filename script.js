'use strict';
/*
// Read the content of the element before
console.log(document.querySelector('.message').textContent);

// Set a property from an element to another value
document.querySelector('.message').textContent = 'Correct Number !';

// Read the content of the element after
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When the output is negative
  } else if (guess < 0) {
    //document.querySelector('.message').textContent = '⛔️ Not between 1 and 20!';
    displayMessage('⛔️ Not between 1 and 20!');

    // When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess > 0 && guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
    }
  }
});

/*
    // When guess too low
  } else if (guess > 0 && guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }

    // When guess too high
  } else if (guess > 0 && guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// Reset the game when pressing on 'again' button

document.querySelector('.again').addEventListener('click', function () {
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  // reset secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  // restore initial conditions of the message, number, score and guess
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// NOTE
// all "//document.querySelector('.message').textContent =" are commented out and replaced with the function displayMessage()
