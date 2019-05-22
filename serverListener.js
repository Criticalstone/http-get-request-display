const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

server.listen(port, () => console.log(`Listening on port ${port}`));

io.on("connection", socket => {
    console.log("client connected");
    app.get('/message', (req, res) => {
        console.log("data: " + req.query.data);
        socket.emit("message", "" + req.query.data);
        res.send("200 okej");
    })
    socket.on("disconnect", () => console.log("Client disconnected"));
});

