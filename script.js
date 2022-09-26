'use strict';

let secretNumber, score;
const resetNumber = function(){
    score = 20;
    secretNumber= Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.color = '#333';
    document.querySelector('.number').textContent = '?';
}

resetNumber();
// let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(e){
    const guess = Number( document.querySelector('.guess').value );
    let color = guess === secretNumber ? '#60b347':'#9d0208';
    //When there is no input
    if(!guess){
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '🛑 No Number!';
    }else if(guess === secretNumber){
        //When Player winds
        if(score > 0){
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            if( highScore < score){
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.number').style.color = color;
            document.querySelector('body').style.backgroundColor = color;
        }
    }else if(guess !== secretNumber){
        if(score > 1 ){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        }else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.guess').disabled = true;
            document.querySelector('body').style.backgroundColor = color;
            document.querySelector('.number').style.color = color;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(e){
    resetNumber();
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').value = '';
});