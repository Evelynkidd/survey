//Business logic


//Front-end logic

$(document).ready(function() {
  $("#survey").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput = $("#favoritefood").val();
    var colorInput = $("input:radio[name=red]:checked").val();

    $("#display").text(nameInput);
    $("#display1").text(foodInput);
    $("#display2").text(colorInput);

    $("#display").show();

    event.preventDefault();
  });
});
