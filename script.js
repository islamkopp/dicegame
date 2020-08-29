function kopp() {
var rdm2 = Math.floor(Math.random()*6 + 1);
var dice = "dice" + rdm2 + ".png";
var loc = "images/" + dice;
document.querySelectorAll("img")[1].setAttribute("src", loc);
var rdm1 = Math.floor(Math.random()*6 + 1);
var dice = "dice" + rdm1 + ".png";
var loc = "images/" + dice;
document.querySelectorAll("img")[0].setAttribute("src", loc);
if (rdm1>rdm2) {
	document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (rdm2>rdm1) {
	document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
	document.querySelector("h1").innerHTML = "Draw!";
}

}
document.addEventListener("click", kopp);