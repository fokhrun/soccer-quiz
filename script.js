/*jshint esversion: 6 */
// Sample quiz data

const quizData = [
    {
        question: "Which country won the 2010 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "Spain"
    },
    {
        question: "Which country won the 2014 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "Germany"
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Spain"],
        correctAnswer: "France"    
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        options: ["Germany", "Argentina", "France", "Spain"],
        correctAnswer: "Argentina"
    },
  ];
  
  const UserSection = document.getElementById("user-section");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const scorecardContainer = document.getElementById("scorecard-container");
  const feedbackContainer = document.getElementById("feedback-container");

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const finalResultsList = document.getElementById("results");
  
  const submitButton = document.getElementById("submit-btn");
  const restartButton = document.getElementById("restart-btn");
  
  const finalButton = document.getElementById("final-btn");
  const submitFeedbackButton = document.getElementById("submit-feedback-btn");
  
  quizContainer.style.display = "none";
  resultContainer.style.display = "none";
  scorecardContainer.style.display = "none";
  feedbackContainer.style.display = "none";
  
  let currentQuestion = 0;
  let score = 0;
  let username = "";
  let incorrectAnswers = [];

  function startQuiz() {
    username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a username before starting the quiz.");
        return;
    }
    if (username){
        UserSection.style.display = "none";
        quizContainer.style.display = "block";
        showQuestion();
    }
}

function showQuestion() {
    submitButton.style.display = "block";    
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = `Q${currentQuestion+1}: ${currentQuizData.question}`;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option) => {
        const label = document.createElement("label");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "answer";
        radioInput.value = option;
        label.appendChild(radioInput);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });
}
  
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
    resultContainer.style.display = "block";
    const userAnswer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = currentQuizData.correctAnswer;

    if (userAnswer === correctAnswer) {
        finalResultsList.innerHTML = `<div id='result-image'> Q${currentQuestion+1}: <img src='images/correct.png' width='20' height='20' alt='Correct'></div>`;  
        score++;
    }
    else {
        incorrectAnswers.push({question: currentQuizData.question, userAnswer, correctAnswer: currentQuizData.correctAnswer});
        finalResultsList.innerHTML = `<div id='result-image'> Q${currentQuestion+1}: <img src='images/incorrect.png' width='25' height='25' alt='Incorrect'></div>`;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
        showQuestion();
    }
    else {
        submitButton.style.display = "none";
        showScoreCard();
    } 
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    finalResultsList.innerHTML = "";
    scorecardContainer.style.display = "none";
    restartButton.style.display = "none";
    finalButton.style.display = "none";
    showQuestion();
  }

  function showScoreCard() {
    finalButton.style.display = "none";
    resultContainer.style.display = "block";
    const scorecardContainer = document.getElementById("scorecard");
    scorecardContainer.innerHTML = "";
  
    // Display each incorrect answer in the scorecard
    if (incorrectAnswers.length > 0 || currentQuestion < quizData.length) {
      incorrectAnswers.forEach((incorrectAnswer) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Q: ${incorrectAnswer.question}</strong><br>
                              Your Answer: ${incorrectAnswer.userAnswer}<br>
                              Correct Answer: ${incorrectAnswer.correctAnswer}<br><br>`;
        scorecardContainer.appendChild(listItem);
      });
    } else {
        scorecardContainer.innerHTML = "No incorrect answers.";
    }
  
    // Display the final score
    const finalScore = document.getElementById("final-score");
    let usernameTitleCase = username.toLowerCase().charAt(0).toUpperCase() + username.slice(1);
    finalScore.textContent = `${usernameTitleCase} final score: ${score} out of ${quizData.length}`;
  
    // Show the scorecard container
    const scorecardContainerDiv = document.getElementById("scorecard-container");
    scorecardContainerDiv.style.display = "block";
    feedbackContainer.style.display = "block";
  }
  
  function submitFeedback() {
    const feedbackTextarea = document.getElementById("feedback-textarea");
    // Perform any action with the feedback, such as sending it to a server
    alert(`${username} Thank you for your feedback!`);
    // Clear the feedback text area
    feedbackTextarea.value = "";
    feedbackContainer.style.display = "none";

  }
  
  submitButton.addEventListener("click", checkAnswer);
  restartButton.addEventListener("click", restartQuiz);
  finalButton.addEventListener("click", showScoreCard);
  submitFeedbackButton.addEventListener("click", submitFeedback);
  
  //showQuestion();
  startQuiz();
  