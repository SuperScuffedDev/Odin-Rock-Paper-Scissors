const moves = document.querySelectorAll(".moves");
const confirm_button = document.querySelector("#confirm");
const tracker = document.querySelector("#tracker")
const computer_log = document.querySelector("#computer-log")
const log = document.querySelector("#log");

let human_score = 0
let computer_score = 0
let human_choice = undefined

function get_computer_choice() {
    const array_moves = ["rock", "paper", "scissors"]
    const random_choice = Math.floor(Math.random() * 3);
    return array_moves[random_choice]
};

function get_human_choice(e) {
    const target = e.target;

     moves.forEach((move) => {
        move.querySelector("img").style.borderColor = "black";
    });

    switch (target.id) {
        case "rock":
            target.style.borderColor = "green";
            human_choice = "rock";
            break;
        case "paper":
            target.style.borderColor = "green";
            human_choice = "paper";
            break;
        case "scissors":
            target.style.borderColor = "green";
            human_choice = "scissors";
            break;
        default:
            console.log("wtf");
    };
};

function play_round() {
    const computer_choice = get_computer_choice();
    console.log(`you ${human_choice} cpu ${computer_choice}`);
    if (human_choice == computer_choice) {
        human_score += 1
        computer_score += 1
        tracker.textContent = `YOU: ${human_score} | CLANKER: ${computer_score}`
        computer_log.textContent = `Clanker chose ${computer_choice.toUpperCase()}`
        log.textContent = "Tie! You both get a point!"
    } else if (human_choice == "rock" && computer_choice == "paper" || human_choice == "paper" && computer_choice == "scissors" || human_choice == "scissors" && computer_choice == "rock") {
        computer_score += 1
        tracker.textContent = `YOU: ${human_score} | CLANKER: ${computer_score}`
        computer_log.textContent = `Clanker chose ${computer_choice.toUpperCase()}`
        log.textContent = "The clanker wins this round!"
    } else if (human_choice == "paper" && computer_choice == "rock" || human_choice == "scissors" && computer_choice == "paper" || human_choice == "rock" && computer_choice == "scissors") {
        human_score += 1
        tracker.textContent = `YOU: ${human_score} | CLANKER: ${computer_score}`
        computer_log.textContent = `Clanker chose ${computer_choice.toUpperCase()}`
        log.textContent = "You wins this round!"
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

confirm_button.addEventListener("click", play_round)