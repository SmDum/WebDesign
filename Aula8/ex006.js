let aluno = {
    nome: "Samuel",
    idade: 19,
    curso: "Engenharia de Computação",
    matricula: 248729,

    mostrarInformacoes: function() 
    {
        return "Nome: " + this.nome + ", Idade: " + this.idade + ", Curso: " + this.curso + ", Matrícula: " + this.matricula;
    }
};

console.log(aluno.mostrarInformacoes());
