$(document).ready(function(){

  // Слайдер отзывов

  $('#reviews-block').owlCarousel({
    items:1,
    loop: true,
    nav: 1,
    navText: ["",""],
    dots: false,
    center: true,
    margin: 10,
    responsive: {
      890: {
        items: 3
      }
    }
  })
  // управление видео

  let video = document.querySelector('.video__item');
  let progress = $('.progress');

  $(video).on({
    timeupdate: function () {
        let progression = Math.floor(video.currentTime / video.duration * 100);
        progress.css({
            width: progression + '%'
        })
      }
  });

  $('.timeline').on('click', function(event) {
      let position = event.pageX - $(this).offset().left;
      let timelineWidth = $(this).width();
      let percents = position / timelineWidth * 100;
      let trackPosition = video.duration / 100 * percents;

      video.currentTime = trackPosition;
  })
    
    $('.stop').hide();

    $('.play').on('click',function(e){
      e.preventDefault();
      video.play();
      $(this).hide();
      $('.opacity-video').css({
        display: 'none'
      })
      let mediaVideo = $('.media__video');
      let offset = $.extend(mediaVideo.offset(), {
        width : mediaVideo.outerWidth(),
        height : mediaVideo.outerHeight()
      });
      $('body').on('mousemove', function(e) {
        let x = e.pageX;
        let y = e.pageY;

        if ((x >= offset.left && x <= offset.left + offset.width) && (y >= offset.top && y <= offset.top + offset.height)) {
          $('.stop').css({
            display: 'block'
          });
        } else {
          $('.stop').css({
            display: 'none'
          });
        }
      })
    })

    $('.stop').on('click', function(e) {
      e.preventDefault();
      $('body').off('mousemove');
      video.pause();
        $(this).hide();
        $('.play').show();
        $('.opacity-video').css({
          display: 'block'
        })
    })

    // Слайдер скриншотов

    function moveToSelected(element) {

        if (element == "next") {
          var selected = $(".selected").next();
        } else if (element == "prev") {
          var selected = $(".selected").prev();
        } else {
          var selected = element;
        }
      
        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();
      
        $(selected).removeClass().addClass("selected");
      
        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");
      
        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");
      
        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');
      
      }
      

      $(document).keydown(function(e) {
          switch(e.which) {
              case 37:
              moveToSelected('prev');
              break;
      
              case 39:
              moveToSelected('next');
              break;
      
              default: return;
          }
          e.preventDefault();
      });
      
      $('#carousel div').click(function() {
        moveToSelected($(this));
      });
      
      $('#prev').click(function() {
        moveToSelected('prev');
      });
      
      $('#next').click(function() {
        moveToSelected('next');
      });

      // Кнопка меню бургер

      $('.hamburger').on('click', (e) => {
        e.preventDefault();
        $('.hamburger').toggleClass('is-active');
        $('.top-line__nav').toggleClass('if-active');
        $('.nav__item').toggleClass('if-active-item');
        $('.nav__link').toggleClass('if-active-link');
      })

      let bodyWidth = $('body');
      setInterval(() => {
        if(bodyWidth.width() >= 768) {
          $('.hamburger').removeClass('is-active');
          $('.top-line__nav').removeClass('if-active');
          $('.nav__item').removeClass('if-active-item');
          $('.nav__link').removeClass('if-active-link');
        }
      }, 150)
      
});