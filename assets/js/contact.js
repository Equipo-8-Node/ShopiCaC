function ChangeCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    var string_length = 6; 
    var ChangeCaptcha = "";

    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        ChangeCaptcha += chars.substring(rnum,rnum+1);
    }
    document.getElementById("captcha").value = ChangeCaptcha;
}

function check() {
    var regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("formnombre").value == "") {
      alert("Por favor ingrese su apellido y nombre");
      return false;
    }

    if(!document.getElementById("formemail").value.match(regexemail)){
        alert("Por favor ingrese su email");
        document.getElementById("formemail").focus();
        return false;
    }

    if(document.getElementById("CaptchaEnter").value !== document.getElementById("captcha").value ) {
        alert("Por favor verifique el captcha ingresado");
        document.getElementById("captcha").focus();
        return false;
    }
    
    else {
        alert("Muchas gracias por su consulta");
        window.location.href = "../index.html";
    }
}