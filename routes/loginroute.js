const userData = require('../userData');

module.exports = {
    route: (app, path) => {
        // Route to handle login POST request
        app.post('/login', function(req, res) {
            console.log('Login request received:', req.body); // Debug log
            const { email, password } = req.body;
            
            // Check login credentials using userData module
            const user = userData.findUserByCredentials(email, password);
            console.log('User found:', user ? 'Yes' : 'No'); // Debug log
            
            if (user) {
                // Save user info in session
                req.session.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    avatar: user.avatar
                };
                console.log('Session saved:', req.session.user); // Debug log
                res.json({ valid: true });
            } else {
                res.json({ valid: false });
            }
        });
        
        // Logout route
        app.post('/logout', function(req, res) {
            req.session.destroy((err) => {
                if (err) {
                    return res.json({ success: false, message: 'Logout failed' });
                }
                res.json({ success: true, message: 'Logged out successfully' });
            });
        });
    }
};
