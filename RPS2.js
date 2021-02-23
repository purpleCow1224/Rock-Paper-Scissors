var userInput= 'rock';
const getUserChoice= function (userInput) {
  userInput = userInput.toLowerCase()
  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('invalid move!!')
  }
}; 

function getComputerChoice() {
  let random= Math.floor(Math.random() * 3)
  
  if(random === 0) {
    return 'rock'
  } else if(random === 1) {
    return 'paper'
  } else if(random === 2) {
    return 'scissors'
  }
};

function determineWinner (userChoice, computerChoice) {
  if(userChoice === computerChoice) {
    return 'it is a draw. Play again!'
  } else if(userChoice === 'rock' && computerChoice === 'scissors') {
    return 'rock wins. Good job'
  } else if(userChoice === 'paper' && computerChoice === 'rock') {
    return 'paper wins. Good job'
  } else if(userChoice === 'scissors' && computerChoice === 'paper') {
    return 'scissors wins. Good job'
  }
  
 if(userChoice === 'rock' && computerChoice === 'paper') {
    return 'paper wins. try again'
  } else if(userChoice === 'paper' && computerChoice === 'scissors') {
    return 'scissors wins. try again'
  } else if(userChoice === 'scissors' && computerChoice === 'rock') {
    return 'rock wins. try again'
  }
  
  if(userChoice === 'bomb') {
    return 'bomb always wins. good jobs'
  }
  
};

function playGame() {
  userChoice= getUserChoice('bomb');
  computerChoice= getComputerChoice();
  
console.log('You threw: ' + userChoice);
console.log('The computer threw:' + computerChoice);  
  
  console.log(determineWinner(userChoice, computerChoice))
  
}

console.log(playGame())