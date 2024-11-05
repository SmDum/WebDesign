function mudarCor() {
    const texto = document.getElementById("texto");
    texto.style.color = texto.style.color === "black" ? "red" : "black";
}

function mudarImagem() {
    const img = document.getElementById("minhaImagem");
    img.src = img.src.endsWith("images/1.webp") ? "images/2.webp" : "images/1.webp"
}

function mudarConteudo() {
    const conteudo = document.getElementById("titulooficial");
    conteudo.innerText = conteudo.innerText === "Título Original" ? "Título Alternativo" : "Título Original";
}

function mudarClasse() {
    const classe = document.getElementById("texto4");
    classe.classList.toggle("mudar");
}

function audio() {
    const audio = document.getElementById("audio");
    audio.play();
}
