console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio De Janeiro',
    'Curitiba'
);

const idadeComprador = 14;
const estaAcompanhada = false

listaDeDestinos.push('Santa Catarina');

/*if (idadeComprador >= 18) {
    console.log('Destinos possíveis');
    console.log(listaDeDestinos);
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else if (estaAcompanhada == true) {
    console.log('É menor de idade acompanhada');
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else {
    console.log('Não podemos vender para menores de idade')
    console.log(listaDeDestinos);
}
*/

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Destinos possíveis');
    console.log(listaDeDestinos);
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
} else {
    console.log('Não podemos vender para menores de idade')
    console.log(listaDeDestinos);
}


