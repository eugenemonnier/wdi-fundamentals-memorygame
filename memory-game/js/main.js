//console.log("I'm up!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];
let score = 0;
function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score = score + 1;
			console.log(score);
			document.getElementById('score-card').innerHTML = score;
		} else {
			alert("Sorry, try again");
		}
	}	
}

function flipCard(){
	var cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
}

createBoard();

/*function reset() {
	location.reload();
}*/

function reset(){
    document.getElementById('game-board').innerHTML = "";
    createBoard();
    cardsInPlay = [];
};
document.getElementById('score-card').innerHTML = score;