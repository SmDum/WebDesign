function adicionarItem() {
    const texto = document.getElementById("texto").value;

    if(texto)
    {
        const novoItem = document.createElement("li");
        novoItem.textContent = texto;
        document.getElementById("lista").appendChild(novoItem);
        document.getElementById("novoItem").value = "";
    }
}