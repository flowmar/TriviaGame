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

$(document).ready(function initial() {
  var startButton = $('.start').html("<button class='btn btn-default'>Start</buton>")
;
$('.start').on('click', 'button', function() {
    $('p.welcome').fadeOut(2000);
    $('p.message').fadeIn(3500);
})
});
