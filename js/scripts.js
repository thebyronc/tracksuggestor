$(document).ready(function() {
  $("#trackQuestions").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var q1Input = parseInt($("input:radio[name=question1]:checked").val());
    var q2Input = parseInt($("input:radio[name=question2]:checked").val());
    var q3Input = parseInt($("input:radio[name=question3]:checked").val());
    var q4Input = parseInt($("input:radio[name=question4]:checked").val());
    var q5Input = parseInt($("input:radio[name=question5]:checked").val());

    var combinedInput = q1Input + q2Input + q3Input + q4Input + q5Input;

    if (q5Input === 5) {
      $("#output").text("Hello " + nameInput + ", it is highly recommended that you take the PHP/Drupal course from Epicodus. Based on your response, taking this course will allow you to focus on backend coding.");
      $(".phpdrupal").removeClass("grayscale")
    } else if (combinedInput <= 14) {
      $("#output").text("Hello " + nameInput + ", It is recommended that you take the CSS/Design course from Epicodus. Based on your response, taking this course will allow you to focus on developing for a web interface.");
    } else if (combinedInput >= 16) {
      $("#output").text("Hello " + nameInput + ", It is recommended that you take the Java/Android course from Epicodus. Based on your response, taking this course will allow you to focus on developing for a mobile interface.");
    } else if (combinedInput === 15) {
      $("#output").text("Hello " + nameInput + ", You seem to not seem to have a particular interest in either mobile development or desktop development. May we suggest the PHP/Drupal course from Epicodus.");
    } else {
      console.log("Reached end of branch, check for possible errors.")
    }
  });
});

// 5-14 = class
// 16-25 = java
// PHP/Drupal
// Java/Android
// CSS/Design
