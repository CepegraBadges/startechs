function vignettes () {
	alert("calcul");
	$.ajax({
		url: "fonctions.php?action=history"
	})
	.done(function(datas){
		newBadges = JSON.parse(datas);
		let texte="";
		let i=0;
		for (item of newBadges) {
			texte += '<img src="../badges/'+item.png+'.png" title="'+item.pseudo+'">';
			i++;
		}
		$("#history").html(texte);
		if (i == 6) {
			window.clearInterval(intervalID);
			impose(newBadges);
		}
	}) ;
}

function impose(newBadges) {
	alert('impose');
	let texte="";
		let i=0;
		for (item of newBadges) {

			texte += '<div class="badge__finished  badge_'+item.ID+'">';
			texte += item.svg;
			texte += '</div>';
			i++;
		}
		$("main").html(texte);
		formatage();
}

function formatage() {
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
          alert("printed");
        }
}

intervalID = window.setInterval(vignettes,1000);