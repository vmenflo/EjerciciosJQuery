$(document).ready(function(){
    $('ul#menu').css("display","none");
 //Al hacer varias líneas de scroll en el documento se debe mostrar el 
 //botón VOLVER ARRIBA. Al volver a la parte superior de la página el 
 //botón se oculta. Al hacer clic sobre el botón nos vamos a la parte 
 //superior de la página. Todo se hace con efectos. 
 //Debes controlar la acumulación de efectos.
 
 $(window).on('scroll',function() {
    if($(this).scrollTop() > 10){ // Si la posición del scroll se mueve
    $('div#volverarriba').fadeIn();
    }else{
    $('div#volverarriba').fadeOut();//Lo quitamos
    }
});

/*
El menú se debe mostrar y ocultar utilizando efectos y debes controlar 
la acumulación de efectos en la cola.*/

$('nav#menu-principal span').on('click', function(){
    $('ul#menu').stop(true,true).slideToggle();
});

/*Funcion para cerrar el menu si hay un resize()*/
$(window).on('resize',function() {
    $("ul#menu").stop(true,true).slideUp(); 
});

/*Cada opción del submenú se muestra con un efecto y al mostrar una se ocultan 
todas las demás.*/

$('ul#menu > li').on('click', function(){
    
    $('ul#menu > li').find('.fa-angle-down').css({
        transform: 'rotate(0deg)',
        transition: 'transform 0.3s ease'
});
    $('ul#menu > li').not(this).children('ul').slideUp();
 
    var icono = $(this).find('.fa-angle-down');
    if ($(this).children('ul').is(':hidden')) {
        $(this).children('ul').slideDown();
        icono.css({
            transform: 'rotate(180deg)',
            transition: 'transform 0.3s ease'
        });
    } else {
        $(this).children('ul').slideUp();
        icono.css({
            transform: 'rotate(0deg)', // Rotación original
            transition: 'transform 0.3s ease'
        });
    }  
   
});
/*

Cuando haces un poco de scroll sobre la página debe aparecer con el efecto que consideres
 más apropiado, la cabecera de la página fijada en la parte superior.*/
 
 
$(window).on('scroll',function() {
    if($(this).scrollTop() > 10){ // Si la posición del scroll se mueve
    $('header#top > div').addClass('fijado');
    }else{
    $('header#top > div').removeClass('fijado');//Lo quitamos
    }
});

/*Para conseguir que al pulsar el botón suba arriba*/
$('div#volverarriba').on('click', function(){

    $('body,html').animate({
        scrollTop:'0px'
    },300);
})

/*Al posicionar el ratón sobre la imagen de un producto debe aparecer otra imagen del mismo producto. 
Cuando el ratón deja de estar sobe la imagen aparece la imagen inicial.*/

$('article.item img').on('mouseenter', function(){
    $(this).stop(true,true).delay(3000).queue(function(){
        var src = $(this).attr('src');
        $(this).attr("src", src.replace('.jpg', '-1.jpg')); 
    })
});

$('article.item img').on('mouseleave', function(){
    var src = $(this).attr('src');
    $(this).stop(true,true).attr("src", src.replace('-1.jpg', '.jpg'));
});


});