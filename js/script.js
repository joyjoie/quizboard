function quizComp() {
  var qOne = document.getElementsByName('question1');
  var qTwo = document.getElementsByName('question2');
  var qThree = document.getElementsByName('question3');
  var qFour = document.getElementsByName('question4');
  var qFive = document.getElementsByName('question5');
  var score = 0;

  for (var i = 0, length = qOne.length; i < length; i++) {
    if (qOne[i].checked) {
      var ans1 = qOne[i].value
      if (qOne[i].value === 'b') {
        score += 10
      }
    }
  }
  for (var i = 0, length = qTwo.length; i < length; i++) {
    if (qTwo[i].checked) {
      var ans2 = qTwo[i].value
      if (qTwo[i].value === 'c') {
        score += 10
      }
    }
  }
  for (var i = 0, length = qThree.length; i < length; i++) {
    if (qThree[i].checked) {
      var ans3 = qThree[i].value;
      if (qThree[i].value === 'b') {
        score += 10
      }
    }
  }
  for (var i = 0, length = qFour.length; i < length; i++) {
    if (qFour[i].checked) {
      var ans4 = qFour[i].value
      if (qFour[i].value === 'c') {
        score += 10
      }
    }
  }
  for (var i = 0, length = qFive.length; i < length; i++) {
    if (qFive[i].checked) {
      var ans5 = qFive[i].value
      if (qFive[i].value === 'a') {
        score += 10
      }
    }
  }
  if (ans1 == undefined || ans2 == undefined || ans3 == undefined || ans4 == undefined || ans5 == undefined) {
    alert('Please select all answers');
  } else {

    if (score === 0) {
      document.getElementById('yoo').value = 'Try again, you scored : ' + score + "/50";
    } else if (score <= 10) {
      document.getElementById('yoo').value = 'You can do better , you scored : ' + score + "/50";
    } else if (score === 20) {
      document.getElementById('yoo').value = 'There is room for improvement, you scored : ' + score + "/50";
    } else if (score > 30) {
      document.getElementById('yoo').value = 'congratulations! , you scored :' + score + "/50";

    }


    event.preventDefault();



  }
}
