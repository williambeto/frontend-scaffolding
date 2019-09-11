/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

const debounce = require('lodash/debounce');
const throttle = require('lodash/throttle');

(function ($) {
  // Expressions indented
// Check every 200ms the scroll position
  $(document).on('scroll', throttle(function () {
    check_if_needs_more_content();
  }, 300));

  function check_if_needs_more_content() {
    const pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();
    if (pixelsFromWindowBottomToBottom < 200) {
      // Here it would go an ajax request
      // $('body').append($('.item').clone());
      // console.log($(document).height());
      // console.log($(window).scrollTop());
      // console.log($(window).height());
      console.log(pixelsFromWindowBottomToBottom);

    }
  }
})(jQuery);