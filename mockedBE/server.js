const conversations = require("./api/v1/conversations.json");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 9000;

app.use(cors());

app.get("/api/v1/conversations", (req, res) => {
  if (conversations?.length) {
    res.send(conversations);
    res.send(200);
  } else {
    res.send(500);
  }
});

app.get("/api/v1/conversations/:id", (req, res) => {
  const conversationId = req.params.id;
  const conversation = conversations?.find(
    (conversation) => conversation?.id == conversationId
  );
  if (conversation) {
    res.send(conversation);
  } else {
    res.send(conversation);
  }
});

app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
});
