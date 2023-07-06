var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1101: {
            slidesPerView: 4,
        },
    }
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    breakpoints: {
        1100: {
            slidesPerView: 1.3,
        }
    }
});

var swiper3 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1101: {
            slidesPerView: 4,
        },
    }
});

var swiper4 = new Swiper(".mySwiper3", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
    breakpoints: {
        1100: {
            slidesPerView: 1.3,
        }
    }
});

var swiper5 = new Swiper(".mySwiper6", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        1101: {
            slidesPerView: 4,
        },
    }
});

var swiper6 = new Swiper(".mySwiper5", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper5,
    },
    breakpoints: {
        1100: {
            slidesPerView: 1.3,
        }
    }
});

const tabs_info = document.querySelectorAll(".tab-info");
const tab_info_active = document.querySelector(".tab-info-active");
const tabs = document.querySelectorAll(".tab");
const tab_active = document.querySelector(".active-tab");

let last_active_tab = tab_active;
let last_active_tab_info = tab_info_active;

tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        last_active_tab.classList.remove("active-tab");
        last_active_tab_info.classList.remove("tab-info-active");
        tabs[index].classList.add("active-tab");
        tabs_info[index].classList.add("tab-info-active");
        last_active_tab = tabs[index];
        last_active_tab_info = tabs_info[index];
    });
});


const second_tabs_info = document.querySelectorAll(".second-tab-info");
const second_tab_info_active = document.querySelector(".second-tab-info-active");
const second_tabs = document.querySelectorAll(".second-tab");
const second_tab_active = document.querySelector(".second-active-tab");

let second_last_active_tab = second_tab_active;
let second_last_active_tab_info = second_tab_info_active;

second_tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        second_last_active_tab.classList.remove("second-active-tab");
        second_last_active_tab_info.classList.remove("second-tab-info-active");
        second_tabs[index].classList.add("second-active-tab");
        second_tabs_info[index].classList.add("second-tab-info-active");
        second_last_active_tab = second_tabs[index];
        second_last_active_tab_info = second_tabs_info[index];
    });
});



