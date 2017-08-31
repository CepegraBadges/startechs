    myInput = document.querySelector(".input_login");
myInput.onkeyup = function() {
  this.size = this.value.length;
  //alert(this.value.length);
}