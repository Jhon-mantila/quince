
$(document).ready(function () {


    $(".button-down").click(function () {
        $('html,body').animate({
            scrollTop: $(this).parent().next().offset().top
        }, 'slow');
        console.log($(this).parent().next())
    });

    $(".button-up").click(function () {
        $('html,body').animate({
            scrollTop: $(".slide-1").offset().top
        }, 800);
        console.log($(this).parent().next())
    });


    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});