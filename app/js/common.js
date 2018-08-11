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

   $('.flowing-scroll').on( 'click', function(){ 
    let el = $(this);
    let dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
    });

    let target = $('.artists');
    let targetPos = target.offset().top;
    let winHeight = $(window).height();
    let scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
      var winScrollTop = $(this).scrollTop();
      if(winScrollTop > scrollToElem){
        $('.scroll-top').css({
          display: 'block'
        });
      } else {
        $('.scroll-top').css({
              display: 'none'
        });
      }
    });
});