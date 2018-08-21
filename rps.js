// Need a scoring table
// user clicks on an image
// display user choice
// user choice gets stored
// computer makes a random choice (array)
// display computer choice
// try to make image appear when computer makes a choice (bonus)
// record the answers (keep track of wins, losses, and ties)
// display the winner

var userChoice;
var compChoice;
var choices = ['rock', 'paper', 'scissors']
var btns = document.getElementsByClassName('btn')
var score = {win: 0, lose: 0, tie: 0 }
var $wins = document.getElementById('wins')
var $losses = document.getElementById('losses')
var $ties = document.getElementById('ties')

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleEvent)
}

function handleEvent() {
  userChoice = this.innerText
  compChoice = choices[Math.floor(Math.random() * choices.length )]
  console.log(choices)
  //list.append(compChoice)
  user_choice()
}

function user_choice() {
  if (userChoice === 'rock') {
    choice_rock()
  } else if (userChoice === 'paper') {
    choice_paper()
  } else if (userChoice === 'scissors') {
    choice_scissors()
  } 
}

function choice_rock() {
  if (compChoice === 'rock') {
    console.log('Tie')
    // add point to tie
  } else if (compChoice === 'paper') {
    console.log('You Lose')
  } else if (compChoice === 'scissors') {
    console.log('You Win')
  }
}

function choice_paper() {
  if (compChoice === 'rock') {
    console.log('You Win')
  } else if (compChoice === 'paper') {
    console.log('Tie')
  } else if (compChoice === 'scissors') {
    console.log('You Loose')
  }
}

function choice_scissors() {
  if (compChoice === 'rock') {
    console.log('You Loose')
  } else if (compChoice === 'paper') {
    console.log('You Win')
  } else if (compChoice === 'scissors') {
    console.log('Tie')
  }
}

