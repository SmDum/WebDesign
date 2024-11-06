// Função para cadastrar e adicionar um card usando o título do formulário
function cadastrarCard() {
    // Obtém o valor do campo de título
    const titulo = document.getElementById('tituloCard').value;

    // Verifica se o campo de título está vazio
    if (titulo.trim() === "") {
        alert("Por favor, insira um título para o card.");
        return;
    }

    // Cria o elemento div para a coluna do card
    const col = document.createElement('div');
    col.classList.add('col-md-4', 'mb-4');

    // Define o conteúdo do card com o título inserido
    col.innerHTML = `
        <div class="card">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Imagem do Card">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">Este é um card adicionado dinamicamente com Bootstrap.</p>
                <button class="btn btn-danger" onclick="removerCard(this)">Remover</button>
            </div>
        </div>
    `;

    // Adiciona o card ao contêiner
    const container = document.getElementById('cardContainer');
    container.appendChild(col);

    // Limpa o campo de título após a criação do card
    document.getElementById('tituloCard').value = "";
}

// Função para remover um card específico
function removerCard(botao) {
    botao.closest('.col-md-4').remove();
}

// Função para apagar todos os cards
function apagarTodos() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ""; // Limpa o conteúdo do contêiner, removendo todos os cards
}
