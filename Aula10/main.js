let url = "https://67348a30a042ab85d11a97bf.mockapi.io/Animal/";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Erro: " + error);
    });


function read(id) {

    fetch(url+id)
        .then(response => response.json())
        .then(data => {
            document.querySelector("#titulo").innerHTML = data.name;
        })
        .catch(error => {
            console.log("Erro: " + error);
        });

}

function salvar(nome, avatar) {
    fetch(url)
}

read(40);



