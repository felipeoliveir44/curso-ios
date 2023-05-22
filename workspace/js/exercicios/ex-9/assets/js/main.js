const ex1 = [17, 43, 8, 4, 97, 56, 29] 

ex1.forEach((valor) => {
    if(valor % 2 == 0) {
        console.log(`O número: ${valor} é par`)
    }
    else {
        console.log(`O número: ${valor} é ímpar`)
    }
    
});

const ex2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61]

let filtroEx2 = ex2.filter((valor) => {
    return valor >= 20 && valor <= 80;
});

console.log(filtroEx2);