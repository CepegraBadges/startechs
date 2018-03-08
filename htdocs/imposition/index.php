<?php

// IMPOSITION FILE

require("config.php");

$sql = "SELECT * FROM badges WHERE printed = 'n' ORDER BY date DESC LIMIT 0,6";

if (isset($_GET['pseudo']) AND $_GET['pseudo'] != '' ) :
 $sql = sprintf("SELECT * FROM badges WHERE pseudo LIKE '%%%s%%'",$_GET['pseudo']);
endif;
if (isset($_GET['ID']) AND $_GET['ID'] != '' ) :
  $sql = sprintf("SELECT * FROM badges WHERE ID = %s", $_GET['ID']);
endif;
$myQuery = mysqli_query($bdd, $sql);
//print_r($myQuery);
$nb_badges = $myQuery->num_rows;
$listeBadges = array();
?>


<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link href="styles/styles.css" rel="stylesheet">
  <link href="imposition.css" rel="stylesheet">
  <style>
  
  </style>
</head>
<body>
<h1 class="principal">Imposition des badges</h1>
<?php if ( !isset($_GET['ID']) AND  !isset($_GET['pseudo'])) : ?>
<div id="history">
  <h2>Badges en attente</h2>
    <span class="badgeVignettes"></span>
    <button class="noWait">Ne pas attendre</button>
</div>
<?php endif;?>
<div id="tools">
<?php if ( (!isset($_GET['ID']) OR $_GET['ID'] == '') AND !isset($_GET['pseudo']) ) :?>
 <details>
  <summary>Retrouver un badge ?</summary>
<form action="" id="search" method="get">
  <label for="pseudo">Pseudo : </label>
  <input type="text" id="pseudo" name="pseudo" required>
  <button><img src="styles/images/thunder.svg" height="15px"></button>
</form>
</details>
<?php elseif ( !isset($_GET['pseudo']) ) :?>
  <div id="btn">
   <button id="nombre">Dupliquer le badge</button> &nbsp;<a href="index.php"><img src="styles/images/reset.svg" height="15px"></a>
   </div>
  <?php endif;?>
  <?php if ( !isset($_GET['pseudo'])) : ?>
  <button id="print"><img src="styles/images/printer.svg"></button>
<?php else : ?>
  <p>Cliquez sur le badge de votre choix  &nbsp;<a href="index.php"><img src="styles/images/reset.svg" height="15px"></a></p>
<?php endif;?>
</div>
<main>
<?php if ($nb_badges > 0) :?>
    <?php $i= 1 ; while( $row = mysqli_fetch_object($myQuery) ) : $listeBadges[] = $row->ID;?>
    <div class="badge__finished  badge_<?php echo $i;?>" data-id="<?php echo $row->ID;?>">
    <div class="content">
      <?php if ( isset( $_GET['pseudo'] ) ) : ?>
        <a href="index.php?ID=<?php echo $row->ID;?>">
          <?php echo $row->svg;?>
        </a>
     <?php else : echo $row->svg; endif;?>
   </div>
   </div>
<!-- NEW BADGE -->
 <?php endwhile;?>
<?php else : echo '<p>Pas de badges à imprimer</p>'; endif;?>
<div class="team"></div>
</main>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>  
<script src="imposition.js"></script>
<script>
        /*allSvg = document.querySelectorAll(".badge__finished");
        for(item of allSvg) {
         mySvg =  item.querySelector('.badge-svg');
         item.querySelector("style").remove();

        myColor = item.querySelector(".badge__finished circle").getAttribute("fill");
        //alert(myColor);
        //console.log(mySvg);
        mySvg.style.backgroundColor = myColor;
        }

        myRange = document.querySelector("#nombre");
        myRange.onclick = function() {
          
          let mySVG_clone = document.querySelector(".badge__finished").cloneNode(true);
          
            document.querySelector(".team").after(mySVG_clone);
        }
        document.querySelector("#print").onclick = function() {
          print();
        }*/
         <?php if( isset($_GET['pseudo']) OR isset($_GET['ID'])  OR isset($_GET['nowait']) ) : ?>
            impose();
         <?php endif;?>
</script>

</body>
</html>