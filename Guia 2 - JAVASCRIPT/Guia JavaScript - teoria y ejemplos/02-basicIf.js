let edad = 19;
let altura = 1.45;

if (edad > 18 && altura > 1.50) {
    console.log("Podes subirte a la montaña rusa");
} else if (edad < 18 && altura > 1.50) {
    console.log("No podes subirte, necesitas ser mas grande");
} else if (edad > 18 && altura < 1.50){
    console.log("No podes subirte, tu altura no es suficiente");
}