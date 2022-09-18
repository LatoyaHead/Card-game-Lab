const CARDS = [
  {
    code: "5S",
    image: "https://deckofcardsapi.com/static/img/5S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5S.svg",
      png: "https://deckofcardsapi.com/static/img/5S.png",
    },
    value: "5",
    suit: "SPADES",
  },
  {
    code: "8D",
    image: "https://deckofcardsapi.com/static/img/8D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/8D.svg",
      png: "https://deckofcardsapi.com/static/img/8D.png",
    },
    value: "8",
    suit: "DIAMONDS",
  },
  {
    code: "4S",
    image: "https://deckofcardsapi.com/static/img/4S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4S.svg",
      png: "https://deckofcardsapi.com/static/img/4S.png",
    },
    value: "4",
    suit: "SPADES",
  },
  {
    code: "8S",
    image: "https://deckofcardsapi.com/static/img/8S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/8S.svg",
      png: "https://deckofcardsapi.com/static/img/8S.png",
    },
    value: "8",
    suit: "SPADES",
  },
  {
    code: "JC",
    image: "https://deckofcardsapi.com/static/img/JC.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/JC.svg",
      png: "https://deckofcardsapi.com/static/img/JC.png",
    },
    value: "JACK",
    suit: "CLUBS",
  },
  {
    code: "AS",
    image: "https://deckofcardsapi.com/static/img/AS.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/AS.svg",
      png: "https://deckofcardsapi.com/static/img/AS.png",
    },
    value: "ACE",
    suit: "SPADES",
  },
  {
    code: "3D",
    image: "https://deckofcardsapi.com/static/img/3D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/3D.svg",
      png: "https://deckofcardsapi.com/static/img/3D.png",
    },
    value: "3",
    suit: "DIAMONDS",
  },
  {
    code: "AH",
    image: "https://deckofcardsapi.com/static/img/AH.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/AH.svg",
      png: "https://deckofcardsapi.com/static/img/AH.png",
    },
    value: "ACE",
    suit: "HEARTS",
  },
  {
    code: "0C",
    image: "https://deckofcardsapi.com/static/img/0C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/0C.svg",
      png: "https://deckofcardsapi.com/static/img/0C.png",
    },
    value: "10",
    suit: "CLUBS",
  },
  {
    code: "7C",
    image: "https://deckofcardsapi.com/static/img/7C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/7C.svg",
      png: "https://deckofcardsapi.com/static/img/7C.png",
    },
    value: "7",
    suit: "CLUBS",
  },
  {
    code: "4D",
    image: "https://deckofcardsapi.com/static/img/4D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4D.svg",
      png: "https://deckofcardsapi.com/static/img/4D.png",
    },
    value: "4",
    suit: "DIAMONDS",
  },
  {
    code: "8C",
    image: "https://deckofcardsapi.com/static/img/8C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/8C.svg",
      png: "https://deckofcardsapi.com/static/img/8C.png",
    },
    value: "8",
    suit: "CLUBS",
  },
  {
    code: "2S",
    image: "https://deckofcardsapi.com/static/img/2S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2S.svg",
      png: "https://deckofcardsapi.com/static/img/2S.png",
    },
    value: "2",
    suit: "SPADES",
  },
  {
    code: "9S",
    image: "https://deckofcardsapi.com/static/img/9S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/9S.svg",
      png: "https://deckofcardsapi.com/static/img/9S.png",
    },
    value: "9",
    suit: "SPADES",
  },
  {
    code: "6C",
    image: "https://deckofcardsapi.com/static/img/6C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/6C.svg",
      png: "https://deckofcardsapi.com/static/img/6C.png",
    },
    value: "6",
    suit: "CLUBS",
  },
  {
    code: "QD",
    image: "https://deckofcardsapi.com/static/img/QD.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/QD.svg",
      png: "https://deckofcardsapi.com/static/img/QD.png",
    },
    value: "QUEEN",
    suit: "DIAMONDS",
  },
  {
    code: "0D",
    image: "https://deckofcardsapi.com/static/img/0D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/0D.svg",
      png: "https://deckofcardsapi.com/static/img/0D.png",
    },
    value: "10",
    suit: "DIAMONDS",
  },
  {
    code: "5C",
    image: "https://deckofcardsapi.com/static/img/5C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5C.svg",
      png: "https://deckofcardsapi.com/static/img/5C.png",
    },
    value: "5",
    suit: "CLUBS",
  },
  {
    code: "AD",
    image: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/aceDiamonds.svg",
      png: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    },
    value: "ACE",
    suit: "DIAMONDS",
  },
  {
    code: "7H",
    image: "https://deckofcardsapi.com/static/img/7H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/7H.svg",
      png: "https://deckofcardsapi.com/static/img/7H.png",
    },
    value: "7",
    suit: "HEARTS",
  },
  {
    code: "QC",
    image: "https://deckofcardsapi.com/static/img/QC.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/QC.svg",
      png: "https://deckofcardsapi.com/static/img/QC.png",
    },
    value: "QUEEN",
    suit: "CLUBS",
  },
  {
    code: "9C",
    image: "https://deckofcardsapi.com/static/img/9C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/9C.svg",
      png: "https://deckofcardsapi.com/static/img/9C.png",
    },
    value: "9",
    suit: "CLUBS",
  },
  {
    code: "5D",
    image: "https://deckofcardsapi.com/static/img/5D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5D.svg",
      png: "https://deckofcardsapi.com/static/img/5D.png",
    },
    value: "5",
    suit: "DIAMONDS",
  },
  {
    code: "3S",
    image: "https://deckofcardsapi.com/static/img/3S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/3S.svg",
      png: "https://deckofcardsapi.com/static/img/3S.png",
    },
    value: "3",
    suit: "SPADES",
  },
  {
    code: "KC",
    image: "https://deckofcardsapi.com/static/img/KC.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/KC.svg",
      png: "https://deckofcardsapi.com/static/img/KC.png",
    },
    value: "KING",
    suit: "CLUBS",
  },
  {
    code: "JH",
    image: "https://deckofcardsapi.com/static/img/JH.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/JH.svg",
      png: "https://deckofcardsapi.com/static/img/JH.png",
    },
    value: "JACK",
    suit: "HEARTS",
  },
  {
    code: "6D",
    image: "https://deckofcardsapi.com/static/img/6D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/6D.svg",
      png: "https://deckofcardsapi.com/static/img/6D.png",
    },
    value: "6",
    suit: "DIAMONDS",
  },
  {
    code: "4H",
    image: "https://deckofcardsapi.com/static/img/4H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4H.svg",
      png: "https://deckofcardsapi.com/static/img/4H.png",
    },
    value: "4",
    suit: "HEARTS",
  },
  {
    code: "7S",
    image: "https://deckofcardsapi.com/static/img/7S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/7S.svg",
      png: "https://deckofcardsapi.com/static/img/7S.png",
    },
    value: "7",
    suit: "SPADES",
  },
  {
    code: "2D",
    image: "https://deckofcardsapi.com/static/img/2D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2D.svg",
      png: "https://deckofcardsapi.com/static/img/2D.png",
    },
    value: "2",
    suit: "DIAMONDS",
  },
  {
    code: "2C",
    image: "https://deckofcardsapi.com/static/img/2C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2C.svg",
      png: "https://deckofcardsapi.com/static/img/2C.png",
    },
    value: "2",
    suit: "CLUBS",
  },
  {
    code: "KD",
    image: "https://deckofcardsapi.com/static/img/KD.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/KD.svg",
      png: "https://deckofcardsapi.com/static/img/KD.png",
    },
    value: "KING",
    suit: "DIAMONDS",
  },
  {
    code: "JS",
    image: "https://deckofcardsapi.com/static/img/JS.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/JS.svg",
      png: "https://deckofcardsapi.com/static/img/JS.png",
    },
    value: "JACK",
    suit: "SPADES",
  },
  {
    code: "5H",
    image: "https://deckofcardsapi.com/static/img/5H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/5H.svg",
      png: "https://deckofcardsapi.com/static/img/5H.png",
    },
    value: "5",
    suit: "HEARTS",
  },
  {
    code: "3H",
    image: "https://deckofcardsapi.com/static/img/3H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/3H.svg",
      png: "https://deckofcardsapi.com/static/img/3H.png",
    },
    value: "3",
    suit: "HEARTS",
  },
  {
    code: "KS",
    image: "https://deckofcardsapi.com/static/img/KS.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/KS.svg",
      png: "https://deckofcardsapi.com/static/img/KS.png",
    },
    value: "KING",
    suit: "SPADES",
  },
  {
    code: "8H",
    image: "https://deckofcardsapi.com/static/img/8H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/8H.svg",
      png: "https://deckofcardsapi.com/static/img/8H.png",
    },
    value: "8",
    suit: "HEARTS",
  },
  {
    code: "2H",
    image: "https://deckofcardsapi.com/static/img/2H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/2H.svg",
      png: "https://deckofcardsapi.com/static/img/2H.png",
    },
    value: "2",
    suit: "HEARTS",
  },
  {
    code: "QH",
    image: "https://deckofcardsapi.com/static/img/QH.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/QH.svg",
      png: "https://deckofcardsapi.com/static/img/QH.png",
    },
    value: "QUEEN",
    suit: "HEARTS",
  },
  {
    code: "6S",
    image: "https://deckofcardsapi.com/static/img/6S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/6S.svg",
      png: "https://deckofcardsapi.com/static/img/6S.png",
    },
    value: "6",
    suit: "SPADES",
  },
  {
    code: "6H",
    image: "https://deckofcardsapi.com/static/img/6H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/6H.svg",
      png: "https://deckofcardsapi.com/static/img/6H.png",
    },
    value: "6",
    suit: "HEARTS",
  },
  {
    code: "9D",
    image: "https://deckofcardsapi.com/static/img/9D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/9D.svg",
      png: "https://deckofcardsapi.com/static/img/9D.png",
    },
    value: "9",
    suit: "DIAMONDS",
  },
  {
    code: "QS",
    image: "https://deckofcardsapi.com/static/img/QS.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/QS.svg",
      png: "https://deckofcardsapi.com/static/img/QS.png",
    },
    value: "QUEEN",
    suit: "SPADES",
  },
  {
    code: "0H",
    image: "https://deckofcardsapi.com/static/img/0H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/0H.svg",
      png: "https://deckofcardsapi.com/static/img/0H.png",
    },
    value: "10",
    suit: "HEARTS",
  },
  {
    code: "7D",
    image: "https://deckofcardsapi.com/static/img/7D.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/7D.svg",
      png: "https://deckofcardsapi.com/static/img/7D.png",
    },
    value: "7",
    suit: "DIAMONDS",
  },
  {
    code: "9H",
    image: "https://deckofcardsapi.com/static/img/9H.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/9H.svg",
      png: "https://deckofcardsapi.com/static/img/9H.png",
    },
    value: "9",
    suit: "HEARTS",
  },
  {
    code: "0S",
    image: "https://deckofcardsapi.com/static/img/0S.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/0S.svg",
      png: "https://deckofcardsapi.com/static/img/0S.png",
    },
    value: "10",
    suit: "SPADES",
  },
  {
    code: "AC",
    image: "https://deckofcardsapi.com/static/img/AC.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/AC.svg",
      png: "https://deckofcardsapi.com/static/img/AC.png",
    },
    value: "ACE",
    suit: "CLUBS",
  },
  {
    code: "KH",
    image: "https://deckofcardsapi.com/static/img/KH.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/KH.svg",
      png: "https://deckofcardsapi.com/static/img/KH.png",
    },
    value: "KING",
    suit: "HEARTS",
  },
  {
    code: "4C",
    image: "https://deckofcardsapi.com/static/img/4C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/4C.svg",
      png: "https://deckofcardsapi.com/static/img/4C.png",
    },
    value: "4",
    suit: "CLUBS",
  },
  {
    code: "3C",
    image: "https://deckofcardsapi.com/static/img/3C.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/3C.svg",
      png: "https://deckofcardsapi.com/static/img/3C.png",
    },
    value: "3",
    suit: "CLUBS",
  },
  {
    code: "JD",
    image: "https://deckofcardsapi.com/static/img/JD.png",
    images: {
      svg: "https://deckofcardsapi.com/static/img/JD.svg",
      png: "https://deckofcardsapi.com/static/img/JD.png",
    },
    value: "JACK",
    suit: "DIAMONDS",
  },
]; 
//LETS GET HACKING! // Grab the button // Grab the deck
// Create Function - Draw & Show ONLY ONE card - at RANDOM
// Inside the function // Create random index // Grab a random card from the cards array // create new image element // set the 'src' attribute of the img use // setAttribute() // append the image to the deck // Add the function to the draw one buttons

