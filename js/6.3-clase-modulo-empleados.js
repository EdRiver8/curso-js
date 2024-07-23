// El modulo inicialmente, esta moqueado para ejecutar el Crear y Leer del Crud (Create, read, update, delete)
let empleados = []; // db para almecenar la informacion

// Esta funcion aplica el Crear del crud = Create
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

// Esta funcion aplica el Leer del crud = Read
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

function agregarEmpleadoUI() {
  // obtenemos los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value;
  const cedula = document.getElementById("cedula").value;
  const edad = document.getElementById("edad").value;
  const salarioBasico = document.getElementById("salarioBasico").value;

  // ahora agregamos el empleado
  agregarEmpleado(nombre, salarioBasico, genero, cedula, edad);

  // limpiamos los campos del formulario
  limpiarFormulario();

  console.log(empleados);
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("salarioBasico").value = "";
}

function actualizarTabla() {}
