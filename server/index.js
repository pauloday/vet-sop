const Console = require('console');
const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const distDir = path.join(__dirname, '../dist');
const app = express();

app.use(express.static(distDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  Console.log(`listening on port ${port}`);
});
