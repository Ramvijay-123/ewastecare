const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'What is e-waste?',
        answers: [
            { text: 'Electronic waste', correct: true },
            { text: 'Energy waste', correct: false },
            { text: 'Eco waste', correct: false },
            { text: 'Excess waste', correct: false }
        ]
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        // Increase the score for correct answers
        score++;
    }
    
    // Show the Next button
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    nextButton.style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // All questions are answered, show completion message
        showCompletionMessage();
    }
}

function showCompletionMessage() {
    questionContainer.innerText = `Quiz completed! Your score: ${score}/${questions.length}`;
    answerButtons.innerHTML = '';
}

nextButton.addEventListener('click', showNextQuestion);

showQuestion(questions[currentQuestionIndex]);




let slideIndex = 0;
showSlides();
let timer;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

// Call the showSlides function every 3 seconds
timer = setInterval(showSlides, 3000);