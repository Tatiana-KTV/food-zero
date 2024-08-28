$(function(){

  $('.slider-testimonials').slick({
    arrows: true,
    appendArrows: '.arrows',
    // prevArrow: '< button type = "button"class = "slick-prev" > Previous < /button>'
prevArrow: $('.prev'),
  nextArrow: $('.next'),

  

  });

  

});

document.getElementById('myDate').valueAsDate = new Date();
$('.reservation-form__select-style').styler();