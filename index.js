$(() => {

    $('#scroll-down').click (() => {

        $('html, body').animate({scrollTop: $('section.scroll').offset().top }, 'slow');

        return false;
    });
    
});