window.addEventListener('load', function() {
    // Lấy các phần tử từ DOM
    let notice = document.getElementById("notice");
    let menu = document.querySelector(".subcontent-noti");

    let more = document.getElementById("more");
    let menu2 = document.querySelector(".menu2");

    let create = document.getElementById("create");
    let menucreate = document.querySelector(".subcontent-create");

    let logo = document.getElementById("text-logo");
     

    // Xử lý sự kiện click cho phần tử 'notice'
    notice.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Notice clicked");
        // Chuyển đổi lớp 'show' để hiển thị hoặc ẩn menu
        menu.classList.toggle("show");
    });

    // Xử lý sự kiện click cho phần tử 'more'
    more.addEventListener("click", function(event) {
        event.preventDefault();
        // Chuyển đổi lớp 'show' để hiển thị hoặc ẩn menu2
        menu2.classList.toggle("show");
    });

    // Xử lý sự kiện click cho phần tử 'create'
    create.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Create clicked");
        // Chuyển đổi lớp 'show' để hiển thị hoặc ẩn menucreate
        menucreate.classList.toggle("show");
        exit.classList.toggle("hidden")
    });

    let exit = document.getElementById("exit");

    // Xử lý sự kiện click cho phần tử 'exit'
    exit.addEventListener("click", function(event) {
        event.preventDefault();
        // Chuyển đổi lớp 'hidden' để hiển thị hoặc ẩn phần tử
        exit.classList.toggle("hidden");
    });

    // Xử lý sự kiện click cho phần tử 'logo'
    logo.addEventListener("click", function() {
        console.log("Logo clicked");
        // Thay đổi độ mờ và tải lại trang
        logo.style.opacity = "0.1";
        location.reload();
    });
    logo.addEventListener("click", function() {
        console.log("Logo clicked");
        // Thay đổi độ mờ và tải lại trang
        logo.style.opacity = "0.1";
        location.reload();
    });
        $(".popup").hide();
    
        $(".img").click(function() {
            event.preventDefault();
            let im = $(this).attr("src");
            $(".popup .img").attr("src", im);
            $(".popup").show();
        });
       $(".close").click(function(){
        event.preventDefault();
        $(".popup").hide();
       })
});
