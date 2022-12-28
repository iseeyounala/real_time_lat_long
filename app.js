const express = require("express");
const socketio = require("socket.io");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/location", (req, res) => {
  res.render("location");
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("server is running...");
});

// Initialize socket for the server
const io = socketio(server);

io.on("connection", socket => {
  console.log("New user connected");
  socket.on("get_data", data => {
    io.sockets.emit("sent_data", data)
    console.log(data)
  })
});

