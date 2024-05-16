// el switch es una estructura de contro que permite evaluar una expresion y compararla si hay diferentes casos
// es un condicional multiple

// switch(expresion a evaluar){
//     escenarios llamados 'casos'-> 'case'
//     palabra reservada 'break' que rompe el escenario
//     default = escenario por defecto
// }

const personaje = "Princesa"; // se evalua escenario personaje = Princesa
switch (personaje) {
  case "Mario":
    console.log("puede saltar alto");
    break;
  case "Luigi":
    console.log("Corre rapido");
    break;
  case "Bowser":
    console.log("puede escupir fuego");
    break;
  default:
    console.log("El personaje seleccionado no existe!");
}
