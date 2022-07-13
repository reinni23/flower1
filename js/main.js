var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".scrollswiper", {
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true,
  },
  centermode: true,
  freeMode: true,
});
