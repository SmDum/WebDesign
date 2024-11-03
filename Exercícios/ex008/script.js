let textoAlterado = false;

function alterarTexto() {

    const paragrafo = document.getElementById("texto");

    if(textoAlterado) {
        paragrafo.innerHTML = "Texto Original";
    }
    else {
        paragrafo.innerHTML = "Texto Alterado";
    }

    textoAlterado = !textoAlterado;
}