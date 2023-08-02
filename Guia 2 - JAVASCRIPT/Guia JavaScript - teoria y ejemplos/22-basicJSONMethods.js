// parse, convertir JSON a objeto

const personaje = '{ "name": "Linux", "life": 100 }';
const obj = JSON.parse(personaje);

console.log(obj.name);
console.log(obj.life);

// stringify , convertir objeto a JSON

const objeto = {
  nombre: "Linux",
  salud: 100,

  saludar: function () {
    // las funciones no estan soportadas por JSON
    return "Hola!";
  },
};

const pj = JSON.stringify(objeto);
console.log(pj);
