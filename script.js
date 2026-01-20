const valid_input = ["rock", "paper", "scissors"];

function get_computer_choice() {
    return random_choice = Math.floor(Math.random() * 3);

    switch (random_choice) {
        case 0:
            return "Rock!";
        case 1:
            return "Paper!";
        case 2:
            return "Scissors!";
    };
};

function get_human_choice() {
    let human_input = prompt("Rock, Paper, or Scissors?");

    let human_choice = valid_input.indexOf(human_input);

    if (human_choice < 0) {
        for (; human_choice < 0;) {
            let human_input = prompt("invalid input, try again :(");
            human_choice = valid_input.indexOf(human_input);
        };
    };
    
    return human_choice;
};

let human_score = 0
let computer_score = 0

function play_round(human_choice, computer_choice) {
    if (human_choice = computer_choice) {
        human_score += 1
        computer_score += 1
        console.log(`Tie! You both get a point. Score(${human_score} - ${computer_score})`)
    } else if (human_choice = computer_choice + 1) {
        computer_score += 1
        console.log(`Computer wins this round! Score(${human_score} - ${computer_score})`)
    } else if (human_choice = computer_choice + 2) {
        human_score += 1
        console.log(`You wins this round! Score(${human_score} - ${computer_score})`)
    };
};
function play_game() {
    for (let games = 0; games < 5; games++) {
        let human_choice = get_human_choice();
        let computer_choice = get_computer_choice();
        play_round(human_choice, computer_choice);
    };

    if (human_score = computer_score) {
        console.log(`Game Over! It's a Tie! Final Score(${human_score} - ${computer_score})`);
    } else if (human_score > computer_score) {
        console.log(`Game Over! You Win! Final Score(${human_score} - ${computer_score})`);
    }   else if (human_score > computer_score) {
        console.log(`Game Over! You Lose! Final Score(${human_score} - ${computer_score})`);
    };
};