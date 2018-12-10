// var allQuestions =$('.form-group').size();
// var allQuestions =[{ QUESTION:".que1",choices:["HTML","CSS","JS"],correctAnswer:1};
//   {QUESTION:".que2",choices:["#gitpush","#gitcommit","#gitremoteadd"],correctAnswer:2};
//   {QUESTION:".que3",choices:["#else","#for","#var"],correctAnswer:1};
//   {QUESTION:".que4",choices:["#yr1","#yr2","#yr3"],correctAnswer:2};
//   {QUESTION:".que5",choices:["#yep","#nay"],correctAnswer:2}];
//   var currentQuestion =0;
//   $questions =$(".form-group");
//   $questions.hide();
//   $(questions.get(currentQuestion)).fadeIn();
//   $("#fnext").click(function(){
//
//     $($questions.get(currentQuestion)).fadeOut(function(){
//       currentQuestion=currentQuestion +1;
//     }
//   }
//   function fnext{
//
//   }
//   function snext{
//
//   }
//   function tnext{
//
//   }
//   function rnext{
//
//   }
//   function submit{
//
//   }

  $(document).ready(function(){
      $(".form-group2,.form-group3,.form-group4,.form-group5").hide();

      var answer1 = $("input:radio[name=question1];").val();

      if(answer1 == "CSS"){
        $(".form-group2").show();
        console.log("Good Work!")
      }
      else{
        console.log("You have answered incorrectly.Try again")
      }


  });
