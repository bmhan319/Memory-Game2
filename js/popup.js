//Display popup
function displayPopUp(popUpType) {
  document.querySelector('.popUp').style.display = "block"
  const statement = document.querySelector('.popUpStatement')
  const question = document.querySelector('.popUpQuestion')
  const button1 = document.querySelector('.buttonNo')
  const button2 = document.querySelector('.buttonYes')

  //PopUp properties for a Winner display
  if (popUpType === 'winner') {
    statement.innerHTML = 'Winner Winner Chicken Dinner!'
    question.innerHTML = 'Wanna play again?'

    button1.setAttribute('onclick', "playAgain('no')")
    button1.classList.add('popUpDone')
    button1.innerHTML = "Nah, I'm Done."
    
    button2.setAttribute('onclick', "playAgain('yes')")
    button2.classList.add('popUpAgain')
    button2.classList.remove('popUpDone')
    button2.innerHTML = "OK. Play again."
  
  //PopUp display for same theme warning.
  } else if (popUpType === 'sameTheme') {
    statement.innerHTML = "You are already on that theme"
    question.innerHTML = ""

    button1.removeAttribute('onclick', "playAgain('no')")
    button1.classList.remove('popUpDone')
    button1.innerHTML = ""
    
    button2.setAttribute('onclick', "playAgain('no')")
    button2.classList.add('popUpDone')
    button2.classList.remove('popUpAgain')
    button2.innerHTML = 'Got it.'
  }
}


//Does user want to play again
function playAgain(res) {
  let popup = document.querySelector('.popUp')
   
   //if YES,
  if (res === 'yes') {
    popup.style.display = "none"
    deleteBoard()
    createBoard(activeCardDeck)
    cssGridStyle(gridSize)

  //else NO,
  } else if (res === 'no') {
    popup.style.display = "none"
  }
}