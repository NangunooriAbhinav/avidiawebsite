const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-right");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    for(var i=0; i<lines.length; i++) {
        lines[i].classList.toggle("active");
    }

})