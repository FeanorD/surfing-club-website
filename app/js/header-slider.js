$(document).ready(function(){
  const headerSlider = $("#headerSlider");

  headerSlider.on('initialized.owl.carousel', event => {
    $('.slide-controls-number__active').text(event.item.index + 1);
    $('.slide-controls-number__total').text(event.item.count);
  })

  headerSlider.owlCarousel({
    items: 1,
    autoplay: true,
    dots: false,
    smartSpeed: 1200,
    autoplayTimeout: 2000,
  });

  $('#headerSliderRight').click(function() {
    headerSlider.trigger('next.owl.carousel');
  })

  $('#headerSliderLeft').click(function() {
    headerSlider.trigger('prev.owl.carousel');
  })

  headerSlider.on('changed.owl.carousel', event => {
    $('.slide-controls-number__active').text(event.item.index + 1);
    $('.slide-controls-number__total').text(event.item.count);
  })

});
