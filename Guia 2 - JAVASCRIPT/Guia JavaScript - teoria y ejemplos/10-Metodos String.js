// Metodos string basicos.

let letras = "aloha";
let numeros = 234;

// longitud de la string
console.log(letras.length);
// pasar a minus
console.log(letras.toLowerCase());
// pasar a mayus
console.log(letras.toUpperCase());
// convertir a string
console.log(numeros.toString());
// reemplazar la primera letra a por e
console.log(letras.replace(/a/, "e"));
// reemplazar todas las letras a por e, g = global
console.log(letras.replace(/a/g, "e"));
// acceder a substrings (letras)
console.log(letras.substring(2, 4));
