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
        // Uso las funciones callbacks para controlar los procesos en cola
        $(this).next('span').stop(true, true).delay(300).fadeIn('slow', function() {
            $(this).delay(1000).fadeOut('slow');
        });
    });

    /*Slider*/
    $("#slider").lightSlider({
        item:1,
        auto:true,
        loop:true,
        pause:5000,

      }); 

});