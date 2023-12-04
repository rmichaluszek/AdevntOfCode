const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`[Server] Server is listening on port: ${port}`);
});