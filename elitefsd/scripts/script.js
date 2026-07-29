let userMove='';
let computerMove='';
let result='';
const gameSummary={
   wins:0,
   lose:0,
   tie:0,
   gamesplayed:0
}
let gameHistory=[];
 function captureUserMove(move){
    console.log(`User move is ${move}`);
    userMove='';
 }
function computerGenerateMove(){
   const randNum=Math.random();
   if(randNum<1/3){
      computerMove='Rock'
   }else if(randNum<=2/3){
      computerMove='Paper'
   }else{
      computerMove='Scissors'
   }
   console.log(`Computer move is ${computerMove}`);
   
}

function evaluateMove(){
   result=''
   if(userMove==="Rock"){
      if(computerMove==="Rock"){
         result='tie'
      }else if (computerMove === "Paper"){
         result=' Lose'
      }else{
         result='Win'
      }
   }else if (userMove === "Paper"){
      if (computerMove=== "Rock"){
         result='Win';
      }else if(userMove === "Paper"){
         result='tie';
      }else{
         result='Win';
      }
   }else{
      if(computerMove==="scissors"){
         result='tie';
      }else if (computerMove==="Paper"){
         result='Win';
      }else{
         result='Lose';
      }
   }
}

function updateGameState(){
   gameSummary.gamesplayed+=1;
   if(result==="Win"){
      gameSummary.wins+=1;
   }else if (result==="Lose"){
      gameSummary.lose+=1;
   }else{
      gameSummary.tie+=1
   }
  const game={
   userMove:userMove,
   computerMove,
   result
  }
 gameHistory.push(game);
}

function renderGameSummary(){
const winsElement=document.getElementById("wins");
winsElement.innerHTML=gameSummary.wins;
const tiesElement=document.getElementById("ties");
tiesElement.innerHTML=gameSummary.tie;
const loosesElement=document.getElementById("looses");
loosesElement.innerHTML=gameSummary.lose;
}

gameplayd=document.getElementById('mplayed');
gameplayd.innerHTML=gameSummary.gamesplayed;

function renderGameHistory(){
let gameHistoryHTML=`<tr>
    <th>#</th>
    <th>UserMove</th>
    <th>ComputerMove</th>
    <th>Result</th>
</tr>`;
for(let i=0;i<gameHistory.length;i++){
   const gameNumber=i+1;
   const game=gameHistory[i];
   gameHistoryHTML+=
   `
   <tr>
   <td>${gameNumber}</td>
   <td >${game.userMove}</td>
   <td>${game.computerMove}</td>
   <td>${game.result}</td>
   </tr>
   
   `
}

const gameHistoryTableElement=document.getElementById('gameHistory');
gameHistoryTableElement.innerHTML=gameHistoryHTML;
}

//Wrapper function call other functions
function playgame(userMove){
    captureUserMove(userMove);
    computerGenerateMove();
    evaluateMove();
    updateGameState();
    renderGameHistory();
    renderGameSummary();
}



function resetGame(){
   gameSummary.wins=0;
   gameSummary.lose=0;
   gameSummary.gamesplayed=0;
   gameSummary.tie=0;
//    const winsElement=document.getElementById("wins");
// winsElement.innerHTML=0;
// const tiesElement=document.getElementById("ties");
// tiesElement.innerHTML=0;
// const loosesElement=document.getElementById("looses");
// loosesElement.innerHTML=0;
renderGameSummary();
   console.log("Game is reset");
}