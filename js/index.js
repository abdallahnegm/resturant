var mobile_menu = document.getElementById("mobile-menu")
var mobile_items = document.getElementById("mobile-items")
mobile_menu.onclick = function () {
    mobile_items.classList.toggle("open")
}
let switcherLis = document.querySelectorAll(".switch li");
let boxes = Array.from(document.querySelectorAll('.box'))

switcherLis.forEach((li => {
    li.addEventListener('click', removeActive)
    li.addEventListener('click', manageboxes)
}))

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageboxes() {
    boxes.forEach((box) => {
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.type).forEach((el) => {
        el.style.display = "flex";
    });
}
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 3,
        },
        968: {
            slidesPerView: 3,
        },
    },
});