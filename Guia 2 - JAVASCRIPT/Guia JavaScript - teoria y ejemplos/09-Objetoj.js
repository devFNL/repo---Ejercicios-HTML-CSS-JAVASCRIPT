// Objetos.
// variable de tipo Object que guarda muchas propiedades

// inicializado como new Object() - constructor vacio.
// se agregan los atributos que se deseen
var auto = new Object();
auto.marca = "Ford";
auto.mod = "Focus";
auto.anio = 2012;

// inicializado sin constructor.
// {} significa que es un objeto.
var auto = {
  marca: "Ford",
  mod: "Focus",
  anio: 2012,
};

// funcion que actua como Constructor.
// se asignan los atributos deseados
function Auto(marca, mod, anio) {
  this.marca = marca;
  this.mod = mod;
  this.anio = anio;
}

// se llama al constructor
var auto1 = new Auto("Ford", "Focus", 2012);
var auto2 = new Auto("Peugeot", "206", 2011);

// Se pueden agregar propiedades a los objetos que querramos
// se pone el nombre de la variable.nuevaPropiedad
auto1.color = "Negro";

console.log(auto1);
