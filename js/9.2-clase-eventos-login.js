// construimos un vectore con usuarios registrados
let usuarios = [
  {
    nombre: "Goku Emiliano",
    correo: "elsuper@dbz.com",
    password: "passw123",
  },
  {
    nombre: "Bulma Maria",
    correo: "lacrack@dbz.com",
    password: "passw456",
  },
  {
    nombre: "Krilin Krin",
    correo: "elmasmuerto@dbz.com",
    password: "passw789",
  },
];

function login() {
  const correo = document.getElementById("correoLogin").value;
  const password = document.querySelector("#passwordLogin").value;

  //   console.log(correo);
  //   console.log(passw);
  let usuarioEncontrado; // creamos variable pero no inicializamos
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].correo === correo) {
      if (usuarios[i].password === password) {
        usuarioEncontrado = usuarios[i];
      }
    }
  }

  //   console.log(
  //     `Usuario encontrado: ${usuarioEncontrado.nombre}, correo: ${usuarioEncontrado.correo}`
  //   );

  if (usuarioEncontrado) {
    alert(`Bienvenido ${usuarioEncontrado.nombre}`);
    // window.location.href = "https://www.google.com";
    window.location.href = "bienvenido.html";
  } else {
    alert("Correo o contraseña incorrectos");
  }
  document.getElementById("correoLogin").value = "";
  document.querySelector("#passwordLogin").value = "";
}

// uso del escuchador de eventos
document.getElementById("login").addEventListener("click", login);

function toggle() {
  const registroForm = document.getElementById("registroForm");
  registroForm.style.display = "block";
}
