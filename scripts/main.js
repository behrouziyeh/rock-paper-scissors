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
    let HumanChoice = prompt("rock, paper or scissors?", "");
    if (HumanChoice.match(/rock/i)) return "rock";
    if (HumanChoice.match(/paper/i)) return "paper";
    if (HumanChoice.match(/scissors/i)) return "scissors";
}
