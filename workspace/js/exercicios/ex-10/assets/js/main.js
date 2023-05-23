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
  
  Pessoa.prototype.getNiver = function() {
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
    new Pessoa('Fulano', '1990-05-15'),
    new Pessoa('Ciclano', '1985-09-20'),
    new Pessoa('Beltrano', '1995-03-10'),
    // Adicione as demais pessoas aqui...
  ];
  
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver() ? 'já' : 'ainda não';
  
    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário esse ano.`);
  }