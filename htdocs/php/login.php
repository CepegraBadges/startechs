<?php 


##Configuration pour aller chercher les informations via la DB du localhost

define("DB_HOST","mysql.hostinger.fr");
define("DB_NAME","u118090707_badge");
define("DB_USER","u118090707_badge");
define("DB_PASSWORD","ingrwf05");

$connect = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if($connect -> error) :
    echo "erreur de connexion :" .$connect -> error;
    exit;
    else : $connect -> set_charset("utf-8");
    endif;

/*DEBUG*/
$_POST['pseudo'] = "#cepegra";
$_POST['email'] = "test@cepegra.be";

$pseudo = $_POST['pseudo'];
$email = $_POST['email'];

echo $sql = sprintf("INSERT INTO users SET pseudo='%s', email='%s'",
    $pseudo,
    $email);
$myInsert = $connect->query($sql);
echo $connect->error;
$last_id = $connect->insert_id;
echo $last_id;
?>