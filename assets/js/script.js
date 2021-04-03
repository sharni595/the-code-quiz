//create object for each question?
//create setInterval for timer. set at 1000. -5 for every incorrect answer
//start button triggers main function for quiz
//correct answer adds point to overall score 
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start-btn");
var questionScreen = document.querySelector("#question-screen");
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
    questions: "What is the correct function to generate a random number?",
    choices: ["Random()", "Math.random()", "Random.math()", "Math.mix()"],
    correct: "Math.random()"
},
{
    questions: "What is the correct way to create a variable?",
    choices: ["var = myVariable", "myVariable()", "variable = myVariable", "var myVariable"],
    correct: "var myVariable"
},
{
    questions: "How do you link external JavaScript to HTML?",
    choices: ["href=''", "src=''", "<a></a>", "<link>"],
    correct: "src=''"
},
{
    questions: "Which array is written correctly?",
    choices: ["var myArray = {hello, world}", "var myArray = 'hello', 'world'", "var myArray = [1, 2, 3]", "var myArray = (1, 2, 3"],
    correct: "var myArray = [1, 2, 3]"
},
{
    questions: "What is the correct syntax for a 'for loop'?",
    choices: ["for (var i = 0; i < 5; i++)", "for (i = 0)", "for loop (var 1 <= 5)", "for [loop i = 0; i < 5]"],
    correct: "for (var i = 0; i < 5; i++)"
}
]

startButton.addEventListener("click", function(){
    startScreen.setAttribute("style", "display:none");
    questionScreen.removeAttribute("style");
    displayQuestion();
})

function displayQuestion(){
    var questionTitle = document.querySelector("#question-title");
    var questionList = document.querySelector("#question-list");
    questionTitle.textContent = quizQuestions[questionIndex].question;
    questionList.innerHTML = "";
    quizQuestions[questionIndex].choices.forEach(function(choice){
        var listEl = document.createElement("li");
        listEl.textContent = choice;
        questionList.appendChild(listEl);
        // listEl.addEventListener("click", checkAnswer);
    });
};

function checkAnswer (){
    //create if statement
    //if correct, increment score and question index
    //if incorrect, only increment question index

};
