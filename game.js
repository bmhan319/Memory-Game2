// Cards in the pile to play Memory with
const animalCards = [
  { name:"beaver", src:"animals/beaver.png", id:2 },
  { name:"beaver", src:"animals/beaver.png", id:2 },
  { name:"cat", src:"animals/cat.png", id:1 },
  { name:"cat", src:"animals/cat.png", id:1 },
  { name:"chick", src:"animals/chick.png", id:3 },
  { name:"chick", src:"animals/chick.png", id:3 },
  { name:"chicken", src:"animals/chicken.png", id:7 },
  { name:"chicken", src:"animals/chicken.png", id:7 },
  { name:"cow", src:"animals/cow.png", id:5 },
  { name:"cow", src:"animals/cow.png", id:5 },
  { name:"dog", src:"animals/dog.png", id:9 },
  { name:"dog", src:"animals/dog.png", id:9 },
  { name:"donkey", src:"animals/donkey.png", id:4 },
  { name:"donkey", src:"animals/donkey.png", id:4 },
  { name:"duck", src:"animals/duck.png", id:11 },
  { name:"duck", src:"animals/duck.png", id:11 },
  { name:"elephant", src:"animals/elephant.png", id:6 },
  { name:"elephant", src:"animals/elephant.png", id:6 },
  { name:"lion", src:"animals/lion.png", id:10 },
  { name:"lion", src:"animals/lion.png", id:10 },
  { name:"monkey", src:"animals/monkey.png", id:8 },
  { name:"monkey", src:"animals/monkey.png", id:8 },
  { name:"penguin", src:"animals/penguin.png", id:12 },
  { name:"penguin", src:"animals/penguin.png", id:12 }
]

const dinoCards = [
  { name:"dimetrodon", src:"dinosaurs/dimetrodon.png", id:12 },
  { name:"dimetrodon", src:"dinosaurs/dimetrodon.png", id:12 },
  { name:"ankylosaurus", src:"dinosaurs/ankylosaurus.png", id:2 },
  { name:"ankylosaurus", src:"dinosaurs/ankylosaurus.png", id:2 },
  { name:"apatosaurus", src:"dinosaurs/apatosaurus.png", id:3 },
  { name:"apatosaurus", src:"dinosaurs/apatosaurus.png", id:3 },
  { name:"brachiosaurus", src:"dinosaurs/brachiosaurus.png", id:4 },
  { name:"brachiosaurus", src:"dinosaurs/brachiosaurus.png", id:4 },
  { name:"hadrosaurus", src:"dinosaurs/hadrosaurus.png", id:5 },
  { name:"hadrosaurus", src:"dinosaurs/hadrosaurus.png", id:5 },
  { name:"parasaurolophus", src:"dinosaurs/parasaurolophus.png", id:6 },
  { name:"parasaurolophus", src:"dinosaurs/parasaurolophus.png", id:6 },
  { name:"pterodactyl", src:"dinosaurs/pterodactyl.png", id:7 },
  { name:"pterodactyl", src:"dinosaurs/pterodactyl.png", id:7 },
  { name:"spinosaurus", src:"dinosaurs/spinosaurus.png", id:8 },
  { name:"spinosaurus", src:"dinosaurs/spinosaurus.png", id:8 },
  { name:"stegosaurus", src:"dinosaurs/stegosaurus.png", id:9 },
  { name:"stegosaurus", src:"dinosaurs/stegosaurus.png", id:9 },
  { name:"triceratops", src:"dinosaurs/triceratops.png", id:10 },
  { name:"triceratops", src:"dinosaurs/triceratops.png", id:10 },
  { name:"tyrannosaurus", src:"dinosaurs/tyrannosaurus.png", id:11 },
  { name:"tyrannosaurus", src:"dinosaurs/tyrannosaurus.png", id:11 },
  { name:"volcano", src:"dinosaurs/volcano.png", id:1 },
  { name:"volcano", src:"dinosaurs/volcano.png", id:1 }
]

