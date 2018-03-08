<?php
  //last badge made
  $badges = scandir('../badges', SCANDIR_SORT_DESCENDING);
  $newest_badge = $badges[0];

  //user posted variables
  $pseudo = $_POST['pseudo'];
  $to = $_POST['email'];
  $fileName = $_POST['fileName'];
  
  $subject = "Votre super badge du Cepegra !";
  $message = '
  <html>
    <body>
      <p>Merci <strong>'.$pseudo.'</strong> de nous avoir rendu visite! Voilà le magnifique badge que tu as créé :</p>
      <img src="http://cepegra.be/badges/badges/'.$fileName.'.png" alt="Votre badge Cepegra">
      <p>Pour continuer à nous suivre, rejoins-nous sur <a href="https://formation-cepegra.be/">www.formation-cepegra.be</a></p>
    </body>
  </html>
  ';

  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
  $headers .= 'From: Cepegra <info@cepegra.be>' . "\r\n";

  mail($to , $subject , $message, $headers);
echo $pseudo;
echo $to;
echo $fileName;
?>