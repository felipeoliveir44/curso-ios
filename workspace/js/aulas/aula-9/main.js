const frutas = ['apple', 'orange', 'cherry'];

frutas.forEach(minhaFuncao);

function minhaFuncao(valor, posicao) {
    console.log(`Valor: ${valor}`);
    console.log(`Posição: ${posicao}`);
    console.log('---------------------------------------');
}


const numeros = [2, 4, 6, 8];

numeros.forEach(multiplicar);

function multiplicar(valor, posicao, resultado) {

    resultado = valor * 2

    console.log(`Valor: ${valor}`);
    console.log(`Posição: ${posicao}`);
    console.log(`Resultado: ${resultado}`);
    console.log('---------------------------------------');
}

console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];

frutas01.forEach((valor, posicao) => {
    console.log(`valor: ${valor}`);
    console.log(`posicao: ${posicao}`);
    console.log('---------------------------------------');
});

console.log('-------------------//-------------------------//-----------');

console.clear();

const tarefas = [{
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
    },
];
tarefas.forEach((teste) => console.log(teste.texto));
console.log('-------------------//-------------------------//-----------');

const numeros1 = [4, 9, 16, 25];
const newArray = numeros1.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros1);
console.log('Novo array:');
console.log(newArray);
console.log('-------------------//-------------------------//-----------');

console.clear();
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//Imprime o novo array
console.log(mapText);
console.log('-------------------//-------------------------//-----------');

console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);
console.log('-------------------//-------------------------//-----------');

console.clear();
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

console.log('-------------------//-------------------------//-----------');

console.clear();
const meuArray = [{
        nome: 'apples',
        quantidade: 2
    },
    {
        nome: 'bananas',
        quantidade: 0
    },
    {
        nome: 'cerejas',
        quantidade: 5
    },
];
console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);