/**
 * This script demonstrates how you can add animation
 * to your website using JavaScript
 */
const string = "Welcome to my portfolio page"; /* type your text here */
const array = string.split("");
let timer;

function messageLooper () {
	if (array.length > 0) {
		document.getElementById("message").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
	}
	loopTimer = setTimeout('messageLooper()', 70); /* change 70 for speed */
}

messageLooper();