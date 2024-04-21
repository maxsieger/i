let burger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-blok__navbar-2");

burger.addEventListener("click", burger_open)

function burger_open() {
    menu.classList.toggle("nav-blok__navbar-2--open");
    let name = menu.className;
    console.log(name)
}

function openModal() {
    var modal = document.getElementsByClassName("div-portfolio__img-1--off");
    modal.style.display = "flex";
}

    function closeModal() {
    var modal = document.getElementById("div-portfolio__img-1--off");
    modal.style.display = "none";
}