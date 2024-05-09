// JS: Javascript es un lenguaje que se ejecuta en el navegador, no es compilado, es interpretado
// Necesita de HTML para ejecutarse y en este asociar el JS

// Comentarios: Son lineas que el codigo no ejecuta (ignorado) y se usan normalmente para guiar a la persona que este interpretando el codigo
// '//' sirve para una sola linea de codigo
/*  
    Sirve para comentar
    varias lineas de 
    codigo
*/

// Que son las variables en programacion?
// Es un espacio en la memoria donde se almacena informacion

// Que tipos variables existen en JS?
// Numeros, cadenas (texto -> string), objetos (estructuras mas complejas, que
//     pueden estar compuestas por mas variables), arreglos, boolean (true or false)...

// que es declarar?
// es crear una variable

// Como podemos declarar variables?
// se puede hacer por medio de las palabras reservadas (es que no se deben usar por el programador para guardar informacion) let, var, const

// para crear una variable se le debe poner un nombre descriptivo
// operador asignacion '='
// declaramos e inicializamos la variable
let nombreDeDanny = "danny"; // usamos camelCase
var apellidoDeCamilo; // simplemente se declaro

// hay mundo de codigo

apellidoDeCamilo = "Alvarez"; // se le asigna un valor a la variable apellidoDeCamilo

const salarioMinimo2024 = 1300000; // definimos una constate con un valor


let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tía May";
nombre = `Tía May`;

console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );


let esMarvel = false;
console.log( typeof esMarvel );


let edad = 33;
console.log( typeof edad );

edad = 33.001;
console.log( typeof edad );


let superPoder;
console.log( typeof superPoder ); // ???

let soyNull = null;
console.log( typeof soyNull ); // ???


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 );


console.log( symbol1 === symbol2 );


