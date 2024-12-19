// mein.js

// Function to start a chat trial
function startChat() {
    alert("Welcome to the Smart Chat Free Trial!");
}

// Function to view demo
function viewDemo() {
    alert("Viewing demo...");
}

// Function to toggle the visibility of detail sections
function showDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement.classList.contains("hidden")) {
        detailElement.classList.remove("hidden");
    } else {
        detailElement.classList.add("hidden");
    }
}

// Function to send a message in the chatbot
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Add user's message to chat
        const userMessageElement = document.createElement("div");
        userMessageElement.className = "user-message";
        userMessageElement.textContent = userMessage;
        chatBox.appendChild(userMessageElement);

        // Clear input
        userInput.value = "";

        // Simulate AI response
        const aiResponse = generateAIResponse(userMessage);
        const aiMessageElement = document.createElement("div");
        aiMessageElement.className = "ai-message";
        aiMessageElement.textContent = aiResponse;
        chatBox.appendChild(aiMessageElement);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Function to generate AI response
function generateAIResponse(userMessage) {
    // Simple responses based on user's input
    const responses = {
        "hello": "Hi! How can I help you today?",
        "help": "Sure! What do you need help with?",
        "bye": "Goodbye! Have a great day!",
    };
    return responses[userMessage.toLowerCase()] || "I'm not sure I understand. Can you rephrase?";
}

