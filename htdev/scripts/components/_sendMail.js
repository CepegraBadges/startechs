/* SEND EMAIL */
$(".btn_mail").on('click', function(e){
  e.preventDefault();

  // REQUETE AJAX
   $.ajax({
    type: 'POST',
    url: "../php/sendMail.php",
    data: {
      'pseudo': localStorage.getItem('pseudo'),
      'email': localStorage.getItem('email')
    },
    success: function(data){
      console.log("Mail envoyé");
    }
  })
})
