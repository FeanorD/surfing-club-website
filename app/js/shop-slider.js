$(document).ready(function(){
  const shopSlider = $("#shopSlider");

  shopSlider.owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    smartSpeed: 500,
    margin: 2,
  });

  $('#shopSliderRight').click(function() {
    shopSlider.trigger('next.owl.carousel');
  })

  $('#headerSliderLeft').click(function() {
    shopSlider.trigger('prev.owl.carousel');
  })

});
