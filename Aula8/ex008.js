let produto = {
    nome: "Celular",
    preco: 3000,
    quantidade: 3,

    calcularTotal: function() 
    {
        let total = 0;

        for (let i = 0; i < this.quantidade; i++) 
        {
            total += this.preco;
        }
        
        return total;
    }
};
console.log(produto.calcularTotal());