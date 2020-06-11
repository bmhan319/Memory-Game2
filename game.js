const cards = [
  { name:"cheeseburger", src:"cheeseburger.png", id:1 },
  { name:"cheeseburger", src:"cheeseburger.png", id:1 },
  { name:"fries", src:"fries.png", id:2 },
  { name:"fries", src:"fries.png", id:2 },
  { name:"hotdog", src:"hotdog.png", id:3 },
  { name:"hotdog", src:"hotdog.png", id:3 },
  { name:"ice cream", src:"ice-cream.png", id:4 },
  { name:"ice cream", src:"ice-cream.png", id:4 },
  { name:"milkshake", src:"milshake.png", id:5 },
  { name:"milkshake", src:"milshake.png", id:5 },
  { name:"pizza", src:"pizza", id:6 },
  { name:"pizza", src:"pizza", id:6 },
]

let cardsFlipped = []
let flippedCard1 = []
let flippedCard2 = []

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
    
    if (card == null) {
      return
    } else {
      cardsFlipped.push(card)
      console.log(cardsFlipped)
      checkForMatch()
    }
    
  })

  function checkForMatch() {
    if (cardsFlipped.length === 2) {
      flippedCard1 = cardsFlipped[0] 
      flippedCard2 = cardsFlipped[1] 
      if (flippedCard1 === flippedCard2) {
        console.log("match")
      } else {
        flippedCard1 = []
        flippedCard2 = []
        cardsFlipped = []
      }
    } 
  }

})