// IMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTEIMPORTANTE

// parse, convertir JSON a objeto
// IMPORTANTE
const persona = '{ "nombre": "Pepito", "edad": 40 }';
const obj = JSON.parse(persona);

console.log(obj.nombre);
console.log(obj.edad);

// stringify , convertir objeto a JSON
// IMPORTANTE
const objetoPersona = {
  nombre: "Pepito",
  edad: 40,

  // las funciones no estan soportadas por JSON
  saludar: function () {
    return "Hola!";
  },
};

const pers = JSON.stringify(objetoPersona);
console.log(pers);
