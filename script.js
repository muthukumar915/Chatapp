// script.js
const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

// Predefined responses for the chatbot
const responses = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hello! What can I do for you?",
    "how are you?": "I'm just a bot, but I'm doing great! How about you?",
    "what is  your name?": "I'm a simple chatbot created to assist you.",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I don't understand that. Can you rephrase?"
};

// Function to add a message to the chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to get a response from the bot
function getBotResponse(userInput) {
    const normalizedInput = userInput.toLowerCase();
    return responses[normalizedInput] || responses["default"];
}

// Event listener for form submission
chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = chatInput.value.trim();
    if (userInput === "") return;

    // Add user message to chat
    addMessage(userInput, 'user');

    // Get bot response and add to chat
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500);

    // Clear input field
    chatInput.value = '';
    chatInput.focus();
});
