function vignettes () {
	//alert("calcul");
	$.ajax({
		url: "fonctions.php?action=history"
	})
	.done(function(datas){
		if (datas != '') {
		newBadges = JSON.parse(datas);
		$("#history").show();
		let texte="";
		let i=0;
		for (item of newBadges) {
			texte += '<img src="../badges/'+item.png+'.png" title="'+item.pseudo+'">';
			i++;
		}
		$("#history span").html(texte);
		if (i == 6) {
			window.clearInterval(intervalID);
			$("#history").hide();
			impose(newBadges);
		}
		}//if
	}) ;
}

function impose(newBadges) {

		$("main").css("display","flex");
		formatage();
}

function formatage() {
	 allSvg = document.querySelectorAll(".badge__finished");
        for(item of allSvg) {
         mySvg =  item.querySelector('.content');
        //item.querySelector("style").remove();

        myColor = item.querySelector(".badge__finished circle").getAttribute("fill");
        //alert(myColor);
        //console.log(mySvg);
        mySvg.style.backgroundColor = myColor;
        }

        myRange = document.querySelector("#nombre");
        if(myRange) {
	        myRange.onclick = function() {
	          
	          let mySVG_clone = document.querySelector(".badge__finished").cloneNode(true);
	          
	            document.querySelector(".team").after(mySVG_clone);
	        }
    	}
        
}

// EVENTS
intervalID = window.setInterval(vignettes,1000);

$(".noWait").on("click", function() {
	document.location.href='index.php?nowait';
	//alert("nowait");
	//impose();
});

$("#print").on("click", function() {
	//$("#confirm").show(1000);
	//$(this).hide();
	$("#history").hide();
	print();
	if (confirm("Imprimé ?")) {
		list_badges = new Array();
	
	$(".badge__finished").each(function(){
		list_badges.push($(this).attr("data-id"));
	});
	console.log(list_badges);
	$.ajax({
		url: "fonctions.php?action=printed",
		data: {ids : list_badges.join()},
		type: "GET"
	})
	.done(function(){
		document.location.href='index.php';
	}) ;
	} else {$("#history").show();}
})