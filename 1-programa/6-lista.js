console.log(`Trabalhando com listas`);
const salvador = 'salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';

//const listaDeDestinos = ['Salvador', 'São Paulo', 'Rio De Janeiro'];

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio De Janeiro',
    'Curitiba'
);
listaDeDestinos.push('Santa Catarina');
console.log('Destinos possíveis');
console.log(salvador, saoPaulo,rioDeJaneiro);

console.log(listaDeDestinos);
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1],listaDeDestinos[0]);
