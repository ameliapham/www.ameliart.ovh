console.log("coucou");




$(() => {

    console.log("coucou2");

    $('#scroll-down').click (() => {

        console.log("click!");

      $('html, body').animate({scrollTop: $('section.scroll').offset().top }, 'slow');

      return false;
    });


});