$(document).ready(function() {
    // Handle form submit event
    $('#loginForm').on('submit', function(e) {
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
            // Success callback
            if (data.valid === true) {
                // Show success message
                $('#successmsg').removeClass('hidemessage').addClass('showmessage');
                
                // Redirect to account page after 2 seconds
                setTimeout(function() {
                    window.location.href = '/account';
                }, 2000);
            } else {
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
