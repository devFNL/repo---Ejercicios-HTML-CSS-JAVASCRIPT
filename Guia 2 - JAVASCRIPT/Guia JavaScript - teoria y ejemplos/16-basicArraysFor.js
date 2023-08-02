let frutas = ["Manzana", "Naranja", "Frutilla"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// forEach propio de arrays
frutas.forEach(function(aux) {
    console.log(aux);
})


// un array ya cargado
frutas.forEach(mostrarArray);

// funcion mostrar
function mostrarArray(elemento, indice, array){
    console.log("posicion: [" + indice + "] = " + elemento);
}

// datos manuales
["Manzana", "Naranja", "Frutilla"].forEach(mostrarArray);


// for of
for (let fruta of frutas) {
    console.log(frutas);
}

// for of para objetos por ejemplo seria:
for (let datos of object) {
    console.log(datos.nombre);
    console.log(datos.apellido);
}