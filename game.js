let my_Score = 0;

let comp_Score = 0;

let choices = document.querySelectorAll(".choice");
let myScore = document.querySelector(".my-score");
let compScore = document.querySelector(".comp-score");
let msg = document.querySelector("#msg");

let genCompChoice = () => {
  let compChoice = ["Rock", "Paper", "Scissor"];
  let compIdx = Math.floor(Math.random() * 3);
  return compChoice[compIdx];
};

gameDraw = () => {
  msg.innerText = "Game was Draw.Play again!";
  msg.style.backgroundColor = "blue";
};

let gameWin = (userWin, myChoice, compChoice) => {
  if (userWin) {
    my_Score++;
    myScore.innerText = my_Score;
    msg.innerText = `You win ${myChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comp_Score++;
    compScore.innerText = comp_Score;
    msg.innerText = `You lost ${compChoice} beats ${myChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (myChoice) => {
  let compChoice = genCompChoice();
  if (myChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (myChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (myChoice === "Paper") {
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    gameWin(userWin, myChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let myChoice = choice.getAttribute("id");
    playGame(myChoice);
  });
});
 
let color=["red","blue","green"];
let i=0
for(let choice of choices){
  choice.style.backgroundColor=`${color[i]}`;
  i++;
}