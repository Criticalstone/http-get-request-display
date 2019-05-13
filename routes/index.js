const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});
module.exports = router;
io.on("connection", socket => {
    console.log("New client connected"), setInterval(
        () => getApiAndEmit(socket),
        10000
    );
    socket.on("disconnect", () => console.log("Client disconnected"));
});