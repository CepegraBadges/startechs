/**** DRAG AND DROP ****/

// Click sur les items des tabs
$('.box_item').on('click', function(){
  var itemClass = $(this).attr("data-item");
  $('.box_item').removeClass('selected');
  $('.box_thumbnail').removeClass('selected');
 
  if(!$(this).hasClass('active')){
    var cloneSvg = $(this).children('svg').clone().data("item", itemClass);
    var cloneSvgHtml = $('<div>').append($(cloneSvg).clone()).html();
    cloneSvg.addClass('drag').appendTo('.container_badge').draggable();
    $('<li class="box_thumbnail selected '+itemClass+'" data-item="'+itemClass+'">'+cloneSvgHtml+'</li>').appendTo('.container_items_thumbnail');
    $(this).addClass('active selected');
  }
  else{
    $(this).add('.box_thumbnail.'+itemClass+'').addClass('selected');
  }

  highLighter($(this));
})

// Zone de drop - trash à l'extérieur du badge
$('main').droppable({
  accept : ".drag",
  hoverClass : "active-trash",
  drop: function(event, ui){
    var dragClass = $(ui.draggable).data("item");
    $('.box_thumbnail.'+dragClass+'').remove();
    $(ui.draggable).remove();
    $('[data-item='+dragClass+']').removeClass('active selected');
  }
})

// Zone de drop - intérieur du badge
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

// Click sur le reset - activation shake + popup
$( ".btn_reset" ).on('click', function(){
  $(".container_items_thumbnail").children().addClass("shake"); 
  $(".background-popup, .popup").removeAttr("hidden");
});

// Réponse OUI au popup
$( ".answer-yes" ).on('click', function(){
  $(".container_items_thumbnail").children().remove();
  $(".box_item").removeClass('active selected');
  $('.drag').remove();
  $(".background-popup, .popup").attr("hidden", true);
});

// Réponse NON au popup
$( ".answer-no" ).click(function(){
  $(".background-popup, .popup").attr("hidden", true);
  $(".container_items_thumbnail").children().removeClass("shake");
});

// Click sur les thumbnails
$('.container_items_thumbnail').on("click", ".box_thumbnail", function(){
  var itemClass = $(this).attr("data-item");
  $('.box_thumbnail, .box_item').removeClass('selected');
  $('[data-item='+itemClass+']').addClass('selected');
  highLighter($(this));
});

// Apparition de trash + jeter les éléments 1 à 1
$('.box_thumbnail selected').on('click', function(){
  $('.btn_trash').removeAttr('hidden');
});

$('.btn_trash').on('click', function(){
  $('.container_items_thumbnail').children().remove();
  $(".box_item").removeClass('active selected');
  $('.drag').remove();
});


/**** FUNCTIONS ****/

/* Mettre en avant l'item manipulable */
function highLighter(item){
  var itemClass = item.attr('data-item');
  $('.drag').css("zIndex", '1');
  $('.drag.'+itemClass+'').css("zIndex", '10');
}