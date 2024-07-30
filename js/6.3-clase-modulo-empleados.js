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
  let salarioBasico = parseFloat(salarioBasicoParam); // define efectivamente una variable como decimal
  let edad = parseInt(edadParam); // garantizamos que la edad sea un entero
  let empleado = {
    indice: empleados.length + 1,
    nombre: nombreParam,
    salarioBasico: salarioBasico,
    genero: generoParam,
    cedula: cedula,
    valorHora: salarioBasico / 188,
    edad: edad,
  }; // construye un objeto de tipo empleado
  empleados.push(empleado); // lo agrega al final
  actualizarTabla(); // actualizamos la vista
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

function actualizarTabla() {
  const tbody = document.getElementById("tablaEmpleados");
  tbody.innerHTML = "";
  // para cada empleado en la lista de empleados haga => programacion funcional
  empleados.forEach((empleado) => {
    let fila = document.createElement("tr"); // creando elemento de tipo fila
    fila.innerHTML =
      "<td>" +
      empleado.indice +
      "</td>" +
      "<td>" +
      empleado.nombre +
      "</td>" +
      "<td>" +
      empleado.genero +
      "</td>" +
      "<td>" +
      empleado.cedula +
      "</td>" +
      "<td>" +
      empleado.edad +
      "</td>" +
      "<td>" +
      empleado.valorHora.toFixed(2) +
      "</td>" +
      "<td>" +
      empleado.salarioBasico +
      "</td>";
    tbody.appendChild(fila);
  });
}
