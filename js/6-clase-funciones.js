/*
    Se crean porque existe un procedimiento que se puede ejecutar varias veces en el programa,
    (bloques de codigo reutilizables que realizan una tarea especifica)
    o por la necesidad de estructurar de forma ordenada y con responsabilidad unica el codigo.
    Con lo anterior se evita copiar una y otra vez las mismas lineas.

    Nota: Son como las formulas o funciones en matematicas, reciben unos valores (variables, 
    constantes, arreglos, listas, objetos, diferentes tipos de datos) con los cuales va a 
    trabajar internamente para producir una salida.

    tienen la siguiente estructura:
        * function = palabra reservada para decir que se va a construir una funcion
        * nombre de la funcion =  nombre que define lo que hace la funcion
        * (paramentros) = valores con los que va a trabajar la funcion, separados por ','
           puede tener cero o muchos parametros.
        {
            cuerpo de la funcion:
            lineas de codigo que se ejecutan cuando se llama una funcion
        }

    llamar - invocar: es hacer uso de una funcion, se copia el nombre seguido de dos 
    parentesis y en ellos los argumentos con los que va a trabajar.

    Las funciones pueden retornar datos o no; si va a retornar algo, para ello se usa la 
    palabra reservada 'return' y seguido lo que se va a devolver, la linea que llama la 
    funcion debe tener una variable en la que se almacene el dato a devolver; cuando la
    funcion no retorna algo, no es necesario tener una variable de almacenaje, a este caso
    se le llama a la funcion: procedimiento.

    Existen en js tres tipos de funciones:
    1- Funciones con nombre: Se definen utilizando la palabra clave function seguida de un nombre 
    de función. Por ejemplo: function suma(a, b) { return a + b; }.

    2- Funciones anónimas: Son funciones que no tienen un nombre asociado y se pueden asignar a 
    variables o pasarse como argumentos a otras funciones. Por ejemplo: 
    let suma = function(a, b) { return a + b; }.

    3- Funciones flecha (arrow functions): Son una forma más concisa de escribir funciones en 
    JavaScript, introducidas en ECMAScript 6 (ES6). Por ejemplo: let suma = (a, b) => a + b;.

    Metodos: Son funciones que están asociadas a objetos y se llaman utilizando la notación de punto. 
    Por ejemplo: console.log(). el objeto es 'console' y el metodo es 'log()'

*/

// pitagoras hipotenusa_al_cuadrado = cateto1_al_cuadrado + cateto2_al_cuadrado (paremetros - argumentos)

// function pitagoras (cateto1, cateto2){ //3, 4
//     // return (cateto1**2 + cateto2**2)**(1/2);
//     return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
// }

// let hipotenusa = pitagoras(3, 4);
// let hipotenusa2 = pitagoras(10, 5);
// let hipotenusa3 = pitagoras(7, 3);

// console.log(cateto1); // no existe por fuera del dominio de la funcion

// console.log(`El valor de la hipotenusa 1: ${hipotenusa}`);
// console.log(`El valor de la hipotenusa 2: ${hipotenusa2}`);
// console.log(`El valor de la hipotenusa 3: ${hipotenusa3}`);

// let hipotenusa4 = (cateto1, cateto2) => {
//     return (cateto1**2 + cateto2**2)**(1/2);
//     // codigo aca abajo ya no se ejecuta porque finaliza con el return
// }

// console.log(`El valor de la hipotenusa 4: ${hipotenusa4(2,2)}`);

// se tiene una nomina de 10000 empleados en una empresa, se desea crear una base de datos
// que contenga la siguiente informacion:
// nombre, salario basico, valor de la hora, genero
// se requiere poder agregar, actualizar, eliminar y buscar los datos del empleado (crud)

// valor de la hora? => salarioBasico / 188 (h/m)

// db con el conocimiento que tenemos a dia de hoy
let empleados = [];

function agregarEmpleado(
  nombreParam,
  salarioBasicoParam,
  generoParam,
  cedula,
  edadParam
) {
  let empleado = {
    indice: empleados.length + 1,
    nombre: nombreParam,
    salarioBasico: salarioBasicoParam,
    genero: generoParam,
    cedula: cedula,
    valorHora: salarioBasicoParam / 188,
    edad: edadParam,
  };
  empleados.push(empleado);
}

agregarEmpleado("Ana", 4500000, "Feminino", 123, 20);
agregarEmpleado("Mayk", 2500000, "Masculino", 456, 22);
agregarEmpleado("Fred", 4500000, "Masculino", 789, 25);
agregarEmpleado("Dayana", 7500000, "Feminino", 999, 22);
agregarEmpleado("Luisa", 3500000, "Feminino", 888, 23);
agregarEmpleado("Juan", 1500000, "Masculino", 777, 40);
agregarEmpleado("Pedro", 2500000, "Masculino", 666, 52);
agregarEmpleado("Maria", 3500000, "Feminino", 555, 38);
agregarEmpleado("Jose", 4500000, "Masculino", 444, 61);
agregarEmpleado("Jorge", 5500000, "Masculino", 333, 29);
agregarEmpleado("Luis", 6500000, "Masculino", 222, 47);
agregarEmpleado("Luisa", 7500000, "Feminino", 111, 18);

// console.log({empleados});
// console.log(empleados.length);

