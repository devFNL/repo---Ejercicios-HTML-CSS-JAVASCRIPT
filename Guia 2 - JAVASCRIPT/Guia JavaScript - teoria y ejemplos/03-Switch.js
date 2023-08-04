// Switch. puede ir mas de 1 case.
// Case "agua":
// Case "AGUA":
//      logica;
//      break;
// * si en la logica hay un return, el break no es necesario
// atencion a los operadores. usar == o === o !== para mas estrictez en los tipos de datos

let elemento = "aire";

switch (elemento) {
  case "agua":
    console.log("Color: Azul");
    break;
  case "fuego":
    console.log("Color: Rojo");
    break;
  case "tierra":
    console.log("Color: Marron");
    break;
  case "aire":
    console.log("Color: Blanco");
    break;
  default:
    console.log("No es un elemento");
    break;
}
