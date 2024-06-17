//when user inputs either rock, paper, or scissors
//randomly generate a number between 1 and 3 inclusive
//if number equals 1 (rock)
    //if user input was rock
        //return tie
    //else if user input was scissors
        //return win
    //else 
        //return loss
//else if number equals 2 (paper)
    //if user input was paper
        //return tie
    //else if user input was rock
        //return win
    //else 
        //return loss
//else
    //if user input was scissors
        //return tie
    //else if user input was paper
        //return win
    //else
        //return loss

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

//global score variables
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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);