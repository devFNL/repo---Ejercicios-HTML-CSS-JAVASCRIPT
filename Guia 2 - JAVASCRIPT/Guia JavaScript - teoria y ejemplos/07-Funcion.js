// Funcion. function. fn.
// Realiza acciones.
// function nombre(argumentos si es que lleva) {cuerpo de la funcion}
// puede tener retorno o no.
// llamar a la funcion.

// ejemplo sin parametro
function saludar() {
  console.log("hola mundo");
}

saludar();

// ejemplo con parametro
let nombre = "Fede";

function saludarA(nombre) {
  console.log("Hola " + nombre);
}

saludarA(nombre);
saludarA("Federico");

// ejemplo con retorno
function suma(n1, n2) {
  let res;
  res = n1 + n2;
  return res;
}

let sum = suma(22, 3);

console.log(sum);
