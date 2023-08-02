var auto = new Object();
auto.marca = "Ford";
auto.mod = "Focus";
auto.anio = 2012;

var auto = {
    marca : "Ford",
    mod : "Focus",
    anio : 2012
}

// constructor
function Auto(marca, mod, anio){
    this.marca = marca;
    this.mod = mod;
    this.anio = anio;
}

var auto1 = new Auto("Ford", "Focus", 2012);
var auto2 = new Auto("Peugeot", "206",  2011);

// agregar propiedades a objetos puntuales
auto1.color = "Negro"

console.log(auto1);