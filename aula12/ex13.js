var idade = 5
if (idade< 16){
    console.log(`Não vota`)
} else if (idade >= 16 && idade <18){
    console.log('Voto opcional')
} else if (idade >=18 && idade <61){
    console.log('Voto obrigatório')
} else{
    console.log('Voto opcional')
}