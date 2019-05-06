/*RPS Fair Play by Ben M*/
/*Initialize Global Vars*/
var turnValues = ["q","r","p","s"];
var winArray=[
["r","p","I"],["r","s","you"],
["p","s","I"],["p","r","you"],
["s","r","I"],["s","p","you"]];
var wordArray=[["r","rock"],["p","paper"],["s","scissors"]];


/* Main: First While (Quit?) */
while (choice != "q"){
  alert("Welcome to RPS Fair Play!\n ")
  playerTurn();
  //Same?
  if (playerTurn == cpuTurn){
    alert("DOOOOOOO OVVVVVVVVVVVVVVER!")
  }
  x = 0
  turns = playerTurn + cpuTurn;
  winFinder()
  player = wordify(playerTurn);
  cpu = wordify(cpuTurn);
  alert("Your move was "+player+", I chose "+cpu)
}

/*Player Turn Function*/
function playerTurn(){
  var player = prompt("What is your move gonna be?\nPossible Moves: [r]ock, [p]aper, [s]iccors or [q]uit")
  alert("Rock...Paper...Sciccors...Shoot!")
}

/*CPU turn Function*/
function cpuTurn(){
  var cNum = Math.floor(Math.random()*3)+1;
  cpuTurn = turnValues[cNum];
}

/*Wordify Function*/ 
function wordify(turn){
	x=0;
  /*Second While*/
	while(wordArray[x][0]!=turn) x++;
    return(wordArray[x][1]);
}

/*WinFinder Function*/
function winFinder(turns){
  /*Third While*/
  while(winArray[x][0] + winArray[x][1] !=turns){ 
    x++;
}
	return winArray[x][2];
}
