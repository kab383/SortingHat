let baseURL  = "https://wizard-world-api.herokuapp.com/swagger/v1/swagger.json"
let houseURL = "https://wizard-world-api.herokuapp.com/Houses"

// bringing in all of the house data within the API. 
// coding note: => concise arrow functions will automatically return data. No need for return keyword.
fetch(houseURL)
.then(response => response.json())
.then(houseData => console.log(houseData));

// declaration and initialization of all variables used to interact with the quiz.
const mainContainer = document.getElementById("main-container");
const navigation = document.getElementsByClassName(".navigation");
const startButton = document.getElementById("start-quiz-button");
const nextButton = document.getElementById("next-question-button");
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const buttonTable = document.getElementsByClassName(".button-table");
const buttons = document.getElementsByClassName(".button");

// we need to begin by hiding the question container, because we do not want to show the quiz prior to hitting the start quiz button.
questionContainer.style.display = "none";

// on click, we want the startButton to initiate startQuiz, which hides the button and populates the first quiz question.
startButton.addEventListener("click", startQuiz)

// question counter will be used to populate the currect prompts and answer choices on each question, by giving an index to correspond with.
currentQuestionCounter = 1;

function startQuiz() {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    populateQuestions();
}

function populateQuestions () {
    if (currentQuestionCounter === 0){
    console.log(question.innerText = quizContent[0].prompt);
    } else if (currentQuestionCounter === 1){
        console.log(question.innerText = quizContent[1].prompt);
    } else if (currentQuestionCounter === 2){
        console.log(question.innerText = quizContent[2].prompt);
    } else if (currentQuestionCounter === 3){
        console.log(question.innerText = quizContent[3].prompt);
    } else if (currentQuestionCounter === 4){
        console.log(question.innerText = quizContent[4].prompt);
    } else {
        console.log("No more questions");
    }
}

// function chooseAnswer () {

// }

// function nextQuestion () {

// }

let quizContent = [
    {
        prompt: "Please select an element of nature that resonates most with your character",
        answers: []
    },
    {
        prompt: "Below, you will have four animals to choose from. Which one embodies the traits that you value most?",
        answers: []
    },
    {
        Prompt: "Select the option that sounds most like you",
        Answers: []
    },
    {
        Prompt: "What are your preferred color combinations?",
        Answers: []
    },
    {
        Prompt: "Who do you look up to the most?",
        Answers: []
    },
];