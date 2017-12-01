$(document).ready(function() {
  $("#trackQuestions").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var q1Input = parseInt($("input:radio[name=question1]:checked").val());
    var q2Input = parseInt($("input:radio[name=question2]:checked").val());
    var q3Input = parseInt($("input:radio[name=question3]:checked").val());
    var q4Input = parseInt($("input:radio[name=question4]:checked").val());
    var q5Input = parseInt($("input:radio[name=question5]:checked").val());

    var combinedInput = q1Input + q2Input + q3Input + q14nput + q5Input;

    if (q5Input === 5) {
      $("#output").text("Hello " + nameInput + ", it is highly recommended that you take the PHP/Drupal course from Epicodus. Based on your response, taking this course will allow you to focus on backend coding.");
    } else if (q5Input === 1) {
      $("#output").text("It is highly recommended that you take the PHP/Drupal course from Epicodus. Based on your response, taking this course will allow you to focus on backend coding.");
    }
  });
});

// 1-6 = class
// 7-12 = java
// PHP/Drupal
// Java/Android
// CSS/Design
