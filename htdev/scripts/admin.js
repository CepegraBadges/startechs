$(function() {
    // Vérification du localstorage print au chargement de la page
    if(localStorage.getItem('print') !== null){
        var print = localStorage.getItem('print');

        if(print == "true"){
            $('.switch--shadow').prop( "checked", true);
            $(".input_drive").toggle();
            $(".etat").html('activé');
        }
    }

    // Apparition/disparition du champ google drive + "activé/désactivé"
    $('.switch--shadow').on('change', function(){
        $(".input_drive").toggle();
        if($(this).prop('checked')==false){
            $(".etat").html('désactivé');
            localStorage.setItem('print', false);
        }
        else {
            $(".etat").html('activé');
            localStorage.setItem('print', true);
        }
    })

    // Connexion à la partie admin
    var myButton = $('#admin_login');
	myButton.on('click', function (event){
		event.preventDefault();

		myLogField = document.querySelector('#admin_pseudo');
		myLog = myLogField.value;
        myPassField = document.querySelector('#admin_pass');
        myPass = myPassField.value;
        forgot = document.querySelector('.mdp_oublie');
		if (myLog == 'Admin' && myPass == 'pass'){

            $('.print_infos, .finger-scroll, .admin_connexion > input, button, a').css("display", "none");
            $('.title_admin:after').css("display", "block");
            $(".title_admin").html('Paramètres'); // changement h2
            $('#admin_switch').css("display", "flex"); // apparition ON/OFF print
            $('#admin_delog').css("display", "block");// apparitiontitre + button
            $('.container_admin ').addClass('bop-admin');

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
    });


 // INPUT DANS "VOTRE PRENOM"
    // myButton = document.querySelector(".btn_start");
    var myLog = document.querySelector("#pseudo");
    var myEmail = document.querySelector("#mail");
    myFinish = document.querySelector(".btn_finish");


    // Stocker le pseudo + mail
    $(myButton).on('click',function(event){
        alert('test');
        window.localStorage.setItem("pseudo", myLog.value);
        window.localStorage.setItem("email", myEmail.value);
    });




    $(myFinish).on('click', function(event){
        event.preventDefault();
        window.localStorage.removeItem("pseudo");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("myBadge");
    });



    // EMAIL verfication
    $("#mail").keyup(function() {

        var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

        if(!myRegex.test(this.value)){
            $('.btn_start').addClass("active_go");
            return false;
        }
        else{
            $('.btn_start').removeClass("active_go");
                // Stocker le pseudo + mail
                $(".btn_start").on('click',function(event){
                    event.preventDefault();
                    window.localStorage.setItem("pseudo", myLog.value);
                    window.localStorage.setItem("email", myEmail.value);
                    window.location='pages/badge_creation.html';
                });
            return true;

        }
    });

});
