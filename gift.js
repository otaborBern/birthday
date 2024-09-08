function submitMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageContainer = document.getElementById('messages');
        const newMessage = document.createElement('p');
        newMessage.textContent = messageText;
        messageContainer.appendChild(newMessage);

        messageInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a message before submitting.');
    }
}
