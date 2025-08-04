const userData = require('../userData');

module.exports = {
    route: (app, path) => {
        // Route for edit profile page
        app.get('/edit-profile', function(req, res) {
            // Check if user is logged in
            if (!req.session.user) {
                return res.redirect('/');
            }
            
            let filepath = path.resolve('./www/edit-profile.html');
            res.sendFile(filepath);
        });
        
        // API route to update user profile
        app.post('/api/update-profile', function(req, res) {
            if (!req.session.user) {
                return res.status(401).json({ error: 'Not logged in' });
            }
            
            const { name, avatar } = req.body;
            const userId = req.session.user.id;
            
            // Validate input
            if (!name || name.trim().length === 0) {
                return res.json({ success: false, message: 'Name is required' });
            }
            
            // Update user data
            const updatedUser = userData.updateUserProfile(userId, {
                name: name.trim(),
                avatar: avatar || req.session.user.avatar
            });
            
            if (updatedUser) {
                // Update session data
                req.session.user.name = updatedUser.name;
                req.session.user.avatar = updatedUser.avatar;
                
                res.json({ 
                    success: true, 
                    message: 'Profile updated successfully',
                    user: req.session.user
                });
            } else {
                res.json({ success: false, message: 'Failed to update profile' });
            }
        });
    }
};
