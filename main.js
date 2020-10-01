$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});

//$('.hamburger').on('click', function () {
   // $('.menu').addClass('open');
 // });
  
  $( '.nav-link' ).on("click", function(){
    $('.top-nav').removeClass('open');
    $('.menu-toggler').removeClass('open');
  });

  $( '.up' ).on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, 600); 
  });
