const questions = [
    {
        question: "What is e-waste?",
        answers: [
            "Waste from electronic devices",
            "Waste from organic materials",
            "Waste from household items",
            "Waste from medical equipment"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT considered e-waste?",
        answers: [
            "Smartphone",
            "Plastic bottle",
            "Computer monitor",
            "TV"
        ],
        correctAnswer: 1
    },
    {
        question: "Why is it important to recycle e-waste?",
        answers: [
            "To reduce landfill waste",
            "To increase pollution",
            "To encourage buying new devices",
            "To save energy"
        ],
        correctAnswer: 0
    },
    {
        question: "What should you do with your old electronics?",
        answers: [
            "Recycle them properly",
            "Throw them in regular trash",
            "Burn them",
            "Bury them in the backyard"
        ],
        correctAnswer: 0
    },
    {
        question: "What toxic materials can be found in e-waste?",
        answers: [
            "Lead, mercury, and cadmium",
            "Only gold and silver",
            "Aluminum and copper",
            "Plastic and glass"
        ],
        correctAnswer: 0
    }
];


const questionContainer = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
let currentQuestion = 0;
let score = 0;

function displayQuestion(questionIndex) {
    // Fade out the current question and answers
    questionContainer.style.opacity = "0";
    answersContainer.style.opacity = "0";

    setTimeout(() => {
        const question = questions[questionIndex];
        questionText.textContent = `Question ${questionIndex + 1}: ${question.question}`;

        const optionLabels = ['A', 'B', 'C', 'D'];
        answerButtons.forEach((button, index) => {
            button.textContent = `${optionLabels[index]}. ${question.answers[index]}`;
            button.disabled = false;
        });

        // Fade in the new question and answers
        questionContainer.style.opacity = "1";
        answersContainer.style.opacity = "1";

        nextButton.style.display = "none";
        resultText.textContent = "";

        // Reset the container height
        questionContainer.style.height = "auto";
    }, 300); // Delay to allow for fade-out effect
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correctAnswer) {
        resultText.textContent = "Correct!";
        score++;
    } else {
        resultText.textContent = "Incorrect. Try again!";
    }
    
    answerButtons.forEach(button => button.disabled = true);
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    } else {
        questionText.textContent = "Quiz completed!";
        answerButtons.forEach(button => button.remove());
        nextButton.remove();
        scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
        // Display confetti when the score is shown
        // for starting the confetti 

        const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
        };

        //  for stopping the confetti 

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
        };
        // after this here we are calling both the function so it works
        start();
        
    }
}

displayQuestion(currentQuestion);