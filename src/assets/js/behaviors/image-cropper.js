import 'cropperjs';
import 'jquery-cropper';
$(window).on("load", function () {
  const $elementsToCropper = $('[data-cropper]');

  $elementsToCropper.each(function (index, element) {
    let defaultImgWidth = (typeof $(element).data('cropper-width') === "undefined") ? 780 : $(element).data('cropper-width');
    let defaultImgHeight = (typeof $(element).data('cropper-height') === "undefined") ? 350 : $(element).data('cropper-height');

    let croppedCanvasOptions = {
      width: parseInt(defaultImgWidth, 10),
      height: parseInt(defaultImgHeight, 10),
      minWidth: parseInt(defaultImgWidth, 10),
      minHeight: parseInt(defaultImgHeight, 10),
      maxWidth: 1920,
      maxHeight: 1080,
      fillColor: 'transparent',
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high'
    };

    let $image = $(element).find('img');
    /* the Cropper */
    $image.cropper({
      autoCropArea:1,
      aspectRatio: defaultImgWidth / defaultImgHeight,
      viewMode: 3,
      guides: false,
      zoomable: false,
      dragMode: 'none',
      highlight: false,
      cropBoxResizable: false,
      cropBoxMovable:false,
      movable:false,
      ready: function (event) {
        const canvas = $image.cropper('getCroppedCanvas', croppedCanvasOptions);
        const croppedImageDataURL = canvas.toDataURL("image/jpeg");
        const originalImageURL = $image.attr('src');
        $image.attr('src', croppedImageDataURL);
        $image.attr('data-cropped', true);
        $image.attr('data-original-url', originalImageURL);
        $image.addClass('is-loaded');
        $(this).cropper('destroy');
      }
    });
  });
});

