let box = document.querySelectorAll(".box");
let restbutton = document.querySelector("#restbutton");
let msgContainer = document.querySelector(".msg-container");
let newgame = document.querySelector("#newgame");
let msgWin = document.querySelector("#msgWin");

// one by one trun of player
let turnO = true;

//to check win pattern
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

box.forEach((box) => {
  box.addEventListener("click", () => {
    // Main Function of "X" and "O"
    if (turnO) {
      box.innerText = "O"; //Player O turn      player of turn 0 inner html will write 0 and turn to false
      turnO = false;
    } else {
      box.innerText = "X"; //Player X turn      player of turn x inner html will write x and turn to true
      turnO = true;
    }
    box.disabled = true;
    ///////////////////////////////
    // CHECKWINNER

    checkWinner();
  });
});

// --------------------------
// disable box
const disabledBox = () => {
  for (let boxes of box) {
    boxes.disabled = true;
  }
};

// --------------------------

// ////////////
const showWinner = (winner) => {
  msgWin.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBox(); // call function of disabled
};
// -----------------------------

const checkWinner = () => {
  for (pattern of winPattern) {
    let poss1 = box[pattern[0]].innerText;
    let poss2 = box[pattern[1]].innerText;
    let poss3 = box[pattern[2]].innerText;

    if ((poss1 != "") & (poss2 != "") & (poss3 != "")) {
      if (poss1 == poss2 && poss2 == poss3) {
        showWinner(poss1);
      }
    }
  }
};

//////////Rest Game  Function/////////
// enable box
const enableBox = () => {
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};
// rest game
const restGame = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
};

// ////////////
newgame.addEventListener("click", restGame);
restbutton.addEventListener("click", restGame);
