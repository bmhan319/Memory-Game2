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

let cardsFlippedID = []
let cardFlippedID1 = []
let cardFlippedID2 = []
let cardsFlippedIndex = []

window.addEventListener('load', () => {
  for (let i = 0; i < cards.length; i++) {
    const gameBoard = document.querySelector('.gameBoard')
    let topCard = document.createElement('div')
    topCard.innerHTML = '<img class="topCard" src="/images/blank.png" alt="top of card">'
    topCard.setAttribute("data-id", cards[i].id)
    topCard.setAttribute("id", i)
    gameBoard.appendChild(topCard)
    
  }

  window.addEventListener('click', (e)=> {
    let el = e.target
    let parent = el.parentNode
    let card = parent.getAttribute('data-id')
    let cardID = parent.getAttribute('id')
    let cardItem = cards[cardID].src
    
    if (card == null) {
      return
    } else {
      cardsFlippedID.push(card)
      cardsFlippedIndex.push(cardID)
      el.setAttribute("src", `/images/${cardItem}`)
      checkForMatch(cardsFlippedIndex)
      console.log(cardsFlippedID)
    }
    
  })

  function checkForMatch(index) {
    if (cardsFlippedID.length === 2) {
      let firstSelected = document.getElementById(index[0]).children
      let secondSelected = document.getElementById(index[1]).children
      cardFlippedID1 = cardsFlippedID[0] 
      cardFlippedID2 = cardsFlippedID[1] 

      if (cardFlippedID1 === cardFlippedID2) {
        console.log("match")
        cardsFlippedID = []
        cardFlippedID1 = []
        cardFlippedID2 = []
        cardsFlippedIndex = []
      } else {
        setTimeout( ()=>{
          firstSelected[0].setAttribute('src', "/images/blank.png")
          secondSelected[0].setAttribute('src', "/images/blank.png")
          }, 500 )
        cardsFlippedID = []
        cardFlippedID1 = []
        cardFlippedID2 = []
        cardsFlippedIndex = []
      }
    } 
  }

})