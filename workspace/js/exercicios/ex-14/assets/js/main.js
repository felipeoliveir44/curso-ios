let inscritos = [];

function incluirInscrito() {
    let nome = document.getElementById("nome").value;
    let dataNasc = document.getElementById("dataNasc").value;
    let email = document.getElementById("email").value;

    // Verifica se é maior de 18 anos
    let dataNascimento = new Date(dataNasc);
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    // Verifica se o email é válido usando RegEx
    let emailRegex = /^\S+@\S+\.\S+$/;
    let emailValido = emailRegex.test(email);

    if (idade >= 18 && emailValido) {
        let inscrito = {
            nome: nome,
            dataNasc: dataNasc,
            email: email
        };

        inscritos.push(inscrito);
        mostrarInscritos();
    } else {
        alert("Idade mínima de 18 anos e email inválido. Inscrição não realizada.");
    }
}

function excluirInscrito() {
    let item = document.getElementById("item").value;
    let index = parseInt(item) - 1;

    if (index >= 0 && index < inscritos.length) {
        inscritos.splice(index, 1);
        mostrarInscritos();
    } else {
        alert("Item inválido. Nenhum inscrito removido.");
    }
}

function mostrarInscritos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < inscritos.length; i++) {
        let inscrito = inscritos[i];

        let item = document.createElement("li");
        item.textContent = "Nome: " + inscrito.nome + ", Data de Nascimento: " + inscrito.dataNasc + ", Email: " + inscrito.email;

        lista.appendChild(item);
    }
}