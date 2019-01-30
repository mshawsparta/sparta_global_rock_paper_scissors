console.log("linked");
var game = {
  players : [
    {
      name: "Mat",
      wins: 0
    },
    {
      name: "Com",
      wins: 0
    }
  ],
  moves: [
    {rock: 1},
    {paper: 2},
    {scissors: 3}
  ]
}

console.log(game.players[1].wins);
//

var turn = parseInt(prompt("Enter move"));

var comTurn = Math.floor(Math.random() * 3) + 1;
console.log(turn);
console.log(comTurn);
switch(turn){
  case 1:
  switch(comTurn){
    case 1:
    alert("Draw!")
    break;
    case 2:
    alert("Lose!")
    break;
    case 3:
    alert("Win!")
    break;
  }
  case '2':
  switch(comTurn){
    case '1':
    alert("Win!")
    break;
    case '2':
    alert("Draw!")
    break;
    case '3':
    alert("Lose!")
    break;
  }
  case '3':
  switch(comTurn){
    case '1':
    alert("Lose!")
    break;
    case '2':
    alert("Win!")
    break;
    case '3':
    alert("Draw!")
    break;

}
}
