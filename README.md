# Black Jack game
Front end project- it's a basic black jack game

Blackjack, also known as Twenty-One, is a popular casino card game. Here are the basic rules:

Here are the rules of your Blackjack game:

Game Objective:
The goal is to get a sum of card values as close to 21 as possible without going over.
Card Values:

Cards 2-10 are worth their face value.
Face cards (Jack, Queen, King) are worth 10.
Aces are always worth 11 in this implementation.


Starting the Game:

When the game starts (startGame function), the player is dealt two random cards.
The sum of these two cards is calculated.


Game States:

isAlive: Indicates if the player is still in the game (sum < 21).
hasBlackJack: Indicates if the player has achieved a Blackjack (sum exactly 21).


Player Actions:

The player can choose to draw a new card (newCard function).
New cards can only be drawn if the player is still alive and doesn't have a Blackjack.


Winning Conditions:

If the sum is exactly 21, the player gets a Blackjack and wins.
If the sum goes over 21, the player is "out of the game" (loses).
If the sum is below 21, the player can choose to draw another card or stay.


Game Messages:

Sum < 21: "Do you want to draw a new card?"
Sum = 21: "You've got a BlackJack!"
Sum > 21: "You're out of the game!"


Display:

The game shows the player's cards and the total sum.
A message is displayed indicating the game state or prompting for action.



Key Differences from Standard Blackjack:

There's no dealer in this version. The player is only trying to get 21 or as close as possible.
Aces are always worth 11, not 1 or 11 as in standard Blackjack.
The game doesn't end when you get below 21; you can keep drawing cards.
There's no betting system implemented.
The win condition is simplified to just getting 21, rather than comparing with a dealer's hand.
