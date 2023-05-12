let ex1 = 1;
while (ex1 <= 50) {
    console.log(`Número: ${ex1}`);
    ex1++;
}

let ex2 = 10,
    text = '';
do {
    text += `Contagem de ${ex2}\n`;
    ex2--;
} while (ex2 >= 0);
console.log(text)

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Número: ${i}`);
    }
}