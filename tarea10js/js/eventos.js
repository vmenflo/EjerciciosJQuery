

$(document).ready(function(){
    $('main > article > div > section > div.texto').css("display","none");
    
    $("main > article > div > section > div").click(function(){
        $('main > article > div > section > div.texto').fadeOut();
        $('main > article > div > section > div>div > svg:last-child').fadeIn();
        if($(this).siblings('.texto').css("display")=="none"){
            $(this).siblings('.texto').fadeIn();
            $(this).children().children('svg:last-child').fadeOut();
        }else{
            $(this).siblings('.texto').fadeOut();
            $(this).children().children('svg:last-child').fadeIn();
        }
    
    
   })


});