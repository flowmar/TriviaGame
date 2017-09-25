// Initialize variables

/*Trivia Bank */

const questions = {
    donkeyKong: [{
            question: "What was the name of the final boss in Donkey Kong Country?",
            answers: {
                a: "King K. Rool",
                b: "Banana Smasher",
                c: "Kreepy Kong",
                d: "Hyrule"
            },
            correctAnswer: "a"
        },
        {
            question: "What item did you collect, which were scattered all over the place??",
            answers: {
                a: "Peaches",
                b: "Eggs",
                c: "Bananas",
                d: "Pinecones"
            },
            correctAnswer: "c"
        },
        {
            question: "What was the Rhino's name?",
            answers: {
                a: "Peaches",
                b: "Liu Kang",
                c: "Sonic",
                d: "Rambi"
            },
            correctAnswer: "d"
        },
        {
            question: "What were the reptilian enemies called in Donkey Kong Country?",
            answers: {
                a: "Krushers",
                b: "Kremlings",
                c: "Kreatures",
                d: "Kronies"
            },
            correctAnswer: "b"
        }, {
            question: "Which of thses is not an animal that helps you on your journey?",
            answers: {
                a: "Espresso the Ostrich",
                b: "Wonky the Wombat",
                c: "Rambi the Rhino",
                d: "Squawks the Parrot"
            },
            correctAnswer: "b"
        }, {
            question: "Which item represented extra lives in Donkey Kong Country?",
            answers: {
                a: "Apples",
                b: "Stars",
                c: "Balloons",
                d: "Melons"
            },
            correctAnswer: "c"
        }, {
            question: "What was the name of the angry grandfather Kong?",
            answers: {
                a: "Cranky Kong",
                b: "Chumbawumba",
                c: "Giddy Kong",
                d: "Rude Kong"
            },
            correctAnswer: "a"
        }, {
            question: "Who was the female cousin of Diddy Kong? (She was also the main character in Donkey Kong Country 3)",
            answers: {
                a: "Dixie Kong",
                b: "Funky Kong",
                c: "She Kong",
                d: "Konga"
            },
            correctAnswer: "a"
        }, {
            question: "Which insect had giant spikes prodtruding from their bodies??",
            answers: {
                a: "Ants",
                b: "Bees",
                c: "Beetles",
                d: "Dogs"
            },
            correctAnswer: "b"
        }, {
            question: "What object was all over the game, and was used in a variety of ways??",
            answers: {
                a: "Pipes",
                b: "Bricks",
                c: "Barrels",
                d: "Planks"
            },
            correctAnswer: "c"
        }
    ],
    mario: [{
            question: "What item made Mario grow into a Giant?",
            answers: {
                a: "Mushrooms",
                b: "Stars",
                c: "Diamonds",
                e: "Hammers"
            },
            correctAnswer: "a"
        },
        {
            question: "What item allowed Maio to fly?",
            answers: {
                a: "Stars",
                b: "Feathers",
                c: "Mushrooms",
                d: "Apples"
            },
            correctAnswer: "b"
        }, {
            question: "Who was the main villian in the Super Mario series?",
            answers: {
                a: "Gruntilda, an angry witch",
                b: "King K. Rool, the king of the lizards",
                c: "Bowser, a turtle",
                d: "Ash Ketchum, a terrifying ghost"
            },
            correctAnswer: "c"
        }, {
            question: "What was the princess' name in the Super Mario Series?",
            answers: {
                a: "Princess Zelda",
                b: "Princess Daisy",
                c: "Princess Peach",
                d: "Princess Gannondorf"
            },
            correctAnswer: "c"
        }, {
            question: "What was Mario's brother's name?",
            answers: {
                a: "Maria",
                b: "Gannondorf",
                c: "Toad",
                d: "Luigi"
            },
            correctAnswer: "d"
        }, {
            question: "What was the name of the ghost enemy and what did they do?",
            answers: {
                a: "Boo, only attacked you when you were facing away",
                b: "Yelp, threw fireballs at you",
                c: "Scream, spit icicles at you",
                d: "Biggie, tried to eat you"
            },
            correctAnswer: "a"
        }, {
            question: "Where did the game take place?",
            answers: {
                a: "The Sunshine Kingdom",
                b: "Earth",
                c: "The Mushroom Kingdom",
                d: "The Star Kingdom"
            },
            correctAnswer: "c"
        }, {
            question: "Who was Mario's helper friend?",
            answers: {
                a: "Banjo the Bear",
                b: "Yoshi the Dinosaur",
                c: "Bowser the Turtle",
                d: "Rambi the Rhino"
            },
            correctAnswer: "b"
        }, {
            question: "What weapon did Mario carry in Super Mario Sunshine??",
            answers: {
                a: "A water-spraying backpack",
                b: "A sword",
                c: "Fireballs",
                d: "Turtle Shells"
            },
            correctAnswer: "a"
        }, {
            question: "Which item gave Mario the ability to shoot fireballs?",
            answers: {
                a: "Red Egg",
                b: "Red Mushroom",
                c: "Fire Flower",
                d: "Hammer"
            },
            correctAnswer: "c"
        }
    ],
    zelda: [{
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }],
    banjoKazooie: [{
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }, {
        question: "?",
        answers: {
            a: "",
            b: "",
            c: "",
            e: ""
        },
        correctAnswer: ""
    }]
}

