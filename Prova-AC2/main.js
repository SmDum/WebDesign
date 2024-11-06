function cadastrarCard() {

    const titulo = document.getElementById('tituloCard').value;



    const col = document.createElement('div');
    col.classList.add('col-md-4', 'mb-4');


    col.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/seed/picsum/150/150" class="card-img-top" alt="">
            <div class="card-body d-flex align-items-center flex-column">
                <h5 class="card-title">${titulo}</h5>
                <button class="btn btn-danger" onclick="removerCard(this)">Remover</button>
            </div>
        </div>
    `;

    const container = document.getElementById('cardContainer');
    container.appendChild(col);


    document.getElementById('tituloCard').value = "";
}


function removerCard(botao) {
    botao.closest('.col-md-4').remove();
}

function apagarTodos()
{
    const container = document.getElementById('cardContainer');
    container.innerHTML = ""; 
}