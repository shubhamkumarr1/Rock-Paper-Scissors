let win = 0;
let lose = 0;
let tie = 0;

const choices = ["rock", "paper", "scissors"];


function playGame(player) {

    // Computer randomly chooses
    let computer = choices[Math.floor(Math.random() * choices.length)];


    // Show player's choice
    document.getElementById("player-choice").textContent = player;


    // Show computer's choice
    document.getElementById("computer-choice").textContent = computer;


    // Check result

    if (player === computer) {

        tie++;

        document.getElementById("result").textContent = "Game Tie!";

    }

    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {

        win++;

        document.getElementById("result").textContent = "You Win!";

    }

    else {

        lose++;

        document.getElementById("result").textContent = "You Lose!";

    }


    // Update score

    document.getElementById("win-score").textContent = win;

    document.getElementById("lose-score").textContent = lose;

    document.getElementById("tie-score").textContent = tie;
}


function resetGame() {

    win = 0;
    lose = 0;
    tie = 0;


    document.getElementById("win-score").textContent = 0;

    document.getElementById("lose-score").textContent = 0;

    document.getElementById("tie-score").textContent = 0;


    document.getElementById("player-choice").textContent = "-";

    document.getElementById("computer-choice").textContent = "-";

    document.getElementById("result").textContent = "Make your move!";
}