document.addEventListener("DOMContentLoaded", function () {

  const quizData = [
  {
    question: "What does AI stand for?",
    options: [
      "Automated Intelligence",
      "Artificial Intelligence",
      "Advanced Internet",
      "Applied Interface"
    ],
    correct: 1
  },
  {
    question: "Which AI tool is commonly used for coding help?",
    options: [
      "Google Maps",
      "ChatGPT",
      "Instagram",
      "Spotify"
    ],
    correct: 1
  },
  {
    question: "Which field uses AI the MOST today?",
    options: [
      "Healthcare",
      "Education",
      "Software Development",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "What is Machine Learning?",
    options: [
      "A robot that looks like humans",
      "A way for machines to learn from data",
      "A programming language",
      "A computer virus"
    ],
    correct: 1
  },
  {
    question: "Which language is MOST used in AI development?",
    options: [
      "HTML",
      "CSS",
      "Python",
      "PHP"
    ],
    correct: 2
  }
];


  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option");
  const progressEl = document.getElementById("progress");

  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    optionButtons.forEach((btn, index) => {
      btn.textContent = q.options[index];
      btn.style.background = "#e5e7eb";
      btn.disabled = false;
    });

    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  }

  window.checkAnswer = function (selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
      score++;
      optionButtons[selectedIndex].style.background = "#22c55e";
    } else {
      optionButtons[selectedIndex].style.background = "#ef4444";
      optionButtons[correctIndex].style.background = "#22c55e";
    }

    optionButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }, 1000);
  };

  function showResult() {
    document.querySelector(".card").innerHTML = `
      <h2>🎉 Quiz Completed!</h2>
      <p>Your Score: <strong>${score}/${quizData.length}</strong></p>
      <button onclick="location.href='index.html'">Go Home</button>
    `;
  }

  loadQuestion();
});


loadQuestion();

