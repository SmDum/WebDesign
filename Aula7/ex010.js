function Inversao(str) {
    return str.toLowerCase().split('').reverse().join('');
}

function palindromo(str)
{
    if(str.toLowerCase() == Inversao(str))
    {
        console.log("É Palíndromo :D");
    }
    else
    {
        console.log("Não é Palíndromo...");
    }
}

let texto = "Arara";
let textoInvertido = Inversao(texto);

console.log(texto);
console.log(textoInvertido);
palindromo(texto);