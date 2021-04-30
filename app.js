document.addEventListener('DOMContentLoaded', () => {
  // Stores 2 cards picked by the player
  let cardsPicked = []
  
  // Stores all matched cards
  let cardsMatched = []
  
  // Stores 2 cards names/ids
  let cardNames = []
  
  // Scoreboard
  const score = document.querySelector('#scores')
  
  // An array for all of the choices
    var playerCards = [
      {
        name: 'kobe',
        img: 'images/kobe.jpg'
      },
      {
        name: 'kobe',
        img: 'images/kobe.jpg' 
      },
      {
        name: 'shaq',
        img: 'images/shaq.jpg' 
      },
      {
        name: 'shaq',
        img: 'images/shaq.jpg'
      },
      {
        name: 'iverson',
        img: 'images/iverson.jpg' 
      },
      {
        name: 'iverson',
        img: 'images/iverson.jpg'
      },
      {
        name: 'steph',
        img: 'images/steph.jpg' 
      },
      {
        name: 'steph',
        img: 'images/steph.jpg'
      },
      {
        name: 'melo',
        img: 'images/melo.jpg' 
      },
      {
        name: 'melo',
        img: 'images/melo.jpg'
      },
      {
        name: 'lebron',
        img: 'images/lebron.jpg' 
      },
      {
        name: 'lebron',
        img: 'images/lebron.jpg'
      },
      {
        name: 'vince',
        img: 'images/vince.jpg' 
      },
      {
        name: 'vince',
        img: 'images/vince.jpg'
      },
      {
        name: 'harden',
        img: 'images/harden.jpg' 
      },
      {
        name: 'harden',
        img: 'images/harden.jpg'
      },
      {
        name: 'kyrie',
        img: 'images/kyrie.jpg' 
      },
      {
        name: 'kyrie',
        img: 'images/kyrie.jpg'
      },
      {
        name: 'dave',
        img: 'images/dave.jpg' 
      },
      {
        name: 'dave',
        img: 'images/dave.jpg'
      }
    ]
    // Randomizes the array
    playerCards.sort(() => 0.5 - Math.random())
    
    // For the "cards" div to display cards
    const cardsShow = document.querySelector('.cards')

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
  // Turns over the cards
  function turnOver() {
    let playerName = this.getAttribute('list') // Grabbing the id from "cardDisplay"
    cardNames.push(playerName) // Push id of card to "cardNames"
    cardsPicked.push(playerCards[playerName].name) // Push cards from "playerCards" into "cardsPicked" based on id and stores the name to differentiate
    this.setAttribute('src', playerCards[playerName].img) // Adds image to card based on "playerName"/id
    if (cardsPicked.length === 2) { // Only want a max of 2 cards in "cardsPicked"
      setTimeout(matches, 1000) // Gives you 1000ms to see the cards
    }
  }

// Check the choices for matches
function matches() {
  const newCards = document.querySelectorAll('img') // Grabbing images from "cardDisplay"
  const firstChoiceName = cardNames[0] // Getting 1st choice from the names array(max of 2)
  const secondChoiceName = cardNames[1] // Getting 2nd choice from the names array(max of 2)
  
  if(firstChoiceName == secondChoiceName) { // Resets the card if you click the same one twice
    newCards[firstChoiceName].setAttribute('src', 'images/nba.png')
    newCards[secondChoiceName].setAttribute('src', 'images/nba.png')
  }
    else if (cardsPicked[0] === cardsPicked[1]) { // Its a match, leave the cards face up
    newCards[firstChoiceName].removeEventListener('click', turnOver)
    newCards[secondChoiceName].removeEventListener('click', turnOver)
    cardsMatched.push(cardsPicked) // Pushes matched cards from "cardsPicked" to "cardsMatched" array
  } else {
    newCards[firstChoiceName].setAttribute('src', 'images/nba.png') // If not a match or clicked the same card, they're not a match. Turn them back over
    newCards[secondChoiceName].setAttribute('src', 'images/nba.png')
  }
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

  cardDisplay() // Invoke the function for displaying the cards
  })

  // Stash
  // Shows the cards
    // function cardDisplay() {
    //   for (let i = 0; i < playerCards.length; i++) {
    //     const blanks = document.createElement('image')
    //     blanks.setAttribute('src', 'images/nba.png')
    //     blanks.setAttribute('list', i)
    //     blanks.addEventListener('click', turnOver)
    //     cardsShow.appendChild(blanks)
    //   }
    // }