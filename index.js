const express = require('express');
const cors = require('cors');
const posts = require('./posts');

const app = express();
const port = 3001;

app.use(cors());

app.get('/posts', (req, res) => res.json(posts));

app.listen(port, () => console.log(`Listening on port ${port}`));
