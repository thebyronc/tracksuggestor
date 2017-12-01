$(document).ready(function() {
  $("#trackQuestions").submit(function(event) {
    event.preventDefault();
    var q1Input = $("input:radio[name=question1]:checked").val();
    var q2Input = $("input:radio[name=question2]:checked").val();
    var q3Input = $("input:radio[name=question3]:checked").val();
    var q4Input = $("input:radio[name=question4]:checked").val();
    $("#output").text(q1Input + q2Input + q3Input + q4Input);
  });
});
