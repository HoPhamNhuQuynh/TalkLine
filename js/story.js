window.addEventListener('load', function () {
    //lấy phần tử từ DOM
    let process = document.querySelector(".process");

    //xử lí sự kiện bày tỏ cảm xúc
    $(".fa-heart").click(function () {
        if ($(this).hasClass('fa-solid')) {
            // Nếu hiện tại là trái tim đầy, chuyển thành trái tim rỗng
            $(this).removeClass('fa-solid').addClass('fa-regular');
            $(this).css('color', 'black');
        } else {
            // Nếu hiện tại là trái tim rỗng, chuyển thành trái tim đầy
            $(this).removeClass('fa-regular').addClass('fa-solid');
            $(this).css('color', 'red');
            $(this).addClass('beat');
        }

    });

    // sự kiện muted
    $(".fa-volume-high").click(function () {
        if ($(this).hasClass('fa-volume-high')) {
            $(this).removeClass('fa-volume-high').addClass('fa-volume-xmark');
        } else {
            $(this).removeClass('fa-volume-xmark').addClass('fa-volume-high');
        }
    });

    // sự kiện play-pause
    $(".fa-play").click(function () {
        if ($(this).hasClass('fa-play')) {
            $(this).removeClass('fa-play').addClass('fa-pause');
        } else {
            $(this).removeClass('fa-pause').addClass('fa-play');
        }
    });


    //kết hợp với các btn trên thanh điều khiển
    let pause = false;
    $('#next-str').click(function () {
        // move to next str
        alert("next");
    });
    $('#pre-str').click(function () {
        // move to previous str
        alert("previous");
    });
    $(".fa-play").click(function () {
        pause = !pause;
    });

    function timerBar(dura) {
        const intervaltime = dura / 100;
        let width = 0; //biến này sẽ chạy cho đến khi hết thanh khi đó width tương ứng 100%
        function updateBar() {
            if (!pause) {
                if (width >= 100) {
                    // Xử lý tự động chuyến đến str tiếp theo
                } else {
                    width++;
                    process.style.width = width + '%'; // Chiều dài thanh tương ứng với việc chạy timer
                    requestAnimationFrame(updateBar);
                }
            } else {
                requestAnimationFrame(updateBar); // Tái sử dụng requestAnimationFrame khi tạm dừng
            }
        }
        requestAnimationFrame(updateBar);
    };

    timerBar(40000);

});