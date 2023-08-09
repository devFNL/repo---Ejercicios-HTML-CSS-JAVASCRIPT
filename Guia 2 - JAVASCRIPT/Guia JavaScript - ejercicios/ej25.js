const $form = document.querySelector("#form1");

function getFormValores() {
  event.preventDefault();
  let nombre = $form.elements.namedItem("nombre").value;
  let apellido = $form.elements.namedItem("apellido").value;

  // console.log("El nombre es: " + nombre);
  console.log(`El nombre es: ${nombre}`);
  // console.log("El apellido es: " + apellido);
  console.log(`El apellido es: ${apellido}`);
}

$form.addEventListener("submit", getFormValores);
