// Selecting buttons using DOM 
let buttons = document.querySelectorAll("button");

// Creating an Event listner - which detects the button press
buttons.forEach(function (button){
    button.addEventListener("click" , function (){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        
    });
});        

// ddetcting Keyboard press - keydown
document.addEventListener("keydown", function(Event){
    makeSound(Event.key);
});

// Function for making sound 
function makeSound(key){
    switch (key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a": 
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s" : 
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d" : 
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j" : 
            new Audio('sounds/crash.mp3').play();
            break;
        case "k" : 
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "l" : 
            new Audio('sounds/snare.mp3').play();
            break;
    }
}