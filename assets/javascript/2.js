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
                e: "Apples"
            },
            correctAnswer: "b"
        }, {
            question: "Who was the main villian in the Super Mario series?",
            answers: {
                a: "Gruntilda, an angry witch",
                b: "King K. Rool, the king of the lizards",
                c: "Bowser, a turtle",
                e: "Ash Ketchum, a terrifying ghost"
            },
            correctAnswer: "c"
        }, {
            question: "What was the princess' name in the Super Mario Series?",
            answers: {
                a: "Princess Zelda",
                b: "Princess Daisy",
                c: "Princess Peach",
                e: "Princess Gannondorf"
            },
            correctAnswer: "c"
        }, {
            question: "What was Mario's brother's name?",
            answers: {
                a: "Maria",
                b: "Gannondorf",
                c: "Toad",
                e: "Luigi"
            },
            correctAnswer: "d"
        }, {
            question: "What was the name of the ghost enemy and what did they do?",
            answers: {
                a: "Boo, only attacked you when you were facing away",
                b: "Yelp, threw fireballs at you",
                c: "Scream, spit icicles at you",
                e: "Biggie, tried to eat you"
            },
            correctAnswer: "a"
        }, {
            question: "Where did the game take place?",
            answers: {
                a: "The Sunshine Kingdom",
                b: "Earth",
                c: "The Mushroom Kingdom",
                e: "The Star Kingdom"
            },
            correctAnswer: "c"
        }, {
            question: "Who was Mario's helper friend?",
            answers: {
                a: "Banjo the Bear",
                b: "Yoshi the Dinosaur",
                c: "Bowser the Turtle",
                e: "Rambi the Rhino"
            },
            correctAnswer: "b"
        }, {
            question: "What weapon did Mario carry in Super Mario Sunshine??",
            answers: {
                a: "A water-spraying backpack",
                b: "A sword",
                c: "Fireballs",
                e: "Turtle Shells"
            },
            correctAnswer: "a"
        }, {
            question: "Which item gave Mario the ability to shoot fireballs?",
            answers: {
                a: "Red Egg",
                b: "Red Mushroom",
                c: "Fire Flower",
                e: "Hammer"
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
    }],
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

// Functions

resetTimer = () => {
    time = 30;
}
startTimer = () => {
    console.log("start timer");
    updater = setInterval(updateTimer, 1000);
    counter = setInterval(count, 1000);
}
stopTimer = () => {
    clearInterval(counter);
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
    // if (timer.time < 0) {
    //     clearInterval(counter);
    // } else {
    timerDiv.empty().html("Time remaining:<br>" + time);
    // }
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

showQuestion = (currentQuestionNumber) => {
    switch (currentQuestionNumber) {
        case 1:
            $('#current-question').html(question1);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[0].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[0].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[0].c + '</li><li class="btn btn-yellow" id="c">' + constructedAs[0].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 2:
            $('#current-question').html(question2);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[1].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[1].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[1].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[1].d +
                '</ul>'
            )
            currentQuestionNumber++;
            break;
        case 3:
            $('#current-question').html(question3);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[2].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[2].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[2].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[2].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 4:
            $('#current-question').html(question4);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[3].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[3].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[3].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[3].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 5:
            $('#current-question').html(question5);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[4].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[4].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[4].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[4].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 6:
            $('#current-question').html(question6);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[5].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[5].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[5].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[5].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 7:
            $('#current-question').html(question7);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[6].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[6].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[6].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[6].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 8:
            $('#current-question').html(question8);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[7].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[7].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[7].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[7].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 9:
            $('#current-question').html(question9);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[8].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[8].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[8].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[8].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
        case 10:
            $('#current-question').html(question10);
            $('#choices').html(
                '<ul><li class="btn btn-dark-green" id="a">' + constructedAs[9].a + '</li><li class="btn btn-brown" id="b">' + constructedAs[9].b + '</li><li class="btn btn-cyan" id="c">' + constructedAs[9].c + '</li><li class="btn btn-yellow" id="d">' + constructedAs[9].d +
                '</ul>'
            );
            currentQuestionNumber++;
            break;
    }
}

showChoices = (currentQuestionNumber) => {
    switch (currentQuestionNumber) {
        case 1:
    }
}

playGame = () => {
    if (currentQuestionNumber < 10) {
        showQuestion(currentQuestionNumber);
        showChoices(currentQuestionNumber);
        startTimer();
    }

}

$(document).ready(function () {
    startGame();
});