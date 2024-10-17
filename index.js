let cards = [];
let hasBlackJack = false;
let isAlive = false;
// Declare  a variable called message and assign its value to a empty string
let message = "";
let sum =0;

let messageEl = document.getElementById("message-el");
// let sumEl=document.getElementById("sum-e");
let sumEl = document.querySelector("#sum-e");
// quereySelector makes sure that it selects the id is a # like the css.
// Then for the css for classes, you use dot(.) the class name
let cardEl = document.querySelector("#cards-e");

// Create a object
// No need for new variables
// But just the name and ":" to the new value.
// Then create the player.name


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
        // value of jack, king, and queen
    } else if (randomNumber === 1) {
        return 11;
        // the value of the ac

    } else {
        return randomNumber;
    }
}





function startGame() {
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();

}

// Function starts the game
function renderGame() {
    cardEl.textContent = "Cards:";
    for (let b = 0; b < cards.length; b++) {
        cardEl.textContent += cards[b] + " ";

    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 20) {
        message = "Do you want to draw a new card?";
        console.log(message);

    } else if (sum === 21) {
        message = " You've got a BlackJack!";
        console.log(message);
        hasBlackJack = true;

    } else {
        console.log(message);
        isAlive = false;
        message = "You're out of the game!";

    }
    messageEl.textContent = message;

}

function newCard() {
    console.log("Drawing a new card from the deck!");
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard();
        sum += card;
        // Push the card to the cards array
        cards.push(card);
        
    
        renderGame();
    

    }
   
}

