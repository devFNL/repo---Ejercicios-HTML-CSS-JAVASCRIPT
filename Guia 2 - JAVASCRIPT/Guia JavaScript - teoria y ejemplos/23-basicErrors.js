/*La sentencia try consiste en un bloque “try” que contiene una o más sentencias. Las llaves {}
se deben utilizar siempre. incluso para una bloques de una sola sentencia. Al menos un
bloque “catch” o un bloque “finally” debe estar presente. Esto nos da tres formas posibles
para la sentencia “try”:
1. try…catch
2. try…finally
3. try…catch…finally
Un bloque “catch” contiene sentencias que especifican que hacer si una excepción es
lanzada en el bloque “try”. Si cualquier sentencia dentro del bloque “try” (o en una función
llamada desde dentro del bloque “try”) lanza una excepción, el control cambia
inmediatamente al bloque “catch”. Si no se lanza ninguna excepción en el bloque “try”, el
bloque “catch” se omite.
La bloque “finally” se ejecuta despues del bloque “try” y el/los bloque(s) “catch” hayan
finalizado su ejecución. Éste bloque siempre se ejecuta, independientemente de si una
excepción fue lanzada o capturada.
*/
try {
  throw "miExcepcion"; // genera una excepción
} catch (e) {
  // sentencias para manejar cualquier excepción
  logMyErrors(e); // pasa el objeto de la excepción al manejador de
  //errores
}
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

function openMyFile() {
  try {
    // retiene un recurso
    escribirMyArchivo(informacion);
  } catch (e) {
    // sentencias para manejar cualquier excepción
    logMyErrors(e); // pasa el objeto de la excepción al manejador de
    // errores
  } finally {
    cerrarMiArchivo(); // siempre cierra el recurso
  }
}
