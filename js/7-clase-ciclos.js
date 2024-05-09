/*
    Los ciclos tambien conocidos como bucles o loops, son estructuras de control que permiten ejecutar 
    un bloque de código de manera repetitiva hasta que se cumpla una condición específica.

    Permiten automatizar tareas repetitivas y procesar grandes cantidades de datos de manera eficiente. 
    Existen diferentes tipos de ciclos, cada uno con su propia sintaxis y características, pero los más comunes son:

    Ciclo for: Este ciclo se utiliza para ejecutar un bloque de código un número determinado de veces.

    nace un niño y comienza a contar su cumpleaños mientras este vivo
    for (inicialización; condición; expresión de incremento) {
        // Bloque de código a ejecutar
        // despierto
        // levantarse
        // comer
        // ir al baño...

        -- murio
    }
    La inicialización se ejecuta una sola vez al principio del ciclo y se utiliza para declarar e inicializar
    let contador = 1; // comenzamos a contar el cumpleanios
    la variable de control del ciclo. La condición se evalúa antes de cada iteración del ciclo y se utiliza para
    determinar si el ciclo debe continuar o no. 
    La expresión de incremento se ejecuta al final de cada iteración del ciclo y se utiliza para modificar la 
    variable de control del ciclo. incremento = 1 


    Ciclo while: Este ciclo se utiliza para ejecutar un bloque de código mientras se cumpla una condición específica.



    while (condición) {
        // Bloque de código a ejecutar
        // despierto
        // levantarse
        // comer
        // ir al baño...

        -- murio
    }
    La condición se evalúa antes de cada iteración del ciclo y se utiliza para determinar si el ciclo debe continuar o no.


    Ciclo do-while: Este ciclo es similar al ciclo while, pero la diferencia es que el bloque de código se ejecuta al 
    menos una vez, incluso si la condición inicial es falsa.
    vida = 1;
    do {
        // Bloque de código a ejecutar

        // despierto
        // levantarse
        // comer
        // ir al baño...
        vida--; // vida = vida - 1;

        -- murio
    } while (condición);
    El bloque de código se ejecuta una vez antes de evaluar la condición, y luego se repite mientras la condición sea verdadera.
*/

// quiero mostrar lo numeros del 0 al 10
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// // ...
// console.log(10);

// lo optimo seria implementar un bucle
for (let contador = 0; contador <= 10; contador = contador + 1) {
  console.log(contador);
}

// contador = 0, 1, 2, 3, 4
// 0 <= 10 ? true, 1 <= 10 ? true, 2 <= 10 ? true, 3 <= 10 ? true
// muestra(0), muestra(1), muestra(2), muestra(3)

// contador = 10, 11
// 10 <= 10 ? true, 11 <= 10 ? false
// muestra(10)

// continuar resto del codigo
let contador2 = 0;
while (contador2 <= 10) {
  console.log(contador2);
  contador2 = contador2 + 1;
}

let contador3 = 0;
do {
  console.log(contador3);
  contador3 = contador3 + 1;
} while (contador3 <= 10);

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
