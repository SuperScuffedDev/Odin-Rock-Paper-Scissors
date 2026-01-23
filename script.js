const moves = document.querySelectorAll(".moves");

function get_computer_choice() {
    const array_moves = ["rock", "paper", "scissors"]
    const random_choice = Math.floor(Math.random() * 3);
    return random_choice
};

let current_human_choice = undefined

function get_human_choice(e) {
    const target = e.target;

     moves.forEach((move) => {
        move.querySelector("img").style.borderColor = "black";
    });

    switch (target.id) {
        case "rock":
            target.style.borderColor = "green";
            current_human_choice = "rock";
            break;
        case "paper":
            target.style.borderColor = "green";
            current_human_choice = "paper";
            break;
        case "scissors":
            target.style.borderColor = "green";
            current_human_choice = "scissors";
            break;
        default:
            console.log("wtf");
    };
};

let human_score = 0
let computer_score = 0

function play_round(human_choice, computer_choice) {
    console.log(`You: ${valid_input[human_choice]} | Computer: ${valid_input[computer_choice]}`)

    if (human_choice == computer_choice) {
        human_score += 1
        computer_score += 1
        console.log(`Tie! You both get a point. Score(${human_score} - ${computer_score})`)
    } else if (human_choice == 0 && computer_choice == 1 || human_choice == 1 && computer_choice == 2 || human_choice == 2 && computer_choice == 0) {
        computer_score += 1
        console.log(`Computer wins this round! Score(${human_score} - ${computer_score})`)
    } else if (human_choice == 1 && computer_choice == 0 || human_choice == 2 && computer_choice == 1 || human_choice == 0 && computer_choice == 2) {
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

    if (human_score == computer_score) {
        console.log(`Game Over! It's a Tie! Final Score(${human_score} - ${computer_score})`);
    } else if (human_score > computer_score) {
        console.log(`Game Over! You Win! Final Score(${human_score} - ${computer_score})`);
    }   else if (human_score < computer_score) {
        console.log(`Game Over! You Lose! Final Score(${human_score} - ${computer_score})`);
    };
};

for (move of moves) {
    move.addEventListener("click", get_human_choice);
}