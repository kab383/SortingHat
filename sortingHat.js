// Connecting API data
let houseURL = 'https://wizard-world-api.herokuapp.com/Houses'

fetch(houseURL)
.then(response => response.json())
.then(houseData => console.log(houseData))
.catch((err) => console.log((err)));

// Dec and int of variables
const mainContainer = document.getElementById('main-container');
const navigation = document.getElementsByClassName('.navigation');
const startButton = document.getElementById('start-quiz-button');
const questionContainer = document.getElementById('question-container');
const question = document.getElementById('question');
const buttonTable = document.getElementsByClassName('.button-table');
const answers = document.getElementsByClassName('.answers');
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');
const resultsContainer = document.getElementById('results-container');
const houseContainer = document.getElementById('house-container');

// Questions to populate quiz
let quizContent = [
    {
        prompt: 'Please select an element of nature that resonates most with your character:',
    },
    {
        prompt: 'Below, you will have four animals to choose from. Which one embodies the traits that you value most?',
    },
    {
        prompt: 'Select the option that sounds most like you:',
    },
    {
        prompt: 'What are your preferred color combinations?',
    },
    {
        prompt: 'Who do you look up to the most?',
    },
];

// Empty array that will collect pushed answers
let collectedAnswers = [];
console.log(collectedAnswers.length);

let gryffindor = [];
let hufflepuff = [];
let ravenclaw = [];
let slytherin = [];

questionContainer.style.display = 'none';

startButton.addEventListener('click', fetchData)

function fetchData() {
    fetch(houseURL)
    .then(response => {return response.json()})
    .then(json => {startQuiz(json)})
};

function startQuiz(data) {
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    displayAnswers(data);
    populateQuestions();
};

function populateQuestions() {
    if (collectedAnswers.length === 0){
    console.log(question.innerText = quizContent[0].prompt);
    } else if (collectedAnswers.length === 1){
        console.log(question.innerText = quizContent[1].prompt);
    } else if (collectedAnswers.length === 2){
        console.log(question.innerText = quizContent[2].prompt);
    } else if (collectedAnswers.length === 3){
        console.log(question.innerText = quizContent[3].prompt);
    } else if (collectedAnswers.length === 4){
        console.log(question.innerText = quizContent[4].prompt);
    } 
};

function displayAnswers(answer) {
    if (collectedAnswers.length === 0) {
        console.log(answerA.innerText = answer[0].element);
        console.log(answerB.innerText = answer[1].element);
        console.log(answerC.innerText = answer[2].element);
        console.log(answerD.innerText = answer[3].element);
    } else if (collectedAnswers.length === 1) {
        console.log(answerA.innerText = answer[0].animal);
        console.log(answerB.innerText = answer[1].animal);
        console.log(answerC.innerText = answer[2].animal);
        console.log(answerD.innerText = answer[3].animal);
    } else if (collectedAnswers.length === 2) {
        console.log(answerA.innerText = answer[0].traits[Math.floor(Math.random()*4)].name);
        console.log(answerB.innerText = answer[1].traits[Math.floor(Math.random()*4)].name);
        console.log(answerC.innerText = answer[2].traits[Math.floor(Math.random()*4)].name);
        console.log(answerD.innerText = answer[3].traits[Math.floor(Math.random()*4)].name);
    } else if (collectedAnswers.length === 3) {
        console.log(answerA.innerText = answer[0].houseColours);
        console.log(answerB.innerText = answer[1].houseColours);
        console.log(answerC.innerText = answer[2].houseColours);
        console.log(answerD.innerText = answer[3].houseColours);
    } else if (collectedAnswers.length === 4) {
        console.log(answerA.innerText = answer[0].founder);
        console.log(answerB.innerText = answer[1].founder);
        console.log(answerC.innerText = answer[2].founder);
        console.log(answerD.innerText = answer[3].founder);
    } else if (collectedAnswers.length > 4) {
        questionContainer.style.display = 'none';
    }
};

//PUSH ANSWER TO AN EMPTY HOUSE ARRAY WITH AN IF STATEMENT
function selectAnswerA() {
    console.log(answerA);
    console.log(answerA.textContent);
    collectedAnswers.push(answerA.textContent);
    console.log(collectedAnswers.length);
    console.log(collectedAnswers);
    if (answerA.textContent === 'Fire'){
        gryffindor.push(answerA.textContent)
    } else if (answerA.textContent === 'Lion'){
        gryffindor.push(answerA.textContent)
    } else if (answerA.textContent === 'Courage' || 'Chivalary' || 'Nerve' || 'Daring' || 'Determination' || 'Bravery'){
        gryffindor.push(answerA.textContent)
    } else if (answerA.textContent === 'Scarlet and gold'){
        gryffindor.push(answerA.textContent)
    } else if (answerA.textContent === 'Godric Gryffindor'){
        gryffindor.push(answerA.textContent)
    };
    fetchData();
    populateQuestions();
    endQuizSelectHouse();
};

