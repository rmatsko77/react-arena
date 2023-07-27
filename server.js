const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Define a catch-all route to serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
