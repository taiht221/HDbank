// todo

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 5,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

$(document).ready(function () {
  function menuTop() {
    if ($(this).scrollTop() >= 200) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  }
  menuTop()
  $(window).scroll(menuTop)
  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('active')
    $('.navbar').toggleClass('active')
    $('.homepage,.footer').toggle()
  })
})
// loading screen
$(window).on('load', function () {
  $('#preloder').fadeOut(2000)
})
// Get the modal
var modal = document.getElementById('myModal') || ''

// Get the button that opens the modal
var btn = document.getElementById('open-modal') || ''

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0] || ''

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}
modal.onclick = function () {
  modal.style.display = 'none'
}
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
})
$('.product-img').click(function (event) {
  event.stopPropagation()
  // Do something
})
