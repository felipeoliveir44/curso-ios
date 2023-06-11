const login = () => {
    const senhaRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    const nome = document.getElementById('nome').value.toUpperCase();
    const senha = document.getElementById('senha').value;
    const cargoElement = document.getElementById('cargo');
    const cargo = cargoElement.value;
    let nomeCargo;

    if (!senhaRegex.test(senha)) {
        alert(`Usuário ou senha incorretos!`)
    } else {

        if (!senhaRegex.test(senha)) {
            alert("Usuário ou senha incorretos!");
        } else {
            switch (cargo) {
                case "1":
                    nomeCargo = 'Analista';
                    break;

                case "2":
                    nomeCargo = 'CEO';
                    break;

                case "3":
                    nomeCargo = 'Estagio';
                    break;

                case "4":
                    nomeCargo = 'Junior';
                    break;

                case "5":
                    nomeCargo = 'Lider técnico';
                    break;

                case "6":
                    nomeCargo = 'Pleno';
                    break;

                case "7":
                    nomeCargo = 'Senior';
                    break;

                case "8":
                    nomeCargo = 'Trainee';
                    break;
            }

            alert(`Olá ${nome}, seu cargo é ${nomeCargo}, vamos te redirecionar para a página desejada`);
            // Redirecionar usuário
            window.location.href = "https://www.google.com";
        }
    }
}