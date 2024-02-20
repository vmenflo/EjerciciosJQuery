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