window.addEventListener('load', function () {
    let sub_more = document.querySelector(".sub-more");
    let submenu = document.querySelector(".submenu");

    let more = document.getElementById("more");
    let menu2 = document.querySelector(".menu2");

    if (sub_more && submenu) {
        sub_more.addEventListener("click", function (event) {
            event.preventDefault();
            submenu.classList.toggle("show");
        });
    }

    //xử lí sự kiện bày tỏ cảm xúc
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

    //xử lí đánh dấu mục yêu thích
    $(".fa-bookmark").click(function () {
        var $this = $(this);
        if ($this.hasClass('fa-solid')) {
            $this.removeClass('fa-solid').addClass('fa-regular');
            $this.css('color', 'black');
        } else {
            $this.removeClass('fa-regular').addClass('fa-solid');
            $this.css('color', 'yellow');
            $this.css('backdrop-filter', 'blur(20px)');
            $this.css('background-color', 'rgba(255, 255, 255, 0.1)')
            $this.addClass('beat');
        }

    });

    //xử lí popup comments
    $(".popup").hide();
    $(".icons-content .fa-comment").click(function (event) {
        event.preventDefault();
        let im = $(this).closest('.content').find(".img").attr("src");
        $(".popup-left > img").attr("src", im);
        $(".popup").show();
    });

    //xử lí close tab
    $(".close").click(function () {
        event.preventDefault();
        $(".popup").hide();
    });

    // Xử lý sự kiện click cho phần tử 'more'
    $("#more").click(function () {
        $(".menu2").toggle();
    });

    //xử lí load lại trang
    $("#text-logo").click(function () {
        setTimeout(() => {
            $(this).css('opacity', '0.2');
        }, 200);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });

    //xử lí click thanh thông báo
    $("#notice").click(function () {
        $(".subcontent-noti").toggle();
    });

    // xử lí sự kiện click cho create
    $("#create").click(function () {
        $(" .subcontent-create ").show();

    })
    // xử li sự kiện ho việc đóng tab
    $("#exit").click(function () {
        event.preventDefault();
        $(" .subcontent-create ").hide();
    });

})