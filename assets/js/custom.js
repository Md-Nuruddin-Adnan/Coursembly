'use strict';

// slide-item-4 
$('.slide-item-4').slick({
    dots: false,
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

// slide-item-6
$('.slide-item-6').slick({
    dots: false,
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});


// range slider
$("#customRange").slider({
  min: 1,
  max: 1000,
  value: 1,
  step: 1,
  range: true,
  tooltip_split:true,
  lock_to_ticks:true,
  natural_arrow_keys:true,
  tooltip: 'hide',
  formatter: function(value) {
    if (Array.isArray(value)) {
      document.getElementById('min-range-show').innerHTML = value[0];
      document.getElementById('max-range-show').innerHTML = value[1];
    }
  }
});