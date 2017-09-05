$('.btn-storage').on('click', function(){
    $('.header_print-and-share, .container_print-and-share').addClass('blur');
    $('.container_print-and-share__fade-in').css("display", "flex");
    $('.popup_print-and-share, .container_print-and-share__fade-in:before,.text_pop_action:after ').addClass('bop');
});

$('.print').on('click', function(){
    $('.li_pop_1').css("display", "none");
    $('.li_pop_2').css("display", "block");
    $('.li_pop_3').css("display", "block");
    $(".text_pop_action").replaceWith("<p class='text_pop text_pop_action'>Ton badge sera imprimé d'ici quelques minutes</p>");
    $(".text_pop_option").replaceWith("<p class='text_pop text_pop_option'>N'oublie pas de partager ton design sur facebook</p>");
});

$('.mail').on('click', function(){
    $('.li_pop_1').css("display", "block");
    $('.li_pop_2').css("display", "none");
    $('.li_pop_3').css("display", "block");
    $(".text_pop_action").replaceWith("<p class='text_pop text_pop_action'>Ton avatar a bien été envoyé!</p>");
    $(".text_pop_option").replaceWith("<p class='text_pop text_pop_option'>N'oublie pas de partager ton design sur facebook</p>");
});

$('.face').on('click', function(){
    $('.li_pop_1').css("display", "block");
    $('.li_pop_2').css("display", "block");
    $('.li_pop_3').css("display", "none");
    $(".text_pop_action").replaceWith("<p class='text_pop text_pop_action'>Ton avatar a bien été publié sur facebook!</p>");
    $(".text_pop_option").replaceWith("<p class='text_pop text_pop_option'>N'oublie pas de te l'envoyer par email</p>");
});
