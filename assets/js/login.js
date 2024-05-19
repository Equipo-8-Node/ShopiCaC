const formButton = document.getElementsByClassName("form-button");
formButton.addEventListener("onclick", validarCampos);

function validarCampos() {
  if (document.getElementsByClassName("form-usuario").value == "") {
    alert("Por favor ingrese su usuario");
    document.getElementsByClassName("form-usuario").focus();
    return false;
  }

  if (!document.getElementsByClassName("form-pass").value == "") {
    alert("Por favor ingrese su contraseña");
    document.getElementsByClassName("form-pass").focus();
    return false;
  }
}
