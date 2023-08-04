// Condicional if.
// atencion a los operadores. usar == o === o !== para mas estrictez en los tipos de datos

let edad = 19;
let altura = 1.45;

if (edad > 18 && altura > 1.5) {
  console.log("Podes subirte a la montaña rusa");
} else if (edad < 18 && altura > 1.5) {
  console.log("No podes subirte, necesitas ser mas grande");
} else if (edad > 18 && altura < 1.5) {
  console.log("No podes subirte, tu altura no es suficiente");
}
