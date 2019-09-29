import Swiper from 'swiper/js/swiper.min.js';

// $(document).ready(function () {
//   //initialize swiper when document ready
//   var mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   })
// });

var arWorkSwiper = [];
$('.js-swiper--work').each(function (index) {
  var $el = $(this),
    $elPag = $el.find('.swiper-pagination--work'),
    $elNavLeft = $el.find('.swiper-button-next--work'),
    $elNavRight = $el.find('.swiper-button-prev--work'),
    $elFraction = $el.find('.swiper-fraction--work');

  $el.addClass(`js-swiper--work-${index}`);
  $elPag.addClass(`swiper-pagination--work-${index}`);
  $elNavLeft.addClass(`swiper-button-next--work-${index}`);
  $elNavRight.addClass(`swiper-button-prev--work-${index}`);
  $elFraction.addClass(`swiper-fraction--work-${index}`);

  arWorkSwiper[index] = new Swiper(`.js-swiper--work-${index}`, {
    lazy: true,
    spaceBetween: 20,
    loop: false,
    slidesPerView: 4,
    speed: 900,
    autoHeight: true,
    simulateTouch: false,
    init: false,
    mousewheel: false,
    pagination: {
      el: `.swiper-pagination--work-${index}`,
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: `.swiper-button-next--work-${index}`,
      prevEl: `.swiper-button-prev--work-${index}`,
    }
  });

  arWorkSwiper[index].init();
});
