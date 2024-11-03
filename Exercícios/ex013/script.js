function trocarImagem() {
    const imagem = document.getElementById("img");
    const troca = imagem.getAttribute("src") === "images/1.jpg" ? "images/2.jpeg" : "images/1.jpg";
    imagem.setAttribute("src", troca);
}
