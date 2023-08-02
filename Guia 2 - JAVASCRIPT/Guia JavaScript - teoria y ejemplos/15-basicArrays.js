// 2 formas de inicializar
let arr = new Array();
let arra = [];

// llenado manual
let frutas = ["Manzana", "Naranja", "Frutilla"];

// imprimo 1 x 1
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// imprimo todos juntos
console.log(frutas);

// reemplazo 1 elemento del array
frutas[2] = "Uva";
console.log(frutas);
console.log(frutas.length);

// agregar 1 elemento
frutas[3] = "Limon";
console.log(frutas);
console.log(frutas.length);

// delete, borra 1 elemento (pero queda existente, solo que vacio)
delete frutas[0];
console.log(frutas);
console.log(frutas.length);
