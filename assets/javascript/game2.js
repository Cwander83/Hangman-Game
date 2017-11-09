//javascript starting over

//var array for words to find
var randomWordArray = ["Yoda", "Bountyhunter", "Jabbathehut", "Luke", "Princessleia", "Darthvader", "Empiretrooper", "Chewbacca"];

// the random word from the array
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

//list of variables to use

var j;
var count = 0;
var answerArray = [];

// functions

function gameRun() {

    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_ ";
    }
    // creating a string
    j = answerArray.join(" ");
    document.getElementById("answer").innerHTML = j;

}

function letter() {
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                answerArray[i] = letter;
            }
        }
        count++;
        document.getElementById("counter").innerHTML = "Number of clicks:" + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if (count > 15) {
        document.getElementById("stat").innerHTML = "Can you get it right yet?";
    }
}