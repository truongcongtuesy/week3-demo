module.exports = {
    route: (app, path) => {
        // Hardcoded user data
        const users = [
            { email: "user1@email.com", password: "123" },
            { email: "user2@email.com", password: "456" },
            { email: "admin@email.com", password: "admin123" }
        ];

        // Route to handle login POST request
        app.post('/login', function(req, res) {
            const { email, password } = req.body;
            
            // Check login credentials
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                res.json({ valid: true });
            } else {
                res.json({ valid: false });
            }
        });
    }
};
