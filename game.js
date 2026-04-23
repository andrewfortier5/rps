function getComputerChoice(){
    var choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0){
        return "rock";
    } else if (choiceNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
};
function getHumanChoice(){
    var choice = prompt("Please enter rock, paper, or scissors.");
    if (choice === null || choice.trim() === "") {
        return null; // or handle differently
    }
    choice = choice.toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // recursive call to retry
    }
};

var humanScore = 0;
var computerScore = 0;

function playRound(){
    var humanChoice = getHumanChoice();
    if (humanChoice === null) {
        return "Game canceled.";
    }
    var computerChoice = getComputerChoice();
    if (humanChoice === computerChoice){
        return "Tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win... Rock beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win... Paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win... Scissors beats paper.";
    } else {
        computerScore++;
        return "You lose... " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    }
};

function game(){
    for (var i = 0; i < 5; i++){
        alert("Turn " + (i + 1) + ": " + playRound());
    }
    if (humanScore > computerScore){
        return "You win!";
    } else if (computerScore > humanScore){
        return "You lose.";
    } else {
        return "Tie!";
    }
};

alert(game());