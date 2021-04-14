// SwiperJS
var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  grabCursor: true,
  // Optional parameters

  // // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".btn-ctr .btn-ctr--next",
    prevEl: ".btn-ctr .btn-ctr--pre",
  },
  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

function stopPropagation(e) {
  e.stopPropagation();
}
// todo

// loading screen
$(window).on("load", function () {
  $("#preloder").fadeOut(2000);
});
