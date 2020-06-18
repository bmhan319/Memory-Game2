// Cards in the pile to play Memory with
const animalCards = [
  { name:"lion", src:"animals/lion.png", id:1 },
  { name:"lion", src:"animals/lion.png", id:1 },
  { name:"penguin", src:"animals/penguin.png", id:2 },
  { name:"penguin", src:"animals/penguin.png", id:2 },
  { name:"monkey", src:"animals/monkey.png", id:3 },
  { name:"monkey", src:"animals/monkey.png", id:3 },
  { name:"beaver", src:"animals/beaver.png", id:4 },
  { name:"beaver", src:"animals/beaver.png", id:4 },
  { name:"donkey", src:"animals/donkey.png", id:5 },
  { name:"donkey", src:"animals/donkey.png", id:5 },
  { name:"elephant", src:"animals/elephant.png", id:6 },
  { name:"elephant", src:"animals/elephant.png", id:6 },
  { name:"chicken", src:"animals/chicken.png", id:7 },
  { name:"chicken", src:"animals/chicken.png", id:7 },
  { name:"polarbear", src:"animals/polarbear.png", id:8 },
  { name:"polarbear", src:"animals/polarbear.png", id:8 },
  { name:"walrus", src:"animals/walrus.png", id:9 },
  { name:"walrus", src:"animals/walrus.png", id:9 },
  { name:"cow", src:"animals/cow.png", id:10 },
  { name:"cow", src:"animals/cow.png", id:10 },
  { name:"duck", src:"animals/duck.png", id:11 },
  { name:"duck", src:"animals/duck.png", id:11 },
  { name:"pig", src:"animals/pig.png", id:12 },
  { name:"pig", src:"animals/pig.png", id:12 }
]

const dinoCards = [
  { name:"dimetrodon", src:"dinosaurs/dimetrodon.png", id:1 },
  { name:"dimetrodon", src:"dinosaurs/dimetrodon.png", id:1 },
  { name:"ankylosaurus", src:"dinosaurs/ankylosaurus.png", id:2 },
  { name:"ankylosaurus", src:"dinosaurs/ankylosaurus.png", id:2 },
  { name:"stegosaurus", src:"dinosaurs/stegosaurus.png", id:3 },
  { name:"stegosaurus", src:"dinosaurs/stegosaurus.png", id:3 },
  { name:"triceratops", src:"dinosaurs/triceratops.png", id:4 },
  { name:"triceratops", src:"dinosaurs/triceratops.png", id:4 },
  { name:"tyrannosaurus", src:"dinosaurs/tyrannosaurus.png", id:5 },
  { name:"tyrannosaurus", src:"dinosaurs/tyrannosaurus.png", id:5 },
  { name:"parasaurolophus", src:"dinosaurs/parasaurolophus.png", id:6 },
  { name:"parasaurolophus", src:"dinosaurs/parasaurolophus.png", id:6 },
  { name:"apatosaurus", src:"dinosaurs/apatosaurus.png", id:7 },
  { name:"apatosaurus", src:"dinosaurs/apatosaurus.png", id:7 },
  { name:"brachiosaurus", src:"dinosaurs/brachiosaurus.png", id:8 },
  { name:"brachiosaurus", src:"dinosaurs/brachiosaurus.png", id:8 },
  { name:"hadrosaurus", src:"dinosaurs/hadrosaurus.png", id:9 },
  { name:"hadrosaurus", src:"dinosaurs/hadrosaurus.png", id:9 },
  { name:"pterodactyl", src:"dinosaurs/pterodactyl.png", id:10 },
  { name:"pterodactyl", src:"dinosaurs/pterodactyl.png", id:10 },
  { name:"spinosaurus", src:"dinosaurs/spinosaurus.png", id:11 },
  { name:"spinosaurus", src:"dinosaurs/spinosaurus.png", id:11 },
  { name:"volcano", src:"dinosaurs/volcano.png", id:12 },
  { name:"volcano", src:"dinosaurs/volcano.png", id:12 }
]

const oceanCards = [
  { name:"anglerfish", src:"ocean/anglerfish.png", id:1 },
  { name:"anglerfish", src:"ocean/anglerfish.png", id:1 },
  { name:"clam", src:"ocean/clam.png", id:2 },
  { name:"clam", src:"ocean/clam.png", id:2 },
  { name:"coral", src:"ocean/coral.png", id:3 },
  { name:"coral", src:"ocean/coral.png", id:3 },
  { name:"hermitcrab", src:"ocean/hermitcrab.png", id:4 },
  { name:"hermitcrab", src:"ocean/hermitcrab.png", id:4 },
  { name:"eel", src:"ocean/eel.png", id:5 },
  { name:"eel", src:"ocean/eel.png", id:5 },
  { name:"jellyfish", src:"ocean/jellyfish.png", id:6 },
  { name:"jellyfish", src:"ocean/jellyfish.png", id:6 },
  { name:"octopus", src:"ocean/octopus.png", id:7 },
  { name:"octopus", src:"ocean/octopus.png", id:7 },
  { name:"seahorse", src:"ocean/seahorse.png", id:8 },
  { name:"seahorse", src:"ocean/seahorse.png", id:8 },
  { name:"shark", src:"ocean/shark.png", id:9 },
  { name:"shark", src:"ocean/shark.png", id:9 },
  { name:"starfish", src:"ocean/starfish.png", id:10 },
  { name:"starfish", src:"ocean/starfish.png", id:10 },
  { name:"turtle", src:"ocean/turtle.png", id:11 },
  { name:"turtle", src:"ocean/turtle.png", id:11 },
  { name:"crab", src:"ocean/crab.png", id:12 },
  { name:"crab", src:"ocean/crab.png", id:12 }
]