// Variables
const welcomeDiv = $('#welcome');
const gameDiv = $('#game');
const quizThemeDiv = $('#quiz-theme');
const startButton = $('#start');
const timerDiv = $('#timer');
const choicesDiv = $('#choices');
const currentQuestionDiv = $('#current-question');
var theme;
var counter;
var updater;
var time = 10;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
const constructedQs = [];
const constructedAs = [];
const correctArray = [];
var currentQuestion;
var currentQuestionNumber = 1;
var playerchoice = '';
var currentCorrectAnswer = '';

// Functions

resetTimer = () => {
    time = 30;
}
startTimer = () => {
    updater = setInterval(updateTimer, 1000);
    counter = setInterval(count, 1000);
}
stopTimer = () => {
    clearInterval(counter);
    clearInterval(updateTimer);
}
count = () => {
    time--;
    if (time > 0) {
        updateTimer();
    } else {
        stopTimer();
        updateTimer();
    }
}
updateTimer = () => {
    console.log(time);
    timerDiv.empty().html("Time remaining:<br>" + time);
}

startGame = () => {
    // Click the start button to begin game
    $(startButton).on('click', function () {
        startButton.hide(500);
        window.setTimeout(function () {
            gameDiv.slideDown(100);
        }, 500);
        window.setTimeout(function () {
            quizThemeDiv.slideDown(1500);
        }, 500)
    });

    // Choose a video game for the questions
    /*Donkey Kong*/
    $('#dk').on('click', function () {
        build("dk");
        quizThemeDiv.slideUp(1000);
        window.setTimeout(function () {
            currentQuestionDiv.show(1500);
            choicesDiv.show(1500);
            timerDiv.show(1500);
        }, 1000);
        gameDiv.css({
            backgroundColor: "goldenrod"
        });
        playGame();
    });

    /* Super Mario */
    $('#mario').on('click', function () {
        build("mario");
        quizThemeDiv.slideUp(1000);
        window.setTimeout(function () {
            currentQuestionDiv.show(1500);
            choicesDiv.show(1500);
            timerDiv.show(1500);
        }, 1000);
        gameDiv.css({
            backgroundColor: "red"
        });
        playGame();
    });
}

