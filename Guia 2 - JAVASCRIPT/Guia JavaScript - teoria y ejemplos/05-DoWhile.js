// Bucle (loop) do-while.
// atencion a los operadores. usar == o === o !== para mas estrictez en los tipos de datos

let nota;

do {
  nota = 20;

  if (nota < 1 || nota > 10) {
    console.log("Nota invalida");
  } else {
    console.log("La nota se cargo correctamente");
  }

  break;
} while (nota < 1 || nota > 10);