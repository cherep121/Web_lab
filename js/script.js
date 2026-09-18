$(document).ready(function () {
    $('.nav-toggle-btn').on('click', function () {

        $('.nav').slideToggle(250);

        $(this).toggleClass('is-active');
    });

    $('.nav__link').on('click', function () {
        if ($(window).width() <= 767) {
            $('.nav').slideUp(250);
            $('.nav-toggle-btn').removeClass('is-active');
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 767) {
            $('.nav').removeAttr('style');
            $('.nav-toggle-btn').removeClass('is-active');
        }
    });

});