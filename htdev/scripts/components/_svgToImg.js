/* SVG TO IMAGE */
// Click sur le bouton valider
$('.btn_validate').on('click', function(e){
  e.preventDefault();
  var xml = $.parseXML($(".badge-svg")[0].outerHTML)
  var s = new XMLSerializer().serializeToString(xml)
  var encodedData = window.btoa(s);
  var data = "data:image/svg+xml;base64,"+encodedData;
  console.log("data:image/png;base64,"+encodedData)

  // Supprimer la light
  $('linearGradient, .light-badge').remove();

  // Couleur du fond + couleur outline
  var bcgColor = $('#bcgGrad').css('fill');
  $("#bcgGrad").attr('fill', bcgColor);
  var outlineColor = $('.drag-zone_logo-badge').css('fill');
  $('.drag-zone_logo-badge').attr('fill', outlineColor);

  // Selectionner le svg conteneur
  var svgDiv = $(".badge-svg");
  var svg = svgDiv[0].outerHTML;

  // Selectionner le canvas caché
  var canvas = document.getElementById('hiddenCanvas');

  // Utilisation de canvg
  canvg(canvas, svg)

  // Conversion de l'image en data...
  var theImage = canvas.toDataURL('image/png');

  $('#testImg').attr('src', data);

  //'data:image/svg+xml;base64,'+encodedData

  // REQUETE AJAX
  /*
  $.ajax({
    type: 'POST',
    url: "script.php",
    data: {
      'dataUrl': theImage,
    },
    success: function(data){
      location.href='print_and_share.html';
    }
  })
  */
});