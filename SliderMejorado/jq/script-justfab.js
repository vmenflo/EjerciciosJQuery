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

/*Slider-Mejorado*/
$(document).ready(function () {

    var SliderModule = (function () {
        var pb = {}; //Creamos un objeto
        //Almacenamos nuestro #slider en el atributo elslider. 
        pb.elslider = $('#slider');
        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }

        pb.init = function (settings) {
            //console.log('Inicializado');
            SliderInit();
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        //Constructor del Slider
        pb.init = function (settings) {
            var loscontroles='';

            SliderInit();//Para inicializar el slider

            //Creamos los controles del slider
            for(var i=0;i<lengthSlider;i++){
                if(i==0){
                    loscontroles+='<li class="active"></li>';
                }else{
                    loscontroles+='<li></li>';
                }

            }
            //Insertamos los controles creados
            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').click(function () {
                //Al hacer clic vemos en la consola el indice
                console.log(currentSlider);
                console.log($(this).index());

                if(currentSlider!==$(this).index()){
                    cambiarPanel($(this).index());
                }
            })
        }
        //EJERCICIO 2- Controlamos que cuando pase el ratón por encima de la imagen se detenga
        pb.items.panels.mouseenter(function() {
            clearInterval(SliderInterval); // Si el ratón pasa por la imagen se deteiene el intervalo
        }).mouseleave(function() {
            SliderInit(); // Si el ratón sale, se activa de nuevo
        });

        //EJERCICIO 3- agregar botón anterior y siguiente y cambiar de imagen
        $(".anterior").click(function() {
            cambiarPanel(currentSlider - 1);
        });

        $(".siguiente").click(function() {
            cambiarPanel(currentSlider + 1);
        });

        //Funcion que inicializar el slider
        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, 3000);
        }
        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles=$('#control-buttons li');
            //console.log('Mensaje');
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }
            //Efectos
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la cesta a control del panel seleccionado
            controles.eq(nextSlider).addClass('active');

            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow')
            //console.log(nextSlider);
            //Actualizamos las variables
            currentSlider = nextSlider;
            nextSlider += 1;

        }
        

        //Función para los controles del Slider
        //Recibe el índice del panel a mostrar
        var cambiarPanel = function (indice) {
            //Limpiamos el intervalo previamente
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles =$('#control-buttons li');
            //Comprobamos que el indice esté disponible
            //Dentro de los paneles del slider.
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            //Efectos
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');
            //Efectos transicion
            paneles.eq(currentSlider).fadeOut('slow');

            paneles.eq(indice).fadeIn('slow');

            currentSlider = indice;
            nextslider = indice + 1;

            //Reactivar el slider
            SliderInit();
        }
        return pb;//Devolvemos el objeto pb
    }());
    //Llamamos al constructor
    SliderModule.init();

})

/*Ejercicio 5- al posicionarte en una bolita se muestre una miniatura*/
$(document).ready(function() {
    // Ocultar las miniaturas por defecto
    $('.miniaturas img').hide();

    // Mostrar miniatura al posicionar el ratón sobre la bolita de control
    $('.control-buttons li').hover(
        function() {
            var slideIndex = $(this).index();
            $('.miniaturas img').eq(slideIndex).show();
        },
        function() {
            $('.miniaturas img').hide();
        }
    );
});

/* EJERCICIO 6- Conseguir que al pinchar en una foto en miniatura se muestre en el slider*/
$(document).ready(function() {
    // Cuando pulses en una imagen del div bolitas
    $('.bolitas-fotos img').click(function() {
        // Obtener el índice de la imagen clicada
        var imageIndex = $(this).data('index');
        
        // Mostrar el panel correspondiente en el slider principal
        mostrarPanel(imageIndex);
    });

    // Función para mostrar el panel correspondiente en el slider principal
    function mostrarPanel(index) {
        // Ocultamos todos los paneles
        $('#slider .slider-wrapper > li').hide();

        // Mostrar solo el correspondiente a la imagen
        $('#slider .slider-wrapper > li').eq(index).fadeIn('slow');

        // Actualizar la clase activa en los controles de navegación
        $('#control-buttons li').removeClass('active');
        $('#control-buttons li').eq(index).addClass('active');
    }

    // Inicializar el slider mostrando el primer panel
    mostrarPanel(0);

    // Control de clic para los botones anterior y siguiente
    $('.anterior').click(function() { //Al pulsar en anterior retrocede el index
        var currentIndex = $('#control-buttons li.active').index();
        var newIndex = (currentIndex === 0) ? $('#control-buttons li').length - 1 : currentIndex - 1;
        mostrarPanel(newIndex);
    });

    $('.siguiente').click(function() {
        var currentIndex = $('#control-buttons li.active').index();
        var newIndex = (currentIndex === $('#control-buttons li').length - 1) ? 0 : currentIndex + 1;
        mostrarPanel(newIndex);
    });
});




















