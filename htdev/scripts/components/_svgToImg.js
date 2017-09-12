/* SVG TO IMAGE */
// Click sur le bouton valider
$('.btn_validate').on('click', function(e){
  e.preventDefault();

  // Couleur du fond + couleur outline
  var bcgColor = $('#bcgGrad').css('fill');
  $("#bcgGrad").attr('fill', bcgColor);
  var outlineColor = $('.drag-zone_logo-badge').css('fill');
  $('.drag-zone_logo-badge, .drag').attr('fill', outlineColor);


/* SVG DANS LE LOCALSTORAGE POUR IMPRESSION */
  // Replacer l'élément mis en avant derrière la light
  $('.light-badge').next('.drag').insertBefore('.light-badge');
  // Selectionner le svg conteneur
  var svgDiv = $(".badge-svg").clone();
  var svg = svgDiv[0].outerHTML;

  localStorage.setItem('myBadge', JSON.stringify(svg));

/* SVG TO IMAGE POUR LE SHARE */
  // Supprimer la light
  svgDiv.find('linearGradient, .light-badge').remove();

  //Récupérer le texte du pseudo
  var myPseudo = $('#myPath').text()

  //Supprimer le textPath + Cepegra
  svgDiv.find('#myPath, #cepegra').remove();

  //Afficher le text pseudo caché
  svgDiv.find('.sharePseudoText').text(myPseudo).attr('fill', outlineColor).removeAttr('hidden');
  svgDiv.find('.hiddenCepegra').removeAttr('hidden');
  svgDiv.find(".circle-txt").attr('fill', outlineColor);

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
    url: "../php/svgToImg.php",
    data: {
      'dataUrl': theImage,
    },
    success: function(data){
      localStorage.setItem('fileName', data);
      location.href='print_and_share.html';
    }
  })
});