function selectAnswerB() {
    console.log(answerB);
    console.log(answerB.textContent)
    collectedAnswers.push(answerB.textContent);
    console.log(collectedAnswers.length);
    console.log(collectedAnswers);
    if (answerB.textContent === 'Air'){
        ravenclaw.push(answerB.textContent)
    } else if (answerB.textContent === 'Eagle'){
        ravenclaw.push(answerB.textContent)
    } else if (answerB.textContent === 'Learning' || 'Acceptance' || 'Inteligence' || 'Wisdom' || 'Wit' || 'Creativity'){
        ravenclaw.push(answerB.textContent)
    } else if (answerB.textContent === 'Blue and bronze'){
        ravenclaw.push(answerB.textContent)
    } else if (answerB.textContent === 'Rowena Ravenclaw'){
        ravenclaw.push(answerB.textContent)
    };
    fetchData();
    populateQuestions();
    endQuizSelectHouse();
};

function selectAnswerC() {
    console.log(answerC);
    console.log(answerC.textContent)
    collectedAnswers.push(answerC.textContent);
    console.log(collectedAnswers.length);
    console.log(collectedAnswers);
    if (answerC.textContent === 'Earth'){
        hufflepuff.push(answerC.textContent)
    } else if (answerC.textContent === 'Badger'){
        hufflepuff.push(answerC.textContent)
    } else if (answerC.textContent === 'Hardworking' || 'Patience' || 'Loyalty' || 'Just' || 'Fairness' || 'Modesty'){
        hufflepuff.push(answerC.textContent)
    } else if (answerC.textContent === 'Yellow and black'){
        hufflepuff.push(answerC.textContent)
    } else if (answerC.textContent === 'Helga Hufflepuff'){
        hufflepuff.push(answerC.textContent)
    };
    fetchData();
    populateQuestions();
    endQuizSelectHouse();
};

function selectAnswerD() {
    console.log(answerD);
    console.log(answerD.textContent)
    collectedAnswers.push(answerD.textContent);
    console.log(collectedAnswers.length);
    console.log(collectedAnswers);
    if (answerD.textContent === 'Water'){
        slytherin.push(answerD.textContent)
    } else if (answerD.textContent === 'Serpent'){
        slytherin.push(answerD.textContent)
    } else if (answerD.textContent === 'Resourcefulness' || 'Selfpreservation' || 'Ambition' || 'Cunning' || 'Pride' || 'Determination'){
        slytherin.push(answerD.textContent)
    } else if (answerD.textContent === 'Green and silver'){
        slytherin.push(answerD.textContent)
    } else if (answerD.textContent === 'Salazar Slytherin'){
        slytherin.push(answerD.textContent)
    };
    fetchData();
    populateQuestions();
    endQuizSelectHouse();
};

function endQuizSelectHouse(){
    if (collectedAnswers.length > 4){
        houseSelector();
    } else {
        return;
    };
}

function houseSelector() {
    console.log(gryffindor.length);
    console.log(ravenclaw.length);
    console.log(hufflepuff.length);
    console.log(slytherin.length);
    if (gryffindor.length > ravenclaw.length && gryffindor.length > hufflepuff.length && gryffindor.length > slytherin.length) {
        console.log(houseContainer.innerText = 'You belong in house GRYFFINDOR!')
    } else if (ravenclaw.length > gryffindor.length && ravenclaw.length > hufflepuff.length && ravenclaw.length > slytherin.length) {
        console.log(houseContainer.innerText = 'You belong in house RAVENCLAW!')
    } else if (hufflepuff.length > ravenclaw.length && hufflepuff.length > gryffindor.length && hufflepuff.length > slytherin.length) {
        console.log(houseContainer.innerText = 'You belong in house HUFFLEPUFF')
    } else if (slytherin.length > ravenclaw.length && slytherin.length > hufflepuff.length && slytherin.length > gryffindor.length) {
        console.log(houseContainer.innerText = 'You belong in house SLYTHERIN')
    }
};