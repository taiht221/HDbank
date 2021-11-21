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

$(document).ready(function () {
  var showBTN = $('.show-btn')
  for (var i = 0; i < showBTN.length; i++) {
    showBTN[i].onclick = showModal
  }
  function showModal(e) {
    e.preventDefault()
    // get the hex color
    var modalNumber = e.target.getAttribute('data-src')
    var close = $('.close')
    // update src of image
    document.getElementById(modalNumber).style.display = 'flex'
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        document.getElementById(modalNumber).style.display = 'none'
      }
    })
    close.on('click', function () {
      document.getElementById(modalNumber).style.display = 'none'
    })
  }
  $(document).on('click', '.pick .color', function () {
    $(this).addClass('color-active').siblings().removeClass('color-active')
  })

  $('.product-img').click(function (event) {
    event.stopPropagation()
  })
})
