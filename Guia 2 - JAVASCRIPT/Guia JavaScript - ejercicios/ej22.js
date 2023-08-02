const $boton = document.getElementById("clicke");

function escribirMensaje() {
  document.getElementById("test").innerText = "YA NO DICE WAWAWA";
  // document.getElementById("test").innerHTML = "YA NO DICE WAWAWA";
}

$boton.addEventListener("click", escribirMensaje);

// document.getElementById("clicke").onclick = escribirMensaje;
