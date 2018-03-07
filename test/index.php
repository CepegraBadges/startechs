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
  <style>
  main {
    display: none;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .badge__finished {
    margin-right: 15px;
    margin-top: 15px;
  }
   linearGradient {
    display:none;
  }
   @font-face {
                    font-family: 'Canaro';
                    src: url('styles/vendor/webfonts/canaro/Canaro-Medium.eot');
                    src: url('styles/vendor/webfonts/canaro/Canaro-Medium.eot?#iefix') format('embedded-opentype'),
                    url('styles/vendor/webfonts/canaro/Canaro-Medium.woff') format('woff'),
                    url('styles/vendor/webfonts/canaro/Canaro-Medium.ttf') format('truetype');
                    font-weight: 500;
                    font-style: normal;
                  }

    .sharePseudoText,
    #text-badge {
        font-family: 'Canaro', Arial;
    
                  }

#history {
  background-color: silver;
  display: none;
}
#confirm {
  display:none;
}
#history, #history span, form, #btn {
  padding: 1em;
}
#history span {
  display: flex;
}
#history img {
  width: 100px;
  height: 100px;
  margin-right: 15px;
}
main a {
  opacity: 0.5;
}
main a:hover {
  opacity: 1;
}
#print {
  position: absolute;
  right:5em;
  bottom:5em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  text-align: center;
}
@media print {
   #tools, #history, .principal {display:none;}
  }
  </style>
</head>
<body>
<h1 class="principal">Imposition des badges</h1>
<?php if ( !isset($_GET['ID']) ) : ?>
<div id="history">
  <h2>Badges en attente</h2>
    <span class="badgeVignettes"></span>
    <button class="noWait">Ne pas attendre</button>
</div>
<?php endif;?>
<div id="tools">
<?php if (!isset($_GET['ID']) OR $_GET['ID'] == '' ) :?>
  <h2>Retrouver un badge</h2>
<form action="" id="search" method="get">
  <label for="pseudo">Pseudo : </label>
  <input type="text" id="pseudo" name="pseudo" required>
  <button>Go</button>
</form>
<?php else :?>
  <div id="btn">
   <button id="nombre">Dupliquer le badge</button> <a href="index.php">Annuler</a>
   </div>
  <?php endif;?>
  <button id="print">Print</button>
</div>
<main>
<?php if ($nb_badges > 0) :?>
    <?php $i= 1 ; while( $row = mysqli_fetch_object($myQuery) ) : $listeBadges[] = $row->ID;?>
    <div class="badge__finished  badge_<?php echo $i;?>" data-id="<?php echo $row->ID;?>">
    <?php if ( isset( $_GET['pseudo'] ) ) : ?>
      <a href="index.php?ID=<?php echo $row->ID;?>">
      <?php echo $row->svg;?>
      </a>
    <?php else : echo $row->svg; endif;?>
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
         <?php if( isset($_GET['pseudo']) OR isset($_GET['ID']) ) : ?>
            impose();
         <?php endif;?>
</script>

</body>
</html>