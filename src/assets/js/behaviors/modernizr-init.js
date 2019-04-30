// Modernizr
import Modernizr from 'modernizr';

/* object-fit fallback*/
// https://medium.com/@primozcigler/neat-trick-for-css-object-fit-fallback-on-edge-and-other-browsers-afbc53bbb2c3
if ( !Modernizr.objectfit ) {
  $('[data-cropper]').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }  
  });
}