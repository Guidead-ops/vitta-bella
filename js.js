let navMenu = document.querySelector(".botao-menu");

navMenu.addEventListener("click", () => {
    let ul = document.querySelector("ul")
    ul.style.display = "none"
    navMenu.style.display = "block"
});
