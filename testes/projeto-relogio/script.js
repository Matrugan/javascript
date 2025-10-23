let relogio = window.document.getElementById('test');
let intervalo;

function atualizarHora(){
    const agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    relogio.innerHTML = `${hora}:${minutos}:${segundos}`
}

function iniciarHora(){
    if (!intervalo){
        atualizarHora();
        intervalo = setInterval(atualizarHora, 1000);
    }
}

function pararHora(){
    clearInterval(intervalo);
    intervalo = null;
}