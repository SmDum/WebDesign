function analise(email) {
    let email_array = email.split('');
    var pos_arroba;
    var pos_ponto;
    let i;

    for (i = 0; i < email_array.length - 1; i++) {
        if (email_array[i] == '.') {
            pos_ponto = i;
        }
    }

    for (i = 0; i < email_array.length - 1; i++) {
        if (email_array[i] == '@') {
            pos_arroba = i;
        }
    }

    if (pos_ponto > pos_arroba) {
        console.log("E-mail Existente :D");
    }
    else {
        console.log("E-mail Inexistente...");
    }
}

let email = "samuka@facens.br";

analise(email);