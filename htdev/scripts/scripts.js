$(function() {
 /* PREVENT SCROLL ON TABLET */
 document.ontouchmove = function(event){
     event.preventDefault();
 };

 /* SWIPE ADMIN */
 $("#swipe").dragend({
   afterInitialize: function() {
     this.container.style.visibility = "visible";
     $('.parameters').remove('hidden');
   }
 })
 

 /* ANIM INPUT PSEUDO + MAIL */
 myInput = document.querySelectorAll(".input_login");
 for (element of myInput) {
   element.addEventListener("keyup", function() {
     this.size = this.value.length;
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
  $(".container_btn-palette-test").hide();
  $(".container").click(function(){
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



  /* ANIM INPUT PSEUDO + MAIL */
  myInput = document.querySelectorAll(".input_login");
  for (element of myInput) {
    element.addEventListener("keyup", function() {
      this.size = this.value.length;
      //alert(this.value.length);
    });
  }

  //@prepros-append components/_photo.js
  //@prepros-append components/_print-and-share.js
<<<<<<< HEAD
  //@prepros-append components/_creationBadge.js
=======
  //@prepros-append components/_admin.js
});














/* DRAG AND DROP */

$('.box_item').on('click', function(){
  var itemSource = $( this ).find('img').attr("src");
  var itemClass = $(this).attr("data-item");
  var d = $( this ).find("path").attr('d');
  var viewBox = $( this ).find("svg").attr('viewBox');
  $('.box_item').removeClass('selected');
  $('.box_thumbnail').removeClass('selected');
 
  if(!$(this).hasClass('active')){
    $('<div data-item="'+itemClass+'"><li class="box_thumbnail selected '+itemClass+'" data-item="'+itemClass+'"><svg viewBox="'+viewBox+'"><path class="cls-1" d="'+d+'" ></svg></li></div>').appendTo('.drag-zone').draggable({containment : $('main')});
    $('<li class="box_thumbnail selected '+itemClass+'" data-item="'+itemClass+'"><svg viewBox="'+viewBox+'"><path class="cls-1" d="'+d+'" ></svg></li>').appendTo('.container_items_thumbnail');
    $(this).addClass('active selected');
  }
  else{
    $(this).add('.box_thumbnail.'+itemClass+'').addClass('selected');
  }

  highLighter($(this));
})





var svg = $( this ).find('img').attr("class");

$('.box_item').on("click", function(){
  $(".box_item active"+svg+"").clone().appendTo(".box_thumbnail img");
});

window.makeClone = function (){
    var cloneSVG = $('svg').clone();
    cloneSVG.appendTo('.test');
}
window.removeClone = function (){
    $('svg:last').remove();
}





$('main').droppable({
  accept : ".drag",
  hoverClass : "active-trash",
  drop: function(event, ui){
    var dragClass = $(ui.draggable).attr("data-item");
    $('.box_thumbnail.'+dragClass+'').remove();
    $(ui.draggable).remove();
    $('.box_item.'+dragClass+'').removeClass('active selected');
  }
})

$('.drag-zone').droppable({
  accept: ".drag",
  greedy: true,
  over: function(event, ui){
    $(ui.draggable).removeClass('hover-trash').css("background", "red");
  },
  out: function(event, ui){
    $(ui.draggable).addClass('hover-trash').css("background", "green");
  }
})

/////////

$( ".btn_reset" ).click(function(shake){
  $( ".container_items_thumbnail" ).children().addClass("shake"); 
  $(".background-popup").removeAttr("hidden");
  $(".popup").removeAttr("hidden");
  return shake;
});

// réponse oui
$( ".answer-yes" ).click(function(yes){
  //alert('clic yes');
  $( ".container_items_thumbnail" ).children().remove();
  $(".box_item").removeClass('active selected');
  $('.drag').remove();
  $(".popup").attr("hidden", true);
  $(".background-popup").attr("hidden", true);
});

// réponse non
$( ".answer-no" ).click(function(no){
  //alert('clic yes');
  $(".popup").attr("hidden", true);
  $(".background-popup").attr("hidden", true);
  $(".container_items_thumbnail").children().removeClass("shake");
});

$('.container_items_thumbnail').on("click", ".box_thumbnail", function(){
  var itemClass = $(this).attr("data-item");
  $('.box_thumbnail, .box_item').removeClass('selected');
  $(this).add('.box_item.'+itemClass+'').addClass('selected');
  highLighter($(this));
});

function highLighter(item){
  var itemClass = item.attr('data-item');
  $('.drag').css("zIndex", '1');
  $('.drag.'+itemClass+'').css("zIndex", '10');
}


/* btn trash */
$('.box_thumbnail selected').on('click', function(){
  $('.btn_trash').removeAttr('hidden');
});
>>>>>>> feature-admin

});