$(function() {
  $('.banner').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
      dots: false
  })
  
  $('.artists__info').owlCarousel({
    items: 1,
    center: true,
    dots: true,
    nav: false,
    dotsContainer: '.all-artists'
  })
  $('.photo-item').click(function(){
    $('.artists__info').trigger('to.owl.carousel', [$(this).index(), 300]);  
   })

   $('.gallery__item').lightcase();

   $('.hamburger').on('click', function() {
     $(this).toggleClass('is-active');
     $('.top-line__nav').toggleClass('if-active');
     $('.nav__item').toggleClass('if-active-item');
   })
});