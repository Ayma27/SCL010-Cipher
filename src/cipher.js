window.cipher = {
  encode: (mayuscula, offSet) => {
    let result ="";
  for (let i = 0; i < mayuscula.length; i++) {
    let codigoAscii= 0;
    let numeroAscii = mayuscula.charCodeAt(i);
    //console.log(numeroAscii);
    if (numeroAscii >= 65 && numeroAscii<= 90) {
    codigoAscii = (numeroAscii - 65 + offSet) % 26 + 65;
  } else {
      codigoAscii = numeroAscii;
    }
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
      let codigoAscii = 0;
    //  console.log(numeroAscii);
    if (numeroAscii >= 65 && numeroAscii<= 90) {
      codigoAscii =  (((numeroAscii + 65 - offSet) % 26) + 65);
    } else {
      codigoAscii = numeroAscii;
    }
      //console.log (codigoAscii);
      let codigoAsciiFinal = String.fromCharCode(codigoAscii);
      //console.log(codigoAsciiFinal);
      result = result + codigoAsciiFinal;
      //console.log(result);
  }
  return result;
}};
