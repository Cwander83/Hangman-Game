/*--------------------------------------------------------------*/





//start running functions
//this function runs when user hits key

document.onkeyup = function (event) {

    //figures out which key is pressed
    var userGuess = event.key;
    console.log(userGuess);
};

var myWord = getRandomWord();

displayOnScreen();

choiceWord();

var wordChoice = "_";

var letterChoice = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guesses = 15;



console.log(myWord);

function choiceWord() {
   



 

    document.getElementById("userText").textContent = myWord;
    console.log("hi");
}

function fillLetters (){
    
}

function displayOnScreen() {
    var text = "";
    for (var i = 0; i < myWord.length; i++) {
        text += "_ ";

    }

    console.log(text);

    document.getElementById("userText").textContent = text;

    

}

var userText = document.getElementById("userText");





function getRandomWord() {
    //start by listing out which words i want the gamer to have to find in hamgman


    var randomWordArray = ["YODA", "BOUNTYHUNTER", "JABBATHEHUT", "LUKE", "PRINCESSLEIA", "DARTHVADER", "EMPIRETROOPER", "CHEWBACCA"];

    // create a list of variables i think i will need to run the game


    var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
    return randomWord;
}