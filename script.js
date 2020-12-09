var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // random image between dice1.png and dice6.png

var randomImageSource = "images/" + randomDiceImage; // random source between images/dice1.png and images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // we select the first img tag

image1.setAttribute("src", randomImageSource); // we modify the src of the img tag

// Second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // lines 3 & 5 simplified

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // lines 7 & 9 simplified

// Result message

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins !";
} else {
    document.querySelector("h1").innerHTML = "Draw !";
}