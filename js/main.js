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
  // validate form
  $.validator.addMethod(
    'phoneReg',
    function (value) {
      return /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
        value,
      )
    },
    'Xin hãy nhập đúng số điện thoại',
    'emailReg',
    function isEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      return regex.test(email)
    },
    'Xin hãy nhập đúng email',
  )
  $.validator.addMethod(
    'emailReg',
    function isEmail(email) {
      var regex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      return regex.test(email)
    },
    'Xin hãy nhập đúng email',
  )
  $('#register-form').validate({
    rules: {
      'company-name': {
        required: true,
        minlength: 1,
      },
      'company-id': {
        required: true,
        minlength: 1,
      },
      'fullname': {
        required: true,
        minlength: 1,
      },
      'phone-number': {
        number: true,
        required: true,
        phoneReg: true,
      },
      'email': {
        required: true,
        emailReg: true,
      },
    },
    messages: {
      'fullname': {
        required: 'Vui lòng nhập họ và tên',
        minlength: 'Vui lòng nhập ít nhất 1 ký tự',
      },
      'phone-number': {
        required: 'Vui lòng nhập số điện thoại',
        number: 'Vui lòng nhập định dạng số',
      },
      'email': {
        required: 'Vui lòng nhập địa chỉ email',
      },
      'company-name': {
        required: 'Vui lòng nhập tên công ty',
      },
      'company-id': {
        required: 'Vui lòng nhập mã số thuế',
      },
    },
  })
  // Submit Form
  $('#register-form').on('submit', function (e) {
    e.preventDefault()
    var companyName = $("#register-form input[name='company-name']").val()
    var companyID = $("#register-form input[name='company-id']").val()
    var phoneNumber = $("#register-form input[name='phone-number']").val()
    var email = $("#register-form input[name='email']").val()
    var fullName = $("#register-form input[name='fullname']").val()
    var service = $('#register-form #service').val()
    var other = $("#register-form input[name='other']").val()
    $.ajax({
      data: {
        name_company: companyName,
        tax_code: companyID,
        full_name: fullName,
        phone: phoneNumber,
        email: email,
        bemax: service,
        other: other,
      },
      url: 'https://client-pages.adnetwork.vn/control/API/HDBank_Nov2021.php',
      type: 'post',
      success: function (res) {
        if (res === 'phone') {
          $('.er-phone1').css('display', 'block')
        } else {
          if (JSON.parse(res).status === 'ok') {
            // window.location.pathname = '/cam-on'
            alert('Bạn đã đăng kí thành công')
            localStorage.setItem('sucess', 'sucess')
          } else {
            alert('Có lỗi xảy ra vui lòng nhập lại')
          }
        }
      },
      error: function (res) {
        alert('Có lỗi xảy ra vui lòng nhập lại')
      },
    })
  })
})
