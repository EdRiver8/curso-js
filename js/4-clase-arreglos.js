// crear vector de frutas
let vectorFrutas = ["Manzana", "Banano", "Gato", "Uva", "El Chapulin"];
// ultima posicion del vector => cantidad de elementos - 1
// 5 - 1 = 4, contando como computador, iniciando el conteo desde cero
console.log("Mostrando todo el vector: ", vectorFrutas);
console.log("Mostra el primer elemento del vector: ", vectorFrutas[0]);
console.log("Mostrar el gato: ", vectorFrutas[2]);

let otroVector = [
  true,
  "Hola Mundo!",
  ["Wolverine", "Cap", "Iron-Man", ["Adamantium", "Vibranium", "Jarbis"]],
  function () {},
];

console.log({ otroVector });

console.log(otroVector[2][3]);

let listaJuguetes = [];

// ingresar en la ultima posicion
listaJuguetes.push("Terreneitor"); // 0
listaJuguetes.push("Barbie"); // 1
listaJuguetes.push("Adivina quien"); // 2
listaJuguetes.push("Balon"); // 3
listaJuguetes.push("Atari"); // 4
listaJuguetes.push("Michi"); // 5

let jugueteExiste = listaJuguetes.includes("terreneitor"); // case sensitive

console.log(jugueteExiste);

listaJuguetes.length;

// console.log(listaJuguetes);

// // eliminar el ultimo
// listaJuguetes.pop();

// let nuevoLargo = listaJuguetes.push("Ken");

// console.log(nuevoLargo);

// let elementoEliminado = listaJuguetes.pop();

// console.log(elementoEliminado);

// let copiaPedazoVector = listaJuguetes.slice(0, 4);

// console.log("Tamaño del vector: ", listaJuguetes.length);
// console.log("Parte del vector: ", copiaPedazoVector);

// listaJuguetes.listaJuguetes // eliminar el primero
//   .shift();

// console.log(listaJuguetes);

// // Ingresar al inicio
// listaJuguetes.unshift("Operando");

// //Eliminar en una posicion dada
// let pos = 0;
// listaJuguetes.splice(pos);

// // buscar la posicion de un elemento
// let indexJugueteBuscado = listaJuguetes.indexOf("Barbie");
// console.log(indexJugueteBuscado);
