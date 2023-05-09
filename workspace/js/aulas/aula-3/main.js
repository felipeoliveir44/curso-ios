// Strings

const teste = 'Instituto da Oportunidade Social'

// CharAt
// Retornando o primeiro caracter da string

console.log(teste.charAt(0)); // I
console.log(teste.charAt(10)); // D

// Length
// Retorna a quantidade de caracteres da string

const length = 'Teste'

console.log(length.length); // 5

// toUpperCase e toLowerCase
// UpperCase transtorma todos os caracteres da string para maiúscula e LowerCase para minúscula

console.log(length.toUpperCase());
console.log(length.toLowerCase());

// Substring
/// Corta a string de acordo com os índices indicados

console.log(length.substring(1, 3)); // es

// Split
// Divide a string em substrings de acordo com a regra colocada entre parênteses

const str1 = 'A raposa é um animal esperto'
const palavras = str1.split(' ');
console.log(palavras[3]);

// Replace
// Substitui um pedaço específico da string por outro coisa que desejar

let mensagem = 'A raposa é um animal esperto'
console.log(mensagem);
let novaMensagem = mensagem.replace('esperto', 'inteligente');
console.log(novaMensagem);

// Trim
// Remove os espaços em branco do ínicio e final de uma string 

let text = '        Olá'
console.log(text)
console.log(text.trim());

// String.indexOf()

// Retorna o índice (posição) da primeira vez que um texto especificado 
// entre os parênteses foi encontrado na string.

// String.lastIndexOf()

// retorna o índice da última ocorrência de um texto especificado 
// entre os parênteses foi encontrado na string.

// String.search()

// o busca um valor específico e retorna a posição inicial desse valor na 
// primeira vez que ele é encontrado. Semelhante ao indexOf().

// String.startsWith()

// esse método verifica se a string inicia com um valor específico.

// String.endsWith() 

// esse método verifica se a string termina com um valor específico.
