var myPseudoInput = $(".input_name-badge");
var myTxtCircle = $("#myPath");

// Mettre le pseudo sur page création
if (localStorage.getItem("pseudo").length > 0){
    myPseudoInput.val("#"+localStorage.getItem("pseudo"));
    myTxtCircle.text(myPseudoInput.val());
}

// TEXT BAGDE
myPseudoInput.on('keyup', function() {
    myTxtCircle.text($(this).val());
})
myPseudoInput.prop('maxLength', 20);