function dobro(num) {

    
    if (num > 0) {
        num *= 2;
        console.log(num);
    } else {
        console.log("Esse Número não é Aceito...");
    }
}

let n = 10;

console.log("===== Só é aceito números positivos e maiores que 0. =====");

dobro(n);