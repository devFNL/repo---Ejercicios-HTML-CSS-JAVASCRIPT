// concat, une arrays
let arr1 = [1, 2, 3];
let arr2 = [9, 8, 7];
let arrayTotal = arr1.concat(arr2);
console.log("Concat: " + arrayTotal);

// join, junta elementos de una array
let frutas = ["Kiwi", "Limon", "Uva", "Banana", "Naranja"];
var ejFrutas = frutas.join();
console.log("Join: " + ejFrutas);

// pop, extrae el ultimo elemento del array y lo retorna
let frut = frutas.pop();
console.log("Pop: " + frut);
console.log(frutas);

// push, añadir nuevos elementos al array, pero retorna solo el nuevo tamaño
let frutasPush = frutas.push("Mandarina");
console.log("Push: " + frutasPush);
console.log(frutas);

// shift, extrae el primer elemento del array y lo retorna
let rutas = frutas.shift();
console.log("Shift: " + rutas);
console.log(frutas);

// find, devuelve el valor del primer elemento del array que cumpla una condicion
let numeros = [5, 12, 8, 130, 44];
let encontrado = numeros.find(elemento => elemento > 50);
console.log("Find: " +encontrado);

// unshift, añadir nuevos elmeentos AL INICIO del array, pero retorna solo el nuevo tamaño
let frutasUnshift = frutas.unshift("Anana");
console.log("Unshift: " + frutas);