module.exports = function() {

  // begin Slick slider

  $('.reviews-slider').slick({
    fade: false,
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    touchMove: true,
    swipe: true,
    touchThreshold: 100,
    swipeToSlide: true,
    prevArrow: "<div class='reviews-slider__arrow reviews-slider__arrow--prev'></div>",
    nextArrow: "<div class='reviews-slider__arrow reviews-slider__arrow--next'></div>"
  });

  // end Slick slider

};