window.addEventListener('load', function () {
    // Lấy các phần tử từ DOM
    let notice = document.getElementById("notice");
    let menu = document.querySelector(".subcontent-noti");

    let more = document.getElementById("more");
    let menu2 = document.querySelector(".menu2");


    let logo = document.getElementById("text-logo");
    // lấy tất cả các thẻ có class là slide ra
    let slide = document.getElementsByClassName("slide");

    // Xử lý sự kiện click cho phần tử 'notice'
    notice.addEventListener("click", function (event) {
        event.preventDefault();
        // Chuyển đổi lớp 'show' để hiển thị hoặc ẩn menu
        menu.classList.toggle("show");
    });
    // Xử lý sự kiện click cho phần tử 'more'
    more.addEventListener("click", function (event) {
        event.preventDefault();
        // Chuyển đổi lớp 'show' để hiển thị hoặc ẩn menu2
        menu2.classList.toggle("show");
    });
    // xử lí sự kiện click cho create
    $("#create").click(function () {
        $(".subcontent-create").show();

    })
    // xử li sự kiện ho việc đóng tab
    $("#exit").click(function () {
        event.preventDefault();
        $(".subcontent-create").hide();
    });

    // Xử lý sự kiện click cho phần tử 'logo'
    logo.addEventListener("click", function () {
        console.log("Logo clicked");
        // Thay đổi độ mờ và tải lại trang
        logo.style.opacity = "0.1";
        location.reload();
    });
    $(".popup").hide();
    $(".popup2").hide();
    $(".fa-comment").click(function (event) {
        event.preventDefault();
        let im = $(this).closest('.content').find(".img").attr("src");
        $(".popup-left > img").attr("src", im);
        $(".popup").show();
    });

    $(".close").click(function () {
        event.preventDefault();
        $(".popup").hide();
    });

    //chỉ focus những hình ảnh trong bài viết và tin lướt thôi
    $(".surf-img>img,.body-content>img").click(function (event) {
        event.preventDefault();
        let im = $(this).attr("src");
        $(".popup2 .img").attr("src", im);
        $(".popup2").show();
    });

    $(".close").click(function () {
        event.preventDefault();
        $(".popup").hide();
        $(".popup2").hide();
    })

    //thay đổi hình surf ở trang chủ
    let i = 0;
    this.setInterval(() => {
        // lấy hình đang hiển thị ra
        let current = document.querySelector(".active");
        current.classList.remove("active");
        i++;
        if (i === 10) {
            i = 0;
        }
        slide[i].classList.add("active");
    }, 3000)

    $("#switch-mode").click(function (e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

        // Chuyển đổi chế độ tối
        if ($("body").hasClass("dark-mode")) {
            $("body").removeClass("dark-mode");
            $(".menu>ul > li>a").css({
                "background-color": "white",
                "color": "black"
            });
            $(".addcomment").css({
                "background-color": "white",
                "color": "black"

            })
            $(".sub-mes").css({
                "background-color": "white",
                "color": "black"

            })
            $(".fa-face-smile").css({
                "color": "black"
            })
            $(".fa-thumbs-up").css({
                "color": "black"
            })
            $("#switch-mode i").removeClass("fa-moon").addClass("fa-sun");
        } else {
            $("body").addClass("dark-mode");
            $(".menu>ul > li>a").css({
                "background-color": "black",
                "color": "white"
            });
            $(".addcomment").css({
                "background-color": "black",
                "color": "white"

            });
            $(".sub-mes").css({
                "background-color": "black",

            })
            $(".body-chat").css({
                "color": "black"

            })
            $(".fa-face-smile").css({
                "color": "white"
            })
            $(".fa-thumbs-up").css({
                "color": "white"
            })
            $("#switch-mode i").removeClass("fa-sun").addClass("fa-moon");
        }
    });


    $('#searchInput').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();

        if (searchTerm) {
            $('#userList').show(); // Hiển thị danh sách khi có từ khóa tìm kiếm
            $('#userList li').each(function () {
                var userText = $(this).text().toLowerCase();
                if (userText.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else {
            $('#userList').hide(); // Ẩn danh sách khi không có từ khóa tìm kiếm
        }
    });


    $(".arrow1").hide();
    var $imgStory = $('.img-story');

    var itemWidth = $imgStory.outerWidth();
    var currentIndex = 0;
    $('.arrow2').on('click', function () {
        event.preventDefault();

        currentIndex++;
        // Hiệu ứng trượt cho user9
        var newOffset = -currentIndex * itemWidth;
        $("#user1").css('transform', 'translateX(' + newOffset + 'px)')

        if (currentIndex == 1) { // Điều chỉnh theo yêu cầu cụ thể
            $("#user1").slideUp(200); // Ẩn phần tử dọc
        }
        $("#user9").show('');
        $(".arrow1").show();
    });
    $('.arrow1').on('click', function () {
        event.preventDefault();
        if (currentIndex > 0)
            currentIndex--;
        // Hiệu ứng trượt cho user9
        var newOffset = -currentIndex * itemWidth;

        $("#user1").css('transform', 'translateX(' + newOffset + 'px)', function () {

        })
        if (currentIndex == 0) { // Điều chỉnh theo yêu cầu
            $("#user1").slideDown(200); // Hiển thị phần tử dọc   
            $("#user9").hide('slow');
            $(".arrow1").show();
        }
    });
    $(".icons-content .fa-heart").click(function () {
        var $this = $(this);
        if ($this.hasClass('fa-solid')) {
            // Nếu hiện tại là trái tim đầy, chuyển thành trái tim rỗng
            $this.removeClass('fa-solid').addClass('fa-regular');
            $this.css('color', 'black');
        } else {
            // Nếu hiện tại là trái tim rỗng, chuyển thành trái tim đầy
            $this.removeClass('fa-regular').addClass('fa-solid');
            $this.css('color', 'red');
            $this.addClass('beat');
        }

    });

    $(".icons-content .fa-bookmark").click(function () {
        var $this = $(this);
        if ($this.hasClass('fa-solid')) {
            // Nếu hiện tại là trái tim đầy, chuyển thành trái tim rỗng
            $this.removeClass('fa-solid').addClass('fa-regular');
            $this.css('color', 'black');
        } else {
            // Nếu hiện tại là trái tim rỗng, chuyển thành trái tim đầy
            $this.removeClass('fa-regular').addClass('fa-solid');
            $this.css('color', 'yellow');
            $this.css('backdrop-filter', 'blur(20px)');
            $this.css('background-color', 'rgba(255, 255, 255, 0.1)')
            $this.addClass('beat');
        }

    });

    $(".sub-mes").hide();
    $(".name-contact").click(function () {
        $(".sub-mes").show();
    })
    $(".exit").click(function () {
        $(".sub-mes").hide();
    })
    $(".name-contact").click(function () {
        let newname = $(this).find("span").text();
        $("#name").text(newname)
    })

    $('#log-out').click(function () {
        window.location.href = "index.html";

    });


});




