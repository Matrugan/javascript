let vermelho = document.getElementById('vermelho')
let amarelo = document.getElementById('amarelo')
let verde = document.getElementById('verde')

function ligarverm(){
    vermelho.style.background = 'red'
    vermelho.style.boxShadow = '2px 2px 20px red'

    amarelo.style.background = 'rgb(140, 140, 2)'
    amarelo.style.boxShadow = 'none'
    verde.style.background = 'darkgreen'
    verde.style.boxShadow = 'none'
}

function ligarama(){
    amarelo.style.background = 'yellow'
    amarelo.style.boxShadow = '2px 2px 20px yellow'

    vermelho.style.background = 'darkred'
    vermelho.style.boxShadow = 'none'
    verde.style.background = 'darkgreen'
    verde.style.boxShadow = 'none'
}

function ligarverd(){
    verde.style.background = 'green'
    verde.style.boxShadow = '2px 2px 20px green'

    vermelho.style.background = 'darkred'
    vermelho.style.boxShadow = 'none'
    amarelo.style.background = 'rgb(140, 140, 2)'
    amarelo.style.boxShadow = 'none'
}

function ligartodo(){
    ligarverm();
    setTimeout(() => {
        ligarama();
        setTimeout(() => {
            ligarverd();
        }, 2000);
    }, 2000);
}

setInterval(ligartodo, 6000);

function desligar(){
    clearInterval(intervalo);
    intervalo = null;
}