const abrir = document.querySelector(".open")
const fechar = document.querySelector(".close")
const items = document.querySelector(".header-list")
const botao = document.querySelector(".button")

function opened() {
    abrir.style.display = "none"
    fechar.style.display = "block"
    items.style.display = "flex"
    botao.style.display = "flex"
}

function closed() {
    abrir.style.display = "block"
    fechar.style.display = "none"
    items.style.display = "none"
    botao.style.display = "none"
}

window.addEventListener("resize", () => {
    const largura = window.innerWidth

    if (largura > 762) { // ajuste esse valor conforme o breakpoint do seu layout
        abrir.style.display = "none"
        fechar.style.display = "none"
        items.style.display = "flex"
        botao.style.display = "flex"
    } else {
        abrir.style.display = "block"
        fechar.style.display = "none"
        items.style.display = "none"
        botao.style.display = "none"
    }
})
