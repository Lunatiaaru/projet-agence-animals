$(document).ready(function(){
    
$(".trip-photo").hover(function(){
    
    $(".fig-text" , this).stop().animate(
    {"top" : "0"},1500 ) ;
                               
    },
       function(){
      $(".fig-text" ,this).stop().animate(
          {"top" : "84%"} , 1500);
    
  }); // fin de hover

    
  $("#show-burger1, #show-burger-click").click(function(){ //alert("") sers a verifier si le code marche
    $("#wrap-navi").stop().animate({"left" : "0"});
    $(this).hide();
    $("#hide-burger1, #hide-burger-click").show();
      
  });
    $("#hide-burger1, #hide-burger-click").click(function(){
        $("#wrap-navi").stop().animate({"left" : "-100%"});
        $(this).hide();
        $("#show-burger1, #show-burger-click").show();
        
    });


   


}); //fin de ready