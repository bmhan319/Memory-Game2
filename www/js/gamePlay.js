const gameBoard = document.querySelector('.gameBoard')
const score = document.querySelector('#score')

//starting default game settings
let defaultCards = animalCards  //default selection, changes onClick of Game Theme
let currentColor = 'green'      //default color theme, changes onClick of Game Theme
let gridSize = 24               //either 12, 20 or 24, changes onClick of Game Size

let activeCardDeck = []             //new array of cards, length based on grid size
let numOfMatches = 0
let cardsFlippedID = []
let cardFlippedID1 = []
let cardFlippedID2 = []
let cardsFlippedIndex = []
let timer

//On Page Load, load gameboard
window.addEventListener('load', () => {
  createBoard(defaultCards)
})


//On click, start game
document.addEventListener('click', (e)=> {
  let el = e.target
  let parent = el.parentNode
  let card = parent.getAttribute('data-id')
  let cardID = parent.getAttribute('id')
  let cardItem
  let cards
  
  //When player clicks outside the gameboard, do nothing
  if (card == null) {
    return
  //else flip cards to play the game
  } else {
    //choose which cardSet to use to start play
    if (activeCardDeck.length === 0) {
      cards = defaultCards
    } else {
      cards = activeCardDeck
    }
    cardItem = cards[cardID].src
    cardsFlippedID.push(card)
    cardsFlippedIndex.push(cardID)
    checkForMatch(cardsFlippedIndex, cards) //check to see two selected cards match
    flipCard(el, cardItem)  //run card flip animation
  }
  
})


//after two cards are selected check for match
function checkForMatch(index, cardSet) {
  //prevents user from selecting same card twice by locking pointer after first click on the card.
  if (document.getElementById(index) !== null) {
    document.getElementById(index).style.pointerEvents = 'none'
  }

  // when two cards have been selected,
  if (cardsFlippedID.length === 2) {
    const stopClick = document.querySelector('.gameBoard')
    let banner = document.getElementById('banner')
    let firstSelected = document.getElementById(index[0]).children
    let secondSelected = document.getElementById(index[1]).children
    stopClick.style.pointerEvents ="none" //prevents anymore clicking once two cards are selected
    cardFlippedID1 = cardsFlippedID[0] 
    cardFlippedID2 = cardsFlippedID[1]

    //if cards match,
    if (cardFlippedID1 === cardFlippedID2) {
      const selectedCards = document.querySelectorAll('.card' + cardFlippedID1)

      //prevent these cards from being clicked on for duration of the game
      selectedCards.forEach( item => {item.style.pointerEvents = "none"} )
      
      numOfMatches++
      score.innerHTML = numOfMatches

      //check if game is won,
      if ( checkForWin(cardSet) === true) {
        stopClick.style.pointerEvents ="auto"
        return
      //else continue game
      } else {
        cardsFlippedID = [] //resets these variables for use on next pair of selected cards
        cardFlippedID1 = [] //resets these variables for use on next pair of selected cards
        cardFlippedID2 = [] //resets these variables for use on next pair of selected cards
        cardsFlippedIndex = []  //resets these variables for use on next pair of selected cards
        stopClick.style.pointerEvents ="auto" //resume ability to select unmatched cards on board
      
        //flash banner indicating match
        banner.innerHTML = "Match"
        setTimeout( ()=> {
          banner.classList.remove('bannerEnd')
        }, 500)
          banner.classList.add('bannerEnd')
        }

    //if card dont match
    } else if (cardFlippedID1 !== cardFlippedID2) {
      
      //flip cards back over after a delay
      //delay given to give both cards time to fully flip to picture before action is taken to put them back face down.
      setTimeout(()=> {
        flipCardBack(firstSelected[0], currentColor)
        flipCardBack(secondSelected[0], currentColor)
        stopClick.style.pointerEvents ="auto"
      }, 700)
      document.getElementById(cardsFlippedIndex[0]).style.pointerEvents = 'auto' //unmatched cards can now be selected again
      cardsFlippedID = [] //resets these variables for use on next pair of selected cards
      cardFlippedID1 = [] //resets these variables for use on next pair of selected cards
      cardFlippedID2 = [] //resets these variables for use on next pair of selected cards
      cardsFlippedIndex = []  //resets these variables for use on next pair of selected cards
    }
  } 
}


//Check to see if all cards are matched
function checkForWin(cardSet) {
  let banner = document.querySelector('.banner')
  
  //if all cards are matched,
  if (numOfMatches === (cardSet.length) / 2) {
    banner.innerHTML = "You Win!"
    setTimeout( ()=> {
      banner.classList.remove('bannerEnd')
    }, 500)
    banner.classList.add('bannerEnd')

    confetti.start()
    clearInterval(timer)
    setTimeout( ()=> {displayPopUp('winner')}, 2500 ) //after some time, popup to ask if user will play another game
    return true
  }
}