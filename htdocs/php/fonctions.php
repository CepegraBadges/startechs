<?php 
require("config.php");
	if ( isset($_GET['action']) ) : 
	switch ($_GET['action']) :
		case "history" : 
			$sql = "SELECT * FROM badges WHERE printed = 'n' ORDER BY date DESC LIMIT 0,6";
			break;
		case "search" :
			if (isset($_POST['pseudo']) AND $_POST['pseudo'] != '' ) :
  				$sql = sprintf("SELECT * FROM badges WHERE pseudo LIKE '%%%s%%'",$_POST['pseudo']);
			endif;
			if (isset($_GET['ID']) AND $_GET['ID'] != '' ) :
  				$sql = sprintf("SELECT * FROM badges WHERE ID = %s", $_GET['ID']);
			endif;
			break;
			endswitch;
	$myQuery = mysqli_query($bdd, $sql);
	$nb_badges = $myQuery->num_rows;
	$listeBadges = array();
	if ($nb_badges > 0) :
    	while( $row = mysqli_fetch_object($myQuery) ) : 
    		$item = array(
    			"pseudo" => $row->pseudo,
    			"ID" => $row->ID,
    			"png" => $row->png,
    			"svg" => $row->svg
    			);
    		$listeBadges[] = $item; 
    	endwhile;
    	echo json_encode($listeBadges);
    	exit;
	endif;
	endif;
 ?>