let frutas = ["Manzana", "Naranja", "Frutilla", "Uva", "Durazno"];
console.log("Array entero: " + frutas);
console.log("Array length: " + frutas.length);

// splice, borra definitivamente items
// se indica en este caso: desde el indice: 2 remover: 1 elemento
frutas.splice(2, 1);
console.log("Array despues de splice: " + frutas);
console.log("Array length: " + frutas.length);

let verduras = ["Lechuga", "Tomate", "Cebolla", "Huevo"];
console.log("Array entero: " + verduras);
// se indica en este caso: desde el indice: 0 remover/modificar: 3 elementos
verduras.splice(0, 3, "Cobre", "Metal", "Oro");
console.log("Array despues de splice reemplazando: " + verduras);

// slice, devuelve una copia del array. desde la posicion : 1, hasta la posicion : 3 (NO INCLUSIVE, en este caso seria 2)
console.log("Copia: " + verduras.slice(1, 3));

// SPLIT, separa la string en elementos segun el delimitante "delim"
// IMPORTANTE, de los mas usados
let nombres = "Bilbo, Gandalf, Aragorn";

let lotr = nombres.split(", ");

for (let nombres of lotr) {
  console.log(`Un mensaje para ${nombres}`);
}

// reverse, revierte el orden de los elementos
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);

// sort, funcion para ordenar
let vec = [1, 2, 15];
console.log("Default: " + vec);
vec.sort();
// se ordena "mal" porque se ordenan como Strings (orden lexicografico) por eso "2" > "15"
console.log("Solo con sort: " + vec);

// hay que usar una funcion, similar al comparator de java
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

vec.sort(compare);
console.log("Con la funcion: " + vec);

// MAP, crea un nuevo array con los resultados de una funcion llamada. no olvidar el return
// IMPORTANTE, de los mas usados
let longitudes = ["Bilbo", "Gandalf", "Aragorn"].map(function (nombres) {
  return nombres.length;
});
console.log(longitudes);

// flat, crea una nueva matriz con todos los elementos del sub-array concatenados hasta cierta profundidad
var arrayNums = [1, 2, [3, 4]];
console.log(arrayNums.flat());
var arrayNums2 = [1, 2, [3, 4, [5, 6]]];
console.log(arrayNums2.flat());

// flatMap, basicamente los 2 metodos anteriores juntos. no olvidar el return
var arra1 = [1, 2, 3, 4];
var arra2 = arra1.map(function (x) {
  return (x = x * 2);
});
console.log(arra2);
var arra2 = arra1.flatMap(function (x) {
  return (x = x * 2);
});
console.log(arra2);

// concat, une arrays
let arr1 = [1, 2, 3];
let arr2 = [9, 8, 7];
let arrayTotal = arr1.concat(arr2);
console.log("Concat: " + arrayTotal);

// JOIN, junta elementos de una array
// IMPORTANTE, de los mas usados
let frutasA = ["Kiwi", "Limon", "Uva", "Banana", "Naranja"];
var ejFrutas = frutasA.join();
console.log("Join: " + ejFrutas);

// POP, extrae el ultimo elemento del array y lo retorna
// IMPORTANTE, de los mas usados
let frut = frutas.pop();
console.log("Pop: " + frut);
console.log(frutas);

// PUSH, añadir nuevos elementos al array, pero retorna solo el nuevo tamaño
// IMPORTANTE, de los mas usados
let frutasPush = frutas.push("Mandarina");
console.log("Push: " + frutasPush);
console.log(frutas);

// shift, extrae el primer elemento del array y lo retorna
let rutas = frutas.shift();
console.log("Shift: " + rutas);
console.log(frutas);

// FIND, devuelve el valor del primer elemento del array que cumpla una condicion
// IMPORTANTE, de los mas usados
let numeros = [5, 12, 8, 130, 44];
let encontrado = numeros.find((elemento) => elemento > 50);
console.log("Find: " + encontrado);

// unshift, añadir nuevos elmeentos AL INICIO del array, pero retorna solo el nuevo tamaño
let frutasUnshift = frutas.unshift("Anana");
console.log("Unshift: " + frutas);
