const $form = document.querySelector(".form");
const $diametro = document.getElementById("diametro");

function calcular(event) {
  event.preventDefault();
  let radio = $diametro.value / 2;
  let area = Math.PI * Math.pow(radio, 2);
  let perimetro = 2 * Math.PI * radio;

  console.log("El radio es: " + radio);
  console.log("El área es: " + area);
  console.log("El perímetro es: " + perimetro);
}

$form.addEventListener("submit", calcular);
