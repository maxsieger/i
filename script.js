let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-blok__navbar-2");

burger.addEventListener("click", burger_open)

function burger_open() {
    menu.classList.toggle("nav-blok__navbar-2--open");
    let name = menu.className;
    console.log(name)
}

const krest = document.querySelector(".krest");
const krest2 = document.querySelector(".krest2");

const portfilio_1_open = document.querySelector(".div-portfolio__img-1--on");
const portfilio_2_open = document.querySelector(".div-portfolio__img-2--on");

const portfilio_1 = document.querySelector(".div-portfolio__img-1"); 
const portfilio_2 = document.querySelector(".div-portfolio__img-2"); 

krest.addEventListener("click", () => {
    portfilio_1_open.style.display = "none";
    portfilio_2_open.style.display = "none";
});

krest2.addEventListener("click", () => {
    portfilio_1_open.style.display = "none";
    portfilio_2_open.style.display = "none";
});

portfilio_1.addEventListener("click", () => {
    portfilio_1_open.style.display = "flex";
    portfilio_2_open.style.display = "none";
});

portfilio_2.addEventListener("click", () => {
    portfilio_1_open.style.display = "none";
    portfilio_2_open.style.display = "flex";
});
