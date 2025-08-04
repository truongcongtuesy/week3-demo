$(document).ready(function() {
    console.log('Script loaded successfully!'); // Debug log
    
    // Handle form submit event
    $('#loginForm').on('submit', function(e) {
        console.log('Form submitted!'); // Debug log
        e.preventDefault(); // Prevent default form submission
        
        // Hide all previous messages
        $('#errormsg').removeClass('showmessage').addClass('hidemessage');
        $('#successmsg').removeClass('showmessage').addClass('hidemessage');
        
        // Get form data
        const email = $('#email').val();
        const password = $('#password').val();
        
        // Send AJAX POST request
        $.post('/login', {
            email: email,
            password: password
        })
        .done(function(data) {
            console.log('Login response:', data); // Debug log
            // Success callback
            if (data.valid === true) {
                console.log('Login successful, showing message and redirecting...'); // Debug log
                // Show success message
                $('#successmsg').removeClass('hidemessage').addClass('showmessage');
                
                // Redirect immediately for testing
                console.log('Redirecting to /account...'); // Debug log
                window.location.href = '/account';
            } else {
                console.log('Login failed'); // Debug log
                // Show error message
                $('#errormsg').removeClass('hidemessage').addClass('showmessage');
            }
        })
        .fail(function(xhr, status, error) {
            // Error callback
            console.error('AJAX Error:', error);
            $('#errormsg').text('An error occurred. Please try again.');
            $('#errormsg').removeClass('hidemessage').addClass('showmessage');
        });
    });
    
    // Hide messages when user starts typing
    $('#email, #password').on('input', function() {
        $('#errormsg').removeClass('showmessage').addClass('hidemessage');
        $('#successmsg').removeClass('showmessage').addClass('hidemessage');
    });
});
