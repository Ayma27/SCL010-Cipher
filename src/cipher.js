window.cipher = {
  encode: (mayuscula, offSet) => {
    let result ="";
  for (let i = 0; i < mayuscula.length; i++) {
    let codigoAscii= 0;
    let numeroAscii = mayuscula.charCodeAt(i);
    if (numeroAscii >= 65 && numeroAscii<= 90) {
    codigoAscii = (numeroAscii - 65 + offSet) % 26 + 65;
    } else {
      codigoAscii = numeroAscii;
    }
    let codigoAsciiFinal = String.fromCharCode(codigoAscii);
    result = result + codigoAsciiFinal;
  }
  return result;
  },

  decode: (newMessageM, offSet) => {
      let result="";
      for(let i = 0; i < newMessageM.length; i++) {
      let numeroAscii = newMessageM.charCodeAt(i);
      let codigoAscii = 0;
      if (numeroAscii >= 65 && numeroAscii<= 90) {
      codigoAscii =  (((numeroAscii + 65 - offSet) % 26) + 65);
      } else {
      codigoAscii = numeroAscii;
      }
      let codigoAsciiFinal = String.fromCharCode(codigoAscii);
      result = result + codigoAsciiFinal;
  }
  return result;
}};
