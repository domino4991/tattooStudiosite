$(function() {
  $('.banner').owlCarousel({
      items: 1,
      dots: true
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
})