var wins = 0, losses = 0, ties = 0;

function play(){
    var player_move = document.getElementById('rps').value
    var error = document.getElementById('error');
    var score = document.getElementById('score');
    var message = document.getElementById('message');
    message.innerText = '';
    error.innerText = '';
    console.log(player_move);
    var num = Math.ceil(Math.random() * 3);

    console.log(num);
    player_move = player_move.toUpperCase();
    if(player_move != 'R' && player_move != 'P' && player_move != 'S'){
        console.log('ERROR: Type one of R, P, or S');
        error.innerText = 'ERROR: Type one of R, P, or S';
    }
    var playerMove = '';
    if(player_move == 'R'){
        playerMove = 'ROCK';
    }
    else if(player_move == 'P'){
        playerMove = 'PAPER';
    }
    else if(player_move == 'S'){
        playerMove = 'SCISSORS';
    }

    var computerMove = '';
    if(num == 1){
        computerMove = "ROCK";
    } 
    if(num == 2){
        computerMove = "PAPER";
    } 
    if(num == 3){
        computerMove = "SCISSORS";
    } 
    

    if (playerMove == computerMove){
        console.log("It's a tie!");
        message.innerText = "Computer chose " + playerMove + " as well, it's a tie!";
        ties = ties + 1;
    }
    else if(playerMove == "ROCK" && computerMove == "SCISSORS"){
        console.log("You win!");
        message.innerText = "You chose ROCK and computer chose SCISSORS, you win!";
        wins = wins + 1;
    }
    else if(playerMove == "PAPER" && computerMove == "ROCK"){
        console.log("You win!");
        message.innerText = "You chose PAPER and computer chose ROCK, you win!";
        wins = wins + 1;
    }
    else if(playerMove == "SCISSORS" && computerMove == "PAPER"){
        console.log("You win!");
        message.innerText = "You chose SCISSORS and computer chose PAPER, you win!";
        wins = wins + 1;
    }

    else if(playerMove == "ROCK" && computerMove == "PAPER"){
        console.log("You lose !");
        message.innerText = "You chose ROCK and computer chose PAPER, you lose!";
        losses = losses + 1;
    }
    else if(playerMove == "PAPER" && computerMove == "SCISSORS"){
        console.log("You lose !");
        message.innerText = "You chose PAPER and computer chose SCISSORS, you lose!";
        losses = losses + 1;
    }
    else if(playerMove == "SCISSORS" && computerMove == "ROCK"){
        console.log("You lose !");
        message.innerText = "You chose SCISSORS and computer chose ROCK, you lose!";
        losses = losses + 1;
    }

    score.innerText = "Wins: " + wins + " LOSSES: " + losses + " TIES: " + ties;
} 