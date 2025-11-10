// two variables for the human and computer score

function playGame(){;
    let humanScore = 0;
    let computerScore = 0;

         function getComputerChoice(){
            const choices = ["rock", "paper", "scissors"];
            const random = Math.floor(Math.random() * choices.length); 
            return choices[random];
         }

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase(); // This translates the users input to lowercase, even if they use capitals.

    if (humanChoice === computerChoice) {
        console.log(`Its a tie!, human score, equals computer score`);
     } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Scores > human: ${humanScore}, computer: ${computerScore}`);  
    }

// Play 5 Rounds code
for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i}:`);
    playRound( humanChoice, computerChoice);
    } 

    // If statements to see whose the winner
if (humanScore > computerScore){
    console.log("Yay, you're the champion!");
} else if (computerScore > humanScore){
    console.log("The computer has won the game!");
} else {
    console.log("It's a tie, replay, the game to become champion!");
}


}
function getHumanChoice(){
    const choices = prompt("Enter Rock, Paper, or Scissors");
    return choices
}

playGame();