// crear funcion que muestre todos los empleados de la empresa
export function mostrarEmpleados() {
  for (let contador = 0; contador < empleados.length; contador = contador + 1) {
    console.log(
      `Nombre: ${empleados[contador].nombre},
            Salario Basico: ${empleados[contador].salarioBasico},
            Genero: ${empleados[contador].genero},
            Cedula: ${empleados[contador].cedula},
            Valor hora: ${empleados[contador].valorHora},
            Edad: ${empleados[contador].edad}
            `
    );
  }
}

mostrarEmpleados();

console.log("--------------------------------------------------");

// buscar y mostrar un empleado por su cedula, buscar jorge con cedula = 333
// function buscarEmpleado (cedula){
//     for(let i = 0; i < empleados.length; i++){
//         if(cedula === empleados[i].cedula){
//             console.log(
//                 `Nombre: ${empleados[i].nombre},
//                 Salario Basico: ${empleados[i].salarioBasico},
//                 Genero: ${empleados[i].genero},
//                 Cedula: ${empleados[i].cedula},
//                 Valor hora: ${empleados[i].valorHora},
//                 Edad: ${empleados[i].edad}
//             `)
//         }else{
//             console.log("El empleado buscado no se encuentra en la DB");
//         }
//     }
// }

// buscarEmpleado(890097890890);

// le cambiemos la edad, porque jorge cumplio años, modificar la funcion para que retorne
/**
 * Funcion que busca un empleado en la DB por su cedula
 * @param {number} cedula - cedula del empleado
 * @returns {object} Devuelve un empleado
 */
function buscarEmpleado(cedula) {
  for (let i = 0; i < empleados.length; i++) {
    if (cedula === empleados[i].cedula) {
      return empleados[i];
    }
  }
  return null; // null pointer exception
}

let empleadoBuscado = buscarEmpleado(333);
// if(empleadoBuscado != null){
//     console.log(`El empleado encontrado es: ${empleadoBuscado}, y su edad es ${empleadoBuscado.edad}`);
// }else{
//     console.log("El empleado buscado no se encuentra en la DB");
// }

// u => update = actualizar un empleado
// ir al vector y buscar al empleado por cc, recorrer la lista de empleados comparando la cedula de cada
// empleado contra la cedula buscada, si lo encuentra actulizar la informacion sino lo encuentra
// entonces retorna un null (vacio)

// actualice nombre, edad, salario basico
const actualizarEmpleado = function (cedula, nombre, salario, edad) {
  let contador = 0;
  while (contador < empleados.length) {
    if (cedula == empleados[contador].cedula) {
      empleados[contador].nombre = nombre;
      empleados[contador].salarioBasico = salario;
      empleados[contador].edad = edad;
      return empleados[contador];
    }
    contador = contador + 1;
  }
  return null;
};

let empleadoActualizar = actualizarEmpleado(222, "Jairo", 8000000, 55);
if (empleadoActualizar != null) {
  console.log(`Se actualizo al empleado: ${empleadoActualizar}`);
} else {
  console.log("El empleado buscado por cc no se encuentra en la DB");
}
mostrarEmpleados();

const actualizarEmpleado2 = function (cedula) {
  // let empleadoBuscado = buscarEmpleado(cedula);
  if (buscarEmpleado(cedula) != null) {
    // actualizar el empleado
    return true; // retornar empleado o bool
  }
  return false;
};
if (actualizarEmpleado2(222, "Jairo", 8000000, 55)) {
  console.log(`Se actualizo al empleado: ${empleadoActualizar}`);
} else {
  console.log("El empleado buscado por cc no se encuentra en la DB");
}

console.log("--------------------------------------------------");

// d => delete, buscar un empleado y eliminarlo, pero debe retornar el empleado eliminado
// function eliminarEmpleado (cedula){
//     for(let i = 0; i < empleados.length; i++){
//         if(cedula === empleados[i].cedula){
//             return empleados.splice(i, 1);
//         }
//     }
//     return null;
// }

// let empleadoAEliminar = eliminarEmpleado(222);
// console.log(empleadoAEliminar);

// mostrarEmpleados();

// elimar empleado haciendo uso del buscarEmpleado(cedula)
function eliminarEmpleado2(cedula) {
  let empleadoBuscado = buscarEmpleado(cedula);
  if (empleadoBuscado != null) {
    let indice = empleados.indexOf(empleadoBuscado);
    return empleados.splice(indice, 1);
  }
  return null;
}

let empleadoAEliminar2 = eliminarEmpleado2(222);
console.log(empleadoAEliminar2);

mostrarEmpleados();

// la lista de las x
/**
 * Funcion que retorna la lista de x
 * @returns {array} - lista de x
 */
function listaEmpleadosMasculinos() {
  let listaEmpleadosMasculinos = [];
  for (let i = 0; i < empleados.length; i++) {
    if (empleados[i].genero !== "Feminino") {
      listaEmpleadosMasculinos.push(empleados[i]);
    }
  }
  return listaEmpleadosMasculinos;
}

console.log(listaEmpleadosMasculinos());

// crear una funcion (filtro) que muestre a las Luisas
function luisas() {
  let luisas = [];
  for (let empleado of empleados) {
    if (empleado.nombre === "Luisa") {
      luisas.push(empleado);
    }
  }
  return luisas;
}

console.log(luisas()); // callback = una funcion que por dentro llama a otra funcion

// una funcion que muestre a los empleados que ganen mas de 3 millones

// una funcion que calcule el promedio de la edad de los empleados
