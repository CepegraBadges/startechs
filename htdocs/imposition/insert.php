<?php
require("config.php");
$sql = sprintf("INSERT INTO badges SET pseudo = '%s', email = '%s', svg = '%s', png = '%s'",
	addslashes($_POST['pseudo']),
	$_POST['email'],
	addslashes($_POST['svg']),
	$_POST['png']
	);
$bdd->query($sql);
echo $bdd->error;
?>