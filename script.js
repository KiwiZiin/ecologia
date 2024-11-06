
const hamburguer = document.querySelector(".hamburguer");
const close = document.querySelector(".close");
const ul = document.querySelector("ul");

hamburguer.addEventListener("click", () => {
    ul.classList.toggle("show");
    close.classList.toggle("hamburguer");
    hamburguer.classList.toggle("hidden")
});

close.addEventListener("click", () => {
    ul.classList.toggle("show");
    hamburguer.classList.toggle("hidden");
    close.classList.toggle("hamburguer");
});

const li = document.querySelectorAll("li");
const linkAction = () => {
    ul.classList.toggle("show");
    hamburguer.classList.toggle("hidden");
    close.classList.toggle("hamburguer");

};
li.forEach(links => links.addEventListener("click", linkAction));