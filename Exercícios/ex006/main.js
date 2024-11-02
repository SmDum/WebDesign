// a. Objeto carro com propriedades
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021
};
console.log(`Meu carro é um ${carro.marca} ${carro.modelo} de ${carro.ano}`);

// b. Função no objeto para descrever o carro
carro.descricao = function () {
    return `Meu carro é um ${this.marca} ${this.modelo} de ${this.ano}`;
};
console.log(carro.descricao());

// c. Alterando uma propriedade do objeto
carro.ano = 2022;
console.log(carro);  // {marca: "Toyota", modelo: "Corolla", ano: 2022, descricao: ƒ}
