function getComputerChoice() {
    const elements = ["Rock", "Paper", "Scissor"];
    var outcome = Math.floor(Math.random() * elements.length);
    return elements[outcome];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose!";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissor"){
        return "You win!";
    }
    else if(playerSelection == "Rock" && computerSelection == "Rock"){
        return "Its a Tie!";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win!";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissor"){
        return "You lose!";
    }
    else if(playerSelection == "Paper" && computerSelection == "Paper"){
        return "Its a Tie!";
    }
    else if(playerSelection == "Scissor" && computerSelection == "Rock"){
        return "You lose!";
    }
    else if(playerSelection == "Scissor" && computerSelection == "Paper"){
        return "You win!";
    }
    else if(playerSelection == "Scissor" && computerSelection == "Scissor"){
        return "Its a Tie!";
    }
}


const computerSelection = getComputerChoice();

function game() {
    var pCounter = 0;
    var cCounter = 0;
    for(var i=0; i<20; i++) {
        var playerSelection = prompt("Make your move: ");
        playRound(playerSelection, computerSelection);
        if(playRound(playerSelection, computerSelection) == "You win!"){
            pCounter++;
            console.log(pCounter);
        }
        else if(playRound(playerSelection,computerSelection)=="You lose!"){
            cCounter++;
            console.log(cCounter);
        }
        else if(playRound(playerSelection,computerSelection)=="Its a Tie!" ){
            pCounter++;
            pCounter--; 
        }
        console.log(playRound(playerSelection, computerSelection));
        if(pCounter == 5){
            return "Congrats! Player Wins!";
            break;
        }
        else if(cCounter == 5){
            return "Computer wins! Better Luck Next Time";
            break;
        }
    }
}

console.log(game());