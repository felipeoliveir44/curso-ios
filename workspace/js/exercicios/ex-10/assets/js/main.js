class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    getIdade() {
        const dataAtual = new Date();
        let idade = dataAtual.getFullYear() - this.dataNascimento.getFullYear();
        const mesAtual = dataAtual.getMonth();
        const diaAtual = dataAtual.getDate();
        const mesNascimento = this.dataNascimento.getMonth();
        const diaNascimento = this.dataNascimento.getDate();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }
}

Pessoa.prototype.getNiver = function () {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
        return true;
    } else {
        return false;
    }
};

const pessoas = [
    new Pessoa('Lucas', '1978-08-23'),
    new Pessoa('Amanda', '1985-11-07'),
    new Pessoa('Thiago', '1992-02-14'),
    new Pessoa('Mariana', '1982-06-30'),
    new Pessoa('Guilherme', '1995-09-12'),
    new Pessoa('Isabela', '1989-12-18'),
    new Pessoa('Pedro', '1976-03-09'),
    new Pessoa('Julia', '1987-04-26'),
    new Pessoa('Rafael', '1998-07-03'),
    new Pessoa('Fernanda', '1984-10-21')
];

for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver() ? 'já' : 'ainda não';

    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário esse ano.`);
}