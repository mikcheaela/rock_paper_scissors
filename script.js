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
    console.log(choice);
}

console.log(getComputerChoice());