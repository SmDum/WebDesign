
const urlServer = "https://67348a30a042ab85d11a97bf.mockapi.io/cadastro";

let btns = document.querySelectorAll('a','.menuLink');
let currentUrl = window.location.href;

for (let btn of btns) {
    if (currentUrl.startsWith(btn.href)) {
        btn.classList.add('active');
        break;
    }
}