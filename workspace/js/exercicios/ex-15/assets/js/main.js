const pegaNome = () => {
    const senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    if (!senhaRegex.test(senha)) {
        alert('Teste');
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;

        console.log(`Seu nome é ${nome} e sua senha é ${senha}`);
    }
    else {
        alert('a')
    }
}

// const teste = () => {
//     const cargoElement = document.getElementById('cargo');
//     const cargo = cargoElement.value;

//     let nomeCargo;

//     switch (cargo) {
//         case 'analista':
//             nomeCargo = 1;
//             break;

//         case 'estagio':
//             nomeCargo = 2;
//             break;

//         case 'trainee':
//             nomeCargo = 3;
//             break;

//         case 'junior':
//             nomeCargo = 4;
//             break;

//         case 'pleno':
//             nomeCargo = 5;
//             break;

//         case 'senior':
//             nomeCargo = 6;
//             break;

//         case 'lider tecnico':
//             nomeCargo = 7;
//             break;

//         case 'ceo':
//             nomeCargo = 8;
//             break;

//     }

//     console.log(nomeCargo);
// }