$(document).ready(function(){
  $('.large-img-btn').bind('click', function() {
    var img_path = $(this).attr('imgpath');
    $('.cover-bg').fadeIn('slow/400/fast', function() {
      $('.popup-img').attr('src', img_path);
    });
  });
  $('.cover-bg').bind('click', function() {
    $('.cover-bg').fadeOut('slow/400/fast', function() {
      $('.popup-img').attr('src', '');
    });
  });
});