let endereco = {
    Rua: "Avenida das Flores",
    Numero: 321,
    Bairro: "Jardim Botanico",
    Cidade: "Sorocaba",
};

    let infos = Object.keys(endereco);

    for (let i = 0; i < infos.length; i++) {
        let info = infos[i];
        console.log(info + ": " + endereco[info]);
    }

    