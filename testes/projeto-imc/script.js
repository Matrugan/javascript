let nome = document.getElementById('nome');
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let text = document.getElementById('texto');
let imc = 0;
let tipo = 0;

function calcular(){
    if (nome == "" || peso == "" || altura == ""){
        window.alert("Preencha os campos");
    } else{
        m = Number(altura.value)/100;
        p = Number(peso.value);
        imc = p/(m*m);
        if (imc <= 18.5){
            tipo = 'Abaixo do peso'
        } else if(imc <= 24.9){
            tipo = 'Peso normal'
        } else if(imc <= 29.9){
            tipo = 'Sobrepeso'
        } else {
            tipo = 'Obesidade'
        }
        text.innerHTML = `${nome.value} seu IMC é : ${imc.toFixed(1)} você está com ${tipo}`;
    }
}

