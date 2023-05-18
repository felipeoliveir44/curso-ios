const boasVindas = () => {
    alert('Bem vindo')
}

function calcularTradicional() {
    const a = 3;
    const b = 4;
    const c = -5;

    const delta = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    alert(`Resultado usando function:\nx1 = ${x1} \nx2 = ${x2}`);
}

let calcularArrow = () => {
    const a = 3;
    const b = 4;
    const c = -5;

    const delta = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    alert(`Resultado usando Arrow function:\nx1 = ${x1} \nx2 = ${x2}`);
}