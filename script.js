var element = document.body;
var theme = document.getElementById("theme");
if (element.classList.contains("dark-mode")) {
    theme.innerHTML = "Light";
} else {
    theme.innerHTML = "Dark";
}
function myFunction() {
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        theme.innerHTML = "Light";
    } else {
        theme.innerHTML = "Dark";
    }

}
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: -10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: -30,
        },
        900:{
            slidesPerView: 3,
            spaceBetween: -30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
    },
  })