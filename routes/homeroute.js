module.exports = {
    route: (app, path) => {
        // Route for homepage (login form)
        app.get('/', function(req, res) {
            // Find the file to be used as the root of the site
            let filepath = path.resolve('./www/form.html');
            // Send this file back to the client
            res.sendFile(filepath);
        });
    }
};
