function resaltar() {
  let parrafo = document.getElementById("texto").innerHTML;
  let palabras = parrafo.split(" ");

  palabras.forEach(function (palabra, index) {
    if (palabra.length > 8) {
      palabras[index] =
        '<span style="background-color: yellow">' + palabra + "</span>";
    }
  });

  let final = palabras.join(" ");
  document.getElementById("texto").innerHTML = final;
}

document.querySelector(".click").addEventListener("click", resaltar);
