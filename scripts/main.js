function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
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

// initialize Human and Computer score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! ${humanChoice} can't beat ${computerChoice}`);
        return;
    }
    function humanWon() {
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
    }
    function humanLost() {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1 
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === scissors && computerChoice === 'paper')) {
        humanWon()
        return;
    } else {
        humanLost()
        return;
    }
}