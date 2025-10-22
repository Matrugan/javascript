function ativar(){
    /*document.getElementById('tempo').innerHTML = 'Comceçou a contar!';

    tempo = setTimeout(function(){ 
        document.getElementById('tempo').innerHTML = 'Executou o setTimeout!';
    }, 5000);*/
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    },1000);
}

function parar(){
    //clearTimeout(tempo)
    clearInterval(tempo);
    //document.getElementById('tempo').innerHTML = ('Parou a contagem!')
}