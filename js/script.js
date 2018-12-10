$(document).ready(function() {
  $(".form-group2,.form-group3,.form-group4,.form-group5").hide();

  var answer1 = $("input:radio[name=question1]").val();

  $("#fnext").click(function() {

    if (answer1 == "CSS") {
      $(".form-group2").show();
      $('#spanid').html('&#10004;');
      //  console.log("Good Work!");
      $(".form-group2").show();
    } else {
      $(".form-group2").show();
    }
  })
  var answer2 = $("input:radio[name=question2]").val();
  $("#snext").click(function(){
  if (answer2 == "Git remote add") {
    $(".form-group3").show();
    $('#spanid').html('&#10004;');
    $(".form-group3").show();
    // console.log("You're doing good proceed");
  } else {
    $(".form-group3").show();
    //   console.log("Error.Try again")
  }
})
var answer3 = $("input:radio[name=question3]").val();
$("#tnext").click(function(){
if (answer3 == "For") {
  $(".form-group4").show();
  $('#spanid').html('&#10004;');
  $(".form-group4").show();
  // console.log("You're doing good proceed");
} else {
  $(".form-group4").show();
  //   console.log("Error.Try again")
}
})

var answer4 = $("input:radio[name=question4]").val();
$("#tnext").click(function(){
if (answer4 == "2020") {
  $(".form-group5").show();
  $('#spanid').html('&#10004;');
  $(".form-group5").show();
  // console.log("You're doing good proceed");
} else {
  $(".form-group5").show();
  //   console.log("Error.Try again")
}
})
  var answer5 = ("input:[name=question5]").val();
    $("#sub").click(function(){
  if (answer5 == "Yes") {
    $(".form-group5").show();
    $('#spanid').html('&#10004;');
    $(".form-group5").show();
    //console.log("You're done with all your questions");

  } else {
    $(".form-group5").show();
    //  console.log("finish the last question")
  }
})
});
