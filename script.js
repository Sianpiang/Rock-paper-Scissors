function computerPlays(){
    let action = ["ROCK","PAPER","SCISSORS"];
    let random = Math.floor(Math.random()*3);
    return action[random];
}

function play(playerSelection,computerSelection){
    let plyCount = 0;
    let comCOunt = 0;
    let pS = playerSelection.toUpperCase();
    let cS = computerSelection.toUpperCase();
    console.log("Player : " + pS);
    console.log("Computer :" + cS);

    if((pS === "ROCK")&&(cS === "SCISSORS")||(pS === "SCISSORS" )&& (cS === "PAPER")||((pS === "PAPER" )&& (cS === "ROCK"))){
        return true;
    }
    else if((pS === "ROCK" )&& (cS === "PAPER")||(pS === "SCISSORS" )&& (cS === "ROCK")||(pS === "PAPER")&&(cS === "SCISSORS")){
        return false;
    }
    else{
        return "Tie";
    }
}

function game(){
    let plyCount = 1;
    let comCount = 1;
    // while(plyCount<3||comCount<3){
        // let playerSelection = prompt("Rock,Paper,Scissors");
        let computerSelection = computerPlays();
        if(play(playerSelection,computerSelection) === true){
            console.log("You Won!")
            console.log("PlayerScore :" + plyCount++);
        }
        else if(play(playerSelection,computerSelection) === false ){
            console.log("You Lose!")
            console.log("ComputerScore : " + comCount++);
        }
        else{
            console.log("Tie")
        }
    // }
    console.log("The End");
}

console.log(game());

