class Card {
  //atributo
  value;
  img;

  //constructor
  constructor(cardCode) {
    this.img = `img/${cardCode}.png`;
    this.value = cardCode.substring(0, cardCode.length - 1);
    switch (this.value) {
      case "J":
      case "Q":
      case "K":
        this.value = 10;
        break;
      default:
        this.value = Number(this.value);
        break;
    }
  }

  //metodos

  //getter/setter
}

class Player {
  constructor() {
    this.name = prompt(`Introduzca su nombre`);
    this.chips = 1000;
    this.playerscore = 0;
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
    this.score += card.value;
  }

  bet(amount) {
    if (amount <= this.chips) {
      this.chips -= amount; // Restar el monto apostado de las fichas del jugador
      return amount;
    } else {
      console.log("No tienes suficientes fichas para apostar esa cantidad.");
      return 0;
    }
  }
}
