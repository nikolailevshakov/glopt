$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="logo/prev_arr.png"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="logo/next_arr.png"/></button>',
        },
        
        {
        centerMode: true,
        slidesToShow: 3,
        responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
  });