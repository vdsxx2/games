'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10; 

document.querySelector('.guess').value = 14;

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    

        // no number
    if(!guess) {    
        // document.querySelector('.message').textContent = 'No number! ⛔';
        displayMessage('No number! ⛔')

        // player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';

        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#2e8b57';
    
        document.querySelector('.number').style.width = '30rem';


        // setting the highscore

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }

        // when the guess is wrong
        } else if (guess !== secretNumber) {
        
            if(score > 1) {
                // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

                score--;
                document.querySelector('.score').textContent = score; 
            } else {
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.number').style.width = '30rem';
                // document.querySelector('.message').textContent = 'You lost the game 😓'; 

                displayMessage('You lost the game 😓');
                document.querySelector('body').style.backgroundColor = '#c61a09';
                document.querySelector('.score').textContent = 0; 
            }

    
            // guess is too high
    // } else if (guess > secretNumber) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score; 
    //     } else {
    //         document.querySelector('.number').textContent = secretNumber;
    //         document.querySelector('.number').style.width = '30rem';
    //         document.querySelector('.message').textContent = 'You lost the game 😓'; 
    //         document.querySelector('body').style.backgroundColor = '#c61a09';
    //         document.querySelector('.score').textContent = 0; 
    //     } 

    //     // guess is too low
    // } else if (guess < secretNumber) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score; 
    //     } else {
    //         document.querySelector('.number').textContent = secretNumber;
    //         document.querySelector('.number').style.width = '30rem';
    //         document.querySelector('.message').textContent = 'You lost the game 😓'; 
    //         document.querySelector('body').style.backgroundColor = '#c61a09';
    //         document.querySelector('.score').textContent = 0; 
    //     } 
        
        
    }
});

//////////////////////////////////
// Coding Challenge #1

document.querySelector('.again').addEventListener('click',function(){

    score = 20;

    secretNumber = Math.trunc(Math.random() * 100) + 1;    
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.number').style.width = '15rem';



});