const backgrounds = [
  {backOfCard: 'blank_green.jpg', bg:'animalCardsBG.jpg', color:"green"},
  {backOfCard: 'blank_red.png', bg:'dinoCardsBG.jpg', color: 'red'},
  {backOfCard: 'blank_blue.jpg', bg:'oceanCardsBG.jpg', color: '#0095C7'}
]

const gameBoard = document.querySelector('.gameBoard')
//container variables to store data of each move
let defaultCards = animalCards  //default selection
let sizedCards = []             //new array, length based grid size
let gridSize = 24               //either 12 or 24
let currentColor = 'green'
let timer

let numOfMatches = 0
let cardsFlippedID = []
let cardFlippedID1 = []
let cardFlippedID2 = []
let cardsFlippedIndex = []

//Create GameBoard
function createBoard(cardSet) {
  const message = document.querySelector('#message')
  const score = document.querySelector('#score')
  //message.innerHTML = 'Good Luck!'
  score.innerHTML = 0
  numOfMatches = 0
  shuffleArray(cardSet)
  for (let i = 0; i < cardSet.length; i++) {
    let topCard = document.createElement('div')
    if (currentColor == 'green') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_green.jpg" alt="top of card">'
    } else if (currentColor == 'red') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_red.png" alt="top of card">'
    } else if (currentColor == 'blue') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_blue.jpg" alt="top of card">'
    }
    topCard.setAttribute("data-id", cardSet[i].id)
    topCard.setAttribute("class", "card card"+cardSet[i].id)
    topCard.setAttribute("id", i)
    clearInterval(timer)
    gameBoard.appendChild(topCard)
    timerDisplay('00')
  }
}

//Delete GameBoard
function deleteBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
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

//select game board size
//outputs array that is 12, 20 or 24
function gameSize(num) {
  const numOfPairs = document.querySelector('#numOfPairs')
  let cards

  sizedCards = []
  gridSize = num
  
  if (num === 24) {
    defaultCards.forEach( item => {sizedCards.push(item)} )
  } else if (num === 12) {
    defaultCards.forEach ( item => {if (item.id < 7 ) {sizedCards.push(item)}} )
    
  } else if (num === 20) {
    defaultCards.forEach ( item => {if (item.id < 11 ) {sizedCards.push(item)}} )
  }
  
  deleteBoard()
  createBoard(sizedCards)
  numOfPairs.innerHTML = num / 2
  
  //Adjusting the CSS sizing AFTER the  new board is created
  if (num === 24) {
    cards = document.querySelectorAll('.card')
    cards.forEach(item => item.style.width = "16.66667%")
    gameBoard.style.maxWidth = "600px"
  } else if (num === 12) {
    cards = document.querySelectorAll('.card')
    cards.forEach(item => item.style.width = "25%")
    gameBoard.style.maxWidth = "450px"
  } else if (num === 20) {
    cards = document.querySelectorAll('.card')
    cards.forEach(item => item.style.width = "20%")
    gameBoard.style.maxWidth = "500px"
  }
}

//Changes Theme
function changeTheme(theme, cardColor, index) {
  if (theme === defaultCards) {return alert("You are already on that theme")}
  if (confirm('Are you sure?  You will lose all progress in the current game.')) {
    deleteBoard()
    currentColor = cardColor
    defaultCards = theme
    document.querySelector('.gameContainer').style.backgroundImage = `url('images/backgrounds/${backgrounds[index].bg}')`
    document.querySelector('.gridText').style.color = backgrounds[index].color
    document.querySelector('.themeText').style.color = backgrounds[index].color
    gameSize(gridSize)
  }
}



//On Page Load, load gameboard
window.addEventListener('load', () => {
  createBoard(defaultCards)
})


//On click, start game
window.addEventListener('click', (e)=> {
  let el = e.target
  let cards
  let parent = el.parentNode
  let card = parent.getAttribute('data-id')
  let cardID = parent.getAttribute('id')
  let cardItem
  
  //When player clicks outside the gameboard, do nothing
  if (card == null) {
    return
  //else flip cards to play the game
  } else {
    if (sizedCards.length === 0) {
      cards = defaultCards
    } else {
      cards = sizedCards
    }
    cardItem = cards[cardID].src
    cardsFlippedID.push(card)
    cardsFlippedIndex.push(cardID)
    el.setAttribute("src", `/images/${cardItem}`)
    checkForMatch(cardsFlippedIndex, cards)
  }
})

