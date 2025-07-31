module.exports = {
    route: (app, path) => {
        // Route for account page
        app.get('/account', function(req, res) {
            let filepath = path.resolve('./www/account.html');
            res.sendFile(filepath);
        });
    }
};
