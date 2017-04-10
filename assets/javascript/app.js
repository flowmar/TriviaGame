// Initialize Variables
var disabledQuestions = [];
var currentQuestion = [];
var timer = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var choice1 = "";
var choice2 = "";
var choice3 = "";
var choice4 = "";
var seconds = 4;
var round = 0;

// randomNumber generator between 0 and 4
var randomNumber = Math.floor(Math.random() * 4) 

// enabledQuestions Object
var enabledQuestions = [{
  question: "In Donkey Kong Country, what was the name of the main villain?",
  correct: "King K. Rool",
  enabled: true,
  incorrect1: "Banana Smasher",
  incorrect2: "Kreepy Kong",
  incorrect3: "Hyrule"
},{
  question: "What item made Mario grow into a giant?",
  correct: "Mushrooms",
  enabled: true,
  incorrect1: "Stars",
  incorrect2: "Diamonds",
  incorrect3: "Apples,"
},{
  question: "In the Legend of Zelda series, what is the main playable character's name?",
  correct: "Link",
  enabled: true,
  incorrect1: "Zelda",
  incorrect2: "Gannondorf",
  incorrect3: "Bowser",
},{
    question: "What is the princess' name in the Super Mario Brothers franchise?",
    correct: "Princess Peach Toadstool",
    enabled: true,
    incorrect1: "Princess Gannondorf",
    incorrect2: "Princess Daisy",
    incorrect3: "Princess Zelda",
  },{
      question: "What was the name of the Rhino in the Donkey Kong series?",
      correct: "Rambi the Rhino",
      enabled: true,
      incorrect1: "Peaches",
      incorrect2: "Liu Kang",
      incorrect3: "Carmello",
    }];

// Constructor for the enabled questions object
function enabledConstructor(question, correct, enabled, incorrect1, incorrect2, incorrect3) {
  this.question = question;
  this.correct = correct;
  this.enabled = enabled;
  this.incorrect1 = incorrect1;
  this.incorrect2 = incorrect2;
  this.incorrect3 = incorrect3;
}

enabledQuestions = enabledQuestions.map(function(e) {
  return new enabledConstructor(e.question, e.correct, e.enabled, e.incorrect1, e.incorrect2, e.incorrect3)
});




// Creates the Start button when the document is ready.
$(document).ready(function initial() {
  var startButton = $('.start').html("<button class='btn btn-default begin'>Start</buton>");

// Defines a function that creates a timer_30 object
function timer() {

  // Creates a timer variable using setInterval method
  var timer_30 = setInterval(function() {

    // Displays the time remaining on the page
    $('#timer').html("Time remaining: " + seconds);
    console.log(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer_30);
      $('#timer').text("TIME UP! The correct answer is: " + d);
      unanswered++;

    }
  }, 1000);
}
// When start button is clicked, banner changes messages
    $('.start').on('click', 'button', function() {
      $('p.welcome').fadeOut(2000);
      $('p.message').fadeIn(2800);

// The start button is removed.
      $(this).remove().animate(1500);

// Creates a timer by calling the timer() function
      timer();

// The #timer div is selected and the created timer is displayed
    $('#timer').fadeIn(2000);

// Select and Display a question.
currentQuestion[round] = enabledQuestions[randomNumber]['question'];
// disabledquestions[round] = currentQuestion[round];
$('.current-question').html("Current Question:<br> " + currentQuestion).fadeIn('slow');
})
});