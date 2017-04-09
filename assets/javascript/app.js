// Initialize Variables
var enabledQuestions = [];
var disabledQuestions = [];
var currentQuestion = "";
var timer = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var choice1 = "";
var choice2 = "";
var choice3 = "";
var choice4 = "";
var seconds = 30;


// Creates the Start button when the document is ready.
$(document).ready(function initial() {
  var startButton = $('.start').html("<button class='btn btn-default begin'>Start</buton>");
// Defines a function that creates a timer_30 object
function timer() {
  // Creates a timer variable using setInterval method
  var timer_30 = setInterval(function() {
    $('#timer').html("Time remaining: " + seconds);
    console.log(seconds);
    seconds -= 1;
    if (seconds <=0) {
      clearInterval(timer_30);
    }
  }, 1000);
}
// When start button is clicked, banner changes messages
$('.start').on('click', 'button', function() {
      $('p.welcome').fadeOut(2000);
      $('p.message').fadeIn(3500);

    // The start button is removed.
      $(this).remove().animate(2000);

    // Creates a timer by calling the timer() function
      timer();

    // The #timer div is selected and the created timer is displayed
    $('#timer').fadeIn(3000);
    $('#timer').html("Time remaining: " + timer_30);
})
});