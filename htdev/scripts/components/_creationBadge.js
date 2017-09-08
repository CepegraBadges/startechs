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
    var cloneSvg = $(this).children('svg').clone();
    // Récupération des datas
    var svgWidth = cloneSvg.attr('data-width');
    var svgX = cloneSvg.attr('data-x');
    var svgY = cloneSvg.attr('data-y');

    cloneSvg = cloneSvg.data("item", itemClass);

    // Svg du thumbnail
    var thumbnailSvg = $('<div>').append($(cloneSvg)).html();

    // Ajouter la classe drag + les attributs au Svg du badge
    var badgeSvg = cloneSvg.addClass('drag '+itemClass+'');
    badgeSvg = badgeSvg.attr('width', svgWidth);
    badgeSvg = badgeSvg.attr('x', svgX);
    badgeSvg = badgeSvg.attr('y', svgY);
    badgeSvg = badgeSvg.attr('fill', $('.drag-zone_logo-badge').css('fill'))
    badgeSvg = badgeSvg.draggable().on('drag', function(event, ui){
      // update coordinates manually, since top/left style props don't work on SVG
      event.target.setAttribute('x', ui.position.left - addSvg.data('osX') +  parseFloat(svgX));
      event.target.setAttribute('y', ui.position.top - addSvg.data('osY') + parseFloat(svgY));
    });

    // Si il y a déjà un élément devant la light, on le met derrière
    if($('.light-badge').next('.drag').length > 0){
      $('.light-badge').next('.drag').attr('stroke-width', '0px');
      $('.light-badge').next('.drag').insertBefore('.light-badge');
    }

    // On insert le nouvel élément après la light
    var addSvg = badgeSvg.insertAfter('.light-badge');

    addSvg.data('osX', addSvg.offset().left);
    addSvg.data('osY', addSvg.offset().top);
    addSvgX = 315 * parseFloat(addSvg.attr('x')) / 100;


    $('<li class="box_thumbnail selected" data-item="'+itemClass+'">'+thumbnailSvg+'</li>').appendTo('.container_items_thumbnail');

    $(this).addClass('active selected');
    $('.btn_trash').removeAttr('hidden');
  }
  else{
    $(this).add('.box_thumbnail[data-item='+itemClass+']').addClass('selected');
    highLighter(itemClass);
  }
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
    $('.box_thumbnail[data-item='+dragClass+']').remove();

    hiddenTrash();
    autoSelect();
  }
})

// Zone de drop - intérieur du badge
$('.badge-svg').droppable({
  accept: ".drag",
  greedy: true
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

  highLighter(itemClass);
});

// Click sur la POUBELLE + CROIX pour jeter les éléments sélectionnés
$('.btn_trash, .delete_cross').on('click', function(event){
  event.stopPropagation(dataItem);
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
  autoSelect();
});


/**** FUNCTIONS ****/

// Mettre en avant l'item manipulable
function highLighter(itemClass){
  $('.light-badge').next('.drag').insertBefore('.light-badge');
  $('.drag.'+itemClass+'').insertAfter('.light-badge');
}

// Disparition de la poubelle quand il n'y a plus d'éléments
function hiddenTrash(){
  if($('.box_thumbnail').length == 0){
    $('.btn_trash').attr('hidden', true);
  }
}

// Auto séléction 
function autoSelect(){
  if($('.container_items_thumbnail').find('li').length > 0){
    var lastLi = $('.box_thumbnail').last();
    var lastLiData = lastLi.attr('data-item');
    var theBox = $('.box_item[data-item='+lastLiData+']');
    theBox.addClass('selected');
    theBox.find('.delete_cross').removeClass('hidden');

    lastLi.addClass('selected');
    highLighter(lastLiData);
  }
}