$(function() {
  $('.banner').owlCarousel({
      items: 1,
      dots: true
  })
  $('.all-artists').owlCarousel({
    items: 6,
    nav: true,
    dots: false,
    loop: true
  })
  $('.all-artists').find('.owl-item').addClass('all-artists-item');
})