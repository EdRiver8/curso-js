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


    let vidas = 3; inicializacion de la variable de control
    while (vidas > 0 (concondición)) {
        // Bloque de código a ejecutar
        // despierto
        // levantarse
        // comer
        // ir al baño...

        -- vidas
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
// for (let contador = 0; contador <= 10; contador = contador + 1) {
//   console.log(contador);
// }

// contador = 0, 1, 2, 3, 4
// 0 <= 10 ? true, 1 <= 10 ? true, 2 <= 10 ? true, 3 <= 10 ? true
// muestra(0), muestra(1), muestra(2), muestra(3)

// contador = 10, 11
// 10 <= 10 ? true, 11 <= 10 ? false
// muestra(10)

// continuar resto del codigo
// let contador2 = 0;
// while (contador2 <= 10) {
//   console.log(contador2);
//   contador2 = contador2 + 1;
// }

// let contador3 = 0;
// do {
//   console.log(contador3);
//   contador3 = contador3 + 1;
// } while (contador3 <= 10);

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// vamos a realizar un juego que su base sea la de adivinar un numero
// R1: El numero a adivinar debe ser un valor entre 1-100 -> (el jugador debe seleccionar el rango de numeros para el numero a adivinar)
// R2: Si el jugador adivina el numero, se mostrara un msj de felicitacion y se finalizara el juego
// R3: El juego debe dar pistas sobre el numero, ejemplo el numero a adivinar es mayor o menor
// R4: El juego debe mostrar el numero de intentos que lleva cada que trate de adivinar

function adivinarNumero() {
  let numeroAleatorio = generarNumeroAleatorio(1, 100);
  let intentos = 5;
  // let numero = 3;
  // for (let i = 0; i < 101; i++) {
  //   if (numero == i) {
  //     console.log("adivinaste");
  //     break;
  //   }
  //   console.log(`Ciclo numero: ${i + 1}`);
  //   setTimeout(() => {}, 3500); // establecemos un periodo de tiempo entre cada ciclo, espera 3.5 segundos
  // }
  // console.log("Juego finalizado!");

  // let contador = 0;
  // while (contador < 101) {
  //   if (numero == contador) {
  //     console.log("adivinaste");
  //     break;
  //   }
  //   console.log(`Ciclo numero: ${contador + 1}`);
  //   contador++;
  // }

  let bandera = true;
  let intentosAMostrar = 1;

  // while (true) {
  //   let numeroAdivinado = parseInt(prompt("Ingresa un numero entre 1 y 100")); // prompt -> siempre trae strings
  //   if (numeroAleatorio === numeroAdivinado) {
  //     alert(
  //       `Felicidades, has adivinado!, numeros intentos ejecutados: ${intentosAMostrar}`
  //     );
  //     console.log(`Numero aleatorio generado fue: ${numeroAleatorio}`);
  //     // bandera = false;
  //     break;
  //   } else if (numeroAleatorio > numeroAdivinado) {
  //     alert(`El numero a adivinar es mayor. Por favor intenta nuevamente`);
  //   } else {
  //     alert(`El numero a adivinar es menor. Por favor intenta nuevamente`);
  //   }
  //   intentosAMostrar++;
  // }

  while (intentos >= 0) {
    let numeroAdivinado = parseInt(prompt("Ingresa un numero entre 1 y 100")); // prompt -> siempre trae strings
    if (numeroAleatorio === numeroAdivinado) {
      alert(
        `Felicidades, has adivinado!, numeros intentos ejecutados: ${intentosAMostrar}`
      );
      console.log(`Numero aleatorio generado fue: ${numeroAleatorio}`);
      // bandera = false;
      break;
    } else if (numeroAleatorio > numeroAdivinado) {
      alert(`El numero a adivinar es mayor. Por favor intenta nuevamente`);
    } else {
      alert(`El numero a adivinar es menor. Por favor intenta nuevamente`);
    }
    intentosAMostrar++;
    intentos--;
    intentos == 0
      ? alert("Te quedaste sin vidas")
      : console.log("Puede continuar");
  }

  // do {} while (true);
}

adivinarNumero();

// Niveles:
// Crear un menu donde se le permita al usario seleccionar un nivel segun:
// 1. Facil, cantidad de intentos ilitados
// 2. Medio, cantidad de intentos 10, con pistas
// 3. Dificil, 5 intentos sin pistas
