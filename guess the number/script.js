'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent= 'Correct Number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent= 10;

// document.querySelector('.guess').value= 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent= number;

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);//converting string to number
   console.log(guess, typeof guess);// 5 'number'

   if(!guess){
    document.querySelector('.message').textContent= '⛔No Number!';
   }
   else if(guess === number){
    document.querySelector('.message').textContent= 'Correct Number!';
   }
   else if(guess > number) {
    if(score>1){
    document.querySelector('.message').textContent= 'Too High';
    score--;
    document.querySelector('.score').textContent= score;
   }
else{
    document.querySelector('.message').textContent= 'Baby YOU lost the Game!';
    document.querySelector('.score').textContent = 0;
   }
}
   else if(guess < number){
    if(score>1){
    document.querySelector('.message').textContent= 'Too Low';
    score--;
    document.querySelector('.score').textContent= score;
   }
   else{
    document.querySelector('.message').textContent= 'YOU lost the Game!';
    document.querySelector('.score').textContent = 0;
   }
}
});