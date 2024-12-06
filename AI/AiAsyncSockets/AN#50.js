//5. Basic structure for handling WebSocket events (conceptual - requires a WebSocket server):

// Assuming a WebSocket server is running
const socket = new WebSocket("ws://your-websocket-server");

socket.onopen = () => {
    console.log("Connected to WebSocket server");
};

socket.onmessage = event => {  // Event triggered when new message arrives
    const message = JSON.parse(event.data); // Assuming JSON format
    // ... handle incoming message (update chat, user list, etc.) ...
};

socket.onclose = () => {
    console.log("Disconnected from WebSocket server");
};

function sendMessageToServer(message) {
    socket.send(JSON.stringify(message));
}
