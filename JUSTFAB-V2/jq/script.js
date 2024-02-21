$(document).ready(function(){

    /*Menu deslizante*/
    $('#menu-principal').on('click', function(){
        $('ul#menu').animate({left: '0px'}, 'slow');
        $('div#oscuro').fadeIn('slow');
    })
    $('div#oscuro').on('click', function(){
        $('ul#menu').animate({left: '-20rem'}, 'slow');
        $(this).fadeOut();
    })

    /*Controlar que cuando se ponga sobre una imagen aparezca el botón comprar*/
    $('.item picture').on('mouseenter', function(){
        $(this).next('span').delay(300).fadeIn('slow');
    })
    $('.item picture').on('mouseleave', function(){
        $(this).next('span').fadeOut();
    })


});