$(function() {
  $("#swipe").dragend({
    afterInitialize: function() {
      this.container.style.visibility = "visible";
    }
  })


  myInput = document.querySelector(".input_login");
  myInput.addEventListener("keyup", function() {
    this.size = this.value.length;
    //alert(this.value.length);
  });
});