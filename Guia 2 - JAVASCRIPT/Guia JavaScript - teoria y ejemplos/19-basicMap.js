let map = new Map();
map.set('string', 'string random');          // un string como key
map.set(1, 'numero random');        // un número como key
map.set(true, 'boolean random');   // un booleano como key

// objeto = convertiria las key a string.
// Map mantiene el tipo de dato en las key

console.log(map.get('string'));          // "string random"
console.log(map.get(1));         // "numero random random"
console.log(map.get(true));
console.log(map.size);              // 3



let receta = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas', 50]
]);

// .keys() , devuelve las keys
for (let vegetales of receta.keys()) {
    console.log(vegetales);
}

// .values() , devuelve los values
for (let cantidad of receta.values()) {
    console.log(cantidad);
}

// .entries() , devuelve las entry (todo)
for (let entry of receta) {
    console.log(entry);
}