//Llamdo de funcion para inicializar reloj
window.onload = function () {
  startTime();
};
//ocultar para mostrar solo pagina 1
document.getElementById("pagina2").style.display="none";
document.getElementById("pagina3").style.display="none";
document.getElementById("pagina4").style.display="none";
document.getElementById("pagina5").style.display="none";
document.getElementById("pagina6").style.display="none";

//boton de inicio lleva a pagina 2 para clientes
const btnWelcome = document.getElementById("welcome");
btnWelcome.addEventListener('click', star);
function star() {
document.getElementById("pagina1").style.display="none";
document.getElementById("cuadro1").style.display="none";
document.getElementById("button1").style.display="none";
document.getElementById("pagina2").style.display="block";
}

//boton de click lleva a pagina 2 para anfitriones
document.getElementById("pagina2").style.display="none";
const btnClickea = document.getElementById("clickea");
btnClickea.addEventListener('click', star2);
function star2() {
document.getElementById("pagina1").style.display="none";
document.getElementById("cuadro2").style.display="none";
document.getElementById("button2").style.display="none";
document.getElementById("pagina2").style.display="block";
}

//Reloj
function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
 setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Funcion para boton cifrar
const btnCifrar = document.getElementById("cifrar");
btnCifrar.addEventListener('click', () =>{
  let offSet = parseInt(document.getElementById("selector1").value);
  let message = document.getElementById("cuadro1").value;
  let mayuscula = message.toUpperCase();
document.getElementById("cuadro1").value=window.cipher.encode(mayuscula,offSet);
});

// Funcion para boton descifrar
const btnDescifrar = document.getElementById("descifrar");
btnDescifrar.addEventListener("click", () => {
  let newMessage = document.getElementById("cuadro2").value;
  let newMessageM = newMessage.toUpperCase();
  let offSet= parseInt(document.getElementById("selector1").value);
document.getElementById("cuadro2").value=window.cipher.decode(newMessageM,offSet);
});

//Derivación a paginas según seleccion del checkbox
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const formulario = document.getElementById("frmSend");

//Valida que solo se pueda seleccionar un check
check1.addEventListener('click', () => {
if (check2.checked == true){
  check2.checked = false;
}});
check2.addEventListener('click', () => {
if (check1.checked == true){
  check1.checked = false;
}});

//Te envia a la pagina sigueinte segun respuesta del check
formulario.addEventListener('click', () => {
if (check1.checked == true){
  document.getElementById("pagina2").style.display="none";
  document.getElementById("pagina3").style.display="block";
}else if (check2.checked == true){
  document.getElementById("pagina2").style.display="none";
  document.getElementById("pagina6").style.display="block";
}});

//Pagina 3 y botones
const btnAgree = document.getElementById("aceptar");
btnAgree.addEventListener('click', star3);
function star3() {
document.getElementById("pagina3").style.display="none";
document.getElementById("pagina4").style.display="block";
}
const btnNotAgree = document.getElementById("noAceptar");
btnNotAgree.addEventListener('click', star4);
function star4() {
document.getElementById("pagina3").style.display="none";
document.getElementById("pagina6").style.display="block";
}
//Pagina 4 petición de email
const btnEmail = document.getElementById("enviado");
btnEmail.addEventListener('click', star5);
function star5() {
let email = document.getElementById("mail").value;
if (email == "") {
alert("Debes ingresar tu mail");
}else {
document.getElementById("pagina4").style.display="none";
document.getElementById("pagina5").style.display="block";
}}
