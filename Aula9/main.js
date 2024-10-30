function alterarImagem() {
    const imagem = document.getElementById('imagem');
    imagem.src = imagem.src.endsWith('images/cat.png') ? 'images/dog.jpeg' : 'images/cat.png';
}

function alterarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.innerText = titulo.innerText === 'Meu Título' ? 'Novo Título' : 'Meu Título';

}

function alterarCor() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = paragrafo.style.color === 'black' ? 'blue' : 'black';
}

function audio() {
    const audio = document.getElementById('audio');
    audio.play();
}

function toggleBTN() {

    const btns = document.querySelector('.btns button');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    btn1.classList.toggle('btn-diferente');
    btn2.classList.toggle('btn-diferente');
    btn3.classList.toggle('btn-diferente');
}