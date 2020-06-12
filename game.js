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

let cardsFlipped = []
let cardsFlippedIndex = []
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
    let cardID = parent.getAttribute('id')
    let cardItem = cards[cardID].src
    
    if (card == null) {
      return
    } else {
      cardsFlipped.push(card)
      cardsFlippedIndex.push(cardID)
      el.setAttribute("src", `/images/${cardItem}`)
      checkForMatch(cardsFlippedIndex)
      
    }
    
  })

  function checkForMatch(index) {
    if (cardsFlipped.length === 2) {
      let firstSelected = document.getElementById(index[0]).children
      let secondSelected = document.getElementById(index[1]).children

      flippedCard1 = cardsFlipped[0] 
      flippedCard2 = cardsFlipped[1] 
      if (flippedCard1 === flippedCard2) {
        console.log("match")
        flippedCard1 = []
        flippedCard2 = []
        cardsFlipped = []
      } else {
        setTimeout( ()=>{
          firstSelected[0].setAttribute('src', "/images/blank.png")
          secondSelected[0].setAttribute('src', "/images/blank.png")
          }, 500 )
        flippedCard1 = []
        flippedCard2 = []
        cardsFlipped = []
        cardsFlippedIndex = []
      }
    } 
  }

})