

var remainingGuesses = 20;
var wins = 0;
var losses = 0;
var words = ['moustache', 'bicycle', 'skinny jeans', 'flannel', 'kombucha', 'fedora'];


window.onload = function(){
	var randomWord = words[Math.floor(Math.random() * words.length)];
	var wordArray = randomWord.split("");
	console.log(wordArray);
	for (var i=0; i<wordArray.length; i++){
	var div = document.getElementById('randomWord');
	div.innerHTML = div.innerHTML + "_" + " ";
	}
}


// window.onkeyup = function(event) {
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	

// 	if (remainingGuesses >= 0){
// 		remainingGuesses--;
// 	}

// 	if ((userGuess === computerChoice && remainingGuesses >= 0)){
// 		wins++;
// 	}else if ((userGuess !== computerChoice && remainingGuesses >= 0)){
// 		losses++;

// 		var letter = "<p>Your Guesses So Far: " + userGuess + ",</p>"
// 		var winNumber = "<p>Wins: " + wins + "</p>";
// 		var lossNumber = "<p>Losses: " + losses + "</p>";
// 		var guessLeft = "<p>Guesses Left: " + remainingGuesses + "</p>";


// 		// Placing the html into the game ID
// 		var div = document.getElementById('guessedLetters');
// 		div.innerHTML = div.innerHTML + userGuess + ", ";

// 		document.querySelector('#wins').innerHTML = winNumber;
// 		document.querySelector('#losses').innerHTML = lossNumber;
// 		document.querySelector('#guessesLeft').innerHTML = guessLeft;
// 	}
// 	}





	
