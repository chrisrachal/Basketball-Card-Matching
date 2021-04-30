# Basketball Card Matching

Basketball Card Matching is a card matching game where the player must patch 10 pairs of cards.
You can play the game here: https://chrisrachal.github.io/Basketball-Card-Matching/
# HOW TO PLAY
- Click one card to turn it over and click one additional card to try and find a match.
- If you wish to retract your choice of card, click it again to turn it back over.
- The player must choose 2 cards that are identical to each other to gain 1 point in their score. Upon matching all of the cards, the player will win the game.

## Start Up Screen:

<img width="1212" alt="Screen Shot 2021-04-30 at 8 08 42 AM" src="https://user-images.githubusercontent.com/81945798/116702378-9f6b6d80-a98e-11eb-8465-7da0be8bb14e.png">


# HOW TO INSTALL

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code


# HOW IT WORKS
``` javascript

cardsPicked = [] // Clears the array for next choices
  cardNames = [] // Clears the array for next choices
    if(cardsMatched.length === 1) { // Just for when your score is 1
    score.textContent = cardsMatched.length + " Match" // So the language isnt weird
  } else {
    score.textContent = cardsMatched.length + " Matches" // Updates the score
  }
  if  (cardsMatched.length === playerCards.length/2) { // If the matched cards = half the OG array, you win
    score.textContent = 'You found all the matches!' // Displays win
  }
}
```
``` javascript
 // Displays the NBA cards
    function cardDisplay() {
      let i = 0;
      playerCards.forEach(function(player) {
          console.log(player)
          const blanks = document.createElement('img'); // Setting the images yet to be turned
          blanks.setAttribute('src', 'images/nba.png'); // Gives blanks the NBA card
          blanks.setAttribute('list', i); // Cards position 0-19 in the array
          blanks.addEventListener('click', turnOver); // Click even for the turnOver function
          cardsShow.appendChild(blanks); // Places NBA cards into the "cards" class
          i++; // Runs through all the elements
      })
  }
  ```

# FUTURE CONSIDERATIONS
In the future, I would like to add a reset button and a function to initially flip the cards at the start of the game.


