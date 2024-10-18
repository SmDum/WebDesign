let alunos = 
[
    { nome: "Samuel", idade: 19 },
    { nome: "José", idade: 10 },
    { nome: "Luiz", idade: 12 }
];

let alunosMaior = function(a) {
    
    let maiores = [];

    for (let i = 0; i < a.length; i++) 
        {
            if (a[i].idade > 18) 
            {
                maiores.push(a[i]);
            }
    }

    return maiores;
};

console.log(alunosMaior(alunos));