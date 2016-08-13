

var remainingGuesses = 20;
var wins = 0;
var losses = 0;
var words = ['moustache', 'bicycle', 'skinny jeans', 'flannel', 'kombucha', 'fedora'];

var wordArray = []; //holds array of the random word chosen
var guessArray = []; //creates an array of the user guessed letters

var dashArray = [];//creates an array of dashes for the amount of letters in the randome word chosen



window.onload = function(){
	var randomWord = words[Math.floor(Math.random() * words.length)];
	wordArray = randomWord.split("");


	console.log(wordArray); //console log the random word chosen & converted to an array

	for (var i=0; i<wordArray.length; i++){
		dashArray.push("_" + " ");
		var newBlankDashArray = dashArray.join('');
		document.querySelector('#randomWord').innerHTML = newBlankDashArray;

		console.log(dashArray); //log the blank dash array


	window.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guessArray.push(userGuess);

		console.log(userGuess); //log the user key pressed
		console.log(guessArray); //log the array of user key presses

	for (var i=0; i<wordArray.length; i++){
		if (userGuess == wordArray[i]){
			dashArray.splice(i, 1, userGuess);
			var newDashArray = dashArray.join('');
			document.querySelector('#randomWord').innerHTML = newDashArray;

			console.log(newDashArray);
			// var a = dashArray.join();
			// console.log(a);
			console.log(dashArray); //log the dash array spliced with a correct letter guessed
		}
	}
}
}
}










// 	for (var i=0; i<wordArray.length; i++){
// 	var div = document.getElementById('randomWord');

    
//     if (userGuess == wordArray[i]){
//     	tempArray.splice(i, 1, userGuess);
// 		div.innerHTML = tempArray;
// 	}

// 	if (userGuess != wordArray[i]){
// 		tempArray.splice(i, 1, guessArray[i]);
// 		div.innerHTML = tempArray;
// 	}

//     guessArray = tempArray.join("");

// }
// console.log(guessArray);
// console.log(tempArray);
// }
// }


// window.onkeyup = function(event) {
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// }

	

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





	
