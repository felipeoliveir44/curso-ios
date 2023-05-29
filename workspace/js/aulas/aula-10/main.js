class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idadeCarro(ano) {
        return ano - this.ano; //cálculo no retorno
    }
}

let dataHoje = new Date();
let ano = dataHoje.getFullYear();
// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro('Ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));
console.log('----------------------------------------------------------------------')

class ClassePessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');
console.log(pessoa1);
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());
console.log(pessoa1.getFullName());
