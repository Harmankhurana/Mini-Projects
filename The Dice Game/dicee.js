// Array of images - first player
let images1 = [
    "images/dice1.png" ,
    "images/dice2.png" ,
    "images/dice3.png" ,
    "images/dice4.png" ,
    "images/dice5.png" ,
    "images/dice6.png"
]

// Selecting the image randomly
let randonNumber1 = Math.floor(Math.random() * images1.length);
let randomImage1 = images1[randonNumber1];

// Using DOM for displaying the image for first player
document.getElementById("myImage1").src = randomImage1;


// Array of images - Second player
let images2 = [
    "images/dice1.png" ,
    "images/dice2.png" ,
    "images/dice3.png" ,
    "images/dice4.png" ,
    "images/dice5.png" ,
    "images/dice6.png"
]

// Selecting the image randomly
let randonNumber2= Math.floor(Math.random() * images2.length);
let randomImage2 = images2[randonNumber2];

// Using DOM for displaying the image for Second player
document.getElementById("myImage2").src = randomImage2;

// Making an if else-if statements for declaring which player won or draw
if (randonNumber1 === randonNumber2){
     document.querySelector("h1").innerHTML = "Draw";
} 
else if(randonNumber1 > randonNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(randonNumber1 < randonNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won";
}