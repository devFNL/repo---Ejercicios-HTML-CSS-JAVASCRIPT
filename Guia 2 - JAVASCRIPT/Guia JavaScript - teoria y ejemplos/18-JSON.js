/* 
JSON (JavaScript Object Notation - Notación de Objetos de JavaScript) es un formato ligero
de intercambio de datos. JSON es un formato que almacena información estructurada y se
utiliza principalmente para transferir datos entre un servidor y un cliente.
*/

/*
SINTAXIS JSON

Para crear correctamente un archivo .json, debes seguir la sintaxis correcta.
JSON está constituido por dos estructuras:
• Una colección de pares de nombre/valor. En varios lenguajes esto es conocido como
un objeto.
• Una lista ordenada de valores. En la mayoría de los lenguajes, esto se implementa como
arreglos, vectores, listas o secuencias.

Objetos:
Hay dos elementos centrales en un objeto JSON: claves (Keys) y valores (Values).
• Las Keys deben ser cadenas de caracteres (strings). Como su nombre en español lo
indica, estas contienen una secuencia de caracteres entre comillas.
• Los Values son un tipo de datos JSON válido. Puede tener la forma de un arreglo (array),
objeto, string, boolean, número o nulo.
Un objeto JSON comienza y termina con llaves {}. Puede tener dos o más pares de
claves/valor dentro, con una coma para separarlos. Así mismo, cada key es seguida por dos
puntos para distinguirla del valor.

Ejemplo:
*/

// {"ciudad":"Nueva York", "país":"Estados Unidos"}

/*
Aquí tenemos dos pares de clave/valor: ciudad y país son las claves, Nueva York y Estados
Unidos son los valores. Los valores en este ejemplo, son Strings. Por eso también están entre
comillas, similares a las claves.

Array
Un valor de un array puede contener objetos JSON, lo que significa que utiliza el mismo
concepto de par clave/valor. Por ejemplo:
*/

// "estudiantes": [
// {"primerNombre":"Tom", "Apellido":"Jackson"},
// {"primerNombre":"Linda", "Apellido":"Garner"},
// {"primerNombre":"Adam", "Apellido":"Cooper"}
// ]

/*
En este caso, la información entre corchetes es un array, que tiene tres objetos.
*/