$(function() {
  $(".btn").click(function() {
    var heightInput = $("#height").val();
    var conversion = parseInt(heightInput);

    $("#myModal").addClass("#hide");

    if (conversion < 48) {
      alert("You're too short. Sorry.");
    } else if (heightInput > 72) {
      alert("You're too tall. Sorry.");
    } else {
      $("#rides").show();
    }


  });
});
