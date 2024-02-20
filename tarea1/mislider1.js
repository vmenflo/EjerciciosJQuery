$(document).ready(function(){

    var SliderModule = (function() {
        var pb = {}; //Creamos un objeto
        //Almacenamos nuestro #slider en el atributo elslider. 
        pb.elslider = $('#slider');
        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }

        // Interval del Slider
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;


        // Constructor del Slider
        pb.init = function(settings) {
            this.settings = settings || {duration:3000}
            var loscontroles = "";
            console.log('Mensaje');
            SliderInit();//Para inicializar el slider

            //Creamos los controles del Slider en tiempo de ejecución
            for(var i=0; i<lengthSlider; i++){
                if(i == 0){
                    loscontroles += '<li class="active"></li>';
                }else{
                    loscontroles +='<li></li>';
                }
            }
            //console.log(loscontroles);

            //Insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);           

            $('#control-buttons li').click(function(){
                //Al hacer clic vemos en la consola el índice
                //console.log($(this).index());
                //console.log(currentSlider);
                //console.log($(this).index());
                if(currentSlider !== $(this).index()){
                    cambiarPanel($(this).index());
                }
            });
        }

        //Función que inicializar el slider
        var SliderInit = function(){
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }
        
        pb.startSlider = function(){
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            //Controlamos si nos encontramos en el último panel 
            if (nextSlider >= lengthSlider){
                nextSlider=0;
                currentSlider=lengthSlider-1;
            }
            //EFECTOS
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');
            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            //Actualizamos las variables
            currentSlider=nextSlider;
            nextSlider += 1;    
        }

        //Función para los controles del Slider
        //Recibe el índice del panel a mostrar
        var cambiarPanel = function(indice){
            //Limpiar el intervalo previamente.
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            //Comprobamos que el índice esté disponible
            //dentro de los paneles del slider.
            if(indice >= lengthSlider){
                indice=0; //Para que no se pase de la cantidad de imágenes
            }else if (indice < 0){
                indice = lengthSlider - 1;
            }
            //EFECTOS
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');
            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            //El siguiente panel del slider es el que indique
            //el parámetro "indice"
            paneles.eq(indice).fadeIn('slow');

            //Actualizamos los datos 
            currentSlider = indice;
            nextSlider = indice + 1;

            //Reactivar el Slider
            SliderInit();
        }


        return pb; //Devolvemos el objeto pb
     }());//()) es para que se ejecute automáticamente.

        //SliderModule.init({duration:2000});
        //Llamada al constructor
        SliderModule.init();
});