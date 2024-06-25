// objetos literales
// se componen de dos elementos, llamados llave y valor (key-value) y puede estar compuesto por n cantidad de pares llave - valor
// se crean como si fuera una variable y el operador asignador va acompañado de {}
// para saber que hay dentro, normalmente se usa la llave y con este se obtiene el valor asignado a dicha llave
// y cada uno de estos, tiene un valor que lo define (value)
// para acceder a las propiedades o atributos de un objeto (tambien para funciones) se usa el ' . ' (punto)
// este es el invocador o notacion para los objetos o funciones
// tener presente que tambien se puede invocar como si fuera un vector con ['key']

// todo en la vida se considera un objeto, tienen cualidades, propiedades o atributos (componentes)

// vamos a crear un objeto de tipo computador (laptop), los objetos tienen propiedades o atributos (key)

let computador = {
  teclado: "Qwerty", // clave - valor
  mouse: "Touch Pad",
  pantalla: {
    tamanio: "17",
    resolucion: "FHD",
    tipoPantalla: "tactil",
  },
  marca: "Lenovo",
};

// console.log(computador);

// vamos a crear un objeto de tipo empresa
let empresa = {
  razonSocial: "Empresa SENA",
  industria: "Tecnologia",
  nit: 12345,
  direccion: {
    pais: "Colombia",
    departamento: "Cundinamarca",
    ciudad: "Bog",
    calle: "46",
    numero: "56",
  },
  deparmentos: {
    finanzas: "Contabilidad",
    almacenaje: "Almacen",
    recursosHumanos: "Talento Humano",
  },
  empleados: {
    cantidad: 25,
    nombres: ["Yordan", "Sergio", "Ana"],
  },
  agregarEmpleado() {},
};

// console.log(empresa);
console.log(empresa.empleados.nombres[1]);

// ingresar nuevo empleado
empresa.empleados.nombres.push("Fred");
console.log(empresa);

let persona = {
  colorCabello: "Negro",
  estatura: "1.80",
  edad: "17",
  respirar() {
    console.log("respirando");
  },
  caminarCaminadora(pasos, movimientoBrazos) {
    // console.log("Cantidad de pasos en la caminadora", pasos);
    console.log(
      `Cantidad de pasos: ${pasos} y Moviento de brazos ${movimientoBrazos}`
    );
  },
};

console.log(persona.respirar);
console.log(persona.caminarCaminadora(1000, 2000));
console.log(persona.colorCabello);
