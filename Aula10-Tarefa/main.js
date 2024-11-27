function fetchAnimais() {
    fetch('https://67348a30a042ab85d11a97bf.mockapi.io/Animais')
        .then(response => response.json())
        .then(animais => {
            const list = document.getElementById('animal-lista');
            list.innerHTML = '';
            animais.forEach(animal => {
                const li = document.createElement('li');
                li.textContent = `${animal.id} - ${animal.name} (${animal.idade} anos) — ${animal.raca}`;
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.log("Erro ao buscar animais:", error);
        });
}

function cadastrarAnimal() {
    fetch('https://67348a30a042ab85d11a97bf.mockapi.io/Animais', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Totó',
            idade: 12,
            raca: 'cachorro'
        })
    })
    .then(() => {
        fetchAnimais(); // Atualiza a lista após o cadastro
    })
    .catch(error => {
        console.error("Erro ao cadastrar animal:", error);
    });
}

// Chamar a função para buscar os animais ao carregar a página
fetchAnimais();
