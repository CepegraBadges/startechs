<?php

  if(isset($_POST['dataUrl'])) {
    $image = $_POST['dataUrl'];

    $decoded = base64_decode(substr($image,22));

    file_put_contents('../../badge.png', $decoded);
  }

?>