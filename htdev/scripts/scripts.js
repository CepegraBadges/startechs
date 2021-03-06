$(function() {

      $("a:not(#shareBtn, .btn_start, .btn_validate, .btn_mail)").on('click', function (event) {
        event.preventDefault();
        window.location = $(this).attr("href");
    });

 /* PREVENT SCROLL ON TABLET */
 $('#swipe').bind("touchmove",function(event){
     event.preventDefault();
 });


 /* SCROLL THUMBNAILS */
 $('.container_global_thumbnail').on('mousewheel', function(event, delta) {
   //alert('ok')
   event.preventDefault();
   this.scrollLeft -= (delta * 20);
   return false;
 });


 /* SWIPE ADMIN */
 $("#swipe").dragend({
   afterInitialize: function() {
     this.container.style.visibility = "visible";
     $('.parameters').remove('hidden');
   }
 })


 /* ANIM INPUT PSEUDO + MAIL  */
 myInput = document.querySelectorAll("#pseudo, #mail");
// $('#pseudo, #mail').on('focusout', function() {
//     var empty = $(this).parent().find("input").filter(function() {
//         return this.value === "";
//     });
//     if(empty.length) {
//         $('#pseudo').css({
//        'min-width': '120px',
//        'transition': '0.3s'
//      });

//     $('#mail').css({
//        'min-width': '250px',
//        'transition': '0.3s'
//      });
//     }
// });
for (element of myInput) {
  element.addEventListener("keyup", function() {
    this.size = this.value.length+2;
    //alert(this.value.length);
  });
}




  $( ".section-right" ).tabs();

  $('.link_container_tab').on('click', function(){
    $('.link_container_tab').removeClass('active-tabs');
    $(this).addClass('active-tabs');
  })

  $('.box_item').on('click', function(){
    $(this).addClass('selected');
  })

  // PALETTE COULEUR

  $( ".container_btn-palette-test" ).tabs();
  $( ".container_btn-palette-test" ).hide();
  $('.container').click(function(){
    $(".container_btn-palette-test").toggle();
  });

  $("#tabs-1 li").click(function(){
    color = $(this).attr("data-color");
    $(".drag-zone").attr("data-color",color);
    $(".btn_palette-blue").attr("data-color", color);
     $(".fill a").attr("data-color", color);
  })

  $("#tabs-2 li").click(function(){
    outline = $(this).attr("data-outline");
    fill= $(this).attr("data-fill");
    $(".drag-zone_logo-badge").attr("data-fill", fill);
    $(".btn_palette-blue").attr("data-outline", outline);
    $(".mini_logo-palette").attr("data-fill", fill);
    $("#cepegra").attr("data-fill", fill);
    $("#text-badge").attr("data-fill", fill);
    $(".drag").attr("data-fill", fill);
  })

  $('#tabs-1').on("click", ".color-fill", function(){
    var itemClass = $(this).attr("data-color");
    $('#tabs-1, .color-fill').removeClass('color-selected');
    $(this).add('.color-fill.'+itemClass+'').addClass('color-selected');
  });

    $('#tabs-2').on("click", ".color-outline", function(){
    var itemClass = $(this).attr("data-outline");
    $('#tabs-1, .color-outline').removeClass('color-selected');
    $(this).add('.color-outline.'+itemClass+'').addClass('color-selected');
  });



  /* SCROLL THUMBNAILS */
  $('.container_global_thumbnail').on('mousewheel', function(event, delta) {
    //alert('ok')
    event.preventDefault();
    this.scrollLeft -= (delta * 20);
    return false;
  });




  /* PUT SVG IN PRINT AND SHARe */
    var myBadge = JSON.parse(localStorage.getItem('myBadge'));
    $(".badge__finished").html(myBadge);



// Print

$('.btn_print').click(function(){
      print();

});

var colorBgdBadge = function(){
  var bgdBadge = $('#bcgGrad').css('fill');

  $('.badge__finished_print').css("background-color",bgdBadge);
};



    var beforePrint = function() {
        $('.badge__finished_print').removeClass('hidden');
        colorBgdBadge();
    };

    var afterPrint = function() {
        $('.badge__finished_print').addClass('hidden');
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;



  //@prepros-append components/_photo.js
  //@prepros-append components/_print-and-share.js
  //@prepros-append components/_creationBadge.js
  //@prepros-append components/_svgToImg.js
  //@prepros-append components/_sendMail.js

  $(".input_login").focus(function () {
    $(".title_index").toggleClass("hide");
  });

  $(".input_login").blur(function () {
    $(".title_index").toggleClass("hide");
  });

});
