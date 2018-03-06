<?php

// IMPOSITION FILE

require("config.php");

$sql = "SELECT * FROM badges WHERE printed = 'n' ORDER BY date DESC LIMIT 0,6";
if (isset($_POST['pseudo']) AND $_POST['pseudo'] != '' ) :
  $sql = sprintf("SELECT * FROM badges WHERE pseudo LIKE '%%%s%%'",$_POST['pseudo']);
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
    display: flex;
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
    @media print {
   #tools {display:none;}
  }
  </style>
</head>
<body>
<div id="tools">
<?php if (!isset($_GET['ID']) OR $_GET['ID'] == '' ) :?>
<form action="" id="search" method="post">
  <label for="pseudo">Pseudo : </label>
  <input type="text" id="pseudo" name="pseudo" required>
  <button>Go</button>
</form>
<?php else :?>
   <button id="nombre">Ajouter un badge</button> <a href="index.php">Return</a>
  <?php endif;?>
  <button id="print">Print</button>
</div>
<main>
<?php if ($nb_badges > 0) :?>
    <?php $i= 1 ; while( $row = mysqli_fetch_object($myQuery) ) : $listeBadges[] = $row->ID;?>
    <div class="badge__finished  badge_<?php echo $i;?>">
    <?php if ( isset( $_POST['pseudo'] ) ) : ?>
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
<script>
        allSvg = document.querySelectorAll(".badge__finished");
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
        }
</script>
<?php $sql = sprintf("UPDATE badges SET printed = 'o' WHERE ID IN (%s)", implode(",",$listeBadges));
$bdd->query($sql);
?>
</body>
</html>