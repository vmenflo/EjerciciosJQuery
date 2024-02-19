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
    $('ul#menu').slideToggle();
});

/*Cada opción del submenú se muestra con un efecto y al mostrar una se ocultan 
todas las demás.*/

$('ul#menu > li').on('click', function(){
    $('ul#menu > li').not(this).children('ul').slideUp();

    $(this).children('ul').slideToggle();
   
});

});