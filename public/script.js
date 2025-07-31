$(document).ready(function() {
    // Xử lý sự kiện submit form
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Ngăn form submit mặc định
        
        // Ẩn tất cả messages trước đó
        $('#errormsg').removeClass('showmessage').addClass('hidemessage');
        $('#successmsg').removeClass('showmessage').addClass('hidemessage');
        
        // Lấy dữ liệu từ form
        const email = $('#email').val();
        const password = $('#password').val();
        
        // Gửi AJAX POST request
        $.post('/login', {
            email: email,
            password: password
        })
        .done(function(data) {
            // Success callback
            if (data.valid === true) {
                // Hiển thị thông báo thành công
                $('#successmsg').removeClass('hidemessage').addClass('showmessage');
                
                // Chuyển hướng đến trang account sau 2 giây
                setTimeout(function() {
                    window.location.href = '/account';
                }, 2000);
            } else {
                // Hiển thị thông báo lỗi
                $('#errormsg').removeClass('hidemessage').addClass('showmessage');
            }
        })
        .fail(function(xhr, status, error) {
            // Error callback
            console.error('Lỗi AJAX:', error);
            $('#errormsg').text('Có lỗi xảy ra. Vui lòng thử lại.');
            $('#errormsg').removeClass('hidemessage').addClass('showmessage');
        });
    });
    
    // Ẩn messages khi user bắt đầu gõ
    $('#email, #password').on('input', function() {
        $('#errormsg').removeClass('showmessage').addClass('hidemessage');
        $('#successmsg').removeClass('showmessage').addClass('hidemessage');
    });
});
