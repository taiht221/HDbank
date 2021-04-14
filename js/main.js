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
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function () {
  modal.style.display = "none";
};
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
$(".product-img").click(function (event) {
  event.stopPropagation();
  // Do something
});
