const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }

  console.log(`Sever is running on port ${PORT}`);
});
