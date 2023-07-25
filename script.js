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
  const resultsList = document.getElementById("results");
  const restartButton = document.getElementById("restart-btn");
  
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
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
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
  
    const userAnswer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = currentQuizData.correctAnswer;

    if (userAnswer === correctAnswer) {
        //feedbackElem.innerHTML = "<img src='images/correct.png' alt='Correct'>";  
        score++;
    }
    /*else {
        //feedbackElem.innerHTML = `<img src='images/incorrect.png' alt='Incorrect'><p>Correct answer: ${correctAnswer}</p>`;
    }*/
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h2>Results:</h2><ul id="results"></ul> ${username} scored ${score} out of ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    showQuestion();
  }
  
  submitButton.addEventListener("click", checkAnswer);
  restartButton.addEventListener("click", restartQuiz);
  
  showQuestion();
  