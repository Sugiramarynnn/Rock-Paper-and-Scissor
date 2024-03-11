const getUserChoice= userInput =>{

    userInput = userInput.tolowercase();

    if(userInput==='rock'|| 'paper' ||scissor){
      return userInput;
}else{
    console.log('tere is error');
}
};

console.log(getUserChoice('Paper'));
console.log(getUserChoice('fork'));

 const getComputerChoice = Math.floor(Math.random()*3);
 
 switch (getComputerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
      case 3:
        return 'scissor';
        break; 
        default:
            return 'draw';
            break;
  }
  
  console.log(getComputerChoice());

  const determineWinner=(getUserChoice, getComputerChoice) =>{
    if(getUserChoice===getComputerChoice){
        return 'the game is a tie';
    }
     
    if(getUserChoice=== ' rock'){
        if (getComputerChoice=== 'paper') {
            return 'The computer won!';
          } else {
            return 'You won!';
          }
    }
    if (getUserChoice === 'paper') {
        if (getComputerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (getUserChoice === 'scissors') {
        if (getComputerChoice=== 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      
      
  }
  
  console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper')); 
console.log(determineWinner('paper', 'rock')); 

const playGame1 = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
 };
 
 playGame();



