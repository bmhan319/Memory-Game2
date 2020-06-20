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
      topCard.innerHTML = '<img class="topCard" src="images/backCards/blank_green.jpg" alt="top of card">'
    } else if (currentColor == 'red') {
      topCard.innerHTML = '<img class="topCard" src="images/backCards/blank_red.jpg" alt="top of card">'
    } else if (currentColor == 'blue') {
      topCard.innerHTML = '<img class="topCard" src="images/backCards/blank_blue.jpg" alt="top of card">'
    }
    topCard.setAttribute("data-id", cardSet[i].id)
    topCard.setAttribute("class", "card card"+cardSet[i].id)
    topCard.setAttribute("id", i)
    gameBoard.appendChild(topCard)
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
  cardsFlippedID = []
  cardFlippedID1 = []
  cardFlippedID2 = []
  cardsFlippedIndex = []
  clearInterval(timer)
  timerDisplay('00')
  message.innerHTML = ""
  score.innerHTML = 0
  confetti.stop()
}


//Select game board size
function gameSize(num) {
  const numOfPairs = document.querySelector('#numOfPairs')  //total number of matches on display

  activeCardDeck = []
  gridSize = num
  numOfPairs.innerHTML = num / 2
  
  //Outputs array called activeCardDeck that is 12, 20 or 24 in length
  if (num === 24) {
    defaultCards.forEach( item => {activeCardDeck.push(item)} )
  } else if (num === 12) {
    defaultCards.forEach( item => {if (item.id < 7 ) {activeCardDeck.push(item)}} )
    
  } else if (num === 20) {
    defaultCards.forEach( item => {if (item.id < 11 ) {activeCardDeck.push(item)}} )
  }
  
  deleteBoard()
  createBoard(activeCardDeck)
  cssGridStyle(gridSize)
}


//Select Theme and bring up Popup
function changeTheme(theme, cardColor, index) {
  if (theme === defaultCards) {return displayPopUp('sameTheme')
  } else {
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


//Shuffle the cards using Fisher-Yates (aka Knuth) Shuffle
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


//Create a count-up timer
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
    if (min === 30) {
      clearInterval(timer)
      alert("Time's Up!")
      deleteBoard()
      gameSize(gridSize)
    }
  }, 1000)
}


//Animation for Flipping Cards
function flipCard(item1, item2) {
  item1.classList.add('flipOn')
  item1.classList.remove('flipOff')
  setTimeout( function(){
    item1.setAttribute("src", `images/${item2}`)
  }, 250 )
}


//Animation for flipping them back
function flipCardBack(element, color) {
  element.classList.add('flipOff')
  element.classList.remove('flipOn')
  setTimeout( function(){
    element.setAttribute("src", `images/backCards/blank_${color}.jpg`)
  }, 250 )
}


//Setting Grid CSS
function cssGridStyle(gridSize) {
   let cards
  if (gridSize === 24) {
    cards = document.querySelectorAll('.card')
    cards.forEach(item => item.style.width = "16.66667%")
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
}