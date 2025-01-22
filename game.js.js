//Rock Paper Scissor Game

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{ //ramdomly ganerating a choice by computer
  const options=["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
};

const drawGame=()=>{
  msg.innerText="Game was Draw!, play again";
  msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userChoice,compChoice)=>{
  if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
  }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText="You Lose :(";
    msg.style.backgroundColor="red";
  }
};

const playGame=(userChoice)=>{
  console.log("userChoice=",userChoice);
  // computer choice
  const compChoice=genCompChoice();
  console.log("comp choice=",compChoice);

  if(userChoice==compChoice){
drawGame();
  }else{
    let userwin=true;
    if(userChoice==="rock"){
      userwin=compChoice==="paper" ? false:true;
    }else if(userChoice==="paper"){
      userwin=compChoice==="scissors" ? false:true;
    }else{
      userwin=compChoice==="rock"? false:true;
    }
    showWinner(userwin,userChoice,compChoice);
  }
};

choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
  const userChoice=choice.getAttribute("id");
  console.log("choice is clicked",userChoice);
  playGame(userChoice);
 });
});