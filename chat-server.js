const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory storage for chat messages
const chats = [];

app.use(bodyParser.json());

// Endpoint to get all chat messages
app.get('/chats', (req, res) => {
  res.json(chats);
});

// Endpoint to post a new chat message
app.post('/chats', (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'Username and message are required' });
  }

  const newChat = { username, message, timestamp: new Date() };
  chats.push(newChat);

  res.status(201).json(newChat);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
