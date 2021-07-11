
    $('.nav-toggle').click(function(){
        $(this).toggleClass('nav-toggled');
        $('.nav-links').toggleClass('nav-links-show');
    });
    $(document).keydown(function (e) {
        if (e.key === 'Escape') {
            $('.nav-toggle').removeClass('nav-toggled');
            $('.nav-links').removeClass('nav-links-show');
        }
    });
