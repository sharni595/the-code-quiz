
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start-btn");
var questionScreen = document.querySelector("#question-screen");
var timeLeft = document.querySelector("#time-left");
var gameOverScreen = document.querySelector("#game-over");
var time = 10;
var score = 0;
var questionIndex = 0;
var quizQuestions = [{
    question: "How do you write a comment in JS?",
    choices: ["//comment", "<!--comment-->", "(comment)", "--comment"],
    correct: "//comment"
},
{
    question: "What is the correct tag to link JavaScript to HTML?",
    choices: ["<div>", "<style>", "<script>", "<span>"],
    correct: "<script>"
},
{
    question: "What is the correct function to generate a random number?",
    choices: ["Random()", "Math.random()", "Random.math()", "Math.mix()"],
    correct: "Math.random()"
},
{
    question: "What is the correct way to create a variable?",
    choices: ["var = myVariable", "myVariable()", "variable = myVariable", "var myVariable"],
    correct: "var myVariable"
},
{
    question: "How do you link external JavaScript to HTML?",
    choices: ["href=''", "src=''", "<a></a>", "<link>"],
    correct: "src=''"
},
{
    question: "Which array is written correctly?",
    choices: ["var myArray = {hello, world}", "var myArray = 'hello', 'world'", "var myArray = [1, 2, 3]", "var myArray = (1, 2, 3)"],
    correct: "var myArray = [1, 2, 3]"
},
{
    question: "What is the correct syntax for a 'for loop'?",
    choices: ["for (var i = 0; i < 5; i++)", "for (i = 0)", "for loop (var 1 <= 5)", "for [loop i = 0; i < 5]"],
    correct: "for (var i = 0; i < 5; i++)"
}
]

startButton.addEventListener("click", function(){
    startScreen.setAttribute("style", "display:none");
    questionScreen.removeAttribute("style");
    displayQuestion();
    countdown();
})

//count down timer
 function countdown(){
     var timeInterval = setInterval(function(){
         if (time > 0){
             timeLeft.textContent = time;
             time--;
         } else {
             alert("Times up!");
             gameOver();
             clearInterval(timeInterval);
             timeLeft.setAttribute("style", "display:none;");
         }
     }, 1000);
}
function displayQuestion(){

    var questionTitle = document.querySelector("#question-title");
    var questionList = document.querySelector("#question-list");
    questionTitle.textContent = quizQuestions[questionIndex].question;
    questionList.innerHTML = "";
    quizQuestions[questionIndex].choices.forEach(function(choice){
        var listEl = document.createElement("li");
        listEl.textContent = choice;
        listEl.setAttribute("value", choice);
        questionList.appendChild(listEl);
        listEl.addEventListener("click", checkAnswer);
    });

    
    function checkAnswer (e){
        //check if answer is correct or incorrect
        if (e.path[0].attributes.value.value !== quizQuestions[questionIndex].correct){
            time -= 5;
            var incorrect = document.createElement("p");
            incorrect.textContent = "Incorrect!"
            incorrect.classList.add("incorrect");
            questionList.appendChild(incorrect);
        } else{        
            var correct = document.createElement("p");
            correct.textContent = "Correct!"
            correct.classList.add("correct");
            questionList.appendChild(correct);
            score++;
        }  
        //to allow time for viewer to see if answer is correct or not before moving onto the next
        setTimeout(function(){
            if (questionIndex < quizQuestions.length){
                questionIndex++;
                displayQuestion();
            } else{
                gameOver();
            }  
        }, 1000);
    };
};


function gameOver(){
    //change to game over screen
    questionScreen.setAttribute("style", "display:none");
    gameOverScreen.removeAttribute("style");
    //view final score
    var gameScore = document.querySelector("#game-score");
    gameScore.textContent = "Your final score is " + score;
    //create label and input for initials
    var enterInitialsEl = document.createElement("div");
    enterInitialsEl.classList.add("enter-initials");
    enterInitialsEl.innerHTML = "<label class='initials-label' for='input'>Enter Initials:</label><input type='text' name='input' class='initials-input'/>";
    gameOverScreen.appendChild(enterInitialsEl);
 
    //store input in local storage
    
 
}
