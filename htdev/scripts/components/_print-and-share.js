$('.btn-storage').on('click', function(){
    $('.header_print-and-share, .container_print-and-share').addClass('blur');
    $('.container_print-and-share__fade-in').css("display", "flex");
    $('container_print-and-share__fade-in').addClass('bop');
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

$('.one').on('click', function(){
    $('hr').css("left", "28px");
    $('hr').css("width", "8.1%");
});
$('.two').on('click', function(){
    $('hr').css("left", "125px");
    $('hr').css("width", "14.5%");
});
$('.three').on('click', function(){
    $('hr').css("left", "254px");
    $('hr').css("width", "14.1%");
});
$('.four').on('click', function(){
    $('hr').css("left", "381px");
    $('hr').css("width", "20%");
});

$('#shareBtn').on('click', function(e){
    var elementLS = window.localStorage.getItem("filename");
    e.preventDefault();
    alert('facebook');
    //FB.init();
  FB.ui({
    method: 'share',
    //display: 'iframe',
    mobile_iframe: true,
    //app_id: 184484190795,
    href: 'https://killer-cepegra.xyz/badges/'+elementLS+'.png',
  }, function(response){
      //return false;
       $('.li_pop_1').css("display", "block");
    $('.li_pop_2').css("display", "block");
    $('.li_pop_3').css("display", "none");
    $(".text_pop_action").replaceWith("<p class='text_pop text_pop_action'>Ton avatar a bien été publié sur facebook!</p>");
    $(".text_pop_option").replaceWith("<p class='text_pop text_pop_option'>N'oublie pas de te l'envoyer par email</p>");
  });


});


// SHARE FACEBOOK
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1948586515423473',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
