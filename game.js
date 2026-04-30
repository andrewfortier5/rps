function getComputerChoice() {
    var choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        console.log('Computer selected rock...');
        return "rock";
    } else if (choiceNumber === 1) {
        console.log('Computer selected paper...');
        return "paper";
    } else {
        console.log('Computer selected scissors...');
        return "scissors";
    }
};
/* function getHumanChoice() {
    // Get rid of the prompt. We will be using buttons instead.
    // var choice = prompt("Please enter rock, paper, or scissors.");
    if (humanChoice === null || humanChoice.trim() === "") {
        return null; // or handle differently
    }
    choice = choice.toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log('Player selected ' + choice + '...');
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // recursive call to retry
    }
}; */

var humanScore = 0;
var computerScore = 0;

// Adding event listeners to buttons
document.getElementById("rock").addEventListener("click", function () {
    alert(playRound("rock"));
    playerSelection = "rock"; // Set playerSelection to "rock"
});
document.getElementById("paper").addEventListener("click", function () {
    alert(playRound("paper"));
    playerSelection = "paper"; // Set playerSelection to "paper"
});
document.getElementById("scissors").addEventListener("click", function () {
    alert(playRound("scissors"));
    playerSelection = "scissors"; // Set playerSelection to "scissors"
});
// The assignment is trying to dictate our variable names, but we are using humanChoice instead of the suggested playerSelection.

function playRound(humanChoice) {
    // var humanChoice = getHumanChoice();
    if (humanChoice === null) {
        return "Game canceled.";
    } else {
        console.log('Player selected ' + humanChoice + '...');
    }
    var computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win... Rock beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win... Paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win... Scissors beats paper.";
    } else {
        computerScore++;
        return "You lose... " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    }
};

function game() {
    // Commenting out our loop per the assignment.
    /* for (var i = 0; i < 5; i++){
        alert("Turn " + (i + 1) + ": " + playRound());
    } */
    if (humanScore > computerScore) {
        return "You win!";
    } else if (computerScore > humanScore) {
        return "You lose.";
    } else {
        return "Tie!";
    }
};

// alert(game());