const express = require('express');
const cors = require('cors');
const posts = require('./posts');

const app = express();
const port = 3001;

app.use(cors());

app.get('/posts', (req, res) => res.json(posts));

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  // do not handle not found case for simplicity's sake
  res.json(posts.find((post) => post.id === id));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
