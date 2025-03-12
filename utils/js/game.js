let buttomJugar = document.querySelector("#buttomJugar");
buttomJugar.addEventListener("click", (event) => {
  //creamos el jugador
  let player = new Player();

  //Actualizamos el DOM para agregar nombre y monto de ffichas del jugador
  document.querySelector("#playerName").textContent = `Jugador: ${player.name}`;
  document.querySelector("#playerChips").innerHTML = `
    <img src="img/ficha-de-casino.png" width="25" height="25" alt="Fichas" />
    Fichas: ${player.chips}
  `;

  //Creamos la baraja
  let deck = [];
  let suits = ["P", "C", "T", "D"];

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

  //empieza el juego->
  //Barajamos el deck
  deck = _.shuffle(deck);
  console.log(deck);

  //al pulsar repartir se sacan dos cartas a la banca y a cada jugador
  let buttomRepartir = document.querySelector("#buttomRepartir");
  buttomRepartir.addEventListener("click", (event) => {
    // Reiniciamos las manos
    dealerHand = [];
    player.hand = [];
    player.playerscore = 0;
    dealerScore = 0;

    // Robar dos cartas para el dealer
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        let card = deck.pop();
        dealerHand.push(card);
        dealerScore += card.value;

        let cardImg = document.createElement("img");
        cardImg.src = `${card.img}`; // Asegúrate de que la ruta de la imagen esté bien definida
        cardImg.width = 70;
        cardImg.classList.add("mx-1");

        document.querySelector("#cardsDealer").appendChild(cardImg);
        document.querySelector(
          "#dealerScore"
        ).textContent = `Puntuación: ${dealerScore}`;
      }, i * 500); // Cada carta del dealer con 500ms de diferencia
    }

    // Robar dos cartas para el jugador
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        let card = deck.pop();
        player.addCard(card);

        let cardImg = document.createElement("img");
        cardImg.src = `${card.img}`;
        cardImg.width = 70;
        cardImg.classList.add("mx-1");

        document.querySelector("#cardsPlayer").appendChild(cardImg);
        document.querySelector(
          "#playerScore"
        ).textContent = `Puntuación: ${player.playerScore}`;
      }, i * 500); // Cada carta del jugador con 500ms de diferencia
    }
  });
  //banca

  //la banca juega hasta que tenga 17 o mas

  /* while (dealerScore < 17) {
  dealerScore += deck.pop().value;
} */

  /* let interval = setInterval(() => {
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
  let playerScore = 0; */
});
