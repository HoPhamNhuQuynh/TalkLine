window.addEventListener('load', function () {
        $(".name-contact").on('click', function() {
            // Lấy tên từ phần tử được nhấp vào
            let newname = $(this).find(".info-contact p:first").text();
            // Cập nhật tên trong phần chat
            $("#name").text(newname);
        });
        // tìm kiếm tên người liên hệ và hiển thị đoạn chat với người đó
        $('#searchInput').on('input', function () {
            var searchTerm = $(this).val().toLowerCase();
            if (searchTerm) {
                $('.name-contact').each(function () {
                    var userText = $(this).find('.info-contact p:first').text().toLowerCase(); // Tìm kiếm trong tên
                    if (userText.includes(searchTerm)) {
                        $(this).show(); // Hiển thị phần tử nếu từ khóa tìm thấy
                    } else {
                        $(this).hide(); // Ẩn phần tử nếu từ khóa không tìm thấy
                    }
                });
            } else {
                $('.name-contact').show(); // Hiển thị lại tất cả khi không có từ khóa tìm kiếm
            }
        });


    });
    