// Reset game scores
resetGame = () => {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

// Build an array with the chosen question theme
build = (theme) => {

    if (theme === "dk") {

        // Build questions array

        question1 = questions.donkeyKong[0].question;
        question2 = questions.donkeyKong[1].question;
        question3 = questions.donkeyKong[2].question;
        question4 = questions.donkeyKong[3].question;
        question5 = questions.donkeyKong[4].question;
        question6 = questions.donkeyKong[5].question;
        question7 = questions.donkeyKong[6].question;
        question8 = questions.donkeyKong[7].question;
        question9 = questions.donkeyKong[8].question;
        question10 = questions.donkeyKong[9].question;

        constructedQs.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        console.log(constructedQs);

        // Build answer choices array
        answers1 = questions.donkeyKong[0].answers;
        answers2 = questions.donkeyKong[1].answers;
        answers3 = questions.donkeyKong[2].answers;
        answers4 = questions.donkeyKong[3].answers;
        answers5 = questions.donkeyKong[4].answers;
        answers6 = questions.donkeyKong[5].answers;
        answers7 = questions.donkeyKong[6].answers;
        answers8 = questions.donkeyKong[7].answers;
        answers9 = questions.donkeyKong[8].answers;
        answers10 = questions.donkeyKong[9].answers;

        constructedAs.push(answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10);
        console.log(constructedAs);

        // Build correct answer array
        correctAnswer1 = questions.donkeyKong[0].correctAnswer;
        correctAnswer2 = questions.donkeyKong[1].correctAnswer;
        correctAnswer3 = questions.donkeyKong[2].correctAnswer;
        correctAnswer4 = questions.donkeyKong[3].correctAnswer;
        correctAnswer5 = questions.donkeyKong[4].correctAnswer;
        correctAnswer6 = questions.donkeyKong[5].correctAnswer;
        correctAnswer7 = questions.donkeyKong[6].correctAnswer;
        correctAnswer8 = questions.donkeyKong[7].correctAnswer;
        correctAnswer9 = questions.donkeyKong[8].correctAnswer;
        correctAnswer10 = questions.donkeyKong[9].correctAnswer;

        correctArray.push(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10);
        console.log(correctArray);

    } else if (theme === "mario") {

        // Build Mario theme questions and answers arrays
        question1 = questions.mario[0].question;
        question2 = questions.mario[1].question;
        question3 = questions.mario[2].question;
        question4 = questions.mario[3].question;
        question5 = questions.mario[4].question;
        question6 = questions.mario[5].question;
        question7 = questions.mario[6].question;
        question8 = questions.mario[7].question;
        question9 = questions.mario[8].question;
        question10 = questions.mario[9].question;

        constructedQs.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        answers1 = questions.mario[0].answers;
        answers2 = questions.mario[1].answers;
        answers3 = questions.mario[2].answers;
        answers4 = questions.mario[3].answers;
        answers5 = questions.mario[4].answers;
        answers6 = questions.mario[5].answers;
        answers7 = questions.mario[6].answers;
        answers8 = questions.mario[7].answers;
        answers9 = questions.mario[8].answers;
        answers10 = questions.mario[9].answers;

        constructedAs.push(answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10);
        console.log(constructedAs);

        correctAnswer1 = questions.mario[0].correctAnswer;
        correctAnswer2 = questions.mario[1].correctAnswer;
        correctAnswer3 = questions.mario[2].correctAnswer;
        correctAnswer4 = questions.mario[3].correctAnswer;
        correctAnswer5 = questions.mario[4].correctAnswer;
        correctAnswer6 = questions.mario[5].correctAnswer;
        correctAnswer7 = questions.mario[6].correctAnswer;
        correctAnswer8 = questions.mario[7].correctAnswer;
        correctAnswer9 = questions.mario[8].correctAnswer;
        correctAnswer10 = questions.mario[9].correctAnswer;

        console.log(correctAnswer1);

        correctArray.push(correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5, correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10);
        console.log(correctArray);
    }

}

// Based on the currentQuestionNumber, display the corresponding question and answer choices from their respective arrays
showQuestion = () => {
    switch (currentQuestionNumber) {
        case 1:
            $('#current-question').empty().html(question1);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated tada" id="a">' + constructedAs[0].a + '</li><li class="btn btn-brown animated flash btn-lg" id="b">' + constructedAs[0].b + '</li><li class="btn btn-lg btn-cyan animated jello" id="c">' + constructedAs[0].c + '</li><li class="btn btn-yellow btn-lg animated wobble" id="c">' + constructedAs[0].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[0];
            currentQuestionNumber++;
            console.log(currentQuestionNumber);
            break;
        case 2:
            $('#current-question').empty().html(question2);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated slideInDown" id="a">' + constructedAs[1].a + '</li><li class="btn btn-brown btn-lg animated slideInDown" id="b">' + constructedAs[1].b + '</li><li class="btn btn-cyan btn-lg animated slideInRight" id="c">' + constructedAs[1].c + '</li><li class="btn btn-yellow btn-lg animated slideInLeft" id="d">' + constructedAs[1].d +
                '</li></ul>'
            )
            currentCorrectAnswer = correctArray[1];
            currentQuestionNumber++;
            break;
        case 3:
            $('#current-question').empty().html(question3);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated rubberBand" id="a">' + constructedAs[2].a + '</li><li class="btn btn-brown btn-lg animated shake" id="b">' + constructedAs[2].b + '</li><li class="btn btn-cyan btn-lg animated headShake" id="c">' + constructedAs[2].c + '</li><li class="btn btn-yellow btn-lg animated bounceIn" id="d">' + constructedAs[2].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[2];
            currentQuestionNumber++;
            break;
        case 4:
            $('#current-question').empty().html(question4);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated bounceInDown" id="a">' + constructedAs[3].a + '</li><li class="btn btn-brown btn-lg animated bounceInUp" id="b">' + constructedAs[3].b + '</li><li class="btn btn-cyan btn-lg animated bounceInRight" id="c">' + constructedAs[3].c + '</li><li class="btn btn-yellow btn-lg animated bounceInLeft" id="d">' + constructedAs[3].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[3];
            currentQuestionNumber++;
            break;
        case 5:
            $('#current-question').empty().html(question5);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated fadeIn" id="a">' + constructedAs[4].a + '</li><li class="btn btn-brown btn-lg animated fadeInDownBig" id="b">' + constructedAs[4].b + '</li><li class="btn btn-cyan btn-lg animated fadeInUpBig" id="c">' + constructedAs[4].c + '</li><li class="btn btn-yellow btn-lg animated flipInX" id="d">' + constructedAs[4].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[4];
            currentQuestionNumber++;
            break;
        case 6:
            $('#current-question').empty().html(question6);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated flipInY" id="a">' + constructedAs[5].a + '</li><li class="btn btn-brown btn-lg animated lightSpeedIn" id="b">' + constructedAs[5].b + '</li><li class="btn btn-cyan btn-lg animated fadeIn" id="c">' + constructedAs[5].c + '</li><li class="btn btn-yellow btn-lg animated rotateIn" id="d">' + constructedAs[5].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[5];
            currentQuestionNumber++;
            break;
        case 7:
            $('#current-question').empty().html(question7);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated rotateInDownLeft" id="a">' + constructedAs[6].a + '</li><li class="btn btn-brown btn-lg animated rotateInDownRight" id="b">' + constructedAs[6].b + '</li><li class="btn btn-cyan btn-lg animated rotateInUpLeft" id="c">' + constructedAs[6].c + '</li><li class="btn btn-lg btn-yellow animated rotateInUpRight" id="d">' + constructedAs[6].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[6];
            currentQuestionNumber++;
            break;
        case 8:
            $('#current-question').empty().html(question8);
            $('#choices').html(
                '<ul><li class="btn btn-lg btn-dark-green animated rollIn" id="a">' + constructedAs[7].a + '</li><li class="btn btn-brown btn-lg animated zoomIn" id="b">' + constructedAs[7].b + '</li><li class="btn btn-lg btn-cyan animated zoomInDown" id="c">' + constructedAs[7].c + '</li><li class="btn btn-yellow btn-lg animated zoomInRight" id="d">' + constructedAs[7].d +
                '</li></ul>'
            );
            currentQuestionNumber++;
            break;
        case 9:
            $('#current-question').empty().html(question9);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green btn-lg animated rollIn" id="a">' + constructedAs[8].a + '</li><li class="btn btn-brown btn-lg animated zoomInLeft" id="b">' + constructedAs[8].b + '</li><li class="btn btn-cyan btn-lg animated tada" id="c">' + constructedAs[8].c + '</li><li class="btn btn-lg btn-yellow animated flipInX" id="d">' + constructedAs[8].d +
                '</li></ul>'
            );
            currentCorrectAnswer = correctArray[8];
            currentQuestionNumber++;
            break;
        case 10:
            $('#current-question').empty().html(question10);
            $('#choices').html(
                '<ul><li><button class="btn btn-lg btn-dark-green animated rotateIn" id="a" type="button">' + constructedAs[9].a + '</button></li><li><button class="btn btn-brown btn-lg animated slideIn" id="b">' + constructedAs[9].b + '</button></li><li><button class="btn btn-cyan btn-lg animated jello" id="c">' + constructedAs[9].c + '</button></li><li> <button class="btn btn-yellow btn-lg animated wobble" id="d">' + constructedAs[9].d +
                '</button></li></ul>'
            );
            currentCorrectAnswer = correctArray[9];
            currentQuestionNumber++;
            break;
    }

    // When an answer is clicked, disable the other buttons and run compareAnswers()
    $('#a, #b, #c, #d').click(function () {
        if (this.id == 'a') {
            stopTimer();
            $('#b', '#c', '#d').addClass('disabled');
            playerChoice = 'a';
            compareAnswers(playerChoice);
        } else if (this.id == 'b') {
            stopTimer();
            $('#a', '#c', '#d').addClass('disabled');
            playerChoice = 'b';
            console.log(playerChoice);
            compareAnswers(playerChoice);
        } else if (this.id == 'c') {
            stopTimer();
            $('#a', '#b', '#d').addClass('disabled');
            playerChoice = 'c';
            console.log(playerChoice);
            compareAnswers(playerChoice);
        } else if (this.id == 'd') {
            stopTimer();
            $('#a', '#b', '#c').addClass('disabled');
            playerChoice = 'd';
            console.log(playerChoice);
            compareAnswers(playerChoice);

        }
    });
};

