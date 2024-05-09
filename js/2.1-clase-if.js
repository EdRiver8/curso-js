// el operador ternario (?), simplifica las condicionales
// se compone de tres partes
// la primera parte es la condicion a evaluar
// la segunda parte es el resultado si es verdadera la condicion
// la tercera partes es el resultado si es falsa la condicion

const personaje = "Luigi";
const caracteristica = "bebe";
// Mario, puede saltar alto
// Mario bebe, tiene mucha energia
// Luigi, corre rapido
// Yoshi, puede comer frutas
// Bowser, puede escupir fuego

// el programa debe definir que habilidad tiene segun el personaje seleccionado
if (personaje === "Mario") {
  if (caracteristica === "bebe") {
    console.log("tiene mucha energia");
  } else {
    console.log("puede saltar alto");
  }
} else if (personaje === "Luigi") {
  console.log("Corre rapido");
} else if (personaje === "Yoshi") {
  console.log("puede comer frutas");
} else if (personaje === "Bowser") {
  console.log("puede escupir fuego");
} else {
  console.log("El personaje seleccionado no existe!");
}

// usando operadores logicos
if (personaje === "Mario" && caracteristica === "bebe") {
  console.log("tiene mucha energia");
}

// sirve para cuando el camino verdadero o el falso solo requieren una
// linea de codigo
personaje === "Mario"
  ? console.log("puede saltar alto")
  : console.log("Es otro personaje");

// evaluar varios escenarios a la vez con una unica respuesta por escenario
let personaje2 = "Mario";

let habilidad =
  personaje2 === "Mario"
    ? "Sata alto"
    : personaje2 === "Luigi"
    ? "Corre Rapido"
    : personaje2 === "Bowser"
    ? "Escupe Fuego"
    : "No tiene habilidad!";

console.log(
  `El persona seleccionado es ${personaje2} y su habilidad es: ${habilidad}`
);
