// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];
let commentId = 1;

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = commentId;
  commentId++;
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});