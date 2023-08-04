// como uso comun, es LET en vez de VAR.
// let = de scope local al bloque (lo que esta entre llaves)
// var = tiene una scope global al archivo js
// const = constantes. scope global

var num1 = 2;
var num2 = 2;

console.log(num1 + num2);
console.log("La suma es: " + (num1 + num2));

function suma(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

console.log("La suma con la funcion es: " + suma(num1, num2));
