$(document).ready(function () {
    
    // Các hàm kiểm tra điều kiện pass an toàn, bảo mật
    function isValidLength(password) {
        return password.length >= 8;
    };

    function hasNumber(password) {
        return /\d/.test(password);
    };

    function hasLowerCase(password) {
        return /[a-z]/.test(password);
    };

    function hasUpperCase(password) {
        return /[A-Z]/.test(password);
    };

    function hasSpecialCharacter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }


    // Chuyển đổi giữa màn hình đăng nhập và đăng ký
    $('.login-link').on('click', function () {
        $('.log-reg').addClass('active');
    });

    $('.register-link').on('click', function () {
        $('.log-reg').removeClass('active');
    });

    // Chuyển đổi hiển thị mật khẩu
    $('.input-box > i').on('click', function () {
        var input = $(this).siblings('input');
        var type = input.attr('type');
        if (type === 'password') {
            input.attr('type', 'text');
            $(this).addClass('fa-eye-slash').removeClass('fa-eye');
        } else {
            input.attr('type', 'password');
            $(this).addClass('fa-eye').removeClass('fa-eye-slash');
        }
    });

    // kiểm tra định dạng email
    $('input[name="email"]').on('blur', function () {
        var email = $(this).val();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        }
    });


    $('.logins').on('submit', function login(e) {
        e.preventDefault();
        // lấy giá trị do người dùng nhập từ bàn phím
        var emailIn = document.getElementById("email-login").value;
        var passwordIn = document.getElementById("password-login").value;

        if (!emailIn || !passwordIn) {
            alert("Please enter all required information.");
            return;
        }
        // lấy dữ liệu người dùng đã lưu trước đó
        var storeUser = JSON.parse(localStorage.getItem('user'));

        // check login infor that entered from user
        if (storeUser && storeUser.email === emailIn && storeUser.password === passwordIn) {
            alert("Log-in successfull!");
            window.location.href = "home.html";
        }
        else {
            alert("Invalid username or password!!!\nIf you've not any account, please click into register link below!")
        }

    });

    $('.register').on('submit', function register(e) {
        e.preventDefault();
        // lấy giá trị do người dùng nhập từ bàn phím
        var usernameIn = $('#username').val();
        var email = $('#email-reg').val();
        var password = $('#password-reg').val();

        // Kiểm tra giá trị các biến
        console.log('Username:', usernameIn);
        console.log('Email:', email);
        console.log('Password:', password);

        if (!email || !password || !usernameIn) {
            alert("Please enter all required information.");
        }
        else {
            if (!isValidLength(password)) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            if (!hasUpperCase(password)) {
                alert("Password must contain at least one uppercase letter.");
                return;
            }

            if (!hasLowerCase(password)) {
                alert("Password must contain at least one lowercase letter.");
                return;
            }

            if (!hasNumber(password)) {
                alert("Password must contain at least one number.");
                return;
            }

            if (!hasSpecialCharacter(password)) {
                alert("Password must contain at least one special character.");
                return;
            }

            var user = {
                email: email,
                password: password
            };
            // gom nhóm các thông tin của 1 người dùng vào json
            // lưu thông tin vào bộ nhớ web của trình duyệt
            localStorage.setItem('user', JSON.stringify(user));
            alert("Register successfull!");
            window.location.href = "login.html";
        }
    });

});
