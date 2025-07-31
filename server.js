const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Import routes
require('./routes/homeroute.js').route(app, path);
require('./routes/accountroute.js').route(app, path);
require('./routes/loginroute.js').route(app, path);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
