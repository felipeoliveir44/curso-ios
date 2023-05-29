const calculaTabuada = () => {
    let input = document.querySelector("#meuInput");
    let valor = input.value;
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let resultadoConta = valor * i;
        let linha = `Seu número é: ${valor} x ${i} = ${resultadoConta}`
        resultado.innerHTML += linha + "<br>";
    }
}