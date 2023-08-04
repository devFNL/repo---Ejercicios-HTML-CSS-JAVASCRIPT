// Sets (conjuntos).
// no permite elementos duplicados

let setNombres = new Set();
let pablo = { name: "Pablo" };
let manuel = { name: "Manuel" };
let javier = { name: "Javier" };

setNombres.add(pablo);
setNombres.add(manuel);
setNombres.add(javier);
setNombres.add(pablo); // no se va a insertar, ya que un set no permite duplicados
setNombres.add(manuel); // no se va a insertar, ya que un set no permite duplicados

console.log(setNombres.size);

for (let nombre of setNombres) {
  console.log(nombre.name);
}

let setFrutas = new Set(["naranjas", "manzanas", "peras"]);

for (let fruta of setFrutas) {
  console.log(fruta);
}
