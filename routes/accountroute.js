module.exports = {
    route: (app, path) => {
        // Route for account page
        app.get('/account', function(req, res) {
            // Check if user is logged in
            if (!req.session.user) {
                return res.redirect('/');
            }
            
            let filepath = path.resolve('./www/account.html');
            res.sendFile(filepath);
        });
        
        // API route to get current user data
        app.get('/api/user', function(req, res) {
            if (!req.session.user) {
                return res.status(401).json({ error: 'Not logged in' });
            }
            
            res.json({
                success: true,
                user: req.session.user
            });
        });
    }
};
