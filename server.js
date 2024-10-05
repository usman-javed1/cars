const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app's build folder
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing by returning index.html for all routes (client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, hostname, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://${hostname}:${port}`);
});