//after two cards are selected check for match
function checkForMatch(index, cardSet) {
  const message = document.querySelector('#message')
  const score = document.querySelector('#score')

  if (document.getElementById(index) !== null) {
    document.getElementById(index).style.pointerEvents = 'none'
  }

  if (cardsFlippedID.length === 2) {
    const stopClick = document.querySelector('.gameBoard')
    let messageA = document.getElementById('messageA')
    let firstSelected = document.getElementById(index[0]).children
    let secondSelected = document.getElementById(index[1]).children
    stopClick.style.pointerEvents ="none"
    cardFlippedID1 = cardsFlippedID[0] 
    cardFlippedID2 = cardsFlippedID[1]

    //if cards match, do something
    if (cardFlippedID1 === cardFlippedID2) {
      const selectedCards = document.querySelectorAll('.card' + cardFlippedID1)
      selectedCards.forEach( item => {
        item.style.pointerEvents = "none"
      } )
      
      messageA.innerHTML = "Match"
      numOfMatches++
      score.innerHTML = numOfMatches
      checkForWin(cardSet)
      cardsFlippedID = []
      cardFlippedID1 = []
      cardFlippedID2 = []
      cardsFlippedIndex = []
      stopClick.style.pointerEvents ="auto"
      setTimeout( ()=> {
        messageA.classList.remove('messageAEnd')
      }, 500)
      
      messageA.classList.add('messageAEnd')
    } else {
      setTimeout( ()=>{
        if (currentColor === 'green') {
          firstSelected[0].setAttribute('src', "/images/backCards/blank_green.jpg")
          secondSelected[0].setAttribute('src', "/images/backCards/blank_green.jpg")
        } else if(currentColor === 'red') {
          firstSelected[0].setAttribute('src', "/images/backCards/blank_red.png")
          secondSelected[0].setAttribute('src', "/images/backCards/blank_red.png")
        } else if (currentColor === 'blue') {
          firstSelected[0].setAttribute('src', "/images/backCards/blank_blue.jpg")
          secondSelected[0].setAttribute('src', "/images/backCards/blank_blue.jpg")
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
function checkForWin(cardSet) {
  if (numOfMatches === (cardSet.length) / 2) {
    const message = document.querySelector('#message')
    const score = document.querySelector('#score')
    const gameBoard = document.querySelector('.gameBoard')
    
    confetti.start()
    messageA.innerHTML = "You Win!"
    clearInterval(timer)

      setTimeout( ()=> {
        askPlayAgain()
        
      }, 2500 )
  }
}

function modalOpen() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modal.classList.add('modalOpen')
  modalContainer.classList.add('modalContainerOpen')
  modal.style.zIndex = "0"
}

function modalClose() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modalContainer.classList.remove('modalContainerOpen')
  modal.classList.remove('modalOpen')
}

function timerDisplay(startNum){
  let totalTime = -1
  let min = 0
  let sec = 0
  let displayMin = startNum
  let displaySec = startNum
  let displayTime = document.querySelector('.time')
  
  

  timer = setInterval(function() {
    totalTime++
    sec = totalTime
    displaySec = sec

    if (totalTime % 60 === 0 && totalTime > 0) {
      min++
    }

    if (totalTime >= 60) {
      sec = totalTime - (60 * min)
    }

    if (sec < 10) {
      displaySec = "0" + sec
    } else if (sec >= 10 && sec < 60) {
      displaySec = sec
    } 

    if (min > 0 && min < 10) {
      displayMin = '0' + min
    } else if (min > 10 && min < 60) {
      displayMin = min
    }

    displayTime.innerHTML = displayMin + ':' + displaySec
    
    if (min === 30) {
      clearInterval(timer)
      alert("Time's Up!")

    }
  }, 1000)

}

function askPlayAgain() {
  document.querySelector('.winnerPlayAgain').style.display = "block"
}

function playAgain(res) {
  if (res === 'yes') {
    document.querySelector('.winnerPlayAgain').style.display = "none"
    numOfMatches = 0
    cardsFlippedID = []
    cardFlippedID1 = []
    cardFlippedID2 = []
    cardsFlippedIndex = []
    deleteBoard()
    createBoard(sizedCards)
    message.innerHTML = ""
    score.innerHTML = 0
    confetti.stop()
    if (gridSize === 24) {
      cards = document.querySelectorAll('.card')
      cards.forEach(item => item.style.width = "16.666667%")
      gameBoard.style.maxWidth = "600px"
    } else if (gridSize === 12) {
      cards = document.querySelectorAll('.card')
      cards.forEach(item => item.style.width = "25%")
      gameBoard.style.maxWidth = "450px"
    } else if (gridSize === 20) {
      cards = document.querySelectorAll('.card')
      cards.forEach(item => item.style.width = "20%")
      gameBoard.style.maxWidth = "500px"
    }
  } else {
    document.querySelector('.winnerPlayAgain').style.display = "none"
  }
}