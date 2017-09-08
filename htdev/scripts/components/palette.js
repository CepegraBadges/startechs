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
    $("#cepegra").attr("data-fill", fill);
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