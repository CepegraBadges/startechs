/* DRAG AND DROP */


$('.box_item').on('click', function(){
  var itemSource = $( this ).find('svg').attr("src");
  var itemClass = $(this).attr("data-item");
  $('.box_item').removeClass('selected');
  $('.box_thumbnail').removeClass('selected');
 
  if(!$(this).hasClass('active')){
    $('<svg src="'+itemSource+'" class="drag '+itemClass+'" data-item="'+itemClass+'">').appendTo('.badge').draggable({containment : $('.section-left')});
    $('<li class="box_thumbnail selected '+itemClass+'" data-item="'+itemClass+'"><svg src="'+itemSource+'"></li>').appendTo('.container_items_thumbnail');
    $(this).addClass('active selected');
  }
  else{
    $(this).add('.box_thumbnail.'+itemClass+'').addClass('selected');
  }

  highLighter($(this));
})

$('.section-left').droppable({
  accept : ".drag",
  hoverClass : "active-trash",
  drop: function(event, ui){
    var dragClass = $(ui.draggable).attr("data-item");
    $('.box_thumbnail.'+dragClass+'').remove();
    $(ui.draggable).remove();
    $('.box_item.'+dragClass+'').removeClass('active selected');
  }
})

$('.badge').droppable({
  accept: ".drag",
  greedy: true,
  over: function(event, ui){
    $(ui.draggable).removeClass('hover-trash')
  },
  out: function(event, ui){
    $(ui.draggable).addClass('hover-trash')
  }
})

/////////

  $( ".btn_reset" ).click(function(shake){
    $( ".container_items_thumbnail" ).children().addClass("shake");
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
  });

  // réponse non
  $( ".answer-no" ).click(function(no){
    //alert('clic yes');
    $(".popup").attr("hidden", true);
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