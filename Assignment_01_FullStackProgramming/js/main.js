$(document).ready(function () {

  /* ============================================
     HERO SLIDER
  ============================================ */
  let currentSlide = 0;
  const slides = $('.hero-slide');
  const dots = $('.hero-dots span');

  function showSlide(n) {
    slides.removeClass('active');
    dots.removeClass('active');
    currentSlide = (n + slides.length) % slides.length;
    $(slides[currentSlide]).addClass('active');
    $(dots[currentSlide]).addClass('active');
  }

  if (slides.length > 0) {
    showSlide(0);
    setInterval(() => showSlide(currentSlide + 1), 4000);
    dots.on('click', function () { showSlide($(this).index()); });
  }

  /* ============================================
     PRODUCT IMAGE THUMBNAIL CLICK
  ============================================ */
  $('.thumb-gallery img').on('click', function () {
    $('.thumb-gallery img').removeClass('active');
    $(this).addClass('active');
    const src = $(this).attr('src');
    $('.product-main-img img').attr('src', src);
  });

  /* ============================================
     PRODUCT TABS
  ============================================ */
  $('.tab-btn').on('click', function () {
    const target = $(this).data('tab');
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.tab-content-box').hide();
    $('#tab-' + target).fadeIn(200);
  });

  /* ============================================
     RELATED PRODUCTS SLIDER
  ============================================ */
  let relPos = 0;
  $('#relNext').on('click', function () {
    const maxScroll = $('#relSlider')[0].scrollWidth - $('#relSlider').width();
    relPos = Math.min(relPos + 160, maxScroll);
    $('#relSlider').animate({ scrollLeft: relPos }, 300);
  });
  $('#relPrev').on('click', function () {
    relPos = Math.max(relPos - 160, 0);
    $('#relSlider').animate({ scrollLeft: relPos }, 300);
  });

  /* ============================================
     HELPER FUNCTIONS
  ============================================ */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(field, msg) {
    $(field).addClass('is-invalid').removeClass('is-valid');
    $(field).siblings('.invalid-feedback').remove();
    $(field).after('<div class="invalid-feedback">' + msg + '</div>');
  }

  function clearError(field) {
    $(field).removeClass('is-invalid').addClass('is-valid');
    $(field).siblings('.invalid-feedback').remove();
  }

  function validateField(field, condition, msg) {
    if (!condition) { showError(field, msg); return false; }
    clearError(field); return true;
  }

  /* ============================================
     LOGIN FORM VALIDATION
  ============================================ */
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;
    valid &= validateField('#loginEmail', isValidEmail($('#loginEmail').val()), 'Please enter a valid email address.');
    valid &= validateField('#loginPassword', $('#loginPassword').val().length >= 6, 'Password must be at least 6 characters.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Login successful! Redirecting...</div>');
      setTimeout(() => { window.location.href = 'my-account.html'; }, 1500);
    }
  });

  /* ============================================
     REGISTER FORM VALIDATION
  ============================================ */
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const pass = $('#regPass').val();
    valid &= validateField('#regEmail', isValidEmail($('#regEmail').val()), 'Please enter a valid email address.');
    valid &= validateField('#regPass', pass.length >= 6 && pass.length <= 20, 'Password must be 6–20 characters long.');
    valid &= validateField('#regRePass', $('#regRePass').val() === pass, 'Passwords do not match.');
    valid &= validateField('#regFirst', $('#regFirst').val().trim() !== '', 'First name is required.');
    valid &= validateField('#regLast', $('#regLast').val().trim() !== '', 'Last name is required.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Account created successfully!</div>');
      setTimeout(() => { window.location.href = 'login.html'; }, 1500);
    }
  });

  /* ============================================
     FORGOT PASSWORD FORM VALIDATION
  ============================================ */
  $('#forgotForm').on('submit', function (e) {
    e.preventDefault();
    let valid = validateField('#forgotEmail', isValidEmail($('#forgotEmail').val()), 'Please enter a valid email address.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Password reset link has been sent to your email.</div>');
    }
  });

  /* ============================================
     CONTACT FORM VALIDATION
  ============================================ */
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;
    valid &= validateField('#contactName', $('#contactName').val().trim() !== '', 'First name is required.');
    valid &= validateField('#contactEmail', isValidEmail($('#contactEmail').val()), 'Please enter a valid email address.');
    valid &= validateField('#contactSubject', $('#contactSubject').val().trim() !== '', 'Subject is required.');
    valid &= validateField('#contactMessage', $('#contactMessage').val().trim().length >= 10, 'Message must be at least 10 characters.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Your message has been sent successfully!</div>');
      $('#contactForm')[0].reset();
    }
  });

  /* ============================================
     BILLING ADDRESS FORM VALIDATION
  ============================================ */
  $('#billingForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;
    valid &= validateField('#bFirst', $('#bFirst').val().trim() !== '', 'First name is required.');
    valid &= validateField('#bLast', $('#bLast').val().trim() !== '', 'Last name is required.');
    valid &= validateField('#bEmail', isValidEmail($('#bEmail').val()), 'Valid email required.');
    valid &= validateField('#bPhone', $('#bPhone').val().trim() !== '', 'Phone is required.');
    valid &= validateField('#bCity', $('#bCity').val().trim() !== '', 'City is required.');
    valid &= validateField('#bState', $('#bState').val().trim() !== '', 'State is required.');
    valid &= validateField('#bZip', $('#bZip').val().trim() !== '', 'Zip code is required.');
    valid &= validateField('#bCountry', $('#bCountry').val().trim() !== '', 'Country is required.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Billing address updated successfully!</div>');
    }
  });

  /* ============================================
     SHIPPING ADDRESS FORM VALIDATION
  ============================================ */
  $('#shippingForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;
    valid &= validateField('#sFirst', $('#sFirst').val().trim() !== '', 'First name is required.');
    valid &= validateField('#sLast', $('#sLast').val().trim() !== '', 'Last name is required.');
    valid &= validateField('#sEmail', isValidEmail($('#sEmail').val()), 'Valid email required.');
    valid &= validateField('#sPhone', $('#sPhone').val().trim() !== '', 'Phone is required.');
    valid &= validateField('#sCity', $('#sCity').val().trim() !== '', 'City is required.');
    valid &= validateField('#sState', $('#sState').val().trim() !== '', 'State is required.');
    valid &= validateField('#sZip', $('#sZip').val().trim() !== '', 'Zip code is required.');
    valid &= validateField('#sCountry', $('#sCountry').val().trim() !== '', 'Country is required.');
    if (valid) {
      $('.form-section').prepend('<div class="alert-success" style="background:#d4edda;color:#155724;padding:10px;margin-bottom:10px;font-size:12px;border:1px solid #c3e6cb;">✔ Shipping address updated successfully!</div>');
    }
  });

  /* ============================================
     REAL-TIME VALIDATION (on blur)
  ============================================ */
  $('input[type=email]').on('blur', function () {
    if ($(this).val() && !isValidEmail($(this).val())) {
      showError('#' + $(this).attr('id'), 'Please enter a valid email address.');
    } else if ($(this).val()) {
      clearError('#' + $(this).attr('id'));
    }
  });

  $('input[type=password]').on('blur', function () {
    if ($(this).val() && $(this).val().length < 6) {
      showError('#' + $(this).attr('id'), 'Password must be at least 6 characters.');
    } else if ($(this).val()) {
      clearError('#' + $(this).attr('id'));
    }
  });

});