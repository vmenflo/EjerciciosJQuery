/*
1) (3,5 puntos) MENÚ PRINCIPAL
a) (0,5puntos) Al hacer clic sobre el icono de la hamburguesa se deberá mostrar el
menú principal del sitio con un efecto de persiana. Controla la acumulación de
efectos.
b) (0,5puntos) La raya central del icono de hamburguesa del menú principal es más
corta que el resto. Al hacer clic sobre dicho icono esta raya crece hasta alcanzar el
mismo ancho que el resto de líneas con un efecto de animación. Controla la
acumulación de efectos.
c) (0,5puntos) Además, al hacer clic sobre el icono de la hamburguesa ésta debe
cambiar de color. Utiliza un efecto de animación para que este cambio se realice de
forma progresiva. Controla la acumulación de efectos. No olvides que necesitas
utilizar un plugin para poder realizar este tipo de animación.
d) (0,5 puntos) Al hacer de nuevo clic sobre el icono de hamburguesa todo debe
volver al estado inicial haciendo uso de efectos de animación. La hamburguesa
recuperará su color de manera progresiva, el tamaño de la línea central volverá a
ser más corta y el menú se ocultará con un efecto de persiana. Controla la
acumulación de efectos. Haz esto también al hacer scroll en el documento.
e) (1punto) Al hacer clic sobre la opción del menú “Alfombras Vinílicas”, se tiene que
desplegar el submenú asociado con un efecto de desplazamiento desde la
izquierda. Además, el icono + debe transformarse en el icono -. Al volver a hacer
clic sobre el icono -, se debe realizar el efecto contrario y el - cambiarse por un +.
f) (0,5puntos) Al redimensionar la ventana se tiene que borrar todo el código
insertado en tiempo de ejecución asociado al menú para evitar fallos. Utiliza para
ello el método removeAttr.
*/ 

$(document).ready(function(){
    var menuabierto =false;
    
    $('#hamburger').on('click',function(){
        if(!menuabierto){
            $('ul#menu-toggle').slideDown('slow');
        
        $('.line-ham:nth-child(2)').stop().animate({
            'width':'65%'
        },400);

        $(this).stop().animate({
            'background-color':'#ff0000'
        },500);
        } else {
            $('ul#menu-toggle').slideUp('slow');
            
            $('.line-ham:nth-child(2)').stop().animate({
                'width':'50%'
            },400);
    
            $(this).stop().animate({
                'background-color':'#e3e3e3'
            },500);
        }
        menuabierto=!menuabierto;
    })
    
});

$(document).ready(function(){
    var menuabierto =false;
    
    $('#hamburger').on('click',function(){
        if(!menuabierto){
            $('ul#menu-toggle').slideDown('slow');
        
        $('.line-ham:nth-child(2)').stop().animate({
            'width':'65%'
        },400);

        $(this).stop().animate({
            'background-color':'#ff0000'
        },500);
        } else {
            $('ul#menu-toggle').slideUp('slow');
            
            $('.line-ham:nth-child(2)').stop().animate({
                'width':'50%'
            },400);
    
            $(this).stop().animate({
                'background-color':'#e3e3e3'
            },500);
        }
        menuabierto=!menuabierto;
    })
    
});

$(window).on('scroll',function(){
    
    if($(this).scrollTop()>5){
        $('ul#menu-toggle').slideUp('slow');
            
         $('.line-ham:nth-child(2)').stop().animate({
                'width':'50%'
        },400);
    
        $('#hamburger').stop().animate({
                'background-color':'#e3e3e3'
        },500);
    }
    
});

$(document).ready(function(){
    $('#menu-toggle > li:nth-child(3)').on('click', function(){
        var submenu = $('#menu-toggle > li:nth-child(3) > ul');
        
        if(submenu.is(':visible')) {
            submenu.css({
                'left':'-50vw',
                'display':'none',
            });
            $('#menu-toggle > li:nth-child(3) > span').html('+');
        } else {
            submenu.css({
                'left':'0',
                'display':'flex',
            });
            $('#menu-toggle > li:nth-child(3) > span').html('-');
        }
    });
});
$(window).resize(function() {
    // Elimina el atributo "style" que contiene los estilos aplicados al menú
    $('ul#menu-toggle').removeAttr('style');
    $('#hamburger').removeAttr('style');
    $('.line-ham').removeAttr('style');
});

