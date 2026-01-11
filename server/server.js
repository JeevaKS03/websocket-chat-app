const WebSocket = require("ws");
const wss = new WebSocket.Server({ host:"0.0.0.0",port: 8080 });
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (data) => {
  const parsed = JSON.parse(data.toString());
  const payload = JSON.stringify({
      username: parsed.username,
      message: parsed.message
    });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
});
