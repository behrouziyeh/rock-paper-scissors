function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
            break;

        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        case 4:
            return;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?", "");
    if (humanChoice.match(/rock/i)) return "rock";
    if (humanChoice.match(/paper/i)) return "paper";
    if (humanChoice.match(/scissors/i)) return "scissors";
}

function playGame() {
    // initialize Human and Computer score
    let humanScore = 0;
    let computerScore = 0;

    const rockControl = document.querySelector(".rock-control");
    const paperControl = document.querySelector(".paper-control");
    const scissorsControl = document.querySelector(".scissors-control");

    const gameResult = document.querySelector(".game-result");
    const roundResult = document.querySelector(".round-result");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            roundResult.textContent = (`Tie! ${humanChoice} can't beat ${computerChoice}`);
            return;
        }
        function humanWon() {
            roundResult.textContent = (`You Won! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
        function humanLost() {
            roundResult.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanWon();
            return;
        } else {
            humanLost();
            return;
        }
    }

    function playRock() {
        playRound("rock", getComputerChoice());
    }

    function playPaper() {
        playRound("paper", getComputerChoice());
    }

    function playScissors() {
        playRound("scissors", getComputerChoice());
    }

    rockControl.addEventListener('click', playRock);
    paperControl.addEventListener('click', playPaper);
    scissorsControl.addEventListener('click', playScissors);

    if (humanScore > computerScore) gameResult.textContent = ("You Won the game!");
    else gameResult.textContent = ("You lost the game! Computer won!");
}

playGame();