// Create Function - Draw & Show *FIVE* *RANDOM* Cards
// **BONUS** Display the Point Value

// Create Function - Search & Display All Cards that are greater than OR equal to Search Input
// **BONUS** Display Suit & Value in a separate element

// Create Function - RESET! Clear the Card Display
// **HINT! RED WEDDING LAB!**
// */

const button1 = document.getElementById('draw-card')
const button2 = document.getElementById('pick-five')
const button3 = document.getElementById('show-all')
const button4 = document.getElementById('reset')
const deckContainer = document.getElementById('deck-of-cards')
const div = document.querySelector('.inner')
const input = document.querySelector('input')

button1.addEventListener('click', draw1)
button2.addEventListener('click', draw5)
button3.addEventListener('click', showAll)
button4.addEventListener('click', reset)
input.addEventListener('input', search)

function draw1(){
  const randomIndex = CARDS[Math.floor(Math.random() * 52)]
  console.log("RANDOM ", randomIndex);
  const img = document.createElement('img')
  img.src = randomIndex.image
  deckContainer.appendChild(img)
}
function draw5(){
  for(let i = 0; i < 5; i++){
    draw1()
  }
}
function showAll(){
  displayCards(CARDS)
}
function search(){
  let inputValue = input.value 
  const result = CARDS.filter(card => {
    if(card.value === 'QUEEN' || card.value === 'KING' || card.value === 'JACK' || card.value === 'ACE'){
      return card
    } else{
     return Number(card.value) >= Number(inputValue)
    }
  })
  console.log(result);
  displayCards(result)
}

function displayCards(cards){
  for(let i = 0; i < cards.length; i++){
    const img = document.createElement('img')
    img.src = cards[i].image
    deckContainer.appendChild(img)
  }
}
function reset(){
  const children = deckContainer.querySelectorAll('img')
  const list = Array.from(children) //turning the nodelist into an array for javascript so we can use the array functions like map(), filter, reduce...etc
  list.map(list => list.remove())
}