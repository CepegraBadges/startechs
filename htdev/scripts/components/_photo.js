/* PHOTO BUTTON + PARAMETERS */
$('.btn_photo').on('click', function(){
  if($(this).hasClass('btn_photo__take')) {
    $(this).removeClass('btn_photo__take');
    $(this).addClass('btn_photo__editor');
  }
  else {
    $('.container_photo-parameters').removeClass('hidden');
  }
});

$('.btn_photo-parameters__del').on('click', function(){
  $(this).parent().addClass('hidden');
  $('.btn_photo').removeClass('btn_photo__editor').addClass('btn_photo__take')
});
