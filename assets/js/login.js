const loginForm = document.querySelector("#login-form");

const inputUsuario = document.querySelector("#inputUsuario");
const inputContrasena = document.querySelector("#inputContrasena");

loginForm.addEventListener("submit", validarCampos);

function validarCampos() {
  if (inputUsuario.value == "") {
    alert("Por favor ingrese su usuario.");
    inputUsuario.focus();
    return;
  }

  if (inputContrasena.value == "") {
    alert("Por favor ingrese su contraseña.");
    inputContrasena.focus();
    return;
  }

  form.submit();
}
