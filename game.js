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
  {backOfCard: 'blank_red.jpg', bg:'dinoCardsBG.jpg', color: 'red'},
  {backOfCard: 'blank_blue.jpg', bg:'oceanCardsBG.jpg', color: '#0095C7'}
]

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

//Create GameBoard
function createBoard(cardSet) {
  //Create element to flash message.  
  //This gets deleted everytime game resets so needs to be recreated.
  const message = '<h3 id="banner" class="banner">Match</h3>'
  
  gameBoard.innerHTML = message
  shuffle(cardSet)
  resetData()
  
  for (let i = 0; i < cardSet.length; i++) {
    let topCard = document.createElement('div')
    if (currentColor == 'green') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_green.jpg" alt="top of card">'
    } else if (currentColor == 'red') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_red.jpg" alt="top of card">'
    } else if (currentColor == 'blue') {
      topCard.innerHTML = '<img class="topCard" src="/images/backCards/blank_blue.jpg" alt="top of card">'
    }
    topCard.setAttribute("data-id", cardSet[i].id)
    topCard.setAttribute("class", "card card"+cardSet[i].id)
    topCard.setAttribute("id", i)
    gameBoard.appendChild(topCard)
    //clearInterval(timer)
    //timerDisplay('00')
    //confetti.stop()
  }
}

//Delete GameBoard
function deleteBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild)
  }
}

//Reset Data
function resetData() {
  score.innerHTML = 0
  numOfMatches = 0
  clearInterval(timer)
  timerDisplay('00')
  confetti.stop()
}

//shuffle the cards using Fisher-Yates (aka Knuth) Shuffle
function shuffle(cardSet) {
  var currentIndex = cardSet.length, temporaryValue, randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = cardSet[currentIndex]
    cardSet[currentIndex] = cardSet[randomIndex]
    cardSet[randomIndex] = temporaryValue
  }
  return cardSet;
}

//select game board size
function gameSize(num) {
  const numOfPairs = document.querySelector('#numOfPairs')  //total number of matches on display
  let cards

  activeCardDeck = []
  gridSize = num
  numOfPairs.innerHTML = num / 2
  
  //outputs array called activeCardDeck that is 12, 20 or 24 in length
  if (num === 24) {
    defaultCards.forEach( item => {activeCardDeck.push(item)} )
  } else if (num === 12) {
    defaultCards.forEach( item => {if (item.id < 7 ) {activeCardDeck.push(item)}} )
    
  } else if (num === 20) {
    defaultCards.forEach( item => {if (item.id < 11 ) {activeCardDeck.push(item)}} )
  }
  
  deleteBoard()
  createBoard(activeCardDeck)
  
  //Adjusting the CSS sizing AFTER the new board is created
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
    //If theme changes, new parameters are brought into game, style is changed, game size is rerun
    defaultCards = theme
    currentColor = cardColor
    document.querySelector('.gameContainer').style.backgroundImage = `url('images/backgrounds/${backgrounds[index].bg}')`
    document.querySelector('.gridText').style.color = backgrounds[index].color
    document.querySelector('.themeText').style.color = backgrounds[index].color
    document.querySelector('.creditsLink').style.color = backgrounds[index].color
    document.querySelectorAll('.gridSize').forEach(item => item.style.backgroundColor = backgrounds[index].color)
    document.querySelectorAll('.themeType').forEach(item => item.style.backgroundColor = backgrounds[index].color)
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
    setTimeout( ()=> {askPlayAgain()}, 2500 ) //after some time, popup to ask if user will play another game
    return true
  }
}

//Open Credits Modal
function modalOpen() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modal.classList.add('modalOpen')
  modalContainer.classList.add('modalContainerOpen')
  modal.style.zIndex = "0"
}

//Close Credits Modal
function modalClose() {
  modal = document.querySelector('.modal')
  modalContainer = document.querySelector('.modalContainer ')
  modalContainer.classList.remove('modalContainerOpen')
  modal.classList.remove('modalOpen')
}

//Create a count-up timer from scratch
function timerDisplay(startNum){
  let totalTime = -1
  let min = 0
  let sec = 0
  let displayMin = startNum
  let displaySec = startNum
  let displayTime = document.querySelector('.time')
  
  //Do the following every second:
  timer = setInterval(function() {
    totalTime++
    sec = totalTime
    displaySec = sec

    //Every 60 sec, add 1 to min
    if (totalTime % 60 === 0 && totalTime > 0) {
      min++
    }

    //when second hits 60, reset counter back to 0
    if (totalTime >= 60) {
      sec = totalTime - (60 * min)
    }

    //display seconds with 2 digi-padding
    if (sec < 10) {
      displaySec = "0" + sec
    } else if (sec >= 10 && sec < 60) {
      displaySec = sec
    } 

    //display minutes with 2 digi-padding
    if (min > 0 && min < 10) {
      displayMin = '0' + min
    } else if (min > 10 && min < 60) {
      displayMin = min
    }

    //final screen display format to counter-up timer
    displayTime.innerHTML = displayMin + ':' + displaySec
    
    //End game after 30 minutes
    if (min === 1) {
      clearInterval(timer)
      alert("Time's Up!")
      deleteBoard()
      gameSize(gridSize)
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
    createBoard(activeCardDeck)
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

function flipCard(item1, item2) {
  item1.classList.add('flipOn')
  item1.classList.remove('flipOff')
  setTimeout( function(){
    item1.setAttribute("src", `/images/${item2}`)
  }, 250 )
}

function flipCardBack(element, color) {
  element.classList.add('flipOff')
  element.classList.remove('flipOn')
  setTimeout( function(){
    element.setAttribute("src", `/images/backCards/blank_${color}.jpg`)
  }, 250 )
}