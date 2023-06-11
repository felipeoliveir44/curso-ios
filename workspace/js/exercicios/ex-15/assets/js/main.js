const pegaNome = () => {
    const senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const cargoElement = document.getElementById('cargo');
    const cargo = cargoElement.value;
    let numeroCargo;

    if (!senhaRegex.test(senha)) {
        alert(`Usuário ou senha incorretos!`)

        
    } else {
        

        switch (cargo) {
            case 'analista':
                numeroCargo = 1;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'estagio':
                numeroCargo = 2;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'trainee':
                numeroCargo = 3;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'junior':
                numeroCargo = 4;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'pleno':
                numeroCargo = 5;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'senior':
                numeroCargo = 6;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'lider tecnico':
                numeroCargo = 7;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

            case 'ceo':
                numeroCargo = 8;
                alert(`Olá ${nome}, seu cargo é ${numeroCargo}, vamos te redirecionar para a página desejada`);
                break;

        }
        // Redirecionar usuario
        window.location.href = "https://www.google.com";
    }
}