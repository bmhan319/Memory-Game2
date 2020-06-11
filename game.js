const cards = [
  { name:"cheeseburger", src:"cheeseburger.png", id:1 },
  { name:"cheeseburger", src:"cheeseburger.png", id:2 },
  { name:"fries", src:"fries.png", id:3 },
  { name:"fries", src:"fries.png", id:4 },
  { name:"hotdog", src:"hotdog.png", id:5 },
  { name:"hotdog", src:"hotdog.png", id:6 },
  { name:"ice cream", src:"ice-cream.png", id:7 },
  { name:"ice cream", src:"ice-cream.png", id:8 },
  { name:"milkshake", src:"milshake.png", id:9 },
  { name:"milkshake", src:"milshake.png", id:10 },
  { name:"pizza", src:"pizza", id:11 },
  { name:"pizza", src:"pizza", id:12 },
]

window.addEventListener('load', () => {
  for (let i = 0; i < cards.length; i++) {
    const gameBoard = document.querySelector('.gameBoard')
    let topCard = document.createElement('div')
    topCard.innerHTML = '<img class="topCard" src="/images/blank.png" alt="top of card">'
    gameBoard.appendChild(topCard)
    window.addEventListener('click', flipCard)
  }


  function flipCard() {
    console.log("hi")
  }

})