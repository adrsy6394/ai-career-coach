/**
 * AI Career Coach - Chat Assistant Logic
 * Handles general career questions and markdown-like rendering.
 */

const assistantMessages = document.getElementById('assistantMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');

// Auto-expand textarea
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

function addChatMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message message-${sender}`;
    
    // Simulate Markdown Rendering (Simple)
    if (sender === 'ai') {
        msgDiv.innerHTML = formatAIResponse(text);
    } else {
        msgDiv.innerText = text;
    }
    
    assistantMessages.appendChild(msgDiv);
    assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function formatAIResponse(text) {
    // Simple Bold
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Simple Code
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Simple Code Blocks
    formatted = formatted.replace(/```(.*?)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    
    return formatted;
}

function handleSend() {
    const text = chatInput.value.trim();
    if (text) {
        addChatMessage(text, 'user');
        chatInput.value = '';
        chatInput.style.height = 'auto';
        
        // Simulate Assistant Thinking
        setTimeout(() => {
            const response = generateSimulationResponse(text);
            addChatMessage(response, 'ai');
        }, 1000);
    }
}

function generateSimulationResponse(query) {
    if (query.toLowerCase().includes('react')) {
        return "React is a powerful library. To start with hooks, you should learn `useState` and `useEffect`. \n\nExample code:\n```javascript\nconst [count, setCount] = useState(0);\n```\n**Pro Tip:** Always keep your components small and reusable.";
    }
    
    if (query.toLowerCase().includes('resume')) {
        return "To improve your resume, focus on **quantifiable achievements**. Use the STAR method: Situation, Task, Action, Result. \n\nHave you tried our `Resume Analyzer` yet?";
    }

    return "That's a great question about **career growth**. Generally, I recommend building a strong portfolio and networking on LinkedIn. Would you like a specific `roadmap` for a role?";
}

sendChatBtn.addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

window.newChat = () => {
    assistantMessages.innerHTML = '';
    addChatMessage("Hello! Starting a new conversation. How can I help you today?", 'ai');
};
