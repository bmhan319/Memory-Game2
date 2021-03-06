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