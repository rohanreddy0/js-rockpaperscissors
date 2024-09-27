// Initialise Scores
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
let gameFinished = false;
let humanChoice = "";
let computerChoice = "";

// Define Results List
let results_list = document.querySelector("#results-list");

// Get number of rounds

let rounds_picker = document.querySelector("#num_rounds");
let numRounds = parseInt(rounds_picker.value);
rounds_picker.addEventListener("change", () => {
    numRounds = parseInt(rounds_picker.value);
})

// Game Functions
function getComputerChoice() {
    const randomNo = Math.random();
    if (randomNo <= 0.333) {
        computerChoice = "Rock";
        return "rock";
    } else if (randomNo > 0.333 && randomNo <= 0.666) {
        computerChoice = "Paper";
        return "paper";
    } else {
        computerChoice = "Scissors"
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
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

function addResult() {
    const result = document.createElement('li');
    result.textContent = `Round ${roundCount}: You: ${humanScore} | Computer: ${computerScore}`;
    results_list.appendChild(result);
}

// Display user and computer selections
outcome_container = document.querySelector("#outcome-container");
function displayOutcome() {
    const outcome = document.createElement("h2");
    outcome.classList.add("outcome");
    outcome.textContent = `You chose ${humanChoice}. Computer played ${computerChoice}`;
    outcome_container.innerHTML = "";
    outcome_container.appendChild(outcome);
}

// Function to decide and output the winner on game ending
function decideWinner() {
    const winner = document.createElement("li");
    winner.classList.add("winner-text");

    if (humanScore > computerScore) {
        winner.textContent = "You Win !";
        results_list.appendChild(winner);
    } else if (computerScore > humanScore) {
        winner.textContent = "Computer Wins !";
        results_list.appendChild(winner);
    } else {
        winner.textContent = "Draw !";
        results_list.appendChild(winner);
    }
}

// Function to display reset button on game ending
function showResetButton() {
    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-button");
    resetButton.id = "reset-button";
    resetButton.textContent = "Restart Game";
    if (gameFinished === true) {
        results_list.appendChild(resetButton);
    }
    resetButton.addEventListener("click", () => {
        results_list.innerHTML = "";
        outcome_container.innerHTML = "";
        button_selections.style.display = "flex";
        humanScore = 0;
        computerScore = 0;
        roundCount = 1;
    });
}

// Function to play a round
function playGame(humanChoice, rounds = numRounds) {
    gameFinished = false;
    playRound(humanChoice, getComputerChoice());
    displayOutcome();
    addResult();
    console.log(`Num Rounds = ${typeof rounds}, Current Round: ${typeof roundCount}`);

    if (roundCount === rounds) {
        gameFinished = true;
        decideWinner(rounds);
        showResetButton();
        button_selections.style.display = "none";
    }
    roundCount++;
}

// Define buttons
let button_selections = document.querySelector("#button-selections");

// Event Listener
button_selections.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "button-rock":
            humanChoice = "Rock";
            playGame("rock");
            break;
        case "button-paper":
            humanChoice = "Paper";
            playGame("paper");
            break;
        case "button-scissors":
            humanChoice = "Scissors";
            playGame("scissors");
            break;
    }
});

// TODO: Fix how many rounds picker


