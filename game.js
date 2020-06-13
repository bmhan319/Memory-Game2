// Cards in the pile to play Memory with
const cards = [
  { name:"cheeseburger", src:"cheeseburger.png", id:1 },
  { name:"cheeseburger", src:"cheeseburger.png", id:1 },
  { name:"fries", src:"fries.png", id:2 },
  { name:"fries", src:"fries.png", id:2 },
  { name:"hotdog", src:"hotdog.png", id:3 },
  { name:"hotdog", src:"hotdog.png", id:3 },
  { name:"ice cream", src:"ice-cream.png", id:4 },
  { name:"ice cream", src:"ice-cream.png", id:4 },
  { name:"milkshake", src:"milkshake.png", id:5 },
  { name:"milkshake", src:"milkshake.png", id:5 },
  { name:"pizza", src:"pizza.png", id:6 },
  { name:"pizza", src:"pizza.png", id:6 },
]

//container variables to store data of each move
let numOfMatches = 0
let cardsFlippedID = []
let cardFlippedID1 = []
let cardFlippedID2 = []
let cardsFlippedIndex = []

//shuffle the cards using Fisher-Yates (aka Knuth) Shuffle
function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array;
}

function createBoard() {
  shuffleArray(cards)
  for (let i = 0; i < cards.length; i++) {
      const gameBoard = document.querySelector('.gameBoard')
      let topCard = document.createElement('div')
      topCard.innerHTML = '<img class="topCard" src="/images/blank.jpg" alt="top of card">'
      topCard.setAttribute("data-id", cards[i].id)
      topCard.setAttribute("class", "card"+cards[i].id)
      topCard.setAttribute("id", i)
      gameBoard.appendChild(topCard)
    }
}

function deleteBoard() {
  const gameBoard = document.querySelector('.gameBoard')
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}

//On Page Load, load gameboard
window.addEventListener('load', () => {
  createBoard()

  //on click, start game
  window.addEventListener('click', (e)=> {
    let el = e.target
    let parent = el.parentNode
    let card = parent.getAttribute('data-id')
    let cardID = parent.getAttribute('id')
    let cardItem
    //When player clicks outside the gameboard, do nothing
    if (card == null) {
      return
    //else flip cards to play the game
    } else {
      cardItem = cards[cardID].src
      cardsFlippedID.push(card)
      cardsFlippedIndex.push(cardID)
      el.setAttribute("src", `/images/${cardItem}`)
      checkForMatch(cardsFlippedIndex)
    }
  })

  //after two cards are selected check for match
  function checkForMatch(index) {
    
    if (cardsFlippedID.length === 2) {
      const stopClick = document.querySelector('.gameBoard')
      let firstSelected = document.getElementById(index[0]).children
      let secondSelected = document.getElementById(index[1]).children
      stopClick.style.pointerEvents ="none"
      cardFlippedID1 = cardsFlippedID[0] 
      cardFlippedID2 = cardsFlippedID[1]

      //if cards match, do something
      if (cardFlippedID1 === cardFlippedID2) {
        let selectedCards = document.querySelectorAll('.card' + cardFlippedID1)
        selectedCards.forEach( item => {
          item.style.pointerEvents = "none"
        } )
        console.log(cardFlippedID1, cardFlippedID2)
        //document.querySelectorAll('.card1').style.pointerEvents = "none"
        //document.querySelector('.card'+cardFlippedID1).style.pointerEvents = "none"
        //document.querySelector('.card'+cardFlippedID2).style.pointerEvents = "none"
        const message = document.querySelector('#message')
        message.innerHTML = "Match"
        numOfMatches++
        checkForWin()
        cardsFlippedID = []
        cardFlippedID1 = []
        cardFlippedID2 = []
        cardsFlippedIndex = []
        stopClick.style.pointerEvents ="auto"
        
      
      // else flip the cards back and reset container variables
      } else {
        const message = document.querySelector('#message')
        message.innerHTML = "Not A Match"

        setTimeout( ()=>{
          firstSelected[0].setAttribute('src', "/images/blank.jpg")
          secondSelected[0].setAttribute('src', "/images/blank.jpg")
          stopClick.style.pointerEvents ="auto"
          }, 500 )
        cardsFlippedID = []
        cardFlippedID1 = []
        cardFlippedID2 = []
        cardsFlippedIndex = []
      }
    } 
  }

  //Check to see if all cards are matched
  function checkForWin() {
    if (numOfMatches === (cards.length) / 2) {
      const message = document.querySelector('#message')
      message.innerHTML = "You Win!"
      if (confirm("Play Again?")) {
        numOfMatches = 0
        cardsFlippedID = []
        cardFlippedID1 = []
        cardFlippedID2 = []
        cardsFlippedIndex = []
        deleteBoard()
        createBoard()
        message.innerHTML = ""
      }
    }
  }

})