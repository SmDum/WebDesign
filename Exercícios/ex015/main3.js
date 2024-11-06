function mudarCor() {
    const conteudo = document.getElementById("texto");
    conteudo.style.color = conteudo.style.color === "black" ? "red" : "black";
}

function mudarImagem() {
    const img = document.getElementById("minhaImagem");
    img.src = img.src.endsWith("images/1.webp") ? "images/2.webp" : "images/1.webp";
}

function mudarConteudo() {
    const texto = document.getElementById("titulooficial");
    texto.innerText = texto.innerText === "Texto Original" ? "Texto Alternativo" : "Texto Original";
}

function mudarClasse() {
    const classe = document.getElementById("texto4");
    classe.classList.toggle("mudar");
}

function audio() {
    const audio = document.getElementById("audio");
    audio.play();
}
