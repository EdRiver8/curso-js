// El modulo inicialmente, esta moqueado para ejecutar el Crear y Leer del Crud (Create, read, update, delete)
let empleados = []; // db para almecenar la informacion

document.addEventListener("DOMContentLoaded", function () {
  // se trae la data del localstorage del navegador
  const empleadosAlmacenados = localStorage.getItem("empleados");
  // si existen datos, los convirte a objetos js y llama la funcion para mostrar en la tabla
  if (empleadosAlmacenados) {
    empleados = JSON.parse(empleadosAlmacenados); // para recibir data y convertirla a tipo js
    actualizarTabla();
  }
});

// Esta funcion aplica el Crear del crud = Create
function agregarEmpleado(
  nombreParam,
  salarioBasicoParam,
  generoParam,
  cedula,
  edadParam
) {
  let salarioBasico = parseFloat(salarioBasicoParam) || 0; // Usa 0 si no es un número válido
  let edad = parseInt(edadParam) || 0; // Usa 0 si no es un número válido
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
  localStorage.setItem("empleados", JSON.stringify(empleados)); // para enviar data
  actualizarTabla(); // actualizamos la vista
}

function agregarEmpleadoUI() {
  // obtenemos los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value;
  const cedula = document.getElementById("cedula").value;
  const edad = document.getElementById("edad").value;
  const salarioBasico = document.getElementById("salarioBasico").value;

  // validamos que los campos no esten vacios
  if (!nombre || !genero || !cedula || !edad || !salarioBasico) {
    // || este es el operador 'o'
    alert("Por favor, complete todos los campos.");
    return;
  }

  // ahora agregamos el empleado
  agregarEmpleado(nombre, salarioBasico, genero, cedula, edad);

  // limpiamos los campos del formulario
  limpiarFormulario();

  // console.log(empleados);
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("genero").value = "Masculino";
  document.getElementById("edad").value = "";
  document.getElementById("salarioBasico").value = "";
}

// function actualizarTabla() {
//   const tbody = document.getElementById("tablaEmpleados");
//   tbody.innerHTML = "";
//   // para cada empleado en la lista de empleados haga => programacion funcional
//   empleados.forEach((empleado) => {
//     let fila = document.createElement("tr"); // creando elemento de tipo fila
//     fila.innerHTML =
//       "<td>" +
//       empleado.indice +
//       "</td>" +
//       "<td>" +
//       empleado.nombre +
//       "</td>" +
//       "<td>" +
//       empleado.genero +
//       "</td>" +
//       "<td>" +
//       empleado.cedula +
//       "</td>" +
//       "<td>" +
//       empleado.edad +
//       "</td>" +
//       "<td>" +
//       empleado.valorHora.toFixed(2) +
//       "</td>" +
//       "<td>" +
//       empleado.salarioBasico +
//       "</td>" +
//       "<td>" +
//       "<button class='edit' onclick='actualizarEmpleado()'>Actualizar</button>" +
//       "<button class='delete' onclick='eliminarEmpleado()'>Eliminar</button>";
//     tbody.appendChild(fila);
//   });
// }

function actualizarTabla() {
  const tbody = document.getElementById("tablaEmpleados");
  tbody.innerHTML = "";
  empleados.forEach((empleado, index) => {
    // los atributos empleado es cada empleado en la lista de empleados y el index es la posicion o indice del empleado
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${empleado.indice}</td>
      <td>${empleado.nombre}</td>
      <td>${empleado.genero}</td>
      <td>${empleado.cedula}</td>
      <td>${empleado.edad}</td>
      <td>${empleado.valorHora ? empleado.valorHora.toFixed(2) : "0.00"}</td>
      <td>${
        empleado.salarioBasico ? empleado.salarioBasico.toFixed(2) : "0.00"
      }</td>
      <td class="action-buttons">
        <button class="edit-btn" onclick="editarEmpleado(${index})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" onclick="eliminarEmpleado(${index})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

// const eliminarEmpleado = function (index) {
//   let isConfirmed = confirm("Estas seguro de eliminar al empleado?");
//   if (isConfirmed == true) {
//     empleados.splice(index, 1); //elimina partiendo el vector buscando la posicion del empleado y avanzando una posicion mas
//     localStorage.setItem("empleados", JSON.stringify(empleados)); // cuando la llave ya existe (emplados), la actualiza
//     actualizarTabla();
//   }
// };

const eliminarEmpleado = function (index) {
  if (confirm("Estas seguro de eliminar al empleado?")) {
    empleados.splice(index, 1); //elimina partiendo el vector buscando la posicion del empleado y avanzando una posicion mas
    localStorage.setItem("empleados", JSON.stringify(empleados)); // cuando la llave ya existe (emplados), la actualiza
    actualizarTabla();
  }
};

// implementar un eliminado logico

function editarEmpleado(index) {
  let empleado = empleados[index];
  // console.log(`El empleado a editar es: ${empleado.nombre}`);
  // enviar datos al formulario (html -> document)
  document.getElementById("nombre").value = empleado.nombre;
  document.getElementById("genero").value = empleado.genero;
  document.getElementById("cedula").value = empleado.cedula;
  document.getElementById("edad").value = empleado.edad;
  document.getElementById("salarioBasico").value = empleado.salarioBasico;
}

// finalizar el editar
