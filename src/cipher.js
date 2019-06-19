window.cipher = {
  encode: (mayuscula, offSet) => {
    let result ="";
  for (let i = 0; i < mayuscula.length; i++) {
    let numeroAscii = mayuscula.charCodeAt(i);
    //console.log(numeroAscii);
    let codigoAscii = (numeroAscii - 65 + offSet) % 26 + 65;
/*   numeroAscii = 35 ? "P"
   : numeroAscii (>= 48 && numeroAscii <=58) ? "*"
   : ((numeroAscii - 65 + offSet) % 26 + 65)
   ? numeroAscii; */
    //console.log(codigoAscii);
    let codigoAsciiFinal = String.fromCharCode(codigoAscii);
    //console.log(codigoAsciiFinal);
    result = result + codigoAsciiFinal;
  //  console.log(result);
  }
  return result;
  },
  decode: (newMessageM, offSet) => {
      let result="";
      for(let i = 0; i < newMessageM.length; i++) {
      let numeroAscii = newMessageM.charCodeAt(i);
    //  console.log(numeroAscii);
      let codigoAscii = ((numeroAscii + 65 - offSet) % 26) + 65;
      //console.log (codigoAscii);
      let codigoAsciiFinal = String.fromCharCode(codigoAscii);
      //console.log(codigoAsciiFinal);
      result = result + codigoAsciiFinal;
      //console.log(result);
  }
  return result;
}};