const backgrounds = [
  {backOfCard: 'blank_green.jpg', bg:'animalCardsBG.jpg'},
  {backOfCard: 'blank_red.png', bg:'dinoCardsBG.jpg'}
]

//container variables to store data of each move
//let cards = foodCards
let cards = animalCards
let smallCards = []
let largeCards = []
let numOfMatches = 0
let cardsFlippedID = []
let cardFlippedID1 = []
let cardFlippedID2 = []
let cardsFlippedIndex = []

//select game board size
//outputs array that is 12 or 24
function gameSize(num) {
  smallCards = []
  largeCards = []
  if (num === 24) {
    cards.forEach( item => {largeCards.push(item)} )
  } else if (num === 12) {
    cards.forEach ( item => {
      if (item.id % 2 === 0) {
        smallCards.push(item)
      }
    })
  }
}


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

//Create GameBoard
function createBoard(cardSet) {
  shuffleArray(cardSet)
  for (let i = 0; i < cards.length; i++) {
      const gameBoard = document.querySelector('.gameBoard')
      let topCard = document.createElement('div')
      if (cardSet == animalCards) {
        topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_green.jpg" alt="top of card">'
      } else {
        topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_red.png" alt="top of card">'
      }
      topCard.setAttribute("data-id", cards[i].id)
      topCard.setAttribute("class", "card"+cards[i].id)
      topCard.setAttribute("id", i)
      gameBoard.appendChild(topCard)
    }
}

function changeTheme(theme, index) {
  if (confirm('Are you sure?  You will lose all progress in the current game.')) {
    deleteBoard()
    cards = theme
    document.querySelector('.gameContainer').style.backgroundImage = `url('images/backgrounds/${backgrounds[index].bg}')`
    createBoard()
  }
}

//Delete GameBoard
function deleteBoard() {
  const gameBoard = document.querySelector('.gameBoard')
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}

//On Page Load, load gameboard
window.addEventListener('load', () => {
  createBoard(cards)

  //On click, start game
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
    if (document.getElementById(index) !== null) {
      document.getElementById(index).style.pointerEvents = 'none'
    }

    if (cardsFlippedID.length === 2) {
      const stopClick = document.querySelector('.gameBoard')
      let firstSelected = document.getElementById(index[0]).children
      let secondSelected = document.getElementById(index[1]).children
      stopClick.style.pointerEvents ="none"
      cardFlippedID1 = cardsFlippedID[0] 
      cardFlippedID2 = cardsFlippedID[1]

      //if cards match, do something
      if (cardFlippedID1 === cardFlippedID2) {
        const message = document.querySelector('#message')
        const selectedCards = document.querySelectorAll('.card' + cardFlippedID1)
        selectedCards.forEach( item => {
          item.style.pointerEvents = "none"
        } )
        
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
          if (cards == animalCards) {
            firstSelected[0].setAttribute('src', "/images/backCards/blank_green.jpg")
            secondSelected[0].setAttribute('src', "/images/backCards/blank_green.jpg")
          } else {
            firstSelected[0].setAttribute('src', "/images/backCards/blank_red.png")
            secondSelected[0].setAttribute('src', "/images/backCards/blank_red.png")
          }
          stopClick.style.pointerEvents ="auto"
        }, 500 )
        document.getElementById(cardsFlippedIndex[0]).style.pointerEvents = 'auto'
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
      confetti.start()
      message.innerHTML = "You Win!"

       setTimeout( ()=> {
         if (confirm("Play Again?")) {
          numOfMatches = 0
          cardsFlippedID = []
          cardFlippedID1 = []
          cardFlippedID2 = []
          cardsFlippedIndex = []
          deleteBoard()
          createBoard()
          message.innerHTML = ""
          confetti.stop()
        }
       }, 3500 )
    }
  }

})