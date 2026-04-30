const resultsElement = document.getElementById("result");
const currentHumanScoreElement = document.getElementById("human-score");
const currentComputerScoreElement = document.getElementById("computer-score");
const roundCountElement = document.getElementById("round");

const totalRounds = 5;
let currentRound = 1;
let currentHumanScore = 0;
let currentComputerScore = 0;
let gameFinished = false;

writeRoundElement();

function writeRoundElement() {
    roundCountElement.textContent = `Round ${currentRound} of ${totalRounds}`;
}

function writeScores() {
    currentHumanScoreElement.textContent = currentHumanScore;
    currentComputerScoreElement.textContent = currentComputerScore;
}

function turnOffButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function computersTurn() {
    var choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        resultsElement.insertAdjacentHTML('beforeend', '<p>Computer selected rock...</p>');
        return "rock";
    } else if (choiceNumber === 1) {
        resultsElement.insertAdjacentHTML('beforeend', '<p>Computer selected paper...</p>');
        return "paper";
    } else {
        resultsElement.insertAdjacentHTML('beforeend', '<p>Computer selected scissors...</p>');
        return "scissors";
    }
}

function findTheWinner() {
    if (currentHumanScore > currentComputerScore) {
        return "Human wins!";
    } else if (currentComputerScore > currentHumanScore) {
        return "Human loses.";
    } else {
        return "Nobody won /  tie!";
    }
}

function performGameRound(humanSelection) {
    var computerSelection = computersTurn();

    if (humanSelection === computerSelection) {
        return "Tie!";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        currentHumanScore++;
        writeScores();
        return "Human wins.";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        currentHumanScore++;
        writeScores();
        return "Human wins.";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        currentHumanScore++;
        writeScores();
        return "Human wins.";
    } else {
        currentComputerScore++;
        writeScores();
        return "Human loses.";
    }
}

function processSelections(choice) {
    if (gameFinished) {
        return;
    }

    resultsElement.insertAdjacentHTML('beforeend', `<p>Human selected ${choice}...</p>`);
    const roundResult = performGameRound(choice);
    resultsElement.insertAdjacentHTML('beforeend', `<p>${roundResult}</p>`);

    if (currentRound >= totalRounds) {
        gameFinished = true;
        turnOffButtons();
        const whoWon = findTheWinner();
        resultsElement.insertAdjacentHTML('beforeend', `<p><strong>${whoWon}</strong></p>`);
        alert(whoWon);
    } else {
        currentRound++;
        writeRoundElement();
    }
}

function buttonLogic() {
    document.getElementById("rock").addEventListener("click", function () {
        processSelections("rock");
    });

    document.getElementById("paper").addEventListener("click", function () {
        processSelections("paper");
    });

    document.getElementById("scissors").addEventListener("click", function () {
        processSelections("scissors");
    });
}

buttonLogic();