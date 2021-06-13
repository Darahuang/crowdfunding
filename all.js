// tooltip
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// form驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
}());

// 當卷軸到最上端網頁的距離超過800px時,按鈕會顯示;反之,按鈕會消失
$(window).scroll(() => {
  if ($(this).scrollTop() > 800) {
    $('.js-btn').fadeIn('slow');
  } else {
    $('.js-btn').fadeOut('slow');
  }
});

// 當卷軸到最上端網頁的距離大於last時, 就在按鈕加上.showBtn - bottom; 反之, 移除.showBtn - bottom;
$(window).scroll(() => {
  last = $('body').height() - $(window).height() - 72;
  if ($(window).scrollTop() >= last) {
    $('.js-btn').addClass('showBtn-bottom');
  } else {
    $('.js-btn').removeClass('showBtn-bottom');
  }
});

// 點選到js-link就會在0.3秒中以動畫的方式,將捲軸拉動到800的高度
$('.js-link').click((e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 800 }, 300);
});
