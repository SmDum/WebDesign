function contarVogais(str) {
    let vogais = "aãáeéêiíìoôóõuúùû";
    let contador = 0;
  
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (vogais.indexOf(str[i]) !== -1) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log(contarVogais("programação"));