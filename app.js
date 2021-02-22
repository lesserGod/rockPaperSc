//cache the DOM
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == 'r') return "Rock";
    if (letter == 'p') return "Paper";
    if (letter == 's') return "Scissors";
}

function wins(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTMLr = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!!!`;
    document.getElementById(userChoice).classList.add('green_glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('green_glow'),500);
}

function loses(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You lost :( `;
    document.getElementById(userChoice).classList.add('red_glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('red_glow'),500);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}. Its a DRAW...`;
    document.getElementById(userChoice).classList.add('gray_glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('gray_glow'),500);
}




function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            wins(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            loses(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click',  ()=> game('r'));
    paper_div.addEventListener('click', ()=> game('p'));
    scissors_div.addEventListener('click',()=>game('s'));
}

main();