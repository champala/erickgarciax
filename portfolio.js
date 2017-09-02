$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$(document).ready(function(){
  var about = $(".about-txt");
  about.animate({fontSize: '1.5em'}, "slow");
});
