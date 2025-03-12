// VAmos a dar funcionalidad dinamica para poder cambiar los dorsos
// Obtenemos el elemento de la imagen del Dealer en el DOM
let dealerImage = document.querySelector(".col-3 img");
// Agregamos el EventListener a cada opción del menú desplegable
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    // Obtenemos el ID del item que se ha seleccionado (dorso1, dorso2, etc.)
    let selectedDorso = event.target.id;

    // Cambiamos la imagen del Dealer según la opción seleccionada
    switch (selectedDorso) {
      case "dorso1":
        dealerImage.src = "img/red.png";
        break;
      case "dorso2":
        dealerImage.src = "img/blue.png";
        break;
      case "dorso3":
        dealerImage.src = "img/grey_back.png";
        break;
      case "dorso4":
        dealerImage.src = "img/red_back.png";
        break;
      default:
        dealerImage.src = "img/red.png"; // Por defecto, si no se selecciona nada
    }
  });
});
