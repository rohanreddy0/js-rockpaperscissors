// Initialise Scores
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

// Define Results List
let results_list = document.querySelector("#results-list");

// Game Functions
function getComputerChoice() {
    const randomNo = Math.random();
    if (randomNo <= 0.333) {
        console.log("Computer chose: rock")
        return "rock";
    } else if (randomNo > 0.333 && randomNo <= 0.666) {
        console.log("Computer chose: paper")
        return "paper";
    } else {
        console.log("Computer chose: scissors")
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    roundCount++;
    console.log(roundCount);

    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        return "It is a draw !";
    }

    // Rock - Paper
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Computer wins - paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win - paper beats rock";
    }

    // Rock - Scissors
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win - rock beats scissors";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Computer wins - rock beats scissors";
    }

    // Paper-Scissors
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Computer wins - scissors beats paper";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win - scissors beats paper";
    }


}

function addResult () {

    const result = document.createElement('li');
    result.textContent = `Round ${roundCount}: You: ${humanScore} | Computer: ${computerScore}`;
    results_list.appendChild(result);
}

function decideWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "You win !!!";
    } else if (computerScore > humanScore) {
        return "Computer wins";
    } else {
        return "It is a draw !";
    }
}

// Define buttons
let button_selections = document.querySelector("#button-selections");

// Event Listener
button_selections.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "button-rock":
            console.log("rock");
            playRound("rock", getComputerChoice());
            addResult();
            break;
        case "button-paper":
            console.log("paper");
            playRound("paper", getComputerChoice());
            addResult();
            break;
        case "button-scissors":
            console.log("scissors");
            playRound("scissors", getComputerChoice());
            addResult();
            break;
    }
});


