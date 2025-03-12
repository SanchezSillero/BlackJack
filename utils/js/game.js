let deck = [];
let suits = ["P", "C", "T", "R"];

for (let index = 0; index < suits.length; index++) {
  for (let i = 1; i <= 13; i++) {
    switch (i) {
      case 11:
        deck.push(new Card("J" + suits[index]));
        break;
      case 12:
        deck.push(new Card("Q" + suits[index]));
        break;
      case 13:
        deck.push(new Card("K" + suits[index]));
        break;
      default:
        deck.push(new Card(i + suits[index]));
        break;
    }
  }
}

//Barajamos el deck
deck = _.shuffle(deck);
console.log(deck);

//empieza el juego->
//se sacan dos cartas a la banca y a cada jugador
//banca
setInterval(() => {
  console.log("Repartiendo...");
}, 500);

//la banca juega hasta que tenga 17 o mas
let dealerScore = 0;

/* while (dealerScore < 17) {
  dealerScore += deck.pop().value;
} */

let interval = setInterval(() => {
  console.log("Sacando carta...");
  if (dealerScore < 17) {
    let card = deck.pop();
    dealerScore += card.value;
    console.log(card.img);
    console.log(dealerScore);
  } else {
    console.log(`La banca deja de jugar porque tiene ${dealerScore}`);
    clearInterval(interval);
  }
}, 3000);
//Turno del jugador
let playerScore = 0;
