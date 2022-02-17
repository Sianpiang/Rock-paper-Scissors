let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
const resetBtn = document.querySelector('Input');
const display = document.querySelector('.display');
const score = document.querySelector('.Score');


resetBtn.addEventListener('click', ()=> location.reload());

function computerPlay(){
    const choiceInt = Math.floor(Math.random()*3);
    const choiceArr = ["rock","paper","scissors"];
    return choiceArr[choiceInt];
}

function game(playerChoice){
    let computerChoice = computerPlay();
    let roundResult = "";
    if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock"){
        roundResult = `You win!!! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "rock" && computerChoice === "paper"){
        roundResult = `Computer win!!! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }
    else{
        roundResult = `Its a tie`;
    }
    if(playerScore === 5 || computerScore === 5){
        btns.forEach(btn => {
            btn.disabled = true;
        })
        roundResult = `End of the game please Reset the game`;
    }
    display.textContent =roundResult;
    updateScore(playerScore,computerScore);
}

function updateScore(playerScore,computerScore){
    let upadatedScore = "";
    upadatedScore = `PlayerScore : ${playerScore}  ComputerScore : ${computerScore}`;
    score.textContent = upadatedScore;
}

btns.forEach(btn => btn.addEventListener('click', ()=>{
    game(btn.value);
}))