/*
2) (1,5 puntos) BARRA SOCIAL y CHAT
a) (0,25 puntos) Al cargar la página, la barra social aparece en el lateral derecho con
un efecto de cambio de opacidad.
b) (0,25 puntos) Al cargar la página, la pestaña del chat aparece en la parte inferior
izquierda con un efecto de cambio de opacidad.
c) (0,5 puntos) Al hacer clic sobre la pestaña del chat debe aparecer la ventana del
chat completa con un efecto de persiana deslizante hacia arriba.
d) (0,5 puntos) Al hacer clic sobre la X de la cabecera de la ventana de chat, debe
ocultarse el chat con un efecto de persiana deslizante hacia abajo.
*/

$(document).ready(function(){ 
    $('#barra-social').fadeIn('slow');
    $('nav#barra-social > ul > li i').animate({
        'opacity':'0.8'
    },500);

    $('div#chat').fadeIn('slow');
    $('div#chat').animate({
        'opacity':'0.8'
    },500);

    $('div#chat').on('click',function(){
       if($('#window-chat').is(':hidden')){
            $('header#header-chat2').css('display','block');
            $('#window-chat').slideDown('slow');
       }/* else {
            $('#window-chat').slideUp('slow');
            $('header#header-chat2').css('display','none');
        }*/
        
    })
    $('header#header-chat2 > span').on('click',function(){
        $('#window-chat').slideUp('slow');
        $('header#header-chat2').css('display','none');
    })
    
});

/*
) (1 punto) BOTÓN DE COMPRA
a) (0,5 puntos) Al posicionar el ratón sobre cualquier artículo que contenga un
producto, se debe mostrar en flex, el botón de compra.
b) (0,5 puntos) Cuando el ratón deja de estar sobre dicho artículo, el botón de
compra desaparece con un efecto deslizante hacia arriba.*/

$(document).ready(function(){
    $('.producto').on('mouseenter',function(){
        $(this).find('a').stop().fadeIn();
    })
    $('.producto').on('mouseleave',function(){
        $(this).find('a').stop().fadeOut();
    })
})

/*
(1,5 puntos) FLECHA y CABECERA
a) (0,5 puntos) Al hacer un poco de scroll sobre la página aparecerá la flecha “go-up”
en la parte inferior derecha con un efecto de cambio de opacidad. Controla la
acumulación de efectos.
b) (0,5 puntos) Además, al hacer scroll, la cabecera quedará en una posición fija en
la parte superior con algo de opacidad. Controla la acumulación de efectos.
c) (0,5 puntos) Al hacer clic sobre la flecha, nos posicionamos al principio de la
página con un efecto de animación. La cabecera debe recuperar su estado inicial y
la flecha debe desaparecer con un efecto de cambio de opacidad.
*/

$(document).ready(function() {
    
    // Al hacer scroll sobre la página
    $(window).scroll(function() {
        // Verificar la posición del scroll
        if ($(this).scrollTop() > 100) { // Si el scroll supera los 100 píxeles
            $('#go-up').fadeIn('slow');
            
            $('header#home-header').css({
                'position': 'fixed',
                'width': '100%',
            }).animate({'opacity':'0.8'},500);
        } else {
            $('#go-up').fadeOut();
            
            $('header#home-header').css({
                'position': 'relative',
            }).animate({'opacity':'1'},500);
        }
    });
    
    $('#go-up').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

/*
(1 punto) FORMULARIO
a) (0,5puntos) En el formulario del chat, cuando un campo requerido pierda el foco se
debe comprobar si la longitud de dicho campo es 0. En caso afirmativo, debe
aparecer debajo de cada input, dentro de la etiqueta span, un mensaje en rojo
indicando este error. Cuando aparezca un nuevo error no se deben borrar los
anteriores.
b) (0,5puntos) El textarea del formulario tiene una limitación de 100 caracteres. Haz
que cada vez que se inserte un nuevo carácter, se informe al usuario del número
de caracteres restantes con un mensaje con el siguiente: “Dispone de 32
caracteres”.
*/

$(document).ready(function() {
    
    //Mientras esté vacio muestra el mensaje
    $("input").blur(function() {
      if ($(this).val().trim() === "") {
        $(this).next('.error-chat').css('visibility', 'visible'); // Mostrar mensaje de error
      }
    });
  
    // Cuando estamos en el input para escribir desaparece el mensaje, y no vuelve a parecer mientras no esté vacío
    $("input").focus(function() {
      $(this).next('.error-chat').css('visibility', 'hidden'); // Ocultar mensaje de error
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('mensaje');
    var contador = document.getElementById('info-caracteres');

    textarea.addEventListener('input', function() {
      var caracteresRestantes = textarea.maxLength - textarea.value.length;
      contador.textContent = 'Dispone de ' + caracteresRestantes + ' caracteres';
    });
  });
