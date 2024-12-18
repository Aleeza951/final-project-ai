// Show/Hide additional details when the button is clicked
function showDetails(detailsId) {
    var details = document.getElementById(detailsId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";  // Show the details
    } else {
        details.style.display = "none";  // Hide the details
    }
}


function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userMessage.trim() === "") return;  // Don't send empty messages

    // Create a user message element
    const userMessageElement = document.createElement('div');
    userMessageElement.textContent = "You: " + userMessage;
    userMessageElement.style.padding = "8px";
    userMessageElement.style.backgroundColor = "#e0f7fa";
    userMessageElement.style.borderRadius = "5px";
    userMessageElement.style.marginBottom = "10px";
    chatBox.appendChild(userMessageElement);

    // Simulate a bot response after a brief delay
    setTimeout(() => {
        const botResponseElement = document.createElement('div');
        botResponseElement.textContent = "Fin: Hello! I am here to help you.";
        botResponseElement.style.padding = "8px";
        botResponseElement.style.backgroundColor = "#f1f1f1";
        botResponseElement.style.borderRadius = "5px";
        botResponseElement.style.marginBottom = "10px";
        chatBox.appendChild(botResponseElement);

        // Scroll the chat to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear the input field
    document.getElementById('user-input').value = '';
}
