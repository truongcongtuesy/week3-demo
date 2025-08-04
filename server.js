const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 3000;

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware
app.use(session({
    secret: 'week3-workshop-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60 } // 1 hour
}));

// Serve static files
app.use(express.static('public'));

// Import routes
require('./routes/homeroute.js').route(app, path);
require('./routes/accountroute.js').route(app, path);
require('./routes/loginroute.js').route(app, path);
require('./routes/editprofileroute.js').route(app, path);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