// Check if the playerChoice was correct
compareAnswers = (playerChoice) => {

    console.log("Comparing player choice");
    // If correct, add a point to 'correct' and alert
    if (playerChoice == currentCorrectAnswer) {
        correct++;
        alert("YAHOOO!!");
    }
    // Otherwise add a point to 'incorrect' and alert
    else {
        incorrect++;
        alert("NOOPE!");
    }

    // Clear out divs to make room for the next question
    clearDivs();
}

// Clears out all divs and starts the next question
clearDivs = () => {
    timerDiv.empty();
    currentQuestionDiv.empty();
    choicesDiv.empty();
    choicesDiv.html('<ul></ul>');
    playGame();

}

// Check the currentQuestionNumber and run showQuestion; reset the timer
playGame = () => {
    if (currentQuestionNumber < 10) {
        showQuestion(currentQuestionNumber);
        resetTimer();
        startTimer();
    } else {
        $('#current-question').empty().html(
            '<span class="p-2 display-1">End</span><br><h3 class="display-3">Your scores:</h3><br>Correct: ' + correct +
            '<br>Incorrect: ' + incorrect +
            '<br>Unanswered: ' + unanswered
        );

        $('#choices').html(
            '<button class="btn btn-elegant btn-lg" id="restart">Click to Restart</button>'
        );

        $('#restart').click(function () {
            resetGame();
            gameDiv.fadeOut();
            startButton.show();
            startGame();
        });
    }
};

// When the document is ready, populate the start button
$(document).ready(function () {
    startGame();
});