let ru = document.querySelector(".portfolio-img-1");
let eng = document.querySelector(".portfolio-img-2");

ru.addEventListener("click", ru_open)

function ru_open() {
    let ru_div = document.querySelector(".div-portfolio__img-1");
    ru.classList.add("portfolio-img-1--activ");
    ru_div.classList.add("div-portfolio__img-1--activ");
}

let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-blok__navbar-2");

burger.addEventListener("click", burger_open)

function burger_open() {
    menu.classList.toggle("nav-blok__navbar-2--open");
    let name = menu.className;
    console.log(name)
}