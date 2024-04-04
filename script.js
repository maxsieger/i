let ru = document.querySelector(".portfolio-img-1");
let eng = document.querySelector(".portfolio-img-2");

ru.addEventListener("click", ru_open())
eng.addEventListener("click", eng_open())

function ru_open(){
    let ru_div = document.querySelector("div-portfolio__img-1");
    ru.classList.add("portfolio-img-1--activ");
    ru_div.classList.add("div-portfolio__img-1--activ");
}
