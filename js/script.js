
  $(document).ready(function){
      $(".form-group2,.form-group3,.form-group4,.form-group5").hide();

      var answer1 = $("input:radio[name=question1]").val();
        $("#fnext").click(function(){
      if(answer1 == "CSS"){
        $(".form-group2").show();
        $('#spanid').html('&#10004;');
        console.log("Good Work!");
      }
      else{
        console.log("You have answered incorrectly.Try again")
      }
    }
  });
      $(document).ready(function){
        $("#snext").click(function){
      var answer2 =$("input:radio[name=question2]").val();
        if(answer2 == "Git remote add"){
          $(".form-group3").show();
          $('#spanid').html('&#10004;');
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };
      }
    });
      $(document).ready(function(){
        $("#tnext").click(function(){
        var answer3 =("input:[name=question3]").val();
        if(answer3 == "For"){
          $(".form-group3").show();
          $('#spanid').html('&#10004;');
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };
      }
    });
    $(document).ready(function(){
      $("rnext").click(function(){
        var answer4 =("input:[name=question4]").val();
        if(answer4 == "2020"){
          $(".form-group4").show();
          $('#spanid').html('&#10004;');
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        }
      }
    });
      $(document).ready(function){
        $("#submit").click(function(){
        var answer5 =("input:[name=question5]").val();
        if(answer5 == "Yes"){
          $(".form-group3").show();
          $('#spanid').html('&#10004;');
          console.log("You're done with all your questions");
          var total=
        }
        else{
          console.log("finish the last question")
        };
      }
  });
