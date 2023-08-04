// Metodos Math basicos
// Math con M mayus

let num1 = 2;
console.log("Numero 1: " + num1);
let num2 = 5;
console.log("Numero 2: " + num2);
let random = Math.random() * 10;
console.log("Numero random: " + random);

// numero maximo
console.log("Mayor: " + Math.max(num1, num2));
// numero minimo
console.log("Menor: " + Math.min(num1, num2));
// elevar a potencia
console.log("Potencia: " + Math.pow(num1, num2));
console.log("Potencia al cubo: " + Math.pow(num1, 3));
// redondear para arriba
console.log("Redondeo para arriba: " + Math.ceil(random));
// redondear para abajo
console.log("Redondeo para abajo: " + Math.floor(random));
// valor absoluto
console.log("Absoluto: " + Math.abs(random));
// redondeo al mas cercano
console.log("Redondeo al mas proximo: " + Math.round(random));
// PI
console.log("Pi: " + Math.PI);
