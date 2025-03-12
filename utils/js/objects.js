class card {
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
