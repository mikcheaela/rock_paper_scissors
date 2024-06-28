const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
let humanScore = 0;
let computerScore = 0;

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener("click", () => {

    if (humanScore >= 5 || computerScore >= 5){
        score.textContent = getFinalScore();
        message.textContent = "";
    } else{
        message.textContent = playRound("rock", getComputerChoice());
        score.textContent = getCurrentScore();
    }
    

});

paper.addEventListener("click", () => {

    if (humanScore >= 5 || computerScore >= 5){
        score.textContent = getFinalScore();
        message.textContent = "";
    } else{
        message.textContent = playRound("paper", getComputerChoice());
        score.textContent = getCurrentScore();
    }
    
    
   

});

scissors.addEventListener("click", () => {
    if (humanScore >= 5 || computerScore >= 5){
        score.textContent = getFinalScore();
        message.textContent = "";
    } else{
        message.textContent = playRound("scissors", getComputerChoice());
        score.textContent = getCurrentScore();
    }
   

});




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

function getCurrentScore(){
    return (
`You: ${humanScore} 
CPU: ${computerScore}`);
}

function getFinalScore(){
    return (
    `Game Over! 
You: ${humanScore}
CPU: ${computerScore}`);
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return `Tie game! You both chose ${humanChoice}.`;
    } else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            humanScore++;
            return "You win! Rock beats scissors.";
        } else{
            computerScore++;
            return "You lose! Paper beats rock.";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore++;
            return "You win! Paper beats rock.";
        } else{
            computerScore++;
            return "You lose! Scissors beats paper.";
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "paper"){
            humanScore++;
            return "You win! Scissors beats paper.";
        } else{
            computerScore++;
            return "You lose! Rock beats scissors.";
        }
    }
}

function calcWinner(){
    if (humanScore > computerScore){
        return `You win! You beat the computer ${humanScore}-${computerScore}`;
    } else if (humanScore < computerScore){
        return `You lose! The computer beat you ${computerScore}-${humanScore}`;
    } else{
        return `Tie game! You tied the computer ${humanScore}-${computerScore}`;
    }
}

// function playGame(){

//     //score variables
//     let humanScore = 0;
//     let computerScore = 0;

//     //Checks if human beats computer, and increments their respective scores
//     function playRound(humanChoice, computerChoice){
//         if (humanChoice === computerChoice){
//             console.log(`Tie game! You both chose ${humanChoice}.`);
//         } else if (humanChoice === "rock"){
//             if (computerChoice === "scissors"){
//                 humanScore++;
//                 console.log("You win! Rock beats scissors.");
//             } else{
//                 computerScore++;
//                 console.log("You lose! Paper beats rock.");
//             }
//         } else if (humanChoice === "paper"){
//             if (computerChoice === "rock"){
//                 humanScore++;
//                 console.log("You win! Paper beats rock.");
//             } else{
//                 computerScore++;
//                 console.log("You lose! Scissors beats paper.");
//             }
//         } else if (humanChoice === "scissors"){
//             if (computerChoice === "paper"){
//                 humanScore++;
//                 console.log("You win! Scissors beats paper.");
//             } else{
//                 computerScore++;
//                 console.log("You lose! Rock beats scissors.");
//             }
//         }
//     }

    //Plays 5 rounds of rock paper scissors
    // for (let i = 1; i <= 5; i++){
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

// }

// playGame();