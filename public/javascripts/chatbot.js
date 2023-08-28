const chatbotButton = document.getElementById("chatbot-button");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotMessages = document.getElementById("chatbot-messages");
const userInput = document.getElementById("user-input");


const sampleQnA = [
    {
        question: "What is e-waste?",
        answer: "E-waste, or electronic waste, refers to discarded electronic devices like computers, smartphones, TVs, and more."
    },
    {
        question: "Why is e-waste management important?",
        answer: "Proper e-waste management is crucial to prevent environmental pollution and health risks from hazardous materials in electronics."
    },
    {
        question: "How can I dispose of e-waste?",
        answer: "You can recycle e-waste through certified recycling centers, manufacturers, or take-back programs."
    },
    {
        question: "What are the environmental impacts of improper e-waste disposal?",
        answer: "Improper disposal can lead to toxic chemicals leaching into soil and water, harming ecosystems and human health."
    },
    {
        question: "Can I donate old electronics?",
        answer: "Yes, donating working electronics to charities or organizations is a great way to extend their life and reduce waste."
    },
    {
        question: "What materials in electronics are recyclable?",
        answer: "Many components like metals, plastics, and glass can be recycled. Some require specialized processes due to toxicity."
    },
    {
        question: "Are there regulations for e-waste disposal?",
        answer: "Yes, many countries have regulations governing e-waste disposal to minimize environmental impact and encourage recycling."
    },
    {
        question: "How do electronics get recycled?",
        answer: "Recycling involves dismantling, separating components, and processing materials to be reused in new products."
    },
    {
        question: "Are there any alternatives to throwing away old electronics?",
        answer: "Yes, consider repair, refurbishment, or trade-in programs as alternatives to disposal."
    },
    {
        question: "What's the role of manufacturers in e-waste management?",
        answer: "Manufacturers are encouraged to design products for easy recycling and take-back programs to responsibly manage end-of-life products."
    },
    {
        question: "Are there any valuable materials in e-waste?",
        answer: "Yes, electronics contain valuable materials like gold, silver, and rare metals that can be recovered through recycling."
    },
    {
        question: "What is the impact of e-waste on human health?",
        answer: "Improper e-waste disposal releases toxins into the environment, affecting air, soil, and water quality, which can lead to health problems."
    }
    // Add more sample Q&A pairs here
];



const closeButton = document.getElementById("close-chatbot");
const suggestedList = document.getElementById("suggested-list");
const sendButton = document.getElementById("send-button");

let currentQuestionSet = 0; // Track the current set of questions

// Add event listener to close the chatbot
closeButton.addEventListener("click", () => {
    chatbotButton.style.display = "block";
    chatbotWindow.style.display = "none";
});

// Add event listener to suggested questions
suggestedList.addEventListener("click", (event) => {
    const selectedQuestion = event.target.innerText.substr(3);
    userInput.value = selectedQuestion;
    userInput.focus();
});


chatbotButton.addEventListener("click", () => {
    chatbotButton.style.display = "none";
    chatbotWindow.style.display = "block";
    chatbotWindow.classList.add("chatbot-open");
});

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
}

function updateSuggestedQuestions() {
    // Clear existing suggestions
    suggestedList.innerHTML = "";
    const startIndex = currentQuestionSet * 3;
    const endIndex = Math.min(startIndex + 3, sampleQnA.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const qna = sampleQnA[i];
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${qna.question}`;
        suggestedList.appendChild(listItem);
    }

    currentQuestionSet++;
    if (currentQuestionSet * 3 >= sampleQnA.length) {
        // Reset the current set counter when all questions have been displayed
        currentQuestionSet = 0;
    }

}

let chatStarted = false;
if (!chatStarted) {
    // Display the default welcome message when the chatbot opens for the first time
    addMessage("Hello! I'm here to help you with e-waste management.", "ai");
}


function sendMessage(){
    const userText = userInput.value.trim();
        if (userText !== ""){
            addMessage(userText, "user");
            // Check if the user input is a number corresponding to a suggested question
            const selectedQuestionNumber = parseInt(userText);
            if (!isNaN(selectedQuestionNumber) && selectedQuestionNumber >= 1 && selectedQuestionNumber <= sampleQnA.length) {
                const selectedAnswer = sampleQnA[selectedQuestionNumber - 1].answer;
                addMessage(selectedAnswer, "ai");
            } else {
                // Find a matching answer from sampleQnA (replace with actual logic)
                const matchingAnswer = sampleQnA.find(qna => qna.question.toLowerCase() === userText.toLowerCase());
    
                // Display the answer or a default response
                const aiResponse = matchingAnswer ? matchingAnswer.answer : "I'm sorry, I don't have that information.";
                addMessage(aiResponse, "ai");
            }
            updateSuggestedQuestions();
        }
        

        userInput.value = "";
        
        
}

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
    
    const suggestedQuestions = document.querySelector(".suggested-questions");
    suggestedQuestions.style.transform = "translateZ(100%)";

    if (event.key === "Enter"  ) {
        sendMessage();
    }
});
