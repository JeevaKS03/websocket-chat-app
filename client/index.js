const socket = new WebSocket("ws://localhost:8080"); //Websocket Server URL
socket.onopen = () => {
  console.log("Connected to server");
};
socket.onmessage = (event) => {
  console.log("Message from server:", event.data);
  const data = JSON.parse(event.data);
  const msg=document.createElement('h3');
  msg.textContent=`${data.username}: ${data.message}`;
  document.getElementById("messages").appendChild(msg);
};
function sendMessage(e) {
  e.preventDefault();
  const inp=document.getElementById("text");
  const message=inp.value;
  const user=document.getElementById("user");
  const username=user.value;
  socket.send( JSON.stringify({
     username,
     message
  }));
}
socket.onclose = () => {
  console.log("Disconnected");
};

