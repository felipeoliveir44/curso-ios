const alterarBackground = () => {
    const item1 = document.getElementById("item1");
    item1.style.backgroundColor = "yellow";
}

const alterarFonte = () => {
    const items = document.getElementsByClassName("fonte");
    for (var i = 0; i < items.length; i++) {
      items[i].style.fontWeight = "bold";
    }
}
const efeitoZebrado = () => {
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
      if (i % 2 === 0) {
        items[i].classList.add("zebrado");
      }
    }
}

const adicionarBordaBotao = () => {
    var items = document.getElementsByName("lista-item");
    for (var i = 0; i < items.length; i++) {
      items[i].style.borderBottom = "1px solid black";
    }
}

const removerElemento = () => {
    var item5 = document.getElementById("item5");
    item5.remove();
}

const recuperarElemento = () => {
    var newItem = document.createElement("li");
    newItem.textContent = "item recuperado";
    var list = document.getElementById("lista");
    var item4 = document.getElementById("item4");
    list.insertBefore(newItem, item4.nextSibling);
}
