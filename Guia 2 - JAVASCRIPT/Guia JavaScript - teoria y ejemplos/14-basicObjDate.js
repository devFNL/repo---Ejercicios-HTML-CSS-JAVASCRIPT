let fecha = new Date(93, 7, 27);

fecha.getDay();

switch (fecha.getDay()) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
}

console.log(
  fecha.getDate() + " del " + fecha.getMonth() + " de " + fecha.getFullYear()
);
