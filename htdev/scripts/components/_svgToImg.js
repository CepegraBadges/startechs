/* SVG TO IMAGE */
// Click sur le bouton valider
$('.btn_validate').on('click', function(e){
  e.preventDefault();

  // Couleur du fond + couleur outline
  var bcgColor = $('#bcgGrad').css('fill');
  $("#bcgGrad").attr('fill', bcgColor);
  var outlineColor = $('.drag-zone_logo-badge').css('fill');
  $('.drag-zone_logo-badge').attr('fill', outlineColor);

/* SVG DANS LE LOCALSTORAGE POUR IMPRESSION */
  // Replacer l'élément mis en avant derrière la light
  $('.light-badge').next('.drag').insertBefore('.light-badge');
  // Selectionner le svg conteneur
  var svgDiv = $(".badge-svg");
  var svg = svgDiv[0].outerHTML;

  localStorage.setItem('myBadge', JSON.stringify(svg));

/* SVG TO IMAGE POUR LE SHARE */
  // Supprimer la light
  $('linearGradient, .light-badge').remove();

  //Supprimer le textPath
  $('#myPath').remove();

  svg = svgDiv[0].outerHTML;

  // Selectionner le canvas caché
  var canvas = document.getElementById('hiddenCanvas');

  // Utilisation de canvg
  canvg(canvas, svg)

  // Conversion de l'image en data...
  var theImage = canvas.toDataURL('image/png');

  // REQUETE AJAX
  $.ajax({
    type: 'POST',
    url: "svgToImg.php",
    data: {
      'dataUrl': theImage,
    },
    success: function(data){
      location.href='print_and_share.html';
    }
  })
});