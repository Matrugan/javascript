const imagem = document.getElementById('lampada');

function ligar(){
    if (!imagem.src.includes('quebrada')) {
        imagem.src = 'img/lamp-acesa.png';
    }
}

function desligar(){
    if (!imagem.src.includes('quebrada')) {
        imagem.src = 'img/lamp-apagada.webp';
    }
}

function quebrar(){
    imagem.src = 'img/lamp-quebrada.webp';
}
