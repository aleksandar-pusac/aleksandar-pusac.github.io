$('.navbar-toggler').on('click', function(){

    $('.navbar').toggleClass('open');



});

$('.has-submenu').on('click', function(e){

    e.preventDefault();

    $(this).parents('li').toggleClass('open');

});
