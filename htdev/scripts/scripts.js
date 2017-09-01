$(function() {
 /* PREVENT SCROLL ON TABLET */
 document.ontouchmove = function(event){
     event.preventDefault();
 };

 /* SWIPE ADMIN */
 $("#swipe").dragend({
   afterInitialize: function() {
     this.container.style.visibility = "visible";
   }
 })

 /* ANIM INPUT PSEUDO + MAIL */
 myInput = document.querySelectorAll(".input_login");
 for (element of myInput) {
   element.addEventListener("keyup", function() {
     this.size = this.value.length;
     //alert(this.value.length);
   });
 }

  $( ".section-right" ).tabs();
  
  $('.link_container_tab').on('click', function(){
    $('.link_container_tab').removeClass('active');
    $(this).addClass('active');
  })

  $('.box_item').on('click', function(){
    $(this).addClass('selected');
  })

});


