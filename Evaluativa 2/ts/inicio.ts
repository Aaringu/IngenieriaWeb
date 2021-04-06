let formulario:any  =   document.getElementById("formulario");
let mensaje:any     =   document.getElementById("mensaje");
let fieldset:any    =   document.getElementById("fieldset");

let nombre:any      =   document.getElementById("nombres");
let apellido: any   =   document.getElementById("apellidos");
let rut: any        =   document.getElementById("rut");
let correo: any     =   document.getElementById("mail");
let telefono: any   =   document.getElementById("telefono");

let descripcion: any = document.getElementById("descripcion");
let checks: any      = document.getElementsByClassName("checks");
let slider: any      = document.getElementById("conocimiento");
let radio: any       = document.getElementsByClassName("radios");

formulario.addEventListener("submit",function (evento:any){
    evento.preventDefault();

    if(verificarNumero(telefono) && verificarRut(rut) && verificarCheckbox(checks))
        Mensaje(mensaje,formulario,fieldset);

});

function verificarNumero(numero:any):boolean{
    if(numero.value.length == 9)
        return true;

    alert("Telefono debe tener 9 digitos.")
    return false;
}
function verificarRut(rut:any):Boolean{
    let numeroVerificador = rut.value.slice(rut.value.length-1);
    let guion = rut.value.slice(rut.value.length-2,rut.value.length-1);

    if(isNaN(parseInt(numeroVerificador)) && numeroVerificador != "K"){
        console.log((numeroVerificador));
        console.log(isNaN(parseInt(numeroVerificador)));
        alert("RUT invalido contiene digito verificador invalido.");
        return false;
        
    }

    if(guion != "-"){
        alert("RUT invalido, debe tener guion sin puntos.");
        return false;
    }

    return true;
}
function verificarCheckbox(checks:any){
    console.log(checks[1].checked);
    let aux = checks;

    for (let isTrue of checks){
        if(isTrue.checked == true)
            return true
    }

    alert("Debe seleccionar una checkbox.");
    return false;
}

function Mensaje(mensaje:any,formulario:any,fieldset:any){
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos comunicaremos con usted."
    mensaje.style.display="block";
    formulario.style.display="none";
    fieldset.style.display="none";   
}

function limpiarDatos(){

    nombre.value="";
    apellido.value="";
    rut.value="";
    correo.value="";
    telefono.value="";

    for (let isTrue of checks){
        isTrue.checked = false;
    }

    slider.value = "50";

    for (let isClicked of radio){
        isClicked.checked = false;
    }

    descripcion.value="";

}