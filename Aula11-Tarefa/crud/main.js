function listaCadastro() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(pessoa => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let button = document.createElement("button");

                button.innerHTML = "Excluir";
                button.classList.add("btn-excluir");
                button.onclick = () => {
                    fetch(`${urlServer}/${pessoa.id}`, {
                        method: "DELETE"
                    })
                    .then(() => listaCadastro());
                }   

                a.innerHTML = ` ${pessoa.nome} (${pessoa.email}) - ${pessoa.idade}`;
                a.href = `cadastrar/cadastrar.html?id=${pessoa.id}`;
                a.classList.add("linkPessoa");

                li.appendChild(button);
                li.appendChild(a);
                   
                lista.appendChild(li);
            })
        })
}

listaCadastro();