const alterarBackground = () => {
    const item1 = document.getElementById("item1");
    item1.style.backgroundColor = "yellow";
}

const alterarFonte = () => {
    const items = document.getElementsByClassName("fonte");
    for (let i = 0; i < items.length; i++) {
      items[i].style.fontWeight = "bold";
    }
}
const efeitoZebrado = () => {
    const items = document.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
      if (i % 2 === 0) {
        items[i].classList.add("zebrado");
      }
    }
}

const adicionarBordaBotao = () => {
    const items = document.getElementsByName("lista-item");
    for (let i = 0; i < items.length; i++) {
      items[i].style.borderBottom = "1px solid black";
    }
}

const removerElemento = () => {
    const item5 = document.getElementById("item5");
    item5.remove();
}

const recuperarElemento = () => {
    const newItem = document.createElement("li");
    newItem.textContent = "item recuperado";
    const list = document.getElementById("lista");
    const item4 = document.getElementById("item4");
    list.insertBefore(newItem, item4.nextSibling);
}
