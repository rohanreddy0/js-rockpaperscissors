function getComputerChoice(){
    const randomNo = Math.random();
    if(randomNo <= 0.333){
        console.log("Computer chose: rock")
        return "rock";
    }
    else if (randomNo > 0.333 && randomNo <= 0.666){
        console.log("Computer chose: paper")
        return "paper";
    } else {
        console.log("Computer chose: scissors")
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    console.log(`You chose: ${humanChoice}`);
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        humanScore++; computerScore++;
        return "It is a draw !";
    }

    // Rock - Paper
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "Computer wins - paper beats rock";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win - paper beats rock";
    }

    // Rock - Scissors
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win - rock beats scissors";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "Computer wins - rock beats scissors";
    }

    // Paper-Scissors
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "Computer wins - scissors beats paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win - scissors beats paper";
    }
}

function decideWinner(humanScore, computerScore){
    if (humanScore > computerScore){
        return "You win !!!";
    } else if (computerScore > humanScore){
        return "Computer wins";
    } else {
        return "It is a draw !";
    }
}

function playGame(numRounds){
    for (let i = 0; i < numRounds; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log('\n');
        console.log(`The current score is: \nYou: ${humanScore}, Computer: ${computerScore}`);
        console.log('\n');
    }
    console.log('\n\n')
    console.log(decideWinner(humanScore, computerScore));
}

// Actual runtime code
let humanScore = 0;
let computerScore = 0;

numRounds = prompt("How many rounds ?");
console.log(`There are ${numRounds} Rounds\n`);

playGame(numRounds);