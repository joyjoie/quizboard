$(document).ready(function() {
  $(".form-group2,.form-group3,.form-group4,.form-group5").hide();
  var score = 0;
  var answer1 = $("input:radio[name=question1]").val();
    $("#fnext").click(function() {

    if (answer1 == "CSS") {
      score =+2
      $(".form-group2").show();
      $('#spanid').html('&#10004;');
      //  console.log("Good Work!");
      $(".form-group2").show();
    } else {
      $(".form-group2").show();
    }
  })
  var answer2 = $("input:radio[name=question2]").val();
    $("#snext").click(function() {

    if (answer2 == "CSS") {
      score =+2
      $(".form-group3").show();
      $('#spanid').html('&#10004;');
      //  console.log("Good Work!");
      $(".form-group3").show();
    } else {
      $(".form-group3").show();
    }
  })
  var answer3 = $("input:radio[name=question3]").val();
    $("#tnext").click(function() {

    if (answer3 == "CSS") {
      score =+2
      $(".form-group4").show();
      $('#spanid').html('&#10004;');
      //  console.log("Good Work!");
      $(".form-group4").show();
    } else {
      $(".form-group4").show();
    }
  })

  var answer4 = $("input:radio[name=question4]").val();
  $("#rnext").click(function() {
    if (answer4 == "2020") {
      score =+2
      $(".form-group5").show();
      $('#spanid').html('&#10004;');
      $(".form-group5").show();
      // console.log("You're doing good proceed");
    } else {
      $(".form-group5").show();
      //   console.log("Error.Try again")
    }
  })
  var answer5 = $("input:radio[name=question5]").val();
  $("#sub").click(function() {
    if (answer5 == "Yes") {
      score =+2

      $('#spanid').html('&#10004;');
      $(".form-group5").show();
      //console.log("You're done with all your questions");

    } else {
      $(".form-group5").show();
      //  console.log("finish the last question")
    }
  })

});
