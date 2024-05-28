// db con el conocimiento que tenemos a dia de hoy
// CRUD = Create, Read, Update y Delete => Crear, Leer, actualizar y Eliminar
let empleados = []; // db para almecenar la informacion

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

// agregarEmpleado("Ana", 4500000, "Feminino", 123, 20);
// agregarEmpleado("Mayk", 2500000, "Masculino", 456, 22);
// agregarEmpleado("Fred", 4500000, "Masculino", 789, 25);
// agregarEmpleado("Dayana", 7500000, "Feminino", 999, 22);
// agregarEmpleado("Luisa", 3500000, "Feminino", 888, 23);
// agregarEmpleado("Juan", 1500000, "Masculino", 777, 40);
// agregarEmpleado("Pedro", 2500000, "Masculino", 666, 52);
// agregarEmpleado("Maria", 3500000, "Feminino", 555, 38);
// agregarEmpleado("Jose", 4500000, "Masculino", 444, 61);
// agregarEmpleado("Jorge", 5500000, "Masculino", 333, 29);
// agregarEmpleado("Luis", 6500000, "Masculino", 222, 47);
// agregarEmpleado("Luisa", 7500000, "Feminino", 111, 18);

function mostrarEmpleados() {
  for (let contador = 0; contador < empleados.length; contador = contador + 1) {
    alert(
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

function eliminarEmpleado2(cedula) {
  let empleadoBuscado = buscarEmpleado(cedula);
  if (empleadoBuscado != null) {
    let indice = empleados.indexOf(empleadoBuscado);
    return empleados.splice(indice, 1);
  }
  return null;
}

// Construir un menu para la nomina de empleados del taller
// usando las funcionalidades anteriormente construidas

// Como no se sabe cuantas veces se va a ejecutar el programa, pero si sabemos que es algo repetitivo
// usaremos el ciclo while (el for necesita conocer la cantidad de veces a ejecutar)

let opcion = 0;
while (opcion !== 6) {
  opcion = parseInt(
    prompt(`Ingresa el numero de alguna de las siguientes opciones:
        1- Agregar Empleado
        2- Mostrar Empleados
        3- Buscar Empleado
        4- Eliminar Empleado
        5- Actualizar Empleado
        6- Salir
    `)
  );

  switch (opcion) {
    case 1:
      let nombre = prompt("Ingrese el nombre del empleado");
      let salario = prompt("Ingrese el salario");
      let genero = prompt("Ingrese el genero");
      let cedula = parseInt(prompt("Ingrese la cedula"));
      let edad = parseInt(prompt("Ingrese la edad"));
      agregarEmpleado(nombre, salario, genero, cedula, edad);
      break;
    case 2:
      mostrarEmpleados();
      break;
    case 3:
      let cedulaBuscada = parseInt(
        prompt("Ingrese la cedula del empleado a buscar")
      );
      let empleadoBuscado = buscarEmpleado(cedulaBuscada);
      if (empleadoBuscado != null) {
        alert(
          `El empleado encontrado es: ${empleadoBuscado.nombre}, y su edad es ${empleadoBuscado.edad}`
        );
      } else {
        alert("El empleado buscado no se encuentra en la DB");
      }
      break;
    case 6:
      alert("Esta saliendo de Nomina Empleados Taller");
      break;
    default:
      alert("La opcion seleccionada no es valida");
  }
}
