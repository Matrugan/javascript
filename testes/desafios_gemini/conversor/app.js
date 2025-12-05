function somaImpares(inicio, fim){
    let soma = 0
    for (let i = inicio ;i <= fim ; i++){
        if (i % 2 !=0){
            soma = soma + i
        }
    }
    return soma
}
somaImpares(1,15)
console.log(soma)
