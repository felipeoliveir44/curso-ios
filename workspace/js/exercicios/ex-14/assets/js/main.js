const btnIncluir = document.querySelector('.btnIncluir');
const btnExcluir = document.querySelector('.btnExcluir');

let data = new Date(); // Obtém a data/hora atual
let dia = data.getDate(); // 1-31
let mes = data.getMonth(); // 0-11 (zero=janeiro)
let ano4 = data.getFullYear(); // 4 dígitos
let str_data = dia + '/' + (mes + 1) + '/' + ano4; // Formata a data e a hora (note o mês + 1)
btnIncluir.style.background = 'green';
btnExcluir.style.background = 'red';

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');


function teste() {
    const dataNasc = document.querySelector('#dataNasc');
    let dataNascValor = dataNasc.value;
    console.log(dataNascValor);
    console.log(dia);
    console.log(mes);
    console.log(ano4);
    console.log(str_data);
}


