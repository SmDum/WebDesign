let encontraMaiorNumero = function(a) 
{
    let maior = a[0];

    for (let i = 1; i < a.length; i++) 
        {
        if (a[i] > maior)
        {
            maior = a[i];
        }
    }
    return maior;
};

console.log(encontraMaiorNumero([1, 2, 3, 4]));
