$(function() {
        var myButton =$('#admin_login'); 
        // console.log(myButton);
	myButton.on('click', function (event){ 
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
	});


    // Apparition input drive
    $(".input_drive").hide();
    $("#switch-shadow").on('click', function(){
        $(".input_drive").toggle();
        if( $("#switch-shadow").is(':checked') ){
            $(".etat").html('activé'); // changement de txt
            $('.container_print, .li_pop_1').css("visible", "visible");
        }else{ 
            $(".etat").html('désactivé');
             $('.container_print, .li_pop_1').css("visible", "hidden");
        }
    });

// EMAIL verfication
$("#email").focusout(function() {
    var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if(!myRegex.test(this.value)){
                $('.btn_start').addClass("active");
                console.log('bad')
                return false;
              }
              else{
                $('.btn_start').removeClass("active");
                console.log('bon')
                return true;
              }
            });

});

// function save() {	
// 	var checkbox = document.getElementById("#switch-shadow");
//     localStorage.setItem("print", checkbox.checked);	
// }

// //for loading
// var checked = JSON.parse(localStorage.getItem("#switch-shadow"));
//     document.getElementById("#switch-shadow").checked = checked;

//     save();



