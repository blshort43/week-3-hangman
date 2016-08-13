var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var words = ['moustache', 'bicycle', 'skinny jeans', 'flannel', 'kombucha', 'fedora'];
var wordArray = []; //holds array of the random word chosen
var guessArray = []; //creates an array of the user guessed letters
var dashArray = []; //creates an array of dashes for the amount of letters in the randome word chosen
var userGuess = "";
var correctLetters = [];
var newBlankDashArray = [];
var newDashArray = [];
var incorrectGuess = [];
//#arrays4days

var reset = function() {
    remainingGuesses = 10;
    wordArray = []; //holds array of the random word chosen
    guessArray = []; //creates an array of the user guessed letters
    dashArray = []; //creates an array of dashes for the amount of letters in the randome word chosen
    userGuess = "";
    correctLetters = [];
    window.onload();
    alert("You lose, try again.");
}

var dashAnswer = function() {
    var post = newBlankDashArray
}

var update = function() {
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Number of guesses remaining: " + remainingGuesses + "</p>" +
        "<p>Letters Guessed: " + guessArray + "</p>" +
        "<p>" + newDashArray + "</p>";
    document.querySelector("#superDiv").innerHTML = html;
}

window.onload = function() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    wordArray = randomWord.split("").filter(function(item, pos) {
        return randomWord.indexOf(item) == pos;
    });
    update();

    counter = 0;

    console.log(wordArray); //console log the random word chosen & converted to an array


    for (var i = 0; i < randomWord.length; i++) {
        dashArray.push("_" + " ");
        newBlankDashArray = dashArray.join('');
        newDashArray = newBlankDashArray;

        console.log(newBlankDashArray); //log the blank dash array
    };
    update();


    window.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();





        if (guessArray.indexOf(userGuess) == -1) {
            guessArray.push(userGuess);
            update();

            // This code runs when the key is not a duplicate

            if (wordArray.indexOf(userGuess) == -1) {
                // This code runs when the key is not in the wordArray

                remainingGuesses--;
                update();
            }else{
                correctLetters.push(userGuess);

                // This code runs when the key is in the wordArray
                for (var i = 0; i < randomWord.length; i++) {
                    if (userGuess == randomWord[i]) {
                        dashArray.splice(i, 1, userGuess);
                        newDashArray = dashArray.join('');
                        update();
                    }
                }


                if (correctLetters.length == wordArray.length) {
                    wins++;
                    alert("You won! The word was " + newDashArray.toString());
                    reset();
                    console.log(wins);

                }

            }
        }

        if (remainingGuesses === 0) {
            reset();
        }
    }
}
