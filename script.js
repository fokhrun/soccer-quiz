// Questions and Answers
const questions = [
    {
        question: "Which country won the 2010 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "Spain",
        image: "images/spain.jpg"
    },
    {
        question: "Which country won the 2014 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "Germany",
        image: "images/germany.jpg"
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "France",
        image: "images/france.jpg"
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        options: ["Germany", "Argentina", "France", "Spain"],
        correctAnswer: "Argentina",
        image: "images/argentina.jpg"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let username = "";

function startQuiz() {
    username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a username before starting the quiz.");
        return;
    }

    document.getElementById("user-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElem = document.getElementById("question");
        const optionsElem = document.getElementById("options");

        questionElem.innerHTML = questions[currentQuestionIndex].question;

        optionsElem.innerHTML = "";
        for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
            optionsElem.innerHTML += `<button onclick="checkAnswer('${questions[currentQuestionIndex].options[i]}')">${questions[currentQuestionIndex].options[i]}</button>`;
        }

        document.getElementById("next-btn").style.display = "none";
        document.getElementById("feedback").innerHTML = "";
    } else {
        showScore();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackElem = document.getElementById("feedback");

    if (selectedOption === correctAnswer) {
        feedbackElem.innerHTML = "<img src='images/correct.png' alt='Correct'>";
        score++;
    } else {
        feedbackElem.innerHTML = `<img src='images/incorrect.png' alt='Incorrect'><p>Correct answer: ${correctAnswer}</p>`;
    }

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showScore() {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("score-section").style.display = "block";
    document.getElementById("score").innerText = score;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    username = "";
    document.getElementById("user-section").style.display = "block";
    document.getElementById("score-section").style.display = "none";
    startQuiz();
}
