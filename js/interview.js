/**
 * AI Career Coach - Interview Logic
 * Handles question selection and chat interactions.
 */

const questions = {
    frontend: [
        "Can you explain the difference between virtual DOM and real DOM?",
        "What are the different ways to style a React application?",
        "How do you optimize a website's performance?",
        "Explain the concept of closures in JavaScript."
    ],
    backend: [
        "What is the difference between SQL and NoSQL databases?",
        "How do you handle authentication and authorization in a Node.js app?",
        "What are REST APIs and how do they work?",
        "Explain the concept of middleware in Express."
    ],
    fullstack: [
        "How do you structure a MERN stack application?",
        "Explain the flow of data from frontend to database and back.",
        "What are the advantages of using TypeScript in a full-stack project?",
        "How do you handle state management across a large application?"
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const interviewStatus = document.getElementById('interviewStatus');
const statsDisplay = document.getElementById('statsDisplay');

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message message-${sender}`;
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function startInterview() {
    const role = document.getElementById('roleSelect').value;
    currentQuestions = questions[role];
    currentQuestionIndex = 0;
    
    chatMessages.innerHTML = '';
    interviewStatus.innerText = 'Session in progress...';
    statsDisplay.style.display = 'flex';
    userInput.disabled = false;
    sendBtn.disabled = false;
    
    askNextQuestion();
}

function askNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        addMessage(currentQuestions[currentQuestionIndex], 'ai');
    } else {
        finishInterview();
    }
}

function finishInterview() {
    addMessage("Thank you! That concludes our mock interview session. You did great!", 'ai');
    interviewStatus.innerText = 'Session Completed';
    userInput.disabled = true;
    sendBtn.disabled = true;
}

sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        userInput.value = '';
        
        // Simulate Feedback
        simulateFeedback(text);
        
        currentQuestionIndex++;
        setTimeout(askNextQuestion, 1000);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

function simulateFeedback(answer) {
    const indicators = statsDisplay.querySelectorAll('.feedback-indicator');
    
    // Simulate scoring logic
    const confidence = Math.floor(Math.random() * (95 - 70) + 70);
    const clarity = Math.floor(Math.random() * (90 - 65) + 65);
    
    indicators[0].innerText = `Confidence: ${confidence}%`;
    indicators[1].innerText = `Communication: ${clarity}%`;
}
