//randomly chooses rock paper or scissors
function getComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    let choice;
    switch(x){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

//Returns the user's choice b/w rock paper or scissors
function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else{
        return "invalid input";
    }
}

function playGame(){

    //score variables
    let humanScore = 0;
    let computerScore = 0;

    //Checks if human beats computer, and increments their respective scores
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log(`Tie game! You both chose ${humanChoice}.`);
        } else if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                humanScore++;
                console.log("You win! Rock beats scissors.");
            } else{
                computerScore++;
                console.log("You lose! Paper beats rock.");
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                humanScore++;
                console.log("You win! Paper beats rock.");
            } else{
                computerScore++;
                console.log("You lose! Scissors beats paper.");
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
                humanScore++;
                console.log("You win! Scissors beats paper.");
            } else{
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            }
        }
    }

    //Plays 5 rounds of rock paper scissors
    for (let i = 1; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore){
        console.log(`You win! You beat the computer ${humanScore}-${computerScore}`);
    } else if (humanScore < computerScore){
        console.log(`You lose! The computer beat you ${computerScore}-${humanScore}`);
    } else{
        console.log(`Tie game! You tied the computer ${humanScore}-${computerScore}`);
    }
}

playGame();