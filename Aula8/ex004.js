let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numeros_Impares = function (a)
{
    let impares = [];
    for (let i = 0; i < a.length; i++) 
        {
        if (a[i] % 2 !== 0) 
        {
            impares.push(a[i]);
        }
    }
    return impares;
};

console.log(numeros_Impares(numeros));
