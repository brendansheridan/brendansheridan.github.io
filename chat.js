class CustomChat {
    constructor() {
        this.chatWindow = document.getElementById('chat-window');
        this.chatLaunchBtn = document.getElementById('chat-launch-btn');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.sendMessageBtn = document.getElementById('send-message-btn');
        this.minimizeBtn = document.querySelector('.minimize-btn');
        this.closeBtn = document.querySelector('.close-btn');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Launch button click
        this.chatLaunchBtn.addEventListener('click', () => {
            this.showChat();
        });

        // Minimize button click
        this.minimizeBtn.addEventListener('click', () => {
            this.hideChat();
        });

        // Close button click
        this.closeBtn.addEventListener('click', () => {
            this.hideChat();
        });

        // Send message button click
        this.sendMessageBtn.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key press in input
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    showChat() {
        this.chatWindow.classList.remove('hidden');
        this.chatLaunchBtn.classList.add('hidden');
        
        // Initialize the chat session here
        // This is where you would typically call the Messaging for Web API
        // to start a new chat session
    }

    hideChat() {
        this.chatWindow.classList.add('hidden');
        this.chatLaunchBtn.classList.remove('hidden');
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        // Add visitor message to chat
        this.addMessageToChat(message, 'visitor');
        
        // Clear input
        this.chatInput.value = '';
        
        // Here you would typically send the message to the Messaging for Web API
        // and handle the response
    }

    addMessageToChat(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        this.chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the chat when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const chat = new CustomChat();
}); 