// Sample quiz data
const quizData = [
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
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result-container");
  const feedbackContainer = document.getElementById("feedback-container")
  const resultsList = document.getElementById("results");
  const restartButton = document.getElementById("restart-btn");
  const finalButton = document.getElementById("final-btn");
  const submitFeedbackButton = document.getElementById("submit-feedback-btn");
  
  let currentQuestion = 0;
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
    if (currentQuestion === quizData.length) {     
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        showResults();
    }
    else{
        const currentQuizData = quizData[currentQuestion];
        questionElement.textContent = currentQuizData["question"];
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
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
  
    const userAnswer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = currentQuizData.correctAnswer;

    if (userAnswer === correctAnswer) {
        resultsList.innerHTML = "<div id='result-image'><img src='images/correct.png' width='20' height='20' alt='Correct'></div>";  
        score++;
    }
    else {
        resultsList.innerHTML = `<div id='result-image'><img src='images/incorrect.png' width='25' height='25' alt='Incorrect'></div><p id='correct-answer-text'>Correct answer: ${correctAnswer}</p>`;
    }
  
    currentQuestion++;
  
    if (currentQuestion <= quizData.length) {
      showQuestion();
    }    
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    showQuestion();
  }

  function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `
        <div id="final-result"><h2>Final Results</h2>
        <ul id="results"></ul> ${username} scored ${score} out of ${quizData.length}</div>        
    `;

    // Show the feedback container after showing results
    feedbackContainer.style.display = "block";
  }
  
  function submitFeedback() {
    const feedbackTextarea = document.getElementById("feedback-textarea");
    const feedback = feedbackTextarea.value.trim();
    // Perform any action with the feedback, such as sending it to a server
    alert("Thank you for your feedback!");
    // Clear the feedback text area
    feedbackTextarea.value = "";
  }
  
  submitButton.addEventListener("click", checkAnswer);
  restartButton.addEventListener("click", restartQuiz);
  finalButton.addEventListener("click", showResults);
  submitFeedbackButton.addEventListener("click", submitFeedback);
  
  showQuestion();
  