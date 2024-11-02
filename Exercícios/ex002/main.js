function maioridade(idade) {
    if (idade >= 18) {
        console.log("Maior de Idade");
    }
    else {
        console.log("Menor de Idade");
    }
}

console.log(maioridade(10));
console.log(maioridade(20));

//--------------------------

console.log(5 == "5");
console.log(5 === "5");

//--------------------------

function parmaior(num) {
    if (num % 2 == 0 && num > 10) {
        console.log("Maior que 10 e Par");
    }
    else {
        console.log("Não atende as condições...");
    }
}

console.log(parmaior(7));
console.log(parmaior(8));
console.log(parmaior(11));
console.log(parmaior(12));