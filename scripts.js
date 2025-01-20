// document = HTML
// selecionar alguma coisa

let imagem = document.querySelector('.troca-imagem'); // Seleciona a imagem

function trocaImagem() {

    if(imagem.style.opacity == 0) {
        imagem.style.opacity = 1; // Opacidade 1
    } else {
    imagem.style.opacity = 0; // Opacidade 0
    } 
}

setInterval(trocaImagem, 3000); // 3000 milisegundos = 3 segundos




// let imagem = document.querySelector('.troca-imagem'); // Seleciona a imagem

// function trocaImagem() {

//     imagem.style.opacity = 0; // Opacidade 0
//     setTimeout(() => {
//         imagem.style.opacity = 1; // Opacidade 1
//     }, 3000); // 3000 milisegundos = 3 segundos
// }

// setInterval(trocaImagem, 3000); // 3000 milisegundos = 3 segundos