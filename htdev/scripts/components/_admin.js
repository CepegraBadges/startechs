$(function() {
        var myButton = document.querySelector('#admin_login'); 

	myButton.onclick = function (event){ 
		event.preventDefault(); 

		myLogField = document.querySelector('#admin_pseudo'); 
		myLog = myLogField.value; 
        myPassField = document.querySelector('#admin_pass');
        myPass = myPassField.value;

		if (myLog == 'Admin' && myPass == 'pass'){

            $('.finger-scroll, .admin_connexion > input, button, a').css("display", "none");
            $('.title_admin:after').css("display", "block");
            $(".title_admin").html('Paramètres'); // changement h2
            $('#admin_switch').css("display", "flex"); // apparition ON/OFF print
            $('#admin_delog').css("display", "block");// apparitiontitre + button

            
		}
		else if (myLog != 'Admin' && myPass == 'pass'){
			alert("Attention! L'identifiant est incorrect")
		}
        else if (myLog == 'Admin' && myPass != 'pass'){
			alert("Attention! Le mot de passe est incorrect")
		}
        else if (myLog == '' && myPass == ''){
			alert("Attention! Veuillez renseigner tous les chants")
		}
		else{
			alert("Attention! L'identifiant ou le mot de passe est incorrect")
		}
	};

    // Apparition input drive
    $(".input_drive").hide();
    $("#switch-shadow").click(function(){
        $(".input_drive").toggle();
        if( $("#switch-shadow").is(':checked') ){
            $("#switch-shadow").change($(".etat").html('activé'));}
        else{ $("#switch-shadow").change($(".etat").html('désactivé'));}
    });

});