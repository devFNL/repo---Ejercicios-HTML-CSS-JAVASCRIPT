let frutas = ["Manzana", "Naranja", "Frutilla", "Uva", "Durazno"];
console.log("Array entero: " + frutas);
console.log("Array length: " + frutas.length);

// splice, borra definitivamente items
// se indica en este caso: desde el indice: 2 remover: 1 elemento
frutas.splice(2,1);
console.log("Array despues de splice: " + frutas);
console.log("Array length: " + frutas.length);

let verduras = ["Lechuga", "Tomate", "Cebolla", "Huevo"];
console.log("Array entero: " + verduras);
// se indica en este caso: desde el indice: 0 remover/modificar: 3 elementos
verduras.splice(0, 3, "Cobre", "Metal", "Oro");
console.log("Array despues de splice reemplazando: " + verduras);

// slice, devuelve una copia del array. desde la posicion : 1, hasta la posicion : 3 (NO INCLUSIVE, en este caso seria 2)
console.log("Copia: " + verduras.slice(1,3));

// split, separa la string en elementos segun el delimitante "delim"
let nombres = 'Bilbo, Gandalf, Aragorn';

let lotr = nombres.split(', ');

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
function compare(a, b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b)  return -1;
}

vec.sort(compare);
console.log("Con la funcion: " + vec);

// map, crea un nuevo array con los resultados de una funcion llamada. no olvidar el return
let longitudes = ["Bilbo", "Gandalf", "Aragorn"].map(function(nombres){
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
var arra2 = arra1.map(function(x){
    return x = x * 2;
});
console.log(arra2);
var arra2 = arra1.flatMap(function(x){
    return x = x * 2;
});
console.log(arra2);