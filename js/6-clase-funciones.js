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
    1- Funciones con nombre: Se definen utilizando la palabra clave function seguida de un nombre de función. Por ejemplo: function suma(a, b) { return a + b; }.

    2- Funciones anónimas: Son funciones que no tienen un nombre asociado y se pueden asignar a variables o pasarse como argumentos a otras funciones. Por ejemplo: let suma = function(a, b) { return a + b; }.

    3- Funciones flecha (arrow functions): Son una forma más concisa de escribir funciones en JavaScript, introducidas en ECMAScript 6 (ES6). Por ejemplo: let suma = (a, b) => a + b;.

    Metodos: Son funciones que están asociadas a objetos y se llaman utilizando la notación de punto. Por ejemplo: console.log(). el objeto es 'console' y el metodo es 'log()'

*/
