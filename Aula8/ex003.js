let array = [10, 20, 30, 40, 50];

let soma = function(a) 
{
    let soma = 0;

    for (let i = 0; i < a.length; i++) 
    {
        soma += a[i];
    }
    return soma;
};

console.log(soma(array));
