let itens = [];

// Função para adicionar item na lista
function adicionarItem() {
    const input = document.querySelector('#input');
    const texto = input.value;
    if (texto) {
        itens.push(texto);
        atualizarLista();
    }
}

// Função para remover item da lista
function removerItem(index) {
    itens.splice(index, 1);
    atualizarLista();
}

// Função para atualizar a exibição da lista no DOM
function atualizarLista() {
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';  // Limpa a lista atual
    itens.forEach((item, index) => {
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `${item} <button onclick="removerItem(${index})">Remover</button>`;
        lista.appendChild(novoItem);
    });
    document.querySelector('#input').value = '';  // Limpa o input
}
