// accessing the class and id of the buttons and reset button with DOM 
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//if true then playerO has the turn and if false then plyerX has the turn
let turnO = true; 

// storing all the winning patterns in a 2D array
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// A funtion for reset the game 
const resetGame = () =>{
    turnO = true; 
    enableBoxes();
    msgContainer.classList.add("hide");
}

//the logic for changing the X and O for two different players(making an arrow function)
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked")
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        // calling the function value here 
        checkWinner();

    });
});

//A function for disabling all the boxes buttons after winning the game
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

//A function for enabling all the boxes buttons after winning the game
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//A function for removing the hide class and congratulating the player for winning the game.
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
// A function for checking the winning patterns in that 2D arrays 
const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

// calling New game(same as reset btn but after the games ends) and reset game(can be clicked anytime between game) function here 
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);