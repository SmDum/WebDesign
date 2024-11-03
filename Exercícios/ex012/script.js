function removerUltimo() {
    const lista = document.getElementById("lista");

    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}