function mudarCor() {
    texto = document.getElementById("texto");

    if (texto.style.color === "black") {
        texto.style.color = "red";
    }
    else {
        texto.style.color = "black";
    }
}

function mudarImagem() { 
    const img = document.getElementById("minhaImagem");
    const troca = img.getAttribute("src") === "images/1.webp" ? "images/2.webp" : "images/1.webp";
    img.setAttribute("src", troca);
}
