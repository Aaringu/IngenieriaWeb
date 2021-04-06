"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var fieldset = document.getElementById("fieldset");
var nombre = document.getElementById("nombres");
var apellido = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("mail");
var telefono = document.getElementById("telefono");
var descripcion = document.getElementById("descripcion");
var checks = document.getElementsByClassName("checks");
var slider = document.getElementById("conocimiento");
var radio = document.getElementsByClassName("radios");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (verificarNumero(telefono) && verificarRut(rut) && verificarCheckbox(checks))
        Mensaje(mensaje, formulario, fieldset);
});
function verificarNumero(numero) {
    if (numero.value.length == 9)
        return true;
    alert("Telefono debe tener 9 digitos.");
    return false;
}
function verificarRut(rut) {
    var numeroVerificador = rut.value.slice(rut.value.length - 1);
    var guion = rut.value.slice(rut.value.length - 2, rut.value.length - 1);
    if (isNaN(parseInt(numeroVerificador)) && numeroVerificador != "K") {
        console.log((numeroVerificador));
        console.log(isNaN(parseInt(numeroVerificador)));
        alert("RUT invalido contiene digito verificador invalido.");
        return false;
    }
    if (guion != "-") {
        alert("RUT invalido, debe tener guion sin puntos.");
        return false;
    }
    return true;
}
function verificarCheckbox(checks) {
    console.log(checks[1].checked);
    var aux = checks;
    for (var _i = 0, checks_1 = checks; _i < checks_1.length; _i++) {
        var isTrue = checks_1[_i];
        if (isTrue.checked == true)
            return true;
    }
    alert("Debe seleccionar una checkbox.");
    return false;
}
function Mensaje(mensaje, formulario, fieldset) {
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos comunicaremos con usted.";
    mensaje.style.display = "block";
    formulario.style.display = "none";
    fieldset.style.display = "none";
}
function limpiarDatos() {
    nombre.value = "";
    apellido.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";
    for (var _i = 0, checks_2 = checks; _i < checks_2.length; _i++) {
        var isTrue = checks_2[_i];
        isTrue.checked = false;
    }
    slider.value = "50";
    for (var _a = 0, radio_1 = radio; _a < radio_1.length; _a++) {
        var isClicked = radio_1[_a];
        isClicked.checked = false;
    }
    descripcion.value = "";
}
