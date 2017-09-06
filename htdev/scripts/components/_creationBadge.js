/**** DRAG AND DROP ****/

// Click sur les items des tabs
$('.box_item').on('click', function(){
  var itemClass = $(this).attr("data-item");
  $('.box_item').removeClass('selected');
  $('.box_thumbnail').removeClass('selected');
  $('.delete_cross').addClass('hidden');
  $(this).children('.delete_cross').removeClass('hidden');
    
  if(!$(this).hasClass('active')){
    // Cloner le svg et lui ajouter un data item
    var cloneSvg = $(this).children('svg').clone()
    cloneSvg = cloneSvg.data("item", itemClass);

    // Svg du thumbnail
    var thumbnailSvg = $('<div>').append($(cloneSvg)).html();

    // Ajouter la classe drag + les attributs au Svg du badge
    var badgeSvg = cloneSvg.addClass('drag');
    badgeSvg = badgeSvg.attr('width', '30%');
    badgeSvg = badgeSvg.attr('x', '35%');
    badgeSvg = badgeSvg.draggable().on('drag', function(event, ui){
      // update coordinates manually, since top/left style props don't work on SVG
      event.target.setAttribute('x', ui.position.left - addSvg.data('osX') + addSvgX);
      event.target.setAttribute('y', ui.position.top - addSvg.data('osY'));
    });
    
    //.insertBefore('#light-grad').draggable();

    var addSvg = badgeSvg.appendTo('.badge-svg');
    addSvg.data('osX', addSvg.offset().left);
    addSvg.data('osY', addSvg.offset().top);
    addSvgX = 315 * parseFloat(addSvg.attr('x')) / 100;

    console.log(addSvgX)


    $('<li class="box_thumbnail selected" data-item="'+itemClass+'">'+thumbnailSvg+'</li>').appendTo('.container_items_thumbnail');

    $(this).addClass('active selected');
    $('.btn_trash').removeAttr('hidden');
  }
  else{
    $(this).add('.box_thumbnail[data-item='+itemClass+']').addClass('selected');
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
    $('[data-item='+dragClass+'] .delete_cross').addClass('hidden');
    hiddenTrash();
  }
})

// Zone de drop - intérieur du badge
$('.container_badge').droppable({
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
  $('.delete_cross:not(.hidden)').addClass('hidden');
  hiddenTrash();
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
  $('.delete_cross').addClass('hidden');
  $('.box_item[data-item='+itemClass+']').children('.delete_cross').removeClass('hidden');
  highLighter($(this));
});

// Click sur la poubelle pour jeter les éléments sélectionnés
$('.btn_trash, .delete_cross').on('click', function(event){
  event.stopPropagation();
  var dataItem = $('.box_thumbnail.selected').attr("data-item");
  $('.box_item.selected').removeClass('active selected');
  $('.box_thumbnail.selected').remove();
  $('.delete_cross:not(.hidden)').addClass('hidden');

  $(".drag").each(function(){
    if($(this).data('item') == dataItem) {
      $(this).remove();
    }
  })
  
  hiddenTrash();
});


/**** FUNCTIONS ****/

// Mettre en avant l'item manipulable
function highLighter(item){
  var itemClass = item.attr('data-item');
}

// Disparition de la poubelle quand il n'y a plus d'éléments
function hiddenTrash(){
  if($('.box_thumbnail').length == 0){
    $('.btn_trash').attr('hidden', true);
  }
}