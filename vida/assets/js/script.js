document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar_sesion").addEventListener("click", login);


//variables
var contenedor_login_register = document.querySelector(".contenedor__login_register");
var formulario_login = document.querySelector(".formualrio__login");
var formulario_register = document.querySelector(".formualrio__register");
var caja_trasera_login = document.querySelector(".caja__trasera_login");
var caja_trasera_register = document.querySelector(".caja__trasera_register");

function register(){

    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1"
}

function login(){

    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0"
}

//limpia los inputs
function limpiar(){
    document.getElementById("nombre_completo").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("confirmar_contrasena").value = "";
    document.getElementById("login_correo").value = "";
    document.getElementById("login_contrasena").value = "";
};
function DefaultColor(){

    document.body.style.background = "#93efff"
}

function PrimerColor(){

    document.body.style.background = "#00FFDD"
}

function SegundoColor(){

    document.body.style.background = "#0375FF"
}

function TercerColor(){

    document.body.style.background = "#FFCA00"
}

document.getElementById("def").addEventListener("click", DefaultColor);
document.getElementById("color1").addEventListener("click", PrimerColor);
document.getElementById("color2").addEventListener("click", SegundoColor);
document.getElementById("color3").addEventListener("click", TercerColor);