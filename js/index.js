console.log("linked");


console.log(game.players[1].wins);
//


// console.log(turn);
// console.log(comTurn);
var wins = 0;
var losses = 0;
do{
  var turn = prompt("Enter move");

  var comTurn = Math.floor(Math.random() * 3) + 1;
switch(turn){
  case '1':
  switch(comTurn){
    case 1:
    alert("Draw!")
    break;
    case 2:
    alert("Lose!")
    losses++;
    break;
    case 3:
    alert("Win!")
    wins++;
    break;
  }
  break;
  case '2':
  switch(comTurn){
    case 1:
    alert("Win!")
    wins++;
    break;
    case 2:
    alert("Draw!")
    break;
    case 3:
    alert("Lose!")
    losses++;
    break;
  }
  break;
  case '3':
  switch(comTurn){
    case 1:
    alert("Lose!")
    losses++;
    break;
    case 2:
    alert("Win!")
    wins++;
    break;
    case 3:
    alert("Draw!")
    break;
  }
  break;
}
// turn = "";
// comTurn = 0;
console.log(wins);
console.log(losses);
}

while( (wins + losses) < 5);
