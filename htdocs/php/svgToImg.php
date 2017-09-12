<?php

  if(isset($_POST['dataUrl'])) {
    $image = $_POST['dataUrl'];

    $decoded = base64_decode(substr($image,22));

    $fileName = date("Y-m-d_H-i-s");

    date_default_timezone_set("Europe/Brussels");
    file_put_contents('../badges/'.$fileName.'.png', $decoded);

    echo $fileName;
  }
  
?>