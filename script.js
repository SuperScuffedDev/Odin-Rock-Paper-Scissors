const valid_input = ["rock", "paper", "scissors"];

function get_computer_choice() {
    let random_choice = Math.floor(Math.random() * 3) + 1;

    switch (random_choice) {
        case 1:
            return "Rock!";
        case 2:
            return "Paper!";
        case 3:
            return "Scissors!";
    };
};

function get_human_choice() {
    let human_input = prompt("Rock, Paper, or Scissors?");

    return human_input
};

let human_score = 0
let computer_score = 0