function resizable_pseudo(e,n){function i(){e.style.width=(e.value.length+11)*r+"px"}var r=Number(n)||7.7,t="keyup,keypress,focus,blur,change".split(",");for(var u in t)e.addEventListener(t[u],i,!1);i()}function resizable_email(e,n){function i(){e.style.width=(e.value.length+15)*r+"px"}var r=Number(n)||7.7,t="keyup,keypress,focus,blur,change".split(",");for(var u in t)e.addEventListener(t[u],i,!1);i()}resizable_pseudo(document.querySelector(".input_login"),9),resizable_email(document.querySelector("#input_login_email"),12);