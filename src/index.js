//LLAMADA A LA FUNCION PARA INICIALIZAR RELOJ
window.onload = function () {
    let time = setTimeout(function(){ startTime() }, 500);
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
//RELOJ
function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
}
startTime();
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// Entrega mensaje del cuadro1 en mayusculas y lo recorre.
const btnCifrar = document.getElementById("cifrar");
btnCifrar.addEventListener('click', () =>{
  let offSet = parseInt(document.getElementById("selector1").value);
//  console.log(offSet);
  let message = document.getElementById("cuadro1").value;
  let mayuscula = message.toUpperCase();
  /* funcion establecida en el cipher
  let result ="";
  for (let i = 0; i < mayuscula.length; i++) {
  let numeroAscii = mayuscula.charCodeAt(i);
  console.log(numeroAscii);
  let codigoAscii = (numeroAscii - 65 + offSet) % 26 + 65;
  console.log(codigoAscii);
  let codigoAsciiFinal = String.fromCharCode(codigoAscii);
  console.log(codigoAsciiFinal);
  result = result + codigoAsciiFinal;
  console.log(result);
}*/
document.getElementById("cuadro1").value=window.cipher.encode(mayuscula,offSet);
});

// Muestra mensaje descrifrafo o cifrado segun selección
const btnDescifrar = document.getElementById("descifrar");
btnDescifrar.addEventListener("click", () => {
  let newMessage = document.getElementById("cuadro2").value;
  let newMessageM = newMessage.toUpperCase();
  let offSet= parseInt(document.getElementById("selector1").value);
  /*let result="";
  for(let i = 0; i < newMessageM.length; i++) {
  //console.log(newMessageM[i]);
  let numeroAscii = newMessageM.charCodeAt(i);
  console.log(numeroAscii);
  let codigoAscii = ((numeroAscii + 65 - offSet) % 26) + 65;
  console.log (codigoAscii);
  let codigoAsciiFinal = String.fromCharCode(codigoAscii);
  console.log(codigoAsciiFinal);
  result = result + codigoAsciiFinal;
  console.log(result);
}*/
document.getElementById("cuadro2").value=window.cipher.decode(newMessageM,offSet);
});

//Derivación a paginas según seleccion del checkbox
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const formulario = document.getElementById("frmSend");
//PARA VALIDAR QUE SOLO HAYA UNO SELECCIONADO
check1.addEventListener('click', () => {
if (check2.checked == true){
  check2.checked = false;
}});
check2.addEventListener('click', () => {
if (check1.checked == true){
  check1.checked = false;
}});
//PARA ENVIAR AL SITIO
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

//Pagina 5 felicitaciones y fin del sitio

//Pagina 6 y despedida del sitio
