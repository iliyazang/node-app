const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: beige;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h1 {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1> Hello World!</h1>
        <img src="/giphy.gif" alt="happy coding" width="300">
